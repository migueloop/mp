webpackJsonp([48],{

/***/ 2:
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(48)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$assign = __webpack_require__(48)['default'];
	
	var _Object$create = __webpack_require__(58)['default'];
	
	var _Object$keys = __webpack_require__(18)['default'];
	
	exports.__esModule = true;
	
	var constant = function constant(obj) {
	  return _Object$assign(_Object$create({
	    values: function values() {
	      var _this = this;
	
	      return _Object$keys(this).map(function (k) {
	        return _this[k];
	      });
	    }
	  }), obj);
	};
	
	var styleMaps = {
	
	  SIZES: {
	    'large': 'lg',
	    'medium': 'md',
	    'small': 'sm',
	    'xsmall': 'xs',
	    'lg': 'lg',
	    'md': 'md',
	    'sm': 'sm',
	    'xs': 'xs'
	  },
	  GRID_COLUMNS: 12
	};
	
	var Sizes = constant({
	  LARGE: 'large',
	  MEDIUM: 'medium',
	  SMALL: 'small',
	  XSMALL: 'xsmall'
	});
	
	exports.Sizes = Sizes;
	var State = constant({
	  SUCCESS: 'success',
	  WARNING: 'warning',
	  DANGER: 'danger',
	  INFO: 'info'
	});
	
	exports.State = State;
	var DEFAULT = 'default';
	exports.DEFAULT = DEFAULT;
	var PRIMARY = 'primary';
	exports.PRIMARY = PRIMARY;
	var LINK = 'link';
	exports.LINK = LINK;
	var INVERSE = 'inverse';
	
	exports.INVERSE = INVERSE;
	exports['default'] = styleMaps;

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _common = __webpack_require__(46);
	
	/**
	 * Checks whether a prop provides a type of element.
	 *
	 * The type of element can be provided in two forms:
	 * - tag name (string)
	 * - a return value of React.createClass(...)
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */
	
	function validate(props, propName, componentName) {
	  var errBeginning = _common.errMsg(props, propName, componentName, '. Expected an Element `type`');
	
	  if (typeof props[propName] !== 'function') {
	    if (_react2['default'].isValidElement(props[propName])) {
	      return new Error(errBeginning + ', not an actual Element');
	    }
	
	    if (typeof props[propName] !== 'string') {
	      return new Error(errBeginning + ' such as a tag name or return value of React.createClass(...)');
	    }
	  }
	}
	
	exports['default'] = _common.createChainableTypeChecker(validate);
	module.exports = exports['default'];

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _actions = __webpack_require__(41);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _constants = __webpack_require__(38);
	
	var _underscore = __webpack_require__(66);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Component = (_temp = _class = function (_React$Component) {
	  _inherits(Component, _React$Component);
	
	  function Component(props) {
	    _classCallCheck(this, Component);
	
	    var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));
	
	    _this.Error = function (code, message, reactChildren) {
	      throw new Error(JSON.stringify({
	        code: code,
	        message: message,
	        reactChildren: reactChildren
	      }));
	    };
	
	    _this.addListener = function (events) {
	      if (!Array.isArray(events)) {
	        events = [events];
	      }
	      var guid = (0, _constants.GUID)();
	      _this.props.dispatch({ type: _actions.ACTION.LISTEN, guid: guid, events: events });
	      return guid;
	    };
	
	    _this.removeListener = function (guid) {
	      _this.props.dispatch({ type: _actions.ACTION.UNLISTEN, guid: guid });
	    };
	
	    _this.reloadStore = function () {
	      var actions = new _actions2.default(_this.props.tenant);
	      actions.reloadStore().then(function (action) {
	        return _this.props.dispatch(action);
	      });
	    };
	
	    _this.link = function (to) {
	      return function (evt) {
	        _this.context.router.push(to);
	      };
	    };
	
	    _this.navigate = function (to) {
	      _this.context.router.push(to);
	    };
	
	    _this.format = function (msg) {
	      var id = msg.id;
	      if (!_underscore2.default.isString(id)) {
	        throw new Error('Formatted message id must be a string. Value supplied:', id);
	      }
	      return _this.context.intl.formatMessage(msg);
	    };
	
	    _this.tenant = _this.props.tenant;
	    if (!_this.tenant) {/* throw new Error('Not receiving tenant in this component') */}
	    return _this;
	  }
	
	  return Component;
	}(_react2.default.Component), _class.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired,
	  intl: _react2.default.PropTypes.object.isRequired
	}, _class.propTypes = {
	  tenant: _react2.default.PropTypes.string.isRequired,
	  dispatch: _react2.default.PropTypes.func
	}, _temp);
	exports.default = Component;

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ },

/***/ 19:
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(3)['default'];
	
	var _Object$keys = __webpack_require__(18)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _styleMaps = __webpack_require__(11);
	
	var _styleMaps2 = _interopRequireDefault(_styleMaps);
	
	var _reactPropTypesLibElementType = __webpack_require__(13);
	
	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
	
	var Col = _react2['default'].createClass({
	  displayName: 'Col',
	
	  propTypes: {
	    /**
	     * The number of columns you wish to span
	     *
	     * for Extra small devices Phones (<768px)
	     *
	     * class-prefix `col-xs-`
	     */
	    xs: _react2['default'].PropTypes.number,
	    /**
	     * The number of columns you wish to span
	     *
	     * for Small devices Tablets (≥768px)
	     *
	     * class-prefix `col-sm-`
	     */
	    sm: _react2['default'].PropTypes.number,
	    /**
	     * The number of columns you wish to span
	     *
	     * for Medium devices Desktops (≥992px)
	     *
	     * class-prefix `col-md-`
	     */
	    md: _react2['default'].PropTypes.number,
	    /**
	     * The number of columns you wish to span
	     *
	     * for Large devices Desktops (≥1200px)
	     *
	     * class-prefix `col-lg-`
	     */
	    lg: _react2['default'].PropTypes.number,
	    /**
	     * Move columns to the right
	     *
	     * for Extra small devices Phones
	     *
	     * class-prefix `col-xs-offset-`
	     */
	    xsOffset: _react2['default'].PropTypes.number,
	    /**
	     * Move columns to the right
	     *
	     * for Small devices Tablets
	     *
	     * class-prefix `col-sm-offset-`
	     */
	    smOffset: _react2['default'].PropTypes.number,
	    /**
	     * Move columns to the right
	     *
	     * for Medium devices Desktops
	     *
	     * class-prefix `col-md-offset-`
	     */
	    mdOffset: _react2['default'].PropTypes.number,
	    /**
	     * Move columns to the right
	     *
	     * for Large devices Desktops
	     *
	     * class-prefix `col-lg-offset-`
	     */
	    lgOffset: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Extra small devices Phones
	     *
	     * class-prefix `col-xs-push-`
	     */
	    xsPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Small devices Tablets
	     *
	     * class-prefix `col-sm-push-`
	     */
	    smPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Medium devices Desktops
	     *
	     * class-prefix `col-md-push-`
	     */
	    mdPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the right
	     *
	     * for Large devices Desktops
	     *
	     * class-prefix `col-lg-push-`
	     */
	    lgPush: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Extra small devices Phones
	     *
	     * class-prefix `col-xs-pull-`
	     */
	    xsPull: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Small devices Tablets
	     *
	     * class-prefix `col-sm-pull-`
	     */
	    smPull: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Medium devices Desktops
	     *
	     * class-prefix `col-md-pull-`
	     */
	    mdPull: _react2['default'].PropTypes.number,
	    /**
	     * Change the order of grid columns to the left
	     *
	     * for Large devices Desktops
	     *
	     * class-prefix `col-lg-pull-`
	     */
	    lgPull: _react2['default'].PropTypes.number,
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _reactPropTypesLibElementType2['default']
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      componentClass: 'div'
	    };
	  },
	
	  render: function render() {
	    var _this = this;
	
	    var ComponentClass = this.props.componentClass;
	    var classes = {};
	
	    _Object$keys(_styleMaps2['default'].SIZES).forEach(function (key) {
	      var size = _styleMaps2['default'].SIZES[key];
	      var prop = size;
	      var classPart = size + '-';
	
	      if (_this.props[prop]) {
	        classes['col-' + classPart + _this.props[prop]] = true;
	      }
	
	      prop = size + 'Offset';
	      classPart = size + '-offset-';
	      if (_this.props[prop] >= 0) {
	        classes['col-' + classPart + _this.props[prop]] = true;
	      }
	
	      prop = size + 'Push';
	      classPart = size + '-push-';
	      if (_this.props[prop] >= 0) {
	        classes['col-' + classPart + _this.props[prop]] = true;
	      }
	
	      prop = size + 'Pull';
	      classPart = size + '-pull-';
	      if (_this.props[prop] >= 0) {
	        classes['col-' + classPart + _this.props[prop]] = true;
	      }
	    }, this);
	
	    return _react2['default'].createElement(
	      ComponentClass,
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Col;
	module.exports = exports['default'];

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(107)
	  , core      = __webpack_require__(19)
	  , ctx       = __webpack_require__(57)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },

/***/ 34:
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactPropTypesLibElementType = __webpack_require__(13);
	
	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
	
	var Row = _react2['default'].createClass({
	  displayName: 'Row',
	
	  propTypes: {
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _reactPropTypesLibElementType2['default']
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      componentClass: 'div'
	    };
	  },
	
	  render: function render() {
	    var ComponentClass = this.props.componentClass;
	
	    return _react2['default'].createElement(
	      ComponentClass,
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'row') }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Row;
	module.exports = exports['default'];

/***/ },

/***/ 46:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.errMsg = errMsg;
	exports.createChainableTypeChecker = createChainableTypeChecker;
	
	function errMsg(props, propName, componentName, msgContinuation) {
	  return 'Invalid prop \'' + propName + '\' of value \'' + props[propName] + '\'' + (' supplied to \'' + componentName + '\'' + msgContinuation);
	}
	
	/**
	 * Create chain-able isRequired validator
	 *
	 * Largely copied directly from:
	 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
	 */
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName) {
	    componentName = componentName || '<<anonymous>>';
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required prop \'' + propName + '\' was not specified in \'' + componentName + '\'.');
	      }
	    } else {
	      return validate(props, propName, componentName);
	    }
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ },

/***/ 49:
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(106);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(104);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	// Generated by LiveScript 1.4.0
	var Func, List, Obj, Str, Num, id, isType, replicate, prelude, toString$ = {}.toString;
	Func = __webpack_require__(386);
	List = __webpack_require__(387);
	Obj = __webpack_require__(389);
	Str = __webpack_require__(390);
	Num = __webpack_require__(388);
	id = function(x){
	  return x;
	};
	isType = curry$(function(type, x){
	  return toString$.call(x).slice(8, -1) === type;
	});
	replicate = curry$(function(n, x){
	  var i$, results$ = [];
	  for (i$ = 0; i$ < n; ++i$) {
	    results$.push(x);
	  }
	  return results$;
	});
	Str.empty = List.empty;
	Str.slice = List.slice;
	Str.take = List.take;
	Str.drop = List.drop;
	Str.splitAt = List.splitAt;
	Str.takeWhile = List.takeWhile;
	Str.dropWhile = List.dropWhile;
	Str.span = List.span;
	Str.breakStr = List.breakList;
	prelude = {
	  Func: Func,
	  List: List,
	  Obj: Obj,
	  Str: Str,
	  Num: Num,
	  id: id,
	  isType: isType,
	  replicate: replicate
	};
	prelude.each = List.each;
	prelude.map = List.map;
	prelude.filter = List.filter;
	prelude.compact = List.compact;
	prelude.reject = List.reject;
	prelude.partition = List.partition;
	prelude.find = List.find;
	prelude.head = List.head;
	prelude.first = List.first;
	prelude.tail = List.tail;
	prelude.last = List.last;
	prelude.initial = List.initial;
	prelude.empty = List.empty;
	prelude.reverse = List.reverse;
	prelude.difference = List.difference;
	prelude.intersection = List.intersection;
	prelude.union = List.union;
	prelude.countBy = List.countBy;
	prelude.groupBy = List.groupBy;
	prelude.fold = List.fold;
	prelude.foldl = List.foldl;
	prelude.fold1 = List.fold1;
	prelude.foldl1 = List.foldl1;
	prelude.foldr = List.foldr;
	prelude.foldr1 = List.foldr1;
	prelude.unfoldr = List.unfoldr;
	prelude.andList = List.andList;
	prelude.orList = List.orList;
	prelude.any = List.any;
	prelude.all = List.all;
	prelude.unique = List.unique;
	prelude.uniqueBy = List.uniqueBy;
	prelude.sort = List.sort;
	prelude.sortWith = List.sortWith;
	prelude.sortBy = List.sortBy;
	prelude.sum = List.sum;
	prelude.product = List.product;
	prelude.mean = List.mean;
	prelude.average = List.average;
	prelude.concat = List.concat;
	prelude.concatMap = List.concatMap;
	prelude.flatten = List.flatten;
	prelude.maximum = List.maximum;
	prelude.minimum = List.minimum;
	prelude.maximumBy = List.maximumBy;
	prelude.minimumBy = List.minimumBy;
	prelude.scan = List.scan;
	prelude.scanl = List.scanl;
	prelude.scan1 = List.scan1;
	prelude.scanl1 = List.scanl1;
	prelude.scanr = List.scanr;
	prelude.scanr1 = List.scanr1;
	prelude.slice = List.slice;
	prelude.take = List.take;
	prelude.drop = List.drop;
	prelude.splitAt = List.splitAt;
	prelude.takeWhile = List.takeWhile;
	prelude.dropWhile = List.dropWhile;
	prelude.span = List.span;
	prelude.breakList = List.breakList;
	prelude.zip = List.zip;
	prelude.zipWith = List.zipWith;
	prelude.zipAll = List.zipAll;
	prelude.zipAllWith = List.zipAllWith;
	prelude.at = List.at;
	prelude.elemIndex = List.elemIndex;
	prelude.elemIndices = List.elemIndices;
	prelude.findIndex = List.findIndex;
	prelude.findIndices = List.findIndices;
	prelude.apply = Func.apply;
	prelude.curry = Func.curry;
	prelude.flip = Func.flip;
	prelude.fix = Func.fix;
	prelude.over = Func.over;
	prelude.split = Str.split;
	prelude.join = Str.join;
	prelude.lines = Str.lines;
	prelude.unlines = Str.unlines;
	prelude.words = Str.words;
	prelude.unwords = Str.unwords;
	prelude.chars = Str.chars;
	prelude.unchars = Str.unchars;
	prelude.repeat = Str.repeat;
	prelude.capitalize = Str.capitalize;
	prelude.camelize = Str.camelize;
	prelude.dasherize = Str.dasherize;
	prelude.values = Obj.values;
	prelude.keys = Obj.keys;
	prelude.pairsToObj = Obj.pairsToObj;
	prelude.objToPairs = Obj.objToPairs;
	prelude.listsToObj = Obj.listsToObj;
	prelude.objToLists = Obj.objToLists;
	prelude.max = Num.max;
	prelude.min = Num.min;
	prelude.negate = Num.negate;
	prelude.abs = Num.abs;
	prelude.signum = Num.signum;
	prelude.quot = Num.quot;
	prelude.rem = Num.rem;
	prelude.div = Num.div;
	prelude.mod = Num.mod;
	prelude.recip = Num.recip;
	prelude.pi = Num.pi;
	prelude.tau = Num.tau;
	prelude.exp = Num.exp;
	prelude.sqrt = Num.sqrt;
	prelude.ln = Num.ln;
	prelude.pow = Num.pow;
	prelude.sin = Num.sin;
	prelude.tan = Num.tan;
	prelude.cos = Num.cos;
	prelude.acos = Num.acos;
	prelude.asin = Num.asin;
	prelude.atan = Num.atan;
	prelude.atan2 = Num.atan2;
	prelude.truncate = Num.truncate;
	prelude.round = Num.round;
	prelude.ceiling = Num.ceiling;
	prelude.floor = Num.floor;
	prelude.isItNaN = Num.isItNaN;
	prelude.even = Num.even;
	prelude.odd = Num.odd;
	prelude.gcd = Num.gcd;
	prelude.lcm = Num.lcm;
	prelude.VERSION = '1.1.2';
	module.exports = prelude;
	function curry$(f, bound){
	  var context,
	  _curry = function(args) {
	    return f.length > 1 ? function(){
	      var params = args ? args.concat() : [];
	      context = bound ? context || this : this;
	      return params.push.apply(params, arguments) <
	          f.length && arguments.length ?
	        _curry.call(context, params) : f.apply(context, params);
	    } : f;
	  };
	  return _curry();
	}

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var ref$, all, any, concatMap, each, filter, find, isType, keys, map, Obj, objToPairs, partition, reverse, sortBy, clamp, findAll, get, isEmptyObject, isEqualToObject, partitionString, mappend, rextend, set, transpose, unwrap, slice$ = [].slice, toString$ = {}.toString;
	  ref$ = __webpack_require__(59), all = ref$.all, any = ref$.any, concatMap = ref$.concatMap, each = ref$.each, filter = ref$.filter, find = ref$.find, isType = ref$.isType, keys = ref$.keys, map = ref$.map, Obj = ref$.Obj, objToPairs = ref$.objToPairs, partition = ref$.partition, reverse = ref$.reverse, sortBy = ref$.sortBy;
	  clamp = curry$(function(n, min, max){
	    return Math.max(min, Math.min(max, n));
	  });
	  findAll = curry$(function(text, search, offset){
	    var index;
	    index = text.substr(offset).indexOf(search);
	    if (index === -1) {
	      return [];
	    } else {
	      return [offset + index].concat(findAll(text, search, offset + index + search.length));
	    }
	  });
	  get = curry$(function(object, arg$){
	    var p, ps, ref$;
	    p = arg$[0], ps = slice$.call(arg$, 1);
	    if (ps.length === 0) {
	      return (ref$ = object[p]) != null ? ref$ : null;
	    } else {
	      if (typeof object[p] === 'undefined') {
	        return null;
	      } else {
	        return get(object[p], ps);
	      }
	    }
	  });
	  isEmptyObject = function(o){
	    var numberOfKeys;
	    numberOfKeys = function(it){
	      return it.length;
	    }(
	    keys(
	    Obj.filter(function(it){
	      return !!it;
	    })(
	    o)));
	    return numberOfKeys === 0;
	  };
	  isEqualToObject = curry$(function(o1, o2){
	    if (toString$.call(o1).slice(8, -1) !== toString$.call(o2).slice(8, -1)) {
	      return false;
	    }
	    if (any(function(it){
	      return isType(it, o1);
	    })(
	    ['Boolean', 'Number', 'String', 'undefined'])) {
	      return o1 === o2;
	    }
	    if (toString$.call(o1).slice(8, -1) === 'Array') {
	      if (o1.length !== o2.length) {
	        return false;
	      }
	      return all(function(index){
	        return isEqualToObject(o1[index], o2[index]);
	      })(
	      (function(){
	        var i$, to$, results$ = [];
	        for (i$ = 0, to$ = o1.length; i$ < to$; ++i$) {
	          results$.push(i$);
	        }
	        return results$;
	      }()));
	    } else {
	      if (keys(o1).length !== keys(o2).length) {
	        return false;
	      }
	      return all(function(key){
	        return isEqualToObject(o1[key], o2[key]);
	      })(
	      keys(o1));
	    }
	  });
	  partitionString = curry$(function(text, search){
	    var indices, first, x, last, high, low;
	    if (search.length === 0) {
	      return [[0, text.length]];
	    }
	    indices = findAll(text, search, 0), first = indices[0], x = indices[indices.length - 1];
	    if (indices.length === 0) {
	      return [];
	    }
	    last = x + search.length;
	    high = map(function(it){
	      return [it, it + search.length, true];
	    })(
	    indices);
	    low = map(function(i){
	      return [high[i][1], high[i + 1][0], false];
	    })(
	    (function(){
	      var i$, to$, results$ = [];
	      for (i$ = 0, to$ = high.length - 1; i$ < to$; ++i$) {
	        results$.push(i$);
	      }
	      return results$;
	    }()));
	    return (first === 0
	      ? []
	      : [[0, first, false]]).concat(sortBy(function(it){
	      return it[0];
	    })(
	    high.concat(low)), last === text.length
	      ? []
	      : [[last, text.length, false]]);
	  });
	  mappend = curry$(function(object, path, nextValue, combinator){
	    var current;
	    current = get(object, path);
	    return set(object, path, !!current ? combinator(current, nextValue) : nextValue);
	  });
	  rextend = curry$(function(a, b){
	    var btype, bkeys;
	    btype = toString$.call(b).slice(8, -1);
	    if (any((function(it){
	      return it === btype;
	    }), ['Boolean', 'Number', 'String', 'Function'])) {
	      return b;
	    }
	    if (a === null || 'Undefined' === toString$.call(a).slice(8, -1)) {
	      return b;
	    }
	    bkeys = Obj.keys(b);
	    if (bkeys.length === 0) {
	      return a;
	    }
	    each(function(key){
	      return a[key] = rextend(Obj.keys(a[key]).length > 0
	        ? import$({}, a[key])
	        : a[key], b[key]);
	    })(
	    bkeys);
	    return a;
	  });
	  set = curry$(function(object, arg$, value){
	    var p, ps, ref$;
	    p = arg$[0], ps = slice$.call(arg$, 1);
	    if (ps.length > 0) {
	      object[p] = (ref$ = object[p]) != null
	        ? ref$
	        : {};
	      return set(object[p], ps, value);
	    } else {
	      object[p] = value;
	      return object;
	    }
	  });
	  transpose = function(arr){
	    return map(function(column){
	      return map(function(row){
	        return row[column];
	      })(
	      arr);
	    })(
	    keys(
	    arr[0]));
	  };
	  unwrap = curry$(function(f, depth, object){
	    var r;
	    r = curry$(function(f, ks, i, j, object){
	      return concatMap(function(arg$){
	        var k, v;
	        k = arg$[0], v = arg$[1];
	        if (i < j) {
	          return r(f, ks.concat(k), i + 1, j, v);
	        } else {
	          return f(ks.concat(k), v);
	        }
	      })(
	      objToPairs(
	      object));
	    });
	    return r(f, [], 0, depth, object);
	  });
	  module.exports = {
	    clamp: clamp,
	    findAll: findAll,
	    get: get,
	    isEmptyObject: isEmptyObject,
	    isEqualToObject: isEqualToObject,
	    mappend: mappend,
	    partitionString: partitionString,
	    rextend: rextend,
	    set: set,
	    transpose: transpose,
	    unwrap: unwrap
	  };
	  function curry$(f, bound){
	    var context,
	    _curry = function(args) {
	      return f.length > 1 ? function(){
	        var params = args ? args.concat() : [];
	        context = bound ? context || this : this;
	        return params.push.apply(params, arguments) <
	            f.length && arguments.length ?
	          _curry.call(context, params) : f.apply(context, params);
	      } : f;
	    };
	    return _curry();
	  }
	  function import$(obj, src){
	    var own = {}.hasOwnProperty;
	    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	    return obj;
	  }
	}).call(this);


