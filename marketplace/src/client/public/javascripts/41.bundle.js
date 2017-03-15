webpackJsonp([41],{

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

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var IconBase = (function (_React$Component) {
	    _inherits(IconBase, _React$Component);
	
	    function IconBase() {
	        _classCallCheck(this, IconBase);
	
	        _get(Object.getPrototypeOf(IconBase.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(IconBase, [{
	        key: 'render',
	        value: function render() {
	            var styles = {
	                verticalAlign: "middle",
	                display: 'inline-block'
	            };
	            var props = {
	                fill: "currentColor",
	                width: this.props.size,
	                height: this.props.size
	            };
	            return _react2['default'].createElement(
	                'svg',
	                _extends({}, props, this.props, {
	                    preserveAspectRatio: 'xMidYMid meet', fit: true,
	                    style: _extends({}, styles, this.props.style) }),
	                this.props.children
	            );
	        }
	    }]);
	
	    return IconBase;
	})(_react2['default'].Component);
	
	;
	
	IconBase.defaultProps = {
	    size: '1em'
	};
	
	IconBase.propTypes = {
	    size: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
	    style: _react2['default'].PropTypes.object
	};
	
	exports['default'] = IconBase;
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

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(438);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(412)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./index.min.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./index.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 409:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 419:
/***/ function(module, exports) {

	// get successful control from form and assemble into object
	// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2
	
	// types which indicate a submit action and are not successful controls
	// these will be ignored
	var k_r_submitter = /^(?:submit|button|image|reset|file)$/i;
	
	// node names which could be successful controls
	var k_r_success_contrls = /^(?:input|select|textarea|keygen)/i;
	
	// Matches bracket notation.
	var brackets = /(\[[^\[\]]*\])/g;
	
	// serializes form fields
	// @param form MUST be an HTMLForm element
	// @param options is an optional argument to configure the serialization. Default output
	// with no options specified is a url encoded string
	//    - hash: [true | false] Configure the output type. If true, the output will
	//    be a js object.
	//    - serializer: [function] Optional serializer function to override the default one.
	//    The function takes 3 arguments (result, key, value) and should return new result
	//    hash and url encoded str serializers are provided with this module
	//    - disabled: [true | false]. If true serialize disabled fields.
	//    - empty: [true | false]. If true serialize empty fields
	function serialize(form, options) {
	    if (typeof options != 'object') {
	        options = { hash: !!options };
	    }
	    else if (options.hash === undefined) {
	        options.hash = true;
	    }
	
	    var result = (options.hash) ? {} : '';
	    var serializer = options.serializer || ((options.hash) ? hash_serializer : str_serialize);
	
	    var elements = form && form.elements ? form.elements : [];
	
	    //Object store each radio and set if it's empty or not
	    var radio_store = Object.create(null);
	
	    for (var i=0 ; i<elements.length ; ++i) {
	        var element = elements[i];
	
	        // ingore disabled fields
	        if ((!options.disabled && element.disabled) || !element.name) {
	            continue;
	        }
	        // ignore anyhting that is not considered a success field
	        if (!k_r_success_contrls.test(element.nodeName) ||
	            k_r_submitter.test(element.type)) {
	            continue;
	        }
	
	        var key = element.name;
	        var val = element.value;
	
	        // we can't just use element.value for checkboxes cause some browsers lie to us
	        // they say "on" for value when the box isn't checked
	        if ((element.type === 'checkbox' || element.type === 'radio') && !element.checked) {
	            val = undefined;
	        }
	
	        // If we want empty elements
	        if (options.empty) {
	            // for checkbox
	            if (element.type === 'checkbox' && !element.checked) {
	                val = '';
	            }
	
	            // for radio
	            if (element.type === 'radio') {
	                if (!radio_store[element.name] && !element.checked) {
	                    radio_store[element.name] = false;
	                }
	                else if (element.checked) {
	                    radio_store[element.name] = true;
	                }
	            }
	
	            // if options empty is true, continue only if its radio
	            if (!val && element.type == 'radio') {
	                continue;
	            }
	        }
	        else {
	            // value-less fields are ignored unless options.empty is true
	            if (!val) {
	                continue;
	            }
	        }
	
	        // multi select boxes
	        if (element.type === 'select-multiple') {
	            val = [];
	
	            var selectOptions = element.options;
	            var isSelectedOptions = false;
	            for (var j=0 ; j<selectOptions.length ; ++j) {
	                var option = selectOptions[j];
	                var allowedEmpty = options.empty && !option.value;
	                var hasValue = (option.value || allowedEmpty);
	                if (option.selected && hasValue) {
	                    isSelectedOptions = true;
	
	                    // If using a hash serializer be sure to add the
	                    // correct notation for an array in the multi-select
	                    // context. Here the name attribute on the select element
	                    // might be missing the trailing bracket pair. Both names
	                    // "foo" and "foo[]" should be arrays.
	                    if (options.hash && key.slice(key.length - 2) !== '[]') {
	                        result = serializer(result, key + '[]', option.value);
	                    }
	                    else {
	                        result = serializer(result, key, option.value);
	                    }
	                }
	            }
	
	            // Serialize if no selected options and options.empty is true
	            if (!isSelectedOptions && options.empty) {
	                result = serializer(result, key, '');
	            }
	
	            continue;
	        }
	
	        result = serializer(result, key, val);
	    }
	
	    // Check for all empty radio buttons and serialize them with key=""
	    if (options.empty) {
	        for (var key in radio_store) {
	            if (!radio_store[key]) {
	                result = serializer(result, key, '');
	            }
	        }
	    }
	
	    return result;
	}
	
	function parse_keys(string) {
	    var keys = [];
	    var prefix = /^([^\[\]]*)/;
	    var children = new RegExp(brackets);
	    var match = prefix.exec(string);
	
	    if (match[1]) {
	        keys.push(match[1]);
	    }
	
	    while ((match = children.exec(string)) !== null) {
	        keys.push(match[1]);
	    }
	
	    return keys;
	}
	
	function hash_assign(result, keys, value) {
	    if (keys.length === 0) {
	        result = value;
	        return result;
	    }
	
	    var key = keys.shift();
	    var between = key.match(/^\[(.+?)\]$/);
	
	    if (key === '[]') {
	        result = result || [];
	
	        if (Array.isArray(result)) {
	            result.push(hash_assign(null, keys, value));
	        }
	        else {
	            // This might be the result of bad name attributes like "[][foo]",
	            // in this case the original `result` object will already be
	            // assigned to an object literal. Rather than coerce the object to
	            // an array, or cause an exception the attribute "_values" is
	            // assigned as an array.
	            result._values = result._values || [];
	            result._values.push(hash_assign(null, keys, value));
	        }
	
	        return result;
	    }
	
	    // Key is an attribute name and can be assigned directly.
	    if (!between) {
	        result[key] = hash_assign(result[key], keys, value);
	    }
	    else {
	        var string = between[1];
	        // +var converts the variable into a number
	        // better than parseInt because it doesn't truncate away trailing
	        // letters and actually fails if whole thing is not a number
	        var index = +string;
	
	        // If the characters between the brackets is not a number it is an
	        // attribute name and can be assigned directly.
	        if (isNaN(index)) {
	            result = result || {};
	            result[string] = hash_assign(result[string], keys, value);
	        }
	        else {
	            result = result || [];
	            result[index] = hash_assign(result[index], keys, value);
	        }
	    }
	
	    return result;
	}
	
	// Object/hash encoding serializer.
	function hash_serializer(result, key, value) {
	    var matches = key.match(brackets);
	
	    // Has brackets? Use the recursive assignment function to walk the keys,
	    // construct any missing objects in the result tree and make the assignment
	    // at the end of the chain.
	    if (matches) {
	        var keys = parse_keys(key);
	        hash_assign(result, keys, value);
	    }
	    else {
	        // Non bracket notation can make assignments directly.
	        var existing = result[key];
	
	        // If the value has been assigned already (for instance when a radio and
	        // a checkbox have the same name attribute) convert the previous value
	        // into an array before pushing into it.
	        //
	        // NOTE: If this requirement were removed all hash creation and
	        // assignment could go through `hash_assign`.
	        if (existing) {
	            if (!Array.isArray(existing)) {
	                result[key] = [ existing ];
	            }
	
	            result[key].push(value);
	        }
	        else {
	            result[key] = value;
	        }
	    }
	
	    return result;
	}
	
	// urlform encoding serializer
	function str_serialize(result, key, value) {
	    // encode newlines as \r\n cause the html spec says so
	    value = value.replace(/(\r)?\n/g, '\r\n');
	    value = encodeURIComponent(value);
	
	    // spaces should be '+' rather than '%20'.
	    value = value.replace(/%20/g, '+');
	    return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + value;
	}
	
	module.exports = serialize;


/***/ },

/***/ 437:
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
	
	      var items = _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.createElement(
	          'li',
	          null,
	          child
	        );
	      });
	      return _react2.default.createElement(
	        'nav',
	        { className: 'mp-menu' },
	        _react2.default.createElement(
	          'ul',
	          null,
	          items
	        )
	      );
	    }
	  }]);
	
	  return MenuHorizontal;
	}(_baseComponent2.default), _class.propTypes = {
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
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

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(409)();
	// imports
	
	
	// module
	exports.push([module.id, ".react-selectize{color:#000}.react-selectize.control-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;width:300px;}.react-selectize.control-wrapper.disabled{pointer-events:none}.react-selectize.control-wrapper .react-selectize-control{cursor:pointer;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:start;-moz-box-align:start;-o-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;position:relative;padding:2px;}.react-selectize.control-wrapper .react-selectize-control .react-selectize-placeholder{display:block;line-height:30px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap;position:absolute;max-width:calc(100% - 56px)}.react-selectize.control-wrapper .react-selectize-control .react-selectize-selected-values{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;min-height:30px;-webkit-box-flex:1;-moz-box-flex:1;-o-box-flex:1;-ms-box-flex:1;box-flex:1;-webkit-flex-grow:1;flex-grow:1;-webkit-box-lines:multiple;-moz-box-lines:multiple;-o-box-lines:multiple;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.react-selectize.control-wrapper .react-selectize-control .react-selectize-selected-values .resizable-input{background:none;border:none;outline:none;font-size:1em;margin:2px;padding:4px 0;vertical-align:middle;width:0}.react-selectize.control-wrapper .react-selectize-control .react-selectize-selected-values .value-wrapper{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-moz-box-align:center;-o-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.react-selectize.control-wrapper .react-selectize-control .react-selectize-arrow-container,.react-selectize.control-wrapper .react-selectize-control .react-selectize-reset-container{-webkit-box-flex:0;-moz-box-flex:0;-o-box-flex:0;-ms-box-flex:0;box-flex:0;-webkit-flex-grow:0;flex-grow:0;-webkit-flex-shrink:0;flex-shrink:0;cursor:pointer;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-moz-box-align:center;-o-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-moz-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;height:30px}.react-selectize.control-wrapper .react-selectize-control .react-selectize-arrow-container{width:32px}.react-selectize.control-wrapper .react-selectize-control .react-selectize-reset-container{width:16px}.react-selectize.control-wrapper .react-selectize-control .react-selectize-reset-container:hover .react-selectize-reset path{stroke:#c0392b}.react-selectize.control-wrapper .react-selectize-control .react-selectize-arrow path{fill:#999}.react-selectize.control-wrapper .react-selectize-control .react-selectize-reset path{-webkit-transition:stroke 0.5s 0s ease;-moz-transition:stroke 0.5s 0s ease;-o-transition:stroke 0.5s 0s ease;-ms-transition:stroke 0.5s 0s ease;transition:stroke 0.5s 0s ease;stroke:#999;stroke-linecap:square;stroke-linejoin:mitter}.react-selectize.dropdown-menu-wrapper{position:absolute;}.react-selectize.dropdown-menu-wrapper.tethered{min-width:300px}.react-selectize.dropdown-menu-wrapper:not(.tethered){width:100%}.react-selectize.dropdown-menu{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;overflow:auto;position:absolute;max-height:200px;z-index:10;}.react-selectize.dropdown-menu.tethered{min-width:300px}.react-selectize.dropdown-menu:not(.tethered){width:100%}.react-selectize.dropdown-menu .groups.as-columns{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;}.react-selectize.dropdown-menu .groups.as-columns > div{-webkit-box-flex:1;-moz-box-flex:1;-o-box-flex:1;box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.react-selectize.dropdown-menu .option-wrapper{cursor:pointer;outline:none}.multi-select.react-selectize.control-wrapper .simple-value{display:inline-block;margin:2px;vertical-align:middle;}.multi-select.react-selectize.control-wrapper .simple-value span{display:inline-block;padding:2px 5px 4px;vertical-align:center}.simple-select.react-selectize.control-wrapper .simple-value{margin:2px;}.simple-select.react-selectize.control-wrapper .simple-value span{display:inline-block;vertical-align:center}.react-selectize.default{font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.react-selectize.default.control-wrapper .react-selectize-control{background-color:#fff;border:1px solid;border-color:#d9d9d9 #ccc #b3b3b3;-webkit-border-radius:4px;border-radius:4px;font-size:1em;}.react-selectize.default.control-wrapper .react-selectize-control .react-selectize-placeholder{color:#aaa;text-indent:8px}.react-selectize.default.control-wrapper .react-selectize-control .react-selectize-selected-values{padding-left:5px}.react-selectize.default.control-wrapper.open.flipped .react-selectize-control{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-top-right-radius:0}.react-selectize.default.control-wrapper.open:not(.flipped) .react-selectize-control{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.react-selectize.dropdown-menu-wrapper.default{overflow:hidden;}.react-selectize.dropdown-menu-wrapper.default .dropdown-menu.custom-enter-active,.react-selectize.dropdown-menu-wrapper.default .dropdown-menu.custom-leave-active{-webkit-transition:-webkit-transform 0.2s 0s ease;-moz-transition:-moz-transform 0.2s 0s ease;-o-transition:-o-transform 0.2s 0s ease;-ms-transition:-ms-transform 0.2s 0s ease;transition:transform 0.2s 0s ease}.react-selectize.dropdown-menu-wrapper.default .dropdown-menu.flipped.custom-enter{-webkit-transform:translateY(100%);-moz-transform:translateY(100%);-o-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.react-selectize.dropdown-menu-wrapper.default .dropdown-menu.flipped.custom-enter-active{-webkit-transform:translateY(0%);-moz-transform:translateY(0%);-o-transform:translateY(0%);-ms-transform:translateY(0%);transform:translateY(0%)}.react-selectize.dropdown-menu-wrapper.default .dropdown-menu.flipped.custom-leave{-webkit-transform:translateY(0%);-moz-transform:translateY(0%);-o-transform:translateY(0%);-ms-transform:translateY(0%);transform:translateY(0%)}.react-selectize.dropdown-menu-wrapper.default .dropdown-menu.flipped.custom-leave-active{-webkit-transform:translateY(100%);-moz-transform:translateY(100%);-o-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.react-selectize.dropdown-menu-wrapper.default .dropdown-menu:not(.flipped).custom-enter{-webkit-transform:translateY(-100%);-moz-transform:translateY(-100%);-o-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%)}.react-selectize.dropdown-menu-wrapper.default .dropdown-menu:not(.flipped).custom-enter-active{-webkit-transform:translateY(0%);-moz-transform:translateY(0%);-o-transform:translateY(0%);-ms-transform:translateY(0%);transform:translateY(0%)}.react-selectize.dropdown-menu-wrapper.default .dropdown-menu:not(.flipped).custom-leave{-webkit-transform:translateY(0%);-moz-transform:translateY(0%);-o-transform:translateY(0%);-ms-transform:translateY(0%);transform:translateY(0%)}.react-selectize.dropdown-menu-wrapper.default .dropdown-menu:not(.flipped).custom-leave-active{-webkit-transform:translateY(-100%);-moz-transform:translateY(-100%);-o-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%)}.react-selectize.dropdown-menu.default{background:#fff;border:1px solid #ccc;margin-top:-1px;}.react-selectize.dropdown-menu.default.flipped{border-top-left-radius:4px;border-top-right-radius:4px}.react-selectize.dropdown-menu.default:not(.flipped){border-color:#b3b3b3 #ccc #d9d9d9;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.react-selectize.dropdown-menu.default .no-results-found{color:#aaa !important;font-style:oblique;padding:8px 10px}.react-selectize.dropdown-menu.default .simple-group-title{background-color:#fafafa;padding:8px 8px}.react-selectize.dropdown-menu.default .option-wrapper.highlight{background:#f2f9fc;color:#333}.react-selectize.dropdown-menu.default .option-wrapper .simple-option{color:#666;cursor:pointer;padding:8px 10px;}.react-selectize.dropdown-menu.default .option-wrapper .simple-option.not-selectable{background-color:#f8f8f8;color:#999;cursor:default;font-style:oblique;text-shadow:0 1px 0 #fff}.multi-select.react-selectize.default.control-wrapper .simple-value{background:#f2f9fc;border:1px solid #c9e6f2;-webkit-border-radius:2px;border-radius:2px;color:#08c}.simple-select.react-selectize.default.control-wrapper.open .react-selectize-control{background-color:#fff}.simple-select.react-selectize.default.control-wrapper:not(.open) .react-selectize-control{background-color:#f9f9f9;background-image:-webkit-linear-gradient(top, #fefefe, #f2f2f2);background-image:-moz-linear-gradient(top, #fefefe, #f2f2f2);background-image:-o-linear-gradient(top, #fefefe, #f2f2f2);background-image:-ms-linear-gradient(top, #fefefe, #f2f2f2);background-image:linear-gradient(to bottom, #fefefe, #f2f2f2)}.react-selectize.bootstrap3{font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.react-selectize.bootstrap3.control-wrapper.open .react-selectize-control{background-color:#fff;border:1px solid #66afe9;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6)}.react-selectize.bootstrap3.control-wrapper .react-selectize-control{border:1px solid;border-color:#d9d9d9 #ccc #b3b3b3;-webkit-border-radius:4px;border-radius:4px;font-size:1em;}.react-selectize.bootstrap3.control-wrapper .react-selectize-control .react-selectize-placeholder{color:#aaa;text-indent:8px}.react-selectize.bootstrap3.control-wrapper .react-selectize-control .react-selectize-selected-values{padding-left:5px}.react-selectize.bootstrap3.dropdown-menu-wrapper.flipped{margin-bottom:5px}.react-selectize.bootstrap3.dropdown-menu-wrapper:not(.flipped){margin-top:5px}.react-selectize.bootstrap3.dropdown-menu-wrapper .dropdown-menu.custom-enter-active,.react-selectize.bootstrap3.dropdown-menu-wrapper .dropdown-menu.custom-leave-active{-webkit-transition:opacity 0.2s 0s ease;-moz-transition:opacity 0.2s 0s ease;-o-transition:opacity 0.2s 0s ease;-ms-transition:opacity 0.2s 0s ease;transition:opacity 0.2s 0s ease}.react-selectize.bootstrap3.dropdown-menu-wrapper .dropdown-menu.custom-enter{opacity:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0)}.react-selectize.bootstrap3.dropdown-menu-wrapper .dropdown-menu.custom-enter-active{opacity:1;-ms-filter:none;filter:none}.react-selectize.bootstrap3.dropdown-menu-wrapper .dropdown-menu.custom-leave{opacity:1;-ms-filter:none;filter:none}.react-selectize.bootstrap3.dropdown-menu-wrapper .dropdown-menu.custom-leave-active{opacity:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0)}.react-selectize.bootstrap3.dropdown-menu{background:#fff;border:1px solid #ccc;-webkit-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,0.175);box-shadow:0 6px 12px rgba(0,0,0,0.175);}.react-selectize.bootstrap3.dropdown-menu.flipped{margin-bottom:5px}.react-selectize.bootstrap3.dropdown-menu:not(.flipped){margin-top:5px}.react-selectize.bootstrap3.dropdown-menu .no-results-found{color:#aaa !important;font-style:oblique;padding:8px 10px}.react-selectize.bootstrap3.dropdown-menu .groups:not(.as-columns) > div:not(:first-child){border-top:1px solid #e5e5e5;margin:12px 0 0 0}.react-selectize.bootstrap3.dropdown-menu .simple-group-title{background-color:#fff;color:#999;padding:8px 8px;text-shadow:0 1px 0 rgba(0,0,0,0.05)}.react-selectize.bootstrap3.dropdown-menu .option-wrapper.highlight{background:#428bca;}.react-selectize.bootstrap3.dropdown-menu .option-wrapper.highlight .simple-option{color:#fff}.react-selectize.bootstrap3.dropdown-menu .option-wrapper .simple-option{color:#333;cursor:pointer;padding:8px 10px;}.react-selectize.bootstrap3.dropdown-menu .option-wrapper .simple-option.not-selectable{background-color:#f8f8f8;color:#999;cursor:default;font-style:oblique;text-shadow:0 1px 0 #fff}.multi-select.react-selectize.bootstrap3.control-wrapper .simple-value{background:#efefef;-webkit-border-radius:4px;border-radius:4px;color:#333}.react-selectize.material{font-family:Roboto,sans-serif}.react-selectize.material.control-wrapper.open .react-selectize-control:after{-webkit-transform:scaleX(1);-moz-transform:scaleX(1);-o-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1)}.react-selectize.material.control-wrapper .react-selectize-control{border-bottom:1px solid rgba(0,0,0,0.3);}.react-selectize.material.control-wrapper .react-selectize-control:after{background-color:#00bcd4;content:\"\";-webkit-transform:scaleX(0);-moz-transform:scaleX(0);-o-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;-moz-transition:-moz-transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;-o-transition:-o-transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;-ms-transition:-ms-transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;transition:transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;position:absolute;left:0;bottom:-1px;width:100%;height:2px}.react-selectize.material.control-wrapper .react-selectize-control .react-selectize-placeholder{color:rgba(0,0,0,0.3);text-indent:4px}.react-selectize.material.dropdown-menu-wrapper.flipped{margin-bottom:8px;}.react-selectize.material.dropdown-menu-wrapper.flipped .dropdown-menu{-webkit-transform-origin:100% 100%;-moz-transform-origin:100% 100%;-o-transform-origin:100% 100%;-ms-transform-origin:100% 100%;transform-origin:100% 100%}.react-selectize.material.dropdown-menu-wrapper:not(.flipped){margin-top:8px;}.react-selectize.material.dropdown-menu-wrapper:not(.flipped) .dropdown-menu{-webkit-transform-origin:0% 0%;-moz-transform-origin:0% 0%;-o-transform-origin:0% 0%;-ms-transform-origin:0% 0%;transform-origin:0% 0%}.react-selectize.material.dropdown-menu-wrapper .dropdown-menu.custom-enter-active,.react-selectize.material.dropdown-menu-wrapper .dropdown-menu.custom-leave-active{-webkit-transition:-webkit-transform 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;-moz-transition:-moz-transform 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;-o-transition:-o-transform 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;-ms-transition:-ms-transform 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;transition:transform 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms}.react-selectize.material.dropdown-menu-wrapper .dropdown-menu.custom-enter{opacity:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0);-webkit-transform:scale(0,0);-moz-transform:scale(0,0);-o-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0)}.react-selectize.material.dropdown-menu-wrapper .dropdown-menu.custom-enter-active{opacity:1;-ms-filter:none;filter:none;-webkit-transform:scale(1,1);-moz-transform:scale(1,1);-o-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1)}.react-selectize.material.dropdown-menu-wrapper .dropdown-menu.custom-leave{opacity:1;-ms-filter:none;filter:none;-webkit-transform:scale(1,1);-moz-transform:scale(1,1);-o-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1)}.react-selectize.material.dropdown-menu-wrapper .dropdown-menu.custom-leave-active{opacity:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0)}.react-selectize.material.dropdown-menu{background-color:#fff;-webkit-border-radius:2px;border-radius:2px;-webkit-box-shadow:rgba(0,0,0,0.118) 0 1px 6px,rgba(0,0,0,0.118) 0 1px 4px;box-shadow:rgba(0,0,0,0.118) 0 1px 6px,rgba(0,0,0,0.118) 0 1px 4px;max-height:250px;padding:8px 0;}.react-selectize.material.dropdown-menu.flipped{margin-bottom:8px}.react-selectize.material.dropdown-menu:not(.flipped){margin-top:8px}.react-selectize.material.dropdown-menu .no-results-found{font-style:oblique;font-size:16px;height:32px;padding:0 16px;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-moz-box-align:center;-o-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.react-selectize.material.dropdown-menu .groups:not(.as-columns) > div:not(:last-child){border-bottom:1px solid #e5e5e5}.react-selectize.material.dropdown-menu .simple-group-title{color:#8f8f8f;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;-webkit-box-align:center;-moz-box-align:center;-o-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;font-size:14px;height:48px;padding:0 10px}.react-selectize.material.dropdown-menu .option-wrapper.highlight{background-color:rgba(0,0,0,0.098)}.react-selectize.material.dropdown-menu .option-wrapper .simple-option{color:rgba(0,0,0,0.875);cursor:pointer;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-ms-flexbox;display:box;display:flex;-webkit-box-orient:vertical;-moz-box-orient:vertical;-o-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-moz-box-align:start;-o-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-moz-box-pack:center;-o-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;font-size:16px;height:48px;padding:0 16px;}.react-selectize.material.dropdown-menu .option-wrapper .simple-option.not-selectable{background-color:#f8f8f8;color:#999;cursor:default;font-style:oblique;text-shadow:0 1px 0 #fff}.multi-select.react-selectize.material.control-wrapper .simple-value span{padding:0;}.multi-select.react-selectize.material.control-wrapper .simple-value span:after{content:\",\"}.simple-select.react-selectize.material.control-wrapper .simple-value{margin:4px 3px 3px 2px}", ""]);
	
	// exports


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

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _connect = __webpack_require__(235);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _Row = __webpack_require__(35);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(29);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _reactIntl = __webpack_require__(30);
	
	var _modalFilterItems = __webpack_require__(671);
	
	var _modalFilterItems2 = _interopRequireDefault(_modalFilterItems);
	
	var _constants = __webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Item = (_temp = _class = function (_Components) {
	  _inherits(Item, _Components);
	
	  function Item(props) {
	    _classCallCheck(this, Item);
	
	    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));
	
	    _this._setItems = function () {
	      if (_this.props.assignment.items && _this.props.assignment.items.length > 0) {
	        var _ret = function () {
	          var oItem = _this.props.assignment.items[0];
	          var oTmpItem = {};
	          // retrieve information of the sate
	          if (oItem.id_bundle && !oItem.id_product) {
	            // if it is a bundle
	            oTmpItem = _this.props.bundles.find(function (b) {
	              return b.id === parseInt(oItem.id_bundle, 10);
	            });
	            oItem.name = oTmpItem.title;
	            oItem.logo = oTmpItem.logo_info.url;
	            oItem.editor_title = ''; // oTmpItem.editor.title;
	            oItem.description = oTmpItem.description;
	          } else if (oItem.id_product) {
	            // is a product
	            oTmpItem = _this.props.products.find(function (p) {
	              return p.id === parseInt(oItem.id_product, 10);
	            });
	            oItem.name = oTmpItem.name;
	            oItem.logo = oTmpItem.logoUrl;
	            oItem.editor_title = ''; // oTmpItem.editor.title;
	            oItem.description = oTmpItem.description;
	          }
	
	          return {
	            v: _react2.default.createElement(
	              _Row2.default,
	              { className: 'padding-v-cols' },
	              _react2.default.createElement(
	                _Col2.default,
	                { id: 'main-info', xs: 12, sm: 3 },
	                _react2.default.createElement('img', { className: 'logo', src: oItem.logo, alt: oItem.name }),
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  oItem.name,
	                  ' '
	                ),
	                _react2.default.createElement('br', null),
	                _react2.default.createElement(
	                  'span',
	                  { id: 'editor-title' },
	                  oItem.editor_title
	                )
	              ),
	              _react2.default.createElement(_Col2.default, { id: 'description', dangerouslySetInnerHTML: { __html: oItem.description }, xs: 12, sm: 7 }),
	              _react2.default.createElement(
	                _Col2.default,
	                { id: 'change-item', xs: 12, sm: 2 },
	                _react2.default.createElement(
	                  'button',
	                  { className: 'btn btn-edit btn-small', onClick: function onClick() {
	                      return _this.setState({ shoModalFilterItems: true });
	                    } },
	                  _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'change' })
	                )
	              )
	            )
	          };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }
	      return _react2.default.createElement(
	        'button',
	        { className: 'btn btn-add', onClick: function onClick() {
	            return _this.setState({ shoModalFilterItems: true });
	          } },
	        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'select_product_bundle' })
	      );
	    };
	
	    _this.onAddItem = function (oSelectedItem) {
	      _this.props.onAddItem(oSelectedItem);
	      _this.toggleModalFilterItems();
	      switch (oSelectedItem.type) {
	        case _constants.ITEM.TYPES.PRODUCT:
	          _this.setState({ itemType: _constants.ITEM.TYPES.PRODUCT });
	          break;
	        case _constants.ITEM.TYPES.BUNDLE:
	          _this.setState({ itemType: _constants.ITEM.TYPES.BUNDLE });
	          break;
	        default:
	          break;
	      }
	    };
	
	    _this.onDeleteItem = function (nItemId, nKey) {
	      return function (event) {
	        event.preventDefault();
	        _this.setState({ itemType: null });
	        _this.props.onDeleteItem(nItemId, nKey);
	      };
	    };
	
	    _this.toggleModalFilterItems = function () {
	      _this.setState({ shoModalFilterItems: !_this.state.shoModalFilterItems });
	    };
	
	    _this.state = {
	      updateItem: -1,
	      shoModalFilterItems: false,
	      itemType: null
	    };
	    return _this;
	  }
	
	  _createClass(Item, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.assignment.items.length > 0) {
	        var nLastElement = this.props.assignment.items.length;
	        var sIdItemType = this.props.assignment.items[nLastElement - 1].id_item_type;
	        var sItemType = null;
	
	        switch (parseInt(sIdItemType, 10)) {
	          case _constants.ITEM.TYPES_ID.PRODUCT:
	            sItemType = _constants.ITEM.TYPES.PRODUCT;
	            break;
	          case _constants.ITEM.TYPES_ID.BUNDLE:
	            sItemType = _constants.ITEM.TYPES.BUNDLE;
	            break;
	          default:
	            break;
	        }
	        this.setState({ itemType: sItemType });
	      }
	    }
	
	    /**
	     * When a component is selected in the modal, call the prop function in assignment to dispatch the action
	     * @param {object} oSelectedItem contains alias(string), id(number), logo(string), and name or title(string)
	     * @param {object} sItemType product or bundle
	     */
	
	
	    /**
	     * Change the boolean in assignment to show or no the modal to choose a new bundle to add to the assignment
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _map = [_modalFilterItems2.default].map(function (cmpt) {
	        return cmpt.get(_this2.props.tenant);
	      }),
	          _map2 = _slicedToArray(_map, 1),
	          ModalFilterItems = _map2[0];
	
	      var aItems = this._setItems();
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'general_information' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'select-bundle-component' },
	          _react2.default.createElement(
	            'div',
	            { md: 12, id: 'select-bundle-component-add' },
	            aItems
	          ),
	          _react2.default.createElement(ModalFilterItems, { show: this.state.shoModalFilterItems, hide: this.toggleModalFilterItems, onSelect: function onSelect(oItem) {
	              return _this2.onAddItem(oItem);
	            } })
	        )
	      );
	    }
	  }]);
	
	  return Item;
	}(_baseComponent2.default), _class.propTypes = {
	  assignment: _react2.default.PropTypes.object.isRequired,
	  onAddItem: _react2.default.PropTypes.func.isRequired
	}, _temp);
	
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name'),
	    products: state.get('products').toJS(),
	    bundles: state.get('bundles').toJS()
	  };
	}
	
	var _components = { default: (0, _connect2.default)(stateToProps)(Item) };
	
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

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * Created by cjgm on 5/26/16.
	                    */
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _connect = __webpack_require__(235);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _Col = __webpack_require__(29);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _reactIntl = __webpack_require__(30);
	
	var _items = __webpack_require__(662);
	
	var _items2 = _interopRequireDefault(_items);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Summary = (_temp = _class = function (_Components) {
	  _inherits(Summary, _Components);
	
	  function Summary(props) {
	    _classCallCheck(this, Summary);
	
	    var _this = _possibleConstructorReturn(this, (Summary.__proto__ || Object.getPrototypeOf(Summary)).call(this, props));
	
	    _this.onAddItem = function (oNewItem) {
	      console.log('oNewItem', oNewItem);
	      oNewItem.id_assignment = _this.props.assignment.id;
	      _this.props.update('items')(oNewItem);
	    };
	
	    _this.state = {
	      description: _this.props.assignment.description
	    };
	    return _this;
	  }
	
	  _createClass(Summary, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _map = [_items2.default].map(function (cmpt) {
	        return cmpt.get(_this2.props.tenant);
	      }),
	          _map2 = _slicedToArray(_map, 1),
	          Items = _map2[0];
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Col2.default,
	          null,
	          _react2.default.createElement(Items, {
	            assignment: this.props.assignment,
	            onAddItem: this.onAddItem })
	        )
	      );
	    }
	  }]);
	
	  return Summary;
	}(_baseComponent2.default), _class.propTypes = {
	  assignment: _react2.default.PropTypes.object.isRequired,
	  update: _react2.default.PropTypes.func.isRequired
	}, _temp);
	
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name')
	  };
	}
	
	var _components = {
	  default: (0, _connect2.default)(stateToProps)(Summary)
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

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * Created by cjgm on 5/26/16.
	                    */
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _connect = __webpack_require__(235);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _constants = __webpack_require__(38);
	
	var _usersMultiselect = __webpack_require__(669);
	
	var _usersMultiselect2 = _interopRequireDefault(_usersMultiselect);
	
	var _reactIntl = __webpack_require__(30);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	if (process.browser) {
	  __webpack_require__(406);
	}
	
	var SingleUserSelector = (_temp = _class = function (_Components) {
	  _inherits(SingleUserSelector, _Components);
	
	  function SingleUserSelector() {
	    _classCallCheck(this, SingleUserSelector);
	
	    return _possibleConstructorReturn(this, (SingleUserSelector.__proto__ || Object.getPrototypeOf(SingleUserSelector)).apply(this, arguments));
	  }
	
	  _createClass(SingleUserSelector, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _map = [_usersMultiselect2.default].map(function (cmpt) {
	        return cmpt.get(_this2.props.tenant);
	      }),
	          _map2 = _slicedToArray(_map, 1),
	          Users = _map2[0];
	
	      var oSelectProps = {
	        update: this.props.update,
	        user_info: this.props.user_info,
	        user_info_key: this.props.user_info_key,
	        users: this.props.users
	      };
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h3',
	          null,
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_users_assigned' })
	        ),
	        _react2.default.createElement(Users, oSelectProps)
	      );
	    }
	  }]);
	
	  return SingleUserSelector;
	}(_baseComponent2.default), _class.propTypes = {
	  user_info: _react2.default.PropTypes.object,
	  user_info_key: _react2.default.PropTypes.string.isRequired,
	  update: _react2.default.PropTypes.func.isRequired
	}, _temp);
	
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name'),
	    users: state.get('backoffice').get('users').toJS().filter(function (u) {
	      return !(u.deleted_at && u.id_role === _constants.USER.ROLE.CUSTOMER);
	    })
	  };
	}
	
	var _components = {
	  default: (0, _connect2.default)(stateToProps)(SingleUserSelector)
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(194)))

