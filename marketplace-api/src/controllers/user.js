import Models from 'helpers/repositories';
import configuration from 'configuration';
import jwt from 'jsonwebtoken';
import Referential from 'helpers/repositories/referential';

export function login(req, res) {
  const { User, Role, PermissionRole } = Models(req.tenant);
  User.findOne({
    where: {
      email: req.body.username,
      password: User.hash(req.body.password),
    },
    include: [
      {
        model: Role,
        as: 'role',
        include: [
          {
            model: PermissionRole,
            as: 'permissions',
          },
        ],
      },
    ],
    attributes: {
      exclude: ['password'],
    },
  }).then(user => {
    if (!user) {
      return res.status(401).json({ message: 'Username/Password Mismatch' });
    }
    res.json(
      user.parse()
    );
  }).catch(err => {
    console.error(err);
  });
}

export function get(req, res, next) {
  const id = req.swagger.params.id.value;
  // TODO: Move this to the approach Repository/Driver
  new Referential(req.tenant, req.user.idUser)
    .get({
      endpoint: `accounts/${id}`,
    })
    .then(user => {
      const appId = configuration.get(req.tenant).appId;
      return Promise.resolve(parse(user, appId));
    })
    .then(user => {
      res.json(user);
    })
    .catch(next);
}

export function authorize(req, res, next) {
  const configs = configuration.get(req.tenant);
  const isValid = Object.keys(configs.clients).reduce((valid, c) => {
    return (
      valid || !!(configs.clients[c] === req.body.secret)
    );
  }, false);
  if (!isValid) {
    return res.status(403).json({
      message: 'Authorization required',
      statusCode: 401,
      code: 'server_error',
    });
  }
  // TODO: Move this to athe approach Repository/Driver
  new Referential(req.tenant, req.body.idUser)
    .get({
      endpoint: `accounts/${req.body.idUser}`,
    })
    .then(user => {
      const appRoles = user.applicationRoles.find(app => app.applicationId === configs.appId);
      if (!appRoles || appRoles.roleIds.length === 0) {
        const err = new Error('invalid user for this application');
        err.statusCode = 403;
        throw err;
      }
      const idRole = appRoles.roleIds[0];
      const { PermissionRole } = Models(req.tenant);
      return PermissionRole.findAll({
        where: {
          idRole,
        },
      });
    })
    .then(permissions => {
      const token = jwt.sign({
        idUser: req.body.idUser,
        permissions: permissions.map(p => p.idPermission),
      },
      configuration.get(req.tenant).secret, {
        expiresIn: '1y',
      });
      // res.cookie('mkp', token, { maxAge: 90000000, httpOnly: true });
      res.json({
        token,
      });
    })
    .catch(err => {
      next(err);
    });
}

export function connect(req, res) {
  jwt.verify(req.body.token, configuration.get(req.tenant).secret, err => {
    if (err) {
      res.status(401).json(err);
    }
    res.cookie('mkp', req.body.token, { maxAge: 90000000, httpOnly: true });
    res.json({});
  });
}

export function parse(referentialUser, appId) {
  const { groups, applicationRoles, ...user } = referentialUser;
  return {
    ...user,
    groups: groups.map(({ id, name }) => ({ id, name })),
    role: applicationRoles.find(app => app.applicationId === appId).roles,
  };
}
