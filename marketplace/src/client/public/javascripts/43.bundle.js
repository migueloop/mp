webpackJsonp([43],{

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

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _styleMaps = __webpack_require__(11);
	
	var _styleMaps2 = _interopRequireDefault(_styleMaps);
	
	var _invariant = __webpack_require__(76);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _warning = __webpack_require__(24);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function curry(fn) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var last = args[args.length - 1];
	    if (typeof last === 'function') {
	      return fn.apply(undefined, args);
	    }
	    return function (Component) {
	      return fn.apply(undefined, args.concat([Component]));
	    };
	  };
	}
	
	function prefix(props, variant) {
	  if (props === undefined) props = {};
	
	  !(props.bsClass || '').trim() ?  false ? _invariant2['default'](false, 'A `bsClass` prop is required for this component') : _invariant2['default'](false) : undefined;
	  return props.bsClass + (variant ? '-' + variant : '');
	}
	
	var bsClass = curry(function (defaultClass, Component) {
	  var propTypes = Component.propTypes || (Component.propTypes = {});
	  var defaultProps = Component.defaultProps || (Component.defaultProps = {});
	
	  propTypes.bsClass = _react.PropTypes.string;
	  defaultProps.bsClass = defaultClass;
	
	  return Component;
	});
	
	exports.bsClass = bsClass;
	var bsStyles = curry(function (styles, defaultStyle, Component) {
	  if (typeof defaultStyle !== 'string') {
	    Component = defaultStyle;
	    defaultStyle = undefined;
	  }
	
	  var existing = Component.STYLES || [];
	  var propTypes = Component.propTypes || {};
	
	  styles.forEach(function (style) {
	    if (existing.indexOf(style) === -1) {
	      existing.push(style);
	    }
	  });
	
	  var propType = _react.PropTypes.oneOf(existing);
	
	  // expose the values on the propType function for documentation
	  Component.STYLES = propType._values = existing;
	
	  Component.propTypes = _extends({}, propTypes, {
	    bsStyle: propType
	  });
	
	  if (defaultStyle !== undefined) {
	    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
	    defaultProps.bsStyle = defaultStyle;
	  }
	
	  return Component;
	});
	
	exports.bsStyles = bsStyles;
	var bsSizes = curry(function (sizes, defaultSize, Component) {
	  if (typeof defaultSize !== 'string') {
	    Component = defaultSize;
	    defaultSize = undefined;
	  }
	
	  var existing = Component.SIZES || [];
	  var propTypes = Component.propTypes || {};
	
	  sizes.forEach(function (size) {
	    if (existing.indexOf(size) === -1) {
	      existing.push(size);
	    }
	  });
	
	  var values = existing.reduce(function (result, size) {
	    if (_styleMaps2['default'].SIZES[size] && _styleMaps2['default'].SIZES[size] !== size) {
	      result.push(_styleMaps2['default'].SIZES[size]);
	    }
	    return result.concat(size);
	  }, []);
	
	  var propType = _react.PropTypes.oneOf(values);
	
	  propType._values = values;
	
	  // expose the values on the propType function for documentation
	  Component.SIZES = existing;
	
	  Component.propTypes = _extends({}, propTypes, {
	    bsSize: propType
	  });
	
	  if (defaultSize !== undefined) {
	    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
	    defaultProps.bsSize = defaultSize;
	  }
	
	  return Component;
	});
	
	exports.bsSizes = bsSizes;
	exports['default'] = {
	
	  prefix: prefix,
	
	  getClassSet: function getClassSet(props) {
	    var classes = {};
	    var bsClassName = prefix(props);
	
	    if (bsClassName) {
	      var bsSize = undefined;
	
	      classes[bsClassName] = true;
	
	      if (props.bsSize) {
	        bsSize = _styleMaps2['default'].SIZES[props.bsSize] || bsSize;
	      }
	
	      if (bsSize) {
	        classes[prefix(props, bsSize)] = true;
	      }
	
	      if (props.bsStyle) {
	        if (props.bsStyle.indexOf(prefix(props)) === 0) {
	           false ? _warning2['default'](false, // small migration convenience, since the old method required manual prefixing
	          'bsStyle will automatically prefix custom values with the bsClass, so there is no ' + 'need to append it manually. (bsStyle: ' + props.bsStyle + ', bsClass: ' + prefix(props) + ')') : undefined;
	          classes[props.bsStyle] = true;
	        } else {
	          classes[prefix(props, props.bsStyle)] = true;
	        }
	      }
	    }
	
	    return classes;
	  },
	
	  /**
	   * Add a style variant to a Component. Mutates the propTypes of the component
	   * in order to validate the new variant.
	   */
	  addStyle: function addStyle(Component, styleVariant) {
	    bsStyles(styleVariant, Component);
	  }
	};
	var _curry = curry;
	exports._curry = _curry;

/***/ },

/***/ 7:
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(58)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(124)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },

/***/ 9:
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

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

/***/ 15:
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} functions to chain
	 * @returns {function|null}
	 */
	'use strict';
	
	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	
	exports['default'] = createChainedFunction;
	module.exports = exports['default'];

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20),
	    isString = __webpack_require__(55),
	    support = __webpack_require__(56);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  if (support.unindexedChars && isString(value)) {
	    var index = -1,
	        length = value.length,
	        result = Object(value);
	
	    while (++index < length) {
	      result[index] = value.charAt(index);
	    }
	    return result;
	  }
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },

/***/ 17:
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
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var _styleMaps = __webpack_require__(11);
	
	var types = ['button', 'reset', 'submit'];
	
	var ButtonStyles = _styleMaps.State.values().concat(_styleMaps.DEFAULT, _styleMaps.PRIMARY, _styleMaps.LINK);
	
	var Button = _react2['default'].createClass({
	  displayName: 'Button',
	
	  propTypes: {
	    active: _react2['default'].PropTypes.bool,
	    disabled: _react2['default'].PropTypes.bool,
	    block: _react2['default'].PropTypes.bool,
	    navItem: _react2['default'].PropTypes.bool,
	    navDropdown: _react2['default'].PropTypes.bool,
	    /**
	     * You can use a custom element for this component
	     */
	    componentClass: _reactPropTypesLibElementType2['default'],
	    href: _react2['default'].PropTypes.string,
	    target: _react2['default'].PropTypes.string,
	    /**
	     * Defines HTML button type Attribute
	     * @type {("button"|"reset"|"submit")}
	     * @defaultValue 'button'
	     */
	    type: _react2['default'].PropTypes.oneOf(types)
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      active: false,
	      block: false,
	      disabled: false,
	      navItem: false,
	      navDropdown: false
	    };
	  },
	
	  render: function render() {
	    var _extends2;
	
	    var classes = this.props.navDropdown ? {} : _utilsBootstrapUtils2['default'].getClassSet(this.props);
	    var renderFuncName = undefined;
	
	    var blockClass = _utilsBootstrapUtils2['default'].prefix(this.props, 'block');
	
	    classes = _extends((_extends2 = {
	      active: this.props.active
	    }, _extends2[blockClass] = this.props.block, _extends2), classes);
	
	    if (this.props.navItem) {
	      return this.renderNavItem(classes);
	    }
	
	    renderFuncName = this.props.href || this.props.target || this.props.navDropdown ? 'renderAnchor' : 'renderButton';
	
	    return this[renderFuncName](classes);
	  },
	
	  renderAnchor: function renderAnchor(classes) {
	    var Component = this.props.componentClass || 'a';
	    var href = this.props.href || '#';
	    classes.disabled = this.props.disabled;
	
	    return _react2['default'].createElement(
	      Component,
	      _extends({}, this.props, {
	        href: href,
	        className: _classnames2['default'](this.props.className, classes),
	        role: 'button' }),
	      this.props.children
	    );
	  },
	
	  renderButton: function renderButton(classes) {
	    var Component = this.props.componentClass || 'button';
	
	    return _react2['default'].createElement(
	      Component,
	      _extends({}, this.props, {
	        type: this.props.type || 'button',
	        className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  },
	
	  renderNavItem: function renderNavItem(classes) {
	    var liClasses = {
	      active: this.props.active
	    };
	
	    return _react2['default'].createElement(
	      'li',
	      { className: _classnames2['default'](liClasses) },
	      this.renderAnchor(classes)
	    );
	  }
	});
	
	Button.types = types;
	
	exports['default'] = _utilsBootstrapUtils.bsStyles(ButtonStyles, _styleMaps.DEFAULT, _utilsBootstrapUtils.bsSizes([_styleMaps.Sizes.LARGE, _styleMaps.Sizes.SMALL, _styleMaps.Sizes.XSMALL], _utilsBootstrapUtils.bsClass('btn', Button)));
	module.exports = exports['default'];

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

/***/ 20:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },

/***/ 21:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(44),
	    isLength = __webpack_require__(26),
	    isObjectLike = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },

/***/ 23:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = ownerDocument;
	
	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}
	
	module.exports = exports["default"];

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsCreateChainedFunction = __webpack_require__(15);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	/**
	 * Note: This is intended as a stop-gap for accessibility concerns that the
	 * Bootstrap CSS does not address as they have styled anchors and not buttons
	 * in many cases.
	 */
	
	var SafeAnchor = (function (_React$Component) {
	  _inherits(SafeAnchor, _React$Component);
	
	  function SafeAnchor(props) {
	    _classCallCheck(this, SafeAnchor);
	
	    _React$Component.call(this, props);
	
	    this.handleClick = this.handleClick.bind(this);
	  }
	
	  SafeAnchor.prototype.handleClick = function handleClick(event) {
	    if (this.props.href === undefined) {
	      event.preventDefault();
	    }
	  };
	
	  SafeAnchor.prototype.render = function render() {
	    return _react2['default'].createElement('a', _extends({ role: this.props.href ? undefined : 'button'
	    }, this.props, {
	      onClick: _utilsCreateChainedFunction2['default'](this.props.onClick, this.handleClick),
	      href: this.props.href || '' }));
	  };
	
	  return SafeAnchor;
	})(_react2['default'].Component);
	
	exports['default'] = SafeAnchor;
	
	SafeAnchor.propTypes = {
	  href: _react2['default'].PropTypes.string,
	  onClick: _react2['default'].PropTypes.func
	};
	module.exports = exports['default'];

/***/ },