/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(110);
	module.exports = __webpack_require__(19).Object.assign;

/***/ },

/***/ 104:
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },

/***/ 105:
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },

/***/ 106:
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },

/***/ 107:
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(105);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(34)
	  , toObject = __webpack_require__(50)
	  , IObject  = __webpack_require__(108);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(49)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(33);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(109)});

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(34);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(121);
	module.exports = __webpack_require__(19).Object.keys;

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(33)
	  , core    = __webpack_require__(19)
	  , fails   = __webpack_require__(49);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(50);
	
	__webpack_require__(120)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var ref$, filter, map, objToPairs, Str, cancelEvent, classNameFromObject, out$ = typeof exports != 'undefined' && exports || this;
	  ref$ = __webpack_require__(59), filter = ref$.filter, map = ref$.map, objToPairs = ref$.objToPairs, Str = ref$.Str;
	  out$.cancelEvent = cancelEvent = function(e){
	    e.preventDefault();
	    e.stopPropagation();
	    false;
	  };
	  out$.classNameFromObject = classNameFromObject = function(it){
	    return Str.join(' ')(
	    map(function(it){
	      return it[0];
	    })(
	    filter(function(it){
	      return !!it[1];
	    })(
	    objToPairs(
	    it))));
	  };
	}).call(this);


/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var ref$, each, filter, find, findIndex, id, initial, last, map, objToPairs, partition, reject, reverse, Str, sortBy, sum, values, clamp, isEqualToObject, React, div, input, path, span, svg, createClass, createFactory, findDOMNode, ReactCSSTransitionGroup, Div, DropdownMenu, OptionWrapper, ValueWrapper, ResizableInput, cancelEvent, classNameFromObject;
	  ref$ = __webpack_require__(59), each = ref$.each, filter = ref$.filter, find = ref$.find, findIndex = ref$.findIndex, id = ref$.id, initial = ref$.initial, last = ref$.last, map = ref$.map, objToPairs = ref$.objToPairs, partition = ref$.partition, reject = ref$.reject, reverse = ref$.reverse, Str = ref$.Str, sortBy = ref$.sortBy, sum = ref$.sum, values = ref$.values;
	  ref$ = __webpack_require__(84), clamp = ref$.clamp, isEqualToObject = ref$.isEqualToObject;
	  React = __webpack_require__(1), ref$ = React.DOM, div = ref$.div, input = ref$.input, path = ref$.path, span = ref$.span, svg = ref$.svg, createClass = React.createClass, createFactory = React.createFactory;
	  findDOMNode = __webpack_require__(10).findDOMNode;
	  ReactCSSTransitionGroup = createFactory(__webpack_require__(267));
	  Div = createFactory(__webpack_require__(268));
	  DropdownMenu = createFactory(__webpack_require__(392));
	  OptionWrapper = createFactory(__webpack_require__(269));
	  ValueWrapper = createFactory(__webpack_require__(398));
	  ResizableInput = createFactory(__webpack_require__(396));
	  ref$ = __webpack_require__(152), cancelEvent = ref$.cancelEvent, classNameFromObject = ref$.classNameFromObject;
	  module.exports = createClass({
	    displayName: 'ReactSelectize',
	    focusLock: false,
	    getDefaultProps: function(){
	      return {
	        anchor: null,
	        autofocus: false,
	        delimiters: [],
	        disabled: false,
	        dropdownDirection: 1,
	        firstOptionIndexToHighlight: function(options){
	          return 0;
	        },
	        groupId: function(it){
	          return it.groupId;
	        },
	        groupsAsColumns: false,
	        highlightedUid: undefined,
	        onAnchorChange: function(anchor){},
	        onBlur: function(e){},
	        onEnter: function(highlightedOption){},
	        onFocus: function(e){},
	        onHighlightedUidChange: function(uid, callback){},
	        onKeyboardSelectionFailed: function(keycode){},
	        onOpenChange: function(open, callback){},
	        onPaste: function(e){
	          true;
	        },
	        onScrollLockChange: function(scrollLock){},
	        onSearchChange: function(search, callback){},
	        onValuesChange: function(values, callback){},
	        open: false,
	        renderValue: function(arg$){
	          var label;
	          label = arg$.label;
	          return div({
	            className: 'simple-value'
	          }, span(null, label));
	        },
	        scrollLock: false,
	        search: "",
	        style: {},
	        theme: 'default',
	        uid: id,
	        values: []
	      };
	    },
	    render: function(){
	      var anchorIndex, renderSelectedValues, flipped, ref$, ref1$, this$ = this;
	      anchorIndex = (function(){
	        var ref$;
	        switch (false) {
	        case !(typeof this.props.anchor === 'undefined' || this.props.anchor === null):
	          return -1;
	        default:
	          return (ref$ = findIndex(function(it){
	            return this$.isEqualToObject(it, this$.props.anchor);
	          }, this.props.values)) != null
	            ? ref$
	            : this.props.values.length - 1;
	        }
	      }.call(this));
	      renderSelectedValues = function(selectedValues){
	        return map(function(index){
	          var item, uid;
	          item = this$.props.values[index];
	          uid = this$.props.uid(item);
	          return ValueWrapper({
	            key: this$.uidToString(uid),
	            uid: uid,
	            item: item,
	            renderItem: this$.props.renderValue
	          });
	        })(
	        selectedValues);
	      };
	      flipped = this.props.dropdownDirection === -1;
	      return div({
	        className: classNameFromObject((ref$ = {
	          'react-selectize': 1
	        }, ref$[this.props.theme + ""] = 1, ref$['control-wrapper'] = 1, ref$[this.props.className + ""] = 1, ref$.disabled = this.props.disabled, ref$.open = this.props.open, ref$.flipped = flipped, ref$.tethered = this.props.tether, ref$)),
	        style: this.props.style
	      }, !!this.props.name ? input({
	        type: 'hidden',
	        name: this.props.name,
	        value: this.props.serialize(this.props.values)
	      }) : void 8, div({
	        className: 'react-selectize-control',
	        ref: 'control',
	        onMouseDown: function(e){
	          (function(){
	            return this$.props.onAnchorChange(last(this$.props.values), function(){
	              return this$.onOpenChange(true, function(){
	                return this$.highlightAndFocus();
	              });
	            });
	          })();
	          return cancelEvent(e);
	        }
	      }, this.props.search.length === 0 && this.props.values.length === 0 ? div({
	        className: 'react-selectize-placeholder'
	      }, this.props.placeholder) : void 8, div({
	        className: 'react-selectize-selected-values'
	      }, renderSelectedValues((function(){
	        var i$, to$, results$ = [];
	        for (i$ = 0, to$ = anchorIndex; i$ <= to$; ++i$) {
	          results$.push(i$);
	        }
	        return results$;
	      }())), ResizableInput({
	        disabled: this.props.disabled,
	        ref: 'search',
	        type: 'text',
	        value: this.props.search,
	        onChange: function(arg$){
	          var value;
	          value = arg$.currentTarget.value;
	          return this$.props.onSearchChange(value, function(){
	            return this$.highlightAndScrollToSelectableOption(this$.props.firstOptionIndexToHighlight(this$.props.options), 1);
	          });
	        },
	        onFocus: function(e){
	          (function(){
	            return function(callback){
	              if (!!this$.focusLock) {
	                return callback(this$.focusLock = false);
	              } else {
	                return this$.onOpenChange(true, function(){
	                  return callback(true);
	                });
	              }
	            };
	          })()(function(){
	            return this$.props.onFocus(e);
	          });
	        },
	        onBlur: function(e){
	          if (this$.refs.dropdownMenu && document.activeElement === findDOMNode(this$.refs.dropdownMenu)) {
	            return;
	          }
	          return this$.closeDropdown(function(){
	            return this$.props.onBlur(e);
	          });
	        },
	        onPaste: this.props.onPaste,
	        onKeyDown: function(e){
	          return this$.handleKeydown({
	            anchorIndex: anchorIndex
	          }, e);
	        }
	      }), renderSelectedValues((function(){
	        var i$, to$, results$ = [];
	        for (i$ = anchorIndex + 1, to$ = this.props.values.length; i$ < to$; ++i$) {
	          results$.push(i$);
	        }
	        return results$;
	      }.call(this)))), this.props.values.length > 0 ? div({
	        className: 'react-selectize-reset-container',
	        onClick: function(e){
	          (function(){
	            return this$.props.onValuesChange([], function(){
	              return this$.props.onSearchChange("", function(){
	                return this$.highlightAndFocus();
	              });
	            });
	          })();
	          return cancelEvent(e);
	        }
	      }, svg({
	        className: 'react-selectize-reset',
	        style: {
	          width: 8,
	          height: 8
	        }
	      }, path({
	        d: "M0 0 L8 8 M8 0 L 0 8"
	      }))) : void 8, div({
	        className: 'react-selectize-arrow-container',
	        onMouseDown: function(e){
	          if (this$.props.open) {
	            this$.onOpenChange(false, function(){});
	          } else {
	            this$.props.onAnchorChange(last(this$.props.values), function(){
	              return this$.onOpenChange(true, function(){});
	            });
	          }
	          return cancelEvent(e);
	        }
	      }, svg({
	        className: 'react-selectize-arrow',
	        style: {
	          width: 10,
	          height: 8
	        }
	      }, path({
	        d: (function(){
	          switch (false) {
	          case !((this.props.open && !flipped) || (!this.props.open && flipped)):
	            return "M0 6 L5 1 L10 6 Z";
	          default:
	            return "M0 1 L5 6 L10 1 Z";
	          }
	        }.call(this))
	      })))), DropdownMenu((ref$ = import$({}, this.props), ref$.ref = 'dropdownMenu', ref$.className = classNameFromObject((ref1$ = {
	        'react-selectize': 1
	      }, ref1$[this.props.className + ""] = 1, ref1$)), ref$.theme = this.props.theme, ref$.scrollLock = this.props.scrollLock, ref$.onScrollChange = this.props.onScrollChange, ref$.bottomAnchor = function(){
	        return findDOMNode(this$.refs.control);
	      }, ref$.tetherTarget = function(){
	        return findDOMNode(this$.refs.control);
	      }, ref$.onOptionClick = function(highlightedUid){
	        this$.selectHighlightedUid(anchorIndex, function(){});
	      }, ref$)));
	    },
	    handleKeydown: function(arg$, e){
	      var anchorIndex, index, this$ = this;
	      anchorIndex = arg$.anchorIndex;
	      switch (e.which) {
	      case 8:
	        if (this.props.search.length > 0 || anchorIndex === -1) {
	          return;
	        }
	        (function(){
	          var anchorIndexOnRemove, nextAnchor, valueToRemove, ref$;
	          anchorIndexOnRemove = anchorIndex;
	          nextAnchor = anchorIndex - 1 < 0
	            ? undefined
	            : this$.props.values[anchorIndex - 1];
	          valueToRemove = this$.props.values[anchorIndex];
	          return this$.props.onValuesChange((ref$ = reject(function(it){
	            return this$.isEqualToObject(it, valueToRemove);
	          })(
	          this$.props.values)) != null
	            ? ref$
	            : [], function(){
	            return function(){
	              return function(callback){
	                if (typeof find(function(it){
	                  return this$.isEqualToObject(it, valueToRemove);
	                }, this$.props.values) === 'undefined') {
	                  if (!!this$.props.restoreOnBackspace) {
	                    return this$.props.onSearchChange(this$.props.restoreOnBackspace(valueToRemove), function(){
	                      return callback(true);
	                    });
	                  } else {
	                    return callback(true);
	                  }
	                } else {
	                  return callback(false);
	                }
	              };
	            }()(function(result){
	              if (!!result) {
	                this$.highlightAndScrollToSelectableOption(this$.props.firstOptionIndexToHighlight(this$.props.options), 1);
	                if (anchorIndex === anchorIndexOnRemove && (typeof nextAnchor === 'undefined' || !!find(function(it){
	                  return this$.isEqualToObject(it, nextAnchor);
	                })(
	                this$.props.values))) {
	                  return this$.props.onAnchorChange(nextAnchor, function(){});
	                }
	              }
	            });
	          });
	        })();
	        cancelEvent(e);
	        break;
	      case 27:
	        (function(){
	          if (this$.props.open) {
	            return function(it){
	              return this$.onOpenChange(false, it);
	            };
	          } else {
	            return function(it){
	              return this$.props.onValuesChange([], it);
	            };
	          }
	        })()(function(){
	          return this$.props.onSearchChange("", function(){
	            return this$.focusOnInput();
	          });
	        });
	      }
	      if (this.props.open && in$(e.which, [13].concat(this.props.delimiters)) && !((e != null && e.metaKey) || (e != null && e.ctrlKey))) {
	        this.selectHighlightedUid(anchorIndex, function(selectedValue){
	          if (typeof selectedValue === 'undefined') {
	            return this$.props.onKeyboardSelectionFailed(e.which);
	          }
	        });
	        return cancelEvent(e);
	      }
	      if (this.props.search.length === 0) {
	        switch (e.which) {
	        case 37:
	          this.props.onAnchorChange(anchorIndex - 1 < 0 || e.metaKey
	            ? undefined
	            : this.props.values[clamp(anchorIndex - 1, 0, this.props.values.length - 1)], function(){});
	          break;
	        case 39:
	          this.props.onAnchorChange(e.metaKey
	            ? last(this.props.values)
	            : this.props.values[clamp(anchorIndex + 1, 0, this.props.values.length - 1)], function(){});
	        }
	      }
	      switch (e.which) {
	      case 38:
	        this.props.onScrollLockChange(true);
	        index = (function(){
	          switch (false) {
	          case typeof this.props.highlightedUid !== 'undefined':
	            return 0;
	          default:
	            return -1 + this.optionIndexFromUid(this.props.highlightedUid);
	          }
	        }.call(this));
	        return this.highlightAndScrollToSelectableOption(index, -1, function(result){
	          if (!result) {
	            return this$.highlightAndScrollToSelectableOption(this$.props.options.length - 1, -1);
	          }
	        });
	      case 40:
	        this.props.onScrollLockChange(true);
	        index = (function(){
	          switch (false) {
	          case typeof this.props.highlightedUid !== 'undefined':
	            return 0;
	          default:
	            return 1 + this.optionIndexFromUid(this.props.highlightedUid);
	          }
	        }.call(this));
	        return this.highlightAndScrollToSelectableOption(index, 1, function(result){
	          if (!result) {
	            return this$.highlightAndScrollToSelectableOption(0, 1);
	          }
	        });
	      }
	    },
	    componentDidMount: function(){
	      if (this.props.autofocus) {
	        this.focus();
	      }
	      if (this.props.open) {
	        this.highlightAndFocus();
	      }
	    },
	    componentDidUpdate: function(prevProps){
	      if (this.props.open && !prevProps.open && this.props.highlightedUid === undefined) {
	        this.highlightAndFocus();
	      }
	      if (!this.props.open && prevProps.open) {
	        this.props.onHighlightedUidChange(undefined);
	      }
	    },
	    componentWillReceiveProps: function(props){
	      var this$ = this;
	      if ((typeof this.props.disabled === 'undefined' || this.props.disabled === false) && (typeof props.disabled !== 'undefined' && props.disabled === true)) {
	        this.onOpenChange(false, function(){});
	      }
	    },
	    optionIndexFromUid: function(uid){
	      var this$ = this;
	      return findIndex(function(it){
	        return isEqualToObject(uid, this$.props.uid(it));
	      })(
	      this.props.options);
	    },
	    closeDropdown: function(callback){
	      var this$ = this;
	      this.onOpenChange(false, function(){
	        return this$.props.onAnchorChange(last(this$.props.values), callback);
	      });
	    },
	    blur: function(){
	      this.refs.search.blur();
	    },
	    focus: function(){
	      this.refs.search.focus();
	    },
	    focusOnInput: function(){
	      var input;
	      input = findDOMNode(this.refs.search);
	      if (input !== document.activeElement) {
	        this.focusLock = true;
	        input.focus();
	        input.value = input.value;
	      }
	    },
	    highlightAndFocus: function(){
	      this.highlightAndScrollToSelectableOption(this.props.firstOptionIndexToHighlight(this.props.options), 1);
	      this.focusOnInput();
	    },
	    highlightAndScrollToOption: function(index, callback){
	      callback == null && (callback = function(){});
	      this.refs.dropdownMenu.highlightAndScrollToOption(index, callback);
	    },
	    highlightAndScrollToSelectableOption: function(index, direction, callback){
	      var this$ = this;
	      callback == null && (callback = function(){});
	      (function(){
	        if (!this$.props.open) {
	          return function(it){
	            return this$.onOpenChange(true, it);
	          };
	        } else {
	          return function(it){
	            return it();
	          };
	        }
	      })()(function(){
	        return this$.refs.dropdownMenu.highlightAndScrollToSelectableOption(index, direction, callback);
	      });
	    },
	    isEqualToObject: function(){
	      return isEqualToObject(this.props.uid(arguments[0]), this.props.uid(arguments[1]));
	    },
	    onOpenChange: function(open, callback){
	      return this.props.onOpenChange(this.props.disabled ? false : open, callback);
	    },
	    selectHighlightedUid: function(anchorIndex, callback){
	      var index, option, this$ = this;
	      if (this.props.highlightedUid === undefined) {
	        return callback();
	      }
	      index = this.optionIndexFromUid(this.props.highlightedUid);
	      if (typeof index !== 'number') {
	        return callback();
	      }
	      option = this.props.options[index];
	      this.props.onValuesChange(map(function(it){
	        return this$.props.values[it];
	      }, (function(){
	        var i$, to$, results$ = [];
	        for (i$ = 0, to$ = anchorIndex; i$ <= to$; ++i$) {
	          results$.push(i$);
	        }
	        return results$;
	      }())).concat([option], map(function(it){
	        return this$.props.values[it];
	      }, (function(){
	        var i$, to$, results$ = [];
	        for (i$ = anchorIndex + 1, to$ = this.props.values.length; i$ < to$; ++i$) {
	          results$.push(i$);
	        }
	        return results$;
	      }.call(this)))), function(){
	        var value;
	        value = find(function(it){
	          return this$.isEqualToObject(it, option);
	        }, this$.props.values);
	        if (!value) {
	          return callback();
	        }
	        return this$.props.onSearchChange("", function(){
	          return this$.props.onAnchorChange(value, function(){
	            if (!this$.props.open) {
	              return callback(value);
	            }
	            return this$.highlightAndScrollToSelectableOption(index, 1, function(result){
	              if (!!result) {
	                return callback(value);
	              }
	              return this$.highlightAndScrollToSelectableOption(this$.props.firstOptionIndexToHighlight(this$.props.options), 1, function(result){
	                if (!result) {
	                  return this$.onOpenChange(false, function(){
	                    return callback(value);
	                  });
	                } else {
	                  return callback(value);
	                }
	              });
	            });
	          });
	        });
	      });
	    },
	    uidToString: function(uid){
	      return (typeof uid === 'object' ? JSON.stringify : id)(uid);
	    }
	  });
	  function import$(obj, src){
	    var own = {}.hasOwnProperty;
	    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	    return obj;
	  }
	  function in$(x, xs){
	    var i = -1, l = xs.length >>> 0;
	    while (++i < l) if (x === xs[i]) return true;
	    return false;
	  }
	}).call(this);


/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var HighlightedText, SimpleSelect, MultiSelect, ReactSelectize;
	  HighlightedText = __webpack_require__(393);
	  SimpleSelect = __webpack_require__(397);
	  MultiSelect = __webpack_require__(394);
	  ReactSelectize = __webpack_require__(188);
	  module.exports = {
	    HighlightedText: HighlightedText,
	    SimpleSelect: SimpleSelect,
	    MultiSelect: MultiSelect,
	    ReactSelectize: ReactSelectize
	  };
	}).call(this);


/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(399);

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var ref$, createClass, div;
	  ref$ = __webpack_require__(1), createClass = ref$.createClass, div = ref$.DOM.div;
	  module.exports = createClass({
	    getDefaultProps: function(){
	      return {
	        className: "",
	        onHeightChange: function(){}
	      };
	    },
	    render: function(){
	      return div({
	        className: this.props.className,
	        ref: 'dropdown'
	      }, this.props.children);
	    },
	    componentDidMount: function(){
	      this.props.onHeightChange(this.refs.dropdown.offsetHeight);
	    },
	    componentDidUpdate: function(){
	      this.props.onHeightChange(this.refs.dropdown.offsetHeight);
	    },
	    componentWillUnmount: function(){
	      this.props.onHeightChange(0);
	    }
	  });
	}).call(this);