/***/ },

/***/ 669:
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
	
	var _reactSelectize = __webpack_require__(236);
	
	var _reactIntl = __webpack_require__(30);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Users = (_temp = _class = function (_Components) {
	  _inherits(Users, _Components);
	
	  function Users() {
	    _classCallCheck(this, Users);
	
	    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
	  }
	
	  _createClass(Users, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var format = this.context.intl.formatMessage;
	
	      return _react2.default.createElement(_reactSelectize.SimpleSelect, {
	        className: 'corners-multiselect',
	        placeholder: format({ id: 'username' })
	        // defaultValue = { this.props.user_info ? { label: `${this.props.user_info.lastname}, ${this.props.user_info.name} `, value: { name: this.props.user_info.name, lastname: this.props.user_info.lastname } } : { value: format({ id: 'username' }), label: format({ id: 'username' }) }}
	        , options: this.props.users.map(function (u) {
	          return { label: u.lastname + ', ' + u.name, value: { name: u.name, lastname: u.lastname, email: u.email, id: u.id } };
	        }),
	        values: this.props.users ? this.props.users.map(function (u) {
	          return { label: u.lastname + ', ' + u.name + ' ', value: { name: u.name, lastname: u.lastname, email: u.email, id: u.id } };
	        }) : [],
	        onValueChange: function onValueChange(user) {
	          user ? _this2.props.update(_this2.props.user_info_key)(user.value) : _this2.props.update(_this2.props.user_info_key)(null);
	        },
	        renderValue: function renderValue(itemToRender) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'react-selectize-placeholder' },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'username' })
	          );
	        },
	        renderResetButton: function renderResetButton() {
	          return _react2.default.createElement('div', null);
	        },
	        'transition-enter': true,
	        theme: 'material'
	      });
	    }
	  }]);
	
	  return Users;
	}(_baseComponent2.default), _class.contextTypes = {
	  intl: _react2.default.PropTypes.object
	}, _class.propTypes = {
	  user_info: _react2.default.PropTypes.object,
	  user_info_key: _react2.default.PropTypes.string.isRequired,
	  update: _react2.default.PropTypes.func.isRequired,
	  users: _react2.default.PropTypes.array.isRequired
	}, _temp);
	
	
	var _components = { default: Users };
	
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

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * Created by cjgm on 6/2/16.
	                    */
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _connect = __webpack_require__(235);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _Modal = __webpack_require__(74);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Col = __webpack_require__(29);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Row = __webpack_require__(35);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Button = __webpack_require__(17);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _reactIntl = __webpack_require__(30);
	
	var _constants = __webpack_require__(38);
	
	var _horizontalMenu = __webpack_require__(437);
	
	var _horizontalMenu2 = _interopRequireDefault(_horizontalMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalFilterItems = (_temp = _class = function (_Components) {
	  _inherits(ModalFilterItems, _Components);
	
	  function ModalFilterItems(props) {
	    _classCallCheck(this, ModalFilterItems);
	
	    // by default will show products
	    var _this = _possibleConstructorReturn(this, (ModalFilterItems.__proto__ || Object.getPrototypeOf(ModalFilterItems)).call(this, props));
	
	    _this.resetStateItems = function () {
	      _this.setState({
	        items: {
	          products: _this.props.products,
	          bundles: _this.props.bundles
	        }
	      });
	    };
	
	    _this.onSelect = function (oItem) {
	      var oItemData = {
	        id_assignment_option_form: oItem.id_assignment_option_form || null,
	        id_item: oItem.id,
	        // logo: oItem.logoUrl || oItem.logo_info.url,
	        // name: oItem.title || oItem.name,
	        type: _this.state.itemsToFilter
	      };
	      switch (_this.state.itemsToFilter) {
	        case _constants.ITEM.TYPES.PRODUCT:
	          oItemData.id_product = oItem.id;
	          break;
	        case _constants.ITEM.TYPES.BUNDLE:
	          oItemData.id_bundle = oItem.id;
	          break;
	        default:
	          break;
	      }
	      _this.props.onSelect(oItemData);
	    };
	
	    _this._filter = function (oFilter) {
	      switch (_this.state.itemsToFilter) {
	        case _constants.ITEM.TYPES.PRODUCT:
	          _this.setState({
	            items: {
	              products: _this.props.products,
	              bundles: _this.props.bundles
	            }
	          });
	          break;
	        case _constants.ITEM.TYPES.BUNDLE:
	          _this.setState({
	            items: {
	              products: _this.props.products,
	              // bundles: this.props.bundles.filter(filterBundlesAlgorithmFactory(oFilter)),
	              bundles: _this.props.bundles
	            }
	          });
	          break;
	        default:
	          break;
	      }
	    };
	
	    _this._setComponents = function () {
	      switch (_this.state.itemsToFilter) {
	        case _constants.ITEM.TYPES.PRODUCT:
	        // return [FilterProductsCmpt, ProductsCmpt].map(cmpt => cmpt.get(this.props.tenant));
	        case _constants.ITEM.TYPES.BUNDLE:
	        // return [FilterBundlesCmpt, BundlesCmpt].map(cmpt => cmpt.get(this.props.tenant));
	        default:
	          break;
	      }
	    };
	
	    _this._setTabs = function () {
	      var formattedMessage = _this.context.intl.formatMessage;
	      return [{
	        title: formattedMessage({ id: 'products' }),
	        onClick: function onClick() {
	          _this.setState({ itemsToFilter: _constants.ITEM.TYPES.PRODUCT, modalTitle: formattedMessage({ id: 'select_product_to_add' }) });
	          _this.resetStateItems();
	        },
	        active: _constants.ITEM.TYPES.PRODUCT
	      }, {
	        title: formattedMessage({ id: 'bundles' }),
	        onClick: function onClick() {
	          _this.setState({ itemsToFilter: _constants.ITEM.TYPES.BUNDLE, modalTitle: formattedMessage({ id: 'select_bundle_to_add' }) });
	          _this.resetStateItems();
	        },
	        active: _constants.ITEM.TYPES.BUNDLE
	      }].map(function (item) {
	        return _react2.default.createElement(
	          'span',
	          {
	            key: item.title,
	            className: item.active === _this.state.itemsToFilter ? 'active' : '',
	            onClick: item.onClick
	          },
	          item.title
	        );
	      });
	    };
	
	    _this.state = {
	      itemsToFilter: _constants.ITEM.TYPES.PRODUCT,
	      modalTitle: '',
	      items: {
	        products: props.products,
	        bundles: props.bundles
	      }
	    };
	    return _this;
	  }
	
	  _createClass(ModalFilterItems, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({ modalTitle: this.context.intl.formatMessage({ id: 'select_product_to_add' }) });
	    }
	
	    /**
	     * When selected item from modal, send item (bundle or product) to save it.
	     * We will parse the information, and will send the type of item (bundle or product)
	     * @param {object} oItem object with the item information.
	    */
	
	
	    /**
	     * Set the filter and list component depending on which type of item will be filtered: product or bundle
	     * @returns {Array} with the Filter and Products or Bundles component
	     * @private
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _setComponents = this._setComponents(),
	          _setComponents2 = _slicedToArray(_setComponents, 2),
	          Filter = _setComponents2[0],
	          Items = _setComponents2[1];
	
	      var _map = [_horizontalMenu2.default].map(function (cmpt) {
	        return cmpt.get(_this2.props.tenant);
	      }),
	          _map2 = _slicedToArray(_map, 1),
	          MenuHorizontal = _map2[0];
	
	      var menuTabs = this._setTabs();
	      return _react2.default.createElement(
	        _Modal2.default,
	        {
	          show: this.props.show,
	          onHide: this.props.hide,
	          bsSize: 'large',
	          className: 'modal-select-resource',
	          id: 'modal-select-bundle'
	        },
	        _react2.default.createElement(
	          _Modal2.default.Header,
	          null,
	          _react2.default.createElement(
	            _Col2.default,
	            { md: 12 },
	            _react2.default.createElement(
	              _Modal2.default.Title,
	              null,
	              this.state.modalTitle
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Modal2.default.Body,
	          { style: { paddingRight: '120px', paddingBottom: '40px' } },
	          _react2.default.createElement(
	            _Row2.default,
	            { className: 'modal-tabs' },
	            _react2.default.createElement(
	              MenuHorizontal,
	              null,
	              menuTabs
	            )
	          ),
	          _react2.default.createElement(
	            _Row2.default,
	            { style: { marginTop: '5%', marginLeft: '6%' } },
	            _react2.default.createElement(Filter, {
	              keywords: this.props.keywords,
	              showFilters: true,
	              hasCornerFilter: true,
	              onFilter: this._filter
	            }),
	            _react2.default.createElement(Items, _extends({}, this.state.items, { onSelect: this.onSelect }))
	          )
	        ),
	        _react2.default.createElement(
	          _Modal2.default.Footer,
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
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
	
	  return ModalFilterItems;
	}(_baseComponent2.default), _class.contextTypes = { intl: _react2.default.PropTypes.object }, _class.propTypes = {
	  hide: _react2.default.PropTypes.func.isRequired,
	  onSelect: _react2.default.PropTypes.func.isRequired,
	  show: _react2.default.PropTypes.bool.isRequired
	}, _temp);
	
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name'),
	    keywords: state.get('misc').get('keywords').toJS(),
	    bundles: state.get('bundles').toJS().filter(function (oBundle) {
	      return oBundle.state === _constants.ITEM.STATE.KEY.PUBLISHED;
	    }),
	    products: state.get('products').toJS().filter(function (oProduct) {
	      return oProduct.state === _constants.ITEM.STATE.KEY.PUBLISHED;
	    })
	  };
	}
	
	var _components = { default: (0, _connect2.default)(stateToProps)(ModalFilterItems) };
	
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

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var IconBase = __webpack_require__(42);
	
	var FaTimesCircle = (function (_React$Component) {
	    _inherits(FaTimesCircle, _React$Component);
	
	    function FaTimesCircle() {
	        _classCallCheck(this, FaTimesCircle);
	
	        _React$Component.apply(this, arguments);
	    }
	
	    FaTimesCircle.prototype.render = function render() {
	        return React.createElement(
	            IconBase,
	            _extends({ viewBox: '0 0 40 40' }, this.props),
	            React.createElement(
	                'g',
	                null,
	                React.createElement('path', { d: 'm28.504285714285714 25.042857142857144q0-0.5785714285714292-0.4242857142857126-1.0028571428571418l-4.040000000000003-4.040000000000003 4.039999999999999-4.039999999999999q0.4242857142857126-0.4242857142857144 0.4242857142857126-1.0042857142857144 0-0.6042857142857141-0.4242857142857126-1.0285714285714285l-2.0085714285714253-2.007142857142858q-0.4242857142857126-0.4242857142857144-1.0285714285714285-0.4242857142857144-0.5785714285714292 0-1.0028571428571418 0.4242857142857144l-4.040000000000003 4.040000000000001-4.039999999999999-4.040000000000001q-0.4242857142857144-0.4242857142857144-1.0042857142857144-0.4242857142857144-0.6042857142857141 0-1.0285714285714285 0.4242857142857144l-2.0071428571428562 2.008571428571429q-0.4242857142857144 0.4242857142857144-0.4242857142857144 1.0285714285714285 0 0.5785714285714292 0.4242857142857144 1.0028571428571436l4.039999999999999 4.039999999999999-4.039999999999999 4.039999999999999q-0.4242857142857144 0.4242857142857126-0.4242857142857144 1.0042857142857144 0 0.6042857142857159 0.4242857142857144 1.0285714285714285l2.008571428571429 2.008571428571429q0.4242857142857144 0.4242857142857126 1.0285714285714285 0.4242857142857126 0.5785714285714292 0 1.0028571428571436-0.4242857142857126l4.039999999999997-4.041428571428572 4.039999999999999 4.039999999999999q0.4242857142857126 0.4242857142857126 1.0042857142857144 0.4242857142857126 0.6042857142857159 0 1.0285714285714285-0.4242857142857126l2.008571428571429-2.008571428571429q0.4242857142857126-0.4242857142857126 0.4242857142857126-1.0285714285714285z m8.638571428571431-5.0428571428571445q0 4.665714285714287-2.299999999999997 8.604285714285716t-6.237142857142857 6.238571428571426-8.605714285714292 2.3000000000000043-8.6-2.3000000000000043-6.242857142857143-6.238571428571426-2.295714285714286-8.604285714285716 2.3000000000000003-8.604285714285714 6.234285714285714-6.238571428571428 8.604285714285714-2.3000000000000003 8.605714285714285 2.3000000000000003 6.238571428571426 6.238571428571428 2.298571428571435 8.604285714285714z' })
	            )
	        );
	    };
	
	    return FaTimesCircle;
	})(React.Component);
	
	exports['default'] = FaTimesCircle;
	module.exports = exports['default'];

/***/ },

/***/ 1030:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp, _initialiseProps;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _connect = __webpack_require__(235);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _bluebird = __webpack_require__(416);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _actions = __webpack_require__(41);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _Row = __webpack_require__(35);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(29);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Button = __webpack_require__(17);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _reactRouter = __webpack_require__(187);
	
	var _singleUserSelector = __webpack_require__(668);
	
	var _singleUserSelector2 = _interopRequireDefault(_singleUserSelector);
	
	var _summary = __webpack_require__(663);
	
	var _summary2 = _interopRequireDefault(_summary);
	
	var _reactIntl = __webpack_require__(30);
	
	var _constants = __webpack_require__(38);
	
	var _timesCircle = __webpack_require__(743);
	
	var _timesCircle2 = _interopRequireDefault(_timesCircle);
	
	var _Modal = __webpack_require__(74);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _getForm = __webpack_require__(561);
	
	var _getForm2 = _interopRequireDefault(_getForm);
	
	var _formSerialize = __webpack_require__(419);
	
	var _formSerialize2 = _interopRequireDefault(_formSerialize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Assignment = (_temp = _class = function (_Component) {
	  _inherits(Assignment, _Component);
	
	  function Assignment(props) {
	    _classCallCheck(this, Assignment);
	
	    var _this = _possibleConstructorReturn(this, (Assignment.__proto__ || Object.getPrototypeOf(Assignment)).call(this, props));
	
	    _initialiseProps.call(_this);
	
	    var oAssignment = {
	      description: '',
	      id_assigned_by: null,
	      id_state: _constants.ITEM.STATE.DRAFT
	    };
	    var isEdited = !!_this.props.params.id;
	    // check if we are creating or editing an assignment. If in the url we have the id, we are editing it
	    // in this case get the data of the assignment
	    if (_this.props.params.id) {
	      oAssignment = _this.props.assignments.toJS().find(function (a) {
	        return a.id === parseInt(_this.props.params.id, 10);
	      });
	      isEdited = true;
	    } else {
	      oAssignment.items = [];
	    }
	
	    _this.state = {
	      assignment: _extends({}, oAssignment),
	      dataToUpdate: {},
	      isEdited: isEdited,
	      showAssignmentModal: false
	    };
	    return _this;
	  }
	
	  /**
	   * Call action to create new assignment
	   */
	
	
	  /**
	   * Update the assignment. Will send all the object
	   * @private
	   */
	
	
	  /**
	   * Throw the action to delete a component from the assignmtn
	   * @param {number} nItemId the id of the component. For now is a product
	   * @param {number} nAssignment assignment in which is shown
	   */
	
	
	  /**
	   * Se the information to render in the single user selector: function to update
	   * and the information of the user to which this assignment is assigned
	   * @returns {object} with all the information needed
	   */
	
	
	  /**
	   * Update the assignment state
	   * @param {string} field name must match with the assignment object field
	   */
	
	
	  _createClass(Assignment, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _map = [_summary2.default, _singleUserSelector2.default].map(function (cmpt) {
	        return cmpt.get(_this2.props.tenant);
	      }),
	          _map2 = _slicedToArray(_map, 2),
	          Summary = _map2[0],
	          SingleUserSelector = _map2[1];
	
	      var AssignmentOptionsForm = (0, _getForm2.default)(this.props.tenant, this.state.assignment.items[0] && this.state.assignment.items[0].id_assignment_option_form);
	      var oChildrenProps = {
	        random: Math.random(),
	        assignment: this.state.assignment,
	        update: this.update
	      };
	      var children = _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child, oChildrenProps);
	      });
	      var oAssignedToInfo = _react2.default.createElement('div', null);
	      if (this.state.assignment.assigned_to_info) {
	        oAssignedToInfo = _react2.default.createElement(
	          'div',
	          { className: 'selected-users alert alert-info' },
	          this.state.assignment.assigned_to_info.name + ' ' + this.state.assignment.assigned_to_info.lastname,
	          _react2.default.createElement(
	            'span',
	            { className: 'delete-icon', onClick: function onClick() {
	                return _this2.update('assigned_to_info')(null);
	              } },
	            _react2.default.createElement(_timesCircle2.default, null)
	          )
	        );
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'container mp-assignments' },
	        _react2.default.createElement(
	          'article',
	          { itemScope: true, itemType: 'http://schema.org/Product', className: 'mp-product h-product' },
	          _react2.default.createElement(
	            _Row2.default,
	            { className: 'padding-bottom' },
	            _react2.default.createElement(
	              _Col2.default,
	              { xs: 12, sm: 12, md: 8, lg: 8, className: 'padding-top' },
	              children || _react2.default.createElement(Summary, oChildrenProps)
	            ),
	            _react2.default.createElement(
	              _Col2.default,
	              { xs: 12, sm: 12, md: 4, lg: 4, className: 'padding-top' },
	              _react2.default.createElement(SingleUserSelector, this.setUserSelectorInfo()),
	              oAssignedToInfo
	            )
	          ),
	          _react2.default.createElement(
	            _Row2.default,
	            { className: 'padding-top' },
	            _react2.default.createElement(_Col2.default, { xs: 12, sm: 12, md: 8, lg: 8, className: 'hidden-xs hidden-sm' }),
	            _react2.default.createElement(
	              _Col2.default,
	              { xs: 12, sm: 12, md: 4, lg: 4, className: 'text-right' },
	              _react2.default.createElement(
	                _Button2.default,
	                { className: 'white-button uppercase-text', style: { width: '33%', float: 'left' } },
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: '/admin/assignments' },
	                  ' ',
	                  _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'cancel' })
	                )
	              ),
	              _react2.default.createElement(
	                _Button2.default,
	                {
	                  disabled: Object.getOwnPropertyNames(this.state.dataToUpdate).length === 0,
	                  className: 'grey-button uppercase-text',
	                  onClick: this.onClickAssignButton,
	                  style: { width: '64%', float: 'right' }
	                },
	                this.state.isEdited ? _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_update' }) : _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_create' })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Modal2.default,
	          { show: this.state.showAssignmentModal, onHide: this.closeAssignmentOrderModal, className: 'assignment-order-modal', bsSize: 'm', animation: true },
	          _react2.default.createElement(
	            _Modal2.default.Header,
	            { closeButton: true },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_order_options' })
	          ),
	          _react2.default.createElement(
	            _Modal2.default.Body,
	            null,
	            _react2.default.createElement(
	              'div',
	              { className: 'centered' },
	              _react2.default.createElement(AssignmentOptionsForm, { onSubmit: this.onSubmitForm })
	            )
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'fetchData',
	
	
	    /**
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
	      // Insert here the Action to fetch the needed data
	      return _bluebird2.default.all([]).then(function (actions) {
	        return _bluebird2.default.resolve(actions);
	      })
	      // Set SEO data after load required fields in the state
	      .then(function () {
	        return Action.Seo.set({ type: '', data: {} }).then(function (action) {
	          return _bluebird2.default.resolve(dispatch(action));
	        });
	      });
	    }
	  }]);
	
	  return Assignment;
	}(_baseComponent2.default), _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this.createAssignment = function (assignment) {
	    assignment.items = assignment.items.map(function (i) {
	      var itemCopy = _extends({}, i);
	      delete itemCopy.id_assignment_option_form;
	      return itemCopy;
	    });
	    return new _actions2.default(_this3.props.tenant).Assignments.Create(assignment).then(function (action) {
	      return _bluebird2.default.resolve(_this3.props.dispatch(action));
	    }).then(function () {
	      return _bluebird2.default.resolve(_this3.props.notification.add({ message: _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_updated_success' }), level: 'success' }));
	    }).then(function () {
	      return _bluebird2.default.resolve(_this3.closeAssignmentOrderModal());
	    }).then(function () {
	      return _bluebird2.default.resolve(console.log('redirect to assignments'));
	    }).then(function () {
	      return _bluebird2.default.resolve(setTimeout(function () {
	        return _this3.navigate('/admin/assignments/draft');
	      }, 350));
	    }).catch(function (err) {
	      console.log('ERR: ', err);
	      _this3.props.notification.add({ message: _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_updated_error' }), level: 'error' });
	    });
	  };
	
	  this.onSubmitForm = function (e) {
	    e.preventDefault();
	    var isAssignmentValid = _this3.isAssignmentValid();
	    // Check validation again
	    if (!isAssignmentValid || !_this3.assignmentCanAddAssignationOptions()) {
	      _this3.props.notification.add({ message: _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_updated_error' }), level: 'error' });
	      return;
	    }
	    var assignmentOrderOptions = (0, _formSerialize2.default)(e.target);
	    var assignment = _extends({}, _this3.state.assignment, { assignmentOrderOptions: assignmentOrderOptions });
	    return _this3.createAssignment(assignment);
	  };
	
	  this._update = function () {
	    new _actions2.default(_this3.props.tenant).Assignments.Update(_this3.state.assignment.id, _this3.state.dataToUpdate).then(function (action) {
	      return _bluebird2.default.resolve(_this3.props.dispatch(action));
	    }).then(function () {
	      return _bluebird2.default.resolve(_this3.props.notification.add({ message: _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_updated_success' }), level: 'success' }));
	    }).then(function () {
	      return _bluebird2.default.resolve(setTimeout(function () {
	        return _this3.navigate('/admin/assignments/draft');
	      }, 350));
	    }).catch(function (err) {
	      return _this3.props.notification.add({ message: _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_updated_error' }), level: 'error' });
	    });
	  };
	
	  this.onDeleteItem = function (nItemId) {
	    new _actions2.default(_this3.props.tenant).Assignments.DeleteItem({ id: _this3.state.assignment.id, id_item: nItemId }).then(function (action) {
	      var oAssignment = _extends({}, _this3.state.assignment, { item: null });
	      _this3.setState({ assignment: oAssignment });
	      _this3.props.dispatch(action);
	    }).catch(function (err) {
	      return console.log('ERROR deleting assignment component: ', err);
	    });
	  };
	
	  this.setUserSelectorInfo = function () {
	    return { user_info: _this3.state.assignment.assigned_to_info, user_info_key: 'assigned_to_info', update: _this3.update };
	  };
	
	  this.update = function (field) {
	    return function (value) {
	      var oAssignment = _extends({}, _this3.state.assignment);
	      var oDataToUpdate = _extends({}, _this3.state.dataToUpdate);
	      if (field === 'assigned_to_info') {
	        oAssignment.assigned_at = Date.now();
	      }
	      // if we are updating items, convert it to an array
	      if (field === 'items') {
	        oDataToUpdate.items = oDataToUpdate.items || [];
	        // TODO: in the future, when we can add more than one item, need to do a push. Now, we only set always first position
	        oDataToUpdate[field][0] = value;
	        oAssignment[field][0] = value;
	      } else {
	        oAssignment[field] = value;
	        oDataToUpdate[field] = value;
	      }
	      _this3.setState({ assignment: oAssignment, dataToUpdate: oDataToUpdate });
	    };
	  };
	
	  this.openAssignmentModal = function () {
	    return _this3.setState({ showAssignmentModal: true });
	  };
	
	  this.isAssignmentValid = function () {
	    var bValidatedFields = true;
	    // check first all fields to show all error messages (if needed)
	    if (!_this3.state.assignment.assigned_to_info) {
	      _this3.props.notification.add({ message: _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_updated_error_no_users' }), level: 'error' });
	      bValidatedFields = false;
	    }
	    if (_this3.state.assignment.items.length < 1) {
	      _this3.props.notification.add({ message: _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'assignment_updated_error_no_components' }), level: 'error' });
	      bValidatedFields = false;
	    }
	    return bValidatedFields;
	  };
	
	  this.assignmentCanAddAssignationOptions = function () {
	    return _this3.state.assignment.items.length === 1 && _this3.state.assignment.items[0].type === 'product' && _this3.state.assignment.items[0].id_assignment_option_form;
	  };
	
	  this.onClickAssignButton = function (e) {
	    // return console.log('this.state', this.state);
	    var isAssignmentValid = _this3.isAssignmentValid();
	    if (!isAssignmentValid) {
	      return;
	    }
	    if (_this3.state.isEdited) {
	      return _this3._update();
	    }
	    if (_this3.assignmentCanAddAssignationOptions()) {
	      return _this3.openAssignmentModal();
	    }
	    return _this3.createAssignment(_this3.state.assignment);
	  };
	
	  this.closeAssignmentOrderModal = function (e) {
	    return _this3.setState({ showAssignmentModal: false });
	  };
	}, _temp);
	
	
	function stateToProps(state) {
	  return {
	    tenant: state.get('v02').get('common').get('tenant').get('name'),
	    assignments: state.get('assignments'),
	    notification: state.get('notification')
	  };
	}
	
	var _components = { default: (0, _connect2.default)(stateToProps)(Assignment) };
	
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
//# sourceMappingURL=41.bundle.js.map