/***/ 26:
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domHelpersOwnerDocument = __webpack_require__(23);
	
	var _domHelpersOwnerDocument2 = _interopRequireDefault(_domHelpersOwnerDocument);
	
	exports['default'] = function (componentOrElement) {
	  return _domHelpersOwnerDocument2['default'](_reactDom2['default'].findDOMNode(componentOrElement));
	};
	
	module.exports = exports['default'];

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

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(32);
	
	var contains = (function () {
	  var root = canUseDOM && document.documentElement;
	
	  return root && root.contains ? function (context, node) {
	    return context.contains(node);
	  } : root && root.compareDocumentPosition ? function (context, node) {
	    return context === node || !!(context.compareDocumentPosition(node) & 16);
	  } : function (context, node) {
	    if (node) do {
	      if (node === context) return true;
	    } while (node = node.parentNode);
	
	    return false;
	  };
	})();
	
	module.exports = contains;

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

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === "object") {
	    factory(exports);
	  } else {
	    factory(root.babelHelpers = {});
	  }
	})(this, function (global) {
	  var babelHelpers = global;
	
	  babelHelpers.interopRequireDefault = function (obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  };
	
	  babelHelpers._extends = Object.assign || function (target) {
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
	})

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = deprecated;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(24);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var warned = {};
	
	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] != null) {
	      var message = '"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation;
	      if (!warned[message]) {
	        _warning2['default'](false, message);
	        warned[message] = true;
	      }
	    }
	
	    return propType(props, propName, componentName);
	  };
	}
	
	function _resetWarned() {
	  warned = {};
	}
	
	deprecated._resetWarned = _resetWarned;
	module.exports = exports['default'];

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var camelize = __webpack_require__(69),
	    hyphenate = __webpack_require__(134),
	    _getComputedStyle = __webpack_require__(129),
	    removeStyle = __webpack_require__(130);
	
	var has = Object.prototype.hasOwnProperty;
	
	module.exports = function style(node, property, value) {
	  var css = '',
	      props = property;
	
	  if (typeof property === 'string') {
	
	    if (value === undefined) return node.style[camelize(property)] || _getComputedStyle(node).getPropertyValue(hyphenate(property));else (props = {})[property] = value;
	  }
	
	  for (var key in props) if (has.call(props, key)) {
	    !props[key] && props[key] !== 0 ? removeStyle(node, hyphenate(key)) : css += hyphenate(key) + ':' + props[key] + ';';
	  }
	
	  node.style.cssText += ';' + css;
	};

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Glyphicon = _react2['default'].createClass({
	  displayName: 'Glyphicon',
	
	  propTypes: {
	    /**
	     * bootstrap className
	     * @private
	     */
	    bsClass: _react2['default'].PropTypes.string,
	    /**
	     * An icon name. See e.g. http://getbootstrap.com/components/#glyphicons
	     */
	    glyph: _react2['default'].PropTypes.string.isRequired,
	    /**
	     * Adds 'form-control-feedback' class
	     * @private
	     */
	    formControlFeedback: _react2['default'].PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      bsClass: 'glyphicon',
	      formControlFeedback: false
	    };
	  },
	
	  render: function render() {
	    var _classNames;
	
	    var className = _classnames2['default'](this.props.className, (_classNames = {}, _classNames[this.props.bsClass] = true, _classNames['glyphicon-' + this.props.glyph] = true, _classNames['form-control-feedback'] = this.props.formControlFeedback, _classNames));
	
	    return _react2['default'].createElement(
	      'span',
	      _extends({}, this.props, { className: className }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = Glyphicon;
	module.exports = exports['default'];

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(89),
	    bindCallback = __webpack_require__(63),
	    pickByArray = __webpack_require__(95),
	    pickByCallback = __webpack_require__(96),
	    restParam = __webpack_require__(88);
	
	/**
	 * Creates an object composed of the picked `object` properties. Property
	 * names may be specified as individual arguments or as arrays of property
	 * names. If `predicate` is provided it's invoked for each property of `object`
	 * picking the properties `predicate` returns truthy for. The predicate is
	 * bound to `thisArg` and invoked with three arguments: (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function|...(string|string[])} [predicate] The function invoked per
	 *  iteration or property names to pick, specified as individual property
	 *  names or arrays of property names.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'user': 'fred', 'age': 40 };
	 *
	 * _.pick(object, 'user');
	 * // => { 'user': 'fred' }
	 *
	 * _.pick(object, _.isString);
	 * // => { 'user': 'fred' }
	 */
	var pick = restParam(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  return typeof props[0] == 'function'
	    ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	    : pickByArray(object, baseFlatten(props));
	});
	
	module.exports = pick;


/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(146);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


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

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _warning = __webpack_require__(24);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var warned = {};
	
	function deprecationWarning(oldname, newname, link) {
	  var message = undefined;
	
	  if (typeof oldname === 'object') {
	    message = oldname.message;
	  } else {
	    message = oldname + ' is deprecated. Use ' + newname + ' instead.';
	
	    if (link) {
	      message += '\nYou can read more about it at ' + link;
	    }
	  }
	
	  if (warned[message]) {
	    return;
	  }
	
	   false ? _warning2['default'](false, message) : undefined;
	  warned[message] = true;
	}
	
	deprecationWarning.wrapper = function (Component) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  return (function (_Component) {
	    _inherits(DeprecatedComponent, _Component);
	
	    function DeprecatedComponent() {
	      _classCallCheck(this, DeprecatedComponent);
	
	      _Component.apply(this, arguments);
	    }
	
	    DeprecatedComponent.prototype.componentWillMount = function componentWillMount() {
	      deprecationWarning.apply(undefined, args);
	
	      if (_Component.prototype.componentWillMount) {
	        var _Component$prototype$componentWillMount;
	
	        for (var _len2 = arguments.length, methodArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          methodArgs[_key2] = arguments[_key2];
	        }
	
	        (_Component$prototype$componentWillMount = _Component.prototype.componentWillMount).call.apply(_Component$prototype$componentWillMount, [this].concat(methodArgs));
	      }
	    };
	
	    return DeprecatedComponent;
	  })(Component);
	};
	
	exports['default'] = deprecationWarning;
	module.exports = exports['default'];

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

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = getContainer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function getContainer(container, defaultContainer) {
	  container = typeof container === 'function' ? container() : container;
	  return _reactDom2['default'].findDOMNode(container) || defaultContainer;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _common = __webpack_require__(73);
	
	/**
	 * Checks whether a prop provides a DOM element
	 *
	 * The element can be provided in two forms:
	 * - Directly passed
	 * - Or passed an object that has a `render` method
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */
	
	function validate(props, propName, componentName) {
	  if (typeof props[propName] !== 'object' || typeof props[propName].render !== 'function' && props[propName].nodeType !== 1) {
	    return new Error(_common.errMsg(props, propName, componentName, ', expected a DOM element or an object that has a `render` method'));
	  }
	}
	
	exports['default'] = _common.createChainableTypeChecker(validate);
	module.exports = exports['default'];

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(92),
	    isLength = __webpack_require__(26);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(53),
	    isObjectLike = __webpack_require__(21);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },

/***/ 56:
/***/ function(module, exports) {

	/** Used for native method references. */
	var arrayProto = Array.prototype,
	    errorProto = Error.prototype,
	    objectProto = Object.prototype;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;
	
	/**
	 * An object environment feature flags.
	 *
	 * @static
	 * @memberOf _
	 * @type Object
	 */
	var support = {};
	
	(function(x) {
	  var Ctor = function() { this.x = x; },
	      object = { '0': x, 'length': x },
	      props = [];
	
	  Ctor.prototype = { 'valueOf': x, 'y': x };
	  for (var key in new Ctor) { props.push(key); }
	
	  /**
	   * Detect if `name` or `message` properties of `Error.prototype` are
	   * enumerable by default (IE < 9, Safari < 5.1).
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') ||
	    propertyIsEnumerable.call(errorProto, 'name');
	
	  /**
	   * Detect if `prototype` properties are enumerable by default.
	   *
	   * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
	   * (if the prototype or a property on the prototype has been set)
	   * incorrectly set the `[[Enumerable]]` value of a function's `prototype`
	   * property to `true`.
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');
	
	  /**
	   * Detect if properties shadowing those on `Object.prototype` are non-enumerable.
	   *
	   * In IE < 9 an object's own properties, shadowing non-enumerable ones,
	   * are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.nonEnumShadows = !/valueOf/.test(props);
	
	  /**
	   * Detect if own properties are iterated after inherited properties (IE < 9).
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.ownLast = props[0] != 'x';
	
	  /**
	   * Detect if `Array#shift` and `Array#splice` augment array-like objects
	   * correctly.
	   *
	   * Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array
	   * `shift()` and `splice()` functions that fail to remove the last element,
	   * `value[0]`, of array-like objects even though the "length" property is
	   * set to `0`. The `shift()` method is buggy in compatibility modes of IE 8,
	   * while `splice()` is buggy regardless of mode in IE < 9.
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.spliceObjects = (splice.call(object, 0, 1), !object[0]);
	
	  /**
	   * Detect lack of support for accessing string characters by index.
	   *
	   * IE < 8 can't access characters by index. IE 8 can only access characters
	   * by index on string literals, not string objects.
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
	}(1, 0));
	
	module.exports = support;


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

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(112);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _Glyphicon = __webpack_require__(40);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var InputBase = (function (_React$Component) {
	  _inherits(InputBase, _React$Component);
	
	  function InputBase() {
	    _classCallCheck(this, InputBase);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  InputBase.prototype.getInputDOMNode = function getInputDOMNode() {
	    return this.refs.input;
	  };
	
	  InputBase.prototype.getValue = function getValue() {
	    if (this.props.type === 'static') {
	      return this.props.value;
	    } else if (this.props.type) {
	      if (this.props.type === 'select' && this.props.multiple) {
	        return this.getSelectedOptions();
	      }
	      return this.getInputDOMNode().value;
	    }
	    throw new Error('Cannot use getValue without specifying input type.');
	  };
	
	  InputBase.prototype.getChecked = function getChecked() {
	    return this.getInputDOMNode().checked;
	  };
	
	  InputBase.prototype.getSelectedOptions = function getSelectedOptions() {
	    var values = [];
	
	    Array.prototype.forEach.call(this.getInputDOMNode().getElementsByTagName('option'), function (option) {
	      if (option.selected) {
	        var value = option.getAttribute('value') || option.innerHtml;
	        values.push(value);
	      }
	    });
	
	    return values;
	  };
	
	  InputBase.prototype.isCheckboxOrRadio = function isCheckboxOrRadio() {
	    return this.props.type === 'checkbox' || this.props.type === 'radio';
	  };
	
	  InputBase.prototype.isFile = function isFile() {
	    return this.props.type === 'file';
	  };
	
	  InputBase.prototype.renderInputGroup = function renderInputGroup(children) {
	    var addonBefore = this.props.addonBefore ? _react2['default'].createElement(
	      'span',
	      { className: 'input-group-addon', key: 'addonBefore' },
	      this.props.addonBefore
	    ) : null;
	
	    var addonAfter = this.props.addonAfter ? _react2['default'].createElement(
	      'span',
	      { className: 'input-group-addon', key: 'addonAfter' },
	      this.props.addonAfter
	    ) : null;
	
	    var buttonBefore = this.props.buttonBefore ? _react2['default'].createElement(
	      'span',
	      { className: 'input-group-btn' },
	      this.props.buttonBefore
	    ) : null;
	
	    var buttonAfter = this.props.buttonAfter ? _react2['default'].createElement(
	      'span',
	      { className: 'input-group-btn' },
	      this.props.buttonAfter
	    ) : null;
	
	    var inputGroupClassName = undefined;
	    switch (this.props.bsSize) {
	      case 'small':
	        inputGroupClassName = 'input-group-sm';break;
	      case 'large':
	        inputGroupClassName = 'input-group-lg';break;
	      default:
	    }
	
	    return addonBefore || addonAfter || buttonBefore || buttonAfter ? _react2['default'].createElement(
	      'div',
	      { className: _classnames2['default'](inputGroupClassName, 'input-group'), key: 'input-group' },
	      addonBefore,
	      buttonBefore,
	      children,
	      addonAfter,
	      buttonAfter
	    ) : children;
	  };
	
	  InputBase.prototype.renderIcon = function renderIcon() {
	    if (this.props.hasFeedback) {
	      if (this.props.feedbackIcon) {
	        return _react2['default'].cloneElement(this.props.feedbackIcon, { formControlFeedback: true });
	      }
	
	      switch (this.props.bsStyle) {
	        case 'success':
	          return _react2['default'].createElement(_Glyphicon2['default'], { formControlFeedback: true, glyph: 'ok', key: 'icon' });
	        case 'warning':
	          return _react2['default'].createElement(_Glyphicon2['default'], { formControlFeedback: true, glyph: 'warning-sign', key: 'icon' });
	        case 'error':
	          return _react2['default'].createElement(_Glyphicon2['default'], { formControlFeedback: true, glyph: 'remove', key: 'icon' });
	        default:
	          return _react2['default'].createElement('span', { className: 'form-control-feedback', key: 'icon' });
	      }
	    } else {
	      return null;
	    }
	  };
	
	  InputBase.prototype.renderHelp = function renderHelp() {
	    return this.props.help ? _react2['default'].createElement(
	      'span',
	      { className: 'help-block', key: 'help' },
	      this.props.help
	    ) : null;
	  };
	
	  InputBase.prototype.renderCheckboxAndRadioWrapper = function renderCheckboxAndRadioWrapper(children) {
	    var classes = {
	      'checkbox': this.props.type === 'checkbox',
	      'radio': this.props.type === 'radio'
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      { className: _classnames2['default'](classes), key: 'checkboxRadioWrapper' },
	      children
	    );
	  };
	
	  InputBase.prototype.renderWrapper = function renderWrapper(children) {
	    return this.props.wrapperClassName ? _react2['default'].createElement(
	      'div',
	      { className: this.props.wrapperClassName, key: 'wrapper' },
	      children
	    ) : children;
	  };
	
	  InputBase.prototype.renderLabel = function renderLabel(children) {
	    var classes = {
	      'control-label': !this.isCheckboxOrRadio()
	    };
	    classes[this.props.labelClassName] = this.props.labelClassName;
	
	    return this.props.label ? _react2['default'].createElement(
	      'label',
	      { htmlFor: this.props.id, className: _classnames2['default'](classes), key: 'label' },
	      children,
	      this.props.label
	    ) : children;
	  };
	
	  InputBase.prototype.renderInput = function renderInput() {
	    if (!this.props.type) {
	      return this.props.children;
	    }
	
	    switch (this.props.type) {
	      case 'select':
	        return _react2['default'].createElement(
	          'select',
	          _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control'), ref: 'input', key: 'input' }),
	          this.props.children
	        );
	      case 'textarea':
	        return _react2['default'].createElement('textarea', _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control'), ref: 'input', key: 'input' }));
	      case 'static':
	        return _react2['default'].createElement(
	          'p',
	          _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control-static'), ref: 'input', key: 'input' }),
	          this.props.value
	        );
	      default:
	        var className = this.isCheckboxOrRadio() || this.isFile() ? '' : 'form-control';
	        return _react2['default'].createElement('input', _extends({}, this.props, { className: _classnames2['default'](this.props.className, className), ref: 'input', key: 'input' }));
	    }
	  };
	
	  InputBase.prototype.renderFormGroup = function renderFormGroup(children) {
	    return _react2['default'].createElement(
	      _FormGroup2['default'],
	      this.props,
	      children
	    );
	  };
	
	  InputBase.prototype.renderChildren = function renderChildren() {
	    return !this.isCheckboxOrRadio() ? [this.renderLabel(), this.renderWrapper([this.renderInputGroup(this.renderInput()), this.renderIcon(), this.renderHelp()])] : this.renderWrapper([this.renderCheckboxAndRadioWrapper(this.renderLabel(this.renderInput())), this.renderHelp()]);
	  };
	
	  InputBase.prototype.render = function render() {
	    var children = this.renderChildren();
	    return this.renderFormGroup(children);
	  };
	
	  return InputBase;
	})(_react2['default'].Component);
	
	InputBase.propTypes = {
	  type: _react2['default'].PropTypes.string,
	  label: _react2['default'].PropTypes.node,
	  help: _react2['default'].PropTypes.node,
	  addonBefore: _react2['default'].PropTypes.node,
	  addonAfter: _react2['default'].PropTypes.node,
	  buttonBefore: _react2['default'].PropTypes.node,
	  buttonAfter: _react2['default'].PropTypes.node,
	  bsSize: _react2['default'].PropTypes.oneOf(['small', 'medium', 'large']),
	  bsStyle: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
	  hasFeedback: _react2['default'].PropTypes.bool,
	  feedbackIcon: _react2['default'].PropTypes.node,
	  id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
	  groupClassName: _react2['default'].PropTypes.string,
	  wrapperClassName: _react2['default'].PropTypes.string,
	  labelClassName: _react2['default'].PropTypes.string,
	  multiple: _react2['default'].PropTypes.bool,
	  disabled: _react2['default'].PropTypes.bool,
	  value: _react2['default'].PropTypes.any
	};
	
	InputBase.defaultProps = {
	  disabled: false,
	  hasFeedback: false,
	  multiple: false
	};
	
	exports['default'] = InputBase;
	module.exports = exports['default'];

/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactOverlaysLibTransition = __webpack_require__(85);
	
	var _reactOverlaysLibTransition2 = _interopRequireDefault(_reactOverlaysLibTransition);
	
	var _reactPropTypesLibDeprecated = __webpack_require__(37);
	
	var _reactPropTypesLibDeprecated2 = _interopRequireDefault(_reactPropTypesLibDeprecated);
	
	var Fade = (function (_React$Component) {
	  _inherits(Fade, _React$Component);
	
	  function Fade() {
	    _classCallCheck(this, Fade);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  // Explicitly copied from Transition for doc generation.
	  // TODO: Remove duplication once #977 is resolved.
	
	  Fade.prototype.render = function render() {
	    var timeout = this.props.timeout || this.props.duration;
	
	    return _react2['default'].createElement(
	      _reactOverlaysLibTransition2['default'],
	      _extends({}, this.props, {
	        timeout: timeout,
	        className: _classnames2['default'](this.props.className, 'fade'),
	        enteredClassName: 'in',
	        enteringClassName: 'in'
	      }),
	      this.props.children
	    );
	  };
	
	  return Fade;
	})(_react2['default'].Component);
	
	Fade.propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  'in': _react2['default'].PropTypes.bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _react2['default'].PropTypes.bool,
	
	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2['default'].PropTypes.bool,
	
	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _react2['default'].PropTypes.number,
	
	  /**
	   * duration
	   * @private
	   */
	  duration: _reactPropTypesLibDeprecated2['default'](_react2['default'].PropTypes.number, 'Use `timeout`.'),
	
	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _react2['default'].PropTypes.func
	};
	
	Fade.defaultProps = {
	  'in': false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};
	
	exports['default'] = Fade;
	module.exports = exports['default'];

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(98);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(142),
	    isArguments = __webpack_require__(54),
	    isArray = __webpack_require__(22),
	    isFunction = __webpack_require__(72),
	    isIndex = __webpack_require__(94),
	    isLength = __webpack_require__(26),
	    isObject = __webpack_require__(20),
	    isString = __webpack_require__(55),
	    support = __webpack_require__(56);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/** Used to fix the JScript `[[DontEnum]]` bug. */
	var shadowProps = [
	  'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
	  'toLocaleString', 'toString', 'valueOf'
	];
	
	/** Used for native method references. */
	var errorProto = Error.prototype,
	    objectProto = Object.prototype,
	    stringProto = String.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to avoid iterating over non-enumerable properties in IE < 9. */
	var nonEnumProps = {};
	nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
	nonEnumProps[boolTag] = nonEnumProps[stringTag] = { 'constructor': true, 'toString': true, 'valueOf': true };
	nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = { 'constructor': true, 'toString': true };
	nonEnumProps[objectTag] = { 'constructor': true };
	
	arrayEach(shadowProps, function(key) {
	  for (var tag in nonEnumProps) {
	    if (hasOwnProperty.call(nonEnumProps, tag)) {
	      var props = nonEnumProps[tag];
	      props[key] = hasOwnProperty.call(props, key);
	    }
	  }
	});
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object) || isString(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
	      isProto = proto === object,
	      result = Array(length),
	      skipIndexes = length > 0,
	      skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
	      skipProto = support.enumPrototypes && isFunction(object);
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  // lodash skips the `constructor` property when it infers it's iterating
	  // over a `prototype` object because IE < 9 can't set the `[[Enumerable]]`
	  // attribute of an existing property and the `constructor` property of a
	  // prototype defaults to non-enumerable.
	  for (var key in object) {
	    if (!(skipProto && key == 'prototype') &&
	        !(skipErrorProps && (key == 'message' || key == 'name')) &&
	        !(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  if (support.nonEnumShadows && object !== objectProto) {
	    var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
	        nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];
	
	    if (tag == objectTag) {
	      proto = objectProto;
	    }
	    length = shadowProps.length;
	    while (length--) {
	      key = shadowProps[length];
	      var nonEnum = nonEnums[key];
	      if (!(isProto && nonEnum) &&
	          (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
	        result.push(key);
	      }
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


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

/***/ 67:
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports['default'] = valueValidation;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactPropTypesLibSinglePropFrom = __webpack_require__(171);
	
	var _reactPropTypesLibSinglePropFrom2 = _interopRequireDefault(_reactPropTypesLibSinglePropFrom);
	
	function valueValidation(props, propName, componentName) {
	  var error = _reactPropTypesLibSinglePropFrom2['default']('children', 'value')(props, propName, componentName);
	
	  if (!error) {
	    error = _react2['default'].PropTypes.node(props, propName, componentName);
	  }
	
	  return error;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	 */
	
	'use strict';
	var camelize = __webpack_require__(132);
	var msPattern = /^-ms-/;
	
	module.exports = function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	};

/***/ },

/***/ 70:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isRequiredForA11y;
	
	function isRequiredForA11y(propType) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] == null) {
	      return new Error("The prop '" + propName + "' is required to make '" + componentName + "' accessible" + " for users using assistive technologies such as screen readers");
	    }
	
	    return propType(props, propName, componentName);
	  };
	}
	
	module.exports = exports["default"];

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },

/***/ 73:
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

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	
	/* eslint-disable react/prop-types */
	'use strict';
	
	var _extends = __webpack_require__(3)['default'];
	
	var _objectWithoutProperties = __webpack_require__(9)['default'];
	
	var _Object$keys = __webpack_require__(18)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var _styleMaps = __webpack_require__(11);
	
	var _domHelpersUtilScrollbarSize = __webpack_require__(78);
	
	var _domHelpersUtilScrollbarSize2 = _interopRequireDefault(_domHelpersUtilScrollbarSize);
	
	var _domHelpersUtilInDOM = __webpack_require__(32);
	
	var _domHelpersUtilInDOM2 = _interopRequireDefault(_domHelpersUtilInDOM);
	
	var _domHelpersOwnerDocument = __webpack_require__(23);
	
	var _domHelpersOwnerDocument2 = _interopRequireDefault(_domHelpersOwnerDocument);
	
	var _domHelpersEvents = __webpack_require__(164);
	
	var _domHelpersEvents2 = _interopRequireDefault(_domHelpersEvents);
	
	var _reactPropTypesLibElementType = __webpack_require__(13);
	
	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
	
	var _Fade = __webpack_require__(61);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _ModalDialog = __webpack_require__(166);
	
	var _ModalDialog2 = _interopRequireDefault(_ModalDialog);
	
	var _ModalBody = __webpack_require__(113);
	
	var _ModalBody2 = _interopRequireDefault(_ModalBody);
	
	var _ModalHeader = __webpack_require__(115);
	
	var _ModalHeader2 = _interopRequireDefault(_ModalHeader);
	
	var _ModalTitle = __webpack_require__(116);
	
	var _ModalTitle2 = _interopRequireDefault(_ModalTitle);
	
	var _ModalFooter = __webpack_require__(114);
	
	var _ModalFooter2 = _interopRequireDefault(_ModalFooter);
	
	var _reactOverlaysLibModal = __webpack_require__(167);
	
	var _reactOverlaysLibModal2 = _interopRequireDefault(_reactOverlaysLibModal);
	
	var _reactOverlaysLibUtilsIsOverflowing = __webpack_require__(80);
	
	var _reactOverlaysLibUtilsIsOverflowing2 = _interopRequireDefault(_reactOverlaysLibUtilsIsOverflowing);
	
	var _lodashCompatObjectPick = __webpack_require__(43);
	
	var _lodashCompatObjectPick2 = _interopRequireDefault(_lodashCompatObjectPick);
	
	var Modal = _react2['default'].createClass({
	  displayName: 'Modal',
	
	  propTypes: _extends({}, _reactOverlaysLibModal2['default'].propTypes, _ModalDialog2['default'].propTypes, {
	
	    /**
	     * Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
	     */
	    backdrop: _react2['default'].PropTypes.oneOf(['static', true, false]),
	
	    /**
	     * Close the modal when escape key is pressed
	     */
	    keyboard: _react2['default'].PropTypes.bool,
	
	    /**
	     * Open and close the Modal with a slide and fade animation.
	     */
	    animation: _react2['default'].PropTypes.bool,
	
	    /**
	     * A Component type that provides the modal content Markup. This is a useful prop when you want to use your own
	     * styles and markup to create a custom modal component.
	     */
	    dialogComponent: _reactPropTypesLibElementType2['default'],
	
	    /**
	     * When `true` The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes.
	     * Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.
	     */
	    autoFocus: _react2['default'].PropTypes.bool,
	
	    /**
	     * When `true` The modal will prevent focus from leaving the Modal while open.
	     * Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies,
	     * such as screen readers.
	     */
	    enforceFocus: _react2['default'].PropTypes.bool,
	
	    /**
	     * Hide this from automatic props documentation generation.
	     * @private
	     */
	    bsStyle: _react2['default'].PropTypes.string,
	
	    /**
	     * When `true` The modal will show itself.
	     */
	    show: _react2['default'].PropTypes.bool,
	
	    /**
	     * A callback fired when the header closeButton or non-static backdrop is
	     * clicked. Required if either are specified.
	     */
	    onHide: _react2['default'].PropTypes.func
	  }),
	
	  childContextTypes: {
	    '$bs_onModalHide': _react2['default'].PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return _extends({}, _reactOverlaysLibModal2['default'].defaultProps, {
	      bsClass: 'modal',
	      animation: true,
	      dialogComponent: _ModalDialog2['default']
	    });
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      modalStyles: {}
	    };
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      $bs_onModalHide: this.props.onHide
	    };
	  },
	
	  render: function render() {
	    var _this = this;
	
	    var _props = this.props;
	    var className = _props.className;
	    var children = _props.children;
	    var dialogClassName = _props.dialogClassName;
	    var animation = _props.animation;
	
	    var props = _objectWithoutProperties(_props, ['className', 'children', 'dialogClassName', 'animation']);
	
	    var modalStyles = this.state.modalStyles;
	
	    var inClass = { 'in': props.show && !animation };
	    var Dialog = props.dialogComponent;
	
	    var parentProps = _lodashCompatObjectPick2['default'](props, _Object$keys(_reactOverlaysLibModal2['default'].propTypes).concat(['onExit', 'onExiting', 'onEnter', 'onEntered']) // the rest are fired in _onHide() and _onShow()
	    );
	
	    var modal = _react2['default'].createElement(
	      Dialog,
	      _extends({
	        key: 'modal',
	        ref: function (ref) {
	          return _this._modal = ref;
	        }
	      }, props, {
	        style: modalStyles,
	        className: _classnames2['default'](className, inClass),
	        dialogClassName: dialogClassName,
	        onClick: props.backdrop === true ? this.handleDialogClick : null
	      }),
	      this.props.children
	    );
	
	    return _react2['default'].createElement(
	      _reactOverlaysLibModal2['default'],
	      _extends({}, parentProps, {
	        show: props.show,
	        ref: function (ref) {
	          _this._wrapper = ref && ref.refs.modal;
	          _this._backdrop = ref && ref.refs.backdrop;
	        },
	        onEntering: this._onShow,
	        onExited: this._onHide,
	        backdropClassName: _classnames2['default'](_utilsBootstrapUtils2['default'].prefix(props, 'backdrop'), inClass),
	        containerClassName: _utilsBootstrapUtils2['default'].prefix(props, 'open'),
	        transition: animation ? _Fade2['default'] : undefined,
	        dialogTransitionTimeout: Modal.TRANSITION_DURATION,
	        backdropTransitionTimeout: Modal.BACKDROP_TRANSITION_DURATION
	      }),
	      modal
	    );
	  },
	
	  _onShow: function _onShow() {
	    _domHelpersEvents2['default'].on(window, 'resize', this.handleWindowResize);
	
	    this.setState(this._getStyles());
	
	    if (this.props.onEntering) {
	      var _props2;
	
	      (_props2 = this.props).onEntering.apply(_props2, arguments);
	    }
	  },
	
	  _onHide: function _onHide() {
	    _domHelpersEvents2['default'].off(window, 'resize', this.handleWindowResize);
	
	    if (this.props.onExited) {
	      var _props3;
	
	      (_props3 = this.props).onExited.apply(_props3, arguments);
	    }
	  },
	
	  handleDialogClick: function handleDialogClick(e) {
	    if (e.target !== e.currentTarget) {
	      return;
	    }
	
	    this.props.onHide();
	  },
	
	  handleWindowResize: function handleWindowResize() {
	    this.setState(this._getStyles());
	  },
	
	  _getStyles: function _getStyles() {
	    if (!_domHelpersUtilInDOM2['default']) {
	      return {};
	    }
	
	    var node = _reactDom2['default'].findDOMNode(this._modal);
	    var doc = _domHelpersOwnerDocument2['default'](node);
	
	    var scrollHt = node.scrollHeight;
	    var bodyIsOverflowing = _reactOverlaysLibUtilsIsOverflowing2['default'](_reactDom2['default'].findDOMNode(this.props.container || doc.body));
	    var modalIsOverflowing = scrollHt > doc.documentElement.clientHeight;
	
	    return {
	      modalStyles: {
	        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? _domHelpersUtilScrollbarSize2['default']() : void 0,
	        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? _domHelpersUtilScrollbarSize2['default']() : void 0
	      }
	    };
	  }
	});
	
	Modal.Body = _ModalBody2['default'];
	Modal.Header = _ModalHeader2['default'];
	Modal.Title = _ModalTitle2['default'];
	Modal.Footer = _ModalFooter2['default'];
	
	Modal.Dialog = _ModalDialog2['default'];
	
	Modal.TRANSITION_DURATION = 300;
	Modal.BACKDROP_TRANSITION_DURATION = 150;
	
	exports['default'] = _utilsBootstrapUtils.bsSizes([_styleMaps.Sizes.LARGE, _styleMaps.Sizes.SMALL], _utilsBootstrapUtils.bsClass('modal', Modal));
	module.exports = exports['default'];

/***/ },