/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var ref$, createClass, div, isEqualToObject, cancelEvent;
	  ref$ = __webpack_require__(1), createClass = ref$.createClass, div = ref$.DOM.div;
	  isEqualToObject = __webpack_require__(84).isEqualToObject;
	  cancelEvent = __webpack_require__(152).cancelEvent;
	  module.exports = createClass({
	    getDefaultProps: function(){
	      return {};
	    },
	    render: function(){
	      var this$ = this;
	      return div({
	        className: "option-wrapper " + (!!this.props.highlight ? 'highlight' : ''),
	        onMouseDown: function(e){
	          var listener;
	          listener = function(e){
	            this$.props.onClick(e);
	            return window.removeEventListener('mouseup', listener);
	          };
	          window.addEventListener('mouseup', listener);
	          return cancelEvent(e);
	        },
	        onMouseMove: this.props.onMouseMove,
	        onMouseOut: this.props.onMouseOut,
	        onMouseOver: this.props.onMouseOver
	      }, this.props.renderItem(this.props.item));
	    },
	    shouldComponentUpdate: function(nextProps){
	      var ref$, ref1$, ref2$;
	      return !isEqualToObject(nextProps != null ? nextProps.uid : void 8, (ref$ = this.props) != null ? ref$.uid : void 8) || (nextProps != null ? nextProps.highlight : void 8) !== ((ref1$ = this.props) != null ? ref1$.highlight : void 8) || (nextProps != null ? nextProps.selectable : void 8) !== ((ref2$ = this.props) != null ? ref2$.selectable : void 8);
	    }
	  });
	}).call(this);


/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(385);
	
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },
	
	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSCore
	 * @typechecks
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(265);
	
	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */
	
	var CSSCore = {
	
	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function (element, className) {
	    !!/\s/.test(className) ?  false ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;
	
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function (element, className) {
	    !!/\s/.test(className) ?  false ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;
	
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function (element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },
	
	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function (element, className) {
	    !!/\s/.test(className) ?  false ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : undefined;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  }
	
	};
	
	module.exports = CSSCore;

/***/ },

/***/ 386:
/***/ function(module, exports) {

	// Generated by LiveScript 1.4.0
	var apply, curry, flip, fix, over, memoize, slice$ = [].slice, toString$ = {}.toString;
	apply = curry$(function(f, list){
	  return f.apply(null, list);
	});
	curry = function(f){
	  return curry$(f);
	};
	flip = curry$(function(f, x, y){
	  return f(y, x);
	});
	fix = function(f){
	  return function(g){
	    return function(){
	      return f(g(g)).apply(null, arguments);
	    };
	  }(function(g){
	    return function(){
	      return f(g(g)).apply(null, arguments);
	    };
	  });
	};
	over = curry$(function(f, g, x, y){
	  return f(g(x), g(y));
	});
	memoize = function(f){
	  var memo;
	  memo = {};
	  return function(){
	    var args, key, arg;
	    args = slice$.call(arguments);
	    key = (function(){
	      var i$, ref$, len$, results$ = [];
	      for (i$ = 0, len$ = (ref$ = args).length; i$ < len$; ++i$) {
	        arg = ref$[i$];
	        results$.push(arg + toString$.call(arg).slice(8, -1));
	      }
	      return results$;
	    }()).join('');
	    return memo[key] = key in memo
	      ? memo[key]
	      : f.apply(null, args);
	  };
	};
	module.exports = {
	  curry: curry,
	  flip: flip,
	  fix: fix,
	  apply: apply,
	  over: over,
	  memoize: memoize
	};
	function curry$(f, bound){
	  var context,
	  _curry = function(args) {
	    return f.length > 1 ? function(){
	      var params = args ? args.concat() : [];
	      context = bound ? context || this : this;
	      return params.push.apply(params, arguments) <
	          f.length && arguments.length ?
	        _curry.call(context, params) : f.apply(context, params);
	    } : f;
	  };
	  return _curry();
	}

/***/ },

/***/ 387:
/***/ function(module, exports) {

	// Generated by LiveScript 1.4.0
	var each, map, compact, filter, reject, partition, find, head, first, tail, last, initial, empty, reverse, unique, uniqueBy, fold, foldl, fold1, foldl1, foldr, foldr1, unfoldr, concat, concatMap, flatten, difference, intersection, union, countBy, groupBy, andList, orList, any, all, sort, sortWith, sortBy, sum, product, mean, average, maximum, minimum, maximumBy, minimumBy, scan, scanl, scan1, scanl1, scanr, scanr1, slice, take, drop, splitAt, takeWhile, dropWhile, span, breakList, zip, zipWith, zipAll, zipAllWith, at, elemIndex, elemIndices, findIndex, findIndices, toString$ = {}.toString, slice$ = [].slice;
	each = curry$(function(f, xs){
	  var i$, len$, x;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    f(x);
	  }
	  return xs;
	});
	map = curry$(function(f, xs){
	  var i$, len$, x, results$ = [];
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    results$.push(f(x));
	  }
	  return results$;
	});
	compact = function(xs){
	  var i$, len$, x, results$ = [];
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    if (x) {
	      results$.push(x);
	    }
	  }
	  return results$;
	};
	filter = curry$(function(f, xs){
	  var i$, len$, x, results$ = [];
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    if (f(x)) {
	      results$.push(x);
	    }
	  }
	  return results$;
	});
	reject = curry$(function(f, xs){
	  var i$, len$, x, results$ = [];
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    if (!f(x)) {
	      results$.push(x);
	    }
	  }
	  return results$;
	});
	partition = curry$(function(f, xs){
	  var passed, failed, i$, len$, x;
	  passed = [];
	  failed = [];
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    (f(x) ? passed : failed).push(x);
	  }
	  return [passed, failed];
	});
	find = curry$(function(f, xs){
	  var i$, len$, x;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    if (f(x)) {
	      return x;
	    }
	  }
	});
	head = first = function(xs){
	  return xs[0];
	};
	tail = function(xs){
	  if (!xs.length) {
	    return;
	  }
	  return xs.slice(1);
	};
	last = function(xs){
	  return xs[xs.length - 1];
	};
	initial = function(xs){
	  if (!xs.length) {
	    return;
	  }
	  return xs.slice(0, -1);
	};
	empty = function(xs){
	  return !xs.length;
	};
	reverse = function(xs){
	  return xs.concat().reverse();
	};
	unique = function(xs){
	  var result, i$, len$, x;
	  result = [];
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    if (!in$(x, result)) {
	      result.push(x);
	    }
	  }
	  return result;
	};
	uniqueBy = curry$(function(f, xs){
	  var seen, i$, len$, x, val, results$ = [];
	  seen = [];
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    val = f(x);
	    if (in$(val, seen)) {
	      continue;
	    }
	    seen.push(val);
	    results$.push(x);
	  }
	  return results$;
	});
	fold = foldl = curry$(function(f, memo, xs){
	  var i$, len$, x;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    memo = f(memo, x);
	  }
	  return memo;
	});
	fold1 = foldl1 = curry$(function(f, xs){
	  return fold(f, xs[0], xs.slice(1));
	});
	foldr = curry$(function(f, memo, xs){
	  var i$, x;
	  for (i$ = xs.length - 1; i$ >= 0; --i$) {
	    x = xs[i$];
	    memo = f(x, memo);
	  }
	  return memo;
	});
	foldr1 = curry$(function(f, xs){
	  return foldr(f, xs[xs.length - 1], xs.slice(0, -1));
	});
	unfoldr = curry$(function(f, b){
	  var result, x, that;
	  result = [];
	  x = b;
	  while ((that = f(x)) != null) {
	    result.push(that[0]);
	    x = that[1];
	  }
	  return result;
	});
	concat = function(xss){
	  return [].concat.apply([], xss);
	};
	concatMap = curry$(function(f, xs){
	  var x;
	  return [].concat.apply([], (function(){
	    var i$, ref$, len$, results$ = [];
	    for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
	      x = ref$[i$];
	      results$.push(f(x));
	    }
	    return results$;
	  }()));
	});
	flatten = function(xs){
	  var x;
	  return [].concat.apply([], (function(){
	    var i$, ref$, len$, results$ = [];
	    for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
	      x = ref$[i$];
	      if (toString$.call(x).slice(8, -1) === 'Array') {
	        results$.push(flatten(x));
	      } else {
	        results$.push(x);
	      }
	    }
	    return results$;
	  }()));
	};
	difference = function(xs){
	  var yss, results, i$, len$, x, j$, len1$, ys;
	  yss = slice$.call(arguments, 1);
	  results = [];
	  outer: for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    for (j$ = 0, len1$ = yss.length; j$ < len1$; ++j$) {
	      ys = yss[j$];
	      if (in$(x, ys)) {
	        continue outer;
	      }
	    }
	    results.push(x);
	  }
	  return results;
	};
	intersection = function(xs){
	  var yss, results, i$, len$, x, j$, len1$, ys;
	  yss = slice$.call(arguments, 1);
	  results = [];
	  outer: for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    for (j$ = 0, len1$ = yss.length; j$ < len1$; ++j$) {
	      ys = yss[j$];
	      if (!in$(x, ys)) {
	        continue outer;
	      }
	    }
	    results.push(x);
	  }
	  return results;
	};
	union = function(){
	  var xss, results, i$, len$, xs, j$, len1$, x;
	  xss = slice$.call(arguments);
	  results = [];
	  for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
	    xs = xss[i$];
	    for (j$ = 0, len1$ = xs.length; j$ < len1$; ++j$) {
	      x = xs[j$];
	      if (!in$(x, results)) {
	        results.push(x);
	      }
	    }
	  }
	  return results;
	};
	countBy = curry$(function(f, xs){
	  var results, i$, len$, x, key;
	  results = {};
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    key = f(x);
	    if (key in results) {
	      results[key] += 1;
	    } else {
	      results[key] = 1;
	    }
	  }
	  return results;
	});
	groupBy = curry$(function(f, xs){
	  var results, i$, len$, x, key;
	  results = {};
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    key = f(x);
	    if (key in results) {
	      results[key].push(x);
	    } else {
	      results[key] = [x];
	    }
	  }
	  return results;
	});
	andList = function(xs){
	  var i$, len$, x;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    if (!x) {
	      return false;
	    }
	  }
	  return true;
	};
	orList = function(xs){
	  var i$, len$, x;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    if (x) {
	      return true;
	    }
	  }
	  return false;
	};
	any = curry$(function(f, xs){
	  var i$, len$, x;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    if (f(x)) {
	      return true;
	    }
	  }
	  return false;
	});
	all = curry$(function(f, xs){
	  var i$, len$, x;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    if (!f(x)) {
	      return false;
	    }
	  }
	  return true;
	});
	sort = function(xs){
	  return xs.concat().sort(function(x, y){
	    if (x > y) {
	      return 1;
	    } else if (x < y) {
	      return -1;
	    } else {
	      return 0;
	    }
	  });
	};
	sortWith = curry$(function(f, xs){
	  return xs.concat().sort(f);
	});
	sortBy = curry$(function(f, xs){
	  return xs.concat().sort(function(x, y){
	    if (f(x) > f(y)) {
	      return 1;
	    } else if (f(x) < f(y)) {
	      return -1;
	    } else {
	      return 0;
	    }
	  });
	});
	sum = function(xs){
	  var result, i$, len$, x;
	  result = 0;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    result += x;
	  }
	  return result;
	};
	product = function(xs){
	  var result, i$, len$, x;
	  result = 1;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    result *= x;
	  }
	  return result;
	};
	mean = average = function(xs){
	  var sum, i$, len$, x;
	  sum = 0;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    x = xs[i$];
	    sum += x;
	  }
	  return sum / xs.length;
	};
	maximum = function(xs){
	  var max, i$, ref$, len$, x;
	  max = xs[0];
	  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
	    x = ref$[i$];
	    if (x > max) {
	      max = x;
	    }
	  }
	  return max;
	};
	minimum = function(xs){
	  var min, i$, ref$, len$, x;
	  min = xs[0];
	  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
	    x = ref$[i$];
	    if (x < min) {
	      min = x;
	    }
	  }
	  return min;
	};
	maximumBy = curry$(function(f, xs){
	  var max, i$, ref$, len$, x;
	  max = xs[0];
	  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
	    x = ref$[i$];
	    if (f(x) > f(max)) {
	      max = x;
	    }
	  }
	  return max;
	});
	minimumBy = curry$(function(f, xs){
	  var min, i$, ref$, len$, x;
	  min = xs[0];
	  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
	    x = ref$[i$];
	    if (f(x) < f(min)) {
	      min = x;
	    }
	  }
	  return min;
	});
	scan = scanl = curry$(function(f, memo, xs){
	  var last, x;
	  last = memo;
	  return [memo].concat((function(){
	    var i$, ref$, len$, results$ = [];
	    for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
	      x = ref$[i$];
	      results$.push(last = f(last, x));
	    }
	    return results$;
	  }()));
	});
	scan1 = scanl1 = curry$(function(f, xs){
	  if (!xs.length) {
	    return;
	  }
	  return scan(f, xs[0], xs.slice(1));
	});
	scanr = curry$(function(f, memo, xs){
	  xs = xs.concat().reverse();
	  return scan(f, memo, xs).reverse();
	});
	scanr1 = curry$(function(f, xs){
	  if (!xs.length) {
	    return;
	  }
	  xs = xs.concat().reverse();
	  return scan(f, xs[0], xs.slice(1)).reverse();
	});
	slice = curry$(function(x, y, xs){
	  return xs.slice(x, y);
	});
	take = curry$(function(n, xs){
	  if (n <= 0) {
	    return xs.slice(0, 0);
	  } else {
	    return xs.slice(0, n);
	  }
	});
	drop = curry$(function(n, xs){
	  if (n <= 0) {
	    return xs;
	  } else {
	    return xs.slice(n);
	  }
	});
	splitAt = curry$(function(n, xs){
	  return [take(n, xs), drop(n, xs)];
	});
	takeWhile = curry$(function(p, xs){
	  var len, i;
	  len = xs.length;
	  if (!len) {
	    return xs;
	  }
	  i = 0;
	  while (i < len && p(xs[i])) {
	    i += 1;
	  }
	  return xs.slice(0, i);
	});
	dropWhile = curry$(function(p, xs){
	  var len, i;
	  len = xs.length;
	  if (!len) {
	    return xs;
	  }
	  i = 0;
	  while (i < len && p(xs[i])) {
	    i += 1;
	  }
	  return xs.slice(i);
	});
	span = curry$(function(p, xs){
	  return [takeWhile(p, xs), dropWhile(p, xs)];
	});
	breakList = curry$(function(p, xs){
	  return span(compose$(p, not$), xs);
	});
	zip = curry$(function(xs, ys){
	  var result, len, i$, len$, i, x;
	  result = [];
	  len = ys.length;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    i = i$;
	    x = xs[i$];
	    if (i === len) {
	      break;
	    }
	    result.push([x, ys[i]]);
	  }
	  return result;
	});
	zipWith = curry$(function(f, xs, ys){
	  var result, len, i$, len$, i, x;
	  result = [];
	  len = ys.length;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    i = i$;
	    x = xs[i$];
	    if (i === len) {
	      break;
	    }
	    result.push(f(x, ys[i]));
	  }
	  return result;
	});
	zipAll = function(){
	  var xss, minLength, i$, len$, xs, ref$, i, lresult$, j$, results$ = [];
	  xss = slice$.call(arguments);
	  minLength = undefined;
	  for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
	    xs = xss[i$];
	    minLength <= (ref$ = xs.length) || (minLength = ref$);
	  }
	  for (i$ = 0; i$ < minLength; ++i$) {
	    i = i$;
	    lresult$ = [];
	    for (j$ = 0, len$ = xss.length; j$ < len$; ++j$) {
	      xs = xss[j$];
	      lresult$.push(xs[i]);
	    }
	    results$.push(lresult$);
	  }
	  return results$;
	};
	zipAllWith = function(f){
	  var xss, minLength, i$, len$, xs, ref$, i, results$ = [];
	  xss = slice$.call(arguments, 1);
	  minLength = undefined;
	  for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
	    xs = xss[i$];
	    minLength <= (ref$ = xs.length) || (minLength = ref$);
	  }
	  for (i$ = 0; i$ < minLength; ++i$) {
	    i = i$;
	    results$.push(f.apply(null, (fn$())));
	  }
	  return results$;
	  function fn$(){
	    var i$, ref$, len$, results$ = [];
	    for (i$ = 0, len$ = (ref$ = xss).length; i$ < len$; ++i$) {
	      xs = ref$[i$];
	      results$.push(xs[i]);
	    }
	    return results$;
	  }
	};
	at = curry$(function(n, xs){
	  if (n < 0) {
	    return xs[xs.length + n];
	  } else {
	    return xs[n];
	  }
	});
	elemIndex = curry$(function(el, xs){
	  var i$, len$, i, x;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    i = i$;
	    x = xs[i$];
	    if (x === el) {
	      return i;
	    }
	  }
	});
	elemIndices = curry$(function(el, xs){
	  var i$, len$, i, x, results$ = [];
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    i = i$;
	    x = xs[i$];
	    if (x === el) {
	      results$.push(i);
	    }
	  }
	  return results$;
	});
	findIndex = curry$(function(f, xs){
	  var i$, len$, i, x;
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    i = i$;
	    x = xs[i$];
	    if (f(x)) {
	      return i;
	    }
	  }
	});
	findIndices = curry$(function(f, xs){
	  var i$, len$, i, x, results$ = [];
	  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
	    i = i$;
	    x = xs[i$];
	    if (f(x)) {
	      results$.push(i);
	    }
	  }
	  return results$;
	});
	module.exports = {
	  each: each,
	  map: map,
	  filter: filter,
	  compact: compact,
	  reject: reject,
	  partition: partition,
	  find: find,
	  head: head,
	  first: first,
	  tail: tail,
	  last: last,
	  initial: initial,
	  empty: empty,
	  reverse: reverse,
	  difference: difference,
	  intersection: intersection,
	  union: union,
	  countBy: countBy,
	  groupBy: groupBy,
	  fold: fold,
	  fold1: fold1,
	  foldl: foldl,
	  foldl1: foldl1,
	  foldr: foldr,
	  foldr1: foldr1,
	  unfoldr: unfoldr,
	  andList: andList,
	  orList: orList,
	  any: any,
	  all: all,
	  unique: unique,
	  uniqueBy: uniqueBy,
	  sort: sort,
	  sortWith: sortWith,
	  sortBy: sortBy,
	  sum: sum,
	  product: product,
	  mean: mean,
	  average: average,
	  concat: concat,
	  concatMap: concatMap,
	  flatten: flatten,
	  maximum: maximum,
	  minimum: minimum,
	  maximumBy: maximumBy,
	  minimumBy: minimumBy,
	  scan: scan,
	  scan1: scan1,
	  scanl: scanl,
	  scanl1: scanl1,
	  scanr: scanr,
	  scanr1: scanr1,
	  slice: slice,
	  take: take,
	  drop: drop,
	  splitAt: splitAt,
	  takeWhile: takeWhile,
	  dropWhile: dropWhile,
	  span: span,
	  breakList: breakList,
	  zip: zip,
	  zipWith: zipWith,
	  zipAll: zipAll,
	  zipAllWith: zipAllWith,
	  at: at,
	  elemIndex: elemIndex,
	  elemIndices: elemIndices,
	  findIndex: findIndex,
	  findIndices: findIndices
	};
	function curry$(f, bound){
	  var context,
	  _curry = function(args) {
	    return f.length > 1 ? function(){
	      var params = args ? args.concat() : [];
	      context = bound ? context || this : this;
	      return params.push.apply(params, arguments) <
	          f.length && arguments.length ?
	        _curry.call(context, params) : f.apply(context, params);
	    } : f;
	  };
	  return _curry();
	}
	function in$(x, xs){
	  var i = -1, l = xs.length >>> 0;
	  while (++i < l) if (x === xs[i]) return true;
	  return false;
	}
	function compose$() {
	  var functions = arguments;
	  return function() {
	    var i, result;
	    result = functions[0].apply(this, arguments);
	    for (i = 1; i < functions.length; ++i) {
	      result = functions[i](result);
	    }
	    return result;
	  };
	}
	function not$(x){ return !x; }

/***/ },

/***/ 388:
/***/ function(module, exports) {

	// Generated by LiveScript 1.4.0
	var max, min, negate, abs, signum, quot, rem, div, mod, recip, pi, tau, exp, sqrt, ln, pow, sin, tan, cos, asin, acos, atan, atan2, truncate, round, ceiling, floor, isItNaN, even, odd, gcd, lcm;
	max = curry$(function(x$, y$){
	  return x$ > y$ ? x$ : y$;
	});
	min = curry$(function(x$, y$){
	  return x$ < y$ ? x$ : y$;
	});
	negate = function(x){
	  return -x;
	};
	abs = Math.abs;
	signum = function(x){
	  if (x < 0) {
	    return -1;
	  } else if (x > 0) {
	    return 1;
	  } else {
	    return 0;
	  }
	};
	quot = curry$(function(x, y){
	  return ~~(x / y);
	});
	rem = curry$(function(x$, y$){
	  return x$ % y$;
	});
	div = curry$(function(x, y){
	  return Math.floor(x / y);
	});
	mod = curry$(function(x$, y$){
	  var ref$;
	  return (((x$) % (ref$ = y$) + ref$) % ref$);
	});
	recip = (function(it){
	  return 1 / it;
	});
	pi = Math.PI;
	tau = pi * 2;
	exp = Math.exp;
	sqrt = Math.sqrt;
	ln = Math.log;
	pow = curry$(function(x$, y$){
	  return Math.pow(x$, y$);
	});
	sin = Math.sin;
	tan = Math.tan;
	cos = Math.cos;
	asin = Math.asin;
	acos = Math.acos;
	atan = Math.atan;
	atan2 = curry$(function(x, y){
	  return Math.atan2(x, y);
	});
	truncate = function(x){
	  return ~~x;
	};
	round = Math.round;
	ceiling = Math.ceil;
	floor = Math.floor;
	isItNaN = function(x){
	  return x !== x;
	};
	even = function(x){
	  return x % 2 === 0;
	};
	odd = function(x){
	  return x % 2 !== 0;
	};
	gcd = curry$(function(x, y){
	  var z;
	  x = Math.abs(x);
	  y = Math.abs(y);
	  while (y !== 0) {
	    z = x % y;
	    x = y;
	    y = z;
	  }
	  return x;
	});
	lcm = curry$(function(x, y){
	  return Math.abs(Math.floor(x / gcd(x, y) * y));
	});
	module.exports = {
	  max: max,
	  min: min,
	  negate: negate,
	  abs: abs,
	  signum: signum,
	  quot: quot,
	  rem: rem,
	  div: div,
	  mod: mod,
	  recip: recip,
	  pi: pi,
	  tau: tau,
	  exp: exp,
	  sqrt: sqrt,
	  ln: ln,
	  pow: pow,
	  sin: sin,
	  tan: tan,
	  cos: cos,
	  acos: acos,
	  asin: asin,
	  atan: atan,
	  atan2: atan2,
	  truncate: truncate,
	  round: round,
	  ceiling: ceiling,
	  floor: floor,
	  isItNaN: isItNaN,
	  even: even,
	  odd: odd,
	  gcd: gcd,
	  lcm: lcm
	};
	function curry$(f, bound){
	  var context,
	  _curry = function(args) {
	    return f.length > 1 ? function(){
	      var params = args ? args.concat() : [];
	      context = bound ? context || this : this;
	      return params.push.apply(params, arguments) <
	          f.length && arguments.length ?
	        _curry.call(context, params) : f.apply(context, params);
	    } : f;
	  };
	  return _curry();
	}

/***/ },

