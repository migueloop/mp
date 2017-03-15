'use strict';

exports.__esModule = true;

const _extends = Object.assign || function (target) {
  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i];
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

const React = require('react');
const IconBase = require('react-icon-base');

const IconOK = (function (_React$Component) {
  _inherits(IconOK, _React$Component);

  function IconOK() {
    _classCallCheck(this, IconOK);

    _React$Component.apply(this, arguments);
  }

  IconOK.prototype.render = function render() {
    return React.createElement(
      IconBase,
      _extends({ viewBox: '-8 -8 40 40' }, this.props),
      React.createElement(
        'g',
        null,
        React.createElement('path', {
          d: 'M11.863,11.627c0,0.864 -0.139,1.665 -0.416,2.401c-0.277,0.737 -0.669,1.374 -1.177,1.912c-0.507,0.538 -1.117,0.958 -1.83,1.26c-0.713,0.301 -1.505,0.452 -2.377,0.452c-0.866,0 -1.656,-0.151 -2.369,-0.452c-0.713,-0.302 -1.324,-0.722 -1.834,-1.26c-0.509,-0.538 -0.904,-1.175 -1.184,-1.912c-0.28,-0.736 -0.42,-1.537 -0.42,-2.401c0,-0.864 0.14,-1.664 0.42,-2.401c0.28,-0.736 0.675,-1.374 1.184,-1.912c0.51,-0.538 1.121,-0.958 1.834,-1.259c0.713,-0.302 1.503,-0.453 2.369,-0.453c0.581,0 1.128,0.069 1.64,0.208c0.513,0.139 0.983,0.334 1.411,0.587c0.428,0.253 0.812,0.56 1.153,0.921c0.34,0.362 0.629,0.765 0.867,1.211c0.238,0.446 0.419,0.929 0.543,1.451c0.124,0.522 0.186,1.071 0.186,1.647ZM9.684,11.627c0,-0.647 -0.084,-1.227 -0.253,-1.74c-0.169,-0.514 -0.41,-0.95 -0.721,-1.309c-0.312,-0.359 -0.691,-0.633 -1.137,-0.823c-0.447,-0.191 -0.95,-0.286 -1.51,-0.286c-0.56,0 -1.063,0.095 -1.509,0.286c-0.446,0.19 -0.827,0.464 -1.141,0.823c-0.314,0.359 -0.556,0.795 -0.725,1.309c-0.169,0.513 -0.253,1.093 -0.253,1.74c0,0.647 0.084,1.227 0.253,1.741c0.169,0.513 0.411,0.948 0.725,1.304c0.314,0.356 0.695,0.629 1.141,0.82c0.446,0.19 0.949,0.285 1.509,0.285c0.56,0 1.063,-0.095 1.51,-0.285c0.446,-0.191 0.825,-0.464 1.137,-0.82c0.311,-0.356 0.552,-0.791 0.721,-1.304c0.169,-0.514 0.253,-1.094 0.253,-1.741Z M15.872,10.673l0.499,0c0.201,0 0.367,-0.028 0.499,-0.085c0.132,-0.057 0.246,-0.148 0.341,-0.273l3.161,-4.118c0.132,-0.174 0.271,-0.295 0.416,-0.362c0.146,-0.068 0.329,-0.102 0.551,-0.102l1.838,0l-3.858,4.9c-0.228,0.298 -0.463,0.51 -0.706,0.635c0.175,0.066 0.332,0.157 0.472,0.274c0.14,0.116 0.273,0.27 0.4,0.46l3.977,5.52l-1.877,0c-0.254,0 -0.443,-0.037 -0.567,-0.11c-0.124,-0.074 -0.228,-0.181 -0.313,-0.322l-3.24,-4.354c-0.101,-0.147 -0.217,-0.25 -0.349,-0.31c-0.132,-0.06 -0.322,-0.09 -0.57,-0.09l-0.674,0l0,5.186l-2.131,0l0,-11.789l2.131,0l0,4.94Z',
        })
      )
    );
  };

  return IconOK;
})(React.Component);

exports['default'] = IconOK;
module.exports = exports['default'];
