webpackJsonp([74],{

/***/ 1189:
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
	
	var _reactRedux = __webpack_require__(17);
	
	var _bluebird = __webpack_require__(420);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _actions = __webpack_require__(103);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Offers = function (_Components) {
	  _inherits(Offers, _Components);
	
	  function Offers() {
	    _classCallCheck(this, Offers);
	
	    return _possibleConstructorReturn(this, (Offers.__proto__ || Object.getPrototypeOf(Offers)).apply(this, arguments));
	  }
	
	  _createClass(Offers, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('component did mount');
	      Offers.fetchData(this.props.tenant, this.props.dispatch);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.billing.disable) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          'Billing system not enabled...'
	        );
	      }
	      return _react2.default.createElement('iframe', { src: this.props.billing.endpoint.extended, className: 'billing-system-offers-bo' });
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
	      return _bluebird2.default.all([Action.BackOffice.Billing.fetch()]).then(function (actions) {
	        console.log(actions);
	        return actions.forEach(dispatch);
	      }).then(function () {
	        return Action.Seo.set({
	          type: 'backoffice',
	          data: {}
	        });
	      }).then(function (seoAction) {
	        dispatch(seoAction);
	        return _bluebird2.default.resolve();
	      });
	    }
	  }]);
	
	  return Offers;
	}(_components3.default);
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('tenant'),
	    billing: state.get('backoffice').get('billing').toJS()
	  };
	}
	
	var _components = {
	  default: (0, _reactRedux.connect)(stateToProps)(Offers)
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
//# sourceMappingURL=74.bundle.js.map