/***/ 389:
/***/ function(module, exports) {

	// Generated by LiveScript 1.4.0
	var values, keys, pairsToObj, objToPairs, listsToObj, objToLists, empty, each, map, compact, filter, reject, partition, find;
	values = function(object){
	  var i$, x, results$ = [];
	  for (i$ in object) {
	    x = object[i$];
	    results$.push(x);
	  }
	  return results$;
	};
	keys = function(object){
	  var x, results$ = [];
	  for (x in object) {
	    results$.push(x);
	  }
	  return results$;
	};
	pairsToObj = function(object){
	  var i$, len$, x, resultObj$ = {};
	  for (i$ = 0, len$ = object.length; i$ < len$; ++i$) {
	    x = object[i$];
	    resultObj$[x[0]] = x[1];
	  }
	  return resultObj$;
	};
	objToPairs = function(object){
	  var key, value, results$ = [];
	  for (key in object) {
	    value = object[key];
	    results$.push([key, value]);
	  }
	  return results$;
	};
	listsToObj = curry$(function(keys, values){
	  var i$, len$, i, key, resultObj$ = {};
	  for (i$ = 0, len$ = keys.length; i$ < len$; ++i$) {
	    i = i$;
	    key = keys[i$];
	    resultObj$[key] = values[i];
	  }
	  return resultObj$;
	});
	objToLists = function(object){
	  var keys, values, key, value;
	  keys = [];
	  values = [];
	  for (key in object) {
	    value = object[key];
	    keys.push(key);
	    values.push(value);
	  }
	  return [keys, values];
	};
	empty = function(object){
	  var x;
	  for (x in object) {
	    return false;
	  }
	  return true;
	};
	each = curry$(function(f, object){
	  var i$, x;
	  for (i$ in object) {
	    x = object[i$];
	    f(x);
	  }
	  return object;
	});
	map = curry$(function(f, object){
	  var k, x, resultObj$ = {};
	  for (k in object) {
	    x = object[k];
	    resultObj$[k] = f(x);
	  }
	  return resultObj$;
	});
	compact = function(object){
	  var k, x, resultObj$ = {};
	  for (k in object) {
	    x = object[k];
	    if (x) {
	      resultObj$[k] = x;
	    }
	  }
	  return resultObj$;
	};
	filter = curry$(function(f, object){
	  var k, x, resultObj$ = {};
	  for (k in object) {
	    x = object[k];
	    if (f(x)) {
	      resultObj$[k] = x;
	    }
	  }
	  return resultObj$;
	});
	reject = curry$(function(f, object){
	  var k, x, resultObj$ = {};
	  for (k in object) {
	    x = object[k];
	    if (!f(x)) {
	      resultObj$[k] = x;
	    }
	  }
	  return resultObj$;
	});
	partition = curry$(function(f, object){
	  var passed, failed, k, x;
	  passed = {};
	  failed = {};
	  for (k in object) {
	    x = object[k];
	    (f(x) ? passed : failed)[k] = x;
	  }
	  return [passed, failed];
	});
	find = curry$(function(f, object){
	  var i$, x;
	  for (i$ in object) {
	    x = object[i$];
	    if (f(x)) {
	      return x;
	    }
	  }
	});
	module.exports = {
	  values: values,
	  keys: keys,
	  pairsToObj: pairsToObj,
	  objToPairs: objToPairs,
	  listsToObj: listsToObj,
	  objToLists: objToLists,
	  empty: empty,
	  each: each,
	  map: map,
	  filter: filter,
	  compact: compact,
	  reject: reject,
	  partition: partition,
	  find: find
	};
	function curry$(f, bound){
	  var context,
	  _curry = function(args) {
	    return f.length > 1 ? function(){
	      var params = args ? args.concat() : [];
	      context = bound ? context || this : this;
	      return params.push.apply(params, arguments) <
	          f.length && arguments.length ?
	        _curry.call(context, params) : f.apply(context, params);
	    } : f;
	  };
	  return _curry();
	}

/***/ },

/***/ 390:
/***/ function(module, exports) {

	// Generated by LiveScript 1.4.0
	var split, join, lines, unlines, words, unwords, chars, unchars, reverse, repeat, capitalize, camelize, dasherize;
	split = curry$(function(sep, str){
	  return str.split(sep);
	});
	join = curry$(function(sep, xs){
	  return xs.join(sep);
	});
	lines = function(str){
	  if (!str.length) {
	    return [];
	  }
	  return str.split('\n');
	};
	unlines = function(it){
	  return it.join('\n');
	};
	words = function(str){
	  if (!str.length) {
	    return [];
	  }
	  return str.split(/[ ]+/);
	};
	unwords = function(it){
	  return it.join(' ');
	};
	chars = function(it){
	  return it.split('');
	};
	unchars = function(it){
	  return it.join('');
	};
	reverse = function(str){
	  return str.split('').reverse().join('');
	};
	repeat = curry$(function(n, str){
	  var result, i$;
	  result = '';
	  for (i$ = 0; i$ < n; ++i$) {
	    result += str;
	  }
	  return result;
	});
	capitalize = function(str){
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};
	camelize = function(it){
	  return it.replace(/[-_]+(.)?/g, function(arg$, c){
	    return (c != null ? c : '').toUpperCase();
	  });
	};
	dasherize = function(str){
	  return str.replace(/([^-A-Z])([A-Z]+)/g, function(arg$, lower, upper){
	    return lower + "-" + (upper.length > 1
	      ? upper
	      : upper.toLowerCase());
	  }).replace(/^([A-Z]+)/, function(arg$, upper){
	    if (upper.length > 1) {
	      return upper + "-";
	    } else {
	      return upper.toLowerCase();
	    }
	  });
	};
	module.exports = {
	  split: split,
	  join: join,
	  lines: lines,
	  unlines: unlines,
	  words: words,
	  unwords: unwords,
	  chars: chars,
	  unchars: unchars,
	  reverse: reverse,
	  repeat: repeat,
	  capitalize: capitalize,
	  camelize: camelize,
	  dasherize: dasherize
	};
	function curry$(f, bound){
	  var context,
	  _curry = function(args) {
	    return f.length > 1 ? function(){
	      var params = args ? args.concat() : [];
	      context = bound ? context || this : this;
	      return params.push.apply(params, arguments) <
	          f.length && arguments.length ?
	        _curry.call(context, params) : f.apply(context, params);
	    } : f;
	  };
	  return _curry();
	}

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(403);

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var ref$, filter, id, map, isEqualToObject, React, div, input, span, createClass, createFactory, findDOMNode, ReactCSSTransitionGroup, ReactTether, Div, OptionWrapper, cancelEvent, classNameFromObject;
	  ref$ = __webpack_require__(59), filter = ref$.filter, id = ref$.id, map = ref$.map;
	  isEqualToObject = __webpack_require__(84).isEqualToObject;
	  React = __webpack_require__(1), ref$ = React.DOM, div = ref$.div, input = ref$.input, span = ref$.span, createClass = React.createClass, createFactory = React.createFactory;
	  findDOMNode = __webpack_require__(10).findDOMNode;
	  ReactCSSTransitionGroup = createFactory(__webpack_require__(267));
	  ReactTether = createFactory(__webpack_require__(395));
	  Div = createFactory(__webpack_require__(268));
	  OptionWrapper = createFactory(__webpack_require__(269));
	  ref$ = __webpack_require__(152), cancelEvent = ref$.cancelEvent, classNameFromObject = ref$.classNameFromObject;
	  module.exports = createClass({
	    displayName: 'DropdownMenu',
	    getDefaultProps: function(){
	      return {
	        className: "",
	        dropdownDirection: 1,
	        groupId: function(it){
	          return it.groupId;
	        },
	        groupsAsColumns: false,
	        highlightedUid: undefined,
	        onHighlightedUidChange: function(uid, callback){},
	        onOptionClick: function(uid){},
	        onScrollLockChange: function(scrollLock){},
	        options: [],
	        renderNoResultsFound: function(){
	          return div({
	            className: 'no-results-found'
	          }, "No results found");
	        },
	        renderGroupTitle: function(index, arg$){
	          var groupId, title;
	          if (arg$ != null) {
	            groupId = arg$.groupId, title = arg$.title;
	          }
	          return div({
	            className: 'simple-group-title',
	            key: groupId
	          }, title);
	        },
	        renderOption: function(arg$){
	          var label, newOption, selectable, isSelectable;
	          if (arg$ != null) {
	            label = arg$.label, newOption = arg$.newOption, selectable = arg$.selectable;
	          }
	          isSelectable = typeof selectable === 'undefined' || selectable;
	          return div({
	            className: "simple-option " + (isSelectable ? '' : 'not-selectable')
	          }, span(null, !!newOption ? "Add " + label + " ..." : label));
	        },
	        scrollLock: false,
	        style: {},
	        tether: false,
	        theme: 'default',
	        transitionEnter: false,
	        transitionLeave: false,
	        transitionEnterTimeout: 200,
	        transitionLeaveTimeout: 200,
	        uid: id
	      };
	    },
	    render: function(){
	      var dynamicClassName, ref$;
	      dynamicClassName = classNameFromObject((ref$ = {}, ref$[this.props.theme + ""] = 1, ref$[this.props.className + ""] = 1, ref$.flipped = this.props.dropdownDirection === -1, ref$.tethered = this.props.tether, ref$));
	      if (this.props.tether) {
	        return ReactTether({
	          target: this.props.tetherTarget,
	          options: {
	            attachment: "top left",
	            targetAttachment: "bottom left",
	            constraints: [{
	              to: 'scrollParent'
	            }]
	          }
	        }, this.renderAnimatedDropdown({
	          dynamicClassName: dynamicClassName
	        }));
	      } else {
	        return this.renderAnimatedDropdown({
	          dynamicClassName: dynamicClassName
	        });
	      }
	    },
	    renderAnimatedDropdown: function(computedState){
	      var dynamicClassName;
	      dynamicClassName = computedState.dynamicClassName;
	      if (!!this.props.transitionEnter || !!this.props.transitionLeave) {
	        return ReactCSSTransitionGroup({
	          component: 'div',
	          transitionName: 'custom',
	          transitionEnter: this.props.transitionEnter,
	          transitionLeave: this.props.transitionLeave,
	          transitionEnterTimeout: this.props.transitionEnterTimeout,
	          transitionLeaveTimeout: this.props.transitionLeaveTimeout,
	          className: "dropdown-menu-wrapper " + dynamicClassName,
	          ref: 'dropdownMenuWrapper'
	        }, this.renderDropdown(computedState));
	      } else {
	        return this.renderDropdown(computedState);
	      }
	    },
	    renderOptions: function(options){
	      var this$ = this;
	      return map(function(index){
	        var option, uid;
	        option = options[index];
	        uid = this$.props.uid(option);
	        return OptionWrapper(import$({
	          uid: uid,
	          ref: "option-" + this$.uidToString(uid),
	          key: this$.uidToString(uid),
	          item: option,
	          highlight: isEqualToObject(this$.props.highlightedUid, uid),
	          selectable: option != null ? option.selectable : void 8,
	          onMouseMove: function(arg$){
	            var currentTarget;
	            currentTarget = arg$.currentTarget;
	            if (this$.props.scrollLock) {
	              this$.props.onScrollLockChange(false);
	            }
	          },
	          onMouseOut: function(){
	            if (!this$.props.scrollLock) {
	              this$.props.onHighlightedUidChange(undefined);
	            }
	          },
	          renderItem: this$.props.renderOption
	        }, (function(){
	          switch (false) {
	          case !(typeof (option != null ? option.selectable : void 8) === 'boolean' && !option.selectable):
	            return {
	              onClick: cancelEvent
	            };
	          default:
	            return {
	              onClick: function(){
	                this$.props.onOptionClick(this$.props.highlightedUid);
	              },
	              onMouseOver: function(arg$){
	                var currentTarget;
	                currentTarget = arg$.currentTarget;
	                if (!this$.props.scrollLock) {
	                  this$.props.onHighlightedUidChange(uid);
	                }
	              }
	            };
	          }
	        }())));
	      })(
	      (function(){
	        var i$, to$, results$ = [];
	        for (i$ = 0, to$ = options.length; i$ < to$; ++i$) {
	          results$.push(i$);
	        }
	        return results$;
	      }()));
	    },
	    renderDropdown: function(arg$){
	      var dynamicClassName, ref$, ref1$, groups, this$ = this;
	      dynamicClassName = arg$.dynamicClassName;
	      if (this.props.open) {
	        return Div({
	          className: "dropdown-menu " + dynamicClassName,
	          ref: 'dropdownMenu',
	          onHeightChange: function(height){
	            if (this$.refs.dropdownMenuWrapper) {
	              findDOMNode(this$.refs.dropdownMenuWrapper).style.height = height + "px";
	            }
	          }
	        }, this.props.options.length === 0
	          ? this.props.renderNoResultsFound()
	          : ((ref$ = this.props) != null ? (ref1$ = ref$.groups) != null ? ref1$.length : void 8 : void 8) > 0
	            ? (groups = map(function(index){
	              var group, groupId, options;
	              group = this$.props.groups[index], groupId = group.groupId;
	              options = filter(function(it){
	                return this$.props.groupId(it) === groupId;
	              })(
	              this$.props.options);
	              return {
	                index: index,
	                group: group,
	                options: options
	              };
	            })(
	            (function(){
	              var i$, to$, results$ = [];
	              for (i$ = 0, to$ = this.props.groups.length; i$ < to$; ++i$) {
	                results$.push(i$);
	              }
	              return results$;
	            }.call(this))), div({
	              className: "groups " + (!!this.props.groupsAsColumns ? 'as-columns' : '')
	            }, map(function(arg$){
	              var index, group, groupId, options;
	              index = arg$.index, group = arg$.group, groupId = group.groupId, options = arg$.options;
	              return div({
	                key: groupId
	              }, this$.props.renderGroupTitle(index, group, options), div({
	                className: 'options'
	              }, this$.renderOptions(options)));
	            })(
	            filter(function(it){
	              return it.options.length > 0;
	            })(
	            groups))))
	            : this.renderOptions(this.props.options));
	      } else {
	        return null;
	      }
	    },
	    componentDidUpdate: function(){
	      var x$, dropdownMenu, ref$;
	      x$ = dropdownMenu = findDOMNode((ref$ = this.refs.dropdownMenuWrapper) != null
	        ? ref$
	        : this.refs.dropdownMenu);
	      if (x$ != null) {
	        x$.style.bottom = (function(){
	          switch (false) {
	          case this.props.dropdownDirection !== -1:
	            return this.props.bottomAnchor().offsetHeight + dropdownMenu.style.marginBottom;
	          default:
	            return "";
	          }
	        }.call(this));
	      }
	    },
	    highlightAndScrollToOption: function(index, callback){
	      var uid, this$ = this;
	      callback == null && (callback = function(){});
	      uid = this.props.uid(this.props.options[index]);
	      this.props.onHighlightedUidChange(uid, function(){
	        var ref$, ref1$, optionElement, parentElement, optionHeight;
	        if ((ref$ = findDOMNode((ref1$ = this$.refs) != null ? ref1$["option-" + this$.uidToString(uid)] : void 8)) != null) {
	          optionElement = ref$;
	        }
	        if (!!optionElement) {
	          parentElement = findDOMNode(this$.refs.dropdownMenu);
	          optionHeight = optionElement.offsetHeight - 1;
	          if (optionElement.offsetTop - parentElement.scrollTop >= parentElement.offsetHeight) {
	            parentElement.scrollTop = optionElement.offsetTop - parentElement.offsetHeight + optionHeight;
	          } else if (optionElement.offsetTop - parentElement.scrollTop + optionHeight <= 0) {
	            parentElement.scrollTop = optionElement.offsetTop;
	          }
	        }
	        return callback();
	      });
	    },
	    highlightAndScrollToSelectableOption: function(index, direction, callback){
	      var option, ref$, ref1$, this$ = this;
	      callback == null && (callback = function(){});
	      if (index < 0 || index >= this.props.options.length) {
	        this.props.onHighlightedUidChange(undefined, function(){
	          return callback(false);
	        });
	      } else {
	        option = (ref$ = this.props) != null ? (ref1$ = ref$.options) != null ? ref1$[index] : void 8 : void 8;
	        if (typeof (option != null ? option.selectable : void 8) === 'boolean' && !option.selectable) {
	          this.highlightAndScrollToSelectableOption(index + direction, direction, callback);
	        } else {
	          this.highlightAndScrollToOption(index, function(){
	            return callback(true);
	          });
	        }
	      }
	    },
	    uidToString: function(uid){
	      return (typeof uid === 'object' ? JSON.stringify : id)(uid);
	    }
	  });
	  function import$(obj, src){
	    var own = {}.hasOwnProperty;
	    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	    return obj;
	  }
	}).call(this);


/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var React, createClass, ref$, div, span, map;
	  React = __webpack_require__(1), createClass = React.createClass, ref$ = React.DOM, div = ref$.div, span = ref$.span;
	  map = __webpack_require__(59).map;
	  module.exports = createClass({
	    getDefaultProps: function(){
	      return {
	        partitions: [],
	        text: "",
	        style: {},
	        highlightStyle: {}
	      };
	    },
	    render: function(){
	      var this$ = this;
	      return div({
	        className: 'highlighted-text',
	        style: this.props.style
	      }, map(function(arg$){
	        var start, end, highlight;
	        start = arg$[0], end = arg$[1], highlight = arg$[2];
	        return span({
	          key: this$.props.text + "" + start + end + highlight,
	          className: highlight ? 'highlight' : '',
	          style: highlight
	            ? this$.props.highlightStyle
	            : {}
	        }, this$.props.text.substring(start, end));
	      })(
	      this.props.partitions));
	    }
	  });
	}).call(this);


