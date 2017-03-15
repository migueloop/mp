import config from 'config';
import { Router } from 'express';
import Actions from 'flux/actions';
import EmailRepository from 'repositories/email';
import ensureLogin from 'middleware/authentication-middleware';
import passport from 'passport';
const router = Router();

router.all('/logout', ensureLogin, (req, res) => {
  if (req.user) {
    req.logout();
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    req.passport._strategy('sso').endSession(req, res);
    // set the header again in order that if BROWSER's BACK BUTTON is pressed, the user can't see the back-office again

    // res.end();
  }
});

router.post('/register', (req, res, next) => {
  const tenant = req.store.getState().get('tenant');
  const company = req.body.company;
  const transport = config.get(tenant).mail.nodemailerTransport;
  const emailRepository = new EmailRepository(tenant, transport);
  new Actions(tenant).Users.Register(Object.assign({}, req.body))
  .then(action => req.promisedLogin(action.user))
  .then(u => company ? new Actions(tenant).Users.ConvertUserToEditor(u, company) : Promise.resolve())
  .then(() => emailRepository.sendNewUserNotifications({ req }))
  .then(() => res.status(203).json(req.user))
  .catch(e => { throw e; });
});

router.post('/local', passport.authenticate('local'), (req, res) => req.user ? res.json(req.user) : res.status(401).send('Unauthorized'));
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => res.redirect('/'));

export default router;


// todo: move the first if branch of this to a separate action
// if (req.user && req.user.id) {
//   console.log('updating user');
//   if (!req.body.company) {
//     return res.status(501).end('Company required');
//   }
//   return new Actions(req.tenant).Users.ConvertUserToEditor(req.user, Object.assign({}, req.body.company))
//   .then(action => req.login(req.user))
//   .then(u => res.status(203).json(u));
// }