/***/ 77:
/***/ function(module, exports) {

	'use strict';
	module.exports = function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);else return (' ' + element.className + ' ').indexOf(' ' + className + ' ') !== -1;
	};

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var canUseDOM = __webpack_require__(32);
	
	var size;
	
	module.exports = function (recalc) {
	  if (!size || recalc) {
	    if (canUseDOM) {
	      var scrollDiv = document.createElement('div');
	
	      scrollDiv.style.position = 'absolute';
	      scrollDiv.style.top = '-9999px';
	      scrollDiv.style.width = '50px';
	      scrollDiv.style.height = '50px';
	      scrollDiv.style.overflow = 'scroll';
	
	      document.body.appendChild(scrollDiv);
	      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	      document.body.removeChild(scrollDiv);
	    }
	  }
	
	  return size;
	};

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	var _interopRequireWildcard = __webpack_require__(102)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _InputBase2 = __webpack_require__(60);
	
	var _InputBase3 = _interopRequireDefault(_InputBase2);
	
	var _FormControls = __webpack_require__(111);
	
	var FormControls = _interopRequireWildcard(_FormControls);
	
	var _utilsDeprecationWarning = __webpack_require__(47);
	
	var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);
	
	var Input = (function (_InputBase) {
	  _inherits(Input, _InputBase);
	
	  function Input() {
	    _classCallCheck(this, Input);
	
	    _InputBase.apply(this, arguments);
	  }
	
	  Input.prototype.render = function render() {
	    if (this.props.type === 'static') {
	      _utilsDeprecationWarning2['default']('Input type=static', 'FormControls.Static');
	      return _react2['default'].createElement(FormControls.Static, this.props);
	    }
	
	    return _InputBase.prototype.render.call(this);
	  };
	
	  return Input;
	})(_InputBase3['default']);
	
	Input.propTypes = {
	  type: _react2['default'].PropTypes.string
	};
	
	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isOverflowing;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _domHelpersQueryIsWindow = __webpack_require__(172);
	
	var _domHelpersQueryIsWindow2 = _interopRequireDefault(_domHelpersQueryIsWindow);
	
	var _domHelpersOwnerDocument = __webpack_require__(23);
	
	var _domHelpersOwnerDocument2 = _interopRequireDefault(_domHelpersOwnerDocument);
	
	function isBody(node) {
	  return node && node.tagName.toLowerCase() === 'body';
	}
	
	function bodyIsOverflowing(node) {
	  var doc = _domHelpersOwnerDocument2['default'](node);
	  var win = _domHelpersQueryIsWindow2['default'](doc);
	  var fullWidth = win.innerWidth;
	
	  // Support: ie8, no innerWidth
	  if (!fullWidth) {
	    var documentElementRect = doc.documentElement.getBoundingClientRect();
	    fullWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	  }
	
	  return doc.body.clientWidth < fullWidth;
	}
	
	function isOverflowing(container) {
	  var win = _domHelpersQueryIsWindow2['default'](container);
	
	  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _domHelpersEventsOn = __webpack_require__(71);
	
	var _domHelpersEventsOn2 = _interopRequireDefault(_domHelpersEventsOn);
	
	var _domHelpersEventsOff = __webpack_require__(141);
	
	var _domHelpersEventsOff2 = _interopRequireDefault(_domHelpersEventsOff);
	
	exports['default'] = function (node, event, handler) {
	  _domHelpersEventsOn2['default'](node, event, handler);
	  return {
	    remove: function remove() {
	      _domHelpersEventsOff2['default'](node, event, handler);
	    }
	  };
	};
	
	module.exports = exports['default'];

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactPropTypesLibMountable = __webpack_require__(52);
	
	var _reactPropTypesLibMountable2 = _interopRequireDefault(_reactPropTypesLibMountable);
	
	var _utilsOwnerDocument = __webpack_require__(27);
	
	var _utilsOwnerDocument2 = _interopRequireDefault(_utilsOwnerDocument);
	
	var _utilsGetContainer = __webpack_require__(51);
	
	var _utilsGetContainer2 = _interopRequireDefault(_utilsGetContainer);
	
	/**
	 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
	 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
	 * The children of `<Portal/>` component will be appended to the `container` specified.
	 */
	var Portal = _react2['default'].createClass({
	
	  displayName: 'Portal',
	
	  propTypes: {
	    /**
	     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
	     * appended to it.
	     */
	    container: _react2['default'].PropTypes.oneOfType([_reactPropTypesLibMountable2['default'], _react2['default'].PropTypes.func])
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._renderOverlay();
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    this._renderOverlay();
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this._unrenderOverlay();
	    this._unmountOverlayTarget();
	  },
	
	  _mountOverlayTarget: function _mountOverlayTarget() {
	    if (!this._overlayTarget) {
	      this._overlayTarget = document.createElement('div');
	      this.getContainerDOMNode().appendChild(this._overlayTarget);
	    }
	  },
	
	  _unmountOverlayTarget: function _unmountOverlayTarget() {
	    if (this._overlayTarget) {
	      this.getContainerDOMNode().removeChild(this._overlayTarget);
	      this._overlayTarget = null;
	    }
	  },
	
	  _renderOverlay: function _renderOverlay() {
	
	    var overlay = !this.props.children ? null : _react2['default'].Children.only(this.props.children);
	
	    // Save reference for future access.
	    if (overlay !== null) {
	      this._mountOverlayTarget();
	      this._overlayInstance = _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, overlay, this._overlayTarget);
	    } else {
	      // Unrender if the component is null for transitions to null
	      this._unrenderOverlay();
	      this._unmountOverlayTarget();
	    }
	  },
	
	  _unrenderOverlay: function _unrenderOverlay() {
	    if (this._overlayTarget) {
	      _reactDom2['default'].unmountComponentAtNode(this._overlayTarget);
	      this._overlayInstance = null;
	    }
	  },
	
	  render: function render() {
	    return null;
	  },
	
	  getMountNode: function getMountNode() {
	    return this._overlayTarget;
	  },
	
	  getOverlayDOMNode: function getOverlayDOMNode() {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	    }
	
	    if (this._overlayInstance) {
	      if (this._overlayInstance.getWrappedDOMNode) {
	        return this._overlayInstance.getWrappedDOMNode();
	      } else {
	        return _reactDom2['default'].findDOMNode(this._overlayInstance);
	      }
	    }
	
	    return null;
	  },
	
	  getContainerDOMNode: function getContainerDOMNode() {
	    return _utilsGetContainer2['default'](this.props.container, _utilsOwnerDocument2['default'](this).body);
	  }
	});
	
	exports['default'] = Portal;
	module.exports = exports['default'];

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _common = __webpack_require__(73);
	
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

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domHelpersTransitionProperties = __webpack_require__(131);
	
	var _domHelpersTransitionProperties2 = _interopRequireDefault(_domHelpersTransitionProperties);
	
	var _domHelpersEventsOn = __webpack_require__(71);
	
	var _domHelpersEventsOn2 = _interopRequireDefault(_domHelpersEventsOn);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var transitionEndEvent = _domHelpersTransitionProperties2['default'].end;
	
	var UNMOUNTED = 0;
	exports.UNMOUNTED = UNMOUNTED;
	var EXITED = 1;
	exports.EXITED = EXITED;
	var ENTERING = 2;
	exports.ENTERING = ENTERING;
	var ENTERED = 3;
	exports.ENTERED = ENTERED;
	var EXITING = 4;
	
	exports.EXITING = EXITING;
	/**
	 * The Transition component lets you define and run css transitions with a simple declarative api.
	 * It works similar to React's own [CSSTransitionGroup](http://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup)
	 * but is specifically optimized for transitioning a single child "in" or "out".
	 *
	 * You don't even need to use class based css transitions if you don't want to (but it is easiest).
	 * The extensive set of lifecyle callbacks means you have control over
	 * the transitioning now at each step of the way.
	 */
	
	var Transition = (function (_React$Component) {
	  function Transition(props, context) {
	    _classCallCheck(this, Transition);
	
	    _React$Component.call(this, props, context);
	
	    var initialStatus = undefined;
	    if (props['in']) {
	      // Start enter transition in componentDidMount.
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    this.state = { status: initialStatus };
	
	    this.nextCallback = null;
	  }
	
	  _inherits(Transition, _React$Component);
	
	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props['in']) {
	      this.performEnter(this.props);
	    }
	  };
	
	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var status = this.state.status;
	    if (nextProps['in']) {
	      if (status === EXITING) {
	        this.performEnter(nextProps);
	      } else if (this.props.unmountOnExit) {
	        if (status === UNMOUNTED) {
	          // Start enter transition in componentDidUpdate.
	          this.setState({ status: EXITED });
	        }
	      } else if (status === EXITED) {
	        this.performEnter(nextProps);
	      }
	
	      // Otherwise we're already entering or entered.
	    } else {
	      if (status === ENTERING || status === ENTERED) {
	        this.performExit(nextProps);
	      }
	
	      // Otherwise we're already exited or exiting.
	    }
	  };
	
	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    if (this.props.unmountOnExit && this.state.status === EXITED) {
	      // EXITED is always a transitional state to either ENTERING or UNMOUNTED
	      // when using unmountOnExit.
	      if (this.props['in']) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }
	    }
	  };
	
	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };
	
	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2['default'].findDOMNode(this);
	
	    // Not this.props, because we might be about to receive new props.
	    props.onEnter(node);
	
	    this.safeSetState({ status: ENTERING }, function () {
	      _this.props.onEntering(node);
	
	      _this.onTransitionEnd(node, function () {
	        _this.safeSetState({ status: ENTERED }, function () {
	          _this.props.onEntered(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.performExit = function performExit(props) {
	    var _this2 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2['default'].findDOMNode(this);
	
	    // Not this.props, because we might be about to receive new props.
	    props.onExit(node);
	
	    this.safeSetState({ status: EXITING }, function () {
	      _this2.props.onExiting(node);
	
	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: EXITED }, function () {
	          _this2.props.onExited(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };
	
	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // This shouldn't be necessary, but there are weird race conditions with
	    // setState callbacks and unmounting in testing, so always make sure that
	    // we can cancel any pending setState callbacks after we unmount.
	    this.setState(nextState, this.setNextCallback(callback));
	  };
	
	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this3 = this;
	
	    var active = true;
	
	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this3.nextCallback = null;
	
	        callback(event);
	      }
	    };
	
	    this.nextCallback.cancel = function () {
	      active = false;
	    };
	
	    return this.nextCallback;
	  };
	
	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);
	
	    if (node) {
	      _domHelpersEventsOn2['default'](node, transitionEndEvent, this.nextCallback);
	      setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };
	
	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }
	
	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;
	
	    var childProps = _objectWithoutProperties(_props, ['children', 'className']);
	
	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });
	
	    var transitionClassName = undefined;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }
	
	    var child = _react2['default'].Children.only(children);
	    return _react2['default'].cloneElement(child, _extends({}, childProps, {
	      className: _classnames2['default'](child.props.className, className, transitionClassName)
	    }));
	  };
	
	  return Transition;
	})(_react2['default'].Component);
	
	Transition.propTypes = {
	  /**
	   * Show the component; triggers the enter or exit animation
	   */
	  'in': _react2['default'].PropTypes.bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is not shown
	   */
	  unmountOnExit: _react2['default'].PropTypes.bool,
	
	  /**
	   * Run the enter animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2['default'].PropTypes.bool,
	
	  /**
	   * A Timeout for the animation, in milliseconds, to ensure that a node doesn't
	   * transition indefinately if the browser transitionEnd events are
	   * canceled or interrupted.
	   *
	   * By default this is set to a high number (5 seconds) as a failsafe. You should consider
	   * setting this to the duration of your animation (or a bit above it).
	   */
	  timeout: _react2['default'].PropTypes.number,
	
	  /**
	   * CSS class or classes applied when the component is exited
	   */
	  exitedClassName: _react2['default'].PropTypes.string,
	  /**
	   * CSS class or classes applied while the component is exiting
	   */
	  exitingClassName: _react2['default'].PropTypes.string,
	  /**
	   * CSS class or classes applied when the component is entered
	   */
	  enteredClassName: _react2['default'].PropTypes.string,
	  /**
	   * CSS class or classes applied while the component is entering
	   */
	  enteringClassName: _react2['default'].PropTypes.string,
	
	  /**
	   * Callback fired before the "entering" classes are applied
	   */
	  onEnter: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the "entering" classes are applied
	   */
	  onEntering: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the "enter" classes are applied
	   */
	  onEntered: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired before the "exiting" classes are applied
	   */
	  onExit: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the "exiting" classes are applied
	   */
	  onExiting: _react2['default'].PropTypes.func,
	  /**
	   * Callback fired after the "exited" classes are applied
	   */
	  onExited: _react2['default'].PropTypes.func
	};
	
	// Name the function so it is clearer in the documentation
	function noop() {}
	
	Transition.displayName = 'Transition';
	
	Transition.defaultProps = {
	  'in': false,
	  unmountOnExit: false,
	  transitionAppear: false,
	
	  timeout: 5000,
	
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	
	exports['default'] = Transition;

/***/ },

/***/ 88:
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(143),
	    isArguments = __webpack_require__(54),
	    isArray = __webpack_require__(22),
	    isArrayLike = __webpack_require__(53),
	    isObjectLike = __webpack_require__(21);
	
	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(145);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(16);
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : toObject(object)[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(91);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },

/***/ 93:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	var isHostObject = (function() {
	  try {
	    Object({ 'toString': 0 } + '');
	  } catch(e) {
	    return function() { return false; };
	  }
	  return function(value) {
	    // IE < 9 presents many host objects as `Object` objects that can coerce
	    // to strings despite having improperly defined `toString` methods.
	    return typeof value.toString != 'function' && typeof (value + '') == 'string';
	  };
	}());
	
	module.exports = isHostObject;


/***/ },

/***/ 94:
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(16);
	
	/**
	 * A specialized version of `_.pick` which picks `object` properties specified
	 * by `props`.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property names to pick.
	 * @returns {Object} Returns the new object.
	 */
	function pickByArray(object, props) {
	  object = toObject(object);
	
	  var index = -1,
	      length = props.length,
	      result = {};
	
	  while (++index < length) {
	    var key = props[index];
	    if (key in object) {
	      result[key] = object[key];
	    }
	  }
	  return result;
	}
	
	module.exports = pickByArray;


/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(144);
	
	/**
	 * A specialized version of `_.pick` which picks `object` properties `predicate`
	 * returns truthy for.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Object} Returns the new object.
	 */
	function pickByCallback(object, predicate) {
	  var result = {};
	  baseForIn(object, function(value, key, object) {
	    if (predicate(value, key, object)) {
	      result[key] = value;
	    }
	  });
	  return result;
	}
	
	module.exports = pickByCallback;


/***/ },