/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var ref$, all, any, camelize, difference, drop, filter, find, findIndex, last, map, reject, isEqualToObject, React, createFactory, div, img, span, ReactSelectize, cancelEvent, toString$ = {}.toString;
	  ref$ = __webpack_require__(59), all = ref$.all, any = ref$.any, camelize = ref$.camelize, difference = ref$.difference, drop = ref$.drop, filter = ref$.filter, find = ref$.find, findIndex = ref$.findIndex, last = ref$.last, map = ref$.map, reject = ref$.reject;
	  isEqualToObject = __webpack_require__(84).isEqualToObject;
	  React = __webpack_require__(1), createFactory = React.createFactory, ref$ = React.DOM, div = ref$.div, img = ref$.img, span = ref$.span;
	  ReactSelectize = createFactory(__webpack_require__(188));
	  cancelEvent = __webpack_require__(152).cancelEvent;
	  module.exports = React.createClass({
	    displayName: 'MultiSelect',
	    getDefaultProps: function(){
	      return {
	        className: "",
	        closeOnSelect: false,
	        defaultValues: [],
	        delimiters: [],
	        filterOptions: curry$(function(options, values, search){
	          var this$ = this;
	          return filter(function(it){
	            return it.label.toLowerCase().trim().indexOf(search.toLowerCase().trim()) > -1;
	          })(
	          reject(function(it){
	            return in$(it.label.trim(), map(function(it){
	              return it.label.trim();
	            }, values != null
	              ? values
	              : []));
	          })(
	          options));
	        }),
	        onBlur: function(e){},
	        onFocus: function(e){},
	        onPaste: function(e){
	          true;
	        },
	        serialize: map(function(it){
	          return it != null ? it.value : void 8;
	        }),
	        tether: false
	      };
	    },
	    render: function(){
	      var ref$, anchor, filteredOptions, onAnchorChange, onOpenChange, onSearchChange, onValuesChange, search, open, options, values, autofocus, autosize, delimiters, disabled, dropdownDirection, groupId, groups, groupsAsColumns, name, onKeyboardSelectionFailed, renderGroupTitle, serialize, tether, theme, transitionEnter, transitionLeave, transitionEnterTimeout, transitionLeaveTimeout, uid, this$ = this;
	      ref$ = this.getComputedState(), anchor = ref$.anchor, filteredOptions = ref$.filteredOptions, onAnchorChange = ref$.onAnchorChange, onOpenChange = ref$.onOpenChange, onSearchChange = ref$.onSearchChange, onValuesChange = ref$.onValuesChange, search = ref$.search, open = ref$.open, options = ref$.options, values = ref$.values;
	      if ((ref$ = this.props) != null) {
	        autofocus = ref$.autofocus, autosize = ref$.autosize, delimiters = ref$.delimiters, disabled = ref$.disabled, dropdownDirection = ref$.dropdownDirection, groupId = ref$.groupId, groups = ref$.groups, groupsAsColumns = ref$.groupsAsColumns, name = ref$.name, onKeyboardSelectionFailed = ref$.onKeyboardSelectionFailed, renderGroupTitle = ref$.renderGroupTitle, serialize = ref$.serialize, tether = ref$.tether, theme = ref$.theme, transitionEnter = ref$.transitionEnter, transitionLeave = ref$.transitionLeave, transitionEnterTimeout = ref$.transitionEnterTimeout, transitionLeaveTimeout = ref$.transitionLeaveTimeout, uid = ref$.uid;
	      }
	      return ReactSelectize(import$(import$({
	        autofocus: autofocus,
	        autosize: autosize,
	        className: "multi-select " + this.props.className,
	        delimiters: delimiters,
	        disabled: disabled,
	        dropdownDirection: dropdownDirection,
	        groupId: groupId,
	        groups: groups,
	        groupsAsColumns: groupsAsColumns,
	        name: name,
	        onKeyboardSelectionFailed: onKeyboardSelectionFailed,
	        renderGroupTitle: renderGroupTitle,
	        scrollLock: this.state.scrollLock,
	        onScrollLockChange: function(scrollLock){
	          return this$.setState({
	            scrollLock: scrollLock
	          });
	        },
	        tether: tether,
	        theme: theme,
	        transitionEnter: transitionEnter,
	        transitionEnterTimeout: transitionEnterTimeout,
	        transitionLeave: transitionLeave,
	        transitionLeaveTimeout: transitionLeaveTimeout,
	        uid: uid,
	        ref: 'select',
	        anchor: anchor,
	        onAnchorChange: onAnchorChange,
	        open: open,
	        onOpenChange: onOpenChange,
	        highlightedUid: this.state.highlightedUid,
	        onHighlightedUidChange: function(highlightedUid, callback){
	          return this$.setState({
	            highlightedUid: highlightedUid
	          }, callback);
	        },
	        options: options,
	        renderOption: this.props.renderOption,
	        firstOptionIndexToHighlight: function(){
	          return this$.firstOptionIndexToHighlight(options);
	        },
	        search: search,
	        onSearchChange: function(search, callback){
	          return onSearchChange(!!this$.props.maxValues && values.length >= this$.props.maxValues ? "" : search, callback);
	        },
	        values: values,
	        onValuesChange: function(newValues, callback){
	          return onValuesChange(newValues, function(){
	            callback();
	            if (this$.props.closeOnSelect || (!!this$.props.maxValues && this$.values().length >= this$.props.maxValues)) {
	              return onOpenChange(false, function(){});
	            }
	          });
	        },
	        renderValue: this.props.renderValue,
	        serialize: serialize,
	        onBlur: function(e){
	          onSearchChange("", function(){
	            return this$.props.onBlur({
	              open: open,
	              values: values,
	              originalEvent: e
	            });
	          });
	        },
	        onFocus: function(e){
	          this$.props.onFocus({
	            open: open,
	            values: values,
	            originalEvent: e
	          });
	        },
	        onPaste: (function(){
	          var ref$;
	          switch (false) {
	          case typeof ((ref$ = this.props) != null ? ref$.valuesFromPaste : void 8) !== 'undefined':
	            return this.props.onPaste;
	          default:
	            return function(e){
	              var clipboardData;
	              clipboardData = e.clipboardData;
	              (function(){
	                var newValues;
	                newValues = values.concat(this$.props.valuesFromPaste(options, values, clipboardData.getData('text')));
	                return onValuesChange(newValues, function(){
	                  return onAnchorChange(last(newValues));
	                });
	              })();
	              return cancelEvent(e);
	            };
	          }
	        }.call(this)),
	        placeholder: this.props.placeholder,
	        style: this.props.style
	      }, (function(){
	        switch (false) {
	        case typeof this.props.restoreOnBackspace !== 'function':
	          return {
	            restoreOnBackspace: this.props.restoreOnBackspace
	          };
	        default:
	          return {};
	        }
	      }.call(this))), (function(){
	        switch (false) {
	        case typeof this.props.renderNoResultsFound !== 'function':
	          return {
	            renderNoResultsFound: function(){
	              return this$.props.renderNoResultsFound(values, search);
	            }
	          };
	        default:
	          return {};
	        }
	      }.call(this))));
	    },
	    getComputedState: function(){
	      var anchor, open, search, values, ref$, onAnchorChange, onOpenChange, onSearchChange, onValuesChange, optionsFromChildren, unfilteredOptions, filteredOptions, newOption, options, this$ = this;
	      anchor = this.props.hasOwnProperty('anchor')
	        ? this.props.anchor
	        : this.state.anchor;
	      open = this.isOpen();
	      search = this.props.hasOwnProperty('search')
	        ? this.props.search
	        : this.state.search;
	      values = this.values();
	      ref$ = map(function(p){
	        switch (false) {
	        case !(this$.props.hasOwnProperty(p) && this$.props.hasOwnProperty(camelize("on-" + p + "-change"))):
	          return function(o, callback){
	            this$.props[camelize("on-" + p + "-change")](o, function(){});
	            return this$.setState({}, callback);
	          };
	        case !(this$.props.hasOwnProperty(p) && !this$.props.hasOwnProperty(camelize("on-" + p + "-change"))):
	          return function(arg$, callback){
	            return callback();
	          };
	        case !(!this$.props.hasOwnProperty(p) && this$.props.hasOwnProperty(camelize("on-" + p + "-change"))):
	          return function(o, callback){
	            var ref$;
	            return this$.setState((ref$ = {}, ref$[p + ""] = o, ref$), function(){
	              callback();
	              return this$.props[camelize("on-" + p + "-change")](o, function(){});
	            });
	          };
	        case !(!this$.props.hasOwnProperty(p) && !this$.props.hasOwnProperty(camelize("on-" + p + "-change"))):
	          return function(o, callback){
	            var ref$;
	            return this$.setState((ref$ = {}, ref$[p + ""] = o, ref$), callback);
	          };
	        }
	      })(
	      ['anchor', 'open', 'search', 'values']), onAnchorChange = ref$[0], onOpenChange = ref$[1], onSearchChange = ref$[2], onValuesChange = ref$[3];
	      optionsFromChildren = (function(){
	        var ref$;
	        switch (false) {
	        case !((ref$ = this.props) != null && ref$.children):
	          return map(function(arg$){
	            var props, value, children;
	            if (arg$ != null) {
	              props = arg$.props;
	            }
	            if (props != null) {
	              value = props.value, children = props.children;
	            }
	            return {
	              label: children,
	              value: value
	            };
	          })(
	          toString$.call(this.props.children).slice(8, -1) === 'Array'
	            ? this.props.children
	            : [this.props.children]);
	        default:
	          return [];
	        }
	      }.call(this));
	      unfilteredOptions = this.props.hasOwnProperty('options') ? (ref$ = this.props.options) != null
	        ? ref$
	        : [] : optionsFromChildren;
	      filteredOptions = this.props.filterOptions(unfilteredOptions, values, search);
	      newOption = (function(){
	        switch (false) {
	        case typeof this.props.createFromSearch !== 'function':
	          return this.props.createFromSearch(filteredOptions, values, search);
	        default:
	          return null;
	        }
	      }.call(this));
	      options = (!!newOption
	        ? [(ref$ = import$({}, newOption), ref$.newOption = true, ref$)]
	        : []).concat(filteredOptions);
	      return {
	        anchor: anchor,
	        search: search,
	        values: values,
	        onAnchorChange: onAnchorChange,
	        open: open,
	        onOpenChange: function(open, callback){
	          onOpenChange((function(){
	            switch (false) {
	            case !(typeof this.props.maxValues !== 'undefined' && this.values().length >= this.props.maxValues):
	              return false;
	            default:
	              return open;
	            }
	          }.call(this$)), callback);
	        },
	        onSearchChange: onSearchChange,
	        onValuesChange: onValuesChange,
	        filteredOptions: filteredOptions,
	        options: options
	      };
	    },
	    getInitialState: function(){
	      return {
	        anchor: !!this.props.values ? last(this.props.values) : undefined,
	        highlightedUid: undefined,
	        open: false,
	        scrollLock: false,
	        search: "",
	        values: this.props.defaultValues
	      };
	    },
	    firstOptionIndexToHighlight: function(options){
	      var ref$;
	      switch (false) {
	      case options.length !== 1:
	        return 0;
	      case typeof ((ref$ = options[0]) != null ? ref$.newOption : void 8) !== 'undefined':
	        return 0;
	      default:
	        if (all(function(it){
	          return typeof it.selectable === 'boolean' && !it.selectable;
	        })(
	        drop(1)(
	        options))) {
	          return 0;
	        } else {
	          return 1;
	        }
	      }
	    },
	    focus: function(){
	      this.refs.select.focus();
	    },
	    blur: function(){
	      this.refs.select.blur();
	    },
	    highlightFirstSelectableOption: function(){
	      if (this.state.open) {
	        this.refs.select.highlightAndScrollToSelectableOption(this.firstOptionIndexToHighlight(this.getComputedState().options), 1);
	      }
	    },
	    values: function(){
	      if (this.props.hasOwnProperty('values')) {
	        return this.props.values;
	      } else {
	        return this.state.values;
	      }
	    },
	    isOpen: function(){
	      if (this.props.hasOwnProperty('open')) {
	        return this.props.open;
	      } else {
	        return this.state.open;
	      }
	    }
	  });
	  function in$(x, xs){
	    var i = -1, l = xs.length >>> 0;
	    while (++i < l) if (x === xs[i]) return true;
	    return false;
	  }
	  function curry$(f, bound){
	    var context,
	    _curry = function(args) {
	      return f.length > 1 ? function(){
	        var params = args ? args.concat() : [];
	        context = bound ? context || this : this;
	        return params.push.apply(params, arguments) <
	            f.length && arguments.length ?
	          _curry.call(context, params) : f.apply(context, params);
	      } : f;
	    };
	    return _curry();
	  }
	  function import$(obj, src){
	    var own = {}.hasOwnProperty;
	    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	    return obj;
	  }
	}).call(this);


/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var createClass, ref$, render, unmountComponentAtNode, shallowCompare, Tether;
	  createClass = __webpack_require__(1).createClass;
	  ref$ = __webpack_require__(10), render = ref$.render, unmountComponentAtNode = ref$.unmountComponentAtNode;
	  shallowCompare = __webpack_require__(391);
	  Tether = __webpack_require__(404);
	  module.exports = createClass({
	    getDefaultProps: function(){
	      return {};
	    },
	    render: function(){
	      return null;
	    },
	    initTether: function(props){
	      var this$ = this;
	      this.node = document.createElement('div');
	      document.body.appendChild(this.node);
	      this.tether = new Tether(import$({
	        element: this.node,
	        target: props.target()
	      }, props.options));
	      render(props.children, this.node, function(){
	        return this$.tether.position();
	      });
	    },
	    destroyTether: function(){
	      if (this.tether) {
	        this.tether.destroy();
	      }
	      if (this.node) {
	        unmountComponentAtNode(this.node);
	        this.node.parentElement.removeChild(this.node);
	      }
	      this.node = this.tether = undefined;
	    },
	    componentDidMount: function(){
	      if (this.props.children) {
	        this.initTether(this.props);
	      }
	    },
	    componentWillReceiveProps: function(newProps){
	      var this$ = this;
	      if (this.props.children && !newProps.children) {
	        this.destroyTether();
	      } else if (newProps.children && !this.props.children) {
	        this.initTether(newProps);
	      } else if (newProps.children) {
	        this.tether.setOptions(import$({
	          element: this.node,
	          target: newProps.target()
	        }, newProps.options));
	        render(newProps.children, this.node, function(){
	          return this$.tether.position();
	        });
	      }
	    },
	    shouldComponentUpdate: function(nextProps, nextState){
	      return shallowCompare(this, nextProps, nextState);
	    },
	    componentWillUnmount: function(){
	      this.destroyTether();
	    }
	  });
	  function import$(obj, src){
	    var own = {}.hasOwnProperty;
	    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	    return obj;
	  }
	}).call(this);


/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var ref$, each, objToPairs, React, input, createClass, createFactory, findDOMNode;
	  ref$ = __webpack_require__(59), each = ref$.each, objToPairs = ref$.objToPairs;
	  React = __webpack_require__(1), input = React.DOM.input, createClass = React.createClass, createFactory = React.createFactory;
	  findDOMNode = __webpack_require__(10).findDOMNode;
	  module.exports = createClass({
	    displayName: 'ResizableInput',
	    render: function(){
	      var ref$;
	      return input((ref$ = import$({}, this.props), ref$.type = 'input', ref$.className = 'resizable-input', ref$));
	    },
	    autosize: function(){
	      var x$, inputElement, y$, dummpyInput, ref$;
	      x$ = inputElement = findDOMNode(this);
	      x$.style.width = '0px';
	      if (inputElement.value.length === 0) {
	        return inputElement.style.width = !!(inputElement != null && inputElement.currentStyle) ? '4px' : '2px';
	      } else {
	        if (inputElement.scrollWidth > 0) {
	          return inputElement.style.width = (2 + inputElement.scrollWidth) + "px";
	        } else {
	          y$ = dummpyInput = document.createElement('div');
	          y$.innerHTML = inputElement.value;
	          (function(){
	            var ref$;
	            return ref$ = dummpyInput.style, ref$.display = 'inline-block', ref$.width = "", ref$;
	          })(
	          each(function(arg$){
	            var key, value;
	            key = arg$[0], value = arg$[1];
	            return dummpyInput.style[key] = value;
	          })(
	          objToPairs(
	          !!inputElement.currentStyle
	            ? inputElement.currentStyle
	            : (ref$ = document.defaultView) != null
	              ? ref$
	              : window.getComputedStyle(inputElement))));
	          document.body.appendChild(dummpyInput);
	          inputElement.style.width = (4 + dummpyInput.clientWidth) + "px";
	          return document.body.removeChild(dummpyInput);
	        }
	      }
	    },
	    componentDidMount: function(){
	      this.autosize();
	    },
	    componentDidUpdate: function(){
	      this.autosize();
	    },
	    blur: function(){
	      return findDOMNode(this).blur();
	    },
	    focus: function(){
	      return findDOMNode(this).focus();
	    }
	  });
	  function import$(obj, src){
	    var own = {}.hasOwnProperty;
	    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	    return obj;
	  }
	}).call(this);


/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var ref$, all, any, drop, camelize, difference, filter, find, findIndex, id, last, map, reject, isEqualToObject, React, createFactory, div, img, span, ReactSelectize, toString$ = {}.toString;
	  ref$ = __webpack_require__(59), all = ref$.all, any = ref$.any, drop = ref$.drop, camelize = ref$.camelize, difference = ref$.difference, filter = ref$.filter, find = ref$.find, findIndex = ref$.findIndex, id = ref$.id, last = ref$.last, map = ref$.map, reject = ref$.reject;
	  isEqualToObject = __webpack_require__(84).isEqualToObject;
	  React = __webpack_require__(1), createFactory = React.createFactory, ref$ = React.DOM, div = ref$.div, img = ref$.img, span = ref$.span;
	  ReactSelectize = createFactory(__webpack_require__(188));
	  module.exports = React.createClass({
	    displayName: 'SimpleSelect',
	    getDefaultProps: function(){
	      return {
	        delimiters: [],
	        filterOptions: curry$(function(options, search){
	          var this$ = this;
	          return filter(function(it){
	            return it.label.toLowerCase().trim().indexOf(search.toLowerCase().trim()) > -1;
	          })(
	          options);
	        }),
	        onBlur: function(e){},
	        onFocus: function(e){},
	        onKeyboardSelectionFailed: function(which){},
	        placeholder: "",
	        renderValue: function(arg$){
	          var label;
	          label = arg$.label;
	          return div({
	            className: 'simple-value'
	          }, span(null, label));
	        },
	        serialize: function(it){
	          return it != null ? it.value : void 8;
	        },
	        style: {},
	        tether: false,
	        uid: id
	      };
	    },
	    render: function(){
	      var ref$, filteredOptions, onOpenChange, onSearchChange, onValueChange, open, options, search, value, values, autofocus, autosize, delimiters, disabled, dropdownDirection, groupId, groups, groupsAsColumns, name, renderGroupTitle, serialize, tether, theme, transitionEnter, transitionLeave, transitionEnterTimeout, transitionLeaveTimeout, uid, this$ = this;
	      ref$ = this.getComputedState(), filteredOptions = ref$.filteredOptions, onOpenChange = ref$.onOpenChange, onSearchChange = ref$.onSearchChange, onValueChange = ref$.onValueChange, open = ref$.open, options = ref$.options, search = ref$.search, value = ref$.value, values = ref$.values;
	      if ((ref$ = this.props) != null) {
	        autofocus = ref$.autofocus, autosize = ref$.autosize, delimiters = ref$.delimiters, disabled = ref$.disabled, dropdownDirection = ref$.dropdownDirection, groupId = ref$.groupId, groups = ref$.groups, groupsAsColumns = ref$.groupsAsColumns, name = ref$.name, renderGroupTitle = ref$.renderGroupTitle, serialize = ref$.serialize, tether = ref$.tether, theme = ref$.theme, transitionEnter = ref$.transitionEnter, transitionLeave = ref$.transitionLeave, transitionEnterTimeout = ref$.transitionEnterTimeout, transitionLeaveTimeout = ref$.transitionLeaveTimeout, uid = ref$.uid;
	      }
	      return ReactSelectize(import$(import$({
	        autofocus: autofocus,
	        autosize: autosize,
	        className: "simple-select" + (!!this.props.className ? " " + this.props.className : ""),
	        delimiters: delimiters,
	        disabled: disabled,
	        dropdownDirection: dropdownDirection,
	        groupId: groupId,
	        groups: groups,
	        groupsAsColumns: groupsAsColumns,
	        name: name,
	        renderGroupTitle: renderGroupTitle,
	        scrollLock: this.state.scrollLock,
	        onScrollLockChange: function(scrollLock){
	          return this$.setState({
	            scrollLock: scrollLock
	          });
	        },
	        tether: tether,
	        theme: theme,
	        transitionEnter: transitionEnter,
	        transitionEnterTimeout: transitionEnterTimeout,
	        transitionLeave: transitionLeave,
	        transitionLeaveTimeout: transitionLeaveTimeout,
	        ref: 'select',
	        anchor: last(values),
	        onAnchorChange: function(arg$, callback){
	          return callback();
	        },
	        open: open,
	        onOpenChange: onOpenChange,
	        highlightedUid: this.state.highlightedUid,
	        onHighlightedUidChange: function(highlightedUid, callback){
	          return this$.setState({
	            highlightedUid: highlightedUid
	          }, callback);
	        },
	        firstOptionIndexToHighlight: function(){
	          return this$.firstOptionIndexToHighlight(options, value);
	        },
	        options: options,
	        renderOption: this.props.renderOption,
	        renderNoResultsFound: this.props.renderNoResultsFound,
	        search: search,
	        onSearchChange: function(search, callback){
	          return onSearchChange(search, callback);
	        },
	        values: values,
	        onValuesChange: function(newValues, callback){
	          var newValue, changed;
	          if (newValues.length === 0) {
	            return onValueChange(undefined, function(){
	              return callback();
	            });
	          } else {
	            newValue = last(newValues);
	            changed = !isEqualToObject(newValue, value);
	            return function(){
	              return function(callback){
	                if (changed) {
	                  return onValueChange(newValue, callback);
	                } else {
	                  return callback();
	                }
	              };
	            }()(function(){
	              callback();
	              return onOpenChange(false, function(){});
	            });
	          }
	        },
	        renderValue: function(item){
	          if (open && (!!this$.props.editable || search.length > 0)) {
	            return null;
	          } else {
	            return this$.props.renderValue(item);
	          }
	        },
	        onKeyboardSelectionFailed: function(which){
	          return onSearchChange("", function(){
	            return onOpenChange(false, function(){
	              return this$.props.onKeyboardSelectionFailed(which);
	            });
	          });
	        },
	        uid: function(item){
	          return {
	            uid: this$.props.uid(item),
	            open: open,
	            search: search
	          };
	        },
	        serialize: function(items){
	          return serialize(items[0]);
	        },
	        onBlur: function(e){
	          (function(){
	            return function(callback){
	              if (search.length > 0) {
	                return onSearchChange("", callback);
	              } else {
	                return callback();
	              }
	            };
	          })()(function(){
	            return this$.props.onBlur({
	              value: value,
	              open: open,
	              originalEvent: e
	            });
	          });
	        },
	        onFocus: function(e){
	          this$.props.onFocus({
	            value: value,
	            open: open,
	            originalEvent: e
	          });
	        },
	        placeholder: this.props.placeholder,
	        style: this.props.style
	      }, (function(){
	        switch (false) {
	        case typeof this.props.restoreOnBackspace !== 'function':
	          return {
	            restoreOnBackspace: this.props.restoreOnBackspace
	          };
	        default:
	          return {};
	        }
	      }.call(this))), (function(){
	        switch (false) {
	        case typeof this.props.renderNoResultsFound !== 'function':
	          return {
	            renderNoResultsFound: function(){
	              return this$.props.renderNoResultsFound(value, search);
	            }
	          };
	        default:
	          return {};
	        }
	      }.call(this))));
	    },
	    getComputedState: function(){
	      var open, search, value, values, ref$, onOpenChange, onSearchChange, onValueChange, optionsFromChildren, unfilteredOptions, filteredOptions, newOption, options, this$ = this;
	      open = this.isOpen();
	      search = this.props.hasOwnProperty('search')
	        ? this.props.search
	        : this.state.search;
	      value = this.value();
	      values = !!value
	        ? [value]
	        : [];
	      ref$ = map(function(p){
	        var result;
	        return result = (function(){
	          switch (false) {
	          case !(this.props.hasOwnProperty(p) && this.props.hasOwnProperty(camelize("on-" + p + "-change"))):
	            return function(o, callback){
	              this$.props[camelize("on-" + p + "-change")](o, function(){});
	              return this$.setState({}, callback);
	            };
	          case !(this.props.hasOwnProperty(p) && !this.props.hasOwnProperty(camelize("on-" + p + "-change"))):
	            return function(arg$, callback){
	              return callback();
	            };
	          case !(!this.props.hasOwnProperty(p) && this.props.hasOwnProperty(camelize("on-" + p + "-change"))):
	            return function(o, callback){
	              var ref$;
	              return this$.setState((ref$ = {}, ref$[p + ""] = o, ref$), function(){
	                callback();
	                return this$.props[camelize("on-" + p + "-change")](o, function(){});
	              });
	            };
	          case !(!this.props.hasOwnProperty(p) && !this.props.hasOwnProperty(camelize("on-" + p + "-change"))):
	            return function(o, callback){
	              var ref$;
	              return this$.setState((ref$ = {}, ref$[p + ""] = o, ref$), callback);
	            };
	          }
	        }.call(this$));
	      })(
	      ['open', 'search', 'value']), onOpenChange = ref$[0], onSearchChange = ref$[1], onValueChange = ref$[2];
	      optionsFromChildren = (function(){
	        var ref$;
	        switch (false) {
	        case !((ref$ = this.props) != null && ref$.children):
	          return map(function(it){
	            var ref$, value, children;
	            if ((ref$ = it != null ? it.props : void 8) != null) {
	              value = ref$.value, children = ref$.children;
	            }
	            return {
	              label: children,
	              value: value
	            };
	          })(
	          toString$.call(this.props.children).slice(8, -1) === 'Array'
	            ? this.props.children
	            : [this.props.children]);
	        default:
	          return [];
	        }
	      }.call(this));
	      unfilteredOptions = this.props.hasOwnProperty('options') ? (ref$ = this.props.options) != null
	        ? ref$
	        : [] : optionsFromChildren;
	      filteredOptions = this.props.filterOptions(unfilteredOptions, search);
	      newOption = (function(){
	        switch (false) {
	        case typeof this.props.createFromSearch !== 'function':
	          return this.props.createFromSearch(filteredOptions, search);
	        default:
	          return null;
	        }
	      }.call(this));
	      options = (!!newOption
	        ? [(ref$ = import$({}, newOption), ref$.newOption = true, ref$)]
	        : []).concat(filteredOptions);
	      return {
	        open: open,
	        search: search,
	        value: value,
	        values: values,
	        onOpenChange: function(open, callback){
	          onOpenChange(open, function(){
	            callback();
	            if (!!this$.props.editable && (this$.isOpen() && !!value)) {
	              return onSearchChange(this$.props.editable(value) + "" + (search.length === 1 ? search : ''), function(){
	                return this$.highlightFirstSelectableOption(function(){});
	              });
	            }
	          });
	        },
	        onSearchChange: onSearchChange,
	        onValueChange: onValueChange,
	        filteredOptions: filteredOptions,
	        options: options
	      };
	    },
	    getInitialState: function(){
	      var ref$;
	      return {
	        highlightedUid: undefined,
	        open: false,
	        scrollLock: false,
	        search: "",
	        value: (ref$ = this.props) != null ? ref$.defaultValue : void 8
	      };
	    },
	    firstOptionIndexToHighlight: function(options, value){
	      var index, ref$, this$ = this;
	      index = !!value ? findIndex(function(it){
	        return isEqualToObject(it, value);
	      }, options) : undefined;
	      switch (false) {
	      case typeof index === 'undefined':
	        return index;
	      case options.length !== 1:
	        return 0;
	      case typeof ((ref$ = options[0]) != null ? ref$.newOption : void 8) !== 'undefined':
	        return 0;
	      default:
	        if (all(function(it){
	          return typeof it.selectable === 'boolean' && !it.selectable;
	        })(
	        drop(1)(
	        options))) {
	          return 0;
	        } else {
	          return 1;
	        }
	      }
	    },
	    focus: function(){
	      this.refs.select.focus();
	    },
	    blur: function(){
	      this.refs.select.blur();
	    },
	    highlightFirstSelectableOption: function(callback){
	      var ref$, options, value;
	      callback == null && (callback = function(){});
	      if (this.state.open) {
	        ref$ = this.getComputedState(), options = ref$.options, value = ref$.value;
	        this.refs.select.highlightAndScrollToSelectableOption(this.firstOptionIndexToHighlight(options, value), 1, callback);
	      } else {
	        callback();
	      }
	    },
	    value: function(){
	      if (this.props.hasOwnProperty('value')) {
	        return this.props.value;
	      } else {
	        return this.state.value;
	      }
	    },
	    isOpen: function(){
	      if (this.props.hasOwnProperty('open')) {
	        return this.props.open;
	      } else {
	        return this.state.open;
	      }
	    }
	  });
	  function curry$(f, bound){
	    var context,
	    _curry = function(args) {
	      return f.length > 1 ? function(){
	        var params = args ? args.concat() : [];
	        context = bound ? context || this : this;
	        return params.push.apply(params, arguments) <
	            f.length && arguments.length ?
	          _curry.call(context, params) : f.apply(context, params);
	      } : f;
	    };
	    return _curry();
	  }
	  function import$(obj, src){
	    var own = {}.hasOwnProperty;
	    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	    return obj;
	  }
	}).call(this);


