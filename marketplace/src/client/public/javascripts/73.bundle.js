webpackJsonp([73],{

/***/ 1190:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components2 = __webpack_require__(15);
	
	var _components3 = _interopRequireDefault(_components2);
	
	var _connect = __webpack_require__(76);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _bluebird = __webpack_require__(420);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _actions = __webpack_require__(103);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var subscriptions = function (_Components) {
	  _inherits(subscriptions, _Components);
	
	  function subscriptions() {
	    _classCallCheck(this, subscriptions);
	
	    return _possibleConstructorReturn(this, (subscriptions.__proto__ || Object.getPrototypeOf(subscriptions)).apply(this, arguments));
	  }
	
	  _createClass(subscriptions, [{
	    key: 'render',
	    value: function render() {
	      var oSubscriptions = _react2.default.createElement(
	        'span',
	        { className: 'centered-message-title' },
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Pas d\'abonnement disponibles'
	        )
	      );
	
	      if (this.props.user.subscriptionsUrl) {
	        // oSubscriptions = (<iframe src={this.props.user.subscriptionsUrl} className="billing-system-offers-bo" scrolling="no"></iframe>)
	      }
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        oSubscriptions
	      );
	    }
	  }], [{
	    key: 'fetchData',
	
	    /*
	     * @param tenant
	     * @param dispatch
	     * @param params
	     * @param query
	     * @returns {Promise|Promise.<T>}
	     */
	    value: function fetchData(tenant, dispatch) {
	      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      var query = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	      var Action = new _actions2.default(tenant);
	      return _bluebird2.default.all([
	        // Insert here the Action to fetch the needed data
	      ]).then(function (actions) {
	        return _bluebird2.default.resolve(actions);
	      }).then(function () {
	        return Action.Seo.set({
	          type: '',
	          data: {}
	        });
	      }).then(function (action) {
	        return _bluebird2.default.resolve(dispatch(action));
	      });
	    }
	  }]);
	
	  return subscriptions;
	}(_components3.default);
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('tenant'),
	    user: state.get('v02').get('common').get('user').toJS()
	  };
	}
	
	var _components = {
	  default: (0, _connect2.default)(stateToProps)(subscriptions)
	};
	
	var TenantProxy = function () {
	  function TenantProxy() {
	    _classCallCheck(this, TenantProxy);
	  }
	
	  _createClass(TenantProxy, null, [{
	    key: 'get',
	    value: function get(tenant) {
	      return _components[tenant] ? _components[tenant] : _components.default;
	    }
	  }]);
	
	  return TenantProxy;
	}();
	
	exports.default = TenantProxy;

/***/ }

});
//# sourceMappingURL=73.bundle.js.map