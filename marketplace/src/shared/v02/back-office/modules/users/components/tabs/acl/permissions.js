import React from 'react';
import Components from 'v02/common/generic-components/base-component';
import connect from 'react-redux/lib/components/connect';
import Actions from 'flux/actions';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Input from 'react-bootstrap/lib/Input';
import PERMISSIONS, { CATEGORY } from 'helpers/constants/permissions';
import { flattenPermissions, flattenExcludedPermissions, validatePermission } from 'helpers/permissions';
import { FormattedMessage } from 'react-intl';

const connector = connect(state => ({
  tenant: state.get('v02').get('common').get('tenant').get('name'),
  roles: state.get('backoffice').get('roles'),
  notification: state.get('notification'),
}));

const permissionsToArray = permissions => {
  let permissionArray = [];
  for (const key in permissions) {
    if ({}.hasOwnProperty.call(permissions, key)) {
      permissionArray = permissionArray.concat(permissions[key]);
    }
  }
  return permissionArray;
};

class Permissions extends Components {

  constructor(props) {
    super(props);
    this.state = this.fetchRoles(props);
  }

  componentWillReceiveProps(props) {
    this.setState(this.fetchRoles(props));
  }

  fetchRoles(props) {
    const role = props.roles.toJS().find(r => r.id === parseInt(this.props.params.id, 10));
    return {
      role,
      permissions: Object.keys(PERMISSIONS).map(permission => ({
        ...PERMISSIONS[permission],
        enabled: !!role.permissions.includes(permission),
      })).reduce((prev, permission) => {
        const category = permission.category.toLowerCase();
        if (!prev[category]) {
          prev[category] = [];
        }
        prev[category].push(permission);
        return prev;
      }, {}),
    };
  }

  onChange = ({ target: { value } }) => this.navigate(`/admin/users/acl/edit/${this.props.params.id}/${value}`)

  updatePermission = permission => ({ target }) => {
    target.disabled = true;
    const activePermissions = permissionsToArray(this.state.permissions).filter(op => op.enabled);
    const addPermission = permission.enabled === false;
    if (addPermission) {
      const permissionValidation = validatePermission(activePermissions, permission);
      if (!permissionValidation.valid && !permission.enabled) {
        const permissionConflicts = permissionValidation.errors.map(pv => `${pv.permission.id}\nconflicts with:\n${pv.conflictsWith.map(cw => cw.id).join(', ')}`).join('\n\n');
        const alertMsg = `PERMISSION CONFLICTS

  The following permissions would be excluded by the permission you are trying to add:

  ${permissionConflicts}`;
        alert(alertMsg);
        target.disabled = false;
        return;
      }
    }
    const newActivePermissions = addPermission ? activePermissions.concat(flattenPermissions([permission])) : [].concat(activePermissions.slice(0, activePermissions.indexOf(permission)), activePermissions.slice(activePermissions.indexOf(permission) + 1));
    new Actions(this.props.tenant).BackOffice.Acl.updateRolePermissions({
      role: this.state.role.id,
      permissions: newActivePermissions.map(p => p.id),
    })
    .then(action => {
      this.props.dispatch(action);
      this.props.notification.add({ message: 'Save Successful', level: 'success' });
      target.disabled = false;
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
      console.log(err.stack);
      console.log(err.trace);
      this.props.notification.add({ message: 'An error occurred', level: 'error' });
      target.disabled = false;
    });
  }

  updateName = ({ target }) => {
    new Actions(this.props.tenant).BackOffice.Acl.update({
      role: this.state.role.id,
      name: this.state.role.name,
    })
    .then(action => {
      this.props.dispatch(action);
      this.props.notification.add({
        message: 'Save Successful',
        level: 'success',
      });
      target.disabled = false;
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
      console.log(err.stack);
      console.log(err.trace);
      this.props.notification.add({
        message: 'An error occurred',
        level: 'error',
      });
      target.disabled = false;
    });
  }

  getPermissionUrl = (permissionId, roleId) => {
    console.log('permissionId', permissionId);
    console.log('roleId', roleId);
    if (permissionId !== PERMISSIONS.ACCESS_BI360_FOLLOW_UPS.id) {
      return 'No match';
    }
    switch (roleId) {
      case 22: // Gestionaire
        return 'https://sncf-bi360.digitaldimension.services/Dashboard?DashboardId=1';
      case 24: // Manager
        return 'https://sncf-bi360.digitaldimension.services/Dashboard?DashboardId=2';
      case 18: // End user
        return 'https://sncf-bi360.digitaldimension.services/Dashboard?DashboardId=3';
      default:
        return 'Default';
    }
  }

  render() {
    const formattedMessage = this.context.intl.formatMessage;
    const activePermissions = permissionsToArray(this.state.permissions).filter(p => p.enabled);
    const excludedPermissions = flattenExcludedPermissions(activePermissions);
    const roles = this.state.permissions[this.props.params.category.toLowerCase()].map(permission => {
      const urlText = this.getPermissionUrl(permission.id, this.state.role.id);
      return (
        <Row className="rows-alt" >
          <Col xs={3}>
            <FormattedMessage id={permission.id} />
          </Col>
          <Col xs={8}>
            { permission.hasUrl &&
              <input disabled style={{ width: '100%' }} type="text" value={urlText} />
            }
          </Col>
          <Col xs={1}>
            <input id={`row${permission.id}`} onChange={this.updatePermission(permission)} type="checkbox" checked={permission.enabled} disabled={ excludedPermissions.map(p => p.id).indexOf(permission.id) !== -1 } />
          </Col>
      </Row>
    );
    });
    return (
      <Row>
        <Col md={9}>
          <Input type="text" value={this.state.role.name}
            onChange={({ target: { value } }) => {this.setState({ role: { ...this.state.role, name: value } });}}
            onBlur={this.updateName}
            />
          <div style={{ border: '1px solid #f5f5f5', borderRadius: 3, padding: '0 15px' }}>
            {roles}
          </div>
        </Col>
        <Col md={3}>
          <div className="mp-sidebar">
            <Input
              value={this.props.params.category.toLowerCase()}
              type="select"
              label={formattedMessage({ id: 'select_role' })}
              placeholder="select"
              onChange={this.onChange}
            >
                {Object.keys(CATEGORY).map(category => (
                  <option key={CATEGORY[category]} value={CATEGORY[category].toLowerCase()}>
                     {`${CATEGORY[category]} - ${this.state.permissions[CATEGORY[category].toLowerCase()].filter(p => p.enabled).length}/${this.state.permissions[CATEGORY[category].toLowerCase()].length}` }
                  </option>
                ))}
                </Input>
          </div>
        </Col>
      </Row>
    );
  }
}

const _components = {
  default: connector(Permissions),
};

export default class TenantProxy {
  static get(tenant) {
    return _components[tenant] ? _components[tenant] : _components.default;
  }
}