/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var ref$, createClass, div, isEqualToObject;
	  ref$ = __webpack_require__(1), createClass = ref$.createClass, div = ref$.DOM.div;
	  isEqualToObject = __webpack_require__(84).isEqualToObject;
	  module.exports = createClass({
	    getDefaultProps: function(){
	      return {};
	    },
	    render: function(){
	      return div({
	        className: 'value-wrapper'
	      }, this.props.renderItem(this.props.item));
	    },
	    shouldComponentUpdate: function(nextProps){
	      var ref$;
	      return !isEqualToObject(nextProps != null ? nextProps.uid : void 8, (ref$ = this.props) != null ? ref$.uid : void 8);
	    }
	  });
	}).call(this);


/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroup
	 */
	
	'use strict';
	
	var React = __webpack_require__(266);
	
	var assign = __webpack_require__(191);
	
	var ReactTransitionGroup = __webpack_require__(402);
	var ReactCSSTransitionGroupChild = __webpack_require__(400);
	
	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;
	
	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
	
	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	        }
	    }
	  };
	}
	
	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',
	
	  propTypes: {
	    transitionName: ReactCSSTransitionGroupChild.propTypes.name,
	
	    transitionAppear: React.PropTypes.bool,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool,
	    transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	    transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	    transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	  },
	
	  getDefaultProps: function () {
	    return {
	      transitionAppear: false,
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },
	
	  _wrapChild: function (child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return React.createElement(ReactCSSTransitionGroupChild, {
	      name: this.props.transitionName,
	      appear: this.props.transitionAppear,
	      enter: this.props.transitionEnter,
	      leave: this.props.transitionLeave,
	      appearTimeout: this.props.transitionAppearTimeout,
	      enterTimeout: this.props.transitionEnterTimeout,
	      leaveTimeout: this.props.transitionLeaveTimeout
	    }, child);
	  },
	
	  render: function () {
	    return React.createElement(ReactTransitionGroup, assign({}, this.props, { childFactory: this._wrapChild }));
	  }
	});
	
	module.exports = ReactCSSTransitionGroup;

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */
	
	'use strict';
	
	var React = __webpack_require__(266);
	var ReactDOM = __webpack_require__(430);
	
	var CSSCore = __webpack_require__(384);
	var ReactTransitionEvents = __webpack_require__(379);
	
	var onlyChild = __webpack_require__(432);
	
	// We don't remove the element from the DOM until we receive an animationend or
	// transitionend event. If the user screws up and forgets to add an animation
	// their node will be stuck in the DOM forever, so we detect if an animation
	// does not start and if it doesn't, we just call the end listener immediately.
	var TICK = 17;
	
	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',
	
	  propTypes: {
	    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      active: React.PropTypes.string
	    }), React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      enterActive: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      leaveActive: React.PropTypes.string,
	      appear: React.PropTypes.string,
	      appearActive: React.PropTypes.string
	    })]).isRequired,
	
	    // Once we require timeouts to be specified, we can remove the
	    // boolean flags (appear etc.) and just accept a number
	    // or a bool for the timeout flags (appearTimeout etc.)
	    appear: React.PropTypes.bool,
	    enter: React.PropTypes.bool,
	    leave: React.PropTypes.bool,
	    appearTimeout: React.PropTypes.number,
	    enterTimeout: React.PropTypes.number,
	    leaveTimeout: React.PropTypes.number
	  },
	
	  transition: function (animationType, finishCallback, userSpecifiedDelay) {
	    var node = ReactDOM.findDOMNode(this);
	
	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }
	
	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timeout = null;
	
	    var endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      clearTimeout(timeout);
	
	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);
	
	      ReactTransitionEvents.removeEndEventListener(node, endListener);
	
	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };
	
	    CSSCore.addClass(node, className);
	
	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);
	
	    // If the user specified a timeout delay.
	    if (userSpecifiedDelay) {
	      // Clean-up the animation after the specified delay
	      timeout = setTimeout(endListener, userSpecifiedDelay);
	      this.transitionTimeouts.push(timeout);
	    } else {
	      // DEPRECATED: this listener will be removed in a future version of react
	      ReactTransitionEvents.addEndEventListener(node, endListener);
	    }
	  },
	
	  queueClass: function (className) {
	    this.classNameQueue.push(className);
	
	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },
	
	  flushClassNameQueue: function () {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(CSSCore.addClass.bind(CSSCore, ReactDOM.findDOMNode(this)));
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },
	
	  componentWillMount: function () {
	    this.classNameQueue = [];
	    this.transitionTimeouts = [];
	  },
	
	  componentWillUnmount: function () {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });
	  },
	
	  componentWillAppear: function (done) {
	    if (this.props.appear) {
	      this.transition('appear', done, this.props.appearTimeout);
	    } else {
	      done();
	    }
	  },
	
	  componentWillEnter: function (done) {
	    if (this.props.enter) {
	      this.transition('enter', done, this.props.enterTimeout);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function (done) {
	    if (this.props.leave) {
	      this.transition('leave', done, this.props.leaveTimeout);
	    } else {
	      done();
	    }
	  },
	
	  render: function () {
	    return onlyChild(this.props.children);
	  }
	});
	
	module.exports = ReactCSSTransitionGroupChild;

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */
	
	'use strict';
	
	var flattenChildren = __webpack_require__(431);
	
	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children) {
	    if (!children) {
	      return children;
	    }
	    return flattenChildren(children);
	  },
	
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};
	
	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};
	
	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }
	
	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }
	
	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }
	
	    return childMapping;
	  }
	};
	
	module.exports = ReactTransitionChildMapping;

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */
	
	'use strict';
	
	var React = __webpack_require__(266);
	var ReactTransitionChildMapping = __webpack_require__(401);
	
	var assign = __webpack_require__(191);
	var emptyFunction = __webpack_require__(413);
	
	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',
	
	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },
	
	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },
	
	  getInitialState: function () {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },
	
	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },
	
	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });
	
	    var key;
	
	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  },
	
	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },
	
	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];
	
	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },
	
	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	    return React.createElement(this.props.component, this.props, childrenToRender);
	  }
	});
	
	module.exports = ReactTransitionGroup;

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/
	
	'use strict';
	
	var shallowEqual = __webpack_require__(429);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.0 */
	
	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory(require, exports, module);
	  } else {
	    root.Tether = factory();
	  }
	}(this, function(require, exports, module) {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var TetherBase = undefined;
	if (typeof TetherBase === 'undefined') {
	  TetherBase = { modules: [] };
	}
	
	var zeroElement = null;
	
	// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
	// if the element lies within a nested document (<frame> or <iframe>-like).
	function getActualBoundingClientRect(node) {
	  var boundingRect = node.getBoundingClientRect();
	
	  // The original object returned by getBoundingClientRect is immutable, so we clone it
	  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
	  var rect = {};
	  for (var k in boundingRect) {
	    rect[k] = boundingRect[k];
	  }
	
	  if (node.ownerDocument !== document) {
	    var _frameElement = node.ownerDocument.defaultView.frameElement;
	    if (_frameElement) {
	      var frameRect = getActualBoundingClientRect(_frameElement);
	      rect.top += frameRect.top;
	      rect.bottom += frameRect.top;
	      rect.left += frameRect.left;
	      rect.right += frameRect.left;
	    }
	  }
	
	  return rect;
	}
	
	function getScrollParents(el) {
	  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	  var computedStyle = getComputedStyle(el) || {};
	  var position = computedStyle.position;
	  var parents = [];
	
	  if (position === 'fixed') {
	    return [el];
	  }
	
	  var parent = el;
	  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
	    var style = undefined;
	    try {
	      style = getComputedStyle(parent);
	    } catch (err) {}
	
	    if (typeof style === 'undefined' || style === null) {
	      parents.push(parent);
	      return parents;
	    }
	
	    var _style = style;
	    var overflow = _style.overflow;
	    var overflowX = _style.overflowX;
	    var overflowY = _style.overflowY;
	
	    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
	      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	        parents.push(parent);
	      }
	    }
	  }
	
	  parents.push(el.ownerDocument.body);
	
	  // If the node is within a frame, account for the parent window scroll
	  if (el.ownerDocument !== document) {
	    parents.push(el.ownerDocument.defaultView);
	  }
	
	  return parents;
	}
	
	var uniqueId = (function () {
	  var id = 0;
	  return function () {
	    return ++id;
	  };
	})();
	
	var zeroPosCache = {};
	var getOrigin = function getOrigin() {
	  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	  // jitter as the user scrolls that messes with our ability to detect if two positions
	  // are equivilant or not.  We place an element at the top left of the page that will
	  // get the same jitter, so we can cancel the two out.
	  var node = zeroElement;
	  if (!node || !document.body.contains(node)) {
	    node = document.createElement('div');
	    node.setAttribute('data-tether-id', uniqueId());
	    extend(node.style, {
	      top: 0,
	      left: 0,
	      position: 'absolute'
	    });
	
	    document.body.appendChild(node);
	
	    zeroElement = node;
	  }
	
	  var id = node.getAttribute('data-tether-id');
	  if (typeof zeroPosCache[id] === 'undefined') {
	    zeroPosCache[id] = getActualBoundingClientRect(node);
	
	    // Clear the cache when this position call is done
	    defer(function () {
	      delete zeroPosCache[id];
	    });
	  }
	
	  return zeroPosCache[id];
	};
	
	function removeUtilElements() {
	  if (zeroElement) {
	    document.body.removeChild(zeroElement);
	  }
	  zeroElement = null;
	};
	
	function getBounds(el) {
	  var doc = undefined;
	  if (el === document) {
	    doc = document;
	    el = document.documentElement;
	  } else {
	    doc = el.ownerDocument;
	  }
	
	  var docEl = doc.documentElement;
	
	  var box = getActualBoundingClientRect(el);
	
	  var origin = getOrigin();
	
	  box.top -= origin.top;
	  box.left -= origin.left;
	
	  if (typeof box.width === 'undefined') {
	    box.width = document.body.scrollWidth - box.left - box.right;
	  }
	  if (typeof box.height === 'undefined') {
	    box.height = document.body.scrollHeight - box.top - box.bottom;
	  }
	
	  box.top = box.top - docEl.clientTop;
	  box.left = box.left - docEl.clientLeft;
	  box.right = doc.body.clientWidth - box.width - box.left;
	  box.bottom = doc.body.clientHeight - box.height - box.top;
	
	  return box;
	}
	
	function getOffsetParent(el) {
	  return el.offsetParent || document.documentElement;
	}
	
	var _scrollBarSize = null;
	function getScrollBarSize() {
	  if (_scrollBarSize) {
	    return _scrollBarSize;
	  }
	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  extend(outer.style, {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    pointerEvents: 'none',
	    visibility: 'hidden',
	    width: '200px',
	    height: '150px',
	    overflow: 'hidden'
	  });
	
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	
	  var widthContained = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var widthScroll = inner.offsetWidth;
	
	  if (widthContained === widthScroll) {
	    widthScroll = outer.clientWidth;
	  }
	
	  document.body.removeChild(outer);
	
	  var width = widthContained - widthScroll;
	
	  _scrollBarSize = { width: width, height: width };
	  return _scrollBarSize;
	}
	
	function extend() {
	  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var args = [];
	
	  Array.prototype.push.apply(args, arguments);
	
	  args.slice(1).forEach(function (obj) {
	    if (obj) {
	      for (var key in obj) {
	        if (({}).hasOwnProperty.call(obj, key)) {
	          out[key] = obj[key];
	        }
	      }
	    }
	  });
	
	  return out;
	}
	
	function removeClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.remove(cls);
	      }
	    });
	  } else {
	    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
	    var className = getClassName(el).replace(regex, ' ');
	    setClassName(el, className);
	  }
	}
	
	function addClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.add(cls);
	      }
	    });
	  } else {
	    removeClass(el, name);
	    var cls = getClassName(el) + (' ' + name);
	    setClassName(el, cls);
	  }
	}
	
	function hasClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    return el.classList.contains(name);
	  }
	  var className = getClassName(el);
	  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
	}
	
	function getClassName(el) {
	  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
	  // completely separately SVGAnimatedString base classes
	  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
	    return el.className.baseVal;
	  }
	  return el.className;
	}
	
	function setClassName(el, className) {
	  el.setAttribute('class', className);
	}
	
	function updateClasses(el, add, all) {
	  // Of the set of 'all' classes, we need the 'add' classes, and only the
	  // 'add' classes to be set.
	  all.forEach(function (cls) {
	    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
	      removeClass(el, cls);
	    }
	  });
	
	  add.forEach(function (cls) {
	    if (!hasClass(el, cls)) {
	      addClass(el, cls);
	    }
	  });
	}
	
	var deferred = [];
	
	var defer = function defer(fn) {
	  deferred.push(fn);
	};
	
	var flush = function flush() {
	  var fn = undefined;
	  while (fn = deferred.pop()) {
	    fn();
	  }
	};
	
	var Evented = (function () {
	  function Evented() {
	    _classCallCheck(this, Evented);
	  }
	
	  _createClass(Evented, [{
	    key: 'on',
	    value: function on(event, handler, ctx) {
	      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	      if (typeof this.bindings === 'undefined') {
	        this.bindings = {};
	      }
	      if (typeof this.bindings[event] === 'undefined') {
	        this.bindings[event] = [];
	      }
	      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
	    }
	  }, {
	    key: 'once',
	    value: function once(event, handler, ctx) {
	      this.on(event, handler, ctx, true);
	    }
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
	        return;
	      }
	
	      if (typeof handler === 'undefined') {
	        delete this.bindings[event];
	      } else {
	        var i = 0;
	        while (i < this.bindings[event].length) {
	          if (this.bindings[event][i].handler === handler) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'trigger',
	    value: function trigger(event) {
	      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
	        var i = 0;
	
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        while (i < this.bindings[event].length) {
	          var _bindings$event$i = this.bindings[event][i];
	          var handler = _bindings$event$i.handler;
	          var ctx = _bindings$event$i.ctx;
	          var once = _bindings$event$i.once;
	
	          var context = ctx;
	          if (typeof context === 'undefined') {
	            context = this;
	          }
	
	          handler.apply(context, args);
	
	          if (once) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }]);
	
	  return Evented;
	})();
	
	TetherBase.Utils = {
	  getActualBoundingClientRect: getActualBoundingClientRect,
	  getScrollParents: getScrollParents,
	  getBounds: getBounds,
	  getOffsetParent: getOffsetParent,
	  extend: extend,
	  addClass: addClass,
	  removeClass: removeClass,
	  hasClass: hasClass,
	  updateClasses: updateClasses,
	  defer: defer,
	  flush: flush,
	  uniqueId: uniqueId,
	  Evented: Evented,
	  getScrollBarSize: getScrollBarSize,
	  removeUtilElements: removeUtilElements
	};
	/* globals TetherBase, performance */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	if (typeof TetherBase === 'undefined') {
	  throw new Error('You must include the utils.js file before tether.js');
	}
	
	var _TetherBase$Utils = TetherBase.Utils;
	var getScrollParents = _TetherBase$Utils.getScrollParents;
	var getBounds = _TetherBase$Utils.getBounds;
	var getOffsetParent = _TetherBase$Utils.getOffsetParent;
	var extend = _TetherBase$Utils.extend;
	var addClass = _TetherBase$Utils.addClass;
	var removeClass = _TetherBase$Utils.removeClass;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	var flush = _TetherBase$Utils.flush;
	var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
	var removeUtilElements = _TetherBase$Utils.removeUtilElements;
	
	function within(a, b) {
	  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	  return a + diff >= b && b >= a - diff;
	}
	
	var transformKey = (function () {
	  if (typeof document === 'undefined') {
	    return '';
	  }
	  var el = document.createElement('div');
	
	  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
	  for (var i = 0; i < transforms.length; ++i) {
	    var key = transforms[i];
	    if (el.style[key] !== undefined) {
	      return key;
	    }
	  }
	})();
	
	var tethers = [];
	
	var position = function position() {
	  tethers.forEach(function (tether) {
	    tether.position(false);
	  });
	  flush();
	};
	
	function now() {
	  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
	    return performance.now();
	  }
	  return +new Date();
	}
	
	(function () {
	  var lastCall = null;
	  var lastDuration = null;
	  var pendingTimeout = null;
	
	  var tick = function tick() {
	    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
	      // We voluntarily throttle ourselves if we can't manage 60fps
	      lastDuration = Math.min(lastDuration - 16, 250);
	
	      // Just in case this is the last event, remember to position just once more
	      pendingTimeout = setTimeout(tick, 250);
	      return;
	    }
	
	    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
	      // Some browsers call events a little too frequently, refuse to run more than is reasonable
	      return;
	    }
	
	    if (pendingTimeout != null) {
	      clearTimeout(pendingTimeout);
	      pendingTimeout = null;
	    }
	
	    lastCall = now();
	    position();
	    lastDuration = now() - lastCall;
	  };
	
	  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
	    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
	      window.addEventListener(event, tick);
	    });
	  }
	})();
	
	var MIRROR_LR = {
	  center: 'center',
	  left: 'right',
	  right: 'left'
	};
	
	var MIRROR_TB = {
	  middle: 'middle',
	  top: 'bottom',
	  bottom: 'top'
	};
	
	var OFFSET_MAP = {
	  top: 0,
	  left: 0,
	  middle: '50%',
	  center: '50%',
	  bottom: '100%',
	  right: '100%'
	};
	
	var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
	  var left = attachment.left;
	  var top = attachment.top;
	
	  if (left === 'auto') {
	    left = MIRROR_LR[relativeToAttachment.left];
	  }
	
	  if (top === 'auto') {
	    top = MIRROR_TB[relativeToAttachment.top];
	  }
	
	  return { left: left, top: top };
	};
	
	var attachmentToOffset = function attachmentToOffset(attachment) {
	  var left = attachment.left;
	  var top = attachment.top;
	
	  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
	    left = OFFSET_MAP[attachment.left];
	  }
	
	  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
	    top = OFFSET_MAP[attachment.top];
	  }
	
	  return { left: left, top: top };
	};
	
	function addOffset() {
	  var out = { top: 0, left: 0 };
	
	  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
	    offsets[_key] = arguments[_key];
	  }
	
	  offsets.forEach(function (_ref) {
	    var top = _ref.top;
	    var left = _ref.left;
	
	    if (typeof top === 'string') {
	      top = parseFloat(top, 10);
	    }
	    if (typeof left === 'string') {
	      left = parseFloat(left, 10);
	    }
	
	    out.top += top;
	    out.left += left;
	  });
	
	  return out;
	}
	
	function offsetToPx(offset, size) {
	  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
	    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
	  }
	  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
	    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
	  }
	
	  return offset;
	}
	
	var parseOffset = function parseOffset(value) {
	  var _value$split = value.split(' ');
	
	  var _value$split2 = _slicedToArray(_value$split, 2);
	
	  var top = _value$split2[0];
	  var left = _value$split2[1];
	
	  return { top: top, left: left };
	};
	var parseAttachment = parseOffset;
	
	var TetherClass = (function (_Evented) {
	  _inherits(TetherClass, _Evented);
	
	  function TetherClass(options) {
	    var _this = this;
	
	    _classCallCheck(this, TetherClass);
	
	    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
	    this.position = this.position.bind(this);
	
	    tethers.push(this);
	
	    this.history = [];
	
	    this.setOptions(options, false);
	
	    TetherBase.modules.forEach(function (module) {
	      if (typeof module.initialize !== 'undefined') {
	        module.initialize.call(_this);
	      }
	    });
	
	    this.position();
	  }
	
	  _createClass(TetherClass, [{
	    key: 'getClass',
	    value: function getClass() {
	      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var classes = this.options.classes;
	
	      if (typeof classes !== 'undefined' && classes[key]) {
	        return this.options.classes[key];
	      } else if (this.options.classPrefix) {
	        return this.options.classPrefix + '-' + key;
	      } else {
	        return key;
	      }
	    }
	  }, {
	    key: 'setOptions',
	    value: function setOptions(options) {
	      var _this2 = this;
	
	      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	      var defaults = {
	        offset: '0 0',
	        targetOffset: '0 0',
	        targetAttachment: 'auto auto',
	        classPrefix: 'tether'
	      };
	
	      this.options = extend(defaults, options);
	
	      var _options = this.options;
	      var element = _options.element;
	      var target = _options.target;
	      var targetModifier = _options.targetModifier;
	
	      this.element = element;
	      this.target = target;
	      this.targetModifier = targetModifier;
	
	      if (this.target === 'viewport') {
	        this.target = document.body;
	        this.targetModifier = 'visible';
	      } else if (this.target === 'scroll-handle') {
	        this.target = document.body;
	        this.targetModifier = 'scroll-handle';
	      }
	
	      ['element', 'target'].forEach(function (key) {
	        if (typeof _this2[key] === 'undefined') {
	          throw new Error('Tether Error: Both element and target must be defined');
	        }
	
	        if (typeof _this2[key].jquery !== 'undefined') {
	          _this2[key] = _this2[key][0];
	        } else if (typeof _this2[key] === 'string') {
	          _this2[key] = document.querySelector(_this2[key]);
	        }
	      });
	
	      addClass(this.element, this.getClass('element'));
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('target'));
	      }
	
	      if (!this.options.attachment) {
	        throw new Error('Tether Error: You must provide an attachment');
	      }
	
	      this.targetAttachment = parseAttachment(this.options.targetAttachment);
	      this.attachment = parseAttachment(this.options.attachment);
	      this.offset = parseOffset(this.options.offset);
	      this.targetOffset = parseOffset(this.options.targetOffset);
	
	      if (typeof this.scrollParents !== 'undefined') {
	        this.disable();
	      }
	
	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParents = [this.target];
	      } else {
	        this.scrollParents = getScrollParents(this.target);
	      }
	
	      if (!(this.options.enabled === false)) {
	        this.enable(pos);
	      }
	    }
	  }, {
	    key: 'getTargetBounds',
	    value: function getTargetBounds() {
	      if (typeof this.targetModifier !== 'undefined') {
	        if (this.targetModifier === 'visible') {
	          if (this.target === document.body) {
	            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
	          } else {
	            var bounds = getBounds(this.target);
	
	            var out = {
	              height: bounds.height,
	              width: bounds.width,
	              top: bounds.top,
	              left: bounds.left
	            };
	
	            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
	            out.height = Math.min(innerHeight, out.height);
	            out.height -= 2;
	
	            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
	            out.width = Math.min(innerWidth, out.width);
	            out.width -= 2;
	
	            if (out.top < pageYOffset) {
	              out.top = pageYOffset;
	            }
	            if (out.left < pageXOffset) {
	              out.left = pageXOffset;
	            }
	
	            return out;
	          }
	        } else if (this.targetModifier === 'scroll-handle') {
	          var bounds = undefined;
	          var target = this.target;
	          if (target === document.body) {
	            target = document.documentElement;
	
	            bounds = {
	              left: pageXOffset,
	              top: pageYOffset,
	              height: innerHeight,
	              width: innerWidth
	            };
	          } else {
	            bounds = getBounds(target);
	          }
	
	          var style = getComputedStyle(target);
	
	          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
	
	          var scrollBottom = 0;
	          if (hasBottomScroll) {
	            scrollBottom = 15;
	          }
	
	          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
	
	          var out = {
	            width: 15,
	            height: height * 0.975 * (height / target.scrollHeight),
	            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	          };
	
	          var fitAdj = 0;
	          if (height < 408 && this.target === document.body) {
	            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	          }
	
	          if (this.target !== document.body) {
	            out.height = Math.max(out.height, 24);
	          }
	
	          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
	          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
	
	          if (this.target === document.body) {
	            out.height = Math.max(out.height, 24);
	          }
	
	          return out;
	        }
	      } else {
	        return getBounds(this.target);
	      }
	    }
	  }, {
	    key: 'clearCache',
	    value: function clearCache() {
	      this._cache = {};
	    }
	  }, {
	    key: 'cache',
	    value: function cache(k, getter) {
	      // More than one module will often need the same DOM info, so
	      // we keep a cache which is cleared on each position call
	      if (typeof this._cache === 'undefined') {
	        this._cache = {};
	      }
	
	      if (typeof this._cache[k] === 'undefined') {
	        this._cache[k] = getter.call(this);
	      }
	
	      return this._cache[k];
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      var _this3 = this;
	
	      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('enabled'));
	      }
	      addClass(this.element, this.getClass('enabled'));
	      this.enabled = true;
	
	      this.scrollParents.forEach(function (parent) {
	        if (parent !== _this3.target.ownerDocument) {
	          parent.addEventListener('scroll', _this3.position);
	        }
	      });
	
	      if (pos) {
	        this.position();
	      }
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      var _this4 = this;
	
	      removeClass(this.target, this.getClass('enabled'));
	      removeClass(this.element, this.getClass('enabled'));
	      this.enabled = false;
	
	      if (typeof this.scrollParents !== 'undefined') {
	        this.scrollParents.forEach(function (parent) {
	          parent.removeEventListener('scroll', _this4.position);
	        });
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this5 = this;
	
	      this.disable();
	
	      tethers.forEach(function (tether, i) {
	        if (tether === _this5) {
	          tethers.splice(i, 1);
	        }
	      });
	
	      // Remove any elements we were using for convenience from the DOM
	      if (tethers.length === 0) {
	        removeUtilElements();
	      }
	    }
	  }, {
	    key: 'updateAttachClasses',
	    value: function updateAttachClasses(elementAttach, targetAttach) {
	      var _this6 = this;
	
	      elementAttach = elementAttach || this.attachment;
	      targetAttach = targetAttach || this.targetAttachment;
	      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
	
	      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
	        // updateAttachClasses can be called more than once in a position call, so
	        // we need to clean up after ourselves such that when the last defer gets
	        // ran it doesn't add any extra classes from previous calls.
	        this._addAttachClasses.splice(0, this._addAttachClasses.length);
	      }
	
	      if (typeof this._addAttachClasses === 'undefined') {
	        this._addAttachClasses = [];
	      }
	      var add = this._addAttachClasses;
	
	      if (elementAttach.top) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
	      }
	      if (elementAttach.left) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
	      }
	      if (targetAttach.top) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
	      }
	      if (targetAttach.left) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
	      }
	
	      var all = [];
	      sides.forEach(function (side) {
	        all.push(_this6.getClass('element-attached') + '-' + side);
	        all.push(_this6.getClass('target-attached') + '-' + side);
	      });
	
	      defer(function () {
	        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
	          return;
	        }
	
	        updateClasses(_this6.element, _this6._addAttachClasses, all);
	        if (!(_this6.options.addTargetClasses === false)) {
	          updateClasses(_this6.target, _this6._addAttachClasses, all);
	        }
	
	        delete _this6._addAttachClasses;
	      });
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      var _this7 = this;
	
	      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
	      // tethers (in which case call Tether.Utils.flush yourself when you're done)
	
	      if (!this.enabled) {
	        return;
	      }
	
	      this.clearCache();
	
	      // Turn 'auto' attachments into the appropriate corner or edge
	      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
	
	      this.updateAttachClasses(this.attachment, targetAttachment);
	
	      var elementPos = this.cache('element-bounds', function () {
	        return getBounds(_this7.element);
	      });
	
	      var width = elementPos.width;
	      var height = elementPos.height;
	
	      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	        var _lastSize = this.lastSize;
	
	        // We cache the height and width to make it possible to position elements that are
	        // getting hidden.
	        width = _lastSize.width;
	        height = _lastSize.height;
	      } else {
	        this.lastSize = { width: width, height: height };
	      }
	
	      var targetPos = this.cache('target-bounds', function () {
	        return _this7.getTargetBounds();
	      });
	      var targetSize = targetPos;
	
	      // Get an actual px offset from the attachment
	      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
	      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
	
	      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
	      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
	
	      // Add the manually provided offset
	      offset = addOffset(offset, manualOffset);
	      targetOffset = addOffset(targetOffset, manualTargetOffset);
	
	      // It's now our goal to make (element position + offset) == (target position + target offset)
	      var left = targetPos.left + targetOffset.left - offset.left;
	      var top = targetPos.top + targetOffset.top - offset.top;
	
	      for (var i = 0; i < TetherBase.modules.length; ++i) {
	        var _module2 = TetherBase.modules[i];
	        var ret = _module2.position.call(this, {
	          left: left,
	          top: top,
	          targetAttachment: targetAttachment,
	          targetPos: targetPos,
	          elementPos: elementPos,
	          offset: offset,
	          targetOffset: targetOffset,
	          manualOffset: manualOffset,
	          manualTargetOffset: manualTargetOffset,
	          scrollbarSize: scrollbarSize,
	          attachment: this.attachment
	        });
	
	        if (ret === false) {
	          return false;
	        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
	          continue;
	        } else {
	          top = ret.top;
	          left = ret.left;
	        }
	      }
	
	      // We describe the position three different ways to give the optimizer
	      // a chance to decide the best possible way to position the element
	      // with the fewest repaints.
	      var next = {
	        // It's position relative to the page (absolute positioning when
	        // the element is a child of the body)
	        page: {
	          top: top,
	          left: left
	        },
	
	        // It's position relative to the viewport (fixed positioning)
	        viewport: {
	          top: top - pageYOffset,
	          bottom: pageYOffset - top - height + innerHeight,
	          left: left - pageXOffset,
	          right: pageXOffset - left - width + innerWidth
	        }
	      };
	
	      var doc = this.target.ownerDocument;
	      var win = doc.defaultView;
	
	      var scrollbarSize = undefined;
	      if (win.innerHeight > doc.documentElement.clientHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }
	
	      if (win.innerWidth > doc.documentElement.clientWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }
	
	      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
	        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	        next.page.bottom = doc.body.scrollHeight - top - height;
	        next.page.right = doc.body.scrollWidth - left - width;
	      }
	
	      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
	        (function () {
	          var offsetParent = _this7.cache('target-offsetparent', function () {
	            return getOffsetParent(_this7.target);
	          });
	          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
	            return getBounds(offsetParent);
	          });
	          var offsetParentStyle = getComputedStyle(offsetParent);
	          var offsetParentSize = offsetPosition;
	
	          var offsetBorder = {};
	          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
	          });
	
	          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
	
	          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
	            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
	              // We're within the visible part of the target's scroll parent
	              var scrollTop = offsetParent.scrollTop;
	              var scrollLeft = offsetParent.scrollLeft;
	
	              // It's position relative to the target's offset parent (absolute positioning when
	              // the element is moved to be a child of the target's offset parent).
	              next.offset = {
	                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	              };
	            }
	          }
	        })();
	      }
	
	      // We could also travel up the DOM and try each containing context, rather than only
	      // looking at the body, but we're gonna get diminishing returns.
	
	      this.move(next);
	
	      this.history.unshift(next);
	
	      if (this.history.length > 3) {
	        this.history.pop();
	      }
	
	      if (flushChanges) {
	        flush();
	      }
	
	      return true;
	    }
	
	    // THE ISSUE
	  }, {
	    key: 'move',
	    value: function move(pos) {
	      var _this8 = this;
	
	      if (!(typeof this.element.parentNode !== 'undefined')) {
	        return;
	      }
	
	      var same = {};
	
	      for (var type in pos) {
	        same[type] = {};
	
	        for (var key in pos[type]) {
	          var found = false;
	
	          for (var i = 0; i < this.history.length; ++i) {
	            var point = this.history[i];
	            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
	              found = true;
	              break;
	            }
	          }
	
	          if (!found) {
	            same[type][key] = true;
	          }
	        }
	      }
	
	      var css = { top: '', left: '', right: '', bottom: '' };
	
	      var transcribe = function transcribe(_same, _pos) {
	        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
	        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
	        if (gpu !== false) {
	          var yPos = undefined,
	              xPos = undefined;
	          if (_same.top) {
	            css.top = 0;
	            yPos = _pos.top;
	          } else {
	            css.bottom = 0;
	            yPos = -_pos.bottom;
	          }
	
	          if (_same.left) {
	            css.left = 0;
	            xPos = _pos.left;
	          } else {
	            css.right = 0;
	            xPos = -_pos.right;
	          }
	
	          if (window.matchMedia) {
	            // HubSpot/tether#207
	            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
	            if (!retina) {
	              xPos = Math.round(xPos);
	              yPos = Math.round(yPos);
	            }
	          }
	
	          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';
	
	          if (transformKey !== 'msTransform') {
	            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
	            // but IE9 doesn't support 3d transforms and will choke.
	            css[transformKey] += " translateZ(0)";
	          }
	        } else {
	          if (_same.top) {
	            css.top = _pos.top + 'px';
	          } else {
	            css.bottom = _pos.bottom + 'px';
	          }
	
	          if (_same.left) {
	            css.left = _pos.left + 'px';
	          } else {
	            css.right = _pos.right + 'px';
	          }
	        }
	      };
	
	      var moved = false;
	      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	        css.position = 'absolute';
	        transcribe(same.page, pos.page);
	      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	        css.position = 'fixed';
	        transcribe(same.viewport, pos.viewport);
	      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
	        (function () {
	          css.position = 'absolute';
	          var offsetParent = _this8.cache('target-offsetparent', function () {
	            return getOffsetParent(_this8.target);
	          });
	
	          if (getOffsetParent(_this8.element) !== offsetParent) {
	            defer(function () {
	              _this8.element.parentNode.removeChild(_this8.element);
	              offsetParent.appendChild(_this8.element);
	            });
	          }
	
	          transcribe(same.offset, pos.offset);
	          moved = true;
	        })();
	      } else {
	        css.position = 'absolute';
	        transcribe({ top: true, left: true }, pos.page);
	      }
	
	      if (!moved) {
	        if (this.options.bodyElement) {
	          this.options.bodyElement.appendChild(this.element);
	        } else {
	          var offsetParentIsBody = true;
	          var currentNode = this.element.parentNode;
	          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
	            if (getComputedStyle(currentNode).position !== 'static') {
	              offsetParentIsBody = false;
	              break;
	            }
	
	            currentNode = currentNode.parentNode;
	          }
	
	          if (!offsetParentIsBody) {
	            this.element.parentNode.removeChild(this.element);
	            this.element.ownerDocument.body.appendChild(this.element);
	          }
	        }
	      }
	
	      // Any css change will trigger a repaint, so let's avoid one if nothing changed
	      var writeCSS = {};
	      var write = false;
	      for (var key in css) {
	        var val = css[key];
	        var elVal = this.element.style[key];
	
	        if (elVal !== val) {
	          write = true;
	          writeCSS[key] = val;
	        }
	      }
	
	      if (write) {
	        defer(function () {
	          extend(_this8.element.style, writeCSS);
	          _this8.trigger('repositioned');
	        });
	      }
	    }
	  }]);
	
	  return TetherClass;
	})(Evented);
	
	TetherClass.modules = [];
	
	TetherBase.position = position;
	
	var Tether = extend(TetherClass, TetherBase);
	/* globals TetherBase */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var extend = _TetherBase$Utils.extend;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	
	var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
	
	function getBoundingRect(tether, to) {
	  if (to === 'scrollParent') {
	    to = tether.scrollParents[0];
	  } else if (to === 'window') {
	    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	  }
	
	  if (to === document) {
	    to = to.documentElement;
	  }
	
	  if (typeof to.nodeType !== 'undefined') {
	    (function () {
	      var node = to;
	      var size = getBounds(to);
	      var pos = size;
	      var style = getComputedStyle(to);
	
	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
	
	      // Account any parent Frames scroll offset
	      if (node.ownerDocument !== document) {
	        var win = node.ownerDocument.defaultView;
	        to[0] += win.pageXOffset;
	        to[1] += win.pageYOffset;
	        to[2] += win.pageXOffset;
	        to[3] += win.pageYOffset;
	      }
	
	      BOUNDS_FORMAT.forEach(function (side, i) {
	        side = side[0].toUpperCase() + side.substr(1);
	        if (side === 'Top' || side === 'Left') {
	          to[i] += parseFloat(style['border' + side + 'Width']);
	        } else {
	          to[i] -= parseFloat(style['border' + side + 'Width']);
	        }
	      });
	    })();
	  }
	
	  return to;
	}
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;
	
	    var top = _ref.top;
	    var left = _ref.left;
	    var targetAttachment = _ref.targetAttachment;
	
	    if (!this.options.constraints) {
	      return true;
	    }
	
	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });
	
	    var height = _cache.height;
	    var width = _cache.width;
	
	    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	      var _lastSize = this.lastSize;
	
	      // Handle the item getting hidden as a result of our positioning without glitching
	      // the classes in and out
	      width = _lastSize.width;
	      height = _lastSize.height;
	    }
	
	    var targetSize = this.cache('target-bounds', function () {
	      return _this.getTargetBounds();
	    });
	
	    var targetHeight = targetSize.height;
	    var targetWidth = targetSize.width;
	
	    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
	
	    this.options.constraints.forEach(function (constraint) {
	      var outOfBoundsClass = constraint.outOfBoundsClass;
	      var pinnedClass = constraint.pinnedClass;
	
	      if (outOfBoundsClass) {
	        allClasses.push(outOfBoundsClass);
	      }
	      if (pinnedClass) {
	        allClasses.push(pinnedClass);
	      }
	    });
	
	    allClasses.forEach(function (cls) {
	      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
	        allClasses.push(cls + '-' + side);
	      });
	    });
	
	    var addClasses = [];
	
	    var tAttachment = extend({}, targetAttachment);
	    var eAttachment = extend({}, this.attachment);
	
	    this.options.constraints.forEach(function (constraint) {
	      var to = constraint.to;
	      var attachment = constraint.attachment;
	      var pin = constraint.pin;
	
	      if (typeof attachment === 'undefined') {
	        attachment = '';
	      }
	
	      var changeAttachX = undefined,
	          changeAttachY = undefined;
	      if (attachment.indexOf(' ') >= 0) {
	        var _attachment$split = attachment.split(' ');
	
	        var _attachment$split2 = _slicedToArray(_attachment$split, 2);
	
	        changeAttachY = _attachment$split2[0];
	        changeAttachX = _attachment$split2[1];
	      } else {
	        changeAttachX = changeAttachY = attachment;
	      }
	
	      var bounds = getBoundingRect(_this, to);
	
	      if (changeAttachY === 'target' || changeAttachY === 'both') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          top += targetHeight;
	          tAttachment.top = 'bottom';
	        }
	
	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          top -= targetHeight;
	          tAttachment.top = 'top';
	        }
	      }
	
	      if (changeAttachY === 'together') {
	        if (tAttachment.top === 'top') {
	          if (eAttachment.top === 'bottom' && top < bounds[1]) {
	            top += targetHeight;
	            tAttachment.top = 'bottom';
	
	            top += height;
	            eAttachment.top = 'top';
	          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
	            top -= height - targetHeight;
	            tAttachment.top = 'bottom';
	
	            eAttachment.top = 'bottom';
	          }
	        }
	
	        if (tAttachment.top === 'bottom') {
	          if (eAttachment.top === 'top' && top + height > bounds[3]) {
	            top -= targetHeight;
	            tAttachment.top = 'top';
	
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
	            top += height - targetHeight;
	            tAttachment.top = 'top';
	
	            eAttachment.top = 'top';
	          }
	        }
	
	        if (tAttachment.top === 'middle') {
	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }
	        }
	      }
	
	      if (changeAttachX === 'target' || changeAttachX === 'both') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          left += targetWidth;
	          tAttachment.left = 'right';
	        }
	
	        if (left + width > bounds[2] && tAttachment.left === 'right') {
	          left -= targetWidth;
	          tAttachment.left = 'left';
	        }
	      }
	
	      if (changeAttachX === 'together') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          if (eAttachment.left === 'right') {
	            left += targetWidth;
	            tAttachment.left = 'right';
	
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';
	
	            left -= width;
	            eAttachment.left = 'right';
	          }
	        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	          if (eAttachment.left === 'left') {
	            left -= targetWidth;
	            tAttachment.left = 'left';
	
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';
	
	            left += width;
	            eAttachment.left = 'left';
	          }
	        } else if (tAttachment.left === 'center') {
	          if (left + width > bounds[2] && eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (left < bounds[0] && eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          }
	        }
	      }
	
	      if (changeAttachY === 'element' || changeAttachY === 'both') {
	        if (top < bounds[1] && eAttachment.top === 'bottom') {
	          top += height;
	          eAttachment.top = 'top';
	        }
	
	        if (top + height > bounds[3] && eAttachment.top === 'top') {
	          top -= height;
	          eAttachment.top = 'bottom';
	        }
	      }
	
	      if (changeAttachX === 'element' || changeAttachX === 'both') {
	        if (left < bounds[0]) {
	          if (eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'center') {
	            left += width / 2;
	            eAttachment.left = 'left';
	          }
	        }
	
	        if (left + width > bounds[2]) {
	          if (eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'center') {
	            left -= width / 2;
	            eAttachment.left = 'right';
	          }
	        }
	      }
	
	      if (typeof pin === 'string') {
	        pin = pin.split(',').map(function (p) {
	          return p.trim();
	        });
	      } else if (pin === true) {
	        pin = ['top', 'left', 'right', 'bottom'];
	      }
	
	      pin = pin || [];
	
	      var pinned = [];
	      var oob = [];
	
	      if (top < bounds[1]) {
	        if (pin.indexOf('top') >= 0) {
	          top = bounds[1];
	          pinned.push('top');
	        } else {
	          oob.push('top');
	        }
	      }
	
	      if (top + height > bounds[3]) {
	        if (pin.indexOf('bottom') >= 0) {
	          top = bounds[3] - height;
	          pinned.push('bottom');
	        } else {
	          oob.push('bottom');
	        }
	      }
	
	      if (left < bounds[0]) {
	        if (pin.indexOf('left') >= 0) {
	          left = bounds[0];
	          pinned.push('left');
	        } else {
	          oob.push('left');
	        }
	      }
	
	      if (left + width > bounds[2]) {
	        if (pin.indexOf('right') >= 0) {
	          left = bounds[2] - width;
	          pinned.push('right');
	        } else {
	          oob.push('right');
	        }
	      }
	
	      if (pinned.length) {
	        (function () {
	          var pinnedClass = undefined;
	          if (typeof _this.options.pinnedClass !== 'undefined') {
	            pinnedClass = _this.options.pinnedClass;
	          } else {
	            pinnedClass = _this.getClass('pinned');
	          }
	
	          addClasses.push(pinnedClass);
	          pinned.forEach(function (side) {
	            addClasses.push(pinnedClass + '-' + side);
	          });
	        })();
	      }
	
	      if (oob.length) {
	        (function () {
	          var oobClass = undefined;
	          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
	            oobClass = _this.options.outOfBoundsClass;
	          } else {
	            oobClass = _this.getClass('out-of-bounds');
	          }
	
	          addClasses.push(oobClass);
	          oob.forEach(function (side) {
	            addClasses.push(oobClass + '-' + side);
	          });
	        })();
	      }
	
	      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
	        eAttachment.left = tAttachment.left = false;
	      }
	      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
	        eAttachment.top = tAttachment.top = false;
	      }
	
	      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
	        _this.updateAttachClasses(eAttachment, tAttachment);
	        _this.trigger('update', {
	          attachment: eAttachment,
	          targetAttachment: tAttachment
	        });
	      }
	    });
	
	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });
	
	    return { top: top, left: left };
	  }
	});
	/* globals TetherBase */
	
	'use strict';
	
	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;
	
	    var top = _ref.top;
	    var left = _ref.left;
	
	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });
	
	    var height = _cache.height;
	    var width = _cache.width;
	
	    var targetPos = this.getTargetBounds();
	
	    var bottom = top + height;
	    var right = left + width;
	
	    var abutted = [];
	    if (top <= targetPos.bottom && bottom >= targetPos.top) {
	      ['left', 'right'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === left || targetPosSide === right) {
	          abutted.push(side);
	        }
	      });
	    }
	
	    if (left <= targetPos.right && right >= targetPos.left) {
	      ['top', 'bottom'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === top || targetPosSide === bottom) {
	          abutted.push(side);
	        }
	      });
	    }
	
	    var allClasses = [];
	    var addClasses = [];
	
	    var sides = ['left', 'top', 'right', 'bottom'];
	    allClasses.push(this.getClass('abutted'));
	    sides.forEach(function (side) {
	      allClasses.push(_this.getClass('abutted') + '-' + side);
	    });
	
	    if (abutted.length) {
	      addClasses.push(this.getClass('abutted'));
	    }
	
	    abutted.forEach(function (side) {
	      addClasses.push(_this.getClass('abutted') + '-' + side);
	    });
	
	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });
	
	    return true;
	  }
	});
	/* globals TetherBase */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var top = _ref.top;
	    var left = _ref.left;
	
	    if (!this.options.shift) {
	      return;
	    }
	
	    var shift = this.options.shift;
	    if (typeof this.options.shift === 'function') {
	      shift = this.options.shift.call(this, { top: top, left: left });
	    }
	
	    var shiftTop = undefined,
	        shiftLeft = undefined;
	    if (typeof shift === 'string') {
	      shift = shift.split(' ');
	      shift[1] = shift[1] || shift[0];
	
	      var _shift = shift;
	
	      var _shift2 = _slicedToArray(_shift, 2);
	
	      shiftTop = _shift2[0];
	      shiftLeft = _shift2[1];
	
	      shiftTop = parseFloat(shiftTop, 10);
	      shiftLeft = parseFloat(shiftLeft, 10);
	    } else {
	      shiftTop = shift.top;
	      shiftLeft = shift.left;
	    }
	
	    top += shiftTop;
	    left += shiftLeft;
	
	    return { top: top, left: left };
	  }
	});
	return Tether;
	
	}));


