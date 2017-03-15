import { Router } from 'express';
import React from 'react';
import UserRepository from 'repositories/user';
import emailRepository from 'repositories/email';
import ReactHTMLEmail from 'react-html-email';
import config from 'config';
import {
  renderNewUserNotification,
  renderProductPublishedNotification,
  renderUserValidatedNotification,
  renderProductPublicationRequestedNotification,
  renderBundlePublicationRequestedNotification,
  renderAssignmentRequestedNotification,
  renderAssignmentValidatedNotification,
  renderAssignmentValidatedNotificationToSupplier,
  renderPoGenEmail,
} from '../email/renderer';
const router = Router();

const templateList = [
  'http://localhost:3000/emails/new-user-notification?subject=HP - Nouvelle inscription&tenant=HP&content=Test%20email%20content&tenantUrl=https://mobility-for-work.com&lastname=Decoster&name=Elizabeth&society=NORCOD&siret=123455649857&activityFields[]=education&activityFields[]=health&sex=M',
  'http://localhost:3000/emails/user-validated-notification?subject=HP - Inscription validée&tenant=HP&tenantUrl=https://hp.marketplace.com',
  'http://localhost:3000/emails/product-publication-requested-notification?subject=HP - Publication souhaitée&name=John&lastname=Smith&siret=1234-55678-91234&companyName=Test%20Company&corners[]=Corner%201&corners[]=Corner%202&corners[]=Corner%203&tenant=HP&tenantUrl=https://hp.tenant.com&sex=M&productName=A Great Product',
  'http://localhost:3000/emails/product-published-notification?subject=HP - Produit publié&productName=Some%20product%20name!&productUrl=https://some-product.com&tenant=HP',
  'http://localhost:3000/emails/bundle-publication-requested-notification?subject=HP - Publication souhaitée&name=John&lastname=Smith&corners[]=Corner%201&corners[]=Corner%202&corners[]=Corner%203&tenant=HP&tenantUrl=https://hp.tenant.com&sex=M&bundleName=A Great Bundle',
  'http://localhost:3000/emails/assignment-requested-notification?subject=HP - Nouvelle dotation&tenant=HP&tenantUrl=https://hp.marketplace.com&assignorFirstname=Gerard&assignorLastname=Depardieu&assigneeFirstname=Johnny&assigneeLastname=Depp',
  'http://localhost:3000/emails/assignment-validated-notification?subject=HP - Dotation validée&tenant=HP&tenantUrl=https://hp.marketplace.com&assigneeLastname=Garcia&assigneeFirstname=Carlos&productName=A Wonderful Product',
  'http://localhost:3000/emails/assignment-validated-notification-to-supplier?subject=HP - Dotation validée&tenant=HP&tenantUrl=https://hp.marketplace.com&assigneeLastname=Garcia&assigneeFirstname=Carlos&assignorLastname=Depardieu&assignorFirstname=Jerry&productName=Wonderful Product&downloadUrl=https://www.nexica.com/sites/all/themes/nexica2015/logo.png',
  // 'http://localhost:3000/emails/po-gen?subject=HP - Nouvelle inscription&tenant=HP&tenantUrl=https://hp.marketplace.com&assigneeLastname=Garcia&assigneeFirstname=Carlos&downloadUrl=http://theintuiteevmarketplace.com/wp-content/themes/intuiteev/img/logo.png&productName=Great Product&orderId=1234-55678',
];
router.get('/list', (req, res, next) => {
  const listItems = templateList.map(link => `<li><a href="${link}">${link}</a><br><br></li>`).join('');
  const emailLinkList = `<ul>${listItems}</ul>`;
  return res.send(emailLinkList);
});

router.get('/new-user-notification', (req, res, next) => {
  const emailHTML = renderNewUserNotification(req.query);
  res.send(emailHTML);
});

router.get('/product-published-notification', (req, res, next) => {
  const emailHTML = renderProductPublishedNotification(req.query);
  res.send(emailHTML);
});

router.get('/user-validated-notification', (req, res, next) => {
  const emailHTML = renderUserValidatedNotification(req.query);
  res.send(emailHTML);
});
router.get('/product-publication-requested-notification', (req, res, next) => {
  const emailHTML = renderProductPublicationRequestedNotification(req.query);
  res.send(emailHTML);
});
router.get('/bundle-publication-requested-notification', (req, res, next) => {
  const emailHTML = renderBundlePublicationRequestedNotification(req.query);
  res.send(emailHTML);
});
router.get('/assignment-requested-notification', (req, res, next) => {
  const emailHTML = renderAssignmentRequestedNotification(req.query);
  res.send(emailHTML);
});
router.get('/assignment-validated-notification', (req, res, next) => {
  const emailHTML = renderAssignmentValidatedNotification(req.query);
  res.send(emailHTML);
});
router.get('/assignment-validated-notification-to-supplier', (req, res, next) => {
  const emailHTML = renderAssignmentValidatedNotificationToSupplier(req.query);
  res.send(emailHTML);
});
router.get('/po-gen', (req, res, next) => {
  const emailHTML = renderPoGenEmail(req.query);
  res.send(emailHTML);
});
router.get('/test', (req, res, next) => {
  new UserRepository('shakira').getWithPermissions(req.query.permissions)
  .then(users => res.json(users))
  .catch(err => res.status(400).json(err));
});
router.get('/send-test', (req, res, next) => {
  const tenant = 'shakira';
  const transport = config.get(tenant).mail.nodemailerTransport;
  const data = {
    req,
    action: {
      user: {
        // email: '12345@intuiteev.io',
        email: 'rupert.rutland@digitaldimension.es',
      },
    },
  };
  new emailRepository(tenant, transport).sendPoGenEmail(data)
  .then(users => res.json(users))
  .catch(err => res.status(400).json(err));
});

export default router;