/***/ 98:
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var babelHelpers = __webpack_require__(36);
	
	exports.__esModule = true;
	
	/**
	 * document.activeElement
	 */
	exports['default'] = activeElement;
	
	var _ownerDocument = __webpack_require__(23);
	
	var _ownerDocument2 = babelHelpers.interopRequireDefault(_ownerDocument);
	
	function activeElement() {
	  var doc = arguments[0] === undefined ? document : arguments[0];
	
	  try {
	    return doc.activeElement;
	  } catch (e) {}
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 102:
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }
	
	    newObj["default"] = obj;
	    return newObj;
	  }
	};
	
	exports.__esModule = true;

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

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _Static2 = __webpack_require__(159);
	
	var _Static3 = _interopRequireDefault(_Static2);
	
	exports.Static = _Static3['default'];

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var FormGroup = (function (_React$Component) {
	  _inherits(FormGroup, _React$Component);
	
	  function FormGroup() {
	    _classCallCheck(this, FormGroup);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  FormGroup.prototype.render = function render() {
	    var classes = {
	      'form-group': !this.props.standalone,
	      'form-group-lg': !this.props.standalone && this.props.bsSize === 'large',
	      'form-group-sm': !this.props.standalone && this.props.bsSize === 'small',
	      'has-feedback': this.props.hasFeedback,
	      'has-success': this.props.bsStyle === 'success',
	      'has-warning': this.props.bsStyle === 'warning',
	      'has-error': this.props.bsStyle === 'error'
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      { className: _classnames2['default'](classes, this.props.groupClassName) },
	      this.props.children
	    );
	  };
	
	  return FormGroup;
	})(_react2['default'].Component);
	
	FormGroup.defaultProps = {
	  hasFeedback: false,
	  standalone: false
	};
	
	FormGroup.propTypes = {
	  standalone: _react2['default'].PropTypes.bool,
	  hasFeedback: _react2['default'].PropTypes.bool,
	  bsSize: function bsSize(props) {
	    if (props.standalone && props.bsSize !== undefined) {
	      return new Error('bsSize will not be used when `standalone` is set.');
	    }
	
	    return _react2['default'].PropTypes.oneOf(['small', 'medium', 'large']).apply(null, arguments);
	  },
	  bsStyle: _react2['default'].PropTypes.oneOf(['success', 'warning', 'error']),
	  groupClassName: _react2['default'].PropTypes.string
	};
	
	exports['default'] = FormGroup;
	module.exports = exports['default'];

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var ModalBody = (function (_React$Component) {
	  _inherits(ModalBody, _React$Component);
	
	  function ModalBody() {
	    _classCallCheck(this, ModalBody);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  ModalBody.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, _utilsBootstrapUtils2['default'].prefix(this.props, 'body')) }),
	      this.props.children
	    );
	  };
	
	  return ModalBody;
	})(_react2['default'].Component);
	
	exports['default'] = _utilsBootstrapUtils.bsClass('modal', ModalBody);
	module.exports = exports['default'];

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var ModalFooter = (function (_React$Component) {
	  _inherits(ModalFooter, _React$Component);
	
	  function ModalFooter() {
	    _classCallCheck(this, ModalFooter);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  ModalFooter.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, _utilsBootstrapUtils2['default'].prefix(this.props, 'footer')) }),
	      this.props.children
	    );
	  };
	
	  return ModalFooter;
	})(_react2['default'].Component);
	
	ModalFooter.propTypes = {
	  /**
	   * A css class applied to the Component
	   */
	  bsClass: _react2['default'].PropTypes.string
	};
	
	ModalFooter.defaultProps = {
	  bsClass: 'modal'
	};
	
	exports['default'] = _utilsBootstrapUtils.bsClass('modal', ModalFooter);
	module.exports = exports['default'];

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _objectWithoutProperties = __webpack_require__(9)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var _utilsCreateChainedFunction = __webpack_require__(15);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var ModalHeader = (function (_React$Component) {
	  _inherits(ModalHeader, _React$Component);
	
	  function ModalHeader() {
	    _classCallCheck(this, ModalHeader);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  ModalHeader.prototype.render = function render() {
	    var _props = this.props;
	    var label = _props['aria-label'];
	
	    var props = _objectWithoutProperties(_props, ['aria-label']);
	
	    var onHide = _utilsCreateChainedFunction2['default'](this.context.$bs_onModalHide, this.props.onHide);
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, _utilsBootstrapUtils2['default'].prefix(this.props, 'header'))
	      }),
	      this.props.closeButton && _react2['default'].createElement(
	        'button',
	        {
	          type: 'button',
	          className: 'close',
	          'aria-label': label,
	          onClick: onHide },
	        _react2['default'].createElement(
	          'span',
	          { 'aria-hidden': 'true' },
	          '×'
	        )
	      ),
	      this.props.children
	    );
	  };
	
	  return ModalHeader;
	})(_react2['default'].Component);
	
	ModalHeader.propTypes = {
	  /**
	   * The 'aria-label' attribute provides an accessible label for the close button.
	   * It is used for Assistive Technology when the label text is not readable.
	   */
	  'aria-label': _react2['default'].PropTypes.string,
	
	  bsClass: _react2['default'].PropTypes.string,
	
	  /**
	   * Specify whether the Component should contain a close button
	   */
	  closeButton: _react2['default'].PropTypes.bool,
	
	  /**
	   * A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically
	   * be propagated up to the parent Modal `onHide`.
	   */
	  onHide: _react2['default'].PropTypes.func
	};
	
	ModalHeader.contextTypes = {
	  '$bs_onModalHide': _react2['default'].PropTypes.func
	};
	
	ModalHeader.defaultProps = {
	  'aria-label': 'Close',
	  closeButton: false
	};
	
	exports['default'] = _utilsBootstrapUtils.bsClass('modal', ModalHeader);
	module.exports = exports['default'];

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var ModalTitle = (function (_React$Component) {
	  _inherits(ModalTitle, _React$Component);
	
	  function ModalTitle() {
	    _classCallCheck(this, ModalTitle);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  ModalTitle.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'h4',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, _utilsBootstrapUtils2['default'].prefix(this.props, 'title')) }),
	      this.props.children
	    );
	  };
	
	  return ModalTitle;
	})(_react2['default'].Component);
	
	exports['default'] = _utilsBootstrapUtils.bsClass('modal', ModalTitle);
	module.exports = exports['default'];

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var contains = __webpack_require__(31),
	    getWindow = __webpack_require__(172),
	    ownerDocument = __webpack_require__(23);
	
	module.exports = function offset(node) {
	  var doc = ownerDocument(node),
	      win = getWindow(doc),
	      docElem = doc && doc.documentElement,
	      box = { top: 0, left: 0, height: 0, width: 0 };
	
	  if (!doc) return;
	
	  // Make sure it's not a disconnected DOM node
	  if (!contains(docElem, node)) return box;
	
	  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
	
	  if (box.width || box.height) {
	
	    box = {
	      top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
	      left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
	      width: (box.width == null ? node.offsetWidth : box.width) || 0,
	      height: (box.height == null ? node.offsetHeight : box.height) || 0
	    };
	  }
	
	  return box;
	};

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

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _utilsAddEventListener = __webpack_require__(81);
	
	var _utilsAddEventListener2 = _interopRequireDefault(_utilsAddEventListener);
	
	var _utilsCreateChainedFunction = __webpack_require__(179);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var _utilsOwnerDocument = __webpack_require__(27);
	
	var _utilsOwnerDocument2 = _interopRequireDefault(_utilsOwnerDocument);
	
	// TODO: Consider using an ES6 symbol here, once we use babel-runtime.
	var CLICK_WAS_INSIDE = '__click_was_inside';
	
	var counter = 0;
	
	function getSuppressRootClose() {
	  var id = CLICK_WAS_INSIDE + '_' + counter++;
	  return {
	    id: id,
	    suppressRootClose: function suppressRootClose(event) {
	      // Tag the native event to prevent the root close logic on document click.
	      // This seems safer than using event.nativeEvent.stopImmediatePropagation(),
	      // which is only supported in IE >= 9.
	      event.nativeEvent[id] = true;
	    }
	  };
	}
	
	var RootCloseWrapper = (function (_React$Component) {
	  function RootCloseWrapper(props) {
	    _classCallCheck(this, RootCloseWrapper);
	
	    _React$Component.call(this, props);
	
	    this.handleDocumentClick = this.handleDocumentClick.bind(this);
	    this.handleDocumentKeyUp = this.handleDocumentKeyUp.bind(this);
	
	    var _getSuppressRootClose = getSuppressRootClose();
	
	    var id = _getSuppressRootClose.id;
	    var suppressRootClose = _getSuppressRootClose.suppressRootClose;
	
	    this._suppressRootId = id;
	
	    this._suppressRootCloseHandler = suppressRootClose;
	  }
	
	  _inherits(RootCloseWrapper, _React$Component);
	
	  RootCloseWrapper.prototype.bindRootCloseHandlers = function bindRootCloseHandlers() {
	    var doc = _utilsOwnerDocument2['default'](this);
	
	    this._onDocumentClickListener = _utilsAddEventListener2['default'](doc, 'click', this.handleDocumentClick);
	
	    this._onDocumentKeyupListener = _utilsAddEventListener2['default'](doc, 'keyup', this.handleDocumentKeyUp);
	  };
	
	  RootCloseWrapper.prototype.handleDocumentClick = function handleDocumentClick(e) {
	    // This is now the native event.
	    if (e[this._suppressRootId]) {
	      return;
	    }
	
	    this.props.onRootClose();
	  };
	
	  RootCloseWrapper.prototype.handleDocumentKeyUp = function handleDocumentKeyUp(e) {
	    if (e.keyCode === 27) {
	      this.props.onRootClose();
	    }
	  };
	
	  RootCloseWrapper.prototype.unbindRootCloseHandlers = function unbindRootCloseHandlers() {
	    if (this._onDocumentClickListener) {
	      this._onDocumentClickListener.remove();
	    }
	
	    if (this._onDocumentKeyupListener) {
	      this._onDocumentKeyupListener.remove();
	    }
	  };
	
	  RootCloseWrapper.prototype.componentDidMount = function componentDidMount() {
	    this.bindRootCloseHandlers();
	  };
	
	  RootCloseWrapper.prototype.render = function render() {
	    var _props = this.props;
	    var noWrap = _props.noWrap;
	    var children = _props.children;
	
	    var child = _react2['default'].Children.only(children);
	
	    if (noWrap) {
	      return _react2['default'].cloneElement(child, {
	        onClick: _utilsCreateChainedFunction2['default'](this._suppressRootCloseHandler, child.props.onClick)
	      });
	    }
	
	    // Wrap the child in a new element, so the child won't have to handle
	    // potentially combining multiple onClick listeners.
	    return _react2['default'].createElement(
	      'div',
	      { onClick: this._suppressRootCloseHandler },
	      child
	    );
	  };
	
	  RootCloseWrapper.prototype.getWrappedDOMNode = function getWrappedDOMNode() {
	    // We can't use a ref to identify the wrapped child, since we might be
	    // stealing the ref from the owner, but we know exactly the DOM structure
	    // that will be rendered, so we can just do this to get the child's DOM
	    // node for doing size calculations in OverlayMixin.
	    var node = _reactDom2['default'].findDOMNode(this);
	    return this.props.noWrap ? node : node.firstChild;
	  };
	
	  RootCloseWrapper.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unbindRootCloseHandlers();
	  };
	
	  return RootCloseWrapper;
	})(_react2['default'].Component);
	
	exports['default'] = RootCloseWrapper;
	
	RootCloseWrapper.displayName = 'RootCloseWrapper';
	
	RootCloseWrapper.propTypes = {
	  onRootClose: _react2['default'].PropTypes.func.isRequired,
	
	  /**
	   * Passes the suppress click handler directly to the child component instead
	   * of placing it on a wrapping div. Only use when you can be sure the child
	   * properly handle the click event.
	   */
	  noWrap: _react2['default'].PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	/* eslint react/prop-types: [2, {ignore: ["container", "containerPadding", "target", "placement", "children"] }] */
	/* These properties are validated in 'Portal' and 'Position' components */
	
	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _objectWithoutProperties = __webpack_require__(9)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactOverlaysLibOverlay = __webpack_require__(182);
	
	var _reactOverlaysLibOverlay2 = _interopRequireDefault(_reactOverlaysLibOverlay);
	
	var _reactPropTypesLibElementType = __webpack_require__(13);
	
	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
	
	var _Fade = __webpack_require__(61);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Overlay = (function (_React$Component) {
	  _inherits(Overlay, _React$Component);
	
	  function Overlay() {
	    _classCallCheck(this, Overlay);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  Overlay.prototype.render = function render() {
	    var _props = this.props;
	    var child = _props.children;
	    var transition = _props.animation;
	
	    var props = _objectWithoutProperties(_props, ['children', 'animation']);
	
	    if (transition === true) {
	      transition = _Fade2['default'];
	    }
	
	    if (transition === false) {
	      transition = null;
	    }
	
	    if (!transition) {
	      child = _react.cloneElement(child, {
	        className: _classnames2['default']('in', child.props.className)
	      });
	    }
	
	    return _react2['default'].createElement(
	      _reactOverlaysLibOverlay2['default'],
	      _extends({}, props, {
	        transition: transition
	      }),
	      child
	    );
	  };
	
	  return Overlay;
	})(_react2['default'].Component);
	
	Overlay.propTypes = _extends({}, _reactOverlaysLibOverlay2['default'].propTypes, {
	
	  /**
	   * Set the visibility of the Overlay
	   */
	  show: _react2['default'].PropTypes.bool,
	  /**
	   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
	   */
	  rootClose: _react2['default'].PropTypes.bool,
	  /**
	   * A callback invoked by the overlay when it wishes to be hidden. Required if
	   * `rootClose` is specified.
	   */
	  onHide: _react2['default'].PropTypes.func,
	
	  /**
	   * Use animation
	   */
	  animation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _reactPropTypesLibElementType2['default']]),
	
	  /**
	   * Callback fired before the Overlay transitions in
	   */
	  onEnter: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired as the Overlay begins to transition in
	   */
	  onEntering: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired after the Overlay finishes transitioning in
	   */
	  onEntered: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired right before the Overlay transitions out
	   */
	  onExit: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired as the Overlay begins to transition out
	   */
	  onExiting: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired after the Overlay finishes transitioning out
	   */
	  onExited: _react2['default'].PropTypes.func
	});
	
	Overlay.defaultProps = {
	  animation: _Fade2['default'],
	  rootClose: false,
	  show: false
	};
	
	exports['default'] = Overlay;
	module.exports = exports['default'];

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(128);
	module.exports = __webpack_require__(19).Object.setPrototypeOf;

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(67);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(34).getDesc
	  , isObject = __webpack_require__(67)
	  , anObject = __webpack_require__(126);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(57)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(33);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(127).set});

/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var babelHelpers = __webpack_require__(36);
	
	var _utilCamelizeStyle = __webpack_require__(69);
	
	var _utilCamelizeStyle2 = babelHelpers.interopRequireDefault(_utilCamelizeStyle);
	
	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
	
	module.exports = function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;
	
	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : { //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;
	
	      prop = (0, _utilCamelizeStyle2['default'])(prop);
	
	      if (prop == 'float') prop = 'styleFloat';
	
	      var current = node.currentStyle[prop] || null;
	
	      if (current == null && style && style[prop]) current = style[prop];
	
	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;
	
	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;
	
	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';
	
	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }
	
	      return current;
	    }
	  };
	};

/***/ },

/***/ 130:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	};

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var canUseDOM = __webpack_require__(32);
	
	var has = Object.prototype.hasOwnProperty,
	    transform = 'transform',
	    transition = {},
	    transitionTiming,
	    transitionDuration,
	    transitionProperty,
	    transitionDelay;
	
	if (canUseDOM) {
	  transition = getTransitionProperties();
	
	  transform = transition.prefix + transform;
	
	  transitionProperty = transition.prefix + 'transition-property';
	  transitionDuration = transition.prefix + 'transition-duration';
	  transitionDelay = transition.prefix + 'transition-delay';
	  transitionTiming = transition.prefix + 'transition-timing-function';
	}
	
	module.exports = {
	  transform: transform,
	  end: transition.end,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};
	
	function getTransitionProperties() {
	  var endEvent,
	      prefix = '',
	      transitions = {
	    O: 'otransitionend',
	    Moz: 'transitionend',
	    Webkit: 'webkitTransitionEnd',
	    ms: 'MSTransitionEnd'
	  };
	
	  var element = document.createElement('div');
	
	  for (var vendor in transitions) if (has.call(transitions, vendor)) {
	    if (element.style[vendor + 'TransitionProperty'] !== undefined) {
	      prefix = '-' + vendor.toLowerCase() + '-';
	      endEvent = transitions[vendor];
	      break;
	    }
	  }
	
	  if (!endEvent && element.style.transitionProperty !== undefined) endEvent = 'transitionend';
	
	  return { end: endEvent, prefix: prefix };
	}

/***/ },

/***/ 132:
/***/ function(module, exports) {

	"use strict";
	
	var rHyphen = /-(.)/g;
	
	module.exports = function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	};

/***/ },

/***/ 133:
/***/ function(module, exports) {

	'use strict';
	
	var rUpper = /([A-Z])/g;
	
	module.exports = function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	};

/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	 */
	
	"use strict";
	
	var hyphenate = __webpack_require__(133);
	var msPattern = /^ms-/;
	
	module.exports = function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, "-ms-");
	};

/***/ },

/***/ 142:
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },

/***/ 143:
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(90),
	    keysIn = __webpack_require__(64);
	
	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	module.exports = baseForIn;


/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(16);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(72),
	    isHostObject = __webpack_require__(93),
	    isObjectLike = __webpack_require__(21);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	}
	
	module.exports = isNative;


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _InputBase2 = __webpack_require__(60);
	
	var _InputBase3 = _interopRequireDefault(_InputBase2);
	
	var _utilsChildrenValueInputValidation = __webpack_require__(68);
	
	var _utilsChildrenValueInputValidation2 = _interopRequireDefault(_utilsChildrenValueInputValidation);
	
	var Static = (function (_InputBase) {
	  _inherits(Static, _InputBase);
	
	  function Static() {
	    _classCallCheck(this, Static);
	
	    _InputBase.apply(this, arguments);
	  }
	
	  Static.prototype.getValue = function getValue() {
	    var _props = this.props;
	    var children = _props.children;
	    var value = _props.value;
	
	    return children ? children : value;
	  };
	
	  Static.prototype.renderInput = function renderInput() {
	    return _react2['default'].createElement(
	      'p',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'form-control-static'), ref: 'input', key: 'input' }),
	      this.getValue()
	    );
	  };
	
	  return Static;
	})(_InputBase3['default']);
	
	Static.propTypes = {
	  value: _utilsChildrenValueInputValidation2['default'],
	  children: _utilsChildrenValueInputValidation2['default']
	};
	
	exports['default'] = Static;
	module.exports = exports['default'];

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hasClass = __webpack_require__(77);
	
	module.exports = function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!hasClass(element)) element.className = element.className + ' ' + className;
	};

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  addClass: __webpack_require__(160),
	  removeClass: __webpack_require__(162),
	  hasClass: __webpack_require__(77)
	};

/***/ },

/***/ 162:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	};

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var contains = __webpack_require__(31),
	    qsa = __webpack_require__(165);
	
	module.exports = function (selector, handler) {
	  return function (e) {
	    var top = e.currentTarget,
	        target = e.target,
	        matches = qsa(top, selector);
	
	    if (matches.some(function (match) {
	      return contains(match, target);
	    })) handler.call(this, e);
	  };
	};

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var on = __webpack_require__(71),
	    off = __webpack_require__(141),
	    filter = __webpack_require__(163);
	
	module.exports = { on: on, off: off, filter: filter };

/***/ },

