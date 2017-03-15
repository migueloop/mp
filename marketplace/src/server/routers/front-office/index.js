import { Router } from 'express';
import config from 'config';
const router = Router();

router.get('/*', (req, res, next) => {
  console.log('[DEBUG] FrontOffice Router');
  const tenant = req.store.getState().get('tenant');
  if (config.get(tenant).private && !req.isAuthenticated() && !req.url.match(/^\/login/)) {
    return res.redirect('/login');
  }
  res.render();
});
export default router;