/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * Created by cjgm on 6/27/16.
	                    */
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _reactRedux = __webpack_require__(28);
	
	var _reactIntl = __webpack_require__(30);
	
	var _reactSelectize = __webpack_require__(236);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LineOptionsForm = (_temp = _class = function (_Components) {
	  _inherits(LineOptionsForm, _Components);
	
	  function LineOptionsForm() {
	    _classCallCheck(this, LineOptionsForm);
	
	    return _possibleConstructorReturn(this, (LineOptionsForm.__proto__ || Object.getPrototypeOf(LineOptionsForm)).apply(this, arguments));
	  }
	
	  _createClass(LineOptionsForm, [{
	    key: 'render',
	    value: function render() {
	      var formattedMessage = this.context.intl.formatMessage;
	      var simOptions = [{ value: 'full_size_sim', label: formattedMessage({ id: 'full_size_sim' }) }, { value: 'std_mini_sim_2ff', label: formattedMessage({ id: 'std_mini_sim_2ff' }) }, { value: 'micro_sim_3ff', label: formattedMessage({ id: 'micro_sim_3ff' }) }, { value: 'nano_sim_4ff', label: formattedMessage({ id: 'nano_sim_4ff' }) }];
	      var internetOptions = [{ value: 'unlimited_data', label: formattedMessage({ id: 'unlimited_data' }) }, { value: 'anitvirus', label: formattedMessage({ id: 'anitvirus' }) }];
	      return _react2.default.createElement(
	        'form',
	        { id: 'line_form_1', onSubmit: this.props.onSubmit, className: 'center-block', style: { width: '300px' } },
	        _react2.default.createElement(
	          'h3',
	          null,
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'line_form_1' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'date' },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'choose_activation_date' })
	          ),
	          _react2.default.createElement('input', { className: 'form-control', name: 'activation_date', type: 'date', id: 'activationDate', style: { width: '300px' }, disabled: this.props.disabled })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(_reactSelectize.SimpleSelect, { name: 'sim', options: simOptions, placeholder: formattedMessage({ id: 'select_sim' }), disabled: this.props.disabled })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'div',
	            { className: 'checkbox' },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'smsAlert' },
	              _react2.default.createElement('input', { type: 'checkbox', id: 'smsAlert', name: 'sms_alert', disabled: this.props.disabled }),
	              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'sms_alert' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'div',
	            { className: 'input-group' },
	            _react2.default.createElement(
	              'p',
	              { className: 'help-block' },
	              formattedMessage({ id: 'international_options' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'checkbox' },
	              _react2.default.createElement(
	                'label',
	                { htmlFor: 'fromAbroad' },
	                _react2.default.createElement('input', { type: 'checkbox', id: 'fromAbroad', value: 'from_abroad', name: 'international_options[]', disabled: this.props.disabled }),
	                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'from_abroad' })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'checkbox' },
	              _react2.default.createElement(
	                'label',
	                { htmlFor: 'toAbroad' },
	                _react2.default.createElement('input', { type: 'checkbox', id: 'toAbroad', value: 'to_abroad', name: 'international_options[]', disabled: this.props.disabled }),
	                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'to_abroad' })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(_reactSelectize.SimpleSelect, { name: 'internet_options', options: internetOptions, placeholder: formattedMessage({ id: 'select_internet_package' }), disabled: this.props.disabled })
	        ),
	        !this.props.disabled && _react2.default.createElement(
	          'button',
	          { type: 'submit', className: 'btn btn-primary' },
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'save' })
	        )
	      );
	    }
	  }], [{
	    key: 'featureName',
	    value: function featureName() {
	      return 'products.features.lineOptions';
	    }
	  }]);
	
	  return LineOptionsForm;
	}(_baseComponent2.default), _class.propsTypes = {
	  onChangeFeatureAvailability: _react2.default.PropTypes.func.isRequired
	}, _class.contextTypes = {
	  intl: _react2.default.PropTypes.object,
	  router: _react2.default.PropTypes.object.isRequired
	}, _temp);
	
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name')
	  };
	}
	
	var _components = { default: (0, _reactRedux.connect)(stateToProps)(LineOptionsForm) };
	
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

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _reactRedux = __webpack_require__(28);
	
	var _reactIntl = __webpack_require__(30);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AssignmentOptionsDefault = (_temp = _class = function (_Components) {
	  _inherits(AssignmentOptionsDefault, _Components);
	
	  function AssignmentOptionsDefault() {
	    _classCallCheck(this, AssignmentOptionsDefault);
	
	    return _possibleConstructorReturn(this, (AssignmentOptionsDefault.__proto__ || Object.getPrototypeOf(AssignmentOptionsDefault)).apply(this, arguments));
	  }
	
	  _createClass(AssignmentOptionsDefault, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'no_form' })
	        )
	      );
	    }
	  }]);
	
	  return AssignmentOptionsDefault;
	}(_baseComponent2.default), _class.contextTypes = {
	  intl: _react2.default.PropTypes.object,
	  router: _react2.default.PropTypes.object.isRequired
	}, _temp);
	
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name')
	  };
	}
	
	var _components = { default: (0, _reactRedux.connect)(stateToProps)(AssignmentOptionsDefault) };
	
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

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = function (tenant, id) {
	  var _map = [_default2.default, _lineForm2.default, _lineForm4.default].map(function (cmpt) {
	    return cmpt.get(tenant);
	  }),
	      _map2 = _slicedToArray(_map, 3),
	      AssignmentOrderOptionsDefault = _map2[0],
	      AssignmentOrderOptionsForm1 = _map2[1],
	      AssignmentOrderOptionsForm2 = _map2[2];
	
	  switch (id) {
	    case 1:
	      return AssignmentOrderOptionsForm1;
	    case 2:
	      return AssignmentOrderOptionsForm2;
	    default:
	      return AssignmentOrderOptionsDefault;
	  }
	};
	
	var _default = __webpack_require__(560);
	
	var _default2 = _interopRequireDefault(_default);
	
	var _lineForm = __webpack_require__(531);
	
	var _lineForm2 = _interopRequireDefault(_lineForm);
	
	var _lineForm3 = __webpack_require__(562);
	
	var _lineForm4 = _interopRequireDefault(_lineForm3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * Created by cjgm on 6/27/16.
	                    */
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _reactRedux = __webpack_require__(28);
	
	var _reactIntl = __webpack_require__(30);
	
	var _reactSelectize = __webpack_require__(236);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LineOptionsForm = (_temp = _class = function (_Components) {
	  _inherits(LineOptionsForm, _Components);
	
	  function LineOptionsForm() {
	    _classCallCheck(this, LineOptionsForm);
	
	    return _possibleConstructorReturn(this, (LineOptionsForm.__proto__ || Object.getPrototypeOf(LineOptionsForm)).apply(this, arguments));
	  }
	
	  _createClass(LineOptionsForm, [{
	    key: 'render',
	    value: function render() {
	      var formattedMessage = this.context.intl.formatMessage;
	      var simOptions = [{ value: 'full_size_sim', label: formattedMessage({ id: 'full_size_sim' }) }, { value: 'std_mini_sim_2ff', label: formattedMessage({ id: 'std_mini_sim_2ff' }) }, { value: 'micro_sim_3ff', label: formattedMessage({ id: 'micro_sim_3ff' }) }, { value: 'nano_sim_4ff', label: formattedMessage({ id: 'nano_sim_4ff' }) }];
	      var internetOptions = [{ value: 'unlimited_data', label: formattedMessage({ id: 'unlimited_data' }) }, { value: 'anitvirus', label: formattedMessage({ id: 'anitvirus' }) }];
	      return _react2.default.createElement(
	        'form',
	        { id: 'line_form_2', onSubmit: this.props.onSubmit, className: 'center-block', style: { width: '300px' } },
	        _react2.default.createElement(
	          'h3',
	          null,
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'line_form_2' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            { htmlFor: 'date' },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'choose_activation_date' })
	          ),
	          _react2.default.createElement('input', { className: 'form-control', name: 'activation_date', type: 'date', id: 'activationDate', style: { width: '300px' }, disabled: this.props.disabled })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(_reactSelectize.SimpleSelect, { name: 'sim', options: simOptions, placeholder: formattedMessage({ id: 'select_sim' }), disabled: this.props.disabled })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'div',
	            { className: 'checkbox' },
	            _react2.default.createElement(
	              'label',
	              { htmlFor: 'smsAlert' },
	              _react2.default.createElement('input', { type: 'checkbox', id: 'smsAlert', name: 'sms_alert', disabled: this.props.disabled }),
	              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'sms_alert' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'div',
	            { className: 'input-group' },
	            _react2.default.createElement(
	              'p',
	              { className: 'help-block' },
	              formattedMessage({ id: 'international_options' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'checkbox' },
	              _react2.default.createElement(
	                'label',
	                { htmlFor: 'fromAbroad' },
	                _react2.default.createElement('input', { type: 'checkbox', id: 'fromAbroad', value: 'from_abroad', name: 'international_options[]', disabled: this.props.disabled }),
	                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'from_abroad' })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'checkbox' },
	              _react2.default.createElement(
	                'label',
	                { htmlFor: 'toAbroad' },
	                _react2.default.createElement('input', { type: 'checkbox', id: 'toAbroad', value: 'to_abroad', name: 'international_options[]', disabled: this.props.disabled }),
	                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'to_abroad' })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(_reactSelectize.SimpleSelect, { name: 'internet_options', options: internetOptions, placeholder: formattedMessage({ id: 'select_internet_package' }), disabled: this.props.disabled })
	        ),
	        !this.props.disabled && _react2.default.createElement(
	          'button',
	          { type: 'submit', className: 'btn btn-primary' },
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'save' })
	        )
	      );
	    }
	  }], [{
	    key: 'featureName',
	    value: function featureName() {
	      return 'products.features.lineOptions';
	    }
	  }]);
	
	  return LineOptionsForm;
	}(_baseComponent2.default), _class.propsTypes = {
	  onChangeFeatureAvailability: _react2.default.PropTypes.func.isRequired
	}, _class.contextTypes = {
	  intl: _react2.default.PropTypes.object,
	  router: _react2.default.PropTypes.object.isRequired
	}, _temp);
	
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name')
	  };
	}
	
	var _components = { default: (0, _reactRedux.connect)(stateToProps)(LineOptionsForm) };
	
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