/***/ 165:
/***/ function(module, exports) {

	'use strict';
	//     Zepto.js
	//     (c) 2010-2015 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.
	var simpleSelectorRE = /^[\w-]*$/,
	    toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
	
	module.exports = function qsa(element, selector) {
	  var maybeID = selector[0] === '#',
	      maybeClass = selector[0] === '.',
	      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
	      isSimple = simpleSelectorRE.test(nameOnly),
	      found;
	
	  if (isSimple) {
	    if (maybeID) {
	      element = element.getElementById ? element : document;
	      return (found = element.getElementById(nameOnly)) ? [found] : [];
	    }
	
	    if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));
	
	    return toArray(element.getElementsByTagName(selector));
	  }
	
	  return toArray(element.querySelectorAll(selector));
	};

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable react/prop-types */
	'use strict';
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var _styleMaps = __webpack_require__(11);
	
	var ModalDialog = _react2['default'].createClass({
	  displayName: 'ModalDialog',
	
	  propTypes: {
	    /**
	     * A css class to apply to the Modal dialog DOM node.
	     */
	    dialogClassName: _react2['default'].PropTypes.string
	  },
	
	  render: function render() {
	    var modalStyle = _extends({
	      display: 'block'
	    }, this.props.style);
	    var prefix = _utilsBootstrapUtils2['default'].prefix(this.props);
	    var dialogClasses = _utilsBootstrapUtils2['default'].getClassSet(this.props);
	
	    delete dialogClasses[prefix];
	    dialogClasses[_utilsBootstrapUtils2['default'].prefix(this.props, 'dialog')] = true;
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        title: null,
	        tabIndex: '-1',
	        role: 'dialog',
	        style: modalStyle,
	        className: _classnames2['default'](this.props.className, prefix)
	      }),
	      _react2['default'].createElement(
	        'div',
	        { className: _classnames2['default'](this.props.dialogClassName, dialogClasses) },
	        _react2['default'].createElement(
	          'div',
	          { className: _utilsBootstrapUtils2['default'].prefix(this.props, 'content'), role: 'document' },
	          this.props.children
	        )
	      )
	    );
	  }
	});
	
	exports['default'] = _utilsBootstrapUtils.bsSizes([_styleMaps.Sizes.LARGE, _styleMaps.Sizes.SMALL], _utilsBootstrapUtils.bsClass('modal', ModalDialog));
	module.exports = exports['default'];

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable react/prop-types */
	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _warning = __webpack_require__(24);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _reactPropTypesLibMountable = __webpack_require__(52);
	
	var _reactPropTypesLibMountable2 = _interopRequireDefault(_reactPropTypesLibMountable);
	
	var _reactPropTypesLibElementType = __webpack_require__(83);
	
	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
	
	var _Portal = __webpack_require__(82);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _ModalManager = __webpack_require__(168);
	
	var _ModalManager2 = _interopRequireDefault(_ModalManager);
	
	var _utilsOwnerDocument = __webpack_require__(27);
	
	var _utilsOwnerDocument2 = _interopRequireDefault(_utilsOwnerDocument);
	
	var _utilsAddEventListener = __webpack_require__(81);
	
	var _utilsAddEventListener2 = _interopRequireDefault(_utilsAddEventListener);
	
	var _utilsAddFocusListener = __webpack_require__(169);
	
	var _utilsAddFocusListener2 = _interopRequireDefault(_utilsAddFocusListener);
	
	var _domHelpersUtilInDOM = __webpack_require__(32);
	
	var _domHelpersUtilInDOM2 = _interopRequireDefault(_domHelpersUtilInDOM);
	
	var _domHelpersActiveElement = __webpack_require__(101);
	
	var _domHelpersActiveElement2 = _interopRequireDefault(_domHelpersActiveElement);
	
	var _domHelpersQueryContains = __webpack_require__(31);
	
	var _domHelpersQueryContains2 = _interopRequireDefault(_domHelpersQueryContains);
	
	var _utilsGetContainer = __webpack_require__(51);
	
	var _utilsGetContainer2 = _interopRequireDefault(_utilsGetContainer);
	
	var modalManager = new _ModalManager2['default']();
	
	/**
	 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
	 * The Modal component renders its `children` node in front of a backdrop component.
	 *
	 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
	 *
	 * - Manages dialog stacking when one-at-a-time just isn't enough.
	 * - Creates a backdrop, for disabling interaction below the modal.
	 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
	 * - It disables scrolling of the page content while open.
	 * - Adds the appropriate ARIA roles are automatically.
	 * - Easily pluggable animations via a `<Transition/>` component.
	 *
	 */
	var Modal = _react2['default'].createClass({
	  displayName: 'Modal',
	
	  propTypes: _extends({}, _Portal2['default'].propTypes, {
	
	    /**
	     * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
	     *
	     * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
	     * page content can be placed behind a virtual backdrop as well as a visual one.
	     */
	    container: _react2['default'].PropTypes.oneOfType([_reactPropTypesLibMountable2['default'], _react2['default'].PropTypes.func]),
	
	    /**
	     * A callback fired when the Modal is opening.
	     */
	    onShow: _react2['default'].PropTypes.func,
	
	    /**
	     * A callback fired when either the backdrop is clicked, or the escape key is pressed.
	     */
	    onHide: _react2['default'].PropTypes.func,
	
	    /**
	     * Include a backdrop component.
	     */
	    backdrop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.oneOf(['static'])]),
	
	    /**
	     * A callback fired when the escape key, if specified in `keyboard`, is pressed.
	     */
	    onEscapeKeyUp: _react2['default'].PropTypes.func,
	
	    /**
	     * A callback fired when the backdrop, if specified, is clicked.
	     */
	    onBackdropClick: _react2['default'].PropTypes.func,
	
	    /**
	     * A style object for the backdrop component.
	     */
	    backdropStyle: _react2['default'].PropTypes.object,
	
	    /**
	     * A css class or classes for the backdrop component.
	     */
	    backdropClassName: _react2['default'].PropTypes.string,
	
	    /**
	     * A css class or set of classes applied to the modal container when the modal is open,
	     * and removed when it is closed.
	     */
	    containerClassName: _react2['default'].PropTypes.string,
	
	    /**
	     * Close the modal when escape key is pressed
	     */
	    keyboard: _react2['default'].PropTypes.bool,
	
	    /**
	     * A `<Transition/>` component to use for the dialog and backdrop components.
	     */
	    transition: _reactPropTypesLibElementType2['default'],
	
	    /**
	     * The `timeout` of the dialog transition if specified. This number is used to ensure that transition callbacks are always
	     * fired, even if browser transition events are canceled.
	     *
	     * See the Transition `timeout` prop for more infomation.
	     */
	    dialogTransitionTimeout: _react2['default'].PropTypes.number,
	
	    /**
	     * The `timeout` of the backdrop transition if specified. This number is used to ensure that transition callbacks are always
	     * fired, even if browser transition events are canceled.
	     *
	     * See the Transition `timeout` prop for more infomation.
	     */
	    backdropTransitionTimeout: _react2['default'].PropTypes.number,
	
	    /**
	     * When `true` The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes.
	     * Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen readers.
	     */
	    autoFocus: _react2['default'].PropTypes.bool,
	
	    /**
	     * When `true` The modal will prevent focus from leaving the Modal while open.
	     * Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen readers.
	     */
	    enforceFocus: _react2['default'].PropTypes.bool
	
	  }),
	
	  getDefaultProps: function getDefaultProps() {
	    var noop = function noop() {};
	
	    return {
	      show: false,
	      backdrop: true,
	      keyboard: true,
	      autoFocus: true,
	      enforceFocus: true,
	      onHide: noop
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return { exited: !this.props.show };
	  },
	
	  render: function render() {
	    var _this = this;
	
	    var _props = this.props;
	    var children = _props.children;
	    var Transition = _props.transition;
	    var backdrop = _props.backdrop;
	    var dialogTransitionTimeout = _props.dialogTransitionTimeout;
	
	    var props = _objectWithoutProperties(_props, ['children', 'transition', 'backdrop', 'dialogTransitionTimeout']);
	
	    var onExit = props.onExit;
	    var onExiting = props.onExiting;
	    var onEnter = props.onEnter;
	    var onEntering = props.onEntering;
	    var onEntered = props.onEntered;
	
	    var show = !!props.show;
	    var dialog = _react2['default'].Children.only(this.props.children);
	
	    var setMountNode = function setMountNode(ref) {
	      return _this.mountNode = !ref || ref.getMountNode();
	    };
	
	    var mountModal = show || Transition && !this.state.exited;
	
	    if (!mountModal) {
	      return null;
	    }
	
	    var _dialog$props = dialog.props;
	    var role = _dialog$props.role;
	    var tabIndex = _dialog$props.tabIndex;
	
	    if (role === undefined || tabIndex === undefined) {
	      dialog = _react.cloneElement(dialog, {
	        role: role === undefined ? 'document' : role,
	        tabIndex: tabIndex == null ? '-1' : tabIndex
	      });
	    }
	
	    if (Transition) {
	      dialog = _react2['default'].createElement(
	        Transition,
	        {
	          transitionAppear: true,
	          unmountOnExit: true,
	          'in': show,
	          timeout: dialogTransitionTimeout,
	          onExit: onExit,
	          onExiting: onExiting,
	          onExited: this.handleHidden,
	          onEnter: onEnter,
	          onEntering: onEntering,
	          onEntered: onEntered
	        },
	        dialog
	      );
	    }
	
	    return _react2['default'].createElement(
	      _Portal2['default'],
	      {
	        ref: setMountNode,
	        container: props.container
	      },
	      _react2['default'].createElement(
	        'div',
	        {
	          ref: 'modal',
	          role: props.role || 'dialog',
	          style: props.style,
	          className: props.className
	        },
	        backdrop && this.renderBackdrop(),
	        dialog
	      )
	    );
	  },
	
	  renderBackdrop: function renderBackdrop() {
	    var _props2 = this.props;
	    var Transition = _props2.transition;
	    var backdropTransitionTimeout = _props2.backdropTransitionTimeout;
	
	    var backdrop = _react2['default'].createElement('div', { ref: 'backdrop',
	      style: this.props.backdropStyle,
	      className: this.props.backdropClassName,
	      onClick: this.handleBackdropClick
	    });
	
	    if (Transition) {
	      backdrop = _react2['default'].createElement(
	        Transition,
	        { transitionAppear: true,
	          'in': this.props.show,
	          timeout: backdropTransitionTimeout
	        },
	        backdrop
	      );
	    }
	
	    return backdrop;
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.show) {
	      this.setState({ exited: false });
	    } else if (!nextProps.transition) {
	      // Otherwise let handleHidden take care of marking exited.
	      this.setState({ exited: true });
	    }
	  },
	
	  componentWillUpdate: function componentWillUpdate(nextProps) {
	    if (nextProps.show) {
	      this.checkForFocus();
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    if (this.props.show) {
	      this.onShow();
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var transition = this.props.transition;
	
	    if (prevProps.show && !this.props.show && !transition) {
	      // Otherwise handleHidden will call this.
	      this.onHide();
	    } else if (!prevProps.show && this.props.show) {
	      this.onShow();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    var _props3 = this.props;
	    var show = _props3.show;
	    var transition = _props3.transition;
	
	    if (show || transition && !this.state.exited) {
	      this.onHide();
	    }
	  },
	
	  onShow: function onShow() {
	    var doc = _utilsOwnerDocument2['default'](this);
	    var container = _utilsGetContainer2['default'](this.props.container, doc.body);
	
	    modalManager.add(this, container, this.props.containerClassName);
	
	    this._onDocumentKeyupListener = _utilsAddEventListener2['default'](doc, 'keyup', this.handleDocumentKeyUp);
	
	    this._onFocusinListener = _utilsAddFocusListener2['default'](this.enforceFocus);
	
	    this.focus();
	  },
	
	  onHide: function onHide() {
	    modalManager.remove(this);
	
	    this._onDocumentKeyupListener.remove();
	
	    this._onFocusinListener.remove();
	
	    this.restoreLastFocus();
	  },
	
	  handleHidden: function handleHidden() {
	    this.setState({ exited: true });
	    this.onHide();
	
	    if (this.props.onExited) {
	      var _props4;
	
	      (_props4 = this.props).onExited.apply(_props4, arguments);
	    }
	  },
	
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget) {
	      return;
	    }
	
	    if (this.props.onBackdropClick) {
	      this.props.onBackdropClick(e);
	    }
	
	    if (this.props.backdrop === true) {
	      this.props.onHide();
	    }
	  },
	
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (this.props.keyboard && e.keyCode === 27 && this.isTopModal()) {
	      if (this.props.onEscapeKeyUp) {
	        this.props.onEscapeKeyUp(e);
	      }
	      this.props.onHide();
	    }
	  },
	
	  checkForFocus: function checkForFocus() {
	    if (_domHelpersUtilInDOM2['default']) {
	      this.lastFocus = _domHelpersActiveElement2['default']();
	    }
	  },
	
	  focus: function focus() {
	    var autoFocus = this.props.autoFocus;
	    var modalContent = this.getDialogElement();
	    var current = _domHelpersActiveElement2['default'](_utilsOwnerDocument2['default'](this));
	    var focusInModal = current && _domHelpersQueryContains2['default'](modalContent, current);
	
	    if (modalContent && autoFocus && !focusInModal) {
	      this.lastFocus = current;
	
	      if (!modalContent.hasAttribute('tabIndex')) {
	        modalContent.setAttribute('tabIndex', -1);
	        _warning2['default'](false, 'The modal content node does not accept focus. ' + 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
	      }
	
	      modalContent.focus();
	    }
	  },
	
	  restoreLastFocus: function restoreLastFocus() {
	    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
	    if (this.lastFocus && this.lastFocus.focus) {
	      this.lastFocus.focus();
	      this.lastFocus = null;
	    }
	  },
	
	  enforceFocus: function enforceFocus() {
	    var enforceFocus = this.props.enforceFocus;
	
	    if (!enforceFocus || !this.isMounted() || !this.isTopModal()) {
	      return;
	    }
	
	    var active = _domHelpersActiveElement2['default'](_utilsOwnerDocument2['default'](this));
	    var modal = this.getDialogElement();
	
	    if (modal && modal !== active && !_domHelpersQueryContains2['default'](modal, active)) {
	      modal.focus();
	    }
	  },
	
	  //instead of a ref, which might conflict with one the parent applied.
	  getDialogElement: function getDialogElement() {
	    var node = this.refs.modal;
	    return node && node.lastChild;
	  },
	
	  isTopModal: function isTopModal() {
	    return modalManager.isTopModal(this);
	  }
	
	});
	
	Modal.manager = modalManager;
	
	exports['default'] = Modal;
	module.exports = exports['default'];

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _domHelpersStyle = __webpack_require__(39);
	
	var _domHelpersStyle2 = _interopRequireDefault(_domHelpersStyle);
	
	var _domHelpersClass = __webpack_require__(161);
	
	var _domHelpersClass2 = _interopRequireDefault(_domHelpersClass);
	
	var _domHelpersUtilScrollbarSize = __webpack_require__(78);
	
	var _domHelpersUtilScrollbarSize2 = _interopRequireDefault(_domHelpersUtilScrollbarSize);
	
	var _utilsIsOverflowing = __webpack_require__(80);
	
	var _utilsIsOverflowing2 = _interopRequireDefault(_utilsIsOverflowing);
	
	var _utilsManageAriaHidden = __webpack_require__(170);
	
	function findIndexOf(arr, cb) {
	  var idx = -1;
	  arr.some(function (d, i) {
	    if (cb(d, i)) {
	      idx = i;
	      return true;
	    }
	  });
	  return idx;
	}
	
	function findContainer(data, modal) {
	  return findIndexOf(data, function (d) {
	    return d.modals.indexOf(modal) !== -1;
	  });
	}
	
	/**
	 * Proper state managment for containers and the modals in those containers.
	 *
	 * @internal Used by the Modal to ensure proper styling of containers.
	 */
	
	var ModalManager = (function () {
	  function ModalManager() {
	    var hideSiblingNodes = arguments[0] === undefined ? true : arguments[0];
	
	    _classCallCheck(this, ModalManager);
	
	    this.hideSiblingNodes = hideSiblingNodes;
	    this.modals = [];
	    this.containers = [];
	    this.data = [];
	  }
	
	  ModalManager.prototype.add = function add(modal, container, className) {
	    var modalIdx = this.modals.indexOf(modal);
	    var containerIdx = this.containers.indexOf(container);
	
	    if (modalIdx !== -1) {
	      return modalIdx;
	    }
	
	    modalIdx = this.modals.length;
	    this.modals.push(modal);
	
	    if (this.hideSiblingNodes) {
	      _utilsManageAriaHidden.hideSiblings(container, modal.mountNode);
	    }
	
	    if (containerIdx !== -1) {
	      this.data[containerIdx].modals.push(modal);
	      return modalIdx;
	    }
	
	    var data = {
	      modals: [modal],
	      //right now only the first modal of a container will have its classes applied
	      classes: className ? className.split(/\s+/) : [],
	      //we are only interested in the actual `style` here becasue we will override it
	      style: {
	        overflow: container.style.overflow,
	        paddingRight: container.style.paddingRight
	      }
	    };
	
	    var style = { overflow: 'hidden' };
	
	    data.overflowing = _utilsIsOverflowing2['default'](container);
	
	    if (data.overflowing) {
	      // use computed style, here to get the real padding
	      // to add our scrollbar width
	      style.paddingRight = parseInt(_domHelpersStyle2['default'](container, 'paddingRight') || 0, 10) + _domHelpersUtilScrollbarSize2['default']() + 'px';
	    }
	
	    _domHelpersStyle2['default'](container, style);
	
	    data.classes.forEach(_domHelpersClass2['default'].addClass.bind(null, container));
	
	    this.containers.push(container);
	    this.data.push(data);
	
	    return modalIdx;
	  };
	
	  ModalManager.prototype.remove = function remove(modal) {
	    var modalIdx = this.modals.indexOf(modal);
	
	    if (modalIdx === -1) {
	      return;
	    }
	
	    var containerIdx = findContainer(this.data, modal);
	    var data = this.data[containerIdx];
	    var container = this.containers[containerIdx];
	
	    data.modals.splice(data.modals.indexOf(modal), 1);
	
	    this.modals.splice(modalIdx, 1);
	
	    //if that was the last modal in a container, clean it up.
	    if (data.modals.length === 0) {
	      Object.keys(data.style).forEach(function (key) {
	        return container.style[key] = data.style[key];
	      });
	
	      data.classes.forEach(_domHelpersClass2['default'].removeClass.bind(null, container));
	
	      if (this.hideSiblingNodes) {
	        _utilsManageAriaHidden.showSiblings(container, modal.mountNode);
	      }
	      this.containers.splice(containerIdx, 1);
	      this.data.splice(containerIdx, 1);
	    } else if (this.hideSiblingNodes) {
	      //otherwise make sure the next top modal is visible to a SR
	      _utilsManageAriaHidden.ariaHidden(false, data.modals[data.modals.length - 1].mountNode);
	    }
	  };
	
	  ModalManager.prototype.isTopModal = function isTopModal(modal) {
	    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
	  };
	
	  return ModalManager;
	})();
	
	exports['default'] = ModalManager;
	module.exports = exports['default'];

/***/ },

/***/ 169:
/***/ function(module, exports) {

	/**
	 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
	 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
	 *
	 * We only allow one Listener at a time to avoid stack overflows
	 */
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = addFocusListener;
	
	function addFocusListener(handler) {
	  var useFocusin = !document.addEventListener;
	  var remove = undefined;
	
	  if (useFocusin) {
	    document.attachEvent('onfocusin', handler);
	    remove = function () {
	      return document.detachEvent('onfocusin', handler);
	    };
	  } else {
	    document.addEventListener('focus', handler, true);
	    remove = function () {
	      return document.removeEventListener('focus', handler, true);
	    };
	  }
	
	  return { remove: remove };
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 170:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.ariaHidden = ariaHidden;
	exports.hideSiblings = hideSiblings;
	exports.showSiblings = showSiblings;
	
	var BLACKLIST = ['template', 'script', 'style'];
	
	var isHidable = function isHidable(_ref) {
	  var nodeType = _ref.nodeType;
	  var tagName = _ref.tagName;
	  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
	};
	
	var siblings = function siblings(container, mount, cb) {
	  mount = [].concat(mount);
	
	  [].forEach.call(container.children, function (node) {
	    if (mount.indexOf(node) === -1 && isHidable(node)) {
	      cb(node);
	    }
	  });
	};
	
	function ariaHidden(show, node) {
	  if (!node) {
	    return;
	  }
	  if (show) {
	    node.setAttribute('aria-hidden', 'true');
	  } else {
	    node.removeAttribute('aria-hidden');
	  }
	}
	
	function hideSiblings(container, mountNode) {
	  siblings(container, mountNode, function (node) {
	    return ariaHidden(true, node);
	  });
	}
	
	function showSiblings(container, mountNode) {
	  siblings(container, mountNode, function (node) {
	    return ariaHidden(false, node);
	  });
	}

/***/ },

/***/ 171:
/***/ function(module, exports) {

	/**
	 * Checks if only one of the listed properties is in use. An error is given
	 * if multiple have a value
	 *
	 * @param props
	 * @param propName
	 * @param componentName
	 * @returns {Error|undefined}
	 */
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createSinglePropFromChecker;
	
	function createSinglePropFromChecker() {
	  for (var _len = arguments.length, arrOfProps = Array(_len), _key = 0; _key < _len; _key++) {
	    arrOfProps[_key] = arguments[_key];
	  }
	
	  function validate(props, propName) {
	    var usedPropCount = arrOfProps.map(function (listedProp) {
	      return props[listedProp];
	    }).reduce(function (acc, curr) {
	      return acc + (curr !== undefined ? 1 : 0);
	    }, 0);
	
	    if (usedPropCount > 1) {
	      var first = arrOfProps[0];
	      var others = arrOfProps.slice(1);
	
	      var message = others.join(', ') + ' and ' + first;
	      return new Error('Invalid prop \'' + propName + '\', only one of the following ' + ('may be provided: ' + message));
	    }
	  }
	  return validate;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var _PaginationButton = __webpack_require__(175);
	
	var _PaginationButton2 = _interopRequireDefault(_PaginationButton);
	
	var _reactPropTypesLibElementType = __webpack_require__(13);
	
	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
	
	var _SafeAnchor = __webpack_require__(25);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var Pagination = _react2['default'].createClass({
	  displayName: 'Pagination',
	
	  propTypes: {
	    activePage: _react2['default'].PropTypes.number,
	    items: _react2['default'].PropTypes.number,
	    maxButtons: _react2['default'].PropTypes.number,
	    /**
	     * When `true`, will display the default node value ('...').
	     * Otherwise, will display provided node (when specified).
	     */
	    ellipsis: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),
	    /**
	     * When `true`, will display the default node value ('&laquo;').
	     * Otherwise, will display provided node (when specified).
	     */
	    first: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),
	    /**
	     * When `true`, will display the default node value ('&raquo;').
	     * Otherwise, will display provided node (when specified).
	     */
	    last: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),
	    /**
	     * When `true`, will display the default node value ('&lsaquo;').
	     * Otherwise, will display provided node (when specified).
	     */
	    prev: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),
	    /**
	     * When `true`, will display the default node value ('&rsaquo;').
	     * Otherwise, will display provided node (when specified).
	     */
	    next: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),
	    onSelect: _react2['default'].PropTypes.func,
	    /**
	     * You can use a custom element for the buttons
	     */
	    buttonComponentClass: _reactPropTypesLibElementType2['default']
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      activePage: 1,
	      items: 1,
	      maxButtons: 0,
	      first: false,
	      last: false,
	      prev: false,
	      next: false,
	      ellipsis: true,
	      buttonComponentClass: _SafeAnchor2['default'],
	      bsClass: 'pagination'
	    };
	  },
	
	  renderPageButtons: function renderPageButtons() {
	    var pageButtons = [];
	    var startPage = undefined,
	        endPage = undefined,
	        hasHiddenPagesAfter = undefined;
	    var _props = this.props;
	    var maxButtons = _props.maxButtons;
	    var activePage = _props.activePage;
	    var items = _props.items;
	    var onSelect = _props.onSelect;
	    var ellipsis = _props.ellipsis;
	    var buttonComponentClass = _props.buttonComponentClass;
	
	    if (maxButtons) {
	      var hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
	      startPage = hiddenPagesBefore > 1 ? hiddenPagesBefore : 1;
	      hasHiddenPagesAfter = startPage + maxButtons <= items;
	
	      if (!hasHiddenPagesAfter) {
	        endPage = items;
	        startPage = items - maxButtons + 1;
	        if (startPage < 1) {
	          startPage = 1;
	        }
	      } else {
	        endPage = startPage + maxButtons - 1;
	      }
	    } else {
	      startPage = 1;
	      endPage = items;
	    }
	
	    for (var pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
	      pageButtons.push(_react2['default'].createElement(
	        _PaginationButton2['default'],
	        {
	          key: pagenumber,
	          eventKey: pagenumber,
	          active: pagenumber === activePage,
	          onSelect: onSelect,
	          buttonComponentClass: buttonComponentClass },
	        pagenumber
	      ));
	    }
	
	    if (maxButtons && hasHiddenPagesAfter && ellipsis) {
	      pageButtons.push(_react2['default'].createElement(
	        _PaginationButton2['default'],
	        {
	          key: 'ellipsis',
	          disabled: true,
	          buttonComponentClass: buttonComponentClass },
	        _react2['default'].createElement(
	          'span',
	          { 'aria-label': 'More' },
	          this.props.ellipsis === true ? '...' : this.props.ellipsis
	        )
	      ));
	    }
	
	    return pageButtons;
	  },
	
	  renderPrev: function renderPrev() {
	    if (!this.props.prev) {
	      return null;
	    }
	
	    return _react2['default'].createElement(
	      _PaginationButton2['default'],
	      {
	        key: 'prev',
	        eventKey: this.props.activePage - 1,
	        disabled: this.props.activePage === 1,
	        onSelect: this.props.onSelect,
	        buttonComponentClass: this.props.buttonComponentClass },
	      _react2['default'].createElement(
	        'span',
	        { 'aria-label': 'Previous' },
	        this.props.prev === true ? '‹' : this.props.prev
	      )
	    );
	  },
	
	  renderNext: function renderNext() {
	    if (!this.props.next) {
	      return null;
	    }
	
	    return _react2['default'].createElement(
	      _PaginationButton2['default'],
	      {
	        key: 'next',
	        eventKey: this.props.activePage + 1,
	        disabled: this.props.activePage >= this.props.items,
	        onSelect: this.props.onSelect,
	        buttonComponentClass: this.props.buttonComponentClass },
	      _react2['default'].createElement(
	        'span',
	        { 'aria-label': 'Next' },
	        this.props.next === true ? '›' : this.props.next
	      )
	    );
	  },
	
	  renderFirst: function renderFirst() {
	    if (!this.props.first) {
	      return null;
	    }
	
	    return _react2['default'].createElement(
	      _PaginationButton2['default'],
	      {
	        key: 'first',
	        eventKey: 1,
	        disabled: this.props.activePage === 1,
	        onSelect: this.props.onSelect,
	        buttonComponentClass: this.props.buttonComponentClass },
	      _react2['default'].createElement(
	        'span',
	        { 'aria-label': 'First' },
	        this.props.first === true ? '«' : this.props.first
	      )
	    );
	  },
	
	  renderLast: function renderLast() {
	    if (!this.props.last) {
	      return null;
	    }
	
	    return _react2['default'].createElement(
	      _PaginationButton2['default'],
	      {
	        key: 'last',
	        eventKey: this.props.items,
	        disabled: this.props.activePage >= this.props.items,
	        onSelect: this.props.onSelect,
	        buttonComponentClass: this.props.buttonComponentClass },
	      _react2['default'].createElement(
	        'span',
	        { 'aria-label': 'Last' },
	        this.props.last === true ? '»' : this.props.last
	      )
	    );
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'ul',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, _utilsBootstrapUtils2['default'].getClassSet(this.props)) }),
	      this.renderFirst(),
	      this.renderPrev(),
	      this.renderPageButtons(),
	      this.renderNext(),
	      this.renderLast()
	    );
	  }
	});
	
	exports['default'] = _utilsBootstrapUtils.bsClass('pagination', Pagination);
	module.exports = exports['default'];

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectWithoutProperties = __webpack_require__(9)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsCreateSelectedEvent = __webpack_require__(177);
	
	var _utilsCreateSelectedEvent2 = _interopRequireDefault(_utilsCreateSelectedEvent);
	
	var _reactPropTypesLibElementType = __webpack_require__(13);
	
	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
	
	var PaginationButton = _react2['default'].createClass({
	  displayName: 'PaginationButton',
	
	  propTypes: {
	    className: _react2['default'].PropTypes.string,
	    eventKey: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
	    onSelect: _react2['default'].PropTypes.func,
	    disabled: _react2['default'].PropTypes.bool,
	    active: _react2['default'].PropTypes.bool,
	    /**
	     * You can use a custom element for this component
	     */
	    buttonComponentClass: _reactPropTypesLibElementType2['default']
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      active: false,
	      disabled: false
	    };
	  },
	
	  handleClick: function handleClick(event) {
	    if (this.props.disabled) {
	      return;
	    }
	
	    if (this.props.onSelect) {
	      var selectedEvent = _utilsCreateSelectedEvent2['default'](this.props.eventKey);
	      this.props.onSelect(event, selectedEvent);
	    }
	  },
	
	  render: function render() {
	    var classes = {
	      active: this.props.active,
	      disabled: this.props.disabled
	    };
	
	    var _props = this.props;
	    var className = _props.className;
	
	    var anchorProps = _objectWithoutProperties(_props, ['className']);
	
	    var ButtonComponentClass = this.props.buttonComponentClass;
	
	    return _react2['default'].createElement(
	      'li',
	      { className: _classnames2['default'](className, classes) },
	      _react2['default'].createElement(ButtonComponentClass, _extends({}, anchorProps, {
	        onClick: this.handleClick }))
	    );
	  }
	});
	
	exports['default'] = PaginationButton;
	module.exports = exports['default'];

