'use strict';

require('babel-polyfill');

if (process.env.NODE_ENV === 'production') {
  require('newrelic');
  // require("appdynamics").profile({
  //   controllerHostName: '212.92.56.13',
  //   controllerPort: 8090,
  //   accountName: 'customer1',
  //   accountAccessKey: '1c18fb39-1171-4555-8486-a9c8df73c552',
  //   applicationName: 'Marketplace',
  //   tierName: 'Tier1',
  //   nodeName: 'process' // The controller will automatically append the node name with a unique number
  // });
} else {
  require('babel-register');
}

require('app').default.init();