/***/ },

/***/ 1127:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _reactIntl = __webpack_require__(30);
	
	var _reactSelectize = __webpack_require__(236);
	
	var _actions = __webpack_require__(41);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _Row = __webpack_require__(35);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(29);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _getForm = __webpack_require__(561);
	
	var _getForm2 = _interopRequireDefault(_getForm);
	
	var _flux = __webpack_require__(378);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AssignmentOptions = (_temp = _class = function (_Components) {
	  _inherits(AssignmentOptions, _Components);
	
	  function AssignmentOptions(props) {
	    _classCallCheck(this, AssignmentOptions);
	
	    var _this = _possibleConstructorReturn(this, (AssignmentOptions.__proto__ || Object.getPrototypeOf(AssignmentOptions)).call(this, props));
	
	    _this.onSubmitForm = function (e) {
	      e.preventDefault();
	      new _actions2.default(_this.props.tenant).Products.Edit(_this.props.product.id, { id_assignment_option_form: _this.state.id_assignment_option_form }).then(function (action) {
	        _this.props.dispatch(action);
	        _this.props.notification.add({ message: _this.format({ id: 'product_updated' }), level: 'success' });
	      }).catch(function (err) {
	        return _this.props.notification.add({ message: _this.format({ id: 'error_updating_product' }), level: 'error' });
	      });
	    };
	
	    _this.onValueChange = function (value) {
	      _this.setState({ id_assignment_option_form: value.value, form: (0, _getForm2.default)(_this.props.tenant, value.value) });
	    };
	
	    _this.state = {
	      id_assignment_option_form: props.product.id_assignment_option_form,
	      form: (0, _getForm2.default)(props.tenant, props.product.id_assignment_option_form)
	    };
	    return _this;
	  }
	
	  _createClass(AssignmentOptions, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      Promise.all(AssignmentOptions.getActions(this.props.tenant, this.props.params, this.props.location.query, this.props.user).map(this.props.dispatch));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var defaultOption = { value: null, label: this.format({ id: 'no_form' }) };
	      var Form = this.state.form;
	      var assignmentOptions = [defaultOption, { value: 1, label: this.format({ id: 'line_form_1' }) }, { value: 2, label: this.format({ id: 'line_form_2' }) }];
	      var defaultValue = this.state.id_assignment_option_form ? { value: this.state.id_assignment_option_form, label: this.format({ id: 'line_form_' + this.state.id_assignment_option_form }) } : defaultOption;
	      return _react2.default.createElement(
	        'div',
	        { className: 'mp-tab mp-tab-assignment-options' },
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.onSubmitForm },
	          _react2.default.createElement(
	            'h2',
	            null,
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_options' })
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'help-block' },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'select_assignment_options_form_description' })
	          ),
	          _react2.default.createElement(
	            _Row2.default,
	            { className: 'row-eq-height' },
	            _react2.default.createElement(
	              _Col2.default,
	              { md: 6 },
	              _react2.default.createElement(
	                'div',
	                { className: 'form-group' },
	                _react2.default.createElement(_reactSelectize.SimpleSelect, { defaultValue: defaultValue, options: assignmentOptions, placeholder: this.format({ id: 'select_assignment_options_form' }), onValueChange: this.onValueChange })
	              )
	            ),
	            _react2.default.createElement(
	              _Col2.default,
	              { md: 6, className: 'col-hcenter col-vcenter' },
	              _react2.default.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-primary' },
	                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'save' })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(Form, { disabled: true, onSubmit: function onSubmit(e) {
	            return e.preventDefault();
	          } })
	      );
	    }
	  }], [{
	    key: 'getActions',
	    value: function getActions(tenant) {
	      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      var user = arguments[3];
	
	      var actions = new _flux.Actions(tenant, user.get('token'));
	      return [];
	    }
	  }, {
	    key: 'featureName',
	    value: function featureName() {
	      return 'products.features.assignmentOptions';
	    }
	  }]);
	
	  return AssignmentOptions;
	}(_baseComponent2.default), _class.propsTypes = {
	  onChangeFeatureAvailability: _react2.default.PropTypes.func.isRequired
	}, _class.contextTypes = {
	  intl: _react2.default.PropTypes.object,
	  router: _react2.default.PropTypes.object.isRequired
	}, _temp);
	
	
	var _components = { default: AssignmentOptions };
	
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
//# sourceMappingURL=48.bundle.js.map