/***/ },

/***/ 177:
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = createSelectedEvent;
	
	function createSelectedEvent(eventKey) {
	  var selectionPrevented = false;
	
	  return {
	    eventKey: eventKey,
	
	    preventSelection: function preventSelection() {
	      selectionPrevented = true;
	    },
	
	    isSelectionPrevented: function isSelectionPrevented() {
	      return selectionPrevented;
	    }
	  };
	}
	
	module.exports = exports["default"];

/***/ },

/***/ 179:
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} functions to chain
	 * @returns {function|null}
	 */
	'use strict';
	
	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	
	exports['default'] = createChainedFunction;
	module.exports = exports['default'];

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var babelHelpers = __webpack_require__(36);
	
	exports.__esModule = true;
	exports['default'] = offsetParent;
	
	var _ownerDocument = __webpack_require__(23);
	
	var _ownerDocument2 = babelHelpers.interopRequireDefault(_ownerDocument);
	
	var _style = __webpack_require__(39);
	
	var _style2 = babelHelpers.interopRequireDefault(_style);
	
	function nodeName(node) {
	  return node.nodeName && node.nodeName.toLowerCase();
	}
	
	function offsetParent(node) {
	  var doc = (0, _ownerDocument2['default'])(node),
	      offsetParent = node && node.offsetParent;
	
	  while (offsetParent && nodeName(node) !== 'html' && (0, _style2['default'])(offsetParent, 'position') === 'static') {
	    offsetParent = offsetParent.offsetParent;
	  }
	
	  return offsetParent || doc.documentElement;
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var babelHelpers = __webpack_require__(36);
	
	exports.__esModule = true;
	exports['default'] = position;
	
	var _offset = __webpack_require__(117);
	
	var _offset2 = babelHelpers.interopRequireDefault(_offset);
	
	var _offsetParent = __webpack_require__(180);
	
	var _offsetParent2 = babelHelpers.interopRequireDefault(_offsetParent);
	
	var _scrollTop = __webpack_require__(178);
	
	var _scrollTop2 = babelHelpers.interopRequireDefault(_scrollTop);
	
	var _scrollLeft = __webpack_require__(381);
	
	var _scrollLeft2 = babelHelpers.interopRequireDefault(_scrollLeft);
	
	var _style = __webpack_require__(39);
	
	var _style2 = babelHelpers.interopRequireDefault(_style);
	
	function nodeName(node) {
	  return node.nodeName && node.nodeName.toLowerCase();
	}
	
	function position(node, offsetParent) {
	  var parentOffset = { top: 0, left: 0 },
	      offset;
	
	  // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	  // because it is its only offset parent
	  if ((0, _style2['default'])(node, 'position') === 'fixed') {
	    offset = node.getBoundingClientRect();
	  } else {
	    offsetParent = offsetParent || (0, _offsetParent2['default'])(node);
	    offset = (0, _offset2['default'])(node);
	
	    if (nodeName(offsetParent) !== 'html') parentOffset = (0, _offset2['default'])(offsetParent);
	
	    parentOffset.top += parseInt((0, _style2['default'])(offsetParent, 'borderTopWidth'), 10) - (0, _scrollTop2['default'])(offsetParent) || 0;
	    parentOffset.left += parseInt((0, _style2['default'])(offsetParent, 'borderLeftWidth'), 10) - (0, _scrollLeft2['default'])(offsetParent) || 0;
	  }
	
	  // Subtract parent offsets and node margins
	  return babelHelpers._extends({}, offset, {
	    top: offset.top - parentOffset.top - (parseInt((0, _style2['default'])(node, 'marginTop'), 10) || 0),
	    left: offset.left - parentOffset.left - (parseInt((0, _style2['default'])(node, 'marginLeft'), 10) || 0)
	  });
	}
	
	module.exports = exports['default'];

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Portal = __webpack_require__(82);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _Position = __webpack_require__(183);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	var _RootCloseWrapper = __webpack_require__(122);
	
	var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);
	
	var _reactPropTypesLibElementType = __webpack_require__(83);
	
	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
	
	/**
	 * Built on top of `<Position/>` and `<Portal/>`, the overlay component is great for custom tooltip overlays.
	 */
	
	var Overlay = (function (_React$Component) {
	  function Overlay(props, context) {
	    _classCallCheck(this, Overlay);
	
	    _React$Component.call(this, props, context);
	
	    this.state = { exited: !props.show };
	    this.onHiddenListener = this.handleHidden.bind(this);
	  }
	
	  _inherits(Overlay, _React$Component);
	
	  Overlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.show) {
	      this.setState({ exited: false });
	    } else if (!nextProps.transition) {
	      // Otherwise let handleHidden take care of marking exited.
	      this.setState({ exited: true });
	    }
	  };
	
	  Overlay.prototype.render = function render() {
	    var _props = this.props;
	    var container = _props.container;
	    var containerPadding = _props.containerPadding;
	    var target = _props.target;
	    var placement = _props.placement;
	    var rootClose = _props.rootClose;
	    var children = _props.children;
	    var Transition = _props.transition;
	
	    var props = _objectWithoutProperties(_props, ['container', 'containerPadding', 'target', 'placement', 'rootClose', 'children', 'transition']);
	
	    // Don't un-render the overlay while it's transitioning out.
	    var mountOverlay = props.show || Transition && !this.state.exited;
	    if (!mountOverlay) {
	      // Don't bother showing anything if we don't have to.
	      return null;
	    }
	
	    var child = children;
	
	    // Position is be inner-most because it adds inline styles into the child,
	    // which the other wrappers don't forward correctly.
	    child = _react2['default'].createElement(
	      _Position2['default'],
	      { container: container, containerPadding: containerPadding, target: target, placement: placement },
	      child
	    );
	
	    if (Transition) {
	      var onExit = props.onExit;
	      var onExiting = props.onExiting;
	      var onEnter = props.onEnter;
	      var onEntering = props.onEntering;
	      var onEntered = props.onEntered;
	
	      // This animates the child node by injecting props, so it must precede
	      // anything that adds a wrapping div.
	      child = _react2['default'].createElement(
	        Transition,
	        {
	          'in': props.show,
	          transitionAppear: true,
	          onExit: onExit,
	          onExiting: onExiting,
	          onExited: this.onHiddenListener,
	          onEnter: onEnter,
	          onEntering: onEntering,
	          onEntered: onEntered
	        },
	        child
	      );
	    }
	
	    // This goes after everything else because it adds a wrapping div.
	    if (rootClose) {
	      child = _react2['default'].createElement(
	        _RootCloseWrapper2['default'],
	        { onRootClose: props.onHide },
	        child
	      );
	    }
	
	    return _react2['default'].createElement(
	      _Portal2['default'],
	      { container: container },
	      child
	    );
	  };
	
	  Overlay.prototype.handleHidden = function handleHidden() {
	    this.setState({ exited: true });
	
	    if (this.props.onExited) {
	      var _props2;
	
	      (_props2 = this.props).onExited.apply(_props2, arguments);
	    }
	  };
	
	  return Overlay;
	})(_react2['default'].Component);
	
	Overlay.propTypes = _extends({}, _Portal2['default'].propTypes, _Position2['default'].propTypes, {
	  /**
	   * Set the visibility of the Overlay
	   */
	  show: _react2['default'].PropTypes.bool,
	  /**
	   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
	   */
	  rootClose: _react2['default'].PropTypes.bool,
	  /**
	   * A Callback fired by the Overlay when it wishes to be hidden.
	   */
	  onHide: _react2['default'].PropTypes.func,
	
	  /**
	   * A `<Transition/>` component used to animate the overlay changes visibility.
	   */
	  transition: _reactPropTypesLibElementType2['default'],
	
	  /**
	   * Callback fired before the Overlay transitions in
	   */
	  onEnter: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired as the Overlay begins to transition in
	   */
	  onEntering: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired after the Overlay finishes transitioning in
	   */
	  onEntered: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired right before the Overlay transitions out
	   */
	  onExit: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired as the Overlay begins to transition out
	   */
	  onExiting: _react2['default'].PropTypes.func,
	
	  /**
	   * Callback fired after the Overlay finishes transitioning out
	   */
	  onExited: _react2['default'].PropTypes.func
	});
	
	exports['default'] = Overlay;
	module.exports = exports['default'];

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsOwnerDocument = __webpack_require__(27);
	
	var _utilsOwnerDocument2 = _interopRequireDefault(_utilsOwnerDocument);
	
	var _utilsGetContainer = __webpack_require__(51);
	
	var _utilsGetContainer2 = _interopRequireDefault(_utilsGetContainer);
	
	var _utilsOverlayPositionUtils = __webpack_require__(184);
	
	var _reactPropTypesLibMountable = __webpack_require__(52);
	
	var _reactPropTypesLibMountable2 = _interopRequireDefault(_reactPropTypesLibMountable);
	
	/**
	 * The Position component calulates the corrdinates for its child, to
	 * position it relative to a `target` component or node. Useful for creating callouts and tooltips,
	 * the Position component injects a `style` props with `left` and `top` values for positioning your component.
	 *
	 * It also injects "arrow" `left`, and `top` values for styling callout arrows for giving your components
	 * a sense of directionality.
	 */
	
	var Position = (function (_React$Component) {
	  function Position(props, context) {
	    _classCallCheck(this, Position);
	
	    _React$Component.call(this, props, context);
	
	    this.state = {
	      positionLeft: null,
	      positionTop: null,
	      arrowOffsetLeft: null,
	      arrowOffsetTop: null
	    };
	
	    this._needsFlush = false;
	    this._lastTarget = null;
	  }
	
	  _inherits(Position, _React$Component);
	
	  Position.prototype.componentDidMount = function componentDidMount() {
	    this.updatePosition();
	  };
	
	  Position.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
	    this._needsFlush = true;
	  };
	
	  Position.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this._needsFlush) {
	      this._needsFlush = false;
	      this.updatePosition(prevProps.placement !== this.props.placement);
	    }
	  };
	
	  Position.prototype.componentWillUnmount = function componentWillUnmount() {
	    // Probably not necessary, but just in case holding a reference to the
	    // target causes problems somewhere.
	    this._lastTarget = null;
	  };
	
	  Position.prototype.render = function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;
	
	    var props = _objectWithoutProperties(_props, ['children', 'className']);
	
	    var _state = this.state;
	    var positionLeft = _state.positionLeft;
	    var positionTop = _state.positionTop;
	
	    var arrowPosition = _objectWithoutProperties(_state, ['positionLeft', 'positionTop']);
	
	    var child = _react2['default'].Children.only(children);
	    return _react.cloneElement(child, _extends({}, props, arrowPosition, {
	      //do we need to also forward positionLeft and positionTop if they are set to style?
	      positionLeft: positionLeft,
	      positionTop: positionTop,
	      className: _classnames2['default'](className, child.props.className),
	      style: _extends({}, child.props.style, {
	        left: positionLeft,
	        top: positionTop
	      })
	    }));
	  };
	
	  Position.prototype.getTargetSafe = function getTargetSafe() {
	    if (!this.props.target) {
	      return null;
	    }
	
	    var target = this.props.target(this.props);
	    if (!target) {
	      // This is so we can just use === check below on all falsy targets.
	      return null;
	    }
	
	    return target;
	  };
	
	  Position.prototype.updatePosition = function updatePosition(placementChanged) {
	    var target = this.getTargetSafe();
	
	    if (target === this._lastTarget && !placementChanged) {
	      return;
	    }
	
	    this._lastTarget = target;
	
	    if (!target) {
	      this.setState({
	        positionLeft: null,
	        positionTop: null,
	        arrowOffsetLeft: null,
	        arrowOffsetTop: null
	      });
	
	      return;
	    }
	
	    var overlay = _reactDom2['default'].findDOMNode(this);
	    var container = _utilsGetContainer2['default'](this.props.container, _utilsOwnerDocument2['default'](this).body);
	
	    this.setState(_utilsOverlayPositionUtils.calcOverlayPosition(this.props.placement, overlay, target, container, this.props.containerPadding));
	  };
	
	  return Position;
	})(_react2['default'].Component);
	
	Position.propTypes = {
	  /**
	   * Function mapping props to a DOM node the component is positioned next to
	   */
	  target: _react2['default'].PropTypes.func,
	  /**
	   * "offsetParent" of the component
	   */
	  container: _reactPropTypesLibMountable2['default'],
	  /**
	   * Minimum spacing in pixels between container border and component border
	   */
	  containerPadding: _react2['default'].PropTypes.number,
	  /**
	   * How to position the component relative to the target
	   */
	  placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
	};
	
	Position.displayName = 'Position';
	
	Position.defaultProps = {
	  containerPadding: 0,
	  placement: 'right'
	};
	
	exports['default'] = Position;
	module.exports = exports['default'];

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ownerDocument = __webpack_require__(27);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	var _domHelpersQueryOffset = __webpack_require__(117);
	
	var _domHelpersQueryOffset2 = _interopRequireDefault(_domHelpersQueryOffset);
	
	var _domHelpersQueryPosition = __webpack_require__(181);
	
	var _domHelpersQueryPosition2 = _interopRequireDefault(_domHelpersQueryPosition);
	
	var _domHelpersQueryScrollTop = __webpack_require__(178);
	
	var _domHelpersQueryScrollTop2 = _interopRequireDefault(_domHelpersQueryScrollTop);
	
	var utils = {
	
	  getContainerDimensions: function getContainerDimensions(containerNode) {
	    var width = undefined,
	        height = undefined,
	        scroll = undefined;
	
	    if (containerNode.tagName === 'BODY') {
	      width = window.innerWidth;
	      height = window.innerHeight;
	
	      scroll = _domHelpersQueryScrollTop2['default'](_ownerDocument2['default'](containerNode).documentElement) || _domHelpersQueryScrollTop2['default'](containerNode);
	    } else {
	      var _getOffset = _domHelpersQueryOffset2['default'](containerNode);
	
	      width = _getOffset.width;
	      height = _getOffset.height;
	
	      scroll = _domHelpersQueryScrollTop2['default'](containerNode);
	    }
	
	    return { width: width, height: height, scroll: scroll };
	  },
	
	  getPosition: function getPosition(target, container) {
	    var offset = container.tagName === 'BODY' ? _domHelpersQueryOffset2['default'](target) : _domHelpersQueryPosition2['default'](target, container);
	
	    return offset;
	  },
	
	  calcOverlayPosition: function calcOverlayPosition(placement, overlayNode, target, container, padding) {
	    var childOffset = utils.getPosition(target, container);
	
	    var _getOffset2 = _domHelpersQueryOffset2['default'](overlayNode);
	
	    var overlayHeight = _getOffset2.height;
	    var overlayWidth = _getOffset2.width;
	
	    var positionLeft = undefined,
	        positionTop = undefined,
	        arrowOffsetLeft = undefined,
	        arrowOffsetTop = undefined;
	
	    if (placement === 'left' || placement === 'right') {
	      positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;
	
	      if (placement === 'left') {
	        positionLeft = childOffset.left - overlayWidth;
	      } else {
	        positionLeft = childOffset.left + childOffset.width;
	      }
	
	      var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);
	
	      positionTop += topDelta;
	      arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
	      arrowOffsetLeft = void 0;
	    } else if (placement === 'top' || placement === 'bottom') {
	      positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;
	
	      if (placement === 'top') {
	        positionTop = childOffset.top - overlayHeight;
	      } else {
	        positionTop = childOffset.top + childOffset.height;
	      }
	
	      var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);
	      positionLeft += leftDelta;
	      arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
	      arrowOffsetTop = void 0;
	    } else {
	      throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
	    }
	
	    return { positionLeft: positionLeft, positionTop: positionTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop };
	  }
	};
	
	function getTopDelta(top, overlayHeight, container, padding) {
	  var containerDimensions = utils.getContainerDimensions(container);
	  var containerScroll = containerDimensions.scroll;
	  var containerHeight = containerDimensions.height;
	
	  var topEdgeOffset = top - padding - containerScroll;
	  var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;
	
	  if (topEdgeOffset < 0) {
	    return -topEdgeOffset;
	  } else if (bottomEdgeOffset > containerHeight) {
	    return containerHeight - bottomEdgeOffset;
	  } else {
	    return 0;
	  }
	}
	
	function getLeftDelta(left, overlayWidth, container, padding) {
	  var containerDimensions = utils.getContainerDimensions(container);
	  var containerWidth = containerDimensions.width;
	
	  var leftEdgeOffset = left - padding;
	  var rightEdgeOffset = left + padding + overlayWidth;
	
	  if (leftEdgeOffset < 0) {
	    return -leftEdgeOffset;
	  } else if (rightEdgeOffset > containerWidth) {
	    return containerWidth - rightEdgeOffset;
	  } else {
	    return 0;
	  }
	}
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var _reactPropTypesLibIsRequiredForA11y = __webpack_require__(70);
	
	var _reactPropTypesLibIsRequiredForA11y2 = _interopRequireDefault(_reactPropTypesLibIsRequiredForA11y);
	
	var Popover = _react2['default'].createClass({
	  displayName: 'Popover',
	
	  propTypes: {
	
	    /**
	     * An html id attribute, necessary for accessibility
	     * @type {string}
	     * @required
	     */
	    id: _reactPropTypesLibIsRequiredForA11y2['default'](_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])),
	
	    /**
	     * Sets the direction the Popover is positioned towards.
	     */
	    placement: _react2['default'].PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	
	    /**
	     * The "left" position value for the Popover.
	     */
	    positionLeft: _react2['default'].PropTypes.number,
	    /**
	     * The "top" position value for the Popover.
	     */
	    positionTop: _react2['default'].PropTypes.number,
	    /**
	     * The "left" position value for the Popover arrow.
	     */
	    arrowOffsetLeft: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
	    /**
	     * The "top" position value for the Popover arrow.
	     */
	    arrowOffsetTop: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string]),
	    /**
	     * Title text
	     */
	    title: _react2['default'].PropTypes.node
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'right',
	      bsClass: 'popover'
	    };
	  },
	
	  render: function render() {
	    var _classes;
	
	    var classes = (_classes = {}, _classes[_utilsBootstrapUtils2['default'].prefix(this.props)] = true, _classes[this.props.placement] = true, _classes);
	
	    var style = _extends({
	      'left': this.props.positionLeft,
	      'top': this.props.positionTop,
	      'display': 'block'
	    }, this.props.style);
	
	    // eslint-disable-line react/prop-types
	    var arrowStyle = {
	      'left': this.props.arrowOffsetLeft,
	      'top': this.props.arrowOffsetTop
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({ role: 'tooltip' }, this.props, { className: _classnames2['default'](this.props.className, classes), style: style, title: null }),
	      _react2['default'].createElement('div', { className: 'arrow', style: arrowStyle }),
	      this.props.title ? this.renderTitle() : null,
	      _react2['default'].createElement(
	        'div',
	        { className: _utilsBootstrapUtils2['default'].prefix(this.props, 'content') },
	        this.props.children
	      )
	    );
	  },
	
	  renderTitle: function renderTitle() {
	    return _react2['default'].createElement(
	      'h3',
	      { className: _utilsBootstrapUtils2['default'].prefix(this.props, 'title') },
	      this.props.title
	    );
	  }
	});
	
	exports['default'] = Popover;
	module.exports = exports['default'];
	// we don't want to expose the `style` property

/***/ },

/***/ 434:
/***/ function(module, exports) {

	module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=Array.isArray(n)?n:n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,y,d=t&s.G,h=t&s.P,v=d?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=d?o:o[n]||(o[n]={});d&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],y=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,y),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

/***/ },

/***/ 436:
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var connector = (0, _reactRedux.connect)(function (state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name')
	  };
	});
	
	var MenuHorizontal = (_temp = _class = function (_Components) {
	  _inherits(MenuHorizontal, _Components);
	
	  function MenuHorizontal() {
	    _classCallCheck(this, MenuHorizontal);
	
	    return _possibleConstructorReturn(this, (MenuHorizontal.__proto__ || Object.getPrototypeOf(MenuHorizontal)).apply(this, arguments));
	  }
	
	  _createClass(MenuHorizontal, [{
	    key: 'render',
	    value: function render() {
	      var tenant = this.props.tenant;
	
	      var align = this.props.align || 'left';
	      var items = _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.createElement(
	          'li',
	          null,
	          child
	        );
	      });
	      return _react2.default.createElement(
	        'nav',
	        { className: 'navbar' },
	        _react2.default.createElement(
	          'ul',
	          { className: 'nav navbar-nav' },
	          items
	        )
	      );
	    }
	  }]);
	
	  return MenuHorizontal;
	}(_baseComponent2.default), _class.propTypes = {
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element),
	  align: _react2.default.PropTypes.string
	}, _temp);
	
	
	var _components = {
	  default: connector(MenuHorizontal)
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

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _attrAccept = __webpack_require__(434);
	
	var _attrAccept2 = _interopRequireDefault(_attrAccept);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;
	
	var Dropzone = (function (_React$Component) {
	  _inherits(Dropzone, _React$Component);
	
	  function Dropzone(props, context) {
	    _classCallCheck(this, Dropzone);
	
	    _React$Component.call(this, props, context);
	    this.onClick = this.onClick.bind(this);
	    this.onDragEnter = this.onDragEnter.bind(this);
	    this.onDragLeave = this.onDragLeave.bind(this);
	    this.onDragOver = this.onDragOver.bind(this);
	    this.onDrop = this.onDrop.bind(this);
	
	    this.state = {
	      isDragActive: false
	    };
	  }
	
	  Dropzone.prototype.componentDidMount = function componentDidMount() {
	    this.enterCounter = 0;
	  };
	
	  Dropzone.prototype.onDragEnter = function onDragEnter(e) {
	    e.preventDefault();
	
	    // Count the dropzone and any children that are entered.
	    ++this.enterCounter;
	
	    // This is tricky. During the drag even the dataTransfer.files is null
	    // But Chrome implements some drag store, which is accesible via dataTransfer.items
	    var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];
	
	    // Now we need to convert the DataTransferList to Array
	    var allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));
	
	    this.setState({
	      isDragActive: allFilesAccepted,
	      isDragReject: !allFilesAccepted
	    });
	
	    if (this.props.onDragEnter) {
	      this.props.onDragEnter.call(this, e);
	    }
	  };
	
	  Dropzone.prototype.onDragOver = function onDragOver(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    return false;
	  };
	
	  Dropzone.prototype.onDragLeave = function onDragLeave(e) {
	    e.preventDefault();
	
	    // Only deactivate once the dropzone and all children was left.
	    if (--this.enterCounter > 0) {
	      return;
	    }
	
	    this.setState({
	      isDragActive: false,
	      isDragReject: false
	    });
	
	    if (this.props.onDragLeave) {
	      this.props.onDragLeave.call(this, e);
	    }
	  };
	
	  Dropzone.prototype.onDrop = function onDrop(e) {
	    e.preventDefault();
	
	    // Reset the counter along with the drag on a drop.
	    this.enterCounter = 0;
	
	    this.setState({
	      isDragActive: false,
	      isDragReject: false
	    });
	
	    var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
	    var max = this.props.multiple ? droppedFiles.length : 1;
	    var files = [];
	
	    for (var i = 0; i < max; i++) {
	      var file = droppedFiles[i];
	      // We might want to disable the preview creation to support big files
	      if (!this.props.disablePreview) {
	        file.preview = window.URL.createObjectURL(file);
	      }
	      files.push(file);
	    }
	
	    if (this.props.onDrop) {
	      this.props.onDrop.call(this, files, e);
	    }
	
	    if (this.allFilesAccepted(files)) {
	      if (this.props.onDropAccepted) {
	        this.props.onDropAccepted.call(this, files, e);
	      }
	    } else {
	      if (this.props.onDropRejected) {
	        this.props.onDropRejected.call(this, files, e);
	      }
	    }
	  };
	
	  Dropzone.prototype.onClick = function onClick() {
	    if (!this.props.disableClick) {
	      this.open();
	    }
	  };
	
	  Dropzone.prototype.allFilesAccepted = function allFilesAccepted(files) {
	    var _this = this;
	
	    return files.every(function (file) {
	      return _attrAccept2['default'](file, _this.props.accept);
	    });
	  };
	
	  Dropzone.prototype.open = function open() {
	    this.fileInputEl.value = null;
	    this.fileInputEl.click();
	  };
	
	  Dropzone.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props;
	    var accept = _props.accept;
	    var activeClassName = _props.activeClassName;
	    var inputProps = _props.inputProps;
	    var multiple = _props.multiple;
	    var name = _props.name;
	    var rejectClassName = _props.rejectClassName;
	
	    var rest = _objectWithoutProperties(_props, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName']);
	
	    var activeStyle = // eslint-disable-line prefer-const
	    rest.activeStyle;
	    var className = rest.className;
	    var rejectStyle = rest.rejectStyle;
	    var style = rest.style;
	
	    var props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);
	
	    var _state = this.state;
	    var isDragActive = _state.isDragActive;
	    var isDragReject = _state.isDragReject;
	
	    className = className || '';
	
	    if (isDragActive && activeClassName) {
	      className += ' ' + activeClassName;
	    }
	    if (isDragReject && rejectClassName) {
	      className += ' ' + rejectClassName;
	    }
	
	    if (!className && !style && !activeStyle && !rejectStyle) {
	      style = {
	        width: 200,
	        height: 200,
	        borderWidth: 2,
	        borderColor: '#666',
	        borderStyle: 'dashed',
	        borderRadius: 5
	      };
	      activeStyle = {
	        borderStyle: 'solid',
	        backgroundColor: '#eee'
	      };
	      rejectStyle = {
	        borderStyle: 'solid',
	        backgroundColor: '#ffdddd'
	      };
	    }
	
	    var appliedStyle = undefined;
	    if (activeStyle && isDragActive) {
	      appliedStyle = _extends({}, style, activeStyle);
	    } else if (rejectStyle && isDragReject) {
	      appliedStyle = _extends({}, style, rejectStyle);
	    } else {
	      appliedStyle = _extends({}, style);
	    }
	
	    var inputAttributes = {
	      accept: accept,
	      type: 'file',
	      style: { display: 'none' },
	      multiple: supportMultiple && multiple,
	      ref: function ref(el) {
	        return _this2.fileInputEl = el;
	      },
	      onChange: this.onDrop
	    };
	
	    if (name && name.length) {
	      inputAttributes.name = name;
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({
	        className: className,
	        style: appliedStyle
	      }, props, /* expand user provided props first so event handlers are never overridden */{
	        onClick: this.onClick,
	        onDragEnter: this.onDragEnter,
	        onDragOver: this.onDragOver,
	        onDragLeave: this.onDragLeave,
	        onDrop: this.onDrop
	      }),
	      this.props.children,
	      _react2['default'].createElement('input', _extends({}, inputProps, /* expand user provided inputProps first so inputAttributes override them */inputAttributes))
	    );
	  };
	
	  return Dropzone;
	})(_react2['default'].Component);
	
	Dropzone.defaultProps = {
	  disablePreview: false,
	  disableClick: false,
	  multiple: true
	};
	
	Dropzone.propTypes = {
	  onDrop: _react2['default'].PropTypes.func,
	  onDropAccepted: _react2['default'].PropTypes.func,
	  onDropRejected: _react2['default'].PropTypes.func,
	  onDragEnter: _react2['default'].PropTypes.func,
	  onDragLeave: _react2['default'].PropTypes.func,
	
	  children: _react2['default'].PropTypes.element,
	  style: _react2['default'].PropTypes.object,
	  activeStyle: _react2['default'].PropTypes.object,
	  rejectStyle: _react2['default'].PropTypes.object,
	  className: _react2['default'].PropTypes.string,
	  activeClassName: _react2['default'].PropTypes.string,
	  rejectClassName: _react2['default'].PropTypes.string,
	
	  disablePreview: _react2['default'].PropTypes.bool,
	  disableClick: _react2['default'].PropTypes.bool,
	
	  inputProps: _react2['default'].PropTypes.object,
	  multiple: _react2['default'].PropTypes.bool,
	  accept: _react2['default'].PropTypes.string,
	  name: _react2['default'].PropTypes.string
	};
	
	exports['default'] = Dropzone;
	module.exports = exports['default'];


/***/ },

/***/ 1004:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseResource = exports.SaveItem = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _constants = __webpack_require__(38);
	
	var _flux = __webpack_require__(378);
	
	// MKP-905 - Delete this class in refactor
	
	/**
	 * Dispatch to the reducer the result of the action , show a success notification and assign to the
	 * object to return the new values
	 * @param oAction action returned by the API after update / edit item
	 * @param oToReturn object that contains the dispatcher and the notification
	 * @param oChangedFields object that contains only the new changes
	 * @returns {*} object with the new values
	 * @private
	 */
	var _dispatchResult = function _dispatchResult(oAction, oToReturn, oChangedFields) {
	  oToReturn.props.dispatch(oAction);
	  oToReturn.props.notification.add({
	    message: oToReturn.item_name + ' updated',
	    level: 'success'
	  });
	};
	
	/**
	 * Will set notification prop of the item in order to show in the view the message
	 * @param oToReturn item to set notification error
	 * @private
	 */
	var _dispatchError = function _dispatchError(oToReturn) {
	  oToReturn.props.notification.add({
	    message: 'Error updating ' + oToReturn.item_name.toLowerCase(),
	    level: 'error'
	  });
	};
	
	/*
	 * Save Item (product, etc...) to the DB when is edited.
	 * @param {object} oSaveInfo the object with the information. Must contains keys item, item_name (string), fields, history, props
	 */
	var SaveItem = exports.SaveItem = function SaveItem(oSaveInfo) {
	  if (oSaveInfo) {
	    var _ret = function () {
	      // let lastChange = oSaveInfo.history[oSaveInfo.history.length - 1];
	      console.log(oSaveInfo);
	      // convert to Array the values to save
	      if (!Array.isArray(oSaveInfo.fields)) {
	        oSaveInfo.fields = [oSaveInfo.fields];
	      }
	
	      // get the values to save
	      var obj = oSaveInfo.fields.reduce(function (obj, field) {
	        var value = oSaveInfo.item[field];
	
	        if (field === 'links') {
	          value = value.filter(function (link) {
	            return link.url.length > 0;
	          });
	        }
	
	        /* if ((value !== lastChange[field])) {
	         obj[field] = value;
	         } */
	        obj[field] = value;
	        return obj;
	      }, {});
	
	      return {
	        v: new Promise(function (resolve, reject) {
	          // if there are corners and keywords available, save the object
	          if (Object.keys(obj).length !== 0) {
	            switch (oSaveInfo.item_name) {
	              case 'Bundle':
	                console.log("Entra en case bundle");
	                new _flux.Actions(oSaveInfo.props.tenant).BackOffice.Bundles.Update(oSaveInfo.props.params.id, obj).payload.then(function (action) {
	                  _dispatchResult(action, oSaveInfo);
	                  resolve(_extends({}, oSaveInfo.item, obj));
	                }).catch(function (err) {
	                  _dispatchError(oSaveInfo);
	                  reject(err);
	                });
	                break;
	              default:
	                break;
	            }
	          } else {
	            // we enter here, ie, when we dont have any corner selected. Then there are no keywords listed
	            // because the keywords belong to corners.
	            reject;
	          }
	        })
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	};
	
	var parseResource = exports.parseResource = function parseResource(oFile) {
	  var oParsedFile = {};
	
	  oParsedFile[_constants.MODELS.RESOURCE.NAME] = oFile.originalname;
	  oParsedFile[_constants.MODELS.RESOURCE.NAME_CUSTOM] = oFile.originalname;
	  oParsedFile[_constants.MODELS.RESOURCE.ORIGINAL_NAME] = oFile.originalname;
	  oParsedFile[_constants.MODELS.RESOURCE.TYPE] = oFile.mimetype;
	  oParsedFile[_constants.MODELS.RESOURCE.IS_HIDDEN] = 0;
	  oParsedFile[_constants.MODELS.RESOURCE.CREATION_DATE] = Date.now();
	  oParsedFile[_constants.MODELS.RESOURCE.HOME_ORDER] = null;
	
	  return oParsedFile;
	};

/***/ },

/***/ 1041:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _connect = __webpack_require__(235);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _bluebird = __webpack_require__(416);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _Row = __webpack_require__(35);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(29);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _items = __webpack_require__(1004);
	
	var _constants = __webpack_require__(38);
	
	var _header = __webpack_require__(1069);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _navigation = __webpack_require__(1046);
	
	var _navigation2 = _interopRequireDefault(_navigation);
	
	var _flux = __webpack_require__(378);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EditBundle = function (_Components) {
	  _inherits(EditBundle, _Components);
	
	  function EditBundle(props) {
	    _classCallCheck(this, EditBundle);
	
	    var _this = _possibleConstructorReturn(this, (EditBundle.__proto__ || Object.getPrototypeOf(EditBundle)).call(this, props));
	
	    _this.handleModifiedImage = function (oNewResource, sImage) {
	      var oTmpBundle = _extends({}, _this.state.bundle);
	
	      switch (sImage) {
	        case _constants.ITEM.RESOURCES.LOGO:
	          oTmpBundle.logo_info.url = oNewResource ? oNewResource.url : _constants.ITEM.PLACEHOLDERS.PICTURES.GENERIC.URL;
	          oTmpBundle.logo_info.id = oNewResource ? oNewResource.id : null;
	          oTmpBundle.logo_info.type = oNewResource ? oNewResource.type : null;
	          oTmpBundle.logo_id = oNewResource ? oNewResource.id : null;
	          oTmpBundle.resources.push(oNewResource);
	          // save to DB
	          _this.setState({
	            bundle: oTmpBundle
	          }, function () {
	            setTimeout(_this.save('logo_info'), 150);
	          });
	          break;
	        case _constants.ITEM.RESOURCES.MAIN_PICTURE:
	          break;
	        case _constants.ITEM.RESOURCES.EDITOR_LOGO:
	          break;
	        case _constants.ITEM.RESOURCES.RESOURCE:
	          oTmpBundle.resources.push(oNewResource);
	          _this.setState({ bundle: oTmpBundle });
	          break;
	      }
	    };
	
	    _this.onDeleteResource = function (oResource) {
	      var oBundle = _extends({}, _this.state.bundle);
	      var indexToDelete = -1;
	      var isLogo = false;
	
	      oBundle.state_id = _constants.ITEM.STATE.DRAFT;
	      oBundle.state = _constants.ITEM.STATE.KEY.DRAFT;
	
	      // look for the resource in the state
	      // and remove it. Check also if is set as logo
	      oBundle.resources.forEach(function (r, index) {
	        if (oResource.id === r.id) {
	          indexToDelete = index;
	          isLogo = oResource.id === _this.state.bundle.logo_id;
	        }
	      });
	
	      // check if the resource deleted is also the logo
	      if (isLogo) {
	        oBundle.logo_info.url = _constants.ITEM.PLACEHOLDERS.PICTURES.GENERIC.URL;
	        oBundle.logo_info.id = null;
	        oBundle.logo_info.type = null;
	        oBundle.logo_id = null;
	      }
	
	      // remove from resources and set state
	      oBundle.resources.splice(indexToDelete, 1);
	      _this.setState({ bundle: oBundle });
	
	      // call the action
	      new _flux.Actions(_this.props.tenant).Bundles.DeleteResource({
	        id_item: _this.state.bundle.id,
	        id_resource: oResource.id
	      }).then(function (action) {
	        _this.props.dispatch(action);
	      }).catch(function (err) {
	        console.log('ERROR deleting bundle resource: ', err);
	      });
	    };
	
	    _this.getResources = function () {
	      console.log(_this.state.bundle.resources);
	      if (_this.state.bundle.resources) {
	        return _this.state.bundle.resources.filter(function (oResource) {
	          return oResource.type.startsWith('image') || oResource.type.startsWith('video');
	        });
	      }
	    };
	
	    _this.onAddComponent = function (oComponent) {
	      new _flux.Actions(_this.props.tenant).Bundles.AddComponent({
	        id_item: _this.state.bundle.id,
	        component: oComponent
	      }).then(function (action) {
	        var oBundle = _extends({}, _this.state.bundle);
	
	        oBundle.state_id = _constants.ITEM.STATE.DRAFT;
	        oBundle.state = _constants.ITEM.STATE.KEY.DRAFT;
	        oBundle.components.push(oComponent);
	        _this.setState({ bundle: oBundle });
	        _this.props.dispatch(action);
	      }).catch(function (err) {
	        return console.log('ERROR adding bundle component: ', err);
	      });
	    };
	
	    _this.onDeleteComponent = function (nComponentId, nOrder) {
	      new _flux.Actions(_this.props.tenant).Bundles.DeleteComponent({
	        id_item: _this.state.bundle.id,
	        id_component: nComponentId,
	        show_order: nOrder
	      }).then(function (action) {
	        var oBundle = _extends({}, _this.state.bundle);
	
	        oBundle.state_id = _constants.ITEM.STATE.DRAFT;
	        oBundle.state = _constants.ITEM.STATE.KEY.DRAFT;
	
	        // remove element from components array view in the exact position of show_order field
	        oBundle.components.forEach(function (bc, index) {
	          if (+bc.show_order === nOrder) {
	            oBundle.components.splice(index, 1);
	          }
	        });
	
	        _this.setState({ bundle: oBundle });
	        _this.props.dispatch(action);
	      }).catch(function (err) {
	        console.log('ERROR deleting bundle component: ', err);
	      });
	    };
	
	    _this.onUpload = function (aFiles, sImage) {
	      var oResource = aFiles[0];
	      oResource.show_carousel = false;
	      oResource.carousel_order = null;
	
	      var oResourceData = {
	        id_item: _this.state.bundle.id,
	        sImage: sImage,
	        resource: oResource
	      };
	
	      new _flux.Actions(_this.props.tenant).Bundles.AddResource(_extends({}, oResourceData)).then(function (action) {
	        _this.props.dispatch(action);
	        // update state
	        _this.handleModifiedImage(action.bundle.resource, sImage);
	      }).catch(function (err) {
	        console.log('ERR: ', err);
	      });
	    };
	
	    _this.save = function (field) {
	      return function () {
	        var oSaveInfo = {
	          item: _this.state.bundle,
	          item_name: 'Bundle',
	          fields: field,
	          history: _this.state.history,
	          props: _this.props
	        };
	
	        // Save bundle and set the new state of the bundle
	        (0, _items.SaveItem)(oSaveInfo).then(function (result) {
	          result.state_id = _constants.ITEM.STATE.DRAFT;
	          result.state = _constants.ITEM.STATE.KEY.DRAFT;
	          _this.setState({ bundle: result });
	        }).catch(function (error) {
	          console.log('Save Item error:', error);
	        });
	      };
	    };
	
	    _this.setHeaderInfo = function () {
	      return {
	        changeImage: _this.handleModifiedImage,
	        editor: _this.state.bundle.editor,
	        logoUrl: _this.state.bundle.logoUrl,
	        onUpload: _this.onUpload,
	        resources: _this.getResources,
	        showEditorLink: true,
	        save: _this.save,
	        title: _this.state.bundle.title,
	        update: _this.update
	      };
	    };
	
	    _this.update = function (field) {
	      return function (value) {
	        var oBundle = _extends({}, _this.state.bundle);
	
	        if (field === _constants.ITEM.RESOURCES.LOGO) {
	          oBundle.logo_info.id = value;
	          oBundle.logo_id = value;
	        }
	
	        oBundle[field] = value;
	        _this.setState({
	          bundle: oBundle
	        });
	      };
	    };
	
	    _this.toggleShowInCarousel = function (oResource) {
	      new _flux.Actions(_this.props.tenant).Bundles.ToggleShowResourceCarousel({
	        id_item: _this.state.bundle.id,
	        id_resource: oResource.id,
	        show_carousel: oResource.show_carousel
	      }).then(function (action) {
	        var oTmbBundle = _extends({}, _this.state.bundle);
	
	        oTmbBundle.state_id = _constants.ITEM.STATE.DRAFT;
	        oTmbBundle.state = _constants.ITEM.STATE.KEY.DRAFT;
	        oTmbBundle.resources.forEach(function (oTmpResource) {
	          if (oTmpResource.id === oResource.id) {
	            oTmpResource.show_carousel = oResource.show_carousel;
	          }
	        });
	        _this.setState({ bundle: oTmbBundle });
	        _this.props.dispatch(action);
	      }).catch(function (err) {
	        console.log('ERR: ', err);
	      });
	    };
	
	    console.log("ACA1");
	    console.log(_this.props.currentBundle);
	    _this.state = {
	      bundle: _extends({}, _this.props.currentBundle)
	    };
	    return _this;
	  }
	
	  _createClass(EditBundle, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _bluebird2.default.all(EditBundle.getActions(this.props.tenant, this.props.params).map(this.props.dispatch));
	      console.log("ACA2");
	    }
	
	    /**
	     * Update the state of curren bundle
	     * @param oNewResource
	     * @param sImage
	     */
	
	
	    /**
	     * Call the action to delete a resource from the list of bundles resource.
	     * This is triggered from the modal that shows all the resources uploaded
	     * @param {object} oResource resource information
	     */
	
	
	    /**
	     * Get the list of resources of current bundle
	     * @returns {array} of resources objects with information
	     */
	
	
	    /**
	     * Throw the action when a new component is added to the bundle. Will dispatch an action with the id of the product
	     * and the url logo in order to show it in the bundle components list
	     * @param {object} oComponent contains id, logo, name and show_order fields. For now is a product
	     */
	
	
	    /**
	     * Throw the action to delete a component from the bundle
	     * @param {number} nComponentId the id of the component. For now is a product
	     * @param {number} nOrder order inm which is shown
	     */
	
	
	    /**
	     * Called when a new resource is uploaded
	     * @param {array} The array given by browser when a resource is selected in system window. Usually the uploaded file information is in the position 0
	     * @param {sImage} The target image that will contain the uploaded image. One of ITEMS.RESOURCES (logo, main_picture, editor_logo...)
	     */
	
	
	    /**
	     * MKP-905 Refactor me
	     * Save to DB
	     * @param {string, array} fields
	     */
	
	
	    /**
	     * Se the information to render the header such as function to save, update, upload logo
	     * editor information, name of the bundle, etc...
	     * @returns {object} with all the information needed
	     */
	
	
	    /**
	     * Update the bundle state
	     * @param {string} field name must match with the bundle object field
	     */
	
	
	    /**
	     * Set resource show_carousel field in order to show it or not in the carousel
	     * @param {object} oResource
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _map = [_header2.default, _navigation2.default].map(function (cmpt) {
	        return cmpt.get(_this2.props.tenant);
	      }),
	          _map2 = _slicedToArray(_map, 2),
	          Header = _map2[0],
	          Tabs = _map2[1];
	
	      var children = _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child, {
	          random: Math.random(),
	          bundle: _this2.state.bundle,
	          getResources: _this2.getResources,
	          save: _this2.save,
	          onAddComponent: _this2.onAddComponent,
	          onDeleteComponent: _this2.onDeleteComponent,
	          onDeleteResource: _this2.onDeleteResource,
	          onUpload: _this2.onUpload,
	          update: _this2.update,
	          toggleShowInCarousel: _this2.toggleShowInCarousel
	        });
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'container mp-bundles' },
	        _react2.default.createElement(
	          'article',
	          { itemScope: true, itemType: 'http://schema.org/Product', className: 'mp-product h-product' },
	          _react2.default.createElement(
	            _Row2.default,
	            { className: 'header' },
	            _react2.default.createElement(
	              _Col2.default,
	              { md: 6 },
	              _react2.default.createElement(Header, this.setHeaderInfo())
	            )
	          ),
	          _react2.default.createElement(
	            _Row2.default,
	            { className: 'menu' },
	            _react2.default.createElement(Tabs, { bundle_id: this.state.bundle.id, openContactUsModal: this.openContactModal, forceRender: Math.random() })
	          ),
	          _react2.default.createElement(
	            _Row2.default,
	            { className: 'content' },
	            children
	          ),
	          _react2.default.createElement('div', { style: { clear: 'both' } })
	        )
	      );
	    }
	  }], [{
	    key: 'getActions',
	    value: function getActions(tenant) {
	      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	      var actions = new _flux.Actions(tenant);
	      return [actions.BackOffice.Bundles.fetchAll(), actions.BackOffice.Bundles.fetchOne(params.id)];
	    }
	  }]);
	
	  return EditBundle;
	}(_baseComponent2.default);
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('tenant'),
	    bundles: state.get('v02').get('backOffice').get('bundles').get('all').toJS(),
	    currentBundle: state.get('v02').get('backOffice').get('bundles').get('current').toJS(),
	    notification: state.get('notification')
	  };
	}
	
	var _components = {
	  default: (0, _connect2.default)(stateToProps)(EditBundle)
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

/***/ },

/***/ 1046:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _connect = __webpack_require__(235);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _reactRouter = __webpack_require__(187);
	
	var _horizontalMenuNew = __webpack_require__(436);
	
	var _horizontalMenuNew2 = _interopRequireDefault(_horizontalMenuNew);
	
	var _Row = __webpack_require__(35);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(29);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var navigation = function (_Components) {
	  _inherits(navigation, _Components);
	
	  function navigation() {
	    _classCallCheck(this, navigation);
	
	    return _possibleConstructorReturn(this, (navigation.__proto__ || Object.getPrototypeOf(navigation)).apply(this, arguments));
	  }
	
	  _createClass(navigation, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _map = [_horizontalMenuNew2.default].map(function (cmpt) {
	        return cmpt.get(_this2.props.tenant);
	      }),
	          _map2 = _slicedToArray(_map, 1),
	          MenuHorizontal = _map2[0];
	
	      var links = [{
	        url: 'summary',
	        title: this.format({ id: 'summary_menu' }),
	        className: 'summary'
	      }, {
	        url: 'composition',
	        title: this.format({ id: 'composition' }),
	        className: 'composition'
	      }].map(function (item) {
	        return _react2.default.createElement(
	          _reactRouter.Link,
	          {
	            key: item.url,
	            to: '/admin/bundle/edit/' + _this2.props.bundle_id + '/' + item.url,
	            activeClassName: 'active',
	            className: 'bundle-menu-' + item.className },
	          item.title
	        );
	      });
	
	      return _react2.default.createElement(
	        _Row2.default,
	        null,
	        _react2.default.createElement(
	          _Col2.default,
	          { xs: 12 },
	          _react2.default.createElement(
	            'div',
	            { className: 'page-header' },
	            _react2.default.createElement(
	              MenuHorizontal,
	              null,
	              links
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return navigation;
	}(_baseComponent2.default);
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name')
	  };
	}
	
	var _components = {
	  default: (0, _connect2.default)(stateToProps)(navigation)
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

/***/ },

/***/ 1069:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp2;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _connect = __webpack_require__(235);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _Col = __webpack_require__(29);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Input = __webpack_require__(79);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _reactRouter = __webpack_require__(187);
	
	var _logo = __webpack_require__(1070);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = (_temp2 = _class = function (_Components) {
	  _inherits(Header, _Components);
	
	  function Header() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Header);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.onUpload = function (files, sImage) {
	      _this.props.onUpload(files, sImage);
	      /* .then( (action) => {
	           console.log('HEADER ACTION: ', action)
	           //this.setState({logoUrl: action.item.resource.url})
	         });*/
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var editorLink = this.props.editor && this.props.editor.alias ? '/editor/' + this.props.editor.alias : '#';
	      var editorTitle = this.props.editor && this.props.editor.title;
	
	      var _map = [_logo2.default].map(function (cmpt) {
	        return cmpt.get(_this2.props.tenant);
	      }),
	          _map2 = _slicedToArray(_map, 1),
	          EditableLogo = _map2[0];
	
	      return _react2.default.createElement(
	        'header',
	        null,
	        _react2.default.createElement(EditableLogo, { name: this.props.title,
	          changeImage: this.props.changeImage,
	          onUpload: this.onUpload,
	          resources: this.props.resources,
	          logoUrl: this.props.logoUrl ? this.props.logoUrl : this.props.logoUrl }),
	        _react2.default.createElement(
	          _Col2.default,
	          { md: 8 },
	          _react2.default.createElement(
	            'p',
	            { className: 'brand p-brand h-card' },
	            this.props.showEditorLink ? _react2.default.createElement(
	              _reactRouter.Link,
	              { to: editorLink },
	              editorTitle
	            ) : ''
	          ),
	          _react2.default.createElement(_Input2.default, { type: 'text',
	            value: this.props.title,
	            onChange: function onChange(_ref2) {
	              var target = _ref2.target;
	              _this2.props.update('title')(target.value);
	            },
	            onBlur: this.props.save('title'),
	            style: { marginTop: 5 } })
	        )
	      );
	    }
	  }]);
	
	  return Header;
	}(_baseComponent2.default), _class.propTypes = {
	  changeImage: _react2.default.PropTypes.func.isRequired,
	  editor: _react2.default.PropTypes.object.isRequired,
	  logoUrl: _react2.default.PropTypes.string.isRequired,
	  onUpload: _react2.default.PropTypes.func.isRequired,
	  resources: _react2.default.PropTypes.func.isRequired,
	  save: _react2.default.PropTypes.func.isRequired,
	  showEditorLink: _react2.default.PropTypes.bool.isRequired,
	  title: _react2.default.PropTypes.string.isRequired,
	  update: _react2.default.PropTypes.func.isRequired
	}, _temp2);
	
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name')
	  };
	}
	
	var _components = {
	  'default': (0, _connect2.default)(stateToProps)(Header)
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

/***/ },

