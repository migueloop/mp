const time = +new Date;
const _ = require('underscore');
const elementWaitTime = 20000;
// const domain = 'http://uat.mobility-for-work.com';
const domain = 'http://localhost:3000';
const clickTimes = 100;
function guid(prefix) {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return prefix + s4() + s4() + s4() + s4() + s4();
}

function logOutUser(browser) {
  browser
  .url(`${browser.launchUrl}/admin`)
  .waitForElementVisible('.mp-main .container', elementWaitTime)
  .click('.connected-user .dropdown.btn-group')
  .waitForElementVisible('#logoutButton', elementWaitTime)
  .click('#logoutButton')
  .pause(1000);
}
const bartEmail = `${guid('email_')}@intuiteev.io`;
const newUserEmail = `${guid('email_')}@intuiteev.io`;

module.exports = {
  'Register as new user': (browser) => {
    browser
    .url(browser.launchUrl)
    .click('#register-link')
    .waitForElementVisible('input[name=sex]', elementWaitTime)
    .click('input[name=sex]')
    .setValue('input[name=lastname]', guid('lastname_'))
    .setValue('input[name=name]', guid('name_'))
    .setValue('input[name=display_name]', guid('display_name_'))
    // should be random enough...
    .setValue('input[name="company.siret"]', _.random(10000000000000, 99999999999999999))
    .click('body')
    .pause(1000)
    .waitForElementVisible('input[name="company.name"]', elementWaitTime)
    .setValue('input[name="company.name"]', guid('company_name_'))
    .setValue('input[name=email]', newUserEmail)
    .setValue('input#passwordInput', 'password')
    .setValue('input#passwordConfirmationInput', 'password')
    .click('#submitButton')
    .waitForElementVisible('.notification.notification-success', elementWaitTime);
  },
  'Log out new user': (browser) => logOutUser(browser),
  'Attempt login as non-existent user': (browser) => {
    browser
    .waitForElementVisible('.icono-user', elementWaitTime)
    .click('.icono-user')
    .waitForElementVisible('#loginForm', elementWaitTime)
    .setValue('#loginForm input[name=username]', 'idontexist@intuiteev.io')
    .setValue('#loginForm input[name=password]', 'password')
    .click('#loginForm button[type=submit]')
    .waitForElementVisible('.notification.notification-error', elementWaitTime);
  },
  'Login as Bob': (browser) => {
    browser
    .clearValue('#loginForm input[name=username]')
    .clearValue('#loginForm input[name=password]')
    .setValue('#loginForm input[name=username]', 'bob@intuiteev.io')
    .setValue('#loginForm input[name=password]', 'bobintuiteev')
    .click('#loginForm button[type=submit]')
    .waitForElementVisible('.notification.notification-success', elementWaitTime);
  },
  'Create Product': (browser) => {
    browser
    .url(`${browser.launchUrl}/admin/products`)
    .waitForElementVisible('#create-product', elementWaitTime)
    .click('#create-product')
    .waitForElementVisible('input[name=name]', elementWaitTime)
    .click('input[name=name]')
    .pause(1000)
    .setValue('input[name=name]', `Nightwatch product ${time}`)
    .click('body')
    .waitForElementVisible('.notification.notification-success', elementWaitTime)
    .click('.cornersMultiselect')
    .waitForElementVisible('.cornersMultiselect .dropdown-menu', elementWaitTime)
    // add a few corners
    .keys([browser.Keys.DOWN_ARROW, browser.Keys.ENTER, browser.Keys.ENTER])
    .click('body')
    .click('.photo.u-photo')
    .waitForElementVisible('.keywordsMultiselect', elementWaitTime)
    .click('.keywordsMultiselect')
    .waitForElementVisible('.keywordsMultiselect .dropdown-menu', elementWaitTime)
    // add a few keywords
    .keys([browser.Keys.DOWN_ARROW, browser.Keys.ENTER, browser.Keys.ENTER])
    .click('.descriptionHtmlEditor')
    .pause(1000)
    .keys('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'.split(''))
    .click('body')
    .click('a.features')
    .waitForElementVisible('.product-bo-languages', elementWaitTime)
    .setValue('.versionInput', '2.0')
    .pause(500)
    .click('a.editor')
    .waitForElementVisible('.editorLegalMentionsInput', elementWaitTime)
    .setValue('.editorLegalMentionsInput', 'https://fr.wikipedia.org/wiki/%C3%89diteur_de_logiciel')
    .click('body')
    .pause(500);
  },
  'Request Product Validation': (browser) => {
    browser
    .waitForElementVisible('#products-overview', elementWaitTime)
    .click('#products-overview')
    .waitForElementVisible('.pagination.pagination-sm', elementWaitTime)
    .useXpath();
    // This should be enough to get to the last page (we only show a few links)
    _.times(clickTimes, () => browser.click('//ul[contains(concat(" ", @class, " "), " pagination ")]//li[last()-1]/a'));
    browser
    .click('//tr[td[contains(., "draft")]][last()]/td[last()]/div/div/div[last()]/div/button')
    .useCss()
    .pause(500)
    .assert.containsText('.open.dropdown.btn-group ul li:nth-child(2) button div:last-child', 'Demander la publication')
    .click('.open.dropdown.btn-group ul li:nth-child(2) button')
    .pause(500)
    .assert.containsText('.open.dropdown.btn-group ul li:nth-child(2) button div:last-child', 'Retirer');
  },
  'Log out Bob': (browser) => logOutUser(browser),
  'Login as Dede': (browser) => {
    browser
    .waitForElementVisible('.icono-user', elementWaitTime)
    .click('.icono-user')
    .waitForElementVisible('#loginForm', elementWaitTime)
    .setValue('#loginForm input[name=username]', 'dede@intuiteev.io')
    .setValue('#loginForm input[name=password]', 'dedeintuiteev')
    .click('#loginForm button[type=submit]')
    .waitForElementVisible('.notification.notification-success', elementWaitTime);
  },
  'Validate Product': (browser) => {
    browser
    .url(`${browser.launchUrl}/admin/products`)
    .waitForElementVisible('.pagination.pagination-sm', elementWaitTime)
    .useXpath();
    _.times(clickTimes, () => browser.click('//ul[contains(concat(" ", @class, " "), " pagination ")]//li[last()-1]/a'));
    // This should be enough to get to the last page (we only show a few links)
    browser
    .click('//tr[td[contains(., "pending")]][last()]/td[last()]/div/div/div[last()]/div/button')
    .useCss()
    .pause(500)
    .assert.containsText('.open.dropdown.btn-group ul li:nth-child(2) button div:last-child', 'Validate')
    .click('.open.dropdown.btn-group ul li:nth-child(2) button')
    .pause(500)
    .assert.containsText('.open.dropdown.btn-group ul li:nth-child(2) button div:last-child', 'Retirer');
  },
  'Create Corner': (browser) => {
    browser
    .waitForElementVisible('#corner-overview', elementWaitTime)
    .click('#corner-overview')
    .waitForElementVisible('#create-corner', elementWaitTime)
    .click('#create-corner')
    .waitForElementVisible('input[name=title]', elementWaitTime)
    .clearValue('input[name=title]')
    .click('input[name=title]')
    .pause(1000)
    .setValue('input[name=title]', `Fake Domaine ${time}`)
    .click('textarea[name=description]')
    .pause(1000)
    .setValue('textarea[name=description]', 'A so beautiful domaine for Automated user testing')
    .click('.react-selectize')
    .keys(['F', 'A', 'K', 'E', browser.Keys.ENTER])
    .keys(['L', 'o', 'r', 'e', 'm', ' ', 'I', 'p', 's', 'u', 'm', browser.Keys.ENTER])
    .keys(['A', 'u', 't', 'o', 'm', 'a', 't', 'e', 'd', browser.Keys.ENTER])
    .pause(1000)
    .click('body')
    .pause(1000)
    .waitForElementVisible('.notification.notification-success', elementWaitTime)
    .pause(1000)
    .click('body')
    .pause(1000);
  },
  'Create a Bart user': (browser) => {
    browser
    .waitForElementVisible('#users-overview', elementWaitTime)
    .click('#users-overview')
    .waitForElementVisible('#create-users', elementWaitTime)
    .click('#create-users')
    .waitForElementVisible('input[name=sex]', elementWaitTime)
    .click('input[name=sex]')
    .setValue('input[name=lastname]', guid('lastname_'))
    .setValue('input[name=name]', guid('name_'))
    .setValue('input[name=display_name]', guid('display_name_'))
    // should be random enough...
    .setValue('input[name="company.siret"]', _.random(10000000000000, 99999999999999999))
    .click('body')
    .pause(1000)
    .waitForElementVisible('input[name="company.name"]', elementWaitTime)
    .setValue('input[name="company.name"]', guid('company_name_'))
    .setValue('input[name=email]', bartEmail)
    .setValue('input[name=password]', 'password')
    .setValue('input[name=passwordConfirmation]', 'password')
    .click('#submitButton')
    .waitForElementVisible('.notification.notification-success', elementWaitTime);
  },
  'Log out Dede': (browser) => logOutUser(browser),
  'Login as Bart': (browser) => {
    browser
    .waitForElementVisible('.icono-user', elementWaitTime)
    .click('.icono-user')
    .waitForElementVisible('#loginForm', elementWaitTime)
    .setValue('#loginForm input[name=username]', bartEmail)
    .setValue('#loginForm input[name=password]', 'password')
    .click('#loginForm button[type=submit]')
    .waitForElementVisible('.notification.notification-success', elementWaitTime);
  },
  'Create Article': (browser) => {
    browser
    .waitForElementVisible('body', elementWaitTime)
    .url(`${browser.launchUrl}/admin/articles`)
    .waitForElementVisible('#create-article', elementWaitTime)
    .click('#create-article')
    .waitForElementVisible('header input', elementWaitTime)
    .click('header input')
    .pause(1000)
    .setValue('header input', `Fake article ${time}`)
    .setValue('input[name=baseline]', 'Fake Article – Automated user testing')
    .click('body')
    .waitForElementVisible('.notification.notification-success', elementWaitTime)
    .click('.corners-multiselect')
    .waitForElementVisible('.corners-multiselect .dropdown-menu', elementWaitTime)
    // add a few corners
    .keys([browser.Keys.DOWN_ARROW, browser.Keys.ENTER, browser.Keys.ENTER])
    .click('body')
    .click('.keywords-multiselect')
    .waitForElementVisible('.keywords-multiselect .dropdown-menu', elementWaitTime)
    // add a few keywords
    .keys([browser.Keys.DOWN_ARROW, browser.Keys.ENTER, browser.Keys.ENTER])
    .click('.article-bo-resume-div')
    .pause(1000)
    .keys('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'.split(''))
    .click('body')
    .click('a.editor')
    .waitForElementVisible('input[name=editor_legal_mentions]', elementWaitTime)
    .setValue('input[name=editor_legal_mentions]', 'http://generateur-de-mentions-legales.com/')
    .pause(500)
    .click('body')
    .pause(1000);
  },
  'Request Article Validation': (browser) => {
    browser
    .url(`${browser.launchUrl}/admin/articles`)
    .waitForElementVisible('.pagination.pagination-sm', elementWaitTime)
    .useXpath();
    // This should be enough to get to the last page (we only show a few links)
    _.times(clickTimes, () => browser.click('//ul[contains(concat(" ", @class, " "), " pagination ")]//li[last()-1]/a'));
    browser
    .waitForElementVisible('//tr[td[contains(., "draft")]][last()]/td[last()]/div/div/div[last()]/div/button', elementWaitTime)
    .click('//tr[td[contains(., "draft")]][last()]/td[last()]/div/div/div[last()]/div/button')
    .useCss()
    .pause(500)
    .assert.containsText('.open.dropdown.btn-group ul li:nth-child(1) button div:last-child', 'Demand Publication')
    .waitForElementVisible('.open.dropdown.btn-group ul li:nth-child(1) button', elementWaitTime)
    .click('.open.dropdown.btn-group ul li:nth-child(1) button')
    .pause(500)
    .assert.containsText('.open.dropdown.btn-group ul li:nth-child(1) button div:last-child', 'Retirer');
  },
  'Log out Bart': (browser) => logOutUser(browser),
  'Login as Dede for the second time': (browser) => {
    browser
    .url(browser.launchUrl)
    .waitForElementVisible('.icono-user', elementWaitTime)
    .click('.icono-user')
    .waitForElementVisible('#loginForm', elementWaitTime)
    .setValue('#loginForm input[name=username]', 'dede@intuiteev.io')
    .setValue('#loginForm input[name=password]', 'dedeintuiteev')
    .click('#loginForm button[type=submit]')
    .waitForElementVisible('.notification.notification-success', elementWaitTime);
  },
  // // 'Validate Article': (browser) => {
  // //   browser
  // //   .url(domain + '/admin/articles')
  // //   .waitForElementVisible('.pagination.pagination-sm', elementWaitTime)
  // //   .useXpath();
  // //   _.times(clickTimes, () => browser.click('//ul[contains(concat(" ", @class, " "), " pagination ")]//li[last()-1]/a'));
  // //   // This should be enough to get to the last page (we only show a few links)
  // //   browser
  // //   .click('//tr[td[contains(., "pending")]][last()]/td[last()]/div/div/div[last()]/div/button')
  // //   .useCss()
  // //   .pause(500)
  // //   .assert.containsText('.open.dropdown.btn-group ul li:nth-child(1) button div:last-child', 'Validate')
  // //   .click('.open.dropdown.btn-group ul li:nth-child(1) button')
  // //   .pause(500)
  // //   .assert.containsText('.open.dropdown.btn-group ul li:nth-child(1) button div:last-child', 'Retirer');
  // // },
  // 'Create Bundle': (browser) => {
  //   browser
  //   .waitForElementVisible('body', elementWaitTime)
  //   .url(`${browser.launchUrl}/admin/content/bundles`)
  //   .waitForElementVisible('#btn-create-bundle', elementWaitTime)
  //   .click('#btn-create-bundle')
  //   .waitForElementVisible('header input', elementWaitTime)
  //   .clearValue('header input');
  //   browser.globals.tmpBundleTitle = guid('_bundle');
  //   browser
  //   .setValue('header input', `Fake ${browser.globals.tmpBundleTitle}`)
  //   .click('body')
  //   .waitForElementVisible('.notification.notification-success', elementWaitTime)
  //   .waitForElementVisible('input[name=baseline', elementWaitTime)
  //   .setValue('input[name=baseline]', 'Fake Bundle – Automated user testing')
  //   .click('body')
  //   .waitForElementVisible('.notification.notification-success', elementWaitTime)
  //   .waitForElementVisible('.corners-multiselect', elementWaitTime)
  //   .click('.corners-multiselect')
  //   .waitForElementVisible('.corners-multiselect .dropdown-menu', elementWaitTime)
  //   // add a few corners
  //   .keys([browser.Keys.DOWN_ARROW, browser.Keys.ENTER, browser.Keys.ENTER])
  //   .click('body')
  //   .waitForElementVisible('.notification.notification-success', elementWaitTime)
  //   .click('.keywords-multiselect')
  //   .waitForElementVisible('.keywords-multiselect .dropdown-menu', elementWaitTime)
  //   // add a few keywords
  //   .keys([browser.Keys.DOWN_ARROW, browser.Keys.ENTER, browser.Keys.ENTER])
  //   .click('body')
  //   .waitForElementVisible('.notification.notification-success', elementWaitTime)
  //   .waitForElementVisible('#create-bundle-description', elementWaitTime)
  //   .setValue('#create-bundle-description', `Fake bundle description ${time}`)
  //   .click('body')
  //   .waitForElementVisible('.notification.notification-success', elementWaitTime)
  //   .waitForElementVisible('.carousel', elementWaitTime)
  //   .click('.carousel')
  //   .waitForElementVisible('.modal-select-resource', elementWaitTime)
  //   .waitForElementVisible('.close-modal', elementWaitTime)
  //   .click('.close-modal')
  //   .pause(1000)
  //   .click('.close-modal')
  //   .pause(1000)
  //   .click('body')
  //   .waitForElementNotPresent('.modal-select-resource', elementWaitTime)
  //   .waitForElementVisible('.item-header-logo', elementWaitTime)
  //   .click('.item-header-logo')
  //   .waitForElementVisible('#popoverUpdateLogo .btn-info', elementWaitTime)
  //   .click('#popoverUpdateLogo .btn-info')
  //   .waitForElementVisible('.modal-select-resource', elementWaitTime)
  //   .waitForElementVisible('.close-modal', elementWaitTime)
  //   .click('.close-modal')
  //   .pause(1000)
  //   .click('.close-modal')
  //   .pause(1000)
  //   .waitForElementVisible('body', elementWaitTime)
  //   .click('body')
  //   .waitForElementNotPresent('.modal-select-resource', elementWaitTime)
  //   .waitForElementVisible('.bundle-menu-composition', elementWaitTime)
  //   .click('.bundle-menu-composition')
  //   .pause(1000)
  //   .click('.bundle-menu-composition')
  //   .pause(1000)
  //   .waitForElementVisible('.select-bundle-component', elementWaitTime)
  //   .waitForElementVisible('.thumbnail-component-image:first-child', elementWaitTime)
  //   .click('.thumbnail-component-image:first-child')
  //   .waitForElementVisible('#modal-select-product', elementWaitTime)
  //   .getAttribute('#modal-select-product .mp-products .product:first-child img', 'src', imgSrc => {
  //     browser
  //     .waitForElementVisible('#modal-select-product .mp-products .product:first-child', elementWaitTime)
  //     .click('#modal-select-product .mp-products .product:first-child')
  //     .waitForElementNotPresent('#modal-select-product', elementWaitTime)
  //     .waitForElementVisible('.select-bundle-component', elementWaitTime)
  //     .pause(1000)
  //     .assert.attributeEquals('.thumbnail-component-image:first-child', 'src', imgSrc.value);
  //   })
  //   .moveToElement('.thumbnail-component-image:first-child', 10, 10)
  //   .pause(1000)
  //   .waitForElementVisible('.thumbnail-component-img .hover-actions .btn-danger', elementWaitTime)
  //   .click('.thumbnail-component-img .hover-actions .btn-danger')
  //   .pause(3000)
  //   .assert.attributeEquals('.thumbnail-component-image:first-child', 'src', `${domain}/public/images/placeholders/image_add.png`)
  //   .waitForElementVisible('.thumbnail-component-image:first-child', elementWaitTime)
  //   .click('.thumbnail-component-image:first-child')
  //   .waitForElementVisible('#modal-select-product', elementWaitTime)
  //   .getAttribute('#modal-select-product .mp-products .product:first-child img', 'src', imgSrc => {
  //     browser
  //     .click('#modal-select-product .mp-products .product:first-child')
  //     .waitForElementNotPresent('#modal-select-product', elementWaitTime)
  //     .waitForElementVisible('.select-bundle-component', elementWaitTime)
  //     .pause(1000)
  //     .assert.attributeEquals('.thumbnail-component-image:first-child', 'src', imgSrc.value);
  //   });
  // },
  // // 'Validate bundle': (browser) => { +
  // //   browser
  // //     .url(domain + '/admin/content/bundles')
  // //     .useXpath();
  // //   // This should be enough to get to the last page (we only show a few links)
  // //   _.times(clickTimes, () => browser.click('//ul[contains(concat(" ", @class, " "), " pagination ")]//li[last()-1]/a'));
  // //   browser
  // //     .click('//tr[td[contains(., "draft")]][last()]/td[last()]/div/div/div[last()]/div/button')
  // //     .useCss()
  // //     .pause(500)
  // //     .assert.containsText('.open.dropdown.btn-group ul li:nth-child(2) button div:last-child', 'Validate')
  // //     .click('.open.dropdown.btn-group ul li:nth-child(2) button')
  // //     .pause(500)
  // //     .assert.containsText('.open.dropdown.btn-group ul li:nth-child(2) button div:last-child', 'Retirer');
  // // },
  'Log out Dede for the third time': (browser) => logOutUser(browser),
  'Check the front end': (browser) => {
    browser
    .waitForElementVisible('.corner.all a', elementWaitTime)
    .click('.corner.all a')
    .waitForElementVisible('header.about.well', elementWaitTime)
    .waitForElementVisible('.product:first-child a', elementWaitTime)
    .click('.product:first-child a')
    .waitForElementVisible('.presentation', elementWaitTime)
    .waitForElementVisible('a.resources', elementWaitTime)
    .click('a.resources')
    .waitForElementVisible('.mp-blocks.resources', elementWaitTime)
    .init()
    .waitForElementVisible('.mp-carousel', elementWaitTime)
    .waitForElementVisible('.product:first-child a', elementWaitTime)
    .click('.product:first-child a')
    .waitForElementVisible('.presentation', elementWaitTime);
  },
  'Check front end with bundles': (browser) => {
    browser
    .init()
    .waitForElementVisible('.corner.all a', elementWaitTime)
    .click('.corner.all a')
    .waitForElementVisible('header.about.well', elementWaitTime)
    .waitForElementVisible('.mp-menu li:nth-child(3)', elementWaitTime)
    .waitForElementVisible('.product:first-child a', elementWaitTime)
    .click('.mp-menu li:nth-child(3)')
    .click('.product:first-child a')
    .pause(2000);
  },
  End: (browser) => {
    browser.end();
  },
};