/***/ 1070:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class, _class2, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _connect = __webpack_require__(235);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _reactDropzone = __webpack_require__(440);
	
	var _reactDropzone2 = _interopRequireDefault(_reactDropzone);
	
	var _Popover = __webpack_require__(186);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Overlay = __webpack_require__(123);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _Button = __webpack_require__(17);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Col = __webpack_require__(29);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Row = __webpack_require__(35);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _constants = __webpack_require__(38);
	
	var _modalSelectResource = __webpack_require__(1104);
	
	var _modalSelectResource2 = _interopRequireDefault(_modalSelectResource);
	
	var _reactIntl = __webpack_require__(30);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Logo = (_dec = (0, _connect2.default)(function (state) {
	  try {
	    var props = {
	      tenant: state.get('v02').get('common').get('tenant').get('name')
	    };
	    return props;
	  } catch (e) {
	    throw new Error(JSON.stringify({
	      code: 500,
	      message: 'Error parsing store',
	      stack: e.stack
	    }));
	  }
	}), _dec(_class = (_temp = _class2 = function (_Components) {
	  _inherits(Logo, _Components);
	
	  function Logo(props) {
	    _classCallCheck(this, Logo);
	
	    var _this = _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).call(this, props));
	
	    _this.onSelectResource = function (oResource) {
	      _this.props.changeImage(oResource, _constants.ITEM.RESOURCES.LOGO);
	    };
	
	    _this.onUpload = function (files) {
	      _this.props.onUpload(files, _constants.ITEM.RESOURCES.LOGO);
	      _this.togglePopoverButtons();
	    };
	
	    _this.removeLogo = function () {
	      _this.togglePopoverButtons();
	      _this.props.changeImage(null, _constants.ITEM.RESOURCES.LOGO);
	    };
	
	    _this.selectLogoPopover = function () {
	      var formattedMessage = _this.context.intl.formatMessage;
	      return _react2.default.createElement(
	        _Popover2.default,
	        { id: 'popoverUpdateLogo', title: formattedMessage({ id: 'update_logo' }), className: 'popover-change-logo' },
	        _react2.default.createElement(
	          _Row2.default,
	          null,
	          _react2.default.createElement(
	            _Col2.default,
	            { xs: 12, md: 12, lg: 12, sm: 12 },
	            _react2.default.createElement(
	              _Button2.default,
	              { bsStyle: 'info',
	                onClick: _this.toggleModalSelectResource,
	                style: { width: '100%' } },
	              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'select' })
	            )
	          ),
	          _react2.default.createElement(
	            _Col2.default,
	            { xs: 12, md: 12, lg: 12, sm: 12 },
	            _react2.default.createElement(
	              _reactDropzone2.default,
	              { style: { width: 'auto', height: 'auto', border: 'none' },
	                onDrop: _this.onUpload,
	                accept: ['image/png', 'image/jpg', 'image/jpeg'].join(',') },
	              _react2.default.createElement(
	                _Button2.default,
	                { bsStyle: 'success',
	                  style: { width: '100%' },
	                  className: 'edit-logo-other-actions' },
	                _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'upload' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _Col2.default,
	            { xs: 12, md: 12, lg: 12, sm: 12, className: 'edit-logo-other-actions' },
	            _react2.default.createElement(
	              _Button2.default,
	              { bsStyle: 'warning',
	                style: { width: '100%', marginTop: '-1%', display: _this.state.showPopoverButtons && !_this.props.logoUrl.includes('placeholders') ? 'block' : 'none' },
	                onClick: _this.removeLogo },
	              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'withdraw' })
	            )
	          )
	        )
	      );
	    };
	
	    _this.toggleModalSelectResource = function () {
	      _this.setState({ showPopoverButtons: false });
	      _this.setState({ showModalSelectResource: !_this.state.showModalSelectResource });
	    };
	
	    _this.togglePopoverButtons = function () {
	      _this.setState({ showPopoverButtons: !_this.state.showPopoverButtons });
	    };
	
	    _this.state = {
	      showPopoverButtons: false,
	      showModalSelectResource: false
	    };
	    return _this;
	  }
	
	  /*
	  * When a resource in the modal is selected, call to parent function indicating that we are changing logo image
	  * @param {object} oResource has the information of the resource
	  *
	  */
	
	
	  /*
	  * Remove the popover of buttons and call to parent function to display a generic placeholder and save it in th DB and in the state
	  */
	
	
	  /*
	  * Compose the view of the popover shown when the logo image is clicked. Three buttons are shown: Select from existing (will call the ModalSelectResourceCmpt),
	  * upload (will show the client OS window to select a file) and remove the logo shown (will place a generic image)
	  */
	
	
	  /*
	  * Called when we have to show or hide the Modal Select Resource. Always at the beginning set to hide the popover with actions buttons shown when click the logo img
	  */
	
	
	  /*
	  * Show or hide popover with action buttons when the logo img is clicked
	  */
	
	
	  _createClass(Logo, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _map = [_modalSelectResource2.default].map(function (cmpt) {
	        return cmpt.get(_this2.props.tenant);
	      }),
	          _map2 = _slicedToArray(_map, 1),
	          ModalSelectResource = _map2[0];
	
	      return _react2.default.createElement(
	        _Col2.default,
	        { md: 4 },
	        _react2.default.createElement('img', { className: 'photo u-photo item-header-logo',
	          src: this.props.logoUrl,
	          alt: this.props.name,
	          itemProp: 'image',
	          target: 'item_editable_img_logo',
	          onClick: this.togglePopoverButtons }),
	        _react2.default.createElement(
	          _Overlay2.default,
	          { placement: 'bottom',
	            show: this.state.showPopoverButtons,
	            container: this,
	            target: function target() {
	              return _reactDom2.default.findDOMNode(_this2.refs.item_editable_img_logo);
	            } },
	          this.selectLogoPopover()
	        ),
	        _react2.default.createElement(ModalSelectResource, { show: this.state.showModalSelectResource,
	          hide: this.toggleModalSelectResource,
	          onSelect: this.onSelectResource,
	          resources: this.props.resources
	        })
	      );
	    }
	  }]);
	
	  return Logo;
	}(_baseComponent2.default), _class2.contextTypes = {
	  intl: _react2.default.PropTypes.object,
	  router: _react2.default.PropTypes.object.isRequired
	}, _class2.propTypes = {
	  changeImage: _react2.default.PropTypes.func.isRequired,
	  logoUrl: _react2.default.PropTypes.string.isRequired,
	  name: _react2.default.PropTypes.string.isRequired,
	  onUpload: _react2.default.PropTypes.func.isRequired,
	  resources: _react2.default.PropTypes.func.isRequired
	}, _temp)) || _class);
	
	
	var _components = {
	  default: Logo
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

/***/ },

/***/ 1104:
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
	
	var _connect = __webpack_require__(235);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _Button = __webpack_require__(17);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Modal = __webpack_require__(74);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Col = __webpack_require__(29);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Row = __webpack_require__(35);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Pagination = __webpack_require__(173);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	var _Input = __webpack_require__(79);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Glyphicon = __webpack_require__(40);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _reactIntl = __webpack_require__(30);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalSelectResource = (_temp = _class = function (_Components) {
	  _inherits(ModalSelectResource, _Components);
	
	  function ModalSelectResource(props) {
	    _classCallCheck(this, ModalSelectResource);
	
	    var _this = _possibleConstructorReturn(this, (ModalSelectResource.__proto__ || Object.getPrototypeOf(ModalSelectResource)).call(this, props));
	
	    _this.getSearchIcon = function () {
	      return _react2.default.createElement(_Glyphicon2.default, { glyph: 'search' });
	    };
	
	    _this.getResources = function () {
	      var start = (_this.state.page - 1) * _this.state.itemPerPage;
	      var filteredResources = _this.props.resources();
	
	      filteredResources = filteredResources.filter(function (r) {
	        return r.name_custom.indexOf(_this.state.search) !== -1;
	      });
	
	      var resources = filteredResources.slice(start, start + _this.state.itemPerPage).map(function (resource) {
	        // get the resource and inject it in a IMG element
	        var resourceHtml = _react2.default.createElement('img', { src: resource.url, alt: resource.name_custom, className: 'modal-resources-image' });
	
	        // If the resource is not an image, show a generic picture
	        if (resource.type.indexOf('image') === -1) {
	          resourceHtml = _react2.default.createElement(
	            'div',
	            { className: 'modal-resources-no-image' },
	            _react2.default.createElement('img', { src: '/public/images/placeholders/resource.png', alt: resource.name_custom }),
	            _react2.default.createElement(
	              'p',
	              null,
	              resource.name_custom
	            )
	          );
	        }
	
	        // return view with the list of resources
	        return _react2.default.createElement(
	          _Col2.default,
	          {
	            ls: 2, md: 3, sm: 4, xs: 6, key: resource.id, onClick: function onClick() {
	              return _this.props.onSelect(resource);
	            },
	            style: { height: 'auto', cursor: 'pointer', marginTop: 10, marginBottom: 10 } },
	          _react2.default.createElement(
	            'div',
	            { className: 'thumbnail' },
	            _react2.default.createElement(
	              'div',
	              { style: { position: 'relative', width: '100%', paddingBottom: '100%' } },
	              _react2.default.createElement(
	                'div',
	                { className: 'hover-container', style: { position: 'absolute', width: '100%', height: '100%' } },
	                resourceHtml,
	                _react2.default.createElement('div', { className: 'hover-actions', style: { backgroundColor: 'rgba(150,150,150,0.2)' } })
	              )
	            )
	          )
	        );
	      });
	
	      return resources;
	    };
	
	    _this.state = {
	      page: 1,
	      itemPerPage: 12,
	      search: '',
	      show: false
	    };
	    return _this;
	  }
	
	  _createClass(ModalSelectResource, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var filteredResources = this.props.resources().filter(function (resource) {
	        return resource.name_custom.indexOf(_this2.state.search) !== -1;
	      });
	
	      return _react2.default.createElement(
	        _Modal2.default,
	        { show: this.props.show, onHide: this.props.hide, bsSize: 'large', className: 'modal-select-resource' },
	        _react2.default.createElement(
	          _Modal2.default.Header,
	          null,
	          _react2.default.createElement(
	            _Col2.default,
	            { md: 6 },
	            _react2.default.createElement(
	              _Modal2.default.Title,
	              null,
	              'S\xE9lectionner une ressource'
	            )
	          ),
	          _react2.default.createElement(
	            _Col2.default,
	            { md: 4, mdOffset: 2, className: 'search-box' },
	            _react2.default.createElement(_Input2.default, {
	              type: 'text', addonBefore: this.getSearchIcon(),
	              value: this.state.search,
	              onChange: function onChange(evt) {
	                return _this2.setState({ search: evt.target.value, page: 1 });
	              } })
	          )
	        ),
	        _react2.default.createElement(
	          _Modal2.default.Body,
	          null,
	          _react2.default.createElement(
	            _Row2.default,
	            null,
	            this.getResources()
	          )
	        ),
	        _react2.default.createElement(
	          _Modal2.default.Footer,
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_Pagination2.default, {
	              prev: true, next: true, items: Math.ceil(filteredResources.length / this.state.itemPerPage),
	              maxButtons: 3,
	              activePage: this.state.page, style: {},
	              onSelect: function onSelect(evt, selected) {
	                return _this2.setState({ page: selected.eventKey });
	              },
	              style: { display: filteredResources.length > this.state.itemPerPage ? '' : 'none' } }),
	            _react2.default.createElement(
	              _Button2.default,
	              { bsStyle: 'primary', onClick: this.props.hide },
	              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'close' })
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return ModalSelectResource;
	}(_baseComponent2.default), _class.propTypes = {
	  show: _react2.default.PropTypes.bool.isRequired,
	  hide: _react2.default.PropTypes.func.isRequired,
	  onSelect: _react2.default.PropTypes.func.isRequired,
	  resources: _react2.default.PropTypes.func.isRequired
	}, _class.contextTypes = {
	  intl: _react2.default.PropTypes.object
	}, _temp);
	
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name')
	  };
	}
	
	var _components = {
	  default: (0, _connect2.default)(stateToProps)(ModalSelectResource)
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
//# sourceMappingURL=43.bundle.js.map