webpackJsonp([34],{

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

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	/**
	 * Maps children that are typically specified as `props.children`,
	 * but only iterates over children that are "valid components".
	 *
	 * The mapFunction provided index will be normalised to the components mapped,
	 * so an invalid component would not increase the index.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} mapFunction.
	 * @param {*} mapContext Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapValidComponents(children, func, context) {
	  var index = 0;
	
	  return _react2['default'].Children.map(children, function (child) {
	    if (_react2['default'].isValidElement(child)) {
	      var lastIndex = index;
	      index++;
	      return func.call(context, child, lastIndex);
	    }
	
	    return child;
	  });
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`,
	 * but only iterates over children that are "valid components".
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child with the index reflecting the position relative to "valid components".
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc.
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachValidComponents(children, func, context) {
	  var index = 0;
	
	  return _react2['default'].Children.forEach(children, function (child) {
	    if (_react2['default'].isValidElement(child)) {
	      func.call(context, child, index);
	      index++;
	    }
	  });
	}
	
	/**
	 * Count the number of "valid components" in the Children container.
	 *
	 * @param {?*} children Children tree container.
	 * @returns {number}
	 */
	function numberOfValidComponents(children) {
	  var count = 0;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (_react2['default'].isValidElement(child)) {
	      count++;
	    }
	  });
	
	  return count;
	}
	
	/**
	 * Determine if the Child container has one or more "valid components".
	 *
	 * @param {?*} children Children tree container.
	 * @returns {boolean}
	 */
	function hasValidComponent(children) {
	  var hasValid = false;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!hasValid && _react2['default'].isValidElement(child)) {
	      hasValid = true;
	    }
	  });
	
	  return hasValid;
	}
	
	function find(children, finder) {
	  var child = undefined;
	
	  forEachValidComponents(children, function (c, idx) {
	    if (!child && finder(c, idx, children)) {
	      child = c;
	    }
	  });
	
	  return child;
	}
	
	/**
	 * Finds children that are typically specified as `props.children`,
	 * but only iterates over children that are "valid components".
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child with the index reflecting the position relative to "valid components".
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} findFunc.
	 * @param {*} findContext Context for findContext.
	 * @returns {array} of children that meet the findFunc return statement
	 */
	function findValidComponents(children, func, context) {
	  var index = 0;
	  var returnChildren = [];
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (_react2['default'].isValidElement(child)) {
	      if (func.call(context, child, index)) {
	        returnChildren.push(child);
	      }
	      index++;
	    }
	  });
	
	  return returnChildren;
	}
	
	exports['default'] = {
	  map: mapValidComponents,
	  forEach: forEachValidComponents,
	  numberOf: numberOfValidComponents,
	  find: find,
	  findValidComponents: findValidComponents,
	  hasValidComponent: hasValidComponent
	};
	module.exports = exports['default'];

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

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _domHelpersActiveElement = __webpack_require__(101);
	
	var _domHelpersActiveElement2 = _interopRequireDefault(_domHelpersActiveElement);
	
	var _domHelpersQueryContains = __webpack_require__(31);
	
	var _domHelpersQueryContains2 = _interopRequireDefault(_domHelpersQueryContains);
	
	var _keycode = __webpack_require__(87);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _lodashCompatCollectionFind = __webpack_require__(196);
	
	var _lodashCompatCollectionFind2 = _interopRequireDefault(_lodashCompatCollectionFind);
	
	var _lodashCompatObjectOmit = __webpack_require__(97);
	
	var _lodashCompatObjectOmit2 = _interopRequireDefault(_lodashCompatObjectOmit);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactPropTypesLibAll = __webpack_require__(65);
	
	var _reactPropTypesLibAll2 = _interopRequireDefault(_reactPropTypesLibAll);
	
	var _reactPropTypesLibElementType = __webpack_require__(13);
	
	var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);
	
	var _reactPropTypesLibIsRequiredForA11y = __webpack_require__(70);
	
	var _reactPropTypesLibIsRequiredForA11y2 = _interopRequireDefault(_reactPropTypesLibIsRequiredForA11y);
	
	var _uncontrollable = __webpack_require__(150);
	
	var _uncontrollable2 = _interopRequireDefault(_uncontrollable);
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var _ButtonGroup = __webpack_require__(147);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	var _DropdownMenu = __webpack_require__(230);
	
	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);
	
	var _DropdownToggle = __webpack_require__(148);
	
	var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);
	
	var _utilsCreateChainedFunction = __webpack_require__(15);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var _utilsCustomPropTypes = __webpack_require__(233);
	
	var _utilsCustomPropTypes2 = _interopRequireDefault(_utilsCustomPropTypes);
	
	var _utilsValidComponentChildren = __webpack_require__(12);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var TOGGLE_REF = 'toggle-btn';
	var TOGGLE_ROLE = _DropdownToggle2['default'].defaultProps.bsRole;
	var MENU_ROLE = _DropdownMenu2['default'].defaultProps.bsRole;
	
	var Dropdown = (function (_React$Component) {
	  _inherits(Dropdown, _React$Component);
	
	  function Dropdown(props) {
	    _classCallCheck(this, Dropdown);
	
	    _React$Component.call(this, props);
	
	    this.Toggle = _DropdownToggle2['default'];
	
	    this.toggleOpen = this.toggleOpen.bind(this);
	    this.handleClick = this.handleClick.bind(this);
	    this.handleKeyDown = this.handleKeyDown.bind(this);
	    this.handleClose = this.handleClose.bind(this);
	    this.extractChildren = this.extractChildren.bind(this);
	
	    this.refineMenu = this.refineMenu.bind(this);
	    this.refineToggle = this.refineToggle.bind(this);
	
	    this.childExtractors = [{
	      key: 'toggle',
	      matches: function matches(child) {
	        return child.props.bsRole === TOGGLE_ROLE;
	      },
	      refine: this.refineToggle
	    }, {
	      key: 'menu',
	      exclusive: true,
	      matches: function matches(child) {
	        return child.props.bsRole === MENU_ROLE;
	      },
	      refine: this.refineMenu
	    }];
	
	    this.state = {};
	
	    this.lastOpenEventType = null;
	  }
	
	  Dropdown.prototype.componentDidMount = function componentDidMount() {
	    this.focusNextOnOpen();
	  };
	
	  Dropdown.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
	    if (!nextProps.open && this.props.open) {
	      this._focusInDropdown = _domHelpersQueryContains2['default'](_reactDom2['default'].findDOMNode(this.refs.menu), _domHelpersActiveElement2['default'](document));
	    }
	  };
	
	  Dropdown.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this.props.open && !prevProps.open) {
	      this.focusNextOnOpen();
	    }
	
	    if (!this.props.open && prevProps.open) {
	      // if focus hasn't already moved from the menu lets return it
	      // to the toggle
	      if (this._focusInDropdown) {
	        this._focusInDropdown = false;
	        this.focus();
	      }
	    }
	  };
	
	  Dropdown.prototype.render = function render() {
	    var _rootClasses;
	
	    var children = this.extractChildren();
	    var Component = this.props.componentClass;
	
	    var props = _lodashCompatObjectOmit2['default'](this.props, ['id', 'bsClass', 'role']);
	    var className = _utilsBootstrapUtils2['default'].prefix(this.props);
	
	    var rootClasses = (_rootClasses = {
	      open: this.props.open,
	      disabled: this.props.disabled
	    }, _rootClasses[className] = !this.props.dropup, _rootClasses.dropup = this.props.dropup, _rootClasses);
	
	    return _react2['default'].createElement(
	      Component,
	      _extends({}, props, {
	        tabIndex: '-1',
	        className: _classnames2['default'](this.props.className, rootClasses)
	      }),
	      children
	    );
	  };
	
	  Dropdown.prototype.toggleOpen = function toggleOpen() {
	    var eventType = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
	    var open = !this.props.open;
	
	    if (open) {
	      this.lastOpenEventType = eventType;
	    }
	
	    if (this.props.onToggle) {
	      this.props.onToggle(open);
	    }
	  };
	
	  Dropdown.prototype.handleClick = function handleClick() {
	    if (this.props.disabled) {
	      return;
	    }
	
	    this.toggleOpen('click');
	  };
	
	  Dropdown.prototype.handleKeyDown = function handleKeyDown(event) {
	    if (this.props.disabled) {
	      return;
	    }
	
	    switch (event.keyCode) {
	      case _keycode2['default'].codes.down:
	        if (!this.props.open) {
	          this.toggleOpen('keydown');
	        } else if (this.refs.menu.focusNext) {
	          this.refs.menu.focusNext();
	        }
	        event.preventDefault();
	        break;
	      case _keycode2['default'].codes.esc:
	      case _keycode2['default'].codes.tab:
	        this.handleClose(event);
	        break;
	      default:
	    }
	  };
	
	  Dropdown.prototype.handleClose = function handleClose() {
	    if (!this.props.open) {
	      return;
	    }
	
	    this.toggleOpen();
	  };
	
	  Dropdown.prototype.focusNextOnOpen = function focusNextOnOpen() {
	    var menu = this.refs.menu;
	
	    if (!menu.focusNext) {
	      return;
	    }
	
	    if (this.lastOpenEventType === 'keydown' || this.props.role === 'menuitem') {
	      menu.focusNext();
	    }
	  };
	
	  Dropdown.prototype.focus = function focus() {
	    var toggle = _reactDom2['default'].findDOMNode(this.refs[TOGGLE_REF]);
	
	    if (toggle && toggle.focus) {
	      toggle.focus();
	    }
	  };
	
	  Dropdown.prototype.extractChildren = function extractChildren() {
	    var _this = this;
	
	    var open = !!this.props.open;
	    var seen = {};
	
	    return _utilsValidComponentChildren2['default'].map(this.props.children, function (child) {
	      var extractor = _lodashCompatCollectionFind2['default'](_this.childExtractors, function (x) {
	        return x.matches(child);
	      });
	
	      if (extractor) {
	        if (seen[extractor.key]) {
	          return false;
	        }
	
	        seen[extractor.key] = extractor.exclusive;
	        child = extractor.refine(child, open);
	      }
	
	      return child;
	    });
	  };
	
	  Dropdown.prototype.refineMenu = function refineMenu(menu, open) {
	    var menuProps = {
	      ref: 'menu',
	      open: open,
	      labelledBy: this.props.id,
	      pullRight: this.props.pullRight,
	      bsClass: this.props.bsClass
	    };
	
	    menuProps.onClose = _utilsCreateChainedFunction2['default'](menu.props.onClose, this.props.onClose, this.handleClose);
	
	    menuProps.onSelect = _utilsCreateChainedFunction2['default'](menu.props.onSelect, this.props.onSelect, this.handleClose);
	
	    return _react.cloneElement(menu, menuProps, menu.props.children);
	  };
	
	  Dropdown.prototype.refineToggle = function refineToggle(toggle, open) {
	    var toggleProps = {
	      open: open,
	      id: this.props.id,
	      ref: TOGGLE_REF,
	      role: this.props.role
	    };
	
	    toggleProps.onClick = _utilsCreateChainedFunction2['default'](toggle.props.onClick, this.handleClick);
	
	    toggleProps.onKeyDown = _utilsCreateChainedFunction2['default'](toggle.props.onKeyDown, this.handleKeyDown);
	
	    return _react.cloneElement(toggle, toggleProps, toggle.props.children);
	  };
	
	  return Dropdown;
	})(_react2['default'].Component);
	
	Dropdown.Toggle = _DropdownToggle2['default'];
	
	Dropdown.TOGGLE_REF = TOGGLE_REF;
	Dropdown.TOGGLE_ROLE = TOGGLE_ROLE;
	Dropdown.MENU_ROLE = MENU_ROLE;
	
	Dropdown.defaultProps = {
	  componentClass: _ButtonGroup2['default'],
	  bsClass: 'dropdown'
	};
	
	Dropdown.propTypes = {
	
	  bsClass: _react2['default'].PropTypes.string,
	
	  /**
	   * The menu will open above the dropdown button, instead of below it.
	   */
	  dropup: _react2['default'].PropTypes.bool,
	
	  /**
	   * An html id attribute, necessary for assistive technologies, such as screen readers.
	   * @type {string|number}
	   * @required
	   */
	  id: _reactPropTypesLibIsRequiredForA11y2['default'](_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])),
	
	  componentClass: _reactPropTypesLibElementType2['default'],
	
	  /**
	   * The children of a Dropdown may be a `<Dropdown.Toggle/>` or a `<Dropdown.Menu/>`.
	   * @type {node}
	   */
	  children: _reactPropTypesLibAll2['default'](_utilsCustomPropTypes2['default'].requiredRoles(TOGGLE_ROLE, MENU_ROLE), _utilsCustomPropTypes2['default'].exclusiveRoles(MENU_ROLE)),
	
	  /**
	   * Whether or not component is disabled.
	   */
	  disabled: _react2['default'].PropTypes.bool,
	
	  /**
	   * Align the menu to the right side of the Dropdown toggle
	   */
	  pullRight: _react2['default'].PropTypes.bool,
	
	  /**
	   * Whether or not the Dropdown is visible.
	   *
	   * @controllable onToggle
	   */
	  open: _react2['default'].PropTypes.bool,
	
	  /**
	   * A callback fired when the Dropdown closes.
	   */
	  onClose: _react2['default'].PropTypes.func,
	
	  /**
	   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
	   * `open` value.
	   *
	   * ```js
	   * function(Boolean isOpen) {}
	   * ```
	   * @controllable open
	   */
	  onToggle: _react2['default'].PropTypes.func,
	
	  /**
	   * A callback fired when a menu item is selected.
	   *
	   * ```js
	   * function(Object event, Any eventKey)
	   * ```
	   */
	  onSelect: _react2['default'].PropTypes.func,
	
	  /**
	   * If `'menuitem'`, causes the dropdown to behave like a menu item rather than
	   * a menu button.
	   */
	  role: _react2['default'].PropTypes.string
	};
	
	Dropdown = _uncontrollable2['default'](Dropdown, { open: 'onToggle' });
	
	Dropdown.Toggle = _DropdownToggle2['default'];
	Dropdown.Menu = _DropdownMenu2['default'];
	
	exports['default'] = Dropdown;
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

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = all;
	
	var _common = __webpack_require__(46);
	
	function all() {
	  for (var _len = arguments.length, propTypes = Array(_len), _key = 0; _key < _len; _key++) {
	    propTypes[_key] = arguments[_key];
	  }
	
	  if (propTypes === undefined) {
	    throw new Error('No validations provided');
	  }
	
	  if (propTypes.some(function (propType) {
	    return typeof propType !== 'function';
	  })) {
	    throw new Error('Invalid arguments, must be functions');
	  }
	
	  if (propTypes.length === 0) {
	    throw new Error('No validations provided');
	  }
	
	  function validate(props, propName, componentName) {
	    for (var i = 0; i < propTypes.length; i++) {
	      var result = propTypes[i](props, propName, componentName);
	
	      if (result !== undefined && result !== null) {
	        return result;
	      }
	    }
	  }
	
	  return _common.createChainableTypeChecker(validate);
	}
	
	module.exports = exports['default'];

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

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(44),
	    isArrayLike = __webpack_require__(53),
	    isObject = __webpack_require__(20),
	    shimKeys = __webpack_require__(224),
	    support = __webpack_require__(56);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
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
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object == 'function' ? support.enumPrototypes : isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },

/***/ 87:
/***/ function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes
	
	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */
	
	exports = module.exports = function(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
	    if (hasKeyCode) searchInput = hasKeyCode
	  }
	
	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]
	
	  // Everything else (cast to string)
	  var search = String(searchInput)
	
	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)
	
	  return undefined
	}
	
	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */
	
	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	}
	
	// Helper aliases
	
	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	}
	
	
	/*!
	 * Programatically add the following
	 */
	
	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32
	
	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i
	
	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111
	
	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96
	
	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */
	
	var names = exports.names = exports.title = {} // title for backward compat
	
	// Create reverse mapping
	for (i in codes) names[codes[i]] = i
	
	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias]
	}


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

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(198),
	    baseDifference = __webpack_require__(201),
	    baseFlatten = __webpack_require__(89),
	    bindCallback = __webpack_require__(63),
	    keysIn = __webpack_require__(64),
	    pickByArray = __webpack_require__(95),
	    pickByCallback = __webpack_require__(96),
	    restParam = __webpack_require__(88);
	
	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable properties of `object` that are not omitted.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function|...(string|string[])} [predicate] The function invoked per
	 *  iteration or property names to omit, specified as individual property
	 *  names or arrays of property names.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'user': 'fred', 'age': 40 };
	 *
	 * _.omit(object, 'age');
	 * // => { 'user': 'fred' }
	 *
	 * _.omit(object, _.isNumber);
	 * // => { 'user': 'fred' }
	 */
	var omit = restParam(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  if (typeof props[0] != 'function') {
	    var props = arrayMap(baseFlatten(props), String);
	    return pickByArray(object, baseDifference(keysIn(object), props));
	  }
	  var predicate = bindCallback(props[0], props[1], 3);
	  return pickByCallback(object, function(value, key, object) {
	    return !predicate(value, key, object);
	  });
	});
	
	module.exports = omit;


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

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(16);
	
	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  object = toObject(object);
	  if (pathKey !== undefined && pathKey in object) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = toObject(object)[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(207),
	    isObject = __webpack_require__(20),
	    isObjectLike = __webpack_require__(21);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;


/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(22),
	    toObject = __webpack_require__(16);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}
	
	module.exports = isKey;


/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(213),
	    isArray = __webpack_require__(22);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = toPath;


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

/***/ 147:
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
	
	var _reactPropTypesLibAll = __webpack_require__(65);
	
	var _reactPropTypesLibAll2 = _interopRequireDefault(_reactPropTypesLibAll);
	
	var _Button = __webpack_require__(17);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var ButtonGroup = _react2['default'].createClass({
	  displayName: 'ButtonGroup',
	
	  propTypes: {
	    vertical: _react2['default'].PropTypes.bool,
	    justified: _react2['default'].PropTypes.bool,
	    /**
	     * Display block buttons, only useful when used with the "vertical" prop.
	     * @type {bool}
	     */
	    block: _reactPropTypesLibAll2['default'](_react2['default'].PropTypes.bool, function (props) {
	      if (props.block && !props.vertical) {
	        return new Error('The block property requires the vertical property to be set to have any effect');
	      }
	    })
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      block: false,
	      justified: false,
	      vertical: false
	    };
	  },
	
	  render: function render() {
	    var classes = _utilsBootstrapUtils2['default'].getClassSet(this.props);
	
	    classes[_utilsBootstrapUtils2['default'].prefix(this.props)] = !this.props.vertical;
	    classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'vertical')] = this.props.vertical;
	    classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'justified')] = this.props.justified;
	
	    // this is annoying, since the class is `btn-block` not `btn-group-block`
	    classes[_utilsBootstrapUtils2['default'].prefix(_Button2['default'].defaultProps, 'block')] = this.props.block;
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, {
	        className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  }
	});
	
	exports['default'] = _utilsBootstrapUtils.bsClass('btn-group', ButtonGroup);
	module.exports = exports['default'];

/***/ },

/***/ 148:
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
	
	var _Button = __webpack_require__(17);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _SafeAnchor = __webpack_require__(25);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var CARET = _react2['default'].createElement(
	  'span',
	  null,
	  ' ',
	  _react2['default'].createElement('span', { className: 'caret' })
	);
	
	var DropdownToggle = (function (_React$Component) {
	  _inherits(DropdownToggle, _React$Component);
	
	  function DropdownToggle() {
	    _classCallCheck(this, DropdownToggle);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  DropdownToggle.prototype.render = function render() {
	    var caret = this.props.noCaret ? null : CARET;
	
	    var classes = {
	      'dropdown-toggle': true
	    };
	
	    var Component = this.props.useAnchor ? _SafeAnchor2['default'] : _Button2['default'];
	
	    return _react2['default'].createElement(
	      Component,
	      _extends({}, this.props, {
	        className: _classnames2['default'](classes, this.props.className),
	        type: 'button',
	        'aria-haspopup': true,
	        'aria-expanded': this.props.open }),
	      this.props.children || this.props.title,
	      caret
	    );
	  };
	
	  return DropdownToggle;
	})(_react2['default'].Component);
	
	exports['default'] = DropdownToggle;
	
	DropdownToggle.defaultProps = {
	  open: false,
	  useAnchor: false,
	  bsRole: 'toggle'
	};
	
	DropdownToggle.propTypes = {
	  bsRole: _react2['default'].PropTypes.string,
	  noCaret: _react2['default'].PropTypes.bool,
	  open: _react2['default'].PropTypes.bool,
	  title: _react2['default'].PropTypes.string,
	  useAnchor: _react2['default'].PropTypes.bool
	};
	
	DropdownToggle.isToggle = true;
	DropdownToggle.titleProp = 'title';
	DropdownToggle.onClickProp = 'onClick';
	module.exports = exports['default'];

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createUncontrollable = __webpack_require__(237);
	
	var _createUncontrollable2 = _interopRequireDefault(_createUncontrollable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mixin = {
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    //let the forceUpdate trigger the update
	    return !this._notifying;
	  }
	};
	
	function set(component, propName, handler, value, args) {
	  if (handler) {
	    component._notifying = true;
	    handler.call.apply(handler, [component, value].concat(args));
	    component._notifying = false;
	  }
	
	  component._values[propName] = value;
	
	  if (component.isMounted()) component.forceUpdate();
	}
	
	exports.default = (0, _createUncontrollable2.default)([mixin], set);
	module.exports = exports['default'];

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

/***/ 193:
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
	
	var _styleMaps = __webpack_require__(11);
	
	var Well = (function (_React$Component) {
	  _inherits(Well, _React$Component);
	
	  function Well() {
	    _classCallCheck(this, _Well);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  Well.prototype.render = function render() {
	    var classes = _utilsBootstrapUtils2['default'].getClassSet(this.props);
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
	      this.props.children
	    );
	  };
	
	  var _Well = Well;
	  Well = _utilsBootstrapUtils.bsSizes([_styleMaps.Sizes.LARGE, _styleMaps.Sizes.SMALL])(Well) || Well;
	  Well = _utilsBootstrapUtils.bsClass('well')(Well) || Well;
	  return Well;
	})(_react2['default'].Component);
	
	exports['default'] = Well;
	module.exports = exports['default'];

/***/ },

/***/ 195:
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(202),
	    createFind = __webpack_require__(218);
	
	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * If a property name is provided for `predicate` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `predicate` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @alias detect
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to search.
	 * @param {Function|Object|string} [predicate=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.result(_.find(users, function(chr) {
	 *   return chr.age < 40;
	 * }), 'user');
	 * // => 'barney'
	 *
	 * // using the `_.matches` callback shorthand
	 * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	 * // => 'pebbles'
	 *
	 * // using the `_.matchesProperty` callback shorthand
	 * _.result(_.find(users, 'active', false), 'user');
	 * // => 'fred'
	 *
	 * // using the `_.property` callback shorthand
	 * _.result(_.find(users, 'active'), 'user');
	 * // => 'barney'
	 */
	var find = createFind(baseEach);
	
	module.exports = find;


/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(215),
	    getNative = __webpack_require__(44);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;
	
	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}
	
	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;
	
	module.exports = SetCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 198:
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },

/***/ 199:
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(209),
	    baseMatchesProperty = __webpack_require__(210),
	    bindCallback = __webpack_require__(63),
	    identity = __webpack_require__(98),
	    property = __webpack_require__(227);
	
	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}
	
	module.exports = baseCallback;


/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(206),
	    cacheIndexOf = __webpack_require__(214),
	    createCache = __webpack_require__(217);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];
	
	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;
	
	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];
	
	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(205),
	    createBaseEach = __webpack_require__(216);
	
	/**
	 * The base implementation of `_.forEach` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },

/***/ 203:
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	 * without support for callback shorthands and `this` binding, which iterates
	 * over `collection` using the provided `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to search.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @param {boolean} [retKey] Specify returning the key of the found element
	 *  instead of the element itself.
	 * @returns {*} Returns the found element or its key, else `undefined`.
	 */
	function baseFind(collection, predicate, eachFunc, retKey) {
	  var result;
	  eachFunc(collection, function(value, key, collection) {
	    if (predicate(value, key, collection)) {
	      result = retKey ? key : value;
	      return false;
	    }
	  });
	  return result;
	}
	
	module.exports = baseFind;


/***/ },

/***/ 204:
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for callback shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromRight) {
	  var length = array.length,
	      index = fromRight ? length : -1;
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;


/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(90),
	    keys = __webpack_require__(86);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(223);
	
	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(219),
	    equalByTag = __webpack_require__(220),
	    equalObjects = __webpack_require__(221),
	    isArray = __webpack_require__(22),
	    isHostObject = __webpack_require__(93),
	    isTypedArray = __webpack_require__(225);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;


/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(137),
	    toObject = __webpack_require__(16);
	
	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(208),
	    getMatchData = __webpack_require__(222),
	    toObject = __webpack_require__(16);
	
	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];
	
	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      object = toObject(object);
	      return object[key] === value && (value !== undefined || (key in object));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(136),
	    baseIsEqual = __webpack_require__(137),
	    baseSlice = __webpack_require__(212),
	    isArray = __webpack_require__(22),
	    isKey = __webpack_require__(138),
	    isStrictComparable = __webpack_require__(139),
	    last = __webpack_require__(195),
	    toObject = __webpack_require__(16),
	    toPath = __webpack_require__(140);
	
	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');
	
	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(136),
	    toPath = __webpack_require__(140);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },

/***/ 212:
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },

/***/ 213:
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}
	
	module.exports = baseToString;


/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	
	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	  return result ? 0 : -1;
	}
	
	module.exports = cacheIndexOf;


/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	
	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}
	
	module.exports = cachePush;


/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(92),
	    isLength = __webpack_require__(26),
	    toObject = __webpack_require__(16);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    var length = collection ? getLength(collection) : 0;
	    if (!isLength(length)) {
	      return eachFunc(collection, iteratee);
	    }
	    var index = fromRight ? length : -1,
	        iterable = toObject(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(197),
	    getNative = __webpack_require__(44);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}
	
	module.exports = createCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(200),
	    baseFind = __webpack_require__(203),
	    baseFindIndex = __webpack_require__(204),
	    isArray = __webpack_require__(22);
	
	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(eachFunc, fromRight) {
	  return function(collection, predicate, thisArg) {
	    predicate = baseCallback(predicate, thisArg, 3);
	    if (isArray(collection)) {
	      var index = baseFindIndex(collection, predicate, fromRight);
	      return index > -1 ? collection[index] : undefined;
	    }
	    return baseFind(collection, predicate, eachFunc);
	  };
	}
	
	module.exports = createFind;


/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(199);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;


/***/ },

/***/ 220:
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(86);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;


/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(139),
	    pairs = __webpack_require__(226);
	
	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },

/***/ 223:
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(54),
	    isArray = __webpack_require__(22),
	    isIndex = __webpack_require__(94),
	    isLength = __webpack_require__(26),
	    isString = __webpack_require__(55),
	    keysIn = __webpack_require__(64);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object) || isString(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(26),
	    isObjectLike = __webpack_require__(21);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(86),
	    toObject = __webpack_require__(16);
	
	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);
	
	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}
	
	module.exports = pairs;


/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(91),
	    basePropertyDeep = __webpack_require__(211),
	    isKey = __webpack_require__(138);
	
	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _objectWithoutProperties = __webpack_require__(9)['default'];
	
	var _Object$keys = __webpack_require__(18)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Dropdown = __webpack_require__(62);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _lodashCompatObjectOmit = __webpack_require__(97);
	
	var _lodashCompatObjectOmit2 = _interopRequireDefault(_lodashCompatObjectOmit);
	
	var _lodashCompatObjectPick = __webpack_require__(43);
	
	var _lodashCompatObjectPick2 = _interopRequireDefault(_lodashCompatObjectPick);
	
	var _Button = __webpack_require__(17);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var DropdownButton = (function (_React$Component) {
	  _inherits(DropdownButton, _React$Component);
	
	  function DropdownButton() {
	    _classCallCheck(this, DropdownButton);
	
	    _React$Component.apply(this, arguments);
	  }
	
	  DropdownButton.prototype.render = function render() {
	    var _props = this.props;
	    var bsStyle = _props.bsStyle;
	    var bsSize = _props.bsSize;
	    var disabled = _props.disabled;
	    var _props2 = this.props;
	    var title = _props2.title;
	    var children = _props2.children;
	
	    var props = _objectWithoutProperties(_props2, ['title', 'children']);
	
	    var dropdownProps = _lodashCompatObjectPick2['default'](props, _Object$keys(_Dropdown2['default'].ControlledComponent.propTypes));
	    var toggleProps = _lodashCompatObjectOmit2['default'](props, _Object$keys(_Dropdown2['default'].ControlledComponent.propTypes));
	
	    return _react2['default'].createElement(
	      _Dropdown2['default'],
	      _extends({}, dropdownProps, {
	        bsSize: bsSize,
	        bsStyle: bsStyle
	      }),
	      _react2['default'].createElement(
	        _Dropdown2['default'].Toggle,
	        _extends({}, toggleProps, {
	          disabled: disabled
	        }),
	        title
	      ),
	      _react2['default'].createElement(
	        _Dropdown2['default'].Menu,
	        null,
	        children
	      )
	    );
	  };
	
	  return DropdownButton;
	})(_react2['default'].Component);
	
	DropdownButton.propTypes = _extends({
	  disabled: _react2['default'].PropTypes.bool,
	  bsStyle: _Button2['default'].propTypes.bsStyle,
	  bsSize: _Button2['default'].propTypes.bsSize,
	
	  /**
	   * When used with the `title` prop, the noCaret option will not render a caret icon, in the toggle element.
	   */
	  noCaret: _react2['default'].PropTypes.bool,
	  title: _react2['default'].PropTypes.node.isRequired
	
	}, _Dropdown2['default'].propTypes);
	
	DropdownButton.defaultProps = {
	  disabled: false,
	  pullRight: false,
	  dropup: false,
	  navItem: false,
	  noCaret: false
	};
	
	exports['default'] = DropdownButton;
	module.exports = exports['default'];

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _objectWithoutProperties = __webpack_require__(9)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _keycode = __webpack_require__(87);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var _reactOverlaysLibRootCloseWrapper = __webpack_require__(122);
	
	var _reactOverlaysLibRootCloseWrapper2 = _interopRequireDefault(_reactOverlaysLibRootCloseWrapper);
	
	var _utilsValidComponentChildren = __webpack_require__(12);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var _utilsCreateChainedFunction = __webpack_require__(15);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var DropdownMenu = (function (_React$Component) {
	  _inherits(DropdownMenu, _React$Component);
	
	  function DropdownMenu(props) {
	    _classCallCheck(this, DropdownMenu);
	
	    _React$Component.call(this, props);
	
	    this.focusNext = this.focusNext.bind(this);
	    this.focusPrevious = this.focusPrevious.bind(this);
	    this.getFocusableMenuItems = this.getFocusableMenuItems.bind(this);
	    this.getItemsAndActiveIndex = this.getItemsAndActiveIndex.bind(this);
	
	    this.handleKeyDown = this.handleKeyDown.bind(this);
	  }
	
	  DropdownMenu.prototype.handleKeyDown = function handleKeyDown(event) {
	    switch (event.keyCode) {
	      case _keycode2['default'].codes.down:
	        this.focusNext();
	        event.preventDefault();
	        break;
	      case _keycode2['default'].codes.up:
	        this.focusPrevious();
	        event.preventDefault();
	        break;
	      case _keycode2['default'].codes.esc:
	      case _keycode2['default'].codes.tab:
	        this.props.onClose(event);
	        break;
	      default:
	    }
	  };
	
	  DropdownMenu.prototype.focusNext = function focusNext() {
	    var _getItemsAndActiveIndex = this.getItemsAndActiveIndex();
	
	    var items = _getItemsAndActiveIndex.items;
	    var activeItemIndex = _getItemsAndActiveIndex.activeItemIndex;
	
	    if (items.length === 0) {
	      return;
	    }
	
	    if (activeItemIndex === items.length - 1) {
	      items[0].focus();
	      return;
	    }
	
	    items[activeItemIndex + 1].focus();
	  };
	
	  DropdownMenu.prototype.focusPrevious = function focusPrevious() {
	    var _getItemsAndActiveIndex2 = this.getItemsAndActiveIndex();
	
	    var items = _getItemsAndActiveIndex2.items;
	    var activeItemIndex = _getItemsAndActiveIndex2.activeItemIndex;
	
	    if (activeItemIndex === 0) {
	      items[items.length - 1].focus();
	      return;
	    }
	
	    items[activeItemIndex - 1].focus();
	  };
	
	  DropdownMenu.prototype.getItemsAndActiveIndex = function getItemsAndActiveIndex() {
	    var items = this.getFocusableMenuItems();
	    var activeElement = document.activeElement;
	    var activeItemIndex = items.indexOf(activeElement);
	
	    return { items: items, activeItemIndex: activeItemIndex };
	  };
	
	  DropdownMenu.prototype.getFocusableMenuItems = function getFocusableMenuItems() {
	    var menuNode = _reactDom2['default'].findDOMNode(this);
	
	    if (menuNode === undefined) {
	      return [];
	    }
	
	    return [].slice.call(menuNode.querySelectorAll('[tabIndex="-1"]'), 0);
	  };
	
	  DropdownMenu.prototype.render = function render() {
	    var _classes,
	        _this = this;
	
	    var _props = this.props;
	    var children = _props.children;
	    var onSelect = _props.onSelect;
	    var pullRight = _props.pullRight;
	    var className = _props.className;
	    var labelledBy = _props.labelledBy;
	    var open = _props.open;
	    var onClose = _props.onClose;
	
	    var props = _objectWithoutProperties(_props, ['children', 'onSelect', 'pullRight', 'className', 'labelledBy', 'open', 'onClose']);
	
	    var items = _utilsValidComponentChildren2['default'].map(children, function (child) {
	      var childProps = child.props || {};
	
	      return _react2['default'].cloneElement(child, {
	        onKeyDown: _utilsCreateChainedFunction2['default'](childProps.onKeyDown, _this.handleKeyDown),
	        onSelect: _utilsCreateChainedFunction2['default'](childProps.onSelect, onSelect)
	      }, childProps.children);
	    });
	
	    var classes = (_classes = {}, _classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'menu')] = true, _classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'menu-right')] = pullRight, _classes);
	
	    var list = _react2['default'].createElement(
	      'ul',
	      _extends({
	        className: _classnames2['default'](className, classes),
	        role: 'menu',
	        'aria-labelledby': labelledBy
	      }, props),
	      items
	    );
	
	    if (open) {
	      list = _react2['default'].createElement(
	        _reactOverlaysLibRootCloseWrapper2['default'],
	        { noWrap: true, onRootClose: onClose },
	        list
	      );
	    }
	
	    return list;
	  };
	
	  return DropdownMenu;
	})(_react2['default'].Component);
	
	DropdownMenu.defaultProps = {
	  bsRole: 'menu',
	  bsClass: 'dropdown',
	  pullRight: false
	};
	
	DropdownMenu.propTypes = {
	  open: _react2['default'].PropTypes.bool,
	  pullRight: _react2['default'].PropTypes.bool,
	  onClose: _react2['default'].PropTypes.func,
	  labelledBy: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
	  onSelect: _react2['default'].PropTypes.func
	};
	
	exports['default'] = DropdownMenu;
	module.exports = exports['default'];

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(8)['default'];
	
	var _classCallCheck = __webpack_require__(7)['default'];
	
	var _objectWithoutProperties = __webpack_require__(9)['default'];
	
	var _extends = __webpack_require__(3)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsBootstrapUtils = __webpack_require__(6);
	
	var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);
	
	var _reactPropTypesLibAll = __webpack_require__(65);
	
	var _reactPropTypesLibAll2 = _interopRequireDefault(_reactPropTypesLibAll);
	
	var _SafeAnchor = __webpack_require__(25);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var _utilsCreateChainedFunction = __webpack_require__(15);
	
	var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);
	
	var MenuItem = (function (_React$Component) {
	  _inherits(MenuItem, _React$Component);
	
	  function MenuItem(props) {
	    _classCallCheck(this, MenuItem);
	
	    _React$Component.call(this, props);
	
	    this.handleClick = this.handleClick.bind(this);
	  }
	
	  MenuItem.prototype.handleClick = function handleClick(event) {
	    if (!this.props.href || this.props.disabled) {
	      event.preventDefault();
	    }
	
	    if (this.props.disabled) {
	      return;
	    }
	
	    if (this.props.onSelect) {
	      this.props.onSelect(event, this.props.eventKey);
	    }
	  };
	
	  MenuItem.prototype.render = function render() {
	    var headerClass = _utilsBootstrapUtils2['default'].prefix(this.props, 'header');
	
	    if (this.props.divider) {
	      return _react2['default'].createElement('li', { role: 'separator', className: 'divider' });
	    }
	
	    if (this.props.header) {
	      return _react2['default'].createElement(
	        'li',
	        { role: 'heading', className: headerClass },
	        this.props.children
	      );
	    }
	
	    var _props = this.props;
	    var className = _props.className;
	    var style = _props.style;
	    var onClick = _props.onClick;
	
	    var props = _objectWithoutProperties(_props, ['className', 'style', 'onClick']);
	
	    var classes = {
	      disabled: this.props.disabled,
	      active: this.props.active
	    };
	
	    return _react2['default'].createElement(
	      'li',
	      { role: 'presentation',
	        className: _classnames2['default'](className, classes),
	        style: style
	      },
	      _react2['default'].createElement(_SafeAnchor2['default'], _extends({}, props, {
	        role: 'menuitem',
	        tabIndex: '-1',
	        onClick: _utilsCreateChainedFunction2['default'](onClick, this.handleClick)
	      }))
	    );
	  };
	
	  return MenuItem;
	})(_react2['default'].Component);
	
	MenuItem.propTypes = {
	  active: _react2['default'].PropTypes.bool,
	  disabled: _react2['default'].PropTypes.bool,
	  divider: _reactPropTypesLibAll2['default'](_react2['default'].PropTypes.bool, function (props) {
	    if (props.divider && props.children) {
	      return new Error('Children will not be rendered for dividers');
	    }
	  }),
	  eventKey: _react2['default'].PropTypes.any,
	  header: _react2['default'].PropTypes.bool,
	  href: _react2['default'].PropTypes.string,
	  target: _react2['default'].PropTypes.string,
	  title: _react2['default'].PropTypes.string,
	  onClick: _react2['default'].PropTypes.func,
	  onKeyDown: _react2['default'].PropTypes.func,
	  onSelect: _react2['default'].PropTypes.func,
	  id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])
	};
	
	MenuItem.defaultProps = {
	  divider: false,
	  disabled: false,
	  header: false
	};
	
	exports['default'] = _utilsBootstrapUtils.bsClass('dropdown', MenuItem);
	module.exports = exports['default'];

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	
	var _reactPropTypesLibCommon = __webpack_require__(46);
	
	var _childrenToArray = __webpack_require__(234);
	
	var _childrenToArray2 = _interopRequireDefault(_childrenToArray);
	
	exports['default'] = {
	
	  requiredRoles: function requiredRoles() {
	    for (var _len = arguments.length, roles = Array(_len), _key = 0; _key < _len; _key++) {
	      roles[_key] = arguments[_key];
	    }
	
	    return _reactPropTypesLibCommon.createChainableTypeChecker(function requiredRolesValidator(props, propName, component) {
	      var missing = undefined;
	      var children = _childrenToArray2['default'](props.children);
	
	      var inRole = function inRole(role, child) {
	        return role === child.props.bsRole;
	      };
	
	      roles.every(function (role) {
	        if (!children.some(function (child) {
	          return inRole(role, child);
	        })) {
	          missing = role;
	          return false;
	        }
	        return true;
	      });
	
	      if (missing) {
	        return new Error('(children) ' + component + ' - Missing a required child with bsRole: ' + missing + '. ' + (component + ' must have at least one child of each of the following bsRoles: ' + roles.join(', ')));
	      }
	    });
	  },
	
	  exclusiveRoles: function exclusiveRoles() {
	    for (var _len2 = arguments.length, roles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      roles[_key2] = arguments[_key2];
	    }
	
	    return _reactPropTypesLibCommon.createChainableTypeChecker(function exclusiveRolesValidator(props, propName, component) {
	      var children = _childrenToArray2['default'](props.children);
	      var duplicate = undefined;
	
	      roles.every(function (role) {
	        var childrenWithRole = children.filter(function (child) {
	          return child.props.bsRole === role;
	        });
	
	        if (childrenWithRole.length > 1) {
	          duplicate = role;
	          return false;
	        }
	        return true;
	      });
	
	      if (duplicate) {
	        return new Error('(children) ' + component + ' - Duplicate children detected of bsRole: ' + duplicate + '. ' + ('Only one child each allowed with the following bsRoles: ' + roles.join(', ')));
	      }
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	exports.__esModule = true;
	exports['default'] = childrenAsArray;
	
	var _ValidComponentChildren = __webpack_require__(12);
	
	var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);
	
	function childrenAsArray(children) {
	  var result = [];
	
	  if (children === undefined) {
	    return result;
	  }
	
	  _ValidComponentChildren2['default'].forEach(children, function (child) {
	    result.push(child);
	  });
	
	  return result;
	}
	
	module.exports = exports['default'];

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

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = createUncontrollable;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(76);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utils = __webpack_require__(238);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function createUncontrollable(mixins, set) {
	
	  return uncontrollable;
	
	  function uncontrollable(Component, controlledValues) {
	    var methods = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
	    var displayName = Component.displayName || Component.name || 'Component',
	        basePropTypes = utils.getType(Component).propTypes,
	        isCompositeComponent = utils.isReactComponent(Component),
	        propTypes;
	
	    propTypes = utils.uncontrolledPropTypes(controlledValues, basePropTypes, displayName);
	
	    (0, _invariant2.default)(isCompositeComponent || !methods.length, '[uncontrollable] stateless function components cannot pass through methods ' + 'becasue they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', '));
	    methods = utils.transform(methods, function (obj, method) {
	      obj[method] = function () {
	        var _refs$inner;
	
	        return (_refs$inner = this.refs.inner)[method].apply(_refs$inner, arguments);
	      };
	    }, {});
	
	    var component = _react2.default.createClass(_extends({
	
	      displayName: 'Uncontrolled(' + displayName + ')',
	
	      mixins: mixins,
	
	      propTypes: propTypes
	
	    }, methods, {
	      componentWillMount: function componentWillMount() {
	        var props = this.props,
	            keys = Object.keys(controlledValues);
	
	        this._values = utils.transform(keys, function (values, key) {
	          values[key] = props[utils.defaultKey(key)];
	        }, {});
	      },
	
	
	      /**
	       * If a prop switches from controlled to Uncontrolled
	       * reset its value to the defaultValue
	       */
	      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        var _this = this;
	
	        var props = this.props,
	            keys = Object.keys(controlledValues);
	
	        keys.forEach(function (key) {
	          if (utils.getValue(nextProps, key) === undefined && utils.getValue(props, key) !== undefined) {
	            _this._values[key] = nextProps[utils.defaultKey(key)];
	          }
	        });
	      },
	      render: function render() {
	        var _this2 = this;
	
	        var newProps = {};
	        var _props = this.props;
	        var valueLink = _props.valueLink;
	        var checkedLink = _props.checkedLink;
	
	        var props = _objectWithoutProperties(_props, ['valueLink', 'checkedLink']);
	
	        utils.each(controlledValues, function (handle, propName) {
	          var linkPropName = utils.getLinkName(propName),
	              prop = _this2.props[propName];
	
	          if (linkPropName && !isProp(_this2.props, propName) && isProp(_this2.props, linkPropName)) {
	            prop = _this2.props[linkPropName].value;
	          }
	
	          newProps[propName] = prop !== undefined ? prop : _this2._values[propName];
	
	          newProps[handle] = setAndNotify.bind(_this2, propName);
	        });
	
	        newProps = _extends({}, props, newProps, {
	          ref: isCompositeComponent ? 'inner' : null
	        });
	
	        return _react2.default.createElement(Component, newProps);
	      }
	    }));
	
	    component.ControlledComponent = Component;
	
	    /**
	     * useful when wrapping a Component and you want to control
	     * everything
	     */
	    component.deferControlTo = function (newComponent) {
	      var additions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var nextMethods = arguments[2];
	
	      return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
	    };
	
	    return component;
	
	    function setAndNotify(propName, value) {
	      var linkName = utils.getLinkName(propName),
	          handler = this.props[controlledValues[propName]];
	
	      if (linkName && isProp(this.props, linkName) && !handler) {
	        handler = this.props[linkName].requestChange;
	      }
	
	      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	      }
	
	      set(this, propName, handler, value, args);
	    }
	
	    function isProp(props, prop) {
	      return props[prop] !== undefined;
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.version = undefined;
	exports.customPropType = customPropType;
	exports.uncontrolledPropTypes = uncontrolledPropTypes;
	exports.getType = getType;
	exports.getValue = getValue;
	exports.getLinkName = getLinkName;
	exports.defaultKey = defaultKey;
	exports.chain = chain;
	exports.transform = transform;
	exports.each = each;
	exports.isReactComponent = isReactComponent;
	exports.has = has;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(76);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function customPropType(handler, propType, name) {
	
	  return function (props, propName) {
	
	    if (props[propName] !== undefined) {
	      if (!props[handler]) {
	        return new Error('You have provided a `' + propName + '` prop to ' + '`' + name + '` without an `' + handler + '` handler. This will render a read-only field. ' + 'If the field should be mutable use `' + defaultKey(propName) + '`. Otherwise, set `' + handler + '`');
	      }
	
	      return propType && propType(props, propName, name);
	    }
	  };
	}
	
	function uncontrolledPropTypes(controlledValues, basePropTypes, displayName) {
	  var propTypes = {};
	
	  if (false) {
	    transform(controlledValues, function (obj, handler, prop) {
	      var type = basePropTypes[prop];
	
	      (0, _invariant2.default)(typeof handler === 'string' && handler.trim().length, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop);
	
	      obj[prop] = customPropType(handler, type, displayName);
	
	      if (type !== undefined) obj[defaultKey(prop)] = type;
	    }, propTypes);
	  }
	
	  return propTypes;
	}
	
	var version = exports.version = _react2.default.version.split('.').map(parseFloat);
	
	function getType(component) {
	  if (version[0] >= 15 || version[0] === 0 && version[1] >= 13) return component;
	
	  return component.type;
	}
	
	function getValue(props, name) {
	  var linkPropName = getLinkName(name);
	
	  if (linkPropName && !isProp(props, name) && isProp(props, linkPropName)) return props[linkPropName].value;
	
	  return props[name];
	}
	
	function isProp(props, prop) {
	  return props[prop] !== undefined;
	}
	
	function getLinkName(name) {
	  return name === 'value' ? 'valueLink' : name === 'checked' ? 'checkedLink' : null;
	}
	
	function defaultKey(key) {
	  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
	}
	
	function chain(thisArg, a, b) {
	  return function chainedFunction() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    a && a.call.apply(a, [thisArg].concat(args));
	    b && b.call.apply(b, [thisArg].concat(args));
	  };
	}
	
	function transform(obj, cb, seed) {
	  each(obj, cb.bind(null, seed = seed || (Array.isArray(obj) ? [] : {})));
	  return seed;
	}
	
	function each(obj, cb, thisArg) {
	  if (Array.isArray(obj)) return obj.forEach(cb, thisArg);
	
	  for (var key in obj) {
	    if (has(obj, key)) cb.call(thisArg, obj[key], key, obj);
	  }
	}
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	function isReactComponent(component) {
	  return !!(component && component.prototype && component.prototype.isReactComponent);
	}
	
	function has(o, k) {
	  return o ? Object.prototype.hasOwnProperty.call(o, k) : false;
	}

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

/***/ 434:
/***/ function(module, exports) {

	module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=Array.isArray(n)?n:n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,y,d=t&s.G,h=t&s.P,v=d?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=d?o:o[n]||(o[n]={});d&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],y=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,y),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

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

/***/ 533:
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
	
	    _this.state = {
	      page: 1,
	      itemPerPage: 12,
	      search: ''
	    };
	    return _this;
	  }
	
	  _createClass(ModalSelectResource, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var searchIcon = _react2.default.createElement(_Glyphicon2.default, { glyph: 'search' });
	      var start = (this.state.page - 1) * this.state.itemPerPage;
	      var filteredResources = this.props.resources.filter(function (r) {
	        return r.nameCustom.indexOf(_this2.state.search) !== -1;
	      });
	      var resources = filteredResources.slice(start, start + this.state.itemPerPage).map(function (resource) {
	        var sImgPath = '/public/uploads/products/' + resource.idProduct + '/' + resource.name;
	        var resourceHtml = _react2.default.createElement('img', { src: sImgPath, alt: resource.nameCustom, style: { maxWidth: '100%', maxHeight: '100%', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, margin: 'auto' } });
	        if (resource.type.indexOf('image') === -1) {
	          resourceHtml = _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('img', { src: '/public/images/placeholders/resource.png', alt: resource.nameCustom, style: { height: '150', display: 'block', margin: '0 auto' } }),
	            _react2.default.createElement(
	              'p',
	              { style: { textAlign: 'center', fontWeight: 'bold' } },
	              resource.nameCustom
	            )
	          );
	        }
	
	        return _react2.default.createElement(
	          _Col2.default,
	          { ls: 2, md: 3, sm: 4, xs: 6, key: resource.id, onClick: function onClick() {
	              return _this2.props.onSelect(resource);
	            }, style: { height: 'auto', cursor: 'pointer', marginTop: 10, marginBottom: 10 } },
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
	      return _react2.default.createElement(
	        _Modal2.default,
	        { show: this.props.show, onHide: this.props.hide, bsSize: 'large' },
	        _react2.default.createElement(
	          _Modal2.default.Header,
	          null,
	          _react2.default.createElement(
	            _Col2.default,
	            { md: 6 },
	            _react2.default.createElement(
	              _Modal2.default.Title,
	              { style: { marginTop: 5 } },
	              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'select_resource' })
	            )
	          ),
	          _react2.default.createElement(
	            _Col2.default,
	            { md: 4, mdOffset: 2, style: { marginBottom: -15 } },
	            _react2.default.createElement(_Input2.default, { type: 'text', addonBefore: searchIcon, value: this.state.search, onChange: function onChange(evt) {
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
	            resources
	          )
	        ),
	        _react2.default.createElement(
	          _Modal2.default.Footer,
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: { textAlign: 'center', marginTop: -20, position: 'relative' } },
	            _react2.default.createElement(_Pagination2.default, { prev: true, next: true, items: Math.ceil(filteredResources.length / this.state.itemPerPage), maxButtons: 3,
	              activePage: this.state.page,
	              onSelect: function onSelect(evt, selected) {
	                return _this2.setState({ page: selected.eventKey });
	              },
	              style: { display: filteredResources.length > this.state.itemPerPage ? '' : 'none' }
	            }),
	            _react2.default.createElement(
	              _Button2.default,
	              { bsStyle: 'primary', onClick: this.props.hide, style: { position: 'absolute', right: 0, top: '50%', marginTop: -10 } },
	              'Close'
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
	  resources: _react2.default.PropTypes.array.isRequired
	}, _temp);
	
	
	var _components = { default: ModalSelectResource };
	
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

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp2;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMediumEditor = __webpack_require__(613);
	
	var _reactMediumEditor2 = _interopRequireDefault(_reactMediumEditor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	if (process.browser) {
	  __webpack_require__(618);
	  __webpack_require__(619);
	}
	
	var HtmlEditor = (_temp2 = _class = function (_React$Component) {
	  _inherits(HtmlEditor, _React$Component);
	
	  function HtmlEditor() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, HtmlEditor);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HtmlEditor.__proto__ || Object.getPrototypeOf(HtmlEditor)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (value) {
	      _this.props.onChange(value);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(HtmlEditor, [{
	    key: 'render',
	    value: function render() {
	      var options = {
	        placeholder: {
	          text: this.context.intl.formatMessage({ id: 'your_text_here' })
	        }
	      };
	      var props = _extends({}, this.props, { options: options });
	      if (!props.style.height) {
	        props.style.height = 'auto';
	      }
	      if (!props.text) {
	        props.text = props.value;
	      }
	      var editor = _react2.default.createElement(_reactMediumEditor2.default, props);
	      return editor;
	    }
	  }]);
	
	  return HtmlEditor;
	}(_react2.default.Component), _class.contextTypes = {
	  intl: _react2.default.PropTypes.object
	}, _class.defaultProps = {
	  style: { height: 'auto', minHeight: '185' },
	  className: 'form-control'
	}, _temp2);
	exports.default = HtmlEditor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(194)))

/***/ },

/***/ 594:
/***/ function(module, exports) {

	module.exports = function blacklist (src) {
	  var copy = {}
	  var filter = arguments[1]
	
	  if (typeof filter === 'string') {
	    filter = {}
	    for (var i = 1; i < arguments.length; i++) {
	      filter[arguments[i]] = true
	    }
	  }
	
	  for (var key in src) {
	    // blacklist?
	    if (filter[key]) continue
	
	    copy[key] = src[key]
	  }
	
	  return copy
	}


/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(409)();
	// imports
	
	
	// module
	exports.push([module.id, ".medium-editor-anchor-preview,.medium-editor-toolbar{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:16px;z-index:2000}@-webkit-keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(.97,0,0,1,0,12);transform:matrix(.97,0,0,1,0,12)}20%{opacity:.7;-webkit-transform:matrix(.99,0,0,1,0,2);transform:matrix(.99,0,0,1,0,2)}40%{opacity:1;-webkit-transform:matrix(1,0,0,1,0,-1);transform:matrix(1,0,0,1,0,-1)}100%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}}@keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(.97,0,0,1,0,12);transform:matrix(.97,0,0,1,0,12)}20%{opacity:.7;-webkit-transform:matrix(.99,0,0,1,0,2);transform:matrix(.99,0,0,1,0,2)}40%{opacity:1;-webkit-transform:matrix(1,0,0,1,0,-1);transform:matrix(1,0,0,1,0,-1)}100%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}}.medium-editor-anchor-preview{left:0;line-height:1.4;max-width:280px;position:absolute;text-align:center;top:0;word-break:break-all;word-wrap:break-word;visibility:hidden}.medium-editor-anchor-preview a{color:#fff;display:inline-block;margin:5px 5px 10px}.medium-editor-placeholder-relative:after,.medium-editor-placeholder:after{content:attr(data-placeholder)!important;white-space:pre;padding:inherit;margin:inherit;font-style:italic}.medium-editor-anchor-preview-active{visibility:visible}.medium-editor-dragover{background:#ddd}.medium-editor-image-loading{-webkit-animation:medium-editor-image-loading 1s infinite ease-in-out;animation:medium-editor-image-loading 1s infinite ease-in-out;background-color:#333;border-radius:100%;display:inline-block;height:40px;width:40px}.medium-editor-placeholder{position:relative}.medium-editor-placeholder:after{position:absolute;left:0;top:0}.medium-editor-placeholder-relative,.medium-editor-placeholder-relative:after{position:relative}.medium-toolbar-arrow-over:before,.medium-toolbar-arrow-under:after{border-style:solid;content:'';display:block;height:0;left:50%;margin-left:-8px;position:absolute;width:0}.medium-toolbar-arrow-under:after{border-width:8px 8px 0}.medium-toolbar-arrow-over:before{border-width:0 8px 8px;top:-8px}.medium-editor-toolbar{left:0;position:absolute;top:0;visibility:hidden}.medium-editor-toolbar ul{margin:0;padding:0}.medium-editor-toolbar li{float:left;list-style:none;margin:0;padding:0}.medium-editor-toolbar li button{box-sizing:border-box;cursor:pointer;display:block;font-size:14px;line-height:1.33;margin:0;padding:15px;text-decoration:none}.medium-editor-toolbar li button:focus{outline:0}.medium-editor-toolbar li .medium-editor-action-underline{text-decoration:underline}.medium-editor-toolbar li .medium-editor-action-pre{font-family:Consolas,\"Liberation Mono\",Menlo,Courier,monospace;font-size:12px;font-weight:100;padding:15px 0}.medium-editor-toolbar-active{visibility:visible}.medium-editor-sticky-toolbar{position:fixed;top:1px}.medium-editor-relative-toolbar{position:relative}.medium-editor-toolbar-active.medium-editor-stalker-toolbar{-webkit-animation:medium-editor-pop-upwards 160ms forwards linear;animation:medium-editor-pop-upwards 160ms forwards linear}.medium-editor-action-bold{font-weight:bolder}.medium-editor-action-italic{font-style:italic}.medium-editor-toolbar-form{display:none}.medium-editor-toolbar-form a,.medium-editor-toolbar-form input{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.medium-editor-toolbar-form .medium-editor-toolbar-form-row{line-height:14px;margin-left:5px;padding-bottom:5px}.medium-editor-toolbar-form .medium-editor-toolbar-input,.medium-editor-toolbar-form label{border:none;box-sizing:border-box;font-size:14px;margin:0;padding:6px;width:316px;display:inline-block}.medium-editor-toolbar-form .medium-editor-toolbar-input:focus,.medium-editor-toolbar-form label:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;outline:0}.medium-editor-toolbar-form a{display:inline-block;font-size:24px;font-weight:bolder;margin:0 10px;text-decoration:none}.medium-editor-toolbar-form-active{display:block}.medium-editor-toolbar-actions:after{clear:both;content:\"\";display:table}.medium-editor-element{word-wrap:break-word;min-height:30px}.medium-editor-element img{max-width:100%}.medium-editor-element sub{vertical-align:sub}.medium-editor-element sup{vertical-align:super}.medium-editor-hidden{display:none}", ""]);
	
	// exports


/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(409)();
	// imports
	
	
	// module
	exports.push([module.id, ".medium-toolbar-arrow-under:after{border-color:#242424 transparent transparent;top:50px}.medium-toolbar-arrow-over:before{border-color:transparent transparent #242424;top:-8px}.medium-editor-toolbar{background-color:#242424;background:-webkit-linear-gradient(top,#242424,rgba(36,36,36,.75));background:linear-gradient(to bottom,#242424,rgba(36,36,36,.75));border:1px solid #000;border-radius:5px;box-shadow:0 0 3px #000}.medium-editor-toolbar li button{background-color:#242424;background:-webkit-linear-gradient(top,#242424,rgba(36,36,36,.89));background:linear-gradient(to bottom,#242424,rgba(36,36,36,.89));border:0;border-right:1px solid #000;border-left:1px solid #333;border-left:1px solid rgba(255,255,255,.1);box-shadow:0 2px 2px rgba(0,0,0,.3);color:#fff;height:50px;min-width:50px;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in}.medium-editor-toolbar li button:hover{background-color:#000;color:#ff0}.medium-editor-toolbar li .medium-editor-button-first{border-bottom-left-radius:5px;border-top-left-radius:5px}.medium-editor-toolbar li .medium-editor-button-last{border-bottom-right-radius:5px;border-top-right-radius:5px}.medium-editor-toolbar li .medium-editor-button-active{background-color:#000;background:-webkit-linear-gradient(top,#242424,rgba(0,0,0,.89));background:linear-gradient(to bottom,#242424,rgba(0,0,0,.89));color:#fff}.medium-editor-toolbar-form{background:#242424;border-radius:5px;color:#999}.medium-editor-toolbar-form .medium-editor-toolbar-input{background:#242424;box-sizing:border-box;color:#ccc;height:50px}.medium-editor-toolbar-form a{color:#fff}.medium-editor-toolbar-anchor-preview{background:#242424;border-radius:5px;color:#fff}.medium-editor-placeholder:after{color:#b3b3b1}", ""]);
	
	// exports


/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/*global self, document, DOMException */
	
	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
	
	// Full polyfill for browsers with no classList support
	if (!("classList" in document.createElement("_"))) {
	  (function (view) {
	
	  "use strict";
	
	  if (!('Element' in view)) return;
	
	  var
	      classListProp = "classList"
	    , protoProp = "prototype"
	    , elemCtrProto = view.Element[protoProp]
	    , objCtr = Object
	    , strTrim = String[protoProp].trim || function () {
	      return this.replace(/^\s+|\s+$/g, "");
	    }
	    , arrIndexOf = Array[protoProp].indexOf || function (item) {
	      var
	          i = 0
	        , len = this.length
	      ;
	      for (; i < len; i++) {
	        if (i in this && this[i] === item) {
	          return i;
	        }
	      }
	      return -1;
	    }
	    // Vendors: please allow content code to instantiate DOMExceptions
	    , DOMEx = function (type, message) {
	      this.name = type;
	      this.code = DOMException[type];
	      this.message = message;
	    }
	    , checkTokenAndGetIndex = function (classList, token) {
	      if (token === "") {
	        throw new DOMEx(
	            "SYNTAX_ERR"
	          , "An invalid or illegal string was specified"
	        );
	      }
	      if (/\s/.test(token)) {
	        throw new DOMEx(
	            "INVALID_CHARACTER_ERR"
	          , "String contains an invalid character"
	        );
	      }
	      return arrIndexOf.call(classList, token);
	    }
	    , ClassList = function (elem) {
	      var
	          trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
	        , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	        , i = 0
	        , len = classes.length
	      ;
	      for (; i < len; i++) {
	        this.push(classes[i]);
	      }
	      this._updateClassName = function () {
	        elem.setAttribute("class", this.toString());
	      };
	    }
	    , classListProto = ClassList[protoProp] = []
	    , classListGetter = function () {
	      return new ClassList(this);
	    }
	  ;
	  // Most DOMException implementations don't allow calling DOMException's toString()
	  // on non-DOMExceptions. Error's toString() is sufficient here.
	  DOMEx[protoProp] = Error[protoProp];
	  classListProto.item = function (i) {
	    return this[i] || null;
	  };
	  classListProto.contains = function (token) {
	    token += "";
	    return checkTokenAndGetIndex(this, token) !== -1;
	  };
	  classListProto.add = function () {
	    var
	        tokens = arguments
	      , i = 0
	      , l = tokens.length
	      , token
	      , updated = false
	    ;
	    do {
	      token = tokens[i] + "";
	      if (checkTokenAndGetIndex(this, token) === -1) {
	        this.push(token);
	        updated = true;
	      }
	    }
	    while (++i < l);
	
	    if (updated) {
	      this._updateClassName();
	    }
	  };
	  classListProto.remove = function () {
	    var
	        tokens = arguments
	      , i = 0
	      , l = tokens.length
	      , token
	      , updated = false
	      , index
	    ;
	    do {
	      token = tokens[i] + "";
	      index = checkTokenAndGetIndex(this, token);
	      while (index !== -1) {
	        this.splice(index, 1);
	        updated = true;
	        index = checkTokenAndGetIndex(this, token);
	      }
	    }
	    while (++i < l);
	
	    if (updated) {
	      this._updateClassName();
	    }
	  };
	  classListProto.toggle = function (token, force) {
	    token += "";
	
	    var
	        result = this.contains(token)
	      , method = result ?
	        force !== true && "remove"
	      :
	        force !== false && "add"
	    ;
	
	    if (method) {
	      this[method](token);
	    }
	
	    if (force === true || force === false) {
	      return force;
	    } else {
	      return !result;
	    }
	  };
	  classListProto.toString = function () {
	    return this.join(" ");
	  };
	
	  if (objCtr.defineProperty) {
	    var classListPropDesc = {
	        get: classListGetter
	      , enumerable: true
	      , configurable: true
	    };
	    try {
	      objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	    } catch (ex) { // IE 8 doesn't support enumerable:true
	      if (ex.number === -0x7FF5EC54) {
	        classListPropDesc.enumerable = false;
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	      }
	    }
	  } else if (objCtr[protoProp].__defineGetter__) {
	    elemCtrProto.__defineGetter__(classListProp, classListGetter);
	  }
	
	  }(self));
	}
	
	/* Blob.js
	 * A Blob implementation.
	 * 2014-07-24
	 *
	 * By Eli Grey, http://eligrey.com
	 * By Devin Samarin, https://github.com/dsamarin
	 * License: X11/MIT
	 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md
	 */
	
	/*global self, unescape */
	/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
	  plusplus: true */
	
	/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */
	
	(function (view) {
	  "use strict";
	
	  view.URL = view.URL || view.webkitURL;
	
	  if (view.Blob && view.URL) {
	    try {
	      new Blob;
	      return;
	    } catch (e) {}
	  }
	
	  // Internally we use a BlobBuilder implementation to base Blob off of
	  // in order to support older browsers that only have BlobBuilder
	  var BlobBuilder = view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder || (function(view) {
	    var
	        get_class = function(object) {
	        return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
	      }
	      , FakeBlobBuilder = function BlobBuilder() {
	        this.data = [];
	      }
	      , FakeBlob = function Blob(data, type, encoding) {
	        this.data = data;
	        this.size = data.length;
	        this.type = type;
	        this.encoding = encoding;
	      }
	      , FBB_proto = FakeBlobBuilder.prototype
	      , FB_proto = FakeBlob.prototype
	      , FileReaderSync = view.FileReaderSync
	      , FileException = function(type) {
	        this.code = this[this.name = type];
	      }
	      , file_ex_codes = (
	          "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "
	        + "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR"
	      ).split(" ")
	      , file_ex_code = file_ex_codes.length
	      , real_URL = view.URL || view.webkitURL || view
	      , real_create_object_URL = real_URL.createObjectURL
	      , real_revoke_object_URL = real_URL.revokeObjectURL
	      , URL = real_URL
	      , btoa = view.btoa
	      , atob = view.atob
	
	      , ArrayBuffer = view.ArrayBuffer
	      , Uint8Array = view.Uint8Array
	
	      , origin = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/
	    ;
	    FakeBlob.fake = FB_proto.fake = true;
	    while (file_ex_code--) {
	      FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
	    }
	    // Polyfill URL
	    if (!real_URL.createObjectURL) {
	      URL = view.URL = function(uri) {
	        var
	            uri_info = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
	          , uri_origin
	        ;
	        uri_info.href = uri;
	        if (!("origin" in uri_info)) {
	          if (uri_info.protocol.toLowerCase() === "data:") {
	            uri_info.origin = null;
	          } else {
	            uri_origin = uri.match(origin);
	            uri_info.origin = uri_origin && uri_origin[1];
	          }
	        }
	        return uri_info;
	      };
	    }
	    URL.createObjectURL = function(blob) {
	      var
	          type = blob.type
	        , data_URI_header
	      ;
	      if (type === null) {
	        type = "application/octet-stream";
	      }
	      if (blob instanceof FakeBlob) {
	        data_URI_header = "data:" + type;
	        if (blob.encoding === "base64") {
	          return data_URI_header + ";base64," + blob.data;
	        } else if (blob.encoding === "URI") {
	          return data_URI_header + "," + decodeURIComponent(blob.data);
	        } if (btoa) {
	          return data_URI_header + ";base64," + btoa(blob.data);
	        } else {
	          return data_URI_header + "," + encodeURIComponent(blob.data);
	        }
	      } else if (real_create_object_URL) {
	        return real_create_object_URL.call(real_URL, blob);
	      }
	    };
	    URL.revokeObjectURL = function(object_URL) {
	      if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
	        real_revoke_object_URL.call(real_URL, object_URL);
	      }
	    };
	    FBB_proto.append = function(data/*, endings*/) {
	      var bb = this.data;
	      // decode data to a binary string
	      if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {
	        var
	            str = ""
	          , buf = new Uint8Array(data)
	          , i = 0
	          , buf_len = buf.length
	        ;
	        for (; i < buf_len; i++) {
	          str += String.fromCharCode(buf[i]);
	        }
	        bb.push(str);
	      } else if (get_class(data) === "Blob" || get_class(data) === "File") {
	        if (FileReaderSync) {
	          var fr = new FileReaderSync;
	          bb.push(fr.readAsBinaryString(data));
	        } else {
	          // async FileReader won't work as BlobBuilder is sync
	          throw new FileException("NOT_READABLE_ERR");
	        }
	      } else if (data instanceof FakeBlob) {
	        if (data.encoding === "base64" && atob) {
	          bb.push(atob(data.data));
	        } else if (data.encoding === "URI") {
	          bb.push(decodeURIComponent(data.data));
	        } else if (data.encoding === "raw") {
	          bb.push(data.data);
	        }
	      } else {
	        if (typeof data !== "string") {
	          data += ""; // convert unsupported types to strings
	        }
	        // decode UTF-16 to binary string
	        bb.push(unescape(encodeURIComponent(data)));
	      }
	    };
	    FBB_proto.getBlob = function(type) {
	      if (!arguments.length) {
	        type = null;
	      }
	      return new FakeBlob(this.data.join(""), type, "raw");
	    };
	    FBB_proto.toString = function() {
	      return "[object BlobBuilder]";
	    };
	    FB_proto.slice = function(start, end, type) {
	      var args = arguments.length;
	      if (args < 3) {
	        type = null;
	      }
	      return new FakeBlob(
	          this.data.slice(start, args > 1 ? end : this.data.length)
	        , type
	        , this.encoding
	      );
	    };
	    FB_proto.toString = function() {
	      return "[object Blob]";
	    };
	    FB_proto.close = function() {
	      this.size = 0;
	      delete this.data;
	    };
	    return FakeBlobBuilder;
	  }(view));
	
	  view.Blob = function(blobParts, options) {
	    var type = options ? (options.type || "") : "";
	    var builder = new BlobBuilder();
	    if (blobParts) {
	      for (var i = 0, len = blobParts.length; i < len; i++) {
	        if (Uint8Array && blobParts[i] instanceof Uint8Array) {
	          builder.append(blobParts[i].buffer);
	        }
	        else {
	          builder.append(blobParts[i]);
	        }
	      }
	    }
	    var blob = builder.getBlob(type);
	    if (!blob.slice && blob.webkitSlice) {
	      blob.slice = blob.webkitSlice;
	    }
	    return blob;
	  };
	
	  var getPrototypeOf = Object.getPrototypeOf || function(object) {
	    return object.__proto__;
	  };
	  view.Blob.prototype = getPrototypeOf(new view.Blob());
	}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content || this));
	
	(function (root, factory) {
	    'use strict';
	    var isElectron = typeof module === 'object' && typeof process !== 'undefined' && process && process.versions && process.versions.electron;
	    if (!isElectron && typeof module === 'object') {
	        module.exports = factory;
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return factory;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        root.MediumEditor = factory;
	    }
	}(this, function () {
	
	    'use strict';
	
	function MediumEditor(elements, options) {
	    'use strict';
	    return this.init(elements, options);
	}
	
	MediumEditor.extensions = {};
	/*jshint unused: true */
	(function (window) {
	    'use strict';
	
	    function copyInto(overwrite, dest) {
	        var prop,
	            sources = Array.prototype.slice.call(arguments, 2);
	        dest = dest || {};
	        for (var i = 0; i < sources.length; i++) {
	            var source = sources[i];
	            if (source) {
	                for (prop in source) {
	                    if (source.hasOwnProperty(prop) &&
	                        typeof source[prop] !== 'undefined' &&
	                        (overwrite || dest.hasOwnProperty(prop) === false)) {
	                        dest[prop] = source[prop];
	                    }
	                }
	            }
	        }
	        return dest;
	    }
	
	    // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
	    // Some browsers (including phantom) don't return true for Node.contains(child)
	    // if child is a text node.  Detect these cases here and use a fallback
	    // for calls to Util.isDescendant()
	    var nodeContainsWorksWithTextNodes = false;
	    try {
	        var testParent = document.createElement('div'),
	            testText = document.createTextNode(' ');
	        testParent.appendChild(testText);
	        nodeContainsWorksWithTextNodes = testParent.contains(testText);
	    } catch (exc) {}
	
	    var Util = {
	
	        // http://stackoverflow.com/questions/17907445/how-to-detect-ie11#comment30165888_17907562
	        // by rg89
	        isIE: ((navigator.appName === 'Microsoft Internet Explorer') || ((navigator.appName === 'Netscape') && (new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})').exec(navigator.userAgent) !== null))),
	
	        isEdge: (/Edge\/\d+/).exec(navigator.userAgent) !== null,
	
	        // if firefox
	        isFF: (navigator.userAgent.toLowerCase().indexOf('firefox') > -1),
	
	        // http://stackoverflow.com/a/11752084/569101
	        isMac: (window.navigator.platform.toUpperCase().indexOf('MAC') >= 0),
	
	        // https://github.com/jashkenas/underscore
	        // Lonely letter MUST USE the uppercase code
	        keyCode: {
	            BACKSPACE: 8,
	            TAB: 9,
	            ENTER: 13,
	            ESCAPE: 27,
	            SPACE: 32,
	            DELETE: 46,
	            K: 75, // K keycode, and not k
	            M: 77,
	            V: 86
	        },
	
	        /**
	         * Returns true if it's metaKey on Mac, or ctrlKey on non-Mac.
	         * See #591
	         */
	        isMetaCtrlKey: function (event) {
	            if ((Util.isMac && event.metaKey) || (!Util.isMac && event.ctrlKey)) {
	                return true;
	            }
	
	            return false;
	        },
	
	        /**
	         * Returns true if the key associated to the event is inside keys array
	         *
	         * @see : https://github.com/jquery/jquery/blob/0705be475092aede1eddae01319ec931fb9c65fc/src/event.js#L473-L484
	         * @see : http://stackoverflow.com/q/4471582/569101
	         */
	        isKey: function (event, keys) {
	            var keyCode = Util.getKeyCode(event);
	
	            // it's not an array let's just compare strings!
	            if (false === Array.isArray(keys)) {
	                return keyCode === keys;
	            }
	
	            if (-1 === keys.indexOf(keyCode)) {
	                return false;
	            }
	
	            return true;
	        },
	
	        getKeyCode: function (event) {
	            var keyCode = event.which;
	
	            // getting the key code from event
	            if (null === keyCode) {
	                keyCode = event.charCode !== null ? event.charCode : event.keyCode;
	            }
	
	            return keyCode;
	        },
	
	        blockContainerElementNames: [
	            // elements our editor generates
	            'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'ul', 'li', 'ol',
	            // all other known block elements
	            'address', 'article', 'aside', 'audio', 'canvas', 'dd', 'dl', 'dt', 'fieldset',
	            'figcaption', 'figure', 'footer', 'form', 'header', 'hgroup', 'main', 'nav',
	            'noscript', 'output', 'section', 'video',
	            'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td'
	        ],
	
	        emptyElementNames: ['br', 'col', 'colgroup', 'hr', 'img', 'input', 'source', 'wbr'],
	
	        extend: function extend(/* dest, source1, source2, ...*/) {
	            var args = [true].concat(Array.prototype.slice.call(arguments));
	            return copyInto.apply(this, args);
	        },
	
	        defaults: function defaults(/*dest, source1, source2, ...*/) {
	            var args = [false].concat(Array.prototype.slice.call(arguments));
	            return copyInto.apply(this, args);
	        },
	
	        /*
	         * Create a link around the provided text nodes which must be adjacent to each other and all be
	         * descendants of the same closest block container. If the preconditions are not met, unexpected
	         * behavior will result.
	         */
	        createLink: function (document, textNodes, href, target) {
	            var anchor = document.createElement('a');
	            Util.moveTextRangeIntoElement(textNodes[0], textNodes[textNodes.length - 1], anchor);
	            anchor.setAttribute('href', href);
	            if (target) {
	                anchor.setAttribute('target', target);
	            }
	            return anchor;
	        },
	
	        /*
	         * Given the provided match in the format {start: 1, end: 2} where start and end are indices into the
	         * textContent of the provided element argument, modify the DOM inside element to ensure that the text
	         * identified by the provided match can be returned as text nodes that contain exactly that text, without
	         * any additional text at the beginning or end of the returned array of adjacent text nodes.
	         *
	         * The only DOM manipulation performed by this function is splitting the text nodes, non-text nodes are
	         * not affected in any way.
	         */
	        findOrCreateMatchingTextNodes: function (document, element, match) {
	            var treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ALL, null, false),
	                matchedNodes = [],
	                currentTextIndex = 0,
	                startReached = false,
	                currentNode = null,
	                newNode = null;
	
	            while ((currentNode = treeWalker.nextNode()) !== null) {
	                if (currentNode.nodeType > 3) {
	                    continue;
	                } else if (currentNode.nodeType === 3) {
	                    if (!startReached && match.start < (currentTextIndex + currentNode.nodeValue.length)) {
	                        startReached = true;
	                        newNode = Util.splitStartNodeIfNeeded(currentNode, match.start, currentTextIndex);
	                    }
	                    if (startReached) {
	                        Util.splitEndNodeIfNeeded(currentNode, newNode, match.end, currentTextIndex);
	                    }
	                    if (startReached && currentTextIndex === match.end) {
	                        break; // Found the node(s) corresponding to the link. Break out and move on to the next.
	                    } else if (startReached && currentTextIndex > (match.end + 1)) {
	                        throw new Error('PerformLinking overshot the target!'); // should never happen...
	                    }
	
	                    if (startReached) {
	                        matchedNodes.push(newNode || currentNode);
	                    }
	
	                    currentTextIndex += currentNode.nodeValue.length;
	                    if (newNode !== null) {
	                        currentTextIndex += newNode.nodeValue.length;
	                        // Skip the newNode as we'll already have pushed it to the matches
	                        treeWalker.nextNode();
	                    }
	                    newNode = null;
	                } else if (currentNode.tagName.toLowerCase() === 'img') {
	                    if (!startReached && (match.start <= currentTextIndex)) {
	                        startReached = true;
	                    }
	                    if (startReached) {
	                        matchedNodes.push(currentNode);
	                    }
	                }
	            }
	            return matchedNodes;
	        },
	
	        /*
	         * Given the provided text node and text coordinates, split the text node if needed to make it align
	         * precisely with the coordinates.
	         *
	         * This function is intended to be called from Util.findOrCreateMatchingTextNodes.
	         */
	        splitStartNodeIfNeeded: function (currentNode, matchStartIndex, currentTextIndex) {
	            if (matchStartIndex !== currentTextIndex) {
	                return currentNode.splitText(matchStartIndex - currentTextIndex);
	            }
	            return null;
	        },
	
	        /*
	         * Given the provided text node and text coordinates, split the text node if needed to make it align
	         * precisely with the coordinates. The newNode argument should from the result of Util.splitStartNodeIfNeeded,
	         * if that function has been called on the same currentNode.
	         *
	         * This function is intended to be called from Util.findOrCreateMatchingTextNodes.
	         */
	        splitEndNodeIfNeeded: function (currentNode, newNode, matchEndIndex, currentTextIndex) {
	            var textIndexOfEndOfFarthestNode,
	                endSplitPoint;
	            textIndexOfEndOfFarthestNode = currentTextIndex + currentNode.nodeValue.length +
	                    (newNode ? newNode.nodeValue.length : 0) - 1;
	            endSplitPoint = matchEndIndex - currentTextIndex -
	                    (newNode ? currentNode.nodeValue.length : 0);
	            if (textIndexOfEndOfFarthestNode >= matchEndIndex &&
	                    currentTextIndex !== textIndexOfEndOfFarthestNode &&
	                    endSplitPoint !== 0) {
	                (newNode || currentNode).splitText(endSplitPoint);
	            }
	        },
	
	        /*
	        * Take an element, and break up all of its text content into unique pieces such that:
	         * 1) All text content of the elements are in separate blocks. No piece of text content should span
	         *    across multiple blocks. This means no element return by this function should have
	         *    any blocks as children.
	         * 2) The union of the textcontent of all of the elements returned here covers all
	         *    of the text within the element.
	         *
	         *
	         * EXAMPLE:
	         * In the event that we have something like:
	         *
	         * <blockquote>
	         *   <p>Some Text</p>
	         *   <ol>
	         *     <li>List Item 1</li>
	         *     <li>List Item 2</li>
	         *   </ol>
	         * </blockquote>
	         *
	         * This function would return these elements as an array:
	         *   [ <p>Some Text</p>, <li>List Item 1</li>, <li>List Item 2</li> ]
	         *
	         * Since the <blockquote> and <ol> elements contain blocks within them they are not returned.
	         * Since the <p> and <li>'s don't contain block elements and cover all the text content of the
	         * <blockquote> container, they are the elements returned.
	         */
	        splitByBlockElements: function (element) {
	            if (element.nodeType !== 3 && element.nodeType !== 1) {
	                return [];
	            }
	
	            var toRet = [],
	                blockElementQuery = MediumEditor.util.blockContainerElementNames.join(',');
	
	            if (element.nodeType === 3 || element.querySelectorAll(blockElementQuery).length === 0) {
	                return [element];
	            }
	
	            for (var i = 0; i < element.childNodes.length; i++) {
	                var child = element.childNodes[i];
	                if (child.nodeType === 3) {
	                    toRet.push(child);
	                } else if (child.nodeType === 1) {
	                    var blockElements = child.querySelectorAll(blockElementQuery);
	                    if (blockElements.length === 0) {
	                        toRet.push(child);
	                    } else {
	                        toRet = toRet.concat(MediumEditor.util.splitByBlockElements(child));
	                    }
	                }
	            }
	
	            return toRet;
	        },
	
	        // Find the next node in the DOM tree that represents any text that is being
	        // displayed directly next to the targetNode (passed as an argument)
	        // Text that appears directly next to the current node can be:
	        //  - A sibling text node
	        //  - A descendant of a sibling element
	        //  - A sibling text node of an ancestor
	        //  - A descendant of a sibling element of an ancestor
	        findAdjacentTextNodeWithContent: function findAdjacentTextNodeWithContent(rootNode, targetNode, ownerDocument) {
	            var pastTarget = false,
	                nextNode,
	                nodeIterator = ownerDocument.createNodeIterator(rootNode, NodeFilter.SHOW_TEXT, null, false);
	
	            // Use a native NodeIterator to iterate over all the text nodes that are descendants
	            // of the rootNode.  Once past the targetNode, choose the first non-empty text node
	            nextNode = nodeIterator.nextNode();
	            while (nextNode) {
	                if (nextNode === targetNode) {
	                    pastTarget = true;
	                } else if (pastTarget) {
	                    if (nextNode.nodeType === 3 && nextNode.nodeValue && nextNode.nodeValue.trim().length > 0) {
	                        break;
	                    }
	                }
	                nextNode = nodeIterator.nextNode();
	            }
	
	            return nextNode;
	        },
	
	        // Find an element's previous sibling within a medium-editor element
	        // If one doesn't exist, find the closest ancestor's previous sibling
	        findPreviousSibling: function (node) {
	            if (!node || Util.isMediumEditorElement(node)) {
	                return false;
	            }
	
	            var previousSibling = node.previousSibling;
	            while (!previousSibling && !Util.isMediumEditorElement(node.parentNode)) {
	                node = node.parentNode;
	                previousSibling = node.previousSibling;
	            }
	
	            return previousSibling;
	        },
	
	        isDescendant: function isDescendant(parent, child, checkEquality) {
	            if (!parent || !child) {
	                return false;
	            }
	            if (parent === child) {
	                return !!checkEquality;
	            }
	            // If parent is not an element, it can't have any descendants
	            if (parent.nodeType !== 1) {
	                return false;
	            }
	            if (nodeContainsWorksWithTextNodes || child.nodeType !== 3) {
	                return parent.contains(child);
	            }
	            var node = child.parentNode;
	            while (node !== null) {
	                if (node === parent) {
	                    return true;
	                }
	                node = node.parentNode;
	            }
	            return false;
	        },
	
	        // https://github.com/jashkenas/underscore
	        isElement: function isElement(obj) {
	            return !!(obj && obj.nodeType === 1);
	        },
	
	        // https://github.com/jashkenas/underscore
	        throttle: function (func, wait) {
	            var THROTTLE_INTERVAL = 50,
	                context,
	                args,
	                result,
	                timeout = null,
	                previous = 0,
	                later = function () {
	                    previous = Date.now();
	                    timeout = null;
	                    result = func.apply(context, args);
	                    if (!timeout) {
	                        context = args = null;
	                    }
	                };
	
	            if (!wait && wait !== 0) {
	                wait = THROTTLE_INTERVAL;
	            }
	
	            return function () {
	                var now = Date.now(),
	                    remaining = wait - (now - previous);
	
	                context = this;
	                args = arguments;
	                if (remaining <= 0 || remaining > wait) {
	                    if (timeout) {
	                        clearTimeout(timeout);
	                        timeout = null;
	                    }
	                    previous = now;
	                    result = func.apply(context, args);
	                    if (!timeout) {
	                        context = args = null;
	                    }
	                } else if (!timeout) {
	                    timeout = setTimeout(later, remaining);
	                }
	                return result;
	            };
	        },
	
	        traverseUp: function (current, testElementFunction) {
	            if (!current) {
	                return false;
	            }
	
	            do {
	                if (current.nodeType === 1) {
	                    if (testElementFunction(current)) {
	                        return current;
	                    }
	                    // do not traverse upwards past the nearest containing editor
	                    if (Util.isMediumEditorElement(current)) {
	                        return false;
	                    }
	                }
	
	                current = current.parentNode;
	            } while (current);
	
	            return false;
	        },
	
	        htmlEntities: function (str) {
	            // converts special characters (like <) into their escaped/encoded values (like &lt;).
	            // This allows you to show to display the string without the browser reading it as HTML.
	            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	        },
	
	        // http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div
	        insertHTMLCommand: function (doc, html) {
	            var selection, range, el, fragment, node, lastNode, toReplace,
	                res = false,
	                ecArgs = ['insertHTML', false, html];
	
	            /* Edge's implementation of insertHTML is just buggy right now:
	             * - Doesn't allow leading white space at the beginning of an element
	             * - Found a case when a <font size="2"> tag was inserted when calling alignCenter inside a blockquote
	             *
	             * There are likely other bugs, these are just the ones we found so far.
	             * For now, let's just use the same fallback we did for IE
	             */
	            if (!MediumEditor.util.isEdge && doc.queryCommandSupported('insertHTML')) {
	                try {
	                    return doc.execCommand.apply(doc, ecArgs);
	                } catch (ignore) {}
	            }
	
	            selection = doc.getSelection();
	            if (selection.rangeCount) {
	                range = selection.getRangeAt(0);
	                toReplace = range.commonAncestorContainer;
	
	                // https://github.com/yabwe/medium-editor/issues/748
	                // If the selection is an empty editor element, create a temporary text node inside of the editor
	                // and select it so that we don't delete the editor element
	                if (Util.isMediumEditorElement(toReplace) && !toReplace.firstChild) {
	                    range.selectNode(toReplace.appendChild(doc.createTextNode('')));
	                } else if ((toReplace.nodeType === 3 && range.startOffset === 0 && range.endOffset === toReplace.nodeValue.length) ||
	                        (toReplace.nodeType !== 3 && toReplace.innerHTML === range.toString())) {
	                    // Ensure range covers maximum amount of nodes as possible
	                    // By moving up the DOM and selecting ancestors whose only child is the range
	                    while (!Util.isMediumEditorElement(toReplace) &&
	                            toReplace.parentNode &&
	                            toReplace.parentNode.childNodes.length === 1 &&
	                            !Util.isMediumEditorElement(toReplace.parentNode)) {
	                        toReplace = toReplace.parentNode;
	                    }
	                    range.selectNode(toReplace);
	                }
	                range.deleteContents();
	
	                el = doc.createElement('div');
	                el.innerHTML = html;
	                fragment = doc.createDocumentFragment();
	                while (el.firstChild) {
	                    node = el.firstChild;
	                    lastNode = fragment.appendChild(node);
	                }
	                range.insertNode(fragment);
	
	                // Preserve the selection:
	                if (lastNode) {
	                    range = range.cloneRange();
	                    range.setStartAfter(lastNode);
	                    range.collapse(true);
	                    MediumEditor.selection.selectRange(doc, range);
	                }
	                res = true;
	            }
	
	            // https://github.com/yabwe/medium-editor/issues/992
	            // If we're monitoring calls to execCommand, notify listeners as if a real call had happened
	            if (doc.execCommand.callListeners) {
	                doc.execCommand.callListeners(ecArgs, res);
	            }
	            return res;
	        },
	
	        execFormatBlock: function (doc, tagName) {
	            // Get the top level block element that contains the selection
	            var blockContainer = Util.getTopBlockContainer(MediumEditor.selection.getSelectionStart(doc)),
	                childNodes;
	
	            // Special handling for blockquote
	            if (tagName === 'blockquote') {
	                if (blockContainer) {
	                    childNodes = Array.prototype.slice.call(blockContainer.childNodes);
	                    // Check if the blockquote has a block element as a child (nested blocks)
	                    if (childNodes.some(function (childNode) {
	                        return Util.isBlockContainer(childNode);
	                    })) {
	                        // FF handles blockquote differently on formatBlock
	                        // allowing nesting, we need to use outdent
	                        // https://developer.mozilla.org/en-US/docs/Rich-Text_Editing_in_Mozilla
	                        return doc.execCommand('outdent', false, null);
	                    }
	                }
	
	                // When IE blockquote needs to be called as indent
	                // http://stackoverflow.com/questions/1816223/rich-text-editor-with-blockquote-function/1821777#1821777
	                if (Util.isIE) {
	                    return doc.execCommand('indent', false, tagName);
	                }
	            }
	
	            // If the blockContainer is already the element type being passed in
	            // treat it as 'undo' formatting and just convert it to a <p>
	            if (blockContainer && tagName === blockContainer.nodeName.toLowerCase()) {
	                tagName = 'p';
	            }
	
	            // When IE we need to add <> to heading elements
	            // http://stackoverflow.com/questions/10741831/execcommand-formatblock-headings-in-ie
	            if (Util.isIE) {
	                tagName = '<' + tagName + '>';
	            }
	
	            // When FF, IE and Edge, we have to handle blockquote node seperately as 'formatblock' does not work.
	            // https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Commands
	            if (blockContainer && blockContainer.nodeName.toLowerCase() === 'blockquote') {
	                // For IE, just use outdent
	                if (Util.isIE && tagName === '<p>') {
	                    return doc.execCommand('outdent', false, tagName);
	                }
	
	                // For Firefox and Edge, make sure there's a nested block element before calling outdent
	                if ((Util.isFF || Util.isEdge) && tagName === 'p') {
	                    childNodes = Array.prototype.slice.call(blockContainer.childNodes);
	                    // If there are some non-block elements we need to wrap everything in a <p> before we outdent
	                    if (childNodes.some(function (childNode) {
	                        return !Util.isBlockContainer(childNode);
	                    })) {
	                        doc.execCommand('formatBlock', false, tagName);
	                    }
	                    return doc.execCommand('outdent', false, tagName);
	                }
	            }
	
	            return doc.execCommand('formatBlock', false, tagName);
	        },
	
	        /**
	         * Set target to blank on the given el element
	         *
	         * TODO: not sure if this should be here
	         *
	         * When creating a link (using core -> createLink) the selection returned by Firefox will be the parent of the created link
	         * instead of the created link itself (as it is for Chrome for example), so we retrieve all "a" children to grab the good one by
	         * using `anchorUrl` to ensure that we are adding target="_blank" on the good one.
	         * This isn't a bulletproof solution anyway ..
	         */
	        setTargetBlank: function (el, anchorUrl) {
	            var i, url = anchorUrl || false;
	            if (el.nodeName.toLowerCase() === 'a') {
	                el.target = '_blank';
	            } else {
	                el = el.getElementsByTagName('a');
	
	                for (i = 0; i < el.length; i += 1) {
	                    if (false === url || url === el[i].attributes.href.value) {
	                        el[i].target = '_blank';
	                    }
	                }
	            }
	        },
	
	        /*
	         * this function is called to explicitly remove the target='_blank' as FF holds on to _blank value even
	         * after unchecking the checkbox on anchor form
	         */
	        removeTargetBlank: function (el, anchorUrl) {
	            var i;
	            if (el.nodeName.toLowerCase() === 'a') {
	                el.removeAttribute('target');
	            } else {
	                el = el.getElementsByTagName('a');
	
	                for (i = 0; i < el.length; i += 1) {
	                    if (anchorUrl === el[i].attributes.href.value) {
	                        el[i].removeAttribute('target');
	                    }
	                }
	            }
	        },
	
	        addClassToAnchors: function (el, buttonClass) {
	            var classes = buttonClass.split(' '),
	                i,
	                j;
	            if (el.nodeName.toLowerCase() === 'a') {
	                for (j = 0; j < classes.length; j += 1) {
	                    el.classList.add(classes[j]);
	                }
	            } else {
	                el = el.getElementsByTagName('a');
	                for (i = 0; i < el.length; i += 1) {
	                    for (j = 0; j < classes.length; j += 1) {
	                        el[i].classList.add(classes[j]);
	                    }
	                }
	            }
	        },
	
	        isListItem: function (node) {
	            if (!node) {
	                return false;
	            }
	            if (node.nodeName.toLowerCase() === 'li') {
	                return true;
	            }
	
	            var parentNode = node.parentNode,
	                tagName = parentNode.nodeName.toLowerCase();
	            while (tagName === 'li' || (!Util.isBlockContainer(parentNode) && tagName !== 'div')) {
	                if (tagName === 'li') {
	                    return true;
	                }
	                parentNode = parentNode.parentNode;
	                if (parentNode) {
	                    tagName = parentNode.nodeName.toLowerCase();
	                } else {
	                    return false;
	                }
	            }
	            return false;
	        },
	
	        cleanListDOM: function (ownerDocument, element) {
	            if (element.nodeName.toLowerCase() !== 'li') {
	                return;
	            }
	
	            var list = element.parentElement;
	
	            if (list.parentElement.nodeName.toLowerCase() === 'p') { // yes we need to clean up
	                Util.unwrap(list.parentElement, ownerDocument);
	
	                // move cursor at the end of the text inside the list
	                // for some unknown reason, the cursor is moved to end of the "visual" line
	                MediumEditor.selection.moveCursor(ownerDocument, element.firstChild, element.firstChild.textContent.length);
	            }
	        },
	
	        /* splitDOMTree
	         *
	         * Given a root element some descendant element, split the root element
	         * into its own element containing the descendant element and all elements
	         * on the left or right side of the descendant ('right' is default)
	         *
	         * example:
	         *
	         *         <div>
	         *      /    |   \
	         *  <span> <span> <span>
	         *   / \    / \    / \
	         *  1   2  3   4  5   6
	         *
	         *  If I wanted to split this tree given the <div> as the root and "4" as the leaf
	         *  the result would be (the prime ' marks indicates nodes that are created as clones):
	         *
	         *   SPLITTING OFF 'RIGHT' TREE       SPLITTING OFF 'LEFT' TREE
	         *
	         *     <div>            <div>'              <div>'      <div>
	         *      / \              / \                 / \          |
	         * <span> <span>   <span>' <span>       <span> <span>   <span>
	         *   / \    |        |      / \           /\     /\       /\
	         *  1   2   3        4     5   6         1  2   3  4     5  6
	         *
	         *  The above example represents splitting off the 'right' or 'left' part of a tree, where
	         *  the <div>' would be returned as an element not appended to the DOM, and the <div>
	         *  would remain in place where it was
	         *
	        */
	        splitOffDOMTree: function (rootNode, leafNode, splitLeft) {
	            var splitOnNode = leafNode,
	                createdNode = null,
	                splitRight = !splitLeft;
	
	            // loop until we hit the root
	            while (splitOnNode !== rootNode) {
	                var currParent = splitOnNode.parentNode,
	                    newParent = currParent.cloneNode(false),
	                    targetNode = (splitRight ? splitOnNode : currParent.firstChild),
	                    appendLast;
	
	                // Create a new parent element which is a clone of the current parent
	                if (createdNode) {
	                    if (splitRight) {
	                        // If we're splitting right, add previous created element before siblings
	                        newParent.appendChild(createdNode);
	                    } else {
	                        // If we're splitting left, add previous created element last
	                        appendLast = createdNode;
	                    }
	                }
	                createdNode = newParent;
	
	                while (targetNode) {
	                    var sibling = targetNode.nextSibling;
	                    // Special handling for the 'splitNode'
	                    if (targetNode === splitOnNode) {
	                        if (!targetNode.hasChildNodes()) {
	                            targetNode.parentNode.removeChild(targetNode);
	                        } else {
	                            // For the node we're splitting on, if it has children, we need to clone it
	                            // and not just move it
	                            targetNode = targetNode.cloneNode(false);
	                        }
	                        // If the resulting split node has content, add it
	                        if (targetNode.textContent) {
	                            createdNode.appendChild(targetNode);
	                        }
	
	                        targetNode = (splitRight ? sibling : null);
	                    } else {
	                        // For general case, just remove the element and only
	                        // add it to the split tree if it contains something
	                        targetNode.parentNode.removeChild(targetNode);
	                        if (targetNode.hasChildNodes() || targetNode.textContent) {
	                            createdNode.appendChild(targetNode);
	                        }
	
	                        targetNode = sibling;
	                    }
	                }
	
	                // If we had an element we wanted to append at the end, do that now
	                if (appendLast) {
	                    createdNode.appendChild(appendLast);
	                }
	
	                splitOnNode = currParent;
	            }
	
	            return createdNode;
	        },
	
	        moveTextRangeIntoElement: function (startNode, endNode, newElement) {
	            if (!startNode || !endNode) {
	                return false;
	            }
	
	            var rootNode = Util.findCommonRoot(startNode, endNode);
	            if (!rootNode) {
	                return false;
	            }
	
	            if (endNode === startNode) {
	                var temp = startNode.parentNode,
	                    sibling = startNode.nextSibling;
	                temp.removeChild(startNode);
	                newElement.appendChild(startNode);
	                if (sibling) {
	                    temp.insertBefore(newElement, sibling);
	                } else {
	                    temp.appendChild(newElement);
	                }
	                return newElement.hasChildNodes();
	            }
	
	            // create rootChildren array which includes all the children
	            // we care about
	            var rootChildren = [],
	                firstChild,
	                lastChild,
	                nextNode;
	            for (var i = 0; i < rootNode.childNodes.length; i++) {
	                nextNode = rootNode.childNodes[i];
	                if (!firstChild) {
	                    if (Util.isDescendant(nextNode, startNode, true)) {
	                        firstChild = nextNode;
	                    }
	                } else {
	                    if (Util.isDescendant(nextNode, endNode, true)) {
	                        lastChild = nextNode;
	                        break;
	                    } else {
	                        rootChildren.push(nextNode);
	                    }
	                }
	            }
	
	            var afterLast = lastChild.nextSibling,
	                fragment = rootNode.ownerDocument.createDocumentFragment();
	
	            // build up fragment on startNode side of tree
	            if (firstChild === startNode) {
	                firstChild.parentNode.removeChild(firstChild);
	                fragment.appendChild(firstChild);
	            } else {
	                fragment.appendChild(Util.splitOffDOMTree(firstChild, startNode));
	            }
	
	            // add any elements between firstChild & lastChild
	            rootChildren.forEach(function (element) {
	                element.parentNode.removeChild(element);
	                fragment.appendChild(element);
	            });
	
	            // build up fragment on endNode side of the tree
	            if (lastChild === endNode) {
	                lastChild.parentNode.removeChild(lastChild);
	                fragment.appendChild(lastChild);
	            } else {
	                fragment.appendChild(Util.splitOffDOMTree(lastChild, endNode, true));
	            }
	
	            // Add fragment into passed in element
	            newElement.appendChild(fragment);
	
	            if (lastChild.parentNode === rootNode) {
	                // If last child is in the root, insert newElement in front of it
	                rootNode.insertBefore(newElement, lastChild);
	            } else if (afterLast) {
	                // If last child was removed, but it had a sibling, insert in front of it
	                rootNode.insertBefore(newElement, afterLast);
	            } else {
	                // lastChild was removed and was the last actual element just append
	                rootNode.appendChild(newElement);
	            }
	
	            return newElement.hasChildNodes();
	        },
	
	        /* based on http://stackoverflow.com/a/6183069 */
	        depthOfNode: function (inNode) {
	            var theDepth = 0,
	                node = inNode;
	            while (node.parentNode !== null) {
	                node = node.parentNode;
	                theDepth++;
	            }
	            return theDepth;
	        },
	
	        findCommonRoot: function (inNode1, inNode2) {
	            var depth1 = Util.depthOfNode(inNode1),
	                depth2 = Util.depthOfNode(inNode2),
	                node1 = inNode1,
	                node2 = inNode2;
	
	            while (depth1 !== depth2) {
	                if (depth1 > depth2) {
	                    node1 = node1.parentNode;
	                    depth1 -= 1;
	                } else {
	                    node2 = node2.parentNode;
	                    depth2 -= 1;
	                }
	            }
	
	            while (node1 !== node2) {
	                node1 = node1.parentNode;
	                node2 = node2.parentNode;
	            }
	
	            return node1;
	        },
	        /* END - based on http://stackoverflow.com/a/6183069 */
	
	        isElementAtBeginningOfBlock: function (node) {
	            var textVal,
	                sibling;
	            while (!Util.isBlockContainer(node) && !Util.isMediumEditorElement(node)) {
	                sibling = node;
	                while (sibling = sibling.previousSibling) {
	                    textVal = sibling.nodeType === 3 ? sibling.nodeValue : sibling.textContent;
	                    if (textVal.length > 0) {
	                        return false;
	                    }
	                }
	                node = node.parentNode;
	            }
	            return true;
	        },
	
	        isMediumEditorElement: function (element) {
	            return element && element.getAttribute && !!element.getAttribute('data-medium-editor-element');
	        },
	
	        getContainerEditorElement: function (element) {
	            return Util.traverseUp(element, function (node) {
	                return Util.isMediumEditorElement(node);
	            });
	        },
	
	        isBlockContainer: function (element) {
	            return element && element.nodeType !== 3 && Util.blockContainerElementNames.indexOf(element.nodeName.toLowerCase()) !== -1;
	        },
	
	        /* Finds the closest ancestor which is a block container element
	         * If element is within editor element but not within any other block element,
	         * the editor element is returned
	         */
	        getClosestBlockContainer: function (node) {
	            return Util.traverseUp(node, function (node) {
	                return Util.isBlockContainer(node) || Util.isMediumEditorElement(node);
	            });
	        },
	
	        /* Finds highest level ancestor element which is a block container element
	         * If element is within editor element but not within any other block element,
	         * the editor element is returned
	         */
	        getTopBlockContainer: function (element) {
	            var topBlock = Util.isBlockContainer(element) ? element : false;
	            Util.traverseUp(element, function (el) {
	                if (Util.isBlockContainer(el)) {
	                    topBlock = el;
	                }
	                if (!topBlock && Util.isMediumEditorElement(el)) {
	                    topBlock = el;
	                    return true;
	                }
	                return false;
	            });
	            return topBlock;
	        },
	
	        getFirstSelectableLeafNode: function (element) {
	            while (element && element.firstChild) {
	                element = element.firstChild;
	            }
	
	            // We don't want to set the selection to an element that can't have children, this messes up Gecko.
	            element = Util.traverseUp(element, function (el) {
	                return Util.emptyElementNames.indexOf(el.nodeName.toLowerCase()) === -1;
	            });
	            // Selecting at the beginning of a table doesn't work in PhantomJS.
	            if (element.nodeName.toLowerCase() === 'table') {
	                var firstCell = element.querySelector('th, td');
	                if (firstCell) {
	                    element = firstCell;
	                }
	            }
	            return element;
	        },
	
	        // TODO: remove getFirstTextNode AND _getFirstTextNode when jumping in 6.0.0 (no code references)
	        getFirstTextNode: function (element) {
	            Util.warn('getFirstTextNode is deprecated and will be removed in version 6.0.0');
	            return Util._getFirstTextNode(element);
	        },
	
	        _getFirstTextNode: function (element) {
	            if (element.nodeType === 3) {
	                return element;
	            }
	
	            for (var i = 0; i < element.childNodes.length; i++) {
	                var textNode = Util._getFirstTextNode(element.childNodes[i]);
	                if (textNode !== null) {
	                    return textNode;
	                }
	            }
	            return null;
	        },
	
	        ensureUrlHasProtocol: function (url) {
	            if (url.indexOf('://') === -1) {
	                return 'http://' + url;
	            }
	            return url;
	        },
	
	        warn: function () {
	            if (window.console !== undefined && typeof window.console.warn === 'function') {
	                window.console.warn.apply(window.console, arguments);
	            }
	        },
	
	        deprecated: function (oldName, newName, version) {
	            // simple deprecation warning mechanism.
	            var m = oldName + ' is deprecated, please use ' + newName + ' instead.';
	            if (version) {
	                m += ' Will be removed in ' + version;
	            }
	            Util.warn(m);
	        },
	
	        deprecatedMethod: function (oldName, newName, args, version) {
	            // run the replacement and warn when someone calls a deprecated method
	            Util.deprecated(oldName, newName, version);
	            if (typeof this[newName] === 'function') {
	                this[newName].apply(this, args);
	            }
	        },
	
	        cleanupAttrs: function (el, attrs) {
	            attrs.forEach(function (attr) {
	                el.removeAttribute(attr);
	            });
	        },
	
	        cleanupTags: function (el, tags) {
	            if (tags.indexOf(el.nodeName.toLowerCase()) !== -1) {
	                el.parentNode.removeChild(el);
	            }
	        },
	
	        unwrapTags: function (el, tags) {
	            if (tags.indexOf(el.nodeName.toLowerCase()) !== -1) {
	                MediumEditor.util.unwrap(el, document);
	            }
	        },
	
	        // get the closest parent
	        getClosestTag: function (el, tag) {
	            return Util.traverseUp(el, function (element) {
	                return element.nodeName.toLowerCase() === tag.toLowerCase();
	            });
	        },
	
	        unwrap: function (el, doc) {
	            var fragment = doc.createDocumentFragment(),
	                nodes = Array.prototype.slice.call(el.childNodes);
	
	            // cast nodeList to array since appending child
	            // to a different node will alter length of el.childNodes
	            for (var i = 0; i < nodes.length; i++) {
	                fragment.appendChild(nodes[i]);
	            }
	
	            if (fragment.childNodes.length) {
	                el.parentNode.replaceChild(fragment, el);
	            } else {
	                el.parentNode.removeChild(el);
	            }
	        },
	
	        guid: function () {
	            function _s4() {
	                return Math
	                    .floor((1 + Math.random()) * 0x10000)
	                    .toString(16)
	                    .substring(1);
	            }
	
	            return _s4() + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + _s4() + _s4();
	        }
	    };
	
	    MediumEditor.util = Util;
	}(window));
	
	(function () {
	    'use strict';
	
	    var Extension = function (options) {
	        MediumEditor.util.extend(this, options);
	    };
	
	    Extension.extend = function (protoProps) {
	        // magic extender thinger. mostly borrowed from backbone/goog.inherits
	        // place this function on some thing you want extend-able.
	        //
	        // example:
	        //
	        //      function Thing(args){
	        //          this.options = args;
	        //      }
	        //
	        //      Thing.prototype = { foo: "bar" };
	        //      Thing.extend = extenderify;
	        //
	        //      var ThingTwo = Thing.extend({ foo: "baz" });
	        //
	        //      var thingOne = new Thing(); // foo === "bar"
	        //      var thingTwo = new ThingTwo(); // foo === "baz"
	        //
	        //      which seems like some simply shallow copy nonsense
	        //      at first, but a lot more is going on there.
	        //
	        //      passing a `constructor` to the extend props
	        //      will cause the instance to instantiate through that
	        //      instead of the parent's constructor.
	
	        var parent = this,
	            child;
	
	        // The constructor function for the new subclass is either defined by you
	        // (the "constructor" property in your `extend` definition), or defaulted
	        // by us to simply call the parent's constructor.
	
	        if (protoProps && protoProps.hasOwnProperty('constructor')) {
	            child = protoProps.constructor;
	        } else {
	            child = function () {
	                return parent.apply(this, arguments);
	            };
	        }
	
	        // das statics (.extend comes over, so your subclass can have subclasses too)
	        MediumEditor.util.extend(child, parent);
	
	        // Set the prototype chain to inherit from `parent`, without calling
	        // `parent`'s constructor function.
	        var Surrogate = function () {
	            this.constructor = child;
	        };
	        Surrogate.prototype = parent.prototype;
	        child.prototype = new Surrogate();
	
	        if (protoProps) {
	            MediumEditor.util.extend(child.prototype, protoProps);
	        }
	
	        // todo: $super?
	
	        return child;
	    };
	
	    Extension.prototype = {
	        /* init: [function]
	         *
	         * Called by MediumEditor during initialization.
	         * The .base property will already have been set to
	         * current instance of MediumEditor when this is called.
	         * All helper methods will exist as well
	         */
	        init: function () {},
	
	        /* base: [MediumEditor instance]
	         *
	         * If not overriden, this will be set to the current instance
	         * of MediumEditor, before the init method is called
	         */
	        base: undefined,
	
	        /* name: [string]
	         *
	         * 'name' of the extension, used for retrieving the extension.
	         * If not set, MediumEditor will set this to be the key
	         * used when passing the extension into MediumEditor via the
	         * 'extensions' option
	         */
	        name: undefined,
	
	        /* checkState: [function (node)]
	         *
	         * If implemented, this function will be called one or more times
	         * the state of the editor & toolbar are updated.
	         * When the state is updated, the editor does the following:
	         *
	         * 1) Find the parent node containing the current selection
	         * 2) Call checkState on the extension, passing the node as an argument
	         * 3) Get the parent node of the previous node
	         * 4) Repeat steps #2 and #3 until we move outside the parent contenteditable
	         */
	        checkState: undefined,
	
	        /* destroy: [function ()]
	         *
	         * This method should remove any created html, custom event handlers
	         * or any other cleanup tasks that should be performed.
	         * If implemented, this function will be called when MediumEditor's
	         * destroy method has been called.
	         */
	        destroy: undefined,
	
	        /* As alternatives to checkState, these functions provide a more structured
	         * path to updating the state of an extension (usually a button) whenever
	         * the state of the editor & toolbar are updated.
	         */
	
	        /* queryCommandState: [function ()]
	         *
	         * If implemented, this function will be called once on each extension
	         * when the state of the editor/toolbar is being updated.
	         *
	         * If this function returns a non-null value, the extension will
	         * be ignored as the code climbs the dom tree.
	         *
	         * If this function returns true, and the setActive() function is defined
	         * setActive() will be called
	         */
	        queryCommandState: undefined,
	
	        /* isActive: [function ()]
	         *
	         * If implemented, this function will be called when MediumEditor
	         * has determined that this extension is 'active' for the current selection.
	         * This may be called when the editor & toolbar are being updated,
	         * but only if queryCommandState() or isAlreadyApplied() functions
	         * are implemented, and when called, return true.
	         */
	        isActive: undefined,
	
	        /* isAlreadyApplied: [function (node)]
	         *
	         * If implemented, this function is similar to checkState() in
	         * that it will be called repeatedly as MediumEditor moves up
	         * the DOM to update the editor & toolbar after a state change.
	         *
	         * NOTE: This function will NOT be called if checkState() has
	         * been implemented. This function will NOT be called if
	         * queryCommandState() is implemented and returns a non-null
	         * value when called
	         */
	        isAlreadyApplied: undefined,
	
	        /* setActive: [function ()]
	         *
	         * If implemented, this function is called when MediumEditor knows
	         * that this extension is currently enabled.  Currently, this
	         * function is called when updating the editor & toolbar, and
	         * only if queryCommandState() or isAlreadyApplied(node) return
	         * true when called
	         */
	        setActive: undefined,
	
	        /* setInactive: [function ()]
	         *
	         * If implemented, this function is called when MediumEditor knows
	         * that this extension is currently disabled.  Curently, this
	         * is called at the beginning of each state change for
	         * the editor & toolbar. After calling this, MediumEditor
	         * will attempt to update the extension, either via checkState()
	         * or the combination of queryCommandState(), isAlreadyApplied(node),
	         * isActive(), and setActive()
	         */
	        setInactive: undefined,
	
	        /* getInteractionElements: [function ()]
	         *
	         * If the extension renders any elements that the user can interact with,
	         * this method should be implemented and return the root element or an array
	         * containing all of the root elements. MediumEditor will call this function
	         * during interaction to see if the user clicked on something outside of the editor.
	         * The elements are used to check if the target element of a click or
	         * other user event is a descendant of any extension elements.
	         * This way, the editor can also count user interaction within editor elements as
	         * interactions with the editor, and thus not trigger 'blur'
	         */
	        getInteractionElements: undefined,
	
	        /************************ Helpers ************************
	         * The following are helpers that are either set by MediumEditor
	         * during initialization, or are helper methods which either
	         * route calls to the MediumEditor instance or provide common
	         * functionality for all extensions
	         *********************************************************/
	
	        /* window: [Window]
	         *
	         * If not overriden, this will be set to the window object
	         * to be used by MediumEditor and its extensions.  This is
	         * passed via the 'contentWindow' option to MediumEditor
	         * and is the global 'window' object by default
	         */
	        'window': undefined,
	
	        /* document: [Document]
	         *
	         * If not overriden, this will be set to the document object
	         * to be used by MediumEditor and its extensions. This is
	         * passed via the 'ownerDocument' optin to MediumEditor
	         * and is the global 'document' object by default
	         */
	        'document': undefined,
	
	        /* getEditorElements: [function ()]
	         *
	         * Helper function which returns an array containing
	         * all the contenteditable elements for this instance
	         * of MediumEditor
	         */
	        getEditorElements: function () {
	            return this.base.elements;
	        },
	
	        /* getEditorId: [function ()]
	         *
	         * Helper function which returns a unique identifier
	         * for this instance of MediumEditor
	         */
	        getEditorId: function () {
	            return this.base.id;
	        },
	
	        /* getEditorOptions: [function (option)]
	         *
	         * Helper function which returns the value of an option
	         * used to initialize this instance of MediumEditor
	         */
	        getEditorOption: function (option) {
	            return this.base.options[option];
	        }
	    };
	
	    /* List of method names to add to the prototype of Extension
	     * Each of these methods will be defined as helpers that
	     * just call directly into the MediumEditor instance.
	     *
	     * example for 'on' method:
	     * Extension.prototype.on = function () {
	     *     return this.base.on.apply(this.base, arguments);
	     * }
	     */
	    [
	        // general helpers
	        'execAction',
	
	        // event handling
	        'on',
	        'off',
	        'subscribe',
	        'trigger'
	
	    ].forEach(function (helper) {
	        Extension.prototype[helper] = function () {
	            return this.base[helper].apply(this.base, arguments);
	        };
	    });
	
	    MediumEditor.Extension = Extension;
	})();
	
	(function () {
	    'use strict';
	
	    function filterOnlyParentElements(node) {
	        if (MediumEditor.util.isBlockContainer(node)) {
	            return NodeFilter.FILTER_ACCEPT;
	        } else {
	            return NodeFilter.FILTER_SKIP;
	        }
	    }
	
	    var Selection = {
	        findMatchingSelectionParent: function (testElementFunction, contentWindow) {
	            var selection = contentWindow.getSelection(),
	                range,
	                current;
	
	            if (selection.rangeCount === 0) {
	                return false;
	            }
	
	            range = selection.getRangeAt(0);
	            current = range.commonAncestorContainer;
	
	            return MediumEditor.util.traverseUp(current, testElementFunction);
	        },
	
	        getSelectionElement: function (contentWindow) {
	            return this.findMatchingSelectionParent(function (el) {
	                return MediumEditor.util.isMediumEditorElement(el);
	            }, contentWindow);
	        },
	
	        // http://stackoverflow.com/questions/17678843/cant-restore-selection-after-html-modify-even-if-its-the-same-html
	        // Tim Down
	        exportSelection: function (root, doc) {
	            if (!root) {
	                return null;
	            }
	
	            var selectionState = null,
	                selection = doc.getSelection();
	
	            if (selection.rangeCount > 0) {
	                var range = selection.getRangeAt(0),
	                    preSelectionRange = range.cloneRange(),
	                    start;
	
	                preSelectionRange.selectNodeContents(root);
	                preSelectionRange.setEnd(range.startContainer, range.startOffset);
	                start = preSelectionRange.toString().length;
	
	                selectionState = {
	                    start: start,
	                    end: start + range.toString().length
	                };
	
	                // Check to see if the selection starts with any images
	                // if so we need to make sure the the beginning of the selection is
	                // set correctly when importing selection
	                if (this.doesRangeStartWithImages(range, doc)) {
	                    selectionState.startsWithImage = true;
	                }
	
	                // Check to see if the selection has any trailing images
	                // if so, this this means we need to look for them when we import selection
	                var trailingImageCount = this.getTrailingImageCount(root, selectionState, range.endContainer, range.endOffset);
	                if (trailingImageCount) {
	                    selectionState.trailingImageCount = trailingImageCount;
	                }
	
	                // If start = 0 there may still be an empty paragraph before it, but we don't care.
	                if (start !== 0) {
	                    var emptyBlocksIndex = this.getIndexRelativeToAdjacentEmptyBlocks(doc, root, range.startContainer, range.startOffset);
	                    if (emptyBlocksIndex !== -1) {
	                        selectionState.emptyBlocksIndex = emptyBlocksIndex;
	                    }
	                }
	            }
	
	            return selectionState;
	        },
	
	        // http://stackoverflow.com/questions/17678843/cant-restore-selection-after-html-modify-even-if-its-the-same-html
	        // Tim Down
	        //
	        // {object} selectionState - the selection to import
	        // {DOMElement} root - the root element the selection is being restored inside of
	        // {Document} doc - the document to use for managing selection
	        // {boolean} [favorLaterSelectionAnchor] - defaults to false. If true, import the cursor immediately
	        //      subsequent to an anchor tag if it would otherwise be placed right at the trailing edge inside the
	        //      anchor. This cursor positioning, even though visually equivalent to the user, can affect behavior
	        //      in MS IE.
	        importSelection: function (selectionState, root, doc, favorLaterSelectionAnchor) {
	            if (!selectionState || !root) {
	                return;
	            }
	
	            var range = doc.createRange();
	            range.setStart(root, 0);
	            range.collapse(true);
	
	            var node = root,
	                nodeStack = [],
	                charIndex = 0,
	                foundStart = false,
	                foundEnd = false,
	                trailingImageCount = 0,
	                stop = false,
	                nextCharIndex,
	                allowRangeToStartAtEndOfNode = false,
	                lastTextNode = null;
	
	            // When importing selection, the start of the selection may lie at the end of an element
	            // or at the beginning of an element.  Since visually there is no difference between these 2
	            // we will try to move the selection to the beginning of an element since this is generally
	            // what users will expect and it's a more predictable behavior.
	            //
	            // However, there are some specific cases when we don't want to do this:
	            //  1) We're attempting to move the cursor outside of the end of an anchor [favorLaterSelectionAnchor = true]
	            //  2) The selection starts with an image, which is special since an image doesn't have any 'content'
	            //     as far as selection and ranges are concerned
	            //  3) The selection starts after a specified number of empty block elements (selectionState.emptyBlocksIndex)
	            //
	            // For these cases, we want the selection to start at a very specific location, so we should NOT
	            // automatically move the cursor to the beginning of the first actual chunk of text
	            if (favorLaterSelectionAnchor || selectionState.startsWithImage || typeof selectionState.emptyBlocksIndex !== 'undefined') {
	                allowRangeToStartAtEndOfNode = true;
	            }
	
	            while (!stop && node) {
	                // Only iterate over elements and text nodes
	                if (node.nodeType > 3) {
	                    node = nodeStack.pop();
	                    continue;
	                }
	
	                // If we hit a text node, we need to add the amount of characters to the overall count
	                if (node.nodeType === 3 && !foundEnd) {
	                    nextCharIndex = charIndex + node.length;
	                    // Check if we're at or beyond the start of the selection we're importing
	                    if (!foundStart && selectionState.start >= charIndex && selectionState.start <= nextCharIndex) {
	                        // NOTE: We only want to allow a selection to start at the END of an element if
	                        //  allowRangeToStartAtEndOfNode is true
	                        if (allowRangeToStartAtEndOfNode || selectionState.start < nextCharIndex) {
	                            range.setStart(node, selectionState.start - charIndex);
	                            foundStart = true;
	                        }
	                        // We're at the end of a text node where the selection could start but we shouldn't
	                        // make the selection start here because allowRangeToStartAtEndOfNode is false.
	                        // However, we should keep a reference to this node in case there aren't any more
	                        // text nodes after this, so that we have somewhere to import the selection to
	                        else {
	                            lastTextNode = node;
	                        }
	                    }
	                    // We've found the start of the selection, check if we're at or beyond the end of the selection we're importing
	                    if (foundStart && selectionState.end >= charIndex && selectionState.end <= nextCharIndex) {
	                        if (!selectionState.trailingImageCount) {
	                            range.setEnd(node, selectionState.end - charIndex);
	                            stop = true;
	                        } else {
	                            foundEnd = true;
	                        }
	                    }
	                    charIndex = nextCharIndex;
	                } else {
	                    if (selectionState.trailingImageCount && foundEnd) {
	                        if (node.nodeName.toLowerCase() === 'img') {
	                            trailingImageCount++;
	                        }
	                        if (trailingImageCount === selectionState.trailingImageCount) {
	                            // Find which index the image is in its parent's children
	                            var endIndex = 0;
	                            while (node.parentNode.childNodes[endIndex] !== node) {
	                                endIndex++;
	                            }
	                            range.setEnd(node.parentNode, endIndex + 1);
	                            stop = true;
	                        }
	                    }
	
	                    if (!stop && node.nodeType === 1) {
	                        // this is an element
	                        // add all its children to the stack
	                        var i = node.childNodes.length - 1;
	                        while (i >= 0) {
	                            nodeStack.push(node.childNodes[i]);
	                            i -= 1;
	                        }
	                    }
	                }
	
	                if (!stop) {
	                    node = nodeStack.pop();
	                }
	            }
	
	            // If we've gone through the entire text but didn't find the beginning of a text node
	            // to make the selection start at, we should fall back to starting the selection
	            // at the END of the last text node we found
	            if (!foundStart && lastTextNode) {
	                range.setStart(lastTextNode, lastTextNode.length);
	                range.setEnd(lastTextNode, lastTextNode.length);
	            }
	
	            if (typeof selectionState.emptyBlocksIndex !== 'undefined') {
	                range = this.importSelectionMoveCursorPastBlocks(doc, root, selectionState.emptyBlocksIndex, range);
	            }
	
	            // If the selection is right at the ending edge of a link, put it outside the anchor tag instead of inside.
	            if (favorLaterSelectionAnchor) {
	                range = this.importSelectionMoveCursorPastAnchor(selectionState, range);
	            }
	
	            this.selectRange(doc, range);
	        },
	
	        // Utility method called from importSelection only
	        importSelectionMoveCursorPastAnchor: function (selectionState, range) {
	            var nodeInsideAnchorTagFunction = function (node) {
	                return node.nodeName.toLowerCase() === 'a';
	            };
	            if (selectionState.start === selectionState.end &&
	                    range.startContainer.nodeType === 3 &&
	                    range.startOffset === range.startContainer.nodeValue.length &&
	                    MediumEditor.util.traverseUp(range.startContainer, nodeInsideAnchorTagFunction)) {
	                var prevNode = range.startContainer,
	                    currentNode = range.startContainer.parentNode;
	                while (currentNode !== null && currentNode.nodeName.toLowerCase() !== 'a') {
	                    if (currentNode.childNodes[currentNode.childNodes.length - 1] !== prevNode) {
	                        currentNode = null;
	                    } else {
	                        prevNode = currentNode;
	                        currentNode = currentNode.parentNode;
	                    }
	                }
	                if (currentNode !== null && currentNode.nodeName.toLowerCase() === 'a') {
	                    var currentNodeIndex = null;
	                    for (var i = 0; currentNodeIndex === null && i < currentNode.parentNode.childNodes.length; i++) {
	                        if (currentNode.parentNode.childNodes[i] === currentNode) {
	                            currentNodeIndex = i;
	                        }
	                    }
	                    range.setStart(currentNode.parentNode, currentNodeIndex + 1);
	                    range.collapse(true);
	                }
	            }
	            return range;
	        },
	
	        // Uses the emptyBlocksIndex calculated by getIndexRelativeToAdjacentEmptyBlocks
	        // to move the cursor back to the start of the correct paragraph
	        importSelectionMoveCursorPastBlocks: function (doc, root, index, range) {
	            var treeWalker = doc.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, filterOnlyParentElements, false),
	                startContainer = range.startContainer,
	                startBlock,
	                targetNode,
	                currIndex = 0;
	            index = index || 1; // If index is 0, we still want to move to the next block
	
	            // Chrome counts newlines and spaces that separate block elements as actual elements.
	            // If the selection is inside one of these text nodes, and it has a previous sibling
	            // which is a block element, we want the treewalker to start at the previous sibling
	            // and NOT at the parent of the textnode
	            if (startContainer.nodeType === 3 && MediumEditor.util.isBlockContainer(startContainer.previousSibling)) {
	                startBlock = startContainer.previousSibling;
	            } else {
	                startBlock = MediumEditor.util.getClosestBlockContainer(startContainer);
	            }
	
	            // Skip over empty blocks until we hit the block we want the selection to be in
	            while (treeWalker.nextNode()) {
	                if (!targetNode) {
	                    // Loop through all blocks until we hit the starting block element
	                    if (startBlock === treeWalker.currentNode) {
	                        targetNode = treeWalker.currentNode;
	                    }
	                } else {
	                    targetNode = treeWalker.currentNode;
	                    currIndex++;
	                    // We hit the target index, bail
	                    if (currIndex === index) {
	                        break;
	                    }
	                    // If we find a non-empty block, ignore the emptyBlocksIndex and just put selection here
	                    if (targetNode.textContent.length > 0) {
	                        break;
	                    }
	                }
	            }
	
	            if (!targetNode) {
	                targetNode = startBlock;
	            }
	
	            // We're selecting a high-level block node, so make sure the cursor gets moved into the deepest
	            // element at the beginning of the block
	            range.setStart(MediumEditor.util.getFirstSelectableLeafNode(targetNode), 0);
	
	            return range;
	        },
	
	        // Returns -1 unless the cursor is at the beginning of a paragraph/block
	        // If the paragraph/block is preceeded by empty paragraphs/block (with no text)
	        // it will return the number of empty paragraphs before the cursor.
	        // Otherwise, it will return 0, which indicates the cursor is at the beginning
	        // of a paragraph/block, and not at the end of the paragraph/block before it
	        getIndexRelativeToAdjacentEmptyBlocks: function (doc, root, cursorContainer, cursorOffset) {
	            // If there is text in front of the cursor, that means there isn't only empty blocks before it
	            if (cursorContainer.textContent.length > 0 && cursorOffset > 0) {
	                return -1;
	            }
	
	            // Check if the block that contains the cursor has any other text in front of the cursor
	            var node = cursorContainer;
	            if (node.nodeType !== 3) {
	                node = cursorContainer.childNodes[cursorOffset];
	            }
	            if (node) {
	                // The element isn't at the beginning of a block, so it has content before it
	                if (!MediumEditor.util.isElementAtBeginningOfBlock(node)) {
	                    return -1;
	                }
	
	                var previousSibling = MediumEditor.util.findPreviousSibling(node);
	                // If there is no previous sibling, this is the first text element in the editor
	                if (!previousSibling) {
	                    return -1;
	                }
	                // If the previous sibling has text, then there are no empty blocks before this
	                else if (previousSibling.nodeValue) {
	                    return -1;
	                }
	            }
	
	            // Walk over block elements, counting number of empty blocks between last piece of text
	            // and the block the cursor is in
	            var closestBlock = MediumEditor.util.getClosestBlockContainer(cursorContainer),
	                treeWalker = doc.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, filterOnlyParentElements, false),
	                emptyBlocksCount = 0;
	            while (treeWalker.nextNode()) {
	                var blockIsEmpty = treeWalker.currentNode.textContent === '';
	                if (blockIsEmpty || emptyBlocksCount > 0) {
	                    emptyBlocksCount += 1;
	                }
	                if (treeWalker.currentNode === closestBlock) {
	                    return emptyBlocksCount;
	                }
	                if (!blockIsEmpty) {
	                    emptyBlocksCount = 0;
	                }
	            }
	
	            return emptyBlocksCount;
	        },
	
	        // Returns true if the selection range begins with an image tag
	        // Returns false if the range starts with any non empty text nodes
	        doesRangeStartWithImages: function (range, doc) {
	            if (range.startOffset !== 0 || range.startContainer.nodeType !== 1) {
	                return false;
	            }
	
	            if (range.startContainer.nodeName.toLowerCase() === 'img') {
	                return true;
	            }
	
	            var img = range.startContainer.querySelector('img');
	            if (!img) {
	                return false;
	            }
	
	            var treeWalker = doc.createTreeWalker(range.startContainer, NodeFilter.SHOW_ALL, null, false);
	            while (treeWalker.nextNode()) {
	                var next = treeWalker.currentNode;
	                // If we hit the image, then there isn't any text before the image so
	                // the image is at the beginning of the range
	                if (next === img) {
	                    break;
	                }
	                // If we haven't hit the iamge, but found text that contains content
	                // then the range doesn't start with an image
	                if (next.nodeValue) {
	                    return false;
	                }
	            }
	
	            return true;
	        },
	
	        getTrailingImageCount: function (root, selectionState, endContainer, endOffset) {
	            // If the endOffset of a range is 0, the endContainer doesn't contain images
	            // If the endContainer is a text node, there are no trailing images
	            if (endOffset === 0 || endContainer.nodeType !== 1) {
	                return 0;
	            }
	
	            // If the endContainer isn't an image, and doesn't have an image descendants
	            // there are no trailing images
	            if (endContainer.nodeName.toLowerCase() !== 'img' && !endContainer.querySelector('img')) {
	                return 0;
	            }
	
	            var lastNode = endContainer.childNodes[endOffset - 1];
	            while (lastNode.hasChildNodes()) {
	                lastNode = lastNode.lastChild;
	            }
	
	            var node = root,
	                nodeStack = [],
	                charIndex = 0,
	                foundStart = false,
	                foundEnd = false,
	                stop = false,
	                nextCharIndex,
	                trailingImages = 0;
	
	            while (!stop && node) {
	                // Only iterate over elements and text nodes
	                if (node.nodeType > 3) {
	                    node = nodeStack.pop();
	                    continue;
	                }
	
	                if (node.nodeType === 3 && !foundEnd) {
	                    trailingImages = 0;
	                    nextCharIndex = charIndex + node.length;
	                    if (!foundStart && selectionState.start >= charIndex && selectionState.start <= nextCharIndex) {
	                        foundStart = true;
	                    }
	                    if (foundStart && selectionState.end >= charIndex && selectionState.end <= nextCharIndex) {
	                        foundEnd = true;
	                    }
	                    charIndex = nextCharIndex;
	                } else {
	                    if (node.nodeName.toLowerCase() === 'img') {
	                        trailingImages++;
	                    }
	
	                    if (node === lastNode) {
	                        stop = true;
	                    } else if (node.nodeType === 1) {
	                        // this is an element
	                        // add all its children to the stack
	                        var i = node.childNodes.length - 1;
	                        while (i >= 0) {
	                            nodeStack.push(node.childNodes[i]);
	                            i -= 1;
	                        }
	                    }
	                }
	
	                if (!stop) {
	                    node = nodeStack.pop();
	                }
	            }
	
	            return trailingImages;
	        },
	
	        // determine if the current selection contains any 'content'
	        // content being any non-white space text or an image
	        selectionContainsContent: function (doc) {
	            var sel = doc.getSelection();
	
	            // collapsed selection or selection withour range doesn't contain content
	            if (!sel || sel.isCollapsed || !sel.rangeCount) {
	                return false;
	            }
	
	            // if toString() contains any text, the selection contains some content
	            if (sel.toString().trim() !== '') {
	                return true;
	            }
	
	            // if selection contains only image(s), it will return empty for toString()
	            // so check for an image manually
	            var selectionNode = this.getSelectedParentElement(sel.getRangeAt(0));
	            if (selectionNode) {
	                if (selectionNode.nodeName.toLowerCase() === 'img' ||
	                    (selectionNode.nodeType === 1 && selectionNode.querySelector('img'))) {
	                    return true;
	                }
	            }
	
	            return false;
	        },
	
	        selectionInContentEditableFalse: function (contentWindow) {
	            // determine if the current selection is exclusively inside
	            // a contenteditable="false", though treat the case of an
	            // explicit contenteditable="true" inside a "false" as false.
	            var sawtrue,
	                sawfalse = this.findMatchingSelectionParent(function (el) {
	                    var ce = el && el.getAttribute('contenteditable');
	                    if (ce === 'true') {
	                        sawtrue = true;
	                    }
	                    return el.nodeName !== '#text' && ce === 'false';
	                }, contentWindow);
	
	            return !sawtrue && sawfalse;
	        },
	
	        // http://stackoverflow.com/questions/4176923/html-of-selected-text
	        // by Tim Down
	        getSelectionHtml: function getSelectionHtml(doc) {
	            var i,
	                html = '',
	                sel = doc.getSelection(),
	                len,
	                container;
	            if (sel.rangeCount) {
	                container = doc.createElement('div');
	                for (i = 0, len = sel.rangeCount; i < len; i += 1) {
	                    container.appendChild(sel.getRangeAt(i).cloneContents());
	                }
	                html = container.innerHTML;
	            }
	            return html;
	        },
	
	        /**
	         *  Find the caret position within an element irrespective of any inline tags it may contain.
	         *
	         *  @param {DOMElement} An element containing the cursor to find offsets relative to.
	         *  @param {Range} A Range representing cursor position. Will window.getSelection if none is passed.
	         *  @return {Object} 'left' and 'right' attributes contain offsets from begining and end of Element
	         */
	        getCaretOffsets: function getCaretOffsets(element, range) {
	            var preCaretRange, postCaretRange;
	
	            if (!range) {
	                range = window.getSelection().getRangeAt(0);
	            }
	
	            preCaretRange = range.cloneRange();
	            postCaretRange = range.cloneRange();
	
	            preCaretRange.selectNodeContents(element);
	            preCaretRange.setEnd(range.endContainer, range.endOffset);
	
	            postCaretRange.selectNodeContents(element);
	            postCaretRange.setStart(range.endContainer, range.endOffset);
	
	            return {
	                left: preCaretRange.toString().length,
	                right: postCaretRange.toString().length
	            };
	        },
	
	        // http://stackoverflow.com/questions/15867542/range-object-get-selection-parent-node-chrome-vs-firefox
	        rangeSelectsSingleNode: function (range) {
	            var startNode = range.startContainer;
	            return startNode === range.endContainer &&
	                startNode.hasChildNodes() &&
	                range.endOffset === range.startOffset + 1;
	        },
	
	        getSelectedParentElement: function (range) {
	            if (!range) {
	                return null;
	            }
	
	            // Selection encompasses a single element
	            if (this.rangeSelectsSingleNode(range) && range.startContainer.childNodes[range.startOffset].nodeType !== 3) {
	                return range.startContainer.childNodes[range.startOffset];
	            }
	
	            // Selection range starts inside a text node, so get its parent
	            if (range.startContainer.nodeType === 3) {
	                return range.startContainer.parentNode;
	            }
	
	            // Selection starts inside an element
	            return range.startContainer;
	        },
	
	        getSelectedElements: function (doc) {
	            var selection = doc.getSelection(),
	                range,
	                toRet,
	                currNode;
	
	            if (!selection.rangeCount || selection.isCollapsed || !selection.getRangeAt(0).commonAncestorContainer) {
	                return [];
	            }
	
	            range = selection.getRangeAt(0);
	
	            if (range.commonAncestorContainer.nodeType === 3) {
	                toRet = [];
	                currNode = range.commonAncestorContainer;
	                while (currNode.parentNode && currNode.parentNode.childNodes.length === 1) {
	                    toRet.push(currNode.parentNode);
	                    currNode = currNode.parentNode;
	                }
	
	                return toRet;
	            }
	
	            return [].filter.call(range.commonAncestorContainer.getElementsByTagName('*'), function (el) {
	                return (typeof selection.containsNode === 'function') ? selection.containsNode(el, true) : true;
	            });
	        },
	
	        selectNode: function (node, doc) {
	            var range = doc.createRange();
	            range.selectNodeContents(node);
	            this.selectRange(doc, range);
	        },
	
	        select: function (doc, startNode, startOffset, endNode, endOffset) {
	            var range = doc.createRange();
	            range.setStart(startNode, startOffset);
	            if (endNode) {
	                range.setEnd(endNode, endOffset);
	            } else {
	                range.collapse(true);
	            }
	            this.selectRange(doc, range);
	            return range;
	        },
	
	        /**
	         *  Clear the current highlighted selection and set the caret to the start or the end of that prior selection, defaults to end.
	         *
	         *  @param {DomDocument} doc            Current document
	         *  @param {boolean} moveCursorToStart  A boolean representing whether or not to set the caret to the beginning of the prior selection.
	         */
	        clearSelection: function (doc, moveCursorToStart) {
	            if (moveCursorToStart) {
	                doc.getSelection().collapseToStart();
	            } else {
	                doc.getSelection().collapseToEnd();
	            }
	        },
	
	        /**
	         * Move cursor to the given node with the given offset.
	         *
	         * @param  {DomDocument} doc     Current document
	         * @param  {DomElement}  node    Element where to jump
	         * @param  {integer}     offset  Where in the element should we jump, 0 by default
	         */
	        moveCursor: function (doc, node, offset) {
	            this.select(doc, node, offset);
	        },
	
	        getSelectionRange: function (ownerDocument) {
	            var selection = ownerDocument.getSelection();
	            if (selection.rangeCount === 0) {
	                return null;
	            }
	            return selection.getRangeAt(0);
	        },
	
	        selectRange: function (ownerDocument, range) {
	            var selection = ownerDocument.getSelection();
	
	            selection.removeAllRanges();
	            selection.addRange(range);
	        },
	
	        // http://stackoverflow.com/questions/1197401/how-can-i-get-the-element-the-caret-is-in-with-javascript-when-using-contentedi
	        // by You
	        getSelectionStart: function (ownerDocument) {
	            var node = ownerDocument.getSelection().anchorNode,
	                startNode = (node && node.nodeType === 3 ? node.parentNode : node);
	
	            return startNode;
	        }
	    };
	
	    MediumEditor.selection = Selection;
	}());
	
	(function () {
	    'use strict';
	
	    function isElementDescendantOfExtension(extensions, element) {
	        return extensions.some(function (extension) {
	            if (typeof extension.getInteractionElements !== 'function') {
	                return false;
	            }
	
	            var extensionElements = extension.getInteractionElements();
	            if (!extensionElements) {
	                return false;
	            }
	
	            if (!Array.isArray(extensionElements)) {
	                extensionElements = [extensionElements];
	            }
	            return extensionElements.some(function (el) {
	                return MediumEditor.util.isDescendant(el, element, true);
	            });
	        });
	    }
	
	    var Events = function (instance) {
	        this.base = instance;
	        this.options = this.base.options;
	        this.events = [];
	        this.disabledEvents = {};
	        this.customEvents = {};
	        this.listeners = {};
	    };
	
	    Events.prototype = {
	        InputEventOnContenteditableSupported: !MediumEditor.util.isIE && !MediumEditor.util.isEdge,
	
	        // Helpers for event handling
	
	        attachDOMEvent: function (targets, event, listener, useCapture) {
	            var win = this.base.options.contentWindow,
	                doc = this.base.options.ownerDocument;
	
	            targets = MediumEditor.util.isElement(targets) || [win, doc].indexOf(targets) > -1 ? [targets] : targets;
	
	            Array.prototype.forEach.call(targets, function (target) {
	                target.addEventListener(event, listener, useCapture);
	                this.events.push([target, event, listener, useCapture]);
	            }.bind(this));
	        },
	
	        detachDOMEvent: function (targets, event, listener, useCapture) {
	            var index, e,
	                win = this.base.options.contentWindow,
	                doc = this.base.options.ownerDocument;
	
	            if (targets !== null) {
	                targets = MediumEditor.util.isElement(targets) || [win, doc].indexOf(targets) > -1 ? [targets] : targets;
	
	                Array.prototype.forEach.call(targets, function (target) {
	                    index = this.indexOfListener(target, event, listener, useCapture);
	                    if (index !== -1) {
	                        e = this.events.splice(index, 1)[0];
	                        e[0].removeEventListener(e[1], e[2], e[3]);
	                    }
	                }.bind(this));
	            }
	        },
	
	        indexOfListener: function (target, event, listener, useCapture) {
	            var i, n, item;
	            for (i = 0, n = this.events.length; i < n; i = i + 1) {
	                item = this.events[i];
	                if (item[0] === target && item[1] === event && item[2] === listener && item[3] === useCapture) {
	                    return i;
	                }
	            }
	            return -1;
	        },
	
	        detachAllDOMEvents: function () {
	            var e = this.events.pop();
	            while (e) {
	                e[0].removeEventListener(e[1], e[2], e[3]);
	                e = this.events.pop();
	            }
	        },
	
	        detachAllEventsFromElement: function (element) {
	            var filtered = this.events.filter(function (e) {
	                return e && e[0].getAttribute && e[0].getAttribute('medium-editor-index') === element.getAttribute('medium-editor-index');
	            });
	
	            for (var i = 0, len = filtered.length; i < len; i++) {
	                var e = filtered[i];
	                this.detachDOMEvent(e[0], e[1], e[2], e[3]);
	            }
	        },
	
	        // Attach all existing handlers to a new element
	        attachAllEventsToElement: function (element) {
	            if (this.listeners['editableInput']) {
	                this.contentCache[element.getAttribute('medium-editor-index')] = element.innerHTML;
	            }
	
	            if (this.eventsCache) {
	                this.eventsCache.forEach(function (e) {
	                    this.attachDOMEvent(element, e['name'], e['handler'].bind(this));
	                }, this);
	            }
	        },
	
	        enableCustomEvent: function (event) {
	            if (this.disabledEvents[event] !== undefined) {
	                delete this.disabledEvents[event];
	            }
	        },
	
	        disableCustomEvent: function (event) {
	            this.disabledEvents[event] = true;
	        },
	
	        // custom events
	        attachCustomEvent: function (event, listener) {
	            this.setupListener(event);
	            if (!this.customEvents[event]) {
	                this.customEvents[event] = [];
	            }
	            this.customEvents[event].push(listener);
	        },
	
	        detachCustomEvent: function (event, listener) {
	            var index = this.indexOfCustomListener(event, listener);
	            if (index !== -1) {
	                this.customEvents[event].splice(index, 1);
	                // TODO: If array is empty, should detach internal listeners via destroyListener()
	            }
	        },
	
	        indexOfCustomListener: function (event, listener) {
	            if (!this.customEvents[event] || !this.customEvents[event].length) {
	                return -1;
	            }
	
	            return this.customEvents[event].indexOf(listener);
	        },
	
	        detachAllCustomEvents: function () {
	            this.customEvents = {};
	            // TODO: Should detach internal listeners here via destroyListener()
	        },
	
	        triggerCustomEvent: function (name, data, editable) {
	            if (this.customEvents[name] && !this.disabledEvents[name]) {
	                this.customEvents[name].forEach(function (listener) {
	                    listener(data, editable);
	                });
	            }
	        },
	
	        // Cleaning up
	
	        destroy: function () {
	            this.detachAllDOMEvents();
	            this.detachAllCustomEvents();
	            this.detachExecCommand();
	
	            if (this.base.elements) {
	                this.base.elements.forEach(function (element) {
	                    element.removeAttribute('data-medium-focused');
	                });
	            }
	        },
	
	        // Listening to calls to document.execCommand
	
	        // Attach a listener to be notified when document.execCommand is called
	        attachToExecCommand: function () {
	            if (this.execCommandListener) {
	                return;
	            }
	
	            // Store an instance of the listener so:
	            // 1) We only attach to execCommand once
	            // 2) We can remove the listener later
	            this.execCommandListener = function (execInfo) {
	                this.handleDocumentExecCommand(execInfo);
	            }.bind(this);
	
	            // Ensure that execCommand has been wrapped correctly
	            this.wrapExecCommand();
	
	            // Add listener to list of execCommand listeners
	            this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener);
	        },
	
	        // Remove our listener for calls to document.execCommand
	        detachExecCommand: function () {
	            var doc = this.options.ownerDocument;
	            if (!this.execCommandListener || !doc.execCommand.listeners) {
	                return;
	            }
	
	            // Find the index of this listener in the array of listeners so it can be removed
	            var index = doc.execCommand.listeners.indexOf(this.execCommandListener);
	            if (index !== -1) {
	                doc.execCommand.listeners.splice(index, 1);
	            }
	
	            // If the list of listeners is now empty, put execCommand back to its original state
	            if (!doc.execCommand.listeners.length) {
	                this.unwrapExecCommand();
	            }
	        },
	
	        // Wrap document.execCommand in a custom method so we can listen to calls to it
	        wrapExecCommand: function () {
	            var doc = this.options.ownerDocument;
	
	            // Ensure all instance of MediumEditor only wrap execCommand once
	            if (doc.execCommand.listeners) {
	                return;
	            }
	
	            // Helper method to call all listeners to execCommand
	            var callListeners = function (args, result) {
	                if (doc.execCommand.listeners) {
	                    doc.execCommand.listeners.forEach(function (listener) {
	                        listener({
	                            command: args[0],
	                            value: args[2],
	                            args: args,
	                            result: result
	                        });
	                    });
	                }
	            },
	
	                // Create a wrapper method for execCommand which will:
	                // 1) Call document.execCommand with the correct arguments
	                // 2) Loop through any listeners and notify them that execCommand was called
	                //    passing extra info on the call
	                // 3) Return the result
	                wrapper = function () {
	                    var result = doc.execCommand.orig.apply(this, arguments);
	
	                    if (!doc.execCommand.listeners) {
	                        return result;
	                    }
	
	                    var args = Array.prototype.slice.call(arguments);
	                    callListeners(args, result);
	
	                    return result;
	                };
	
	            // Store a reference to the original execCommand
	            wrapper.orig = doc.execCommand;
	
	            // Attach an array for storing listeners
	            wrapper.listeners = [];
	
	            // Helper for notifying listeners
	            wrapper.callListeners = callListeners;
	
	            // Overwrite execCommand
	            doc.execCommand = wrapper;
	        },
	
	        // Revert document.execCommand back to its original self
	        unwrapExecCommand: function () {
	            var doc = this.options.ownerDocument;
	            if (!doc.execCommand.orig) {
	                return;
	            }
	
	            // Use the reference to the original execCommand to revert back
	            doc.execCommand = doc.execCommand.orig;
	        },
	
	        // Listening to browser events to emit events medium-editor cares about
	        setupListener: function (name) {
	            if (this.listeners[name]) {
	                return;
	            }
	
	            switch (name) {
	                case 'externalInteraction':
	                    // Detecting when user has interacted with elements outside of MediumEditor
	                    this.attachDOMEvent(this.options.ownerDocument.body, 'mousedown', this.handleBodyMousedown.bind(this), true);
	                    this.attachDOMEvent(this.options.ownerDocument.body, 'click', this.handleBodyClick.bind(this), true);
	                    this.attachDOMEvent(this.options.ownerDocument.body, 'focus', this.handleBodyFocus.bind(this), true);
	                    break;
	                case 'blur':
	                    // Detecting when focus is lost
	                    this.setupListener('externalInteraction');
	                    break;
	                case 'focus':
	                    // Detecting when focus moves into some part of MediumEditor
	                    this.setupListener('externalInteraction');
	                    break;
	                case 'editableInput':
	                    // setup cache for knowing when the content has changed
	                    this.contentCache = {};
	                    this.base.elements.forEach(function (element) {
	                        this.contentCache[element.getAttribute('medium-editor-index')] = element.innerHTML;
	                    }, this);
	
	                    // Attach to the 'oninput' event, handled correctly by most browsers
	                    if (this.InputEventOnContenteditableSupported) {
	                        this.attachToEachElement('input', this.handleInput);
	                    }
	
	                    // For browsers which don't support the input event on contenteditable (IE)
	                    // we'll attach to 'selectionchange' on the document and 'keypress' on the editables
	                    if (!this.InputEventOnContenteditableSupported) {
	                        this.setupListener('editableKeypress');
	                        this.keypressUpdateInput = true;
	                        this.attachDOMEvent(document, 'selectionchange', this.handleDocumentSelectionChange.bind(this));
	                        // Listen to calls to execCommand
	                        this.attachToExecCommand();
	                    }
	                    break;
	                case 'editableClick':
	                    // Detecting click in the contenteditables
	                    this.attachToEachElement('click', this.handleClick);
	                    break;
	                case 'editableBlur':
	                    // Detecting blur in the contenteditables
	                    this.attachToEachElement('blur', this.handleBlur);
	                    break;
	                case 'editableKeypress':
	                    // Detecting keypress in the contenteditables
	                    this.attachToEachElement('keypress', this.handleKeypress);
	                    break;
	                case 'editableKeyup':
	                    // Detecting keyup in the contenteditables
	                    this.attachToEachElement('keyup', this.handleKeyup);
	                    break;
	                case 'editableKeydown':
	                    // Detecting keydown on the contenteditables
	                    this.attachToEachElement('keydown', this.handleKeydown);
	                    break;
	                case 'editableKeydownSpace':
	                    // Detecting keydown for SPACE on the contenteditables
	                    this.setupListener('editableKeydown');
	                    break;
	                case 'editableKeydownEnter':
	                    // Detecting keydown for ENTER on the contenteditables
	                    this.setupListener('editableKeydown');
	                    break;
	                case 'editableKeydownTab':
	                    // Detecting keydown for TAB on the contenteditable
	                    this.setupListener('editableKeydown');
	                    break;
	                case 'editableKeydownDelete':
	                    // Detecting keydown for DELETE/BACKSPACE on the contenteditables
	                    this.setupListener('editableKeydown');
	                    break;
	                case 'editableMouseover':
	                    // Detecting mouseover on the contenteditables
	                    this.attachToEachElement('mouseover', this.handleMouseover);
	                    break;
	                case 'editableDrag':
	                    // Detecting dragover and dragleave on the contenteditables
	                    this.attachToEachElement('dragover', this.handleDragging);
	                    this.attachToEachElement('dragleave', this.handleDragging);
	                    break;
	                case 'editableDrop':
	                    // Detecting drop on the contenteditables
	                    this.attachToEachElement('drop', this.handleDrop);
	                    break;
	                // TODO: We need to have a custom 'paste' event separate from 'editablePaste'
	                // Need to think about the way to introduce this without breaking folks
	                case 'editablePaste':
	                    // Detecting paste on the contenteditables
	                    this.attachToEachElement('paste', this.handlePaste);
	                    break;
	            }
	            this.listeners[name] = true;
	        },
	
	        attachToEachElement: function (name, handler) {
	            // build our internal cache to know which element got already what handler attached
	            if (!this.eventsCache) {
	                this.eventsCache = [];
	            }
	
	            this.base.elements.forEach(function (element) {
	                this.attachDOMEvent(element, name, handler.bind(this));
	            }, this);
	
	            this.eventsCache.push({ 'name': name, 'handler': handler });
	        },
	
	        cleanupElement: function (element) {
	            var index = element.getAttribute('medium-editor-index');
	            if (index) {
	                this.detachAllEventsFromElement(element);
	                if (this.contentCache) {
	                    delete this.contentCache[index];
	                }
	            }
	        },
	
	        focusElement: function (element) {
	            element.focus();
	            this.updateFocus(element, { target: element, type: 'focus' });
	        },
	
	        updateFocus: function (target, eventObj) {
	            var hadFocus = this.base.getFocusedElement(),
	                toFocus;
	
	            // For clicks, we need to know if the mousedown that caused the click happened inside the existing focused element
	            // or one of the extension elements.  If so, we don't want to focus another element
	            if (hadFocus &&
	                eventObj.type === 'click' &&
	                this.lastMousedownTarget &&
	                (MediumEditor.util.isDescendant(hadFocus, this.lastMousedownTarget, true) ||
	                    isElementDescendantOfExtension(this.base.extensions, this.lastMousedownTarget))) {
	                toFocus = hadFocus;
	            }
	
	            if (!toFocus) {
	                this.base.elements.some(function (element) {
	                    // If the target is part of an editor element, this is the element getting focus
	                    if (!toFocus && (MediumEditor.util.isDescendant(element, target, true))) {
	                        toFocus = element;
	                    }
	
	                    // bail if we found an element that's getting focus
	                    return !!toFocus;
	                }, this);
	            }
	
	            // Check if the target is external (not part of the editor, toolbar, or any other extension)
	            var externalEvent = !MediumEditor.util.isDescendant(hadFocus, target, true) &&
	                !isElementDescendantOfExtension(this.base.extensions, target);
	
	            if (toFocus !== hadFocus) {
	                // If element has focus, and focus is going outside of editor
	                // Don't blur focused element if clicking on editor, toolbar, or anchorpreview
	                if (hadFocus && externalEvent) {
	                    // Trigger blur on the editable that has lost focus
	                    hadFocus.removeAttribute('data-medium-focused');
	                    this.triggerCustomEvent('blur', eventObj, hadFocus);
	                }
	
	                // If focus is going into an editor element
	                if (toFocus) {
	                    // Trigger focus on the editable that now has focus
	                    toFocus.setAttribute('data-medium-focused', true);
	                    this.triggerCustomEvent('focus', eventObj, toFocus);
	                }
	            }
	
	            if (externalEvent) {
	                this.triggerCustomEvent('externalInteraction', eventObj);
	            }
	        },
	
	        updateInput: function (target, eventObj) {
	            if (!this.contentCache) {
	                return;
	            }
	            // An event triggered which signifies that the user may have changed someting
	            // Look in our cache of input for the contenteditables to see if something changed
	            var index = target.getAttribute('medium-editor-index'),
	                html = target.innerHTML;
	
	            if (html !== this.contentCache[index]) {
	                // The content has changed since the last time we checked, fire the event
	                this.triggerCustomEvent('editableInput', eventObj, target);
	            }
	            this.contentCache[index] = html;
	        },
	
	        handleDocumentSelectionChange: function (event) {
	            // When selectionchange fires, target and current target are set
	            // to document, since this is where the event is handled
	            // However, currentTarget will have an 'activeElement' property
	            // which will point to whatever element has focus.
	            if (event.currentTarget && event.currentTarget.activeElement) {
	                var activeElement = event.currentTarget.activeElement,
	                    currentTarget;
	                // We can look at the 'activeElement' to determine if the selectionchange has
	                // happened within a contenteditable owned by this instance of MediumEditor
	                this.base.elements.some(function (element) {
	                    if (MediumEditor.util.isDescendant(element, activeElement, true)) {
	                        currentTarget = element;
	                        return true;
	                    }
	                    return false;
	                }, this);
	
	                // We know selectionchange fired within one of our contenteditables
	                if (currentTarget) {
	                    this.updateInput(currentTarget, { target: activeElement, currentTarget: currentTarget });
	                }
	            }
	        },
	
	        handleDocumentExecCommand: function () {
	            // document.execCommand has been called
	            // If one of our contenteditables currently has focus, we should
	            // attempt to trigger the 'editableInput' event
	            var target = this.base.getFocusedElement();
	            if (target) {
	                this.updateInput(target, { target: target, currentTarget: target });
	            }
	        },
	
	        handleBodyClick: function (event) {
	            this.updateFocus(event.target, event);
	        },
	
	        handleBodyFocus: function (event) {
	            this.updateFocus(event.target, event);
	        },
	
	        handleBodyMousedown: function (event) {
	            this.lastMousedownTarget = event.target;
	        },
	
	        handleInput: function (event) {
	            this.updateInput(event.currentTarget, event);
	        },
	
	        handleClick: function (event) {
	            this.triggerCustomEvent('editableClick', event, event.currentTarget);
	        },
	
	        handleBlur: function (event) {
	            this.triggerCustomEvent('editableBlur', event, event.currentTarget);
	        },
	
	        handleKeypress: function (event) {
	            this.triggerCustomEvent('editableKeypress', event, event.currentTarget);
	
	            // If we're doing manual detection of the editableInput event we need
	            // to check for input changes during 'keypress'
	            if (this.keypressUpdateInput) {
	                var eventObj = { target: event.target, currentTarget: event.currentTarget };
	
	                // In IE, we need to let the rest of the event stack complete before we detect
	                // changes to input, so using setTimeout here
	                setTimeout(function () {
	                    this.updateInput(eventObj.currentTarget, eventObj);
	                }.bind(this), 0);
	            }
	        },
	
	        handleKeyup: function (event) {
	            this.triggerCustomEvent('editableKeyup', event, event.currentTarget);
	        },
	
	        handleMouseover: function (event) {
	            this.triggerCustomEvent('editableMouseover', event, event.currentTarget);
	        },
	
	        handleDragging: function (event) {
	            this.triggerCustomEvent('editableDrag', event, event.currentTarget);
	        },
	
	        handleDrop: function (event) {
	            this.triggerCustomEvent('editableDrop', event, event.currentTarget);
	        },
	
	        handlePaste: function (event) {
	            this.triggerCustomEvent('editablePaste', event, event.currentTarget);
	        },
	
	        handleKeydown: function (event) {
	
	            this.triggerCustomEvent('editableKeydown', event, event.currentTarget);
	
	            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.SPACE)) {
	                return this.triggerCustomEvent('editableKeydownSpace', event, event.currentTarget);
	            }
	
	            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER) || (event.ctrlKey && MediumEditor.util.isKey(event, MediumEditor.util.keyCode.M))) {
	                return this.triggerCustomEvent('editableKeydownEnter', event, event.currentTarget);
	            }
	
	            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.TAB)) {
	                return this.triggerCustomEvent('editableKeydownTab', event, event.currentTarget);
	            }
	
	            if (MediumEditor.util.isKey(event, [MediumEditor.util.keyCode.DELETE, MediumEditor.util.keyCode.BACKSPACE])) {
	                return this.triggerCustomEvent('editableKeydownDelete', event, event.currentTarget);
	            }
	        }
	    };
	
	    MediumEditor.Events = Events;
	}());
	
	(function () {
	    'use strict';
	
	    var Button = MediumEditor.Extension.extend({
	
	        /* Button Options */
	
	        /* action: [string]
	         * The action argument to pass to MediumEditor.execAction()
	         * when the button is clicked
	         */
	        action: undefined,
	
	        /* aria: [string]
	         * The value to add as the aria-label attribute of the button
	         * element displayed in the toolbar.
	         * This is also used as the tooltip for the button
	         */
	        aria: undefined,
	
	        /* tagNames: [Array]
	         * NOTE: This is not used if useQueryState is set to true.
	         *
	         * Array of element tag names that would indicate that this
	         * button has already been applied. If this action has already
	         * been applied, the button will be displayed as 'active' in the toolbar
	         *
	         * Example:
	         * For 'bold', if the text is ever within a <b> or <strong>
	         * tag that indicates the text is already bold. So the array
	         * of tagNames for bold would be: ['b', 'strong']
	         */
	        tagNames: undefined,
	
	        /* style: [Object]
	         * NOTE: This is not used if useQueryState is set to true.
	         *
	         * A pair of css property & value(s) that indicate that this
	         * button has already been applied. If this action has already
	         * been applied, the button will be displayed as 'active' in the toolbar
	         * Properties of the object:
	         *   prop [String]: name of the css property
	         *   value [String]: value(s) of the css property
	         *                   multiple values can be separated by a '|'
	         *
	         * Example:
	         * For 'bold', if the text is ever within an element with a 'font-weight'
	         * style property set to '700' or 'bold', that indicates the text
	         * is already bold.  So the style object for bold would be:
	         * { prop: 'font-weight', value: '700|bold' }
	         */
	        style: undefined,
	
	        /* useQueryState: [boolean]
	         * Enables/disables whether this button should use the built-in
	         * document.queryCommandState() method to determine whether
	         * the action has already been applied.  If the action has already
	         * been applied, the button will be displayed as 'active' in the toolbar
	         *
	         * Example:
	         * For 'bold', if this is set to true, the code will call:
	         * document.queryCommandState('bold') which will return true if the
	         * browser thinks the text is already bold, and false otherwise
	         */
	        useQueryState: undefined,
	
	        /* contentDefault: [string]
	         * Default innerHTML to put inside the button
	         */
	        contentDefault: undefined,
	
	        /* contentFA: [string]
	         * The innerHTML to use for the content of the button
	         * if the `buttonLabels` option for MediumEditor is set to 'fontawesome'
	         */
	        contentFA: undefined,
	
	        /* classList: [Array]
	         * An array of classNames (strings) to be added to the button
	         */
	        classList: undefined,
	
	        /* attrs: [object]
	         * A set of key-value pairs to add to the button as custom attributes
	         */
	        attrs: undefined,
	
	        // The button constructor can optionally accept the name of a built-in button
	        // (ie 'bold', 'italic', etc.)
	        // When the name of a button is passed, it will initialize itself with the
	        // configuration for that button
	        constructor: function (options) {
	            if (Button.isBuiltInButton(options)) {
	                MediumEditor.Extension.call(this, this.defaults[options]);
	            } else {
	                MediumEditor.Extension.call(this, options);
	            }
	        },
	
	        init: function () {
	            MediumEditor.Extension.prototype.init.apply(this, arguments);
	
	            this.button = this.createButton();
	            this.on(this.button, 'click', this.handleClick.bind(this));
	        },
	
	        /* getButton: [function ()]
	         *
	         * If implemented, this function will be called when
	         * the toolbar is being created.  The DOM Element returned
	         * by this function will be appended to the toolbar along
	         * with any other buttons.
	         */
	        getButton: function () {
	            return this.button;
	        },
	
	        getAction: function () {
	            return (typeof this.action === 'function') ? this.action(this.base.options) : this.action;
	        },
	
	        getAria: function () {
	            return (typeof this.aria === 'function') ? this.aria(this.base.options) : this.aria;
	        },
	
	        getTagNames: function () {
	            return (typeof this.tagNames === 'function') ? this.tagNames(this.base.options) : this.tagNames;
	        },
	
	        createButton: function () {
	            var button = this.document.createElement('button'),
	                content = this.contentDefault,
	                ariaLabel = this.getAria(),
	                buttonLabels = this.getEditorOption('buttonLabels');
	            // Add class names
	            button.classList.add('medium-editor-action');
	            button.classList.add('medium-editor-action-' + this.name);
	            if (this.classList) {
	                this.classList.forEach(function (className) {
	                    button.classList.add(className);
	                });
	            }
	
	            // Add attributes
	            button.setAttribute('data-action', this.getAction());
	            if (ariaLabel) {
	                button.setAttribute('title', ariaLabel);
	                button.setAttribute('aria-label', ariaLabel);
	            }
	            if (this.attrs) {
	                Object.keys(this.attrs).forEach(function (attr) {
	                    button.setAttribute(attr, this.attrs[attr]);
	                }, this);
	            }
	
	            if (buttonLabels === 'fontawesome' && this.contentFA) {
	                content = this.contentFA;
	            }
	            button.innerHTML = content;
	            return button;
	        },
	
	        handleClick: function (event) {
	            event.preventDefault();
	            event.stopPropagation();
	
	            var action = this.getAction();
	
	            if (action) {
	                this.execAction(action);
	            }
	        },
	
	        isActive: function () {
	            return this.button.classList.contains(this.getEditorOption('activeButtonClass'));
	        },
	
	        setInactive: function () {
	            this.button.classList.remove(this.getEditorOption('activeButtonClass'));
	            delete this.knownState;
	        },
	
	        setActive: function () {
	            this.button.classList.add(this.getEditorOption('activeButtonClass'));
	            delete this.knownState;
	        },
	
	        queryCommandState: function () {
	            var queryState = null;
	            if (this.useQueryState) {
	                queryState = this.base.queryCommandState(this.getAction());
	            }
	            return queryState;
	        },
	
	        isAlreadyApplied: function (node) {
	            var isMatch = false,
	                tagNames = this.getTagNames(),
	                styleVals,
	                computedStyle;
	
	            if (this.knownState === false || this.knownState === true) {
	                return this.knownState;
	            }
	
	            if (tagNames && tagNames.length > 0) {
	                isMatch = tagNames.indexOf(node.nodeName.toLowerCase()) !== -1;
	            }
	
	            if (!isMatch && this.style) {
	                styleVals = this.style.value.split('|');
	                computedStyle = this.window.getComputedStyle(node, null).getPropertyValue(this.style.prop);
	                styleVals.forEach(function (val) {
	                    if (!this.knownState) {
	                        isMatch = (computedStyle.indexOf(val) !== -1);
	                        // text-decoration is not inherited by default
	                        // so if the computed style for text-decoration doesn't match
	                        // don't write to knownState so we can fallback to other checks
	                        if (isMatch || this.style.prop !== 'text-decoration') {
	                            this.knownState = isMatch;
	                        }
	                    }
	                }, this);
	            }
	
	            return isMatch;
	        }
	    });
	
	    Button.isBuiltInButton = function (name) {
	        return (typeof name === 'string') && MediumEditor.extensions.button.prototype.defaults.hasOwnProperty(name);
	    };
	
	    MediumEditor.extensions.button = Button;
	}());
	
	(function () {
	    'use strict';
	
	    /* MediumEditor.extensions.button.defaults: [Object]
	     * Set of default config options for all of the built-in MediumEditor buttons
	     */
	    MediumEditor.extensions.button.prototype.defaults = {
	        'bold': {
	            name: 'bold',
	            action: 'bold',
	            aria: 'bold',
	            tagNames: ['b', 'strong'],
	            style: {
	                prop: 'font-weight',
	                value: '700|bold'
	            },
	            useQueryState: true,
	            contentDefault: '<b>B</b>',
	            contentFA: '<i class="fa fa-bold"></i>'
	        },
	        'italic': {
	            name: 'italic',
	            action: 'italic',
	            aria: 'italic',
	            tagNames: ['i', 'em'],
	            style: {
	                prop: 'font-style',
	                value: 'italic'
	            },
	            useQueryState: true,
	            contentDefault: '<b><i>I</i></b>',
	            contentFA: '<i class="fa fa-italic"></i>'
	        },
	        'underline': {
	            name: 'underline',
	            action: 'underline',
	            aria: 'underline',
	            tagNames: ['u'],
	            style: {
	                prop: 'text-decoration',
	                value: 'underline'
	            },
	            useQueryState: true,
	            contentDefault: '<b><u>U</u></b>',
	            contentFA: '<i class="fa fa-underline"></i>'
	        },
	        'strikethrough': {
	            name: 'strikethrough',
	            action: 'strikethrough',
	            aria: 'strike through',
	            tagNames: ['strike'],
	            style: {
	                prop: 'text-decoration',
	                value: 'line-through'
	            },
	            useQueryState: true,
	            contentDefault: '<s>A</s>',
	            contentFA: '<i class="fa fa-strikethrough"></i>'
	        },
	        'superscript': {
	            name: 'superscript',
	            action: 'superscript',
	            aria: 'superscript',
	            tagNames: ['sup'],
	            /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for superscript
	               https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
	            // useQueryState: true
	            contentDefault: '<b>x<sup>1</sup></b>',
	            contentFA: '<i class="fa fa-superscript"></i>'
	        },
	        'subscript': {
	            name: 'subscript',
	            action: 'subscript',
	            aria: 'subscript',
	            tagNames: ['sub'],
	            /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for subscript
	               https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
	            // useQueryState: true
	            contentDefault: '<b>x<sub>1</sub></b>',
	            contentFA: '<i class="fa fa-subscript"></i>'
	        },
	        'image': {
	            name: 'image',
	            action: 'image',
	            aria: 'image',
	            tagNames: ['img'],
	            contentDefault: '<b>image</b>',
	            contentFA: '<i class="fa fa-picture-o"></i>'
	        },
	        'orderedlist': {
	            name: 'orderedlist',
	            action: 'insertorderedlist',
	            aria: 'ordered list',
	            tagNames: ['ol'],
	            useQueryState: true,
	            contentDefault: '<b>1.</b>',
	            contentFA: '<i class="fa fa-list-ol"></i>'
	        },
	        'unorderedlist': {
	            name: 'unorderedlist',
	            action: 'insertunorderedlist',
	            aria: 'unordered list',
	            tagNames: ['ul'],
	            useQueryState: true,
	            contentDefault: '<b>&bull;</b>',
	            contentFA: '<i class="fa fa-list-ul"></i>'
	        },
	        'indent': {
	            name: 'indent',
	            action: 'indent',
	            aria: 'indent',
	            tagNames: [],
	            contentDefault: '<b>&rarr;</b>',
	            contentFA: '<i class="fa fa-indent"></i>'
	        },
	        'outdent': {
	            name: 'outdent',
	            action: 'outdent',
	            aria: 'outdent',
	            tagNames: [],
	            contentDefault: '<b>&larr;</b>',
	            contentFA: '<i class="fa fa-outdent"></i>'
	        },
	        'justifyCenter': {
	            name: 'justifyCenter',
	            action: 'justifyCenter',
	            aria: 'center justify',
	            tagNames: [],
	            style: {
	                prop: 'text-align',
	                value: 'center'
	            },
	            contentDefault: '<b>C</b>',
	            contentFA: '<i class="fa fa-align-center"></i>'
	        },
	        'justifyFull': {
	            name: 'justifyFull',
	            action: 'justifyFull',
	            aria: 'full justify',
	            tagNames: [],
	            style: {
	                prop: 'text-align',
	                value: 'justify'
	            },
	            contentDefault: '<b>J</b>',
	            contentFA: '<i class="fa fa-align-justify"></i>'
	        },
	        'justifyLeft': {
	            name: 'justifyLeft',
	            action: 'justifyLeft',
	            aria: 'left justify',
	            tagNames: [],
	            style: {
	                prop: 'text-align',
	                value: 'left'
	            },
	            contentDefault: '<b>L</b>',
	            contentFA: '<i class="fa fa-align-left"></i>'
	        },
	        'justifyRight': {
	            name: 'justifyRight',
	            action: 'justifyRight',
	            aria: 'right justify',
	            tagNames: [],
	            style: {
	                prop: 'text-align',
	                value: 'right'
	            },
	            contentDefault: '<b>R</b>',
	            contentFA: '<i class="fa fa-align-right"></i>'
	        },
	        // Known inline elements that are not removed, or not removed consistantly across browsers:
	        // <span>, <label>, <br>
	        'removeFormat': {
	            name: 'removeFormat',
	            aria: 'remove formatting',
	            action: 'removeFormat',
	            contentDefault: '<b>X</b>',
	            contentFA: '<i class="fa fa-eraser"></i>'
	        },
	
	        /***** Buttons for appending block elements (append-<element> action) *****/
	
	        'quote': {
	            name: 'quote',
	            action: 'append-blockquote',
	            aria: 'blockquote',
	            tagNames: ['blockquote'],
	            contentDefault: '<b>&ldquo;</b>',
	            contentFA: '<i class="fa fa-quote-right"></i>'
	        },
	        'pre': {
	            name: 'pre',
	            action: 'append-pre',
	            aria: 'preformatted text',
	            tagNames: ['pre'],
	            contentDefault: '<b>0101</b>',
	            contentFA: '<i class="fa fa-code fa-lg"></i>'
	        },
	        'h1': {
	            name: 'h1',
	            action: 'append-h1',
	            aria: 'header type one',
	            tagNames: ['h1'],
	            contentDefault: '<b>H1</b>',
	            contentFA: '<i class="fa fa-header"><sup>1</sup>'
	        },
	        'h2': {
	            name: 'h2',
	            action: 'append-h2',
	            aria: 'header type two',
	            tagNames: ['h2'],
	            contentDefault: '<b>H2</b>',
	            contentFA: '<i class="fa fa-header"><sup>2</sup>'
	        },
	        'h3': {
	            name: 'h3',
	            action: 'append-h3',
	            aria: 'header type three',
	            tagNames: ['h3'],
	            contentDefault: '<b>H3</b>',
	            contentFA: '<i class="fa fa-header"><sup>3</sup>'
	        },
	        'h4': {
	            name: 'h4',
	            action: 'append-h4',
	            aria: 'header type four',
	            tagNames: ['h4'],
	            contentDefault: '<b>H4</b>',
	            contentFA: '<i class="fa fa-header"><sup>4</sup>'
	        },
	        'h5': {
	            name: 'h5',
	            action: 'append-h5',
	            aria: 'header type five',
	            tagNames: ['h5'],
	            contentDefault: '<b>H5</b>',
	            contentFA: '<i class="fa fa-header"><sup>5</sup>'
	        },
	        'h6': {
	            name: 'h6',
	            action: 'append-h6',
	            aria: 'header type six',
	            tagNames: ['h6'],
	            contentDefault: '<b>H6</b>',
	            contentFA: '<i class="fa fa-header"><sup>6</sup>'
	        }
	    };
	
	})();
	(function () {
	    'use strict';
	
	    /* Base functionality for an extension which will display
	     * a 'form' inside the toolbar
	     */
	    var FormExtension = MediumEditor.extensions.button.extend({
	
	        init: function () {
	            MediumEditor.extensions.button.prototype.init.apply(this, arguments);
	        },
	
	        // default labels for the form buttons
	        formSaveLabel: '&#10003;',
	        formCloseLabel: '&times;',
	
	        /* activeClass: [string]
	         * set class which added to shown form
	         */
	        activeClass: 'medium-editor-toolbar-form-active',
	
	        /* hasForm: [boolean]
	         *
	         * Setting this to true will cause getForm() to be called
	         * when the toolbar is created, so the form can be appended
	         * inside the toolbar container
	         */
	        hasForm: true,
	
	        /* getForm: [function ()]
	         *
	         * When hasForm is true, this function must be implemented
	         * and return a DOM Element which will be appended to
	         * the toolbar container. The form should start hidden, and
	         * the extension can choose when to hide/show it
	         */
	        getForm: function () {},
	
	        /* isDisplayed: [function ()]
	         *
	         * This function should return true/false reflecting
	         * whether the form is currently displayed
	         */
	        isDisplayed: function () {
	            if (this.hasForm) {
	                return this.getForm().classList.contains(this.activeClass);
	            }
	            return false;
	        },
	
	        /* hideForm: [function ()]
	         *
	         * This function should show the form element inside
	         * the toolbar container
	         */
	        showForm: function () {
	            if (this.hasForm) {
	                this.getForm().classList.add(this.activeClass);
	            }
	        },
	
	        /* hideForm: [function ()]
	         *
	         * This function should hide the form element inside
	         * the toolbar container
	         */
	        hideForm: function () {
	            if (this.hasForm) {
	                this.getForm().classList.remove(this.activeClass);
	            }
	        },
	
	        /************************ Helpers ************************
	         * The following are helpers that are either set by MediumEditor
	         * during initialization, or are helper methods which either
	         * route calls to the MediumEditor instance or provide common
	         * functionality for all form extensions
	         *********************************************************/
	
	        /* showToolbarDefaultActions: [function ()]
	         *
	         * Helper method which will turn back the toolbar after canceling
	         * the customized form
	         */
	        showToolbarDefaultActions: function () {
	            var toolbar = this.base.getExtensionByName('toolbar');
	            if (toolbar) {
	                toolbar.showToolbarDefaultActions();
	            }
	        },
	
	        /* hideToolbarDefaultActions: [function ()]
	         *
	         * Helper function which will hide the default contents of the
	         * toolbar, but leave the toolbar container in the same state
	         * to allow a form to display its custom contents inside the toolbar
	         */
	        hideToolbarDefaultActions: function () {
	            var toolbar = this.base.getExtensionByName('toolbar');
	            if (toolbar) {
	                toolbar.hideToolbarDefaultActions();
	            }
	        },
	
	        /* setToolbarPosition: [function ()]
	         *
	         * Helper function which will update the size and position
	         * of the toolbar based on the toolbar content and the current
	         * position of the user's selection
	         */
	        setToolbarPosition: function () {
	            var toolbar = this.base.getExtensionByName('toolbar');
	            if (toolbar) {
	                toolbar.setToolbarPosition();
	            }
	        }
	    });
	
	    MediumEditor.extensions.form = FormExtension;
	})();
	(function () {
	    'use strict';
	
	    var AnchorForm = MediumEditor.extensions.form.extend({
	        /* Anchor Form Options */
	
	        /* customClassOption: [string]  (previously options.anchorButton + options.anchorButtonClass)
	         * Custom class name the user can optionally have added to their created links (ie 'button').
	         * If passed as a non-empty string, a checkbox will be displayed allowing the user to choose
	         * whether to have the class added to the created link or not.
	         */
	        customClassOption: null,
	
	        /* customClassOptionText: [string]
	         * text to be shown in the checkbox when the __customClassOption__ is being used.
	         */
	        customClassOptionText: 'Button',
	
	        /* linkValidation: [boolean]  (previously options.checkLinkFormat)
	         * enables/disables check for common URL protocols on anchor links.
	         */
	        linkValidation: false,
	
	        /* placeholderText: [string]  (previously options.anchorInputPlaceholder)
	         * text to be shown as placeholder of the anchor input.
	         */
	        placeholderText: 'Paste or type a link',
	
	        /* targetCheckbox: [boolean]  (previously options.anchorTarget)
	         * enables/disables displaying a "Open in new window" checkbox, which when checked
	         * changes the `target` attribute of the created link.
	         */
	        targetCheckbox: false,
	
	        /* targetCheckboxText: [string]  (previously options.anchorInputCheckboxLabel)
	         * text to be shown in the checkbox enabled via the __targetCheckbox__ option.
	         */
	        targetCheckboxText: 'Open in new window',
	
	        // Options for the Button base class
	        name: 'anchor',
	        action: 'createLink',
	        aria: 'link',
	        tagNames: ['a'],
	        contentDefault: '<b>#</b>',
	        contentFA: '<i class="fa fa-link"></i>',
	
	        init: function () {
	            MediumEditor.extensions.form.prototype.init.apply(this, arguments);
	
	            this.subscribe('editableKeydown', this.handleKeydown.bind(this));
	        },
	
	        // Called when the button the toolbar is clicked
	        // Overrides ButtonExtension.handleClick
	        handleClick: function (event) {
	            event.preventDefault();
	            event.stopPropagation();
	
	            var range = MediumEditor.selection.getSelectionRange(this.document);
	
	            if (range.startContainer.nodeName.toLowerCase() === 'a' ||
	                range.endContainer.nodeName.toLowerCase() === 'a' ||
	                MediumEditor.util.getClosestTag(MediumEditor.selection.getSelectedParentElement(range), 'a')) {
	                return this.execAction('unlink');
	            }
	
	            if (!this.isDisplayed()) {
	                this.showForm();
	            }
	
	            return false;
	        },
	
	        // Called when user hits the defined shortcut (CTRL / COMMAND + K)
	        handleKeydown: function (event) {
	            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.K) && MediumEditor.util.isMetaCtrlKey(event) && !event.shiftKey) {
	                this.handleClick(event);
	            }
	        },
	
	        // Called by medium-editor to append form to the toolbar
	        getForm: function () {
	            if (!this.form) {
	                this.form = this.createForm();
	            }
	            return this.form;
	        },
	
	        getTemplate: function () {
	            var template = [
	                '<input type="text" class="medium-editor-toolbar-input" placeholder="', this.placeholderText, '">'
	            ];
	
	            template.push(
	                '<a href="#" class="medium-editor-toolbar-save">',
	                this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-check"></i>' : this.formSaveLabel,
	                '</a>'
	            );
	
	            template.push('<a href="#" class="medium-editor-toolbar-close">',
	                this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-times"></i>' : this.formCloseLabel,
	                '</a>');
	
	            // both of these options are slightly moot with the ability to
	            // override the various form buildup/serialize functions.
	
	            if (this.targetCheckbox) {
	                // fixme: ideally, this targetCheckboxText would be a formLabel too,
	                // figure out how to deprecate? also consider `fa-` icon default implcations.
	                template.push(
	                    '<div class="medium-editor-toolbar-form-row">',
	                    '<input type="checkbox" class="medium-editor-toolbar-anchor-target">',
	                    '<label>',
	                    this.targetCheckboxText,
	                    '</label>',
	                    '</div>'
	                );
	            }
	
	            if (this.customClassOption) {
	                // fixme: expose this `Button` text as a formLabel property, too
	                // and provide similar access to a `fa-` icon default.
	                template.push(
	                    '<div class="medium-editor-toolbar-form-row">',
	                    '<input type="checkbox" class="medium-editor-toolbar-anchor-button">',
	                    '<label>',
	                    this.customClassOptionText,
	                    '</label>',
	                    '</div>'
	                );
	            }
	
	            return template.join('');
	
	        },
	
	        // Used by medium-editor when the default toolbar is to be displayed
	        isDisplayed: function () {
	            return MediumEditor.extensions.form.prototype.isDisplayed.apply(this);
	        },
	
	        hideForm: function () {
	            MediumEditor.extensions.form.prototype.hideForm.apply(this);
	            this.getInput().value = '';
	        },
	
	        showForm: function (opts) {
	            var input = this.getInput(),
	                targetCheckbox = this.getAnchorTargetCheckbox(),
	                buttonCheckbox = this.getAnchorButtonCheckbox();
	
	            opts = opts || { value: '' };
	            // TODO: This is for backwards compatability
	            // We don't need to support the 'string' argument in 6.0.0
	            if (typeof opts === 'string') {
	                opts = {
	                    value: opts
	                };
	            }
	
	            this.base.saveSelection();
	            this.hideToolbarDefaultActions();
	            MediumEditor.extensions.form.prototype.showForm.apply(this);
	            this.setToolbarPosition();
	
	            input.value = opts.value;
	            input.focus();
	
	            // If we have a target checkbox, we want it to be checked/unchecked
	            // based on whether the existing link has target=_blank
	            if (targetCheckbox) {
	                targetCheckbox.checked = opts.target === '_blank';
	            }
	
	            // If we have a custom class checkbox, we want it to be checked/unchecked
	            // based on whether an existing link already has the class
	            if (buttonCheckbox) {
	                var classList = opts.buttonClass ? opts.buttonClass.split(' ') : [];
	                buttonCheckbox.checked = (classList.indexOf(this.customClassOption) !== -1);
	            }
	        },
	
	        // Called by core when tearing down medium-editor (destroy)
	        destroy: function () {
	            if (!this.form) {
	                return false;
	            }
	
	            if (this.form.parentNode) {
	                this.form.parentNode.removeChild(this.form);
	            }
	
	            delete this.form;
	        },
	
	        // core methods
	
	        getFormOpts: function () {
	            // no notion of private functions? wanted `_getFormOpts`
	            var targetCheckbox = this.getAnchorTargetCheckbox(),
	                buttonCheckbox = this.getAnchorButtonCheckbox(),
	                opts = {
	                    value: this.getInput().value.trim()
	                };
	
	            if (this.linkValidation) {
	                opts.value = this.checkLinkFormat(opts.value);
	            }
	
	            opts.target = '_self';
	            if (targetCheckbox && targetCheckbox.checked) {
	                opts.target = '_blank';
	            }
	
	            if (buttonCheckbox && buttonCheckbox.checked) {
	                opts.buttonClass = this.customClassOption;
	            }
	
	            return opts;
	        },
	
	        doFormSave: function () {
	            var opts = this.getFormOpts();
	            this.completeFormSave(opts);
	        },
	
	        completeFormSave: function (opts) {
	            this.base.restoreSelection();
	            this.execAction(this.action, opts);
	            this.base.checkSelection();
	        },
	
	        ensureEncodedUri: function (str) {
	            return str === decodeURI(str) ? encodeURI(str) : str;
	        },
	
	        ensureEncodedUriComponent: function (str) {
	            return str === decodeURIComponent(str) ? encodeURIComponent(str) : str;
	        },
	
	        ensureEncodedParam: function (param) {
	            var split = param.split('='),
	                key = split[0],
	                val = split[1];
	
	            return key + (val === undefined ? '' : '=' + this.ensureEncodedUriComponent(val));
	        },
	
	        ensureEncodedQuery: function (queryString) {
	            return queryString.split('&').map(this.ensureEncodedParam.bind(this)).join('&');
	        },
	
	        checkLinkFormat: function (value) {
	            // Matches any alphabetical characters followed by ://
	            // Matches protocol relative "//"
	            // Matches common external protocols "mailto:" "tel:" "maps:"
	            // Matches relative hash link, begins with "#"
	            var urlSchemeRegex = /^([a-z]+:)?\/\/|^(mailto|tel|maps):|^\#/i,
	                // telRegex is a regex for checking if the string is a telephone number
	                telRegex = /^\+?\s?\(?(?:\d\s?\-?\)?){3,20}$/,
	                split = value.split('?'),
	                path = split[0],
	                query = split[1];
	
	            if (telRegex.test(value)) {
	                return 'tel:' + value;
	            } else {
	                // Check for URL scheme and default to http:// if none found
	                return (urlSchemeRegex.test(value) ? '' : 'http://') +
	                    // Ensure path is encoded
	                    this.ensureEncodedUri(path) +
	                    // Ensure query is encoded
	                    (query === undefined ? '' : '?' + this.ensureEncodedQuery(query));
	            }
	        },
	
	        doFormCancel: function () {
	            this.base.restoreSelection();
	            this.base.checkSelection();
	        },
	
	        // form creation and event handling
	        attachFormEvents: function (form) {
	            var close = form.querySelector('.medium-editor-toolbar-close'),
	                save = form.querySelector('.medium-editor-toolbar-save'),
	                input = form.querySelector('.medium-editor-toolbar-input');
	
	            // Handle clicks on the form itself
	            this.on(form, 'click', this.handleFormClick.bind(this));
	
	            // Handle typing in the textbox
	            this.on(input, 'keyup', this.handleTextboxKeyup.bind(this));
	
	            // Handle close button clicks
	            this.on(close, 'click', this.handleCloseClick.bind(this));
	
	            // Handle save button clicks (capture)
	            this.on(save, 'click', this.handleSaveClick.bind(this), true);
	
	        },
	
	        createForm: function () {
	            var doc = this.document,
	                form = doc.createElement('div');
	
	            // Anchor Form (div)
	            form.className = 'medium-editor-toolbar-form';
	            form.id = 'medium-editor-toolbar-form-anchor-' + this.getEditorId();
	            form.innerHTML = this.getTemplate();
	            this.attachFormEvents(form);
	
	            return form;
	        },
	
	        getInput: function () {
	            return this.getForm().querySelector('input.medium-editor-toolbar-input');
	        },
	
	        getAnchorTargetCheckbox: function () {
	            return this.getForm().querySelector('.medium-editor-toolbar-anchor-target');
	        },
	
	        getAnchorButtonCheckbox: function () {
	            return this.getForm().querySelector('.medium-editor-toolbar-anchor-button');
	        },
	
	        handleTextboxKeyup: function (event) {
	            // For ENTER -> create the anchor
	            if (event.keyCode === MediumEditor.util.keyCode.ENTER) {
	                event.preventDefault();
	                this.doFormSave();
	                return;
	            }
	
	            // For ESCAPE -> close the form
	            if (event.keyCode === MediumEditor.util.keyCode.ESCAPE) {
	                event.preventDefault();
	                this.doFormCancel();
	            }
	        },
	
	        handleFormClick: function (event) {
	            // make sure not to hide form when clicking inside the form
	            event.stopPropagation();
	        },
	
	        handleSaveClick: function (event) {
	            // Clicking Save -> create the anchor
	            event.preventDefault();
	            this.doFormSave();
	        },
	
	        handleCloseClick: function (event) {
	            // Click Close -> close the form
	            event.preventDefault();
	            this.doFormCancel();
	        }
	    });
	
	    MediumEditor.extensions.anchor = AnchorForm;
	}());
	
	(function () {
	    'use strict';
	
	    var AnchorPreview = MediumEditor.Extension.extend({
	        name: 'anchor-preview',
	
	        // Anchor Preview Options
	
	        /* hideDelay: [number]  (previously options.anchorPreviewHideDelay)
	         * time in milliseconds to show the anchor tag preview after the mouse has left the anchor tag.
	         */
	        hideDelay: 500,
	
	        /* previewValueSelector: [string]
	         * the default selector to locate where to put the activeAnchor value in the preview
	         */
	        previewValueSelector: 'a',
	
	        /* showWhenToolbarIsVisible: [boolean]
	         * determines whether the anchor tag preview shows up when the toolbar is visible
	         */
	        showWhenToolbarIsVisible: false,
	
	        /* showOnEmptyLinks: [boolean]
	        * determines whether the anchor tag preview shows up on links with href="" or href="#something"
	        */
	        showOnEmptyLinks: true,
	
	        init: function () {
	            this.anchorPreview = this.createPreview();
	
	            this.getEditorOption('elementsContainer').appendChild(this.anchorPreview);
	
	            this.attachToEditables();
	        },
	
	        getInteractionElements: function () {
	            return this.getPreviewElement();
	        },
	
	        // TODO: Remove this function in 6.0.0
	        getPreviewElement: function () {
	            return this.anchorPreview;
	        },
	
	        createPreview: function () {
	            var el = this.document.createElement('div');
	
	            el.id = 'medium-editor-anchor-preview-' + this.getEditorId();
	            el.className = 'medium-editor-anchor-preview';
	            el.innerHTML = this.getTemplate();
	
	            this.on(el, 'click', this.handleClick.bind(this));
	
	            return el;
	        },
	
	        getTemplate: function () {
	            return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">' +
	                '    <a class="medium-editor-toolbar-anchor-preview-inner"></a>' +
	                '</div>';
	        },
	
	        destroy: function () {
	            if (this.anchorPreview) {
	                if (this.anchorPreview.parentNode) {
	                    this.anchorPreview.parentNode.removeChild(this.anchorPreview);
	                }
	                delete this.anchorPreview;
	            }
	        },
	
	        hidePreview: function () {
	            if (this.anchorPreview) {
	                this.anchorPreview.classList.remove('medium-editor-anchor-preview-active');
	            }
	            this.activeAnchor = null;
	        },
	
	        showPreview: function (anchorEl) {
	            if (this.anchorPreview.classList.contains('medium-editor-anchor-preview-active') ||
	                    anchorEl.getAttribute('data-disable-preview')) {
	                return true;
	            }
	
	            if (this.previewValueSelector) {
	                this.anchorPreview.querySelector(this.previewValueSelector).textContent = anchorEl.attributes.href.value;
	                this.anchorPreview.querySelector(this.previewValueSelector).href = anchorEl.attributes.href.value;
	            }
	
	            this.anchorPreview.classList.add('medium-toolbar-arrow-over');
	            this.anchorPreview.classList.remove('medium-toolbar-arrow-under');
	
	            if (!this.anchorPreview.classList.contains('medium-editor-anchor-preview-active')) {
	                this.anchorPreview.classList.add('medium-editor-anchor-preview-active');
	            }
	
	            this.activeAnchor = anchorEl;
	
	            this.positionPreview();
	            this.attachPreviewHandlers();
	
	            return this;
	        },
	
	        positionPreview: function (activeAnchor) {
	            activeAnchor = activeAnchor || this.activeAnchor;
	            var containerWidth = this.window.innerWidth,
	                buttonHeight = this.anchorPreview.offsetHeight,
	                boundary = activeAnchor.getBoundingClientRect(),
	                diffLeft = this.diffLeft,
	                diffTop = this.diffTop,
	                elementsContainer = this.getEditorOption('elementsContainer'),
	                elementsContainerAbsolute = ['absolute', 'fixed'].indexOf(window.getComputedStyle(elementsContainer).getPropertyValue('position')) > -1,
	                relativeBoundary = {},
	                halfOffsetWidth, defaultLeft, middleBoundary, elementsContainerBoundary, top;
	
	            halfOffsetWidth = this.anchorPreview.offsetWidth / 2;
	            var toolbarExtension = this.base.getExtensionByName('toolbar');
	            if (toolbarExtension) {
	                diffLeft = toolbarExtension.diffLeft;
	                diffTop = toolbarExtension.diffTop;
	            }
	            defaultLeft = diffLeft - halfOffsetWidth;
	
	            // If container element is absolute / fixed, recalculate boundaries to be relative to the container
	            if (elementsContainerAbsolute) {
	                elementsContainerBoundary = elementsContainer.getBoundingClientRect();
	                ['top', 'left'].forEach(function (key) {
	                    relativeBoundary[key] = boundary[key] - elementsContainerBoundary[key];
	                });
	
	                relativeBoundary.width = boundary.width;
	                relativeBoundary.height = boundary.height;
	                boundary = relativeBoundary;
	
	                containerWidth = elementsContainerBoundary.width;
	
	                // Adjust top position according to container scroll position
	                top = elementsContainer.scrollTop;
	            } else {
	                // Adjust top position according to window scroll position
	                top = this.window.pageYOffset;
	            }
	
	            middleBoundary = boundary.left + boundary.width / 2;
	            top += buttonHeight + boundary.top + boundary.height - diffTop - this.anchorPreview.offsetHeight;
	
	            this.anchorPreview.style.top = Math.round(top) + 'px';
	            this.anchorPreview.style.right = 'initial';
	            if (middleBoundary < halfOffsetWidth) {
	                this.anchorPreview.style.left = defaultLeft + halfOffsetWidth + 'px';
	                this.anchorPreview.style.right = 'initial';
	            } else if ((containerWidth - middleBoundary) < halfOffsetWidth) {
	                this.anchorPreview.style.left = 'auto';
	                this.anchorPreview.style.right = 0;
	            } else {
	                this.anchorPreview.style.left = defaultLeft + middleBoundary + 'px';
	                this.anchorPreview.style.right = 'initial';
	            }
	        },
	
	        attachToEditables: function () {
	            this.subscribe('editableMouseover', this.handleEditableMouseover.bind(this));
	            this.subscribe('positionedToolbar', this.handlePositionedToolbar.bind(this));
	        },
	
	        handlePositionedToolbar: function () {
	            // If the toolbar is visible and positioned, we don't need to hide the preview
	            // when showWhenToolbarIsVisible is true
	            if (!this.showWhenToolbarIsVisible) {
	                this.hidePreview();
	            }
	        },
	
	        handleClick: function (event) {
	            var anchorExtension = this.base.getExtensionByName('anchor'),
	                activeAnchor = this.activeAnchor;
	
	            if (anchorExtension && activeAnchor) {
	                event.preventDefault();
	
	                this.base.selectElement(this.activeAnchor);
	
	                // Using setTimeout + delay because:
	                // We may actually be displaying the anchor form, which should be controlled by delay
	                this.base.delay(function () {
	                    if (activeAnchor) {
	                        var opts = {
	                            value: activeAnchor.attributes.href.value,
	                            target: activeAnchor.getAttribute('target'),
	                            buttonClass: activeAnchor.getAttribute('class')
	                        };
	                        anchorExtension.showForm(opts);
	                        activeAnchor = null;
	                    }
	                }.bind(this));
	            }
	
	            this.hidePreview();
	        },
	
	        handleAnchorMouseout: function () {
	            this.anchorToPreview = null;
	            this.off(this.activeAnchor, 'mouseout', this.instanceHandleAnchorMouseout);
	            this.instanceHandleAnchorMouseout = null;
	        },
	
	        handleEditableMouseover: function (event) {
	            var target = MediumEditor.util.getClosestTag(event.target, 'a');
	
	            if (false === target) {
	                return;
	            }
	
	            // Detect empty href attributes
	            // The browser will make href="" or href="#top"
	            // into absolute urls when accessed as event.target.href, so check the html
	            if (!this.showOnEmptyLinks &&
	                (!/href=["']\S+["']/.test(target.outerHTML) || /href=["']#\S+["']/.test(target.outerHTML))) {
	                return true;
	            }
	
	            // only show when toolbar is not present
	            var toolbar = this.base.getExtensionByName('toolbar');
	            if (!this.showWhenToolbarIsVisible && toolbar && toolbar.isDisplayed && toolbar.isDisplayed()) {
	                return true;
	            }
	
	            // detach handler for other anchor in case we hovered multiple anchors quickly
	            if (this.activeAnchor && this.activeAnchor !== target) {
	                this.detachPreviewHandlers();
	            }
	
	            this.anchorToPreview = target;
	
	            this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this);
	            this.on(this.anchorToPreview, 'mouseout', this.instanceHandleAnchorMouseout);
	            // Using setTimeout + delay because:
	            // - We're going to show the anchor preview according to the configured delay
	            //   if the mouse has not left the anchor tag in that time
	            this.base.delay(function () {
	                if (this.anchorToPreview) {
	                    this.showPreview(this.anchorToPreview);
	                }
	            }.bind(this));
	        },
	
	        handlePreviewMouseover: function () {
	            this.lastOver = (new Date()).getTime();
	            this.hovering = true;
	        },
	
	        handlePreviewMouseout: function (event) {
	            if (!event.relatedTarget || !/anchor-preview/.test(event.relatedTarget.className)) {
	                this.hovering = false;
	            }
	        },
	
	        updatePreview: function () {
	            if (this.hovering) {
	                return true;
	            }
	            var durr = (new Date()).getTime() - this.lastOver;
	            if (durr > this.hideDelay) {
	                // hide the preview 1/2 second after mouse leaves the link
	                this.detachPreviewHandlers();
	            }
	        },
	
	        detachPreviewHandlers: function () {
	            // cleanup
	            clearInterval(this.intervalTimer);
	            if (this.instanceHandlePreviewMouseover) {
	                this.off(this.anchorPreview, 'mouseover', this.instanceHandlePreviewMouseover);
	                this.off(this.anchorPreview, 'mouseout', this.instanceHandlePreviewMouseout);
	                if (this.activeAnchor) {
	                    this.off(this.activeAnchor, 'mouseover', this.instanceHandlePreviewMouseover);
	                    this.off(this.activeAnchor, 'mouseout', this.instanceHandlePreviewMouseout);
	                }
	            }
	
	            this.hidePreview();
	
	            this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null;
	        },
	
	        // TODO: break up method and extract out handlers
	        attachPreviewHandlers: function () {
	            this.lastOver = (new Date()).getTime();
	            this.hovering = true;
	
	            this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this);
	            this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this);
	
	            this.intervalTimer = setInterval(this.updatePreview.bind(this), 200);
	
	            this.on(this.anchorPreview, 'mouseover', this.instanceHandlePreviewMouseover);
	            this.on(this.anchorPreview, 'mouseout', this.instanceHandlePreviewMouseout);
	            this.on(this.activeAnchor, 'mouseover', this.instanceHandlePreviewMouseover);
	            this.on(this.activeAnchor, 'mouseout', this.instanceHandlePreviewMouseout);
	        }
	    });
	
	    MediumEditor.extensions.anchorPreview = AnchorPreview;
	}());
	
	(function () {
	    'use strict';
	
	    var WHITESPACE_CHARS,
	        KNOWN_TLDS_FRAGMENT,
	        LINK_REGEXP_TEXT,
	        KNOWN_TLDS_REGEXP,
	        LINK_REGEXP;
	
	    WHITESPACE_CHARS = [' ', '\t', '\n', '\r', '\u00A0', '\u2000', '\u2001', '\u2002', '\u2003',
	                                    '\u2028', '\u2029'];
	    KNOWN_TLDS_FRAGMENT = 'com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|' +
	        'xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|' +
	        'bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|' +
	        'fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|' +
	        'is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|' +
	        'mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|' +
	        'pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|' +
	        'tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw';
	
	    LINK_REGEXP_TEXT =
	        '(' +
	        // Version of Gruber URL Regexp optimized for JS: http://stackoverflow.com/a/17733640
	        '((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.](' + KNOWN_TLDS_FRAGMENT + ')\\\/)\\S+(?:[^\\s`!\\[\\]{};:\'\".,?\u00AB\u00BB\u201C\u201D\u2018\u2019]))' +
	        // Addition to above Regexp to support bare domains/one level subdomains with common non-i18n TLDs and without www prefix:
	        ')|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.(' + KNOWN_TLDS_FRAGMENT + '))';
	
	    KNOWN_TLDS_REGEXP = new RegExp('^(' + KNOWN_TLDS_FRAGMENT + ')$', 'i');
	
	    LINK_REGEXP = new RegExp(LINK_REGEXP_TEXT, 'gi');
	
	    function nodeIsNotInsideAnchorTag(node) {
	        return !MediumEditor.util.getClosestTag(node, 'a');
	    }
	
	    var AutoLink = MediumEditor.Extension.extend({
	        init: function () {
	            MediumEditor.Extension.prototype.init.apply(this, arguments);
	
	            this.disableEventHandling = false;
	            this.subscribe('editableKeypress', this.onKeypress.bind(this));
	            this.subscribe('editableBlur', this.onBlur.bind(this));
	            // MS IE has it's own auto-URL detect feature but ours is better in some ways. Be consistent.
	            this.document.execCommand('AutoUrlDetect', false, false);
	        },
	
	        isLastInstance: function () {
	            var activeInstances = 0;
	            for (var i = 0; i < this.window._mediumEditors.length; i++) {
	                var editor = this.window._mediumEditors[i];
	                if (editor !== null && editor.getExtensionByName('autoLink') !== undefined) {
	                    activeInstances++;
	                }
	            }
	            return activeInstances === 1;
	        },
	
	        destroy: function () {
	            // Turn AutoUrlDetect back on
	            if (this.document.queryCommandSupported('AutoUrlDetect') && this.isLastInstance()) {
	                this.document.execCommand('AutoUrlDetect', false, true);
	            }
	        },
	
	        onBlur: function (blurEvent, editable) {
	            this.performLinking(editable);
	        },
	
	        onKeypress: function (keyPressEvent) {
	            if (this.disableEventHandling) {
	                return;
	            }
	
	            if (MediumEditor.util.isKey(keyPressEvent, [MediumEditor.util.keyCode.SPACE, MediumEditor.util.keyCode.ENTER])) {
	                clearTimeout(this.performLinkingTimeout);
	                // Saving/restoring the selection in the middle of a keypress doesn't work well...
	                this.performLinkingTimeout = setTimeout(function () {
	                    try {
	                        var sel = this.base.exportSelection();
	                        if (this.performLinking(keyPressEvent.target)) {
	                            // pass true for favorLaterSelectionAnchor - this is needed for links at the end of a
	                            // paragraph in MS IE, or MS IE causes the link to be deleted right after adding it.
	                            this.base.importSelection(sel, true);
	                        }
	                    } catch (e) {
	                        if (window.console) {
	                            window.console.error('Failed to perform linking', e);
	                        }
	                        this.disableEventHandling = true;
	                    }
	                }.bind(this), 0);
	            }
	        },
	
	        performLinking: function (contenteditable) {
	            /*
	            Perform linking on blockElement basis, blockElements are HTML elements with text content and without
	            child element.
	
	            Example:
	            - HTML content
	            <blockquote>
	              <p>link.</p>
	              <p>my</p>
	            </blockquote>
	
	            - blockElements
	            [<p>link.</p>, <p>my</p>]
	
	            otherwise the detection can wrongly find the end of one paragraph and the beginning of another paragraph
	            to constitute a link, such as a paragraph ending "link." and the next paragraph beginning with "my" is
	            interpreted into "link.my" and the code tries to create a link across blockElements - which doesn't work
	            and is terrible.
	            (Medium deletes the spaces/returns between P tags so the textContent ends up without paragraph spacing)
	            */
	            var blockElements = MediumEditor.util.splitByBlockElements(contenteditable),
	                documentModified = false;
	            if (blockElements.length === 0) {
	                blockElements = [contenteditable];
	            }
	            for (var i = 0; i < blockElements.length; i++) {
	                documentModified = this.removeObsoleteAutoLinkSpans(blockElements[i]) || documentModified;
	                documentModified = this.performLinkingWithinElement(blockElements[i]) || documentModified;
	            }
	            this.base.events.updateInput(contenteditable, { target: contenteditable, currentTarget: contenteditable });
	            return documentModified;
	        },
	
	        removeObsoleteAutoLinkSpans: function (element) {
	            if (!element || element.nodeType === 3) {
	                return false;
	            }
	
	            var spans = element.querySelectorAll('span[data-auto-link="true"]'),
	                documentModified = false;
	
	            for (var i = 0; i < spans.length; i++) {
	                var textContent = spans[i].textContent;
	                if (textContent.indexOf('://') === -1) {
	                    textContent = MediumEditor.util.ensureUrlHasProtocol(textContent);
	                }
	                if (spans[i].getAttribute('data-href') !== textContent && nodeIsNotInsideAnchorTag(spans[i])) {
	                    documentModified = true;
	                    var trimmedTextContent = textContent.replace(/\s+$/, '');
	                    if (spans[i].getAttribute('data-href') === trimmedTextContent) {
	                        var charactersTrimmed = textContent.length - trimmedTextContent.length,
	                            subtree = MediumEditor.util.splitOffDOMTree(spans[i], this.splitTextBeforeEnd(spans[i], charactersTrimmed));
	                        spans[i].parentNode.insertBefore(subtree, spans[i].nextSibling);
	                    } else {
	                        // Some editing has happened to the span, so just remove it entirely. The user can put it back
	                        // around just the href content if they need to prevent it from linking
	                        MediumEditor.util.unwrap(spans[i], this.document);
	                    }
	                }
	            }
	            return documentModified;
	        },
	
	        splitTextBeforeEnd: function (element, characterCount) {
	            var treeWalker = this.document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false),
	                lastChildNotExhausted = true;
	
	            // Start the tree walker at the last descendant of the span
	            while (lastChildNotExhausted) {
	                lastChildNotExhausted = treeWalker.lastChild() !== null;
	            }
	
	            var currentNode,
	                currentNodeValue,
	                previousNode;
	            while (characterCount > 0 && previousNode !== null) {
	                currentNode = treeWalker.currentNode;
	                currentNodeValue = currentNode.nodeValue;
	                if (currentNodeValue.length > characterCount) {
	                    previousNode = currentNode.splitText(currentNodeValue.length - characterCount);
	                    characterCount = 0;
	                } else {
	                    previousNode = treeWalker.previousNode();
	                    characterCount -= currentNodeValue.length;
	                }
	            }
	            return previousNode;
	        },
	
	        performLinkingWithinElement: function (element) {
	            var matches = this.findLinkableText(element),
	                linkCreated = false;
	
	            for (var matchIndex = 0; matchIndex < matches.length; matchIndex++) {
	                var matchingTextNodes = MediumEditor.util.findOrCreateMatchingTextNodes(this.document, element,
	                        matches[matchIndex]);
	                if (this.shouldNotLink(matchingTextNodes)) {
	                    continue;
	                }
	                this.createAutoLink(matchingTextNodes, matches[matchIndex].href);
	            }
	            return linkCreated;
	        },
	
	        shouldNotLink: function (textNodes) {
	            var shouldNotLink = false;
	            for (var i = 0; i < textNodes.length && shouldNotLink === false; i++) {
	                // Do not link if the text node is either inside an anchor or inside span[data-auto-link]
	                shouldNotLink = !!MediumEditor.util.traverseUp(textNodes[i], function (node) {
	                    return node.nodeName.toLowerCase() === 'a' ||
	                        (node.getAttribute && node.getAttribute('data-auto-link') === 'true');
	                });
	            }
	            return shouldNotLink;
	        },
	
	        findLinkableText: function (contenteditable) {
	            var textContent = contenteditable.textContent,
	                match = null,
	                matches = [];
	
	            while ((match = LINK_REGEXP.exec(textContent)) !== null) {
	                var matchOk = true,
	                    matchEnd = match.index + match[0].length;
	                // If the regexp detected something as a link that has text immediately preceding/following it, bail out.
	                matchOk = (match.index === 0 || WHITESPACE_CHARS.indexOf(textContent[match.index - 1]) !== -1) &&
	                    (matchEnd === textContent.length || WHITESPACE_CHARS.indexOf(textContent[matchEnd]) !== -1);
	                // If the regexp detected a bare domain that doesn't use one of our expected TLDs, bail out.
	                matchOk = matchOk && (match[0].indexOf('/') !== -1 ||
	                    KNOWN_TLDS_REGEXP.test(match[0].split('.').pop().split('?').shift()));
	
	                if (matchOk) {
	                    matches.push({
	                        href: match[0],
	                        start: match.index,
	                        end: matchEnd
	                    });
	                }
	            }
	            return matches;
	        },
	
	        createAutoLink: function (textNodes, href) {
	            href = MediumEditor.util.ensureUrlHasProtocol(href);
	            var anchor = MediumEditor.util.createLink(this.document, textNodes, href, this.getEditorOption('targetBlank') ? '_blank' : null),
	                span = this.document.createElement('span');
	            span.setAttribute('data-auto-link', 'true');
	            span.setAttribute('data-href', href);
	            anchor.insertBefore(span, anchor.firstChild);
	            while (anchor.childNodes.length > 1) {
	                span.appendChild(anchor.childNodes[1]);
	            }
	        }
	
	    });
	
	    MediumEditor.extensions.autoLink = AutoLink;
	}());
	
	(function () {
	    'use strict';
	
	    var CLASS_DRAG_OVER = 'medium-editor-dragover';
	
	    function clearClassNames(element) {
	        var editable = MediumEditor.util.getContainerEditorElement(element),
	            existing = Array.prototype.slice.call(editable.parentElement.querySelectorAll('.' + CLASS_DRAG_OVER));
	
	        existing.forEach(function (el) {
	            el.classList.remove(CLASS_DRAG_OVER);
	        });
	    }
	
	    var FileDragging = MediumEditor.Extension.extend({
	        name: 'fileDragging',
	
	        allowedTypes: ['image'],
	
	        init: function () {
	            MediumEditor.Extension.prototype.init.apply(this, arguments);
	
	            this.subscribe('editableDrag', this.handleDrag.bind(this));
	            this.subscribe('editableDrop', this.handleDrop.bind(this));
	        },
	
	        handleDrag: function (event) {
	            event.preventDefault();
	            event.dataTransfer.dropEffect = 'copy';
	
	            var target = event.target.classList ? event.target : event.target.parentElement;
	
	            // Ensure the class gets removed from anything that had it before
	            clearClassNames(target);
	
	            if (event.type === 'dragover') {
	                target.classList.add(CLASS_DRAG_OVER);
	            }
	        },
	
	        handleDrop: function (event) {
	            // Prevent file from opening in the current window
	            event.preventDefault();
	            event.stopPropagation();
	            // Select the dropping target, and set the selection to the end of the target
	            // https://github.com/yabwe/medium-editor/issues/980
	            this.base.selectElement(event.target);
	            var selection = this.base.exportSelection();
	            selection.start = selection.end;
	            this.base.importSelection(selection);
	            // IE9 does not support the File API, so prevent file from opening in the window
	            // but also don't try to actually get the file
	            if (event.dataTransfer.files) {
	                Array.prototype.slice.call(event.dataTransfer.files).forEach(function (file) {
	                    if (this.isAllowedFile(file)) {
	                        if (file.type.match('image')) {
	                            this.insertImageFile(file);
	                        }
	                    }
	                }, this);
	            }
	
	            // Make sure we remove our class from everything
	            clearClassNames(event.target);
	        },
	
	        isAllowedFile: function (file) {
	            return this.allowedTypes.some(function (fileType) {
	                return !!file.type.match(fileType);
	            });
	        },
	
	        insertImageFile: function (file) {
	            if (typeof FileReader !== 'function') {
	                return;
	            }
	            var fileReader = new FileReader();
	            fileReader.readAsDataURL(file);
	
	            // attach the onload event handler, makes it easier to listen in with jasmine
	            fileReader.addEventListener('load', function (e) {
	                var addImageElement = this.document.createElement('img');
	                addImageElement.src = e.target.result;
	                MediumEditor.util.insertHTMLCommand(this.document, addImageElement.outerHTML);
	            }.bind(this));
	        }
	    });
	
	    MediumEditor.extensions.fileDragging = FileDragging;
	}());
	
	(function () {
	    'use strict';
	
	    var KeyboardCommands = MediumEditor.Extension.extend({
	        name: 'keyboard-commands',
	
	        /* KeyboardCommands Options */
	
	        /* commands: [Array]
	         * Array of objects describing each command and the combination of keys that will trigger it
	         * Required for each object:
	         *   command [String] (argument passed to editor.execAction())
	         *   key [String] (keyboard character that triggers this command)
	         *   meta [boolean] (whether the ctrl/meta key has to be active or inactive)
	         *   shift [boolean] (whether the shift key has to be active or inactive)
	         *   alt [boolean] (whether the alt key has to be active or inactive)
	         */
	        commands: [
	            {
	                command: 'bold',
	                key: 'B',
	                meta: true,
	                shift: false,
	                alt: false
	            },
	            {
	                command: 'italic',
	                key: 'I',
	                meta: true,
	                shift: false,
	                alt: false
	            },
	            {
	                command: 'underline',
	                key: 'U',
	                meta: true,
	                shift: false,
	                alt: false
	            }
	        ],
	
	        init: function () {
	            MediumEditor.Extension.prototype.init.apply(this, arguments);
	
	            this.subscribe('editableKeydown', this.handleKeydown.bind(this));
	            this.keys = {};
	            this.commands.forEach(function (command) {
	                var keyCode = command.key.charCodeAt(0);
	                if (!this.keys[keyCode]) {
	                    this.keys[keyCode] = [];
	                }
	                this.keys[keyCode].push(command);
	            }, this);
	        },
	
	        handleKeydown: function (event) {
	            var keyCode = MediumEditor.util.getKeyCode(event);
	            if (!this.keys[keyCode]) {
	                return;
	            }
	
	            var isMeta = MediumEditor.util.isMetaCtrlKey(event),
	                isShift = !!event.shiftKey,
	                isAlt = !!event.altKey;
	
	            this.keys[keyCode].forEach(function (data) {
	                if (data.meta === isMeta &&
	                    data.shift === isShift &&
	                    (data.alt === isAlt ||
	                     undefined === data.alt)) { // TODO deprecated: remove check for undefined === data.alt when jumping to 6.0.0
	                    event.preventDefault();
	                    event.stopPropagation();
	
	                    // command can be a function to execute
	                    if (typeof data.command === 'function') {
	                        data.command.apply(this);
	                    }
	                    // command can be false so the shortcut is just disabled
	                    else if (false !== data.command) {
	                        this.execAction(data.command);
	                    }
	                }
	            }, this);
	        }
	    });
	
	    MediumEditor.extensions.keyboardCommands = KeyboardCommands;
	}());
	
	(function () {
	    'use strict';
	
	    var FontNameForm = MediumEditor.extensions.form.extend({
	
	        name: 'fontname',
	        action: 'fontName',
	        aria: 'change font name',
	        contentDefault: '&#xB1;', // ±
	        contentFA: '<i class="fa fa-font"></i>',
	
	        fonts: ['', 'Arial', 'Verdana', 'Times New Roman'],
	
	        init: function () {
	            MediumEditor.extensions.form.prototype.init.apply(this, arguments);
	        },
	
	        // Called when the button the toolbar is clicked
	        // Overrides ButtonExtension.handleClick
	        handleClick: function (event) {
	            event.preventDefault();
	            event.stopPropagation();
	
	            if (!this.isDisplayed()) {
	                // Get FontName of current selection (convert to string since IE returns this as number)
	                var fontName = this.document.queryCommandValue('fontName') + '';
	                this.showForm(fontName);
	            }
	
	            return false;
	        },
	
	        // Called by medium-editor to append form to the toolbar
	        getForm: function () {
	            if (!this.form) {
	                this.form = this.createForm();
	            }
	            return this.form;
	        },
	
	        // Used by medium-editor when the default toolbar is to be displayed
	        isDisplayed: function () {
	            return this.getForm().style.display === 'block';
	        },
	
	        hideForm: function () {
	            this.getForm().style.display = 'none';
	            this.getSelect().value = '';
	        },
	
	        showForm: function (fontName) {
	            var select = this.getSelect();
	
	            this.base.saveSelection();
	            this.hideToolbarDefaultActions();
	            this.getForm().style.display = 'block';
	            this.setToolbarPosition();
	
	            select.value = fontName || '';
	            select.focus();
	        },
	
	        // Called by core when tearing down medium-editor (destroy)
	        destroy: function () {
	            if (!this.form) {
	                return false;
	            }
	
	            if (this.form.parentNode) {
	                this.form.parentNode.removeChild(this.form);
	            }
	
	            delete this.form;
	        },
	
	        // core methods
	
	        doFormSave: function () {
	            this.base.restoreSelection();
	            this.base.checkSelection();
	        },
	
	        doFormCancel: function () {
	            this.base.restoreSelection();
	            this.clearFontName();
	            this.base.checkSelection();
	        },
	
	        // form creation and event handling
	        createForm: function () {
	            var doc = this.document,
	                form = doc.createElement('div'),
	                select = doc.createElement('select'),
	                close = doc.createElement('a'),
	                save = doc.createElement('a'),
	                option;
	
	            // Font Name Form (div)
	            form.className = 'medium-editor-toolbar-form';
	            form.id = 'medium-editor-toolbar-form-fontname-' + this.getEditorId();
	
	            // Handle clicks on the form itself
	            this.on(form, 'click', this.handleFormClick.bind(this));
	
	            // Add font names
	            for (var i = 0; i<this.fonts.length; i++) {
	                option = doc.createElement('option');
	                option.innerHTML = this.fonts[i];
	                option.value = this.fonts[i];
	                select.appendChild(option);
	            }
	
	            select.className = 'medium-editor-toolbar-select';
	            form.appendChild(select);
	
	            // Handle typing in the textbox
	            this.on(select, 'change', this.handleFontChange.bind(this));
	
	            // Add save buton
	            save.setAttribute('href', '#');
	            save.className = 'medium-editor-toobar-save';
	            save.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
	                             '<i class="fa fa-check"></i>' :
	                             '&#10003;';
	            form.appendChild(save);
	
	            // Handle save button clicks (capture)
	            this.on(save, 'click', this.handleSaveClick.bind(this), true);
	
	            // Add close button
	            close.setAttribute('href', '#');
	            close.className = 'medium-editor-toobar-close';
	            close.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
	                              '<i class="fa fa-times"></i>' :
	                              '&times;';
	            form.appendChild(close);
	
	            // Handle close button clicks
	            this.on(close, 'click', this.handleCloseClick.bind(this));
	
	            return form;
	        },
	
	        getSelect: function () {
	            return this.getForm().querySelector('select.medium-editor-toolbar-select');
	        },
	
	        clearFontName: function () {
	            MediumEditor.selection.getSelectedElements(this.document).forEach(function (el) {
	                if (el.nodeName.toLowerCase() === 'font' && el.hasAttribute('face')) {
	                    el.removeAttribute('face');
	                }
	            });
	        },
	
	        handleFontChange: function () {
	            var font = this.getSelect().value;
	            if (font === '') {
	                this.clearFontName();
	            } else {
	                this.execAction('fontName', { value: font });
	            }
	        },
	
	        handleFormClick: function (event) {
	            // make sure not to hide form when clicking inside the form
	            event.stopPropagation();
	        },
	
	        handleSaveClick: function (event) {
	            // Clicking Save -> create the font size
	            event.preventDefault();
	            this.doFormSave();
	        },
	
	        handleCloseClick: function (event) {
	            // Click Close -> close the form
	            event.preventDefault();
	            this.doFormCancel();
	        }
	    });
	
	    MediumEditor.extensions.fontName = FontNameForm;
	}());
	
	(function () {
	    'use strict';
	
	    var FontSizeForm = MediumEditor.extensions.form.extend({
	
	        name: 'fontsize',
	        action: 'fontSize',
	        aria: 'increase/decrease font size',
	        contentDefault: '&#xB1;', // ±
	        contentFA: '<i class="fa fa-text-height"></i>',
	
	        init: function () {
	            MediumEditor.extensions.form.prototype.init.apply(this, arguments);
	        },
	
	        // Called when the button the toolbar is clicked
	        // Overrides ButtonExtension.handleClick
	        handleClick: function (event) {
	            event.preventDefault();
	            event.stopPropagation();
	
	            if (!this.isDisplayed()) {
	                // Get fontsize of current selection (convert to string since IE returns this as number)
	                var fontSize = this.document.queryCommandValue('fontSize') + '';
	                this.showForm(fontSize);
	            }
	
	            return false;
	        },
	
	        // Called by medium-editor to append form to the toolbar
	        getForm: function () {
	            if (!this.form) {
	                this.form = this.createForm();
	            }
	            return this.form;
	        },
	
	        // Used by medium-editor when the default toolbar is to be displayed
	        isDisplayed: function () {
	            return this.getForm().style.display === 'block';
	        },
	
	        hideForm: function () {
	            this.getForm().style.display = 'none';
	            this.getInput().value = '';
	        },
	
	        showForm: function (fontSize) {
	            var input = this.getInput();
	
	            this.base.saveSelection();
	            this.hideToolbarDefaultActions();
	            this.getForm().style.display = 'block';
	            this.setToolbarPosition();
	
	            input.value = fontSize || '';
	            input.focus();
	        },
	
	        // Called by core when tearing down medium-editor (destroy)
	        destroy: function () {
	            if (!this.form) {
	                return false;
	            }
	
	            if (this.form.parentNode) {
	                this.form.parentNode.removeChild(this.form);
	            }
	
	            delete this.form;
	        },
	
	        // core methods
	
	        doFormSave: function () {
	            this.base.restoreSelection();
	            this.base.checkSelection();
	        },
	
	        doFormCancel: function () {
	            this.base.restoreSelection();
	            this.clearFontSize();
	            this.base.checkSelection();
	        },
	
	        // form creation and event handling
	        createForm: function () {
	            var doc = this.document,
	                form = doc.createElement('div'),
	                input = doc.createElement('input'),
	                close = doc.createElement('a'),
	                save = doc.createElement('a');
	
	            // Font Size Form (div)
	            form.className = 'medium-editor-toolbar-form';
	            form.id = 'medium-editor-toolbar-form-fontsize-' + this.getEditorId();
	
	            // Handle clicks on the form itself
	            this.on(form, 'click', this.handleFormClick.bind(this));
	
	            // Add font size slider
	            input.setAttribute('type', 'range');
	            input.setAttribute('min', '1');
	            input.setAttribute('max', '7');
	            input.className = 'medium-editor-toolbar-input';
	            form.appendChild(input);
	
	            // Handle typing in the textbox
	            this.on(input, 'change', this.handleSliderChange.bind(this));
	
	            // Add save buton
	            save.setAttribute('href', '#');
	            save.className = 'medium-editor-toobar-save';
	            save.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
	                             '<i class="fa fa-check"></i>' :
	                             '&#10003;';
	            form.appendChild(save);
	
	            // Handle save button clicks (capture)
	            this.on(save, 'click', this.handleSaveClick.bind(this), true);
	
	            // Add close button
	            close.setAttribute('href', '#');
	            close.className = 'medium-editor-toobar-close';
	            close.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
	                              '<i class="fa fa-times"></i>' :
	                              '&times;';
	            form.appendChild(close);
	
	            // Handle close button clicks
	            this.on(close, 'click', this.handleCloseClick.bind(this));
	
	            return form;
	        },
	
	        getInput: function () {
	            return this.getForm().querySelector('input.medium-editor-toolbar-input');
	        },
	
	        clearFontSize: function () {
	            MediumEditor.selection.getSelectedElements(this.document).forEach(function (el) {
	                if (el.nodeName.toLowerCase() === 'font' && el.hasAttribute('size')) {
	                    el.removeAttribute('size');
	                }
	            });
	        },
	
	        handleSliderChange: function () {
	            var size = this.getInput().value;
	            if (size === '4') {
	                this.clearFontSize();
	            } else {
	                this.execAction('fontSize', { value: size });
	            }
	        },
	
	        handleFormClick: function (event) {
	            // make sure not to hide form when clicking inside the form
	            event.stopPropagation();
	        },
	
	        handleSaveClick: function (event) {
	            // Clicking Save -> create the font size
	            event.preventDefault();
	            this.doFormSave();
	        },
	
	        handleCloseClick: function (event) {
	            // Click Close -> close the form
	            event.preventDefault();
	            this.doFormCancel();
	        }
	    });
	
	    MediumEditor.extensions.fontSize = FontSizeForm;
	}());
	(function () {
	    'use strict';
	
	    /* Helpers and internal variables that don't need to be members of actual paste handler */
	
	    var pasteBinDefaultContent = '%ME_PASTEBIN%',
	        lastRange = null,
	        keyboardPasteEditable = null,
	        stopProp = function (event) {
	            event.stopPropagation();
	        };
	
	    /*jslint regexp: true*/
	    /*
	        jslint does not allow character negation, because the negation
	        will not match any unicode characters. In the regexes in this
	        block, negation is used specifically to match the end of an html
	        tag, and in fact unicode characters *should* be allowed.
	    */
	    function createReplacements() {
	        return [
	            // Remove anything but the contents within the BODY element
	            [new RegExp(/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g), ''],
	
	            // cleanup comments added by Chrome when pasting html
	            [new RegExp(/<!--StartFragment-->|<!--EndFragment-->/g), ''],
	
	            // Trailing BR elements
	            [new RegExp(/<br>$/i), ''],
	
	            // replace two bogus tags that begin pastes from google docs
	            [new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ''],
	            [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ''],
	
	             // un-html spaces and newlines inserted by OS X
	            [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), ' '],
	            [new RegExp(/<br class="Apple-interchange-newline">/g), '<br>'],
	
	            // replace google docs italics+bold with a span to be replaced once the html is inserted
	            [new RegExp(/<span[^>]*(font-style:italic;font-weight:(bold|700)|font-weight:(bold|700);font-style:italic)[^>]*>/gi), '<span class="replace-with italic bold">'],
	
	            // replace google docs italics with a span to be replaced once the html is inserted
	            [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), '<span class="replace-with italic">'],
	
	            //[replace google docs bolds with a span to be replaced once the html is inserted
	            [new RegExp(/<span[^>]*font-weight:(bold|700)[^>]*>/gi), '<span class="replace-with bold">'],
	
	             // replace manually entered b/i/a tags with real ones
	            [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), '<$1$2>'],
	
	             // replace manually a tags with real ones, converting smart-quotes from google docs
	            [new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi), '<a href="$1">'],
	
	            // Newlines between paragraphs in html have no syntactic value,
	            // but then have a tendency to accidentally become additional paragraphs down the line
	            [new RegExp(/<\/p>\n+/gi), '</p>'],
	            [new RegExp(/\n+<p/gi), '<p'],
	
	            // Microsoft Word makes these odd tags, like <o:p></o:p>
	            [new RegExp(/<\/?o:[a-z]*>/gi), ''],
	
	            // Microsoft Word adds some special elements around list items
	            [new RegExp(/<!\[if !supportLists\]>(((?!<!).)*)<!\[endif]\>/gi), '$1']
	        ];
	    }
	    /*jslint regexp: false*/
	
	    /**
	     * Gets various content types out of the Clipboard API. It will also get the
	     * plain text using older IE and WebKit API.
	     *
	     * @param {event} event Event fired on paste.
	     * @param {win} reference to window
	     * @param {doc} reference to document
	     * @return {Object} Object with mime types and data for those mime types.
	     */
	    function getClipboardContent(event, win, doc) {
	        var dataTransfer = event.clipboardData || win.clipboardData || doc.dataTransfer,
	            data = {};
	
	        if (!dataTransfer) {
	            return data;
	        }
	
	        // Use old WebKit/IE API
	        if (dataTransfer.getData) {
	            var legacyText = dataTransfer.getData('Text');
	            if (legacyText && legacyText.length > 0) {
	                data['text/plain'] = legacyText;
	            }
	        }
	
	        if (dataTransfer.types) {
	            for (var i = 0; i < dataTransfer.types.length; i++) {
	                var contentType = dataTransfer.types[i];
	                data[contentType] = dataTransfer.getData(contentType);
	            }
	        }
	
	        return data;
	    }
	
	    var PasteHandler = MediumEditor.Extension.extend({
	        /* Paste Options */
	
	        /* forcePlainText: [boolean]
	         * Forces pasting as plain text.
	         */
	        forcePlainText: true,
	
	        /* cleanPastedHTML: [boolean]
	         * cleans pasted content from different sources, like google docs etc.
	         */
	        cleanPastedHTML: false,
	
	        /* preCleanReplacements: [Array]
	         * custom pairs (2 element arrays) of RegExp and replacement text to use during past when
	         * __forcePlainText__ or __cleanPastedHTML__ are `true` OR when calling `cleanPaste(text)` helper method.
	         * These replacements are executed before any medium editor defined replacements.
	         */
	        preCleanReplacements: [],
	
	        /* cleanReplacements: [Array]
	         * custom pairs (2 element arrays) of RegExp and replacement text to use during paste when
	         * __forcePlainText__ or __cleanPastedHTML__ are `true` OR when calling `cleanPaste(text)` helper method.
	         * These replacements are executed after any medium editor defined replacements.
	         */
	        cleanReplacements: [],
	
	        /* cleanAttrs:: [Array]
	         * list of element attributes to remove during paste when __cleanPastedHTML__ is `true` or when
	         * calling `cleanPaste(text)` or `pasteHTML(html, options)` helper methods.
	         */
	        cleanAttrs: ['class', 'style', 'dir'],
	
	        /* cleanTags: [Array]
	         * list of element tag names to remove during paste when __cleanPastedHTML__ is `true` or when
	         * calling `cleanPaste(text)` or `pasteHTML(html, options)` helper methods.
	         */
	        cleanTags: ['meta'],
	
	        /* unwrapTags: [Array]
	         * list of element tag names to unwrap (remove the element tag but retain its child elements)
	         * during paste when __cleanPastedHTML__ is `true` or when
	         * calling `cleanPaste(text)` or `pasteHTML(html, options)` helper methods.
	         */
	        unwrapTags: [],
	
	        init: function () {
	            MediumEditor.Extension.prototype.init.apply(this, arguments);
	
	            if (this.forcePlainText || this.cleanPastedHTML) {
	                this.subscribe('editableKeydown', this.handleKeydown.bind(this));
	                // We need access to the full event data in paste
	                // so we can't use the editablePaste event here
	                this.getEditorElements().forEach(function (element) {
	                    this.on(element, 'paste', this.handlePaste.bind(this));
	                }, this);
	                this.subscribe('addElement', this.handleAddElement.bind(this));
	            }
	        },
	
	        handleAddElement: function (event, editable) {
	            this.on(editable, 'paste', this.handlePaste.bind(this));
	        },
	
	        destroy: function () {
	            // Make sure pastebin is destroyed in case it's still around for some reason
	            if (this.forcePlainText || this.cleanPastedHTML) {
	                this.removePasteBin();
	            }
	        },
	
	        handlePaste: function (event, editable) {
	            if (event.defaultPrevented) {
	                return;
	            }
	
	            var clipboardContent = getClipboardContent(event, this.window, this.document),
	                pastedHTML = clipboardContent['text/html'],
	                pastedPlain = clipboardContent['text/plain'];
	
	            if (this.window.clipboardData && event.clipboardData === undefined && !pastedHTML) {
	                // If window.clipboardData exists, but event.clipboardData doesn't exist,
	                // we're probably in IE. IE only has two possibilities for clipboard
	                // data format: 'Text' and 'URL'.
	                //
	                // For IE, we'll fallback to 'Text' for text/html
	                pastedHTML = pastedPlain;
	            }
	
	            if (pastedHTML || pastedPlain) {
	                event.preventDefault();
	
	                this.doPaste(pastedHTML, pastedPlain, editable);
	            }
	        },
	
	        doPaste: function (pastedHTML, pastedPlain, editable) {
	            var paragraphs,
	                html = '',
	                p;
	
	            if (this.cleanPastedHTML && pastedHTML) {
	                return this.cleanPaste(pastedHTML);
	            }
	
	            if (!(this.getEditorOption('disableReturn') || (editable && editable.getAttribute('data-disable-return')))) {
	                paragraphs = pastedPlain.split(/[\r\n]+/g);
	                // If there are no \r\n in data, don't wrap in <p>
	                if (paragraphs.length > 1) {
	                    for (p = 0; p < paragraphs.length; p += 1) {
	                        if (paragraphs[p] !== '') {
	                            html += '<p>' + MediumEditor.util.htmlEntities(paragraphs[p]) + '</p>';
	                        }
	                    }
	                } else {
	                    html = MediumEditor.util.htmlEntities(paragraphs[0]);
	                }
	            } else {
	                html = MediumEditor.util.htmlEntities(pastedPlain);
	            }
	            MediumEditor.util.insertHTMLCommand(this.document, html);
	        },
	
	        handlePasteBinPaste: function (event) {
	            if (event.defaultPrevented) {
	                this.removePasteBin();
	                return;
	            }
	
	            var clipboardContent = getClipboardContent(event, this.window, this.document),
	                pastedHTML = clipboardContent['text/html'],
	                pastedPlain = clipboardContent['text/plain'],
	                editable = keyboardPasteEditable;
	
	            // If we have valid html already, or we're not in cleanPastedHTML mode
	            // we can ignore the paste bin and just paste now
	            if (!this.cleanPastedHTML || pastedHTML) {
	                event.preventDefault();
	                this.removePasteBin();
	                this.doPaste(pastedHTML, pastedPlain, editable);
	
	                // The event handling code listens for paste on the editable element
	                // in order to trigger the editablePaste event.  Since this paste event
	                // is happening on the pastebin, the event handling code never knows about it
	                // So, we have to trigger editablePaste manually
	                this.trigger('editablePaste', { currentTarget: editable, target: editable }, editable);
	                return;
	            }
	
	            // We need to look at the paste bin, so do a setTimeout to let the paste
	            // fall through into the paste bin
	            setTimeout(function () {
	                // Only look for HTML if we're in cleanPastedHTML mode
	                if (this.cleanPastedHTML) {
	                    // If clipboard didn't have HTML, try the paste bin
	                    pastedHTML = this.getPasteBinHtml();
	                }
	
	                // If we needed the paste bin, we're done with it now, remove it
	                this.removePasteBin();
	
	                // Handle the paste with the html from the paste bin
	                this.doPaste(pastedHTML, pastedPlain, editable);
	
	                // The event handling code listens for paste on the editable element
	                // in order to trigger the editablePaste event.  Since this paste event
	                // is happening on the pastebin, the event handling code never knows about it
	                // So, we have to trigger editablePaste manually
	                this.trigger('editablePaste', { currentTarget: editable, target: editable }, editable);
	            }.bind(this), 0);
	        },
	
	        handleKeydown: function (event, editable) {
	            // if it's not Ctrl+V, do nothing
	            if (!(MediumEditor.util.isKey(event, MediumEditor.util.keyCode.V) && MediumEditor.util.isMetaCtrlKey(event))) {
	                return;
	            }
	
	            event.stopImmediatePropagation();
	
	            this.removePasteBin();
	            this.createPasteBin(editable);
	        },
	
	        createPasteBin: function (editable) {
	            var rects,
	                range = MediumEditor.selection.getSelectionRange(this.document),
	                top = this.window.pageYOffset;
	
	            keyboardPasteEditable = editable;
	
	            if (range) {
	                rects = range.getClientRects();
	
	                // on empty line, rects is empty so we grab information from the first container of the range
	                if (rects.length) {
	                    top += rects[0].top;
	                } else {
	                    top += range.startContainer.getBoundingClientRect().top;
	                }
	            }
	
	            lastRange = range;
	
	            var pasteBinElm = this.document.createElement('div');
	            pasteBinElm.id = this.pasteBinId = 'medium-editor-pastebin-' + (+Date.now());
	            pasteBinElm.setAttribute('style', 'border: 1px red solid; position: absolute; top: ' + top + 'px; width: 10px; height: 10px; overflow: hidden; opacity: 0');
	            pasteBinElm.setAttribute('contentEditable', true);
	            pasteBinElm.innerHTML = pasteBinDefaultContent;
	
	            this.document.body.appendChild(pasteBinElm);
	
	            // avoid .focus() to stop other event (actually the paste event)
	            this.on(pasteBinElm, 'focus', stopProp);
	            this.on(pasteBinElm, 'focusin', stopProp);
	            this.on(pasteBinElm, 'focusout', stopProp);
	
	            pasteBinElm.focus();
	
	            MediumEditor.selection.selectNode(pasteBinElm, this.document);
	
	            if (!this.boundHandlePaste) {
	                this.boundHandlePaste = this.handlePasteBinPaste.bind(this);
	            }
	
	            this.on(pasteBinElm, 'paste', this.boundHandlePaste);
	        },
	
	        removePasteBin: function () {
	            if (null !== lastRange) {
	                MediumEditor.selection.selectRange(this.document, lastRange);
	                lastRange = null;
	            }
	
	            if (null !== keyboardPasteEditable) {
	                keyboardPasteEditable = null;
	            }
	
	            var pasteBinElm = this.getPasteBin();
	            if (!pasteBinElm) {
	                return;
	            }
	
	            if (pasteBinElm) {
	                this.off(pasteBinElm, 'focus', stopProp);
	                this.off(pasteBinElm, 'focusin', stopProp);
	                this.off(pasteBinElm, 'focusout', stopProp);
	                this.off(pasteBinElm, 'paste', this.boundHandlePaste);
	                pasteBinElm.parentElement.removeChild(pasteBinElm);
	            }
	        },
	
	        getPasteBin: function () {
	            return this.document.getElementById(this.pasteBinId);
	        },
	
	        getPasteBinHtml: function () {
	            var pasteBinElm = this.getPasteBin();
	
	            if (!pasteBinElm) {
	                return false;
	            }
	
	            // WebKit has a nice bug where it clones the paste bin if you paste from for example notepad
	            // so we need to force plain text mode in this case
	            if (pasteBinElm.firstChild && pasteBinElm.firstChild.id === 'mcepastebin') {
	                return false;
	            }
	
	            var pasteBinHtml = pasteBinElm.innerHTML;
	
	            // If paste bin is empty try using plain text mode
	            // since that is better than nothing right
	            if (!pasteBinHtml || pasteBinHtml === pasteBinDefaultContent) {
	                return false;
	            }
	
	            return pasteBinHtml;
	        },
	
	        cleanPaste: function (text) {
	            var i, elList, tmp, workEl,
	                multiline = /<p|<br|<div/.test(text),
	                replacements = [].concat(
	                    this.preCleanReplacements || [],
	                    createReplacements(),
	                    this.cleanReplacements || []);
	
	            for (i = 0; i < replacements.length; i += 1) {
	                text = text.replace(replacements[i][0], replacements[i][1]);
	            }
	
	            if (!multiline) {
	                return this.pasteHTML(text);
	            }
	
	            // create a temporary div to cleanup block elements
	            tmp = this.document.createElement('div');
	
	            // double br's aren't converted to p tags, but we want paragraphs.
	            tmp.innerHTML = '<p>' + text.split('<br><br>').join('</p><p>') + '</p>';
	
	            // block element cleanup
	            elList = tmp.querySelectorAll('a,p,div,br');
	            for (i = 0; i < elList.length; i += 1) {
	                workEl = elList[i];
	
	                // Microsoft Word replaces some spaces with newlines.
	                // While newlines between block elements are meaningless, newlines within
	                // elements are sometimes actually spaces.
	                workEl.innerHTML = workEl.innerHTML.replace(/\n/gi, ' ');
	
	                switch (workEl.nodeName.toLowerCase()) {
	                    case 'p':
	                    case 'div':
	                        this.filterCommonBlocks(workEl);
	                        break;
	                    case 'br':
	                        this.filterLineBreak(workEl);
	                        break;
	                }
	            }
	
	            this.pasteHTML(tmp.innerHTML);
	        },
	
	        pasteHTML: function (html, options) {
	            options = MediumEditor.util.defaults({}, options, {
	                cleanAttrs: this.cleanAttrs,
	                cleanTags: this.cleanTags,
	                unwrapTags: this.unwrapTags
	            });
	
	            var elList, workEl, i, fragmentBody, pasteBlock = this.document.createDocumentFragment();
	
	            pasteBlock.appendChild(this.document.createElement('body'));
	
	            fragmentBody = pasteBlock.querySelector('body');
	            fragmentBody.innerHTML = html;
	
	            this.cleanupSpans(fragmentBody);
	
	            elList = fragmentBody.querySelectorAll('*');
	            for (i = 0; i < elList.length; i += 1) {
	                workEl = elList[i];
	
	                if ('a' === workEl.nodeName.toLowerCase() && this.getEditorOption('targetBlank')) {
	                    MediumEditor.util.setTargetBlank(workEl);
	                }
	
	                MediumEditor.util.cleanupAttrs(workEl, options.cleanAttrs);
	                MediumEditor.util.cleanupTags(workEl, options.cleanTags);
	                MediumEditor.util.unwrapTags(workEl, options.unwrapTags);
	            }
	
	            MediumEditor.util.insertHTMLCommand(this.document, fragmentBody.innerHTML.replace(/&nbsp;/g, ' '));
	        },
	
	        // TODO (6.0): Make this an internal helper instead of member of paste handler
	        isCommonBlock: function (el) {
	            return (el && (el.nodeName.toLowerCase() === 'p' || el.nodeName.toLowerCase() === 'div'));
	        },
	
	        // TODO (6.0): Make this an internal helper instead of member of paste handler
	        filterCommonBlocks: function (el) {
	            if (/^\s*$/.test(el.textContent) && el.parentNode) {
	                el.parentNode.removeChild(el);
	            }
	        },
	
	        // TODO (6.0): Make this an internal helper instead of member of paste handler
	        filterLineBreak: function (el) {
	            if (this.isCommonBlock(el.previousElementSibling)) {
	                // remove stray br's following common block elements
	                this.removeWithParent(el);
	            } else if (this.isCommonBlock(el.parentNode) && (el.parentNode.firstChild === el || el.parentNode.lastChild === el)) {
	                // remove br's just inside open or close tags of a div/p
	                this.removeWithParent(el);
	            } else if (el.parentNode && el.parentNode.childElementCount === 1 && el.parentNode.textContent === '') {
	                // and br's that are the only child of elements other than div/p
	                this.removeWithParent(el);
	            }
	        },
	
	        // TODO (6.0): Make this an internal helper instead of member of paste handler
	        // remove an element, including its parent, if it is the only element within its parent
	        removeWithParent: function (el) {
	            if (el && el.parentNode) {
	                if (el.parentNode.parentNode && el.parentNode.childElementCount === 1) {
	                    el.parentNode.parentNode.removeChild(el.parentNode);
	                } else {
	                    el.parentNode.removeChild(el);
	                }
	            }
	        },
	
	        // TODO (6.0): Make this an internal helper instead of member of paste handler
	        cleanupSpans: function (containerEl) {
	            var i,
	                el,
	                newEl,
	                spans = containerEl.querySelectorAll('.replace-with'),
	                isCEF = function (el) {
	                    return (el && el.nodeName !== '#text' && el.getAttribute('contenteditable') === 'false');
	                };
	
	            for (i = 0; i < spans.length; i += 1) {
	                el = spans[i];
	                newEl = this.document.createElement(el.classList.contains('bold') ? 'b' : 'i');
	
	                if (el.classList.contains('bold') && el.classList.contains('italic')) {
	                    // add an i tag as well if this has both italics and bold
	                    newEl.innerHTML = '<i>' + el.innerHTML + '</i>';
	                } else {
	                    newEl.innerHTML = el.innerHTML;
	                }
	                el.parentNode.replaceChild(newEl, el);
	            }
	
	            spans = containerEl.querySelectorAll('span');
	            for (i = 0; i < spans.length; i += 1) {
	                el = spans[i];
	
	                // bail if span is in contenteditable = false
	                if (MediumEditor.util.traverseUp(el, isCEF)) {
	                    return false;
	                }
	
	                // remove empty spans, replace others with their contents
	                MediumEditor.util.unwrap(el, this.document);
	            }
	        }
	    });
	
	    MediumEditor.extensions.paste = PasteHandler;
	}());
	
	(function () {
	    'use strict';
	
	    var Placeholder = MediumEditor.Extension.extend({
	        name: 'placeholder',
	
	        /* Placeholder Options */
	
	        /* text: [string]
	         * Text to display in the placeholder
	         */
	        text: 'Type your text',
	
	        /* hideOnClick: [boolean]
	         * Should we hide the placeholder on click (true) or when user starts typing (false)
	         */
	        hideOnClick: true,
	
	        init: function () {
	            MediumEditor.Extension.prototype.init.apply(this, arguments);
	
	            this.initPlaceholders();
	            this.attachEventHandlers();
	        },
	
	        initPlaceholders: function () {
	            this.getEditorElements().forEach(this.initElement, this);
	        },
	
	        handleAddElement: function (event, editable) {
	            this.initElement(editable);
	        },
	
	        initElement: function (el) {
	            if (!el.getAttribute('data-placeholder')) {
	                el.setAttribute('data-placeholder', this.text);
	            }
	            this.updatePlaceholder(el);
	        },
	
	        destroy: function () {
	            this.getEditorElements().forEach(this.cleanupElement, this);
	        },
	
	        handleRemoveElement: function (event, editable) {
	            this.cleanupElement(editable);
	        },
	
	        cleanupElement: function (el) {
	            if (el.getAttribute('data-placeholder') === this.text) {
	                el.removeAttribute('data-placeholder');
	            }
	        },
	
	        showPlaceholder: function (el) {
	            if (el) {
	                // https://github.com/yabwe/medium-editor/issues/234
	                // In firefox, styling the placeholder with an absolutely positioned
	                // pseudo element causes the cursor to appear in a bad location
	                // when the element is completely empty, so apply a different class to
	                // style it with a relatively positioned pseudo element
	                if (MediumEditor.util.isFF && el.childNodes.length === 0) {
	                    el.classList.add('medium-editor-placeholder-relative');
	                    el.classList.remove('medium-editor-placeholder');
	                } else {
	                    el.classList.add('medium-editor-placeholder');
	                    el.classList.remove('medium-editor-placeholder-relative');
	                }
	            }
	        },
	
	        hidePlaceholder: function (el) {
	            if (el) {
	                el.classList.remove('medium-editor-placeholder');
	                el.classList.remove('medium-editor-placeholder-relative');
	            }
	        },
	
	        updatePlaceholder: function (el, dontShow) {
	            // If the element has content, hide the placeholder
	            if (el.querySelector('img, blockquote, ul, ol, table') || (el.textContent.replace(/^\s+|\s+$/g, '') !== '')) {
	                return this.hidePlaceholder(el);
	            }
	
	            if (!dontShow) {
	                this.showPlaceholder(el);
	            }
	        },
	
	        attachEventHandlers: function () {
	            if (this.hideOnClick) {
	                // For the 'hideOnClick' option, the placeholder should always be hidden on focus
	                this.subscribe('focus', this.handleFocus.bind(this));
	            }
	
	            // If the editor has content, it should always hide the placeholder
	            this.subscribe('editableInput', this.handleInput.bind(this));
	
	            // When the editor loses focus, check if the placeholder should be visible
	            this.subscribe('blur', this.handleBlur.bind(this));
	
	            // Need to know when elements are added/removed from the editor
	            this.subscribe('addElement', this.handleAddElement.bind(this));
	            this.subscribe('removeElement', this.handleRemoveElement.bind(this));
	        },
	
	        handleInput: function (event, element) {
	            // If the placeholder should be hidden on focus and the
	            // element has focus, don't show the placeholder
	            var dontShow = this.hideOnClick && (element === this.base.getFocusedElement());
	
	            // Editor's content has changed, check if the placeholder should be hidden
	            this.updatePlaceholder(element, dontShow);
	        },
	
	        handleFocus: function (event, element) {
	            // Editor has focus, hide the placeholder
	            this.hidePlaceholder(element);
	        },
	
	        handleBlur: function (event, element) {
	            // Editor has lost focus, check if the placeholder should be shown
	            this.updatePlaceholder(element);
	        }
	    });
	
	    MediumEditor.extensions.placeholder = Placeholder;
	}());
	
	(function () {
	    'use strict';
	
	    var Toolbar = MediumEditor.Extension.extend({
	        name: 'toolbar',
	
	        /* Toolbar Options */
	
	        /* align: ['left'|'center'|'right']
	         * When the __static__ option is true, this aligns the static toolbar
	         * relative to the medium-editor element.
	         */
	        align: 'center',
	
	        /* allowMultiParagraphSelection: [boolean]
	         * enables/disables whether the toolbar should be displayed when
	         * selecting multiple paragraphs/block elements
	         */
	        allowMultiParagraphSelection: true,
	
	        /* buttons: [Array]
	         * the names of the set of buttons to display on the toolbar.
	         */
	        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],
	
	        /* diffLeft: [Number]
	         * value in pixels to be added to the X axis positioning of the toolbar.
	         */
	        diffLeft: 0,
	
	        /* diffTop: [Number]
	         * value in pixels to be added to the Y axis positioning of the toolbar.
	         */
	        diffTop: -10,
	
	        /* firstButtonClass: [string]
	         * CSS class added to the first button in the toolbar.
	         */
	        firstButtonClass: 'medium-editor-button-first',
	
	        /* lastButtonClass: [string]
	         * CSS class added to the last button in the toolbar.
	         */
	        lastButtonClass: 'medium-editor-button-last',
	
	        /* standardizeSelectionStart: [boolean]
	         * enables/disables standardizing how the beginning of a range is decided
	         * between browsers whenever the selected text is analyzed for updating toolbar buttons status.
	         */
	        standardizeSelectionStart: false,
	
	        /* static: [boolean]
	         * enable/disable the toolbar always displaying in the same location
	         * relative to the medium-editor element.
	         */
	        static: false,
	
	        /* sticky: [boolean]
	         * When the __static__ option is true, this enables/disables the toolbar
	         * "sticking" to the viewport and staying visible on the screen while
	         * the page scrolls.
	         */
	        sticky: false,
	
	        /* stickyTopOffset: [Number]
	         * Value in pixel of the top offset above the toolbar
	         */
	        stickyTopOffset: 0,
	
	        /* updateOnEmptySelection: [boolean]
	         * When the __static__ option is true, this enables/disables updating
	         * the state of the toolbar buttons even when the selection is collapsed
	         * (there is no selection, just a cursor).
	         */
	        updateOnEmptySelection: false,
	
	        /* relativeContainer: [node]
	         * appending the toolbar to a given node instead of body
	         */
	        relativeContainer: null,
	
	        init: function () {
	            MediumEditor.Extension.prototype.init.apply(this, arguments);
	
	            this.initThrottledMethods();
	
	            if (!this.relativeContainer) {
	                this.getEditorOption('elementsContainer').appendChild(this.getToolbarElement());
	            } else {
	                this.relativeContainer.appendChild(this.getToolbarElement());
	            }
	        },
	
	        // Helper method to execute method for every extension, but ignoring the toolbar extension
	        forEachExtension: function (iterator, context) {
	            return this.base.extensions.forEach(function (command) {
	                if (command === this) {
	                    return;
	                }
	                return iterator.apply(context || this, arguments);
	            }, this);
	        },
	
	        // Toolbar creation/deletion
	
	        createToolbar: function () {
	            var toolbar = this.document.createElement('div');
	
	            toolbar.id = 'medium-editor-toolbar-' + this.getEditorId();
	            toolbar.className = 'medium-editor-toolbar';
	
	            if (this.static) {
	                toolbar.className += ' static-toolbar';
	            } else if (this.relativeContainer) {
	                toolbar.className += ' medium-editor-relative-toolbar';
	            } else {
	                toolbar.className += ' medium-editor-stalker-toolbar';
	            }
	
	            toolbar.appendChild(this.createToolbarButtons());
	
	            // Add any forms that extensions may have
	            this.forEachExtension(function (extension) {
	                if (extension.hasForm) {
	                    toolbar.appendChild(extension.getForm());
	                }
	            });
	
	            this.attachEventHandlers();
	
	            return toolbar;
	        },
	
	        createToolbarButtons: function () {
	            var ul = this.document.createElement('ul'),
	                li,
	                btn,
	                buttons,
	                extension,
	                buttonName,
	                buttonOpts;
	
	            ul.id = 'medium-editor-toolbar-actions' + this.getEditorId();
	            ul.className = 'medium-editor-toolbar-actions';
	            ul.style.display = 'block';
	
	            this.buttons.forEach(function (button) {
	                if (typeof button === 'string') {
	                    buttonName = button;
	                    buttonOpts = null;
	                } else {
	                    buttonName = button.name;
	                    buttonOpts = button;
	                }
	
	                // If the button already exists as an extension, it'll be returned
	                // othwerise it'll create the default built-in button
	                extension = this.base.addBuiltInExtension(buttonName, buttonOpts);
	
	                if (extension && typeof extension.getButton === 'function') {
	                    btn = extension.getButton(this.base);
	                    li = this.document.createElement('li');
	                    if (MediumEditor.util.isElement(btn)) {
	                        li.appendChild(btn);
	                    } else {
	                        li.innerHTML = btn;
	                    }
	                    ul.appendChild(li);
	                }
	            }, this);
	
	            buttons = ul.querySelectorAll('button');
	            if (buttons.length > 0) {
	                buttons[0].classList.add(this.firstButtonClass);
	                buttons[buttons.length - 1].classList.add(this.lastButtonClass);
	            }
	
	            return ul;
	        },
	
	        destroy: function () {
	            if (this.toolbar) {
	                if (this.toolbar.parentNode) {
	                    this.toolbar.parentNode.removeChild(this.toolbar);
	                }
	                delete this.toolbar;
	            }
	        },
	
	        // Toolbar accessors
	
	        getInteractionElements: function () {
	            return this.getToolbarElement();
	        },
	
	        getToolbarElement: function () {
	            if (!this.toolbar) {
	                this.toolbar = this.createToolbar();
	            }
	
	            return this.toolbar;
	        },
	
	        getToolbarActionsElement: function () {
	            return this.getToolbarElement().querySelector('.medium-editor-toolbar-actions');
	        },
	
	        // Toolbar event handlers
	
	        initThrottledMethods: function () {
	            // throttledPositionToolbar is throttled because:
	            // - It will be called when the browser is resizing, which can fire many times very quickly
	            // - For some event (like resize) a slight lag in UI responsiveness is OK and provides performance benefits
	            this.throttledPositionToolbar = MediumEditor.util.throttle(function () {
	                if (this.base.isActive) {
	                    this.positionToolbarIfShown();
	                }
	            }.bind(this));
	        },
	
	        attachEventHandlers: function () {
	            // MediumEditor custom events for when user beings and ends interaction with a contenteditable and its elements
	            this.subscribe('blur', this.handleBlur.bind(this));
	            this.subscribe('focus', this.handleFocus.bind(this));
	
	            // Updating the state of the toolbar as things change
	            this.subscribe('editableClick', this.handleEditableClick.bind(this));
	            this.subscribe('editableKeyup', this.handleEditableKeyup.bind(this));
	
	            // Handle mouseup on document for updating the selection in the toolbar
	            this.on(this.document.documentElement, 'mouseup', this.handleDocumentMouseup.bind(this));
	
	            // Add a scroll event for sticky toolbar
	            if (this.static && this.sticky) {
	                // On scroll (capture), re-position the toolbar
	                this.on(this.window, 'scroll', this.handleWindowScroll.bind(this), true);
	            }
	
	            // On resize, re-position the toolbar
	            this.on(this.window, 'resize', this.handleWindowResize.bind(this));
	        },
	
	        handleWindowScroll: function () {
	            this.positionToolbarIfShown();
	        },
	
	        handleWindowResize: function () {
	            this.throttledPositionToolbar();
	        },
	
	        handleDocumentMouseup: function (event) {
	            // Do not trigger checkState when mouseup fires over the toolbar
	            if (event &&
	                    event.target &&
	                    MediumEditor.util.isDescendant(this.getToolbarElement(), event.target)) {
	                return false;
	            }
	            this.checkState();
	        },
	
	        handleEditableClick: function () {
	            // Delay the call to checkState to handle bug where selection is empty
	            // immediately after clicking inside a pre-existing selection
	            setTimeout(function () {
	                this.checkState();
	            }.bind(this), 0);
	        },
	
	        handleEditableKeyup: function () {
	            this.checkState();
	        },
	
	        handleBlur: function () {
	            // Kill any previously delayed calls to hide the toolbar
	            clearTimeout(this.hideTimeout);
	
	            // Blur may fire even if we have a selection, so we want to prevent any delayed showToolbar
	            // calls from happening in this specific case
	            clearTimeout(this.delayShowTimeout);
	
	            // Delay the call to hideToolbar to handle bug with multiple editors on the page at once
	            this.hideTimeout = setTimeout(function () {
	                this.hideToolbar();
	            }.bind(this), 1);
	        },
	
	        handleFocus: function () {
	            this.checkState();
	        },
	
	        // Hiding/showing toolbar
	
	        isDisplayed: function () {
	            return this.getToolbarElement().classList.contains('medium-editor-toolbar-active');
	        },
	
	        showToolbar: function () {
	            clearTimeout(this.hideTimeout);
	            if (!this.isDisplayed()) {
	                this.getToolbarElement().classList.add('medium-editor-toolbar-active');
	                this.trigger('showToolbar', {}, this.base.getFocusedElement());
	            }
	        },
	
	        hideToolbar: function () {
	            if (this.isDisplayed()) {
	                this.getToolbarElement().classList.remove('medium-editor-toolbar-active');
	                this.trigger('hideToolbar', {}, this.base.getFocusedElement());
	            }
	        },
	
	        isToolbarDefaultActionsDisplayed: function () {
	            return this.getToolbarActionsElement().style.display === 'block';
	        },
	
	        hideToolbarDefaultActions: function () {
	            if (this.isToolbarDefaultActionsDisplayed()) {
	                this.getToolbarActionsElement().style.display = 'none';
	            }
	        },
	
	        showToolbarDefaultActions: function () {
	            this.hideExtensionForms();
	
	            if (!this.isToolbarDefaultActionsDisplayed()) {
	                this.getToolbarActionsElement().style.display = 'block';
	            }
	
	            // Using setTimeout + options.delay because:
	            // We will actually be displaying the toolbar, which should be controlled by options.delay
	            this.delayShowTimeout = this.base.delay(function () {
	                this.showToolbar();
	            }.bind(this));
	        },
	
	        hideExtensionForms: function () {
	            // Hide all extension forms
	            this.forEachExtension(function (extension) {
	                if (extension.hasForm && extension.isDisplayed()) {
	                    extension.hideForm();
	                }
	            });
	        },
	
	        // Responding to changes in user selection
	
	        // Checks for existance of multiple block elements in the current selection
	        multipleBlockElementsSelected: function () {
	            var regexEmptyHTMLTags = /<[^\/>][^>]*><\/[^>]+>/gim, // http://stackoverflow.com/questions/3129738/remove-empty-tags-using-regex
	                regexBlockElements = new RegExp('<(' + MediumEditor.util.blockContainerElementNames.join('|') + ')[^>]*>', 'g'),
	                selectionHTML = MediumEditor.selection.getSelectionHtml(this.document).replace(regexEmptyHTMLTags, ''), // Filter out empty blocks from selection
	                hasMultiParagraphs = selectionHTML.match(regexBlockElements); // Find how many block elements are within the html
	
	            return !!hasMultiParagraphs && hasMultiParagraphs.length > 1;
	        },
	
	        modifySelection: function () {
	            var selection = this.window.getSelection(),
	                selectionRange = selection.getRangeAt(0);
	
	            /*
	            * In firefox, there are cases (ie doubleclick of a word) where the selectionRange start
	            * will be at the very end of an element.  In other browsers, the selectionRange start
	            * would instead be at the very beginning of an element that actually has content.
	            * example:
	            *   <span>foo</span><span>bar</span>
	            *
	            * If the text 'bar' is selected, most browsers will have the selectionRange start at the beginning
	            * of the 'bar' span.  However, there are cases where firefox will have the selectionRange start
	            * at the end of the 'foo' span.  The contenteditable behavior will be ok, but if there are any
	            * properties on the 'bar' span, they won't be reflected accurately in the toolbar
	            * (ie 'Bold' button wouldn't be active)
	            *
	            * So, for cases where the selectionRange start is at the end of an element/node, find the next
	            * adjacent text node that actually has content in it, and move the selectionRange start there.
	            */
	            if (this.standardizeSelectionStart &&
	                    selectionRange.startContainer.nodeValue &&
	                    (selectionRange.startOffset === selectionRange.startContainer.nodeValue.length)) {
	                var adjacentNode = MediumEditor.util.findAdjacentTextNodeWithContent(MediumEditor.selection.getSelectionElement(this.window), selectionRange.startContainer, this.document);
	                if (adjacentNode) {
	                    var offset = 0;
	                    while (adjacentNode.nodeValue.substr(offset, 1).trim().length === 0) {
	                        offset = offset + 1;
	                    }
	                    selectionRange = MediumEditor.selection.select(this.document, adjacentNode, offset,
	                        selectionRange.endContainer, selectionRange.endOffset);
	                }
	            }
	        },
	
	        checkState: function () {
	            if (this.base.preventSelectionUpdates) {
	                return;
	            }
	
	            // If no editable has focus OR selection is inside contenteditable = false
	            // hide toolbar
	            if (!this.base.getFocusedElement() ||
	                    MediumEditor.selection.selectionInContentEditableFalse(this.window)) {
	                return this.hideToolbar();
	            }
	
	            // If there's no selection element, selection element doesn't belong to this editor
	            // or toolbar is disabled for this selection element
	            // hide toolbar
	            var selectionElement = MediumEditor.selection.getSelectionElement(this.window);
	            if (!selectionElement ||
	                    this.getEditorElements().indexOf(selectionElement) === -1 ||
	                    selectionElement.getAttribute('data-disable-toolbar')) {
	                return this.hideToolbar();
	            }
	
	            // Now we know there's a focused editable with a selection
	
	            // If the updateOnEmptySelection option is true, show the toolbar
	            if (this.updateOnEmptySelection && this.static) {
	                return this.showAndUpdateToolbar();
	            }
	
	            // If we don't have a 'valid' selection -> hide toolbar
	            if (!MediumEditor.selection.selectionContainsContent(this.document) ||
	                (this.allowMultiParagraphSelection === false && this.multipleBlockElementsSelected())) {
	                return this.hideToolbar();
	            }
	
	            this.showAndUpdateToolbar();
	        },
	
	        // Updating the toolbar
	
	        showAndUpdateToolbar: function () {
	            this.modifySelection();
	            this.setToolbarButtonStates();
	            this.trigger('positionToolbar', {}, this.base.getFocusedElement());
	            this.showToolbarDefaultActions();
	            this.setToolbarPosition();
	        },
	
	        setToolbarButtonStates: function () {
	            this.forEachExtension(function (extension) {
	                if (typeof extension.isActive === 'function' &&
	                    typeof extension.setInactive === 'function') {
	                    extension.setInactive();
	                }
	            });
	
	            this.checkActiveButtons();
	        },
	
	        checkActiveButtons: function () {
	            var manualStateChecks = [],
	                queryState = null,
	                selectionRange = MediumEditor.selection.getSelectionRange(this.document),
	                parentNode,
	                updateExtensionState = function (extension) {
	                    if (typeof extension.checkState === 'function') {
	                        extension.checkState(parentNode);
	                    } else if (typeof extension.isActive === 'function' &&
	                               typeof extension.isAlreadyApplied === 'function' &&
	                               typeof extension.setActive === 'function') {
	                        if (!extension.isActive() && extension.isAlreadyApplied(parentNode)) {
	                            extension.setActive();
	                        }
	                    }
	                };
	
	            if (!selectionRange) {
	                return;
	            }
	
	            // Loop through all extensions
	            this.forEachExtension(function (extension) {
	                // For those extensions where we can use document.queryCommandState(), do so
	                if (typeof extension.queryCommandState === 'function') {
	                    queryState = extension.queryCommandState();
	                    // If queryCommandState returns a valid value, we can trust the browser
	                    // and don't need to do our manual checks
	                    if (queryState !== null) {
	                        if (queryState && typeof extension.setActive === 'function') {
	                            extension.setActive();
	                        }
	                        return;
	                    }
	                }
	                // We can't use queryCommandState for this extension, so add to manualStateChecks
	                manualStateChecks.push(extension);
	            });
	
	            parentNode = MediumEditor.selection.getSelectedParentElement(selectionRange);
	
	            // Make sure the selection parent isn't outside of the contenteditable
	            if (!this.getEditorElements().some(function (element) {
	                    return MediumEditor.util.isDescendant(element, parentNode, true);
	                })) {
	                return;
	            }
	
	            // Climb up the DOM and do manual checks for whether a certain extension is currently enabled for this node
	            while (parentNode) {
	                manualStateChecks.forEach(updateExtensionState);
	
	                // we can abort the search upwards if we leave the contentEditable element
	                if (MediumEditor.util.isMediumEditorElement(parentNode)) {
	                    break;
	                }
	                parentNode = parentNode.parentNode;
	            }
	        },
	
	        // Positioning toolbar
	
	        positionToolbarIfShown: function () {
	            if (this.isDisplayed()) {
	                this.setToolbarPosition();
	            }
	        },
	
	        setToolbarPosition: function () {
	            var container = this.base.getFocusedElement(),
	                selection = this.window.getSelection();
	
	            // If there isn't a valid selection, bail
	            if (!container) {
	                return this;
	            }
	
	            if (this.static || !selection.isCollapsed) {
	                this.showToolbar();
	
	                // we don't need any absolute positioning if relativeContainer is set
	                if (!this.relativeContainer) {
	                    if (this.static) {
	                        this.positionStaticToolbar(container);
	                    } else {
	                        this.positionToolbar(selection);
	                    }
	                }
	
	                this.trigger('positionedToolbar', {}, this.base.getFocusedElement());
	            }
	        },
	
	        positionStaticToolbar: function (container) {
	            // position the toolbar at left 0, so we can get the real width of the toolbar
	            this.getToolbarElement().style.left = '0';
	
	            // document.documentElement for IE 9
	            var scrollTop = (this.document.documentElement && this.document.documentElement.scrollTop) || this.document.body.scrollTop,
	                windowWidth = this.window.innerWidth,
	                toolbarElement = this.getToolbarElement(),
	                containerRect = container.getBoundingClientRect(),
	                containerTop = containerRect.top + scrollTop,
	                containerCenter = (containerRect.left + (containerRect.width / 2)),
	                toolbarHeight = toolbarElement.offsetHeight,
	                toolbarWidth = toolbarElement.offsetWidth,
	                halfOffsetWidth = toolbarWidth / 2,
	                targetLeft;
	
	            if (this.sticky) {
	                // If it's beyond the height of the editor, position it at the bottom of the editor
	                if (scrollTop > (containerTop + container.offsetHeight - toolbarHeight - this.stickyTopOffset)) {
	                    toolbarElement.style.top = (containerTop + container.offsetHeight - toolbarHeight) + 'px';
	                    toolbarElement.classList.remove('medium-editor-sticky-toolbar');
	                // Stick the toolbar to the top of the window
	                } else if (scrollTop > (containerTop - toolbarHeight - this.stickyTopOffset)) {
	                    toolbarElement.classList.add('medium-editor-sticky-toolbar');
	                    toolbarElement.style.top = this.stickyTopOffset + 'px';
	                // Normal static toolbar position
	                } else {
	                    toolbarElement.classList.remove('medium-editor-sticky-toolbar');
	                    toolbarElement.style.top = containerTop - toolbarHeight + 'px';
	                }
	            } else {
	                toolbarElement.style.top = containerTop - toolbarHeight + 'px';
	            }
	
	            switch (this.align) {
	                case 'left':
	                    targetLeft = containerRect.left;
	                    break;
	
	                case 'right':
	                    targetLeft = containerRect.right - toolbarWidth;
	                    break;
	
	                case 'center':
	                    targetLeft = containerCenter - halfOffsetWidth;
	                    break;
	            }
	
	            if (targetLeft < 0) {
	                targetLeft = 0;
	            } else if ((targetLeft + toolbarWidth) > windowWidth) {
	                targetLeft = (windowWidth - Math.ceil(toolbarWidth) - 1);
	            }
	
	            toolbarElement.style.left = targetLeft + 'px';
	        },
	
	        positionToolbar: function (selection) {
	            // position the toolbar at left 0, so we can get the real width of the toolbar
	            this.getToolbarElement().style.left = '0';
	            this.getToolbarElement().style.right = 'initial';
	
	            var range = selection.getRangeAt(0),
	                boundary = range.getBoundingClientRect();
	
	            // Handle selections with just images
	            if (!boundary || ((boundary.height === 0 && boundary.width === 0) && range.startContainer === range.endContainer)) {
	                // If there's a nested image, use that for the bounding rectangle
	                if (range.startContainer.nodeType === 1 && range.startContainer.querySelector('img')) {
	                    boundary = range.startContainer.querySelector('img').getBoundingClientRect();
	                } else {
	                    boundary = range.startContainer.getBoundingClientRect();
	                }
	            }
	
	            var containerWidth = this.window.innerWidth,
	                toolbarElement = this.getToolbarElement(),
	                toolbarHeight = toolbarElement.offsetHeight,
	                toolbarWidth = toolbarElement.offsetWidth,
	                halfOffsetWidth = toolbarWidth / 2,
	                buttonHeight = 50,
	                defaultLeft = this.diffLeft - halfOffsetWidth,
	                elementsContainer = this.getEditorOption('elementsContainer'),
	                elementsContainerAbsolute = ['absolute', 'fixed'].indexOf(window.getComputedStyle(elementsContainer).getPropertyValue('position')) > -1,
	                positions = {},
	                relativeBoundary = {},
	                middleBoundary, elementsContainerBoundary;
	
	            // If container element is absolute / fixed, recalculate boundaries to be relative to the container
	            if (elementsContainerAbsolute) {
	                elementsContainerBoundary = elementsContainer.getBoundingClientRect();
	                ['top', 'left'].forEach(function (key) {
	                    relativeBoundary[key] = boundary[key] - elementsContainerBoundary[key];
	                });
	
	                relativeBoundary.width = boundary.width;
	                relativeBoundary.height = boundary.height;
	                boundary = relativeBoundary;
	
	                containerWidth = elementsContainerBoundary.width;
	
	                // Adjust top position according to container scroll position
	                positions.top = elementsContainer.scrollTop;
	            } else {
	                // Adjust top position according to window scroll position
	                positions.top = this.window.pageYOffset;
	            }
	
	            middleBoundary = boundary.left + boundary.width / 2;
	            positions.top += boundary.top - toolbarHeight;
	
	            if (boundary.top < buttonHeight) {
	                toolbarElement.classList.add('medium-toolbar-arrow-over');
	                toolbarElement.classList.remove('medium-toolbar-arrow-under');
	                positions.top += buttonHeight + boundary.height - this.diffTop;
	            } else {
	                toolbarElement.classList.add('medium-toolbar-arrow-under');
	                toolbarElement.classList.remove('medium-toolbar-arrow-over');
	                positions.top += this.diffTop;
	            }
	
	            if (middleBoundary < halfOffsetWidth) {
	                positions.left = defaultLeft + halfOffsetWidth;
	                positions.right = 'initial';
	            } else if ((containerWidth - middleBoundary) < halfOffsetWidth) {
	                positions.left = 'auto';
	                positions.right = 0;
	            } else {
	                positions.left = defaultLeft + middleBoundary;
	                positions.right = 'initial';
	            }
	
	            ['top', 'left', 'right'].forEach(function (key) {
	                toolbarElement.style[key] = positions[key] + (isNaN(positions[key]) ? '' : 'px');
	            });
	        }
	    });
	
	    MediumEditor.extensions.toolbar = Toolbar;
	}());
	
	(function () {
	    'use strict';
	
	    var ImageDragging = MediumEditor.Extension.extend({
	        init: function () {
	            MediumEditor.Extension.prototype.init.apply(this, arguments);
	
	            this.subscribe('editableDrag', this.handleDrag.bind(this));
	            this.subscribe('editableDrop', this.handleDrop.bind(this));
	        },
	
	        handleDrag: function (event) {
	            var className = 'medium-editor-dragover';
	            event.preventDefault();
	            event.dataTransfer.dropEffect = 'copy';
	
	            if (event.type === 'dragover') {
	                event.target.classList.add(className);
	            } else if (event.type === 'dragleave') {
	                event.target.classList.remove(className);
	            }
	        },
	
	        handleDrop: function (event) {
	            var className = 'medium-editor-dragover',
	                files;
	            event.preventDefault();
	            event.stopPropagation();
	
	            // IE9 does not support the File API, so prevent file from opening in a new window
	            // but also don't try to actually get the file
	            if (event.dataTransfer.files) {
	                files = Array.prototype.slice.call(event.dataTransfer.files, 0);
	                files.some(function (file) {
	                    if (file.type.match('image')) {
	                        var fileReader, id;
	                        fileReader = new FileReader();
	                        fileReader.readAsDataURL(file);
	
	                        id = 'medium-img-' + (+new Date());
	                        MediumEditor.util.insertHTMLCommand(this.document, '<img class="medium-editor-image-loading" id="' + id + '" />');
	
	                        fileReader.onload = function () {
	                            var img = this.document.getElementById(id);
	                            if (img) {
	                                img.removeAttribute('id');
	                                img.removeAttribute('class');
	                                img.src = fileReader.result;
	                            }
	                        }.bind(this);
	                    }
	                }.bind(this));
	            }
	            event.target.classList.remove(className);
	        }
	    });
	
	    MediumEditor.extensions.imageDragging = ImageDragging;
	}());
	
	(function () {
	    'use strict';
	
	    // Event handlers that shouldn't be exposed externally
	
	    function handleDisableExtraSpaces(event) {
	        var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
	            textContent = node.textContent,
	            caretPositions = MediumEditor.selection.getCaretOffsets(node);
	
	        if ((textContent[caretPositions.left - 1] === undefined) || (textContent[caretPositions.left - 1].trim() === '') || (textContent[caretPositions.left] !== undefined && textContent[caretPositions.left].trim() === '')) {
	            event.preventDefault();
	        }
	    }
	
	    function handleDisabledEnterKeydown(event, element) {
	        if (this.options.disableReturn || element.getAttribute('data-disable-return')) {
	            event.preventDefault();
	        } else if (this.options.disableDoubleReturn || element.getAttribute('data-disable-double-return')) {
	            var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument);
	
	            // if current text selection is empty OR previous sibling text is empty OR it is not a list
	            if ((node && node.textContent.trim() === '' && node.nodeName.toLowerCase() !== 'li') ||
	                (node.previousElementSibling && node.previousElementSibling.nodeName.toLowerCase() !== 'br' &&
	                 node.previousElementSibling.textContent.trim() === '')) {
	                event.preventDefault();
	            }
	        }
	    }
	
	    function handleTabKeydown(event) {
	        // Override tab only for pre nodes
	        var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
	            tag = node && node.nodeName.toLowerCase();
	
	        if (tag === 'pre') {
	            event.preventDefault();
	            MediumEditor.util.insertHTMLCommand(this.options.ownerDocument, '    ');
	        }
	
	        // Tab to indent list structures!
	        if (MediumEditor.util.isListItem(node)) {
	            event.preventDefault();
	
	            // If Shift is down, outdent, otherwise indent
	            if (event.shiftKey) {
	                this.options.ownerDocument.execCommand('outdent', false, null);
	            } else {
	                this.options.ownerDocument.execCommand('indent', false, null);
	            }
	        }
	    }
	
	    function handleBlockDeleteKeydowns(event) {
	        var p, node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
	            tagName = node.nodeName.toLowerCase(),
	            isEmpty = /^(\s+|<br\/?>)?$/i,
	            isHeader = /h\d/i;
	
	        if (MediumEditor.util.isKey(event, [MediumEditor.util.keyCode.BACKSPACE, MediumEditor.util.keyCode.ENTER]) &&
	                // has a preceeding sibling
	                node.previousElementSibling &&
	                // in a header
	                isHeader.test(tagName) &&
	                // at the very end of the block
	                MediumEditor.selection.getCaretOffsets(node).left === 0) {
	            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) && isEmpty.test(node.previousElementSibling.innerHTML)) {
	                // backspacing the begining of a header into an empty previous element will
	                // change the tagName of the current node to prevent one
	                // instead delete previous node and cancel the event.
	                node.previousElementSibling.parentNode.removeChild(node.previousElementSibling);
	                event.preventDefault();
	            } else if (!this.options.disableDoubleReturn && MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER)) {
	                // hitting return in the begining of a header will create empty header elements before the current one
	                // instead, make "<p><br></p>" element, which are what happens if you hit return in an empty paragraph
	                p = this.options.ownerDocument.createElement('p');
	                p.innerHTML = '<br>';
	                node.previousElementSibling.parentNode.insertBefore(p, node);
	                event.preventDefault();
	            }
	        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.DELETE) &&
	                    // between two sibling elements
	                    node.nextElementSibling &&
	                    node.previousElementSibling &&
	                    // not in a header
	                    !isHeader.test(tagName) &&
	                    // in an empty tag
	                    isEmpty.test(node.innerHTML) &&
	                    // when the next tag *is* a header
	                    isHeader.test(node.nextElementSibling.nodeName.toLowerCase())) {
	            // hitting delete in an empty element preceding a header, ex:
	            //  <p>[CURSOR]</p><h1>Header</h1>
	            // Will cause the h1 to become a paragraph.
	            // Instead, delete the paragraph node and move the cursor to the begining of the h1
	
	            // remove node and move cursor to start of header
	            MediumEditor.selection.moveCursor(this.options.ownerDocument, node.nextElementSibling);
	
	            node.previousElementSibling.parentNode.removeChild(node);
	
	            event.preventDefault();
	        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) &&
	                tagName === 'li' &&
	                // hitting backspace inside an empty li
	                isEmpty.test(node.innerHTML) &&
	                // is first element (no preceeding siblings)
	                !node.previousElementSibling &&
	                // parent also does not have a sibling
	                !node.parentElement.previousElementSibling &&
	                // is not the only li in a list
	                node.nextElementSibling &&
	                node.nextElementSibling.nodeName.toLowerCase() === 'li') {
	            // backspacing in an empty first list element in the first list (with more elements) ex:
	            //  <ul><li>[CURSOR]</li><li>List Item 2</li></ul>
	            // will remove the first <li> but add some extra element before (varies based on browser)
	            // Instead, this will:
	            // 1) remove the list element
	            // 2) create a paragraph before the list
	            // 3) move the cursor into the paragraph
	
	            // create a paragraph before the list
	            p = this.options.ownerDocument.createElement('p');
	            p.innerHTML = '<br>';
	            node.parentElement.parentElement.insertBefore(p, node.parentElement);
	
	            // move the cursor into the new paragraph
	            MediumEditor.selection.moveCursor(this.options.ownerDocument, p);
	
	            // remove the list element
	            node.parentElement.removeChild(node);
	
	            event.preventDefault();
	        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) &&
	                (MediumEditor.util.getClosestTag(node, 'blockquote') !== false) &&
	                MediumEditor.selection.getCaretOffsets(node).left === 0) {
	
	            // when cursor is at the begining of the element and the element is <blockquote>
	            // then pressing backspace key should change the <blockquote> to a <p> tag
	            event.preventDefault();
	            MediumEditor.util.execFormatBlock(this.options.ownerDocument, 'p');
	        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER) &&
	                (MediumEditor.util.getClosestTag(node, 'blockquote') !== false) &&
	                MediumEditor.selection.getCaretOffsets(node).right === 0) {
	
	            // when cursor is at the end of <blockquote>,
	            // then pressing enter key should create <p> tag, not <blockquote>
	            p = this.options.ownerDocument.createElement('p');
	            p.innerHTML = '<br>';
	            node.parentElement.insertBefore(p, node.nextSibling);
	
	            // move the cursor into the new paragraph
	            MediumEditor.selection.moveCursor(this.options.ownerDocument, p);
	
	            event.preventDefault();
	        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) &&
	                MediumEditor.util.isMediumEditorElement(node.parentElement) &&
	                !node.previousElementSibling &&
	                node.nextElementSibling &&
	                isEmpty.test(node.innerHTML)) {
	
	            // when cursor is in the first element, it's empty and user presses backspace,
	            // do delete action instead to get rid of the first element and move caret to 2nd
	            event.preventDefault();
	            MediumEditor.selection.moveCursor(this.options.ownerDocument, node.nextSibling);
	            node.parentElement.removeChild(node);
	        }
	    }
	
	    function handleKeyup(event) {
	        var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
	            tagName;
	
	        if (!node) {
	            return;
	        }
	
	        // https://github.com/yabwe/medium-editor/issues/994
	        // Firefox thrown an error when calling `formatBlock` on an empty editable blockContainer that's not a <div>
	        if (MediumEditor.util.isMediumEditorElement(node) && node.children.length === 0 && !MediumEditor.util.isBlockContainer(node)) {
	            this.options.ownerDocument.execCommand('formatBlock', false, 'p');
	        }
	
	        // https://github.com/yabwe/medium-editor/issues/834
	        // https://github.com/yabwe/medium-editor/pull/382
	        // Don't call format block if this is a block element (ie h1, figCaption, etc.)
	        if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER) &&
	            !MediumEditor.util.isListItem(node) &&
	            !MediumEditor.util.isBlockContainer(node)) {
	
	            tagName = node.nodeName.toLowerCase();
	            // For anchor tags, unlink
	            if (tagName === 'a') {
	                this.options.ownerDocument.execCommand('unlink', false, null);
	            } else if (!event.shiftKey && !event.ctrlKey) {
	                this.options.ownerDocument.execCommand('formatBlock', false, 'p');
	            }
	        }
	    }
	
	    function handleEditableInput(event, editable) {
	        var textarea = editable.parentNode.querySelector('textarea[medium-editor-textarea-id="' + editable.getAttribute('medium-editor-textarea-id') + '"]');
	        if (textarea) {
	            textarea.value = editable.innerHTML.trim();
	        }
	    }
	
	    // Internal helper methods which shouldn't be exposed externally
	
	    function addToEditors(win) {
	        if (!win._mediumEditors) {
	            // To avoid breaking users who are assuming that the unique id on
	            // medium-editor elements will start at 1, inserting a 'null' in the
	            // array so the unique-id can always map to the index of the editor instance
	            win._mediumEditors = [null];
	        }
	
	        // If this already has a unique id, re-use it
	        if (!this.id) {
	            this.id = win._mediumEditors.length;
	        }
	
	        win._mediumEditors[this.id] = this;
	    }
	
	    function removeFromEditors(win) {
	        if (!win._mediumEditors || !win._mediumEditors[this.id]) {
	            return;
	        }
	
	        /* Setting the instance to null in the array instead of deleting it allows:
	         * 1) Each instance to preserve its own unique-id, even after being destroyed
	         *    and initialized again
	         * 2) The unique-id to always correspond to an index in the array of medium-editor
	         *    instances. Thus, we will be able to look at a contenteditable, and determine
	         *    which instance it belongs to, by indexing into the global array.
	         */
	        win._mediumEditors[this.id] = null;
	    }
	
	    function createElementsArray(selector, doc, filterEditorElements) {
	        var elements = [];
	
	        if (!selector) {
	            selector = [];
	        }
	        // If string, use as query selector
	        if (typeof selector === 'string') {
	            selector = doc.querySelectorAll(selector);
	        }
	        // If element, put into array
	        if (MediumEditor.util.isElement(selector)) {
	            selector = [selector];
	        }
	
	        if (filterEditorElements) {
	            // Remove elements that have already been initialized by the editor
	            // selecotr might not be an array (ie NodeList) so use for loop
	            for (var i = 0; i < selector.length; i++) {
	                var el = selector[i];
	                if (MediumEditor.util.isElement(el) &&
	                    !el.getAttribute('data-medium-editor-element') &&
	                    !el.getAttribute('medium-editor-textarea-id')) {
	                    elements.push(el);
	                }
	            }
	        } else {
	            // Convert NodeList (or other array like object) into an array
	            elements = Array.prototype.slice.apply(selector);
	        }
	
	        return elements;
	    }
	
	    function cleanupTextareaElement(element) {
	        var textarea = element.parentNode.querySelector('textarea[medium-editor-textarea-id="' + element.getAttribute('medium-editor-textarea-id') + '"]');
	        if (textarea) {
	            // Un-hide the textarea
	            textarea.classList.remove('medium-editor-hidden');
	            textarea.removeAttribute('medium-editor-textarea-id');
	        }
	        if (element.parentNode) {
	            element.parentNode.removeChild(element);
	        }
	    }
	
	    function setExtensionDefaults(extension, defaults) {
	        Object.keys(defaults).forEach(function (prop) {
	            if (extension[prop] === undefined) {
	                extension[prop] = defaults[prop];
	            }
	        });
	        return extension;
	    }
	
	    function initExtension(extension, name, instance) {
	        var extensionDefaults = {
	            'window': instance.options.contentWindow,
	            'document': instance.options.ownerDocument,
	            'base': instance
	        };
	
	        // Add default options into the extension
	        extension = setExtensionDefaults(extension, extensionDefaults);
	
	        // Call init on the extension
	        if (typeof extension.init === 'function') {
	            extension.init();
	        }
	
	        // Set extension name (if not already set)
	        if (!extension.name) {
	            extension.name = name;
	        }
	        return extension;
	    }
	
	    function isToolbarEnabled() {
	        // If any of the elements don't have the toolbar disabled
	        // We need a toolbar
	        if (this.elements.every(function (element) {
	                return !!element.getAttribute('data-disable-toolbar');
	            })) {
	            return false;
	        }
	
	        return this.options.toolbar !== false;
	    }
	
	    function isAnchorPreviewEnabled() {
	        // If toolbar is disabled, don't add
	        if (!isToolbarEnabled.call(this)) {
	            return false;
	        }
	
	        return this.options.anchorPreview !== false;
	    }
	
	    function isPlaceholderEnabled() {
	        return this.options.placeholder !== false;
	    }
	
	    function isAutoLinkEnabled() {
	        return this.options.autoLink !== false;
	    }
	
	    function isImageDraggingEnabled() {
	        return this.options.imageDragging !== false;
	    }
	
	    function isKeyboardCommandsEnabled() {
	        return this.options.keyboardCommands !== false;
	    }
	
	    function shouldUseFileDraggingExtension() {
	        // Since the file-dragging extension replaces the image-dragging extension,
	        // we need to check if the user passed an overrided image-dragging extension.
	        // If they have, to avoid breaking users, we won't use file-dragging extension.
	        return !this.options.extensions['imageDragging'];
	    }
	
	    function createContentEditable(textarea) {
	        var div = this.options.ownerDocument.createElement('div'),
	            now = Date.now(),
	            uniqueId = 'medium-editor-' + now,
	            atts = textarea.attributes;
	
	        // Some browsers can move pretty fast, since we're using a timestamp
	        // to make a unique-id, ensure that the id is actually unique on the page
	        while (this.options.ownerDocument.getElementById(uniqueId)) {
	            now++;
	            uniqueId = 'medium-editor-' + now;
	        }
	
	        div.className = textarea.className;
	        div.id = uniqueId;
	        div.innerHTML = textarea.value;
	
	        textarea.setAttribute('medium-editor-textarea-id', uniqueId);
	
	        // re-create all attributes from the textearea to the new created div
	        for (var i = 0, n = atts.length; i < n; i++) {
	            // do not re-create existing attributes
	            if (!div.hasAttribute(atts[i].nodeName)) {
	                div.setAttribute(atts[i].nodeName, atts[i].nodeValue);
	            }
	        }
	
	        // If textarea has a form, listen for reset on the form to clear
	        // the content of the created div
	        if (textarea.form) {
	            this.on(textarea.form, 'reset', function (event) {
	                if (!event.defaultPrevented) {
	                    this.resetContent(this.options.ownerDocument.getElementById(uniqueId));
	                }
	            }.bind(this));
	        }
	
	        textarea.classList.add('medium-editor-hidden');
	        textarea.parentNode.insertBefore(
	            div,
	            textarea
	        );
	
	        return div;
	    }
	
	    function initElement(element, editorId) {
	        if (!element.getAttribute('data-medium-editor-element')) {
	            if (element.nodeName.toLowerCase() === 'textarea') {
	                element = createContentEditable.call(this, element);
	
	                // Make sure we only attach to editableInput once for <textarea> elements
	                if (!this.instanceHandleEditableInput) {
	                    this.instanceHandleEditableInput = handleEditableInput.bind(this);
	                    this.subscribe('editableInput', this.instanceHandleEditableInput);
	                }
	            }
	
	            if (!this.options.disableEditing && !element.getAttribute('data-disable-editing')) {
	                element.setAttribute('contentEditable', true);
	                element.setAttribute('spellcheck', this.options.spellcheck);
	            }
	
	            // Make sure we only attach to editableKeydownEnter once for disable-return options
	            if (!this.instanceHandleEditableKeydownEnter) {
	                if (element.getAttribute('data-disable-return') || element.getAttribute('data-disable-double-return')) {
	                    this.instanceHandleEditableKeydownEnter = handleDisabledEnterKeydown.bind(this);
	                    this.subscribe('editableKeydownEnter', this.instanceHandleEditableKeydownEnter);
	                }
	            }
	
	            // if we're not disabling return, add a handler to help handle cleanup
	            // for certain cases when enter is pressed
	            if (!this.options.disableReturn && !element.getAttribute('data-disable-return')) {
	                this.on(element, 'keyup', handleKeyup.bind(this));
	            }
	
	            var elementId = MediumEditor.util.guid();
	
	            element.setAttribute('data-medium-editor-element', true);
	            element.classList.add('medium-editor-element');
	            element.setAttribute('role', 'textbox');
	            element.setAttribute('aria-multiline', true);
	            element.setAttribute('data-medium-editor-editor-index', editorId);
	            // TODO: Merge data-medium-editor-element and medium-editor-index attributes for 6.0.0
	            // medium-editor-index is not named correctly anymore and can be re-purposed to signify
	            // whether the element has been initialized or not
	            element.setAttribute('medium-editor-index', elementId);
	            initialContent[elementId] = element.innerHTML;
	
	            this.events.attachAllEventsToElement(element);
	        }
	
	        return element;
	    }
	
	    function attachHandlers() {
	        // attach to tabs
	        this.subscribe('editableKeydownTab', handleTabKeydown.bind(this));
	
	        // Bind keys which can create or destroy a block element: backspace, delete, return
	        this.subscribe('editableKeydownDelete', handleBlockDeleteKeydowns.bind(this));
	        this.subscribe('editableKeydownEnter', handleBlockDeleteKeydowns.bind(this));
	
	        // Bind double space event
	        if (this.options.disableExtraSpaces) {
	            this.subscribe('editableKeydownSpace', handleDisableExtraSpaces.bind(this));
	        }
	
	        // Make sure we only attach to editableKeydownEnter once for disable-return options
	        if (!this.instanceHandleEditableKeydownEnter) {
	            // disabling return or double return
	            if (this.options.disableReturn || this.options.disableDoubleReturn) {
	                this.instanceHandleEditableKeydownEnter = handleDisabledEnterKeydown.bind(this);
	                this.subscribe('editableKeydownEnter', this.instanceHandleEditableKeydownEnter);
	            }
	        }
	    }
	
	    function initExtensions() {
	
	        this.extensions = [];
	
	        // Passed in extensions
	        Object.keys(this.options.extensions).forEach(function (name) {
	            // Always save the toolbar extension for last
	            if (name !== 'toolbar' && this.options.extensions[name]) {
	                this.extensions.push(initExtension(this.options.extensions[name], name, this));
	            }
	        }, this);
	
	        // 4 Cases for imageDragging + fileDragging extensons:
	        //
	        // 1. ImageDragging ON + No Custom Image Dragging Extension:
	        //    * Use fileDragging extension (default options)
	        // 2. ImageDragging OFF + No Custom Image Dragging Extension:
	        //    * Use fileDragging extension w/ images turned off
	        // 3. ImageDragging ON + Custom Image Dragging Extension:
	        //    * Don't use fileDragging (could interfere with custom image dragging extension)
	        // 4. ImageDragging OFF + Custom Image Dragging:
	        //    * Don't use fileDragging (could interfere with custom image dragging extension)
	        if (shouldUseFileDraggingExtension.call(this)) {
	            var opts = this.options.fileDragging;
	            if (!opts) {
	                opts = {};
	
	                // Image is in the 'allowedTypes' list by default.
	                // If imageDragging is off override the 'allowedTypes' list with an empty one
	                if (!isImageDraggingEnabled.call(this)) {
	                    opts.allowedTypes = [];
	                }
	            }
	            this.addBuiltInExtension('fileDragging', opts);
	        }
	
	        // Built-in extensions
	        var builtIns = {
	            paste: true,
	            'anchor-preview': isAnchorPreviewEnabled.call(this),
	            autoLink: isAutoLinkEnabled.call(this),
	            keyboardCommands: isKeyboardCommandsEnabled.call(this),
	            placeholder: isPlaceholderEnabled.call(this)
	        };
	        Object.keys(builtIns).forEach(function (name) {
	            if (builtIns[name]) {
	                this.addBuiltInExtension(name);
	            }
	        }, this);
	
	        // Users can pass in a custom toolbar extension
	        // so check for that first and if it's not present
	        // just create the default toolbar
	        var toolbarExtension = this.options.extensions['toolbar'];
	        if (!toolbarExtension && isToolbarEnabled.call(this)) {
	            // Backwards compatability
	            var toolbarOptions = MediumEditor.util.extend({}, this.options.toolbar, {
	                allowMultiParagraphSelection: this.options.allowMultiParagraphSelection // deprecated
	            });
	            toolbarExtension = new MediumEditor.extensions.toolbar(toolbarOptions);
	        }
	
	        // If the toolbar is not disabled, so we actually have an extension
	        // initialize it and add it to the extensions array
	        if (toolbarExtension) {
	            this.extensions.push(initExtension(toolbarExtension, 'toolbar', this));
	        }
	    }
	
	    function mergeOptions(defaults, options) {
	        var deprecatedProperties = [
	            ['allowMultiParagraphSelection', 'toolbar.allowMultiParagraphSelection']
	        ];
	        // warn about using deprecated properties
	        if (options) {
	            deprecatedProperties.forEach(function (pair) {
	                if (options.hasOwnProperty(pair[0]) && options[pair[0]] !== undefined) {
	                    MediumEditor.util.deprecated(pair[0], pair[1], 'v6.0.0');
	                }
	            });
	        }
	
	        return MediumEditor.util.defaults({}, options, defaults);
	    }
	
	    function execActionInternal(action, opts) {
	        /*jslint regexp: true*/
	        var appendAction = /^append-(.+)$/gi,
	            justifyAction = /justify([A-Za-z]*)$/g, /* Detecting if is justifyCenter|Right|Left */
	            match,
	            cmdValueArgument;
	        /*jslint regexp: false*/
	
	        // Actions starting with 'append-' should attempt to format a block of text ('formatBlock') using a specific
	        // type of block element (ie append-blockquote, append-h1, append-pre, etc.)
	        match = appendAction.exec(action);
	        if (match) {
	            return MediumEditor.util.execFormatBlock(this.options.ownerDocument, match[1]);
	        }
	
	        if (action === 'fontSize') {
	            // TODO: Deprecate support for opts.size in 6.0.0
	            if (opts.size) {
	                MediumEditor.util.deprecated('.size option for fontSize command', '.value', '6.0.0');
	            }
	            cmdValueArgument = opts.value || opts.size;
	            return this.options.ownerDocument.execCommand('fontSize', false, cmdValueArgument);
	        }
	
	        if (action === 'fontName') {
	            // TODO: Deprecate support for opts.name in 6.0.0
	            if (opts.name) {
	                MediumEditor.util.deprecated('.name option for fontName command', '.value', '6.0.0');
	            }
	            cmdValueArgument = opts.value || opts.name;
	            return this.options.ownerDocument.execCommand('fontName', false, cmdValueArgument);
	        }
	
	        if (action === 'createLink') {
	            return this.createLink(opts);
	        }
	
	        if (action === 'image') {
	            var src = this.options.contentWindow.getSelection().toString().trim();
	            return this.options.ownerDocument.execCommand('insertImage', false, src);
	        }
	
	        /* Issue: https://github.com/yabwe/medium-editor/issues/595
	         * If the action is to justify the text */
	        if (justifyAction.exec(action)) {
	            var result = this.options.ownerDocument.execCommand(action, false, null),
	                parentNode = MediumEditor.selection.getSelectedParentElement(MediumEditor.selection.getSelectionRange(this.options.ownerDocument));
	            if (parentNode) {
	                cleanupJustifyDivFragments.call(this, MediumEditor.util.getTopBlockContainer(parentNode));
	            }
	
	            return result;
	        }
	
	        cmdValueArgument = opts && opts.value;
	        return this.options.ownerDocument.execCommand(action, false, cmdValueArgument);
	    }
	
	    /* If we've just justified text within a container block
	     * Chrome may have removed <br> elements and instead wrapped lines in <div> elements
	     * with a text-align property.  If so, we want to fix this
	     */
	    function cleanupJustifyDivFragments(blockContainer) {
	        if (!blockContainer) {
	            return;
	        }
	
	        var textAlign,
	            childDivs = Array.prototype.slice.call(blockContainer.childNodes).filter(function (element) {
	                var isDiv = element.nodeName.toLowerCase() === 'div';
	                if (isDiv && !textAlign) {
	                    textAlign = element.style.textAlign;
	                }
	                return isDiv;
	            });
	
	        /* If we found child <div> elements with text-align style attributes
	         * we should fix this by:
	         *
	         * 1) Unwrapping each <div> which has a text-align style
	         * 2) Insert a <br> element after each set of 'unwrapped' div children
	         * 3) Set the text-align style of the parent block element
	         */
	        if (childDivs.length) {
	            // Since we're mucking with the HTML, preserve selection
	            this.saveSelection();
	            childDivs.forEach(function (div) {
	                if (div.style.textAlign === textAlign) {
	                    var lastChild = div.lastChild;
	                    if (lastChild) {
	                        // Instead of a div, extract the child elements and add a <br>
	                        MediumEditor.util.unwrap(div, this.options.ownerDocument);
	                        var br = this.options.ownerDocument.createElement('BR');
	                        lastChild.parentNode.insertBefore(br, lastChild.nextSibling);
	                    }
	                }
	            }, this);
	            blockContainer.style.textAlign = textAlign;
	            // We're done, so restore selection
	            this.restoreSelection();
	        }
	    }
	
	    var initialContent = {};
	
	    MediumEditor.prototype = {
	        // NOT DOCUMENTED - exposed for backwards compatability
	        init: function (elements, options) {
	            this.options = mergeOptions.call(this, this.defaults, options);
	            this.origElements = elements;
	
	            if (!this.options.elementsContainer) {
	                this.options.elementsContainer = this.options.ownerDocument.body;
	            }
	
	            return this.setup();
	        },
	
	        setup: function () {
	            if (this.isActive) {
	                return;
	            }
	
	            addToEditors.call(this, this.options.contentWindow);
	            this.events = new MediumEditor.Events(this);
	            this.elements = [];
	
	            this.addElements(this.origElements);
	
	            if (this.elements.length === 0) {
	                return;
	            }
	
	            this.isActive = true;
	
	            // Call initialization helpers
	            initExtensions.call(this);
	            attachHandlers.call(this);
	        },
	
	        destroy: function () {
	            if (!this.isActive) {
	                return;
	            }
	
	            this.isActive = false;
	
	            this.extensions.forEach(function (extension) {
	                if (typeof extension.destroy === 'function') {
	                    extension.destroy();
	                }
	            }, this);
	
	            this.events.destroy();
	
	            this.elements.forEach(function (element) {
	                // Reset elements content, fix for issue where after editor destroyed the red underlines on spelling errors are left
	                if (this.options.spellcheck) {
	                    element.innerHTML = element.innerHTML;
	                }
	
	                // cleanup extra added attributes
	                element.removeAttribute('contentEditable');
	                element.removeAttribute('spellcheck');
	                element.removeAttribute('data-medium-editor-element');
	                element.classList.remove('medium-editor-element');
	                element.removeAttribute('role');
	                element.removeAttribute('aria-multiline');
	                element.removeAttribute('medium-editor-index');
	                element.removeAttribute('data-medium-editor-editor-index');
	
	                // Remove any elements created for textareas
	                if (element.getAttribute('medium-editor-textarea-id')) {
	                    cleanupTextareaElement(element);
	                }
	            }, this);
	            this.elements = [];
	            this.instanceHandleEditableKeydownEnter = null;
	            this.instanceHandleEditableInput = null;
	
	            removeFromEditors.call(this, this.options.contentWindow);
	        },
	
	        on: function (target, event, listener, useCapture) {
	            this.events.attachDOMEvent(target, event, listener, useCapture);
	
	            return this;
	        },
	
	        off: function (target, event, listener, useCapture) {
	            this.events.detachDOMEvent(target, event, listener, useCapture);
	
	            return this;
	        },
	
	        subscribe: function (event, listener) {
	            this.events.attachCustomEvent(event, listener);
	
	            return this;
	        },
	
	        unsubscribe: function (event, listener) {
	            this.events.detachCustomEvent(event, listener);
	
	            return this;
	        },
	
	        trigger: function (name, data, editable) {
	            this.events.triggerCustomEvent(name, data, editable);
	
	            return this;
	        },
	
	        delay: function (fn) {
	            var self = this;
	            return setTimeout(function () {
	                if (self.isActive) {
	                    fn();
	                }
	            }, this.options.delay);
	        },
	
	        serialize: function () {
	            var i,
	                elementid,
	                content = {},
	                len = this.elements.length;
	
	            for (i = 0; i < len; i += 1) {
	                elementid = (this.elements[i].id !== '') ? this.elements[i].id : 'element-' + i;
	                content[elementid] = {
	                    value: this.elements[i].innerHTML.trim()
	                };
	            }
	            return content;
	        },
	
	        getExtensionByName: function (name) {
	            var extension;
	            if (this.extensions && this.extensions.length) {
	                this.extensions.some(function (ext) {
	                    if (ext.name === name) {
	                        extension = ext;
	                        return true;
	                    }
	                    return false;
	                });
	            }
	            return extension;
	        },
	
	        /**
	         * NOT DOCUMENTED - exposed as a helper for other extensions to use
	         */
	        addBuiltInExtension: function (name, opts) {
	            var extension = this.getExtensionByName(name),
	                merged;
	            if (extension) {
	                return extension;
	            }
	
	            switch (name) {
	                case 'anchor':
	                    merged = MediumEditor.util.extend({}, this.options.anchor, opts);
	                    extension = new MediumEditor.extensions.anchor(merged);
	                    break;
	                case 'anchor-preview':
	                    extension = new MediumEditor.extensions.anchorPreview(this.options.anchorPreview);
	                    break;
	                case 'autoLink':
	                    extension = new MediumEditor.extensions.autoLink();
	                    break;
	                case 'fileDragging':
	                    extension = new MediumEditor.extensions.fileDragging(opts);
	                    break;
	                case 'fontname':
	                    extension = new MediumEditor.extensions.fontName(this.options.fontName);
	                    break;
	                case 'fontsize':
	                    extension = new MediumEditor.extensions.fontSize(opts);
	                    break;
	                case 'keyboardCommands':
	                    extension = new MediumEditor.extensions.keyboardCommands(this.options.keyboardCommands);
	                    break;
	                case 'paste':
	                    extension = new MediumEditor.extensions.paste(this.options.paste);
	                    break;
	                case 'placeholder':
	                    extension = new MediumEditor.extensions.placeholder(this.options.placeholder);
	                    break;
	                default:
	                    // All of the built-in buttons for MediumEditor are extensions
	                    // so check to see if the extension we're creating is a built-in button
	                    if (MediumEditor.extensions.button.isBuiltInButton(name)) {
	                        if (opts) {
	                            merged = MediumEditor.util.defaults({}, opts, MediumEditor.extensions.button.prototype.defaults[name]);
	                            extension = new MediumEditor.extensions.button(merged);
	                        } else {
	                            extension = new MediumEditor.extensions.button(name);
	                        }
	                    }
	            }
	
	            if (extension) {
	                this.extensions.push(initExtension(extension, name, this));
	            }
	
	            return extension;
	        },
	
	        stopSelectionUpdates: function () {
	            this.preventSelectionUpdates = true;
	        },
	
	        startSelectionUpdates: function () {
	            this.preventSelectionUpdates = false;
	        },
	
	        checkSelection: function () {
	            var toolbar = this.getExtensionByName('toolbar');
	            if (toolbar) {
	                toolbar.checkState();
	            }
	            return this;
	        },
	
	        // Wrapper around document.queryCommandState for checking whether an action has already
	        // been applied to the current selection
	        queryCommandState: function (action) {
	            var fullAction = /^full-(.+)$/gi,
	                match,
	                queryState = null;
	
	            // Actions starting with 'full-' need to be modified since this is a medium-editor concept
	            match = fullAction.exec(action);
	            if (match) {
	                action = match[1];
	            }
	
	            try {
	                queryState = this.options.ownerDocument.queryCommandState(action);
	            } catch (exc) {
	                queryState = null;
	            }
	
	            return queryState;
	        },
	
	        execAction: function (action, opts) {
	            /*jslint regexp: true*/
	            var fullAction = /^full-(.+)$/gi,
	                match,
	                result;
	            /*jslint regexp: false*/
	
	            // Actions starting with 'full-' should be applied to to the entire contents of the editable element
	            // (ie full-bold, full-append-pre, etc.)
	            match = fullAction.exec(action);
	            if (match) {
	                // Store the current selection to be restored after applying the action
	                this.saveSelection();
	                // Select all of the contents before calling the action
	                this.selectAllContents();
	                result = execActionInternal.call(this, match[1], opts);
	                // Restore the previous selection
	                this.restoreSelection();
	            } else {
	                result = execActionInternal.call(this, action, opts);
	            }
	
	            // do some DOM clean-up for known browser issues after the action
	            if (action === 'insertunorderedlist' || action === 'insertorderedlist') {
	                MediumEditor.util.cleanListDOM(this.options.ownerDocument, this.getSelectedParentElement());
	            }
	
	            this.checkSelection();
	            return result;
	        },
	
	        getSelectedParentElement: function (range) {
	            if (range === undefined) {
	                range = this.options.contentWindow.getSelection().getRangeAt(0);
	            }
	            return MediumEditor.selection.getSelectedParentElement(range);
	        },
	
	        selectAllContents: function () {
	            var currNode = MediumEditor.selection.getSelectionElement(this.options.contentWindow);
	
	            if (currNode) {
	                // Move to the lowest descendant node that still selects all of the contents
	                while (currNode.children.length === 1) {
	                    currNode = currNode.children[0];
	                }
	
	                this.selectElement(currNode);
	            }
	        },
	
	        selectElement: function (element) {
	            MediumEditor.selection.selectNode(element, this.options.ownerDocument);
	
	            var selElement = MediumEditor.selection.getSelectionElement(this.options.contentWindow);
	            if (selElement) {
	                this.events.focusElement(selElement);
	            }
	        },
	
	        getFocusedElement: function () {
	            var focused;
	            this.elements.some(function (element) {
	                // Find the element that has focus
	                if (!focused && element.getAttribute('data-medium-focused')) {
	                    focused = element;
	                }
	
	                // bail if we found the element that had focus
	                return !!focused;
	            }, this);
	
	            return focused;
	        },
	
	        // Export the state of the selection in respect to one of this
	        // instance of MediumEditor's elements
	        exportSelection: function () {
	            var selectionElement = MediumEditor.selection.getSelectionElement(this.options.contentWindow),
	                editableElementIndex = this.elements.indexOf(selectionElement),
	                selectionState = null;
	
	            if (editableElementIndex >= 0) {
	                selectionState = MediumEditor.selection.exportSelection(selectionElement, this.options.ownerDocument);
	            }
	
	            if (selectionState !== null && editableElementIndex !== 0) {
	                selectionState.editableElementIndex = editableElementIndex;
	            }
	
	            return selectionState;
	        },
	
	        saveSelection: function () {
	            this.selectionState = this.exportSelection();
	        },
	
	        // Restore a selection based on a selectionState returned by a call
	        // to MediumEditor.exportSelection
	        importSelection: function (selectionState, favorLaterSelectionAnchor) {
	            if (!selectionState) {
	                return;
	            }
	
	            var editableElement = this.elements[selectionState.editableElementIndex || 0];
	            MediumEditor.selection.importSelection(selectionState, editableElement, this.options.ownerDocument, favorLaterSelectionAnchor);
	        },
	
	        restoreSelection: function () {
	            this.importSelection(this.selectionState);
	        },
	
	        createLink: function (opts) {
	            var currentEditor = MediumEditor.selection.getSelectionElement(this.options.contentWindow),
	                customEvent = {},
	                targetUrl;
	
	            // Make sure the selection is within an element this editor is tracking
	            if (this.elements.indexOf(currentEditor) === -1) {
	                return;
	            }
	
	            try {
	                this.events.disableCustomEvent('editableInput');
	                // TODO: Deprecate support for opts.url in 6.0.0
	                if (opts.url) {
	                    MediumEditor.util.deprecated('.url option for createLink', '.value', '6.0.0');
	                }
	                targetUrl = opts.url || opts.value;
	                if (targetUrl && targetUrl.trim().length > 0) {
	                    var currentSelection = this.options.contentWindow.getSelection();
	                    if (currentSelection) {
	                        var currRange = currentSelection.getRangeAt(0),
	                            commonAncestorContainer = currRange.commonAncestorContainer,
	                            exportedSelection,
	                            startContainerParentElement,
	                            endContainerParentElement,
	                            textNodes;
	
	                        // If the selection is contained within a single text node
	                        // and the selection starts at the beginning of the text node,
	                        // MSIE still says the startContainer is the parent of the text node.
	                        // If the selection is contained within a single text node, we
	                        // want to just use the default browser 'createLink', so we need
	                        // to account for this case and adjust the commonAncestorContainer accordingly
	                        if (currRange.endContainer.nodeType === 3 &&
	                            currRange.startContainer.nodeType !== 3 &&
	                            currRange.startOffset === 0 &&
	                            currRange.startContainer.firstChild === currRange.endContainer) {
	                            commonAncestorContainer = currRange.endContainer;
	                        }
	
	                        startContainerParentElement = MediumEditor.util.getClosestBlockContainer(currRange.startContainer);
	                        endContainerParentElement = MediumEditor.util.getClosestBlockContainer(currRange.endContainer);
	
	                        // If the selection is not contained within a single text node
	                        // but the selection is contained within the same block element
	                        // we want to make sure we create a single link, and not multiple links
	                        // which can happen with the built in browser functionality
	                        if (commonAncestorContainer.nodeType !== 3 && commonAncestorContainer.textContent.length !== 0 && startContainerParentElement === endContainerParentElement) {
	                            var parentElement = (startContainerParentElement || currentEditor),
	                                fragment = this.options.ownerDocument.createDocumentFragment();
	
	                            // since we are going to create a link from an extracted text,
	                            // be sure that if we are updating a link, we won't let an empty link behind (see #754)
	                            // (Workaroung for Chrome)
	                            this.execAction('unlink');
	
	                            exportedSelection = this.exportSelection();
	                            fragment.appendChild(parentElement.cloneNode(true));
	
	                            if (currentEditor === parentElement) {
	                                // We have to avoid the editor itself being wiped out when it's the only block element,
	                                // as our reference inside this.elements gets detached from the page when insertHTML runs.
	                                // If we just use [parentElement, 0] and [parentElement, parentElement.childNodes.length]
	                                // as the range boundaries, this happens whenever parentElement === currentEditor.
	                                // The tradeoff to this workaround is that a orphaned tag can sometimes be left behind at
	                                // the end of the editor's content.
	                                // In Gecko:
	                                // as an empty <strong></strong> if parentElement.lastChild is a <strong> tag.
	                                // In WebKit:
	                                // an invented <br /> tag at the end in the same situation
	                                MediumEditor.selection.select(
	                                    this.options.ownerDocument,
	                                    parentElement.firstChild,
	                                    0,
	                                    parentElement.lastChild,
	                                    parentElement.lastChild.nodeType === 3 ?
	                                    parentElement.lastChild.nodeValue.length : parentElement.lastChild.childNodes.length
	                                );
	                            } else {
	                                MediumEditor.selection.select(
	                                    this.options.ownerDocument,
	                                    parentElement,
	                                    0,
	                                    parentElement,
	                                    parentElement.childNodes.length
	                                );
	                            }
	
	                            var modifiedExportedSelection = this.exportSelection();
	
	                            textNodes = MediumEditor.util.findOrCreateMatchingTextNodes(
	                                this.options.ownerDocument,
	                                fragment,
	                                {
	                                    start: exportedSelection.start - modifiedExportedSelection.start,
	                                    end: exportedSelection.end - modifiedExportedSelection.start,
	                                    editableElementIndex: exportedSelection.editableElementIndex
	                                }
	                            );
	                            // If textNodes are not present, when changing link on images
	                            // ex: <a><img src="http://image.test.com"></a>, change fragment to currRange.startContainer
	                            // and set textNodes array to [imageElement, imageElement]
	                            if (textNodes.length === 0) {
	                                fragment = this.options.ownerDocument.createDocumentFragment();
	                                fragment.appendChild(commonAncestorContainer.cloneNode(true));
	                                textNodes = [fragment.firstChild.firstChild, fragment.firstChild.lastChild];
	                            }
	
	                            // Creates the link in the document fragment
	                            MediumEditor.util.createLink(this.options.ownerDocument, textNodes, targetUrl.trim());
	
	                            // Chrome trims the leading whitespaces when inserting HTML, which messes up restoring the selection.
	                            var leadingWhitespacesCount = (fragment.firstChild.innerHTML.match(/^\s+/) || [''])[0].length;
	
	                            // Now move the created link back into the original document in a way to preserve undo/redo history
	                            MediumEditor.util.insertHTMLCommand(this.options.ownerDocument, fragment.firstChild.innerHTML.replace(/^\s+/, ''));
	                            exportedSelection.start -= leadingWhitespacesCount;
	                            exportedSelection.end -= leadingWhitespacesCount;
	
	                            this.importSelection(exportedSelection);
	                        } else {
	                            this.options.ownerDocument.execCommand('createLink', false, targetUrl);
	                        }
	
	                        if (this.options.targetBlank || opts.target === '_blank') {
	                            MediumEditor.util.setTargetBlank(MediumEditor.selection.getSelectionStart(this.options.ownerDocument), targetUrl);
	                        } else {
	                            MediumEditor.util.removeTargetBlank(MediumEditor.selection.getSelectionStart(this.options.ownerDocument), targetUrl);
	                        }
	
	                        if (opts.buttonClass) {
	                            MediumEditor.util.addClassToAnchors(MediumEditor.selection.getSelectionStart(this.options.ownerDocument), opts.buttonClass);
	                        }
	                    }
	                }
	                // Fire input event for backwards compatibility if anyone was listening directly to the DOM input event
	                if (this.options.targetBlank || opts.target === '_blank' || opts.buttonClass) {
	                    customEvent = this.options.ownerDocument.createEvent('HTMLEvents');
	                    customEvent.initEvent('input', true, true, this.options.contentWindow);
	                    for (var i = 0, len = this.elements.length; i < len; i += 1) {
	                        this.elements[i].dispatchEvent(customEvent);
	                    }
	                }
	            } finally {
	                this.events.enableCustomEvent('editableInput');
	            }
	            // Fire our custom editableInput event
	            this.events.triggerCustomEvent('editableInput', customEvent, currentEditor);
	        },
	
	        cleanPaste: function (text) {
	            this.getExtensionByName('paste').cleanPaste(text);
	        },
	
	        pasteHTML: function (html, options) {
	            this.getExtensionByName('paste').pasteHTML(html, options);
	        },
	
	        setContent: function (html, index) {
	            index = index || 0;
	
	            if (this.elements[index]) {
	                var target = this.elements[index];
	                target.innerHTML = html;
	                this.checkContentChanged(target);
	            }
	        },
	
	        getContent: function (index) {
	            index = index || 0;
	
	            if (this.elements[index]) {
	                return this.elements[index].innerHTML.trim();
	            }
	            return null;
	        },
	
	        checkContentChanged: function (editable) {
	            editable = editable || MediumEditor.selection.getSelectionElement(this.options.contentWindow);
	            this.events.updateInput(editable, { target: editable, currentTarget: editable });
	        },
	
	        resetContent: function (element) {
	            // For all elements that exist in the this.elements array, we can assume:
	            // - Its initial content has been set in the initialContent object
	            // - It has a medium-editor-index attribute which is the key value in the initialContent object
	
	            if (element) {
	                var index = this.elements.indexOf(element);
	                if (index !== -1) {
	                    this.setContent(initialContent[element.getAttribute('medium-editor-index')], index);
	                }
	                return;
	            }
	
	            this.elements.forEach(function (el, idx) {
	                this.setContent(initialContent[el.getAttribute('medium-editor-index')], idx);
	            }, this);
	        },
	
	        addElements: function (selector) {
	            // Convert elements into an array
	            var elements = createElementsArray(selector, this.options.ownerDocument, true);
	
	            // Do we have elements to add now?
	            if (elements.length === 0) {
	                return false;
	            }
	
	            elements.forEach(function (element) {
	                // Initialize all new elements (we check that in those functions don't worry)
	                element = initElement.call(this, element, this.id);
	
	                // Add new elements to our internal elements array
	                this.elements.push(element);
	
	                // Trigger event so extensions can know when an element has been added
	                this.trigger('addElement', { target: element, currentTarget: element }, element);
	            }, this);
	        },
	
	        removeElements: function (selector) {
	            // Convert elements into an array
	            var elements = createElementsArray(selector, this.options.ownerDocument),
	                toRemove = elements.map(function (el) {
	                    // For textareas, make sure we're looking at the editor div and not the textarea itself
	                    if (el.getAttribute('medium-editor-textarea-id') && el.parentNode) {
	                        return el.parentNode.querySelector('div[medium-editor-textarea-id="' + el.getAttribute('medium-editor-textarea-id') + '"]');
	                    } else {
	                        return el;
	                    }
	                });
	
	            this.elements = this.elements.filter(function (element) {
	                // If this is an element we want to remove
	                if (toRemove.indexOf(element) !== -1) {
	                    this.events.cleanupElement(element);
	                    if (element.getAttribute('medium-editor-textarea-id')) {
	                        cleanupTextareaElement(element);
	                    }
	                    // Trigger event so extensions can clean-up elements that are being removed
	                    this.trigger('removeElement', { target: element, currentTarget: element }, element);
	                    return false;
	                }
	                return true;
	            }, this);
	        }
	    };
	
	    MediumEditor.getEditorFromElement = function (element) {
	        var index = element.getAttribute('data-medium-editor-editor-index'),
	            win = element && element.ownerDocument && (element.ownerDocument.defaultView || element.ownerDocument.parentWindow);
	        if (win && win._mediumEditors && win._mediumEditors[index]) {
	            return win._mediumEditors[index];
	        }
	        return null;
	    };
	}());
	
	(function () {
	    // summary: The default options hash used by the Editor
	
	    MediumEditor.prototype.defaults = {
	        activeButtonClass: 'medium-editor-button-active',
	        buttonLabels: false,
	        delay: 0,
	        disableReturn: false,
	        disableDoubleReturn: false,
	        disableExtraSpaces: false,
	        disableEditing: false,
	        autoLink: false,
	        elementsContainer: false,
	        contentWindow: window,
	        ownerDocument: document,
	        targetBlank: false,
	        extensions: {},
	        spellcheck: true
	    };
	})();
	
	MediumEditor.parseVersionString = function (release) {
	    var split = release.split('-'),
	        version = split[0].split('.'),
	        preRelease = (split.length > 1) ? split[1] : '';
	    return {
	        major: parseInt(version[0], 10),
	        minor: parseInt(version[1], 10),
	        revision: parseInt(version[2], 10),
	        preRelease: preRelease,
	        toString: function () {
	            return [version[0], version[1], version[2]].join('.') + (preRelease ? '-' + preRelease : '');
	        }
	    };
	};
	
	MediumEditor.version = MediumEditor.parseVersionString.call(this, ({
	    // grunt-bump looks for this:
	    'version': '5.22.2'
	}).version);
	
	    return MediumEditor;
	}()));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(194)))

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assign = __webpack_require__(405);
	var blacklist = __webpack_require__(594);
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(10);
	
	if (typeof document !== 'undefined') {
	  var MediumEditor = __webpack_require__(603);
	}
	
	module.exports = React.createClass({
	  displayName: 'MediumEditor',
	
	  getInitialState: function getInitialState() {
	    return {
	      text: this.props.text
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tag: 'div'
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    var dom = ReactDOM.findDOMNode(this);
	
	    this.medium = new MediumEditor(dom, this.props.options);
	    this.medium.subscribe('editableInput', function (e) {
	      _this._updated = true;
	      _this.change(dom.innerHTML);
	    });
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.medium.destroy();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.text !== this.state.text && !this._updated) {
	      this.setState({ text: nextProps.text });
	    }
	
	    if (this._updated) this._updated = false;
	  },
	  render: function render() {
	    var tag = this.props.tag;
	    var props = blacklist(this.props, 'tag', 'contentEditable', 'dangerouslySetInnerHTML');
	
	    assign(props, {
	      contentEditable: true,
	      dangerouslySetInnerHTML: { __html: this.state.text }
	    });
	
	    return React.createElement(tag, props);
	  },
	  change: function change(text) {
	    if (this.props.onChange) this.props.onChange(text, this.medium);
	  }
	});

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(612);


/***/ },

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(600);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(412)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./medium-editor.min.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./medium-editor.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(601);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(412)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./default.min.css", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./default.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1126:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	// import ReactDOM from 'react-dom';
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _Input = __webpack_require__(79);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _DropdownButton = __webpack_require__(229);
	
	var _DropdownButton2 = _interopRequireDefault(_DropdownButton);
	
	var _MenuItem = __webpack_require__(231);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _modalSelectResource = __webpack_require__(533);
	
	var _modalSelectResource2 = _interopRequireDefault(_modalSelectResource);
	
	var _reactIntl = __webpack_require__(30);
	
	var _actions = __webpack_require__(41);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _reactDropzone = __webpack_require__(440);
	
	var _reactDropzone2 = _interopRequireDefault(_reactDropzone);
	
	var _Glyphicon = __webpack_require__(40);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Specification = (_temp = _class = function (_Components) {
	  _inherits(Specification, _Components);
	
	  function Specification(props) {
	    _classCallCheck(this, Specification);
	
	    var _this = _possibleConstructorReturn(this, (Specification.__proto__ || Object.getPrototypeOf(Specification)).call(this, props));
	
	    _this.selectResource = function (resource) {
	      _this.setState({
	        selectResource: false
	      });
	      _this.context.update('specification')(resource.id);
	      setTimeout(_this.context.save('specification'), 150);
	    };
	
	    _this.onDrop = function (files) {
	      new _actions2.default(_this.props.tenant).Products.AddResource({
	        id: _this.props.product.get('id'),
	        resource: {
	          file: files[0]
	        }
	      }).then(function (action) {
	        _this.props.dispatch(action);
	        _this.context.update('specification')(action.product.resource.id);
	        setTimeout(_this.context.save('specification'), 150);
	      });
	    };
	
	    _this.open = function () {
	      _this.refs.dropzone.open();
	    };
	
	    _this.state = {
	      selectResource: false
	    };
	    return _this;
	  }
	
	  _createClass(Specification, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var product = this.props.product.toJS();
	
	      var _map = [_modalSelectResource2.default].map(function (cmpt) {
	        return cmpt.get(_this2.props.tenant);
	      }),
	          _map2 = _slicedToArray(_map, 1),
	          ModalSelectResource = _map2[0];
	
	      var specification = this.format({ id: 'no_file_selected' });
	      if (this.props.specification) {
	        var objSpecification = this.props.resources.find(function (r) {
	          return parseInt(r.id, 10) === parseInt(_this2.props.specification, 10);
	        });
	        specification = objSpecification.name_custom || objSpecification.name;
	      }
	
	      var dropdown = _react2.default.createElement(
	        _DropdownButton2.default,
	        { noCaret: true, title: _react2.default.createElement(_Glyphicon2.default, { glyph: 'triangle-bottom' }), id: 'input-dropdown-addon' },
	        _react2.default.createElement(
	          _MenuItem2.default,
	          { onClick: function onClick() {
	              return _this2.setState({ selectResource: true });
	            } },
	          this.format({ id: 'select' })
	        ),
	        _react2.default.createElement(
	          _MenuItem2.default,
	          { key: 'Upload-key-1', onClick: this.open },
	          _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'upload' })
	        )
	      );
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'label',
	          { style: { width: '100%' } },
	          _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'datasheet_pdf' })
	          ),
	          _react2.default.createElement(_Input2.default, { type: 'text', buttonAfter: dropdown, value: specification, disabled: true, onChange: function onChange() {} })
	        ),
	        _react2.default.createElement(ModalSelectResource, _extends({
	          show: this.state.selectResource,
	          hide: function hide() {
	            return _this2.setState({ selectResource: false });
	          },
	          resources: product.resources, onSelect: this.selectResource
	        }, this.props)),
	        _react2.default.createElement(_reactDropzone2.default, { ref: 'dropzone', style: { display: 'none', width: '0', height: '0', border: 'none' }, onDrop: this.onDrop })
	      );
	    }
	  }]);
	
	  return Specification;
	}(_baseComponent2.default), _class.contextTypes = {
	  product: _react2.default.PropTypes.object,
	  save: _react2.default.PropTypes.func,
	  update: _react2.default.PropTypes.func,
	  intl: _react2.default.PropTypes.object,
	  router: _react2.default.PropTypes.object.isRequired
	}, _class.propTypes = {
	  specification: _react2.default.PropTypes.number,
	  resources: _react2.default.PropTypes.array.isRequired
	}, _temp);
	
	
	var _components = { default: Specification };
	
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

/***/ 1129:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _baseComponent = __webpack_require__(14);
	
	var _baseComponent2 = _interopRequireDefault(_baseComponent);
	
	var _connect = __webpack_require__(235);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _Col = __webpack_require__(29);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Row = __webpack_require__(35);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Well = __webpack_require__(193);
	
	var _Well2 = _interopRequireDefault(_Well);
	
	var _Input = __webpack_require__(79);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Glyphicon = __webpack_require__(40);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _htmlEditor = __webpack_require__(565);
	
	var _htmlEditor2 = _interopRequireDefault(_htmlEditor);
	
	var _reactSelectize = __webpack_require__(236);
	
	var _specification = __webpack_require__(1126);
	
	var _specification2 = _interopRequireDefault(_specification);
	
	var _reactIntl = __webpack_require__(30);
	
	var _flux = __webpack_require__(378);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var connector = (0, _connect2.default)(function (state) {
	  return {
	    languages: state.get('settings').get('languages')
	  };
	});
	
	var Features = (_temp = _class = function (_Components) {
	  _inherits(Features, _Components);
	
	  function Features(props) {
	    _classCallCheck(this, Features);
	
	    var _this = _possibleConstructorReturn(this, (Features.__proto__ || Object.getPrototypeOf(Features)).call(this, props));
	
	    _this.featureChange = function (index, field) {
	      return function (value) {
	        //
	        // Parse DB fields with a limit of chars
	        // Also, we don't mind the limit of chars of the description field, because is a text.
	        var bCharsLimitExceeded = false;
	
	        if (field !== 'description' && value.length > 100) {
	          bCharsLimitExceeded = true;
	        }
	
	        if (!bCharsLimitExceeded) {
	          var features = _this.props.product.toJS().features.concat([]).sort(function (a, b) {
	            return a.order - b.order;
	          });
	
	          features[index][field] = value;
	          _this.context.update('features')(features);
	        } else {
	          _this.props.notification.add({
	            message: 'Vous ne devez pas dépasser 100 caractères',
	            level: 'error'
	          });
	        }
	      };
	    };
	
	    _this.addFeature = function () {
	      var features = _this.props.product.toJS().features.concat([]).sort(function (a, b) {
	        return a.order - b.order;
	      }).map(function (feature, index) {
	        feature.order = index + 1;
	        return feature;
	      }).concat([{
	        name: '',
	        description: '',
	        id_product: _this.props.product.toJS().id,
	        order: _this.props.product.toJS().features.length + 1
	      }]);
	
	      _this.context.update('features')(features);
	      // setTimeout(this.context.save('features'), 100);
	    };
	
	    _this.deleteFeature = function (index) {
	      return function () {
	        var features = _this.props.product.toJS().features.concat([]);
	        features.splice(index, 1);
	        features = features.map(function (feature, i) {
	          feature.order = i + 1;
	          return feature;
	        });
	        _this.context.update('features')(features);
	        setTimeout(_this.context.save('features'), 100);
	      };
	    };
	
	    _this.test = function (index) {
	      return function (value) {};
	    };
	
	    _this.timeout = null;
	    return _this;
	  }
	
	  _createClass(Features, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      Promise.all(Features.getActions(this.props.tenant, this.props.params, this.props.location.query, this.props.user).map(this.props.dispatch));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _map = [_specification2.default].map(function (cmpt) {
	        return cmpt.get(_this2.props.tenant);
	      }),
	          _map2 = _slicedToArray(_map, 1),
	          Specification = _map2[0];
	
	      var languages = this.props.languages.toJS();
	      var languageOptions = {
	        options: languages.map(function (l) {
	          return { label: l.abbreviation, value: l.id };
	        }),
	        values: this.props.product.toJS().languages.map(function (k) {
	          return { label: k.abbreviation, value: k.id };
	        }),
	        onBlur: this.context.save('languages'),
	        onValuesChange: function onValuesChange(languages, callback) {
	          _this2.context.update('languages')(languages.map(function (k) {
	            return { id: k.value, abbreviation: k.label };
	          }));
	          callback();
	        },
	        renderValue: function renderValue(item) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'simple-value' },
	            _react2.default.createElement(
	              'span',
	              {
	                onClick: function onClick() {
	                  _this2.context.update('languages')(_this2.props.product.toJS().languages.filter(function (clickedItem) {
	                    return item.value !== clickedItem.id;
	                  }));
	                }
	              },
	              item.label
	            )
	          );
	        }
	      };
	
	      var removeStyle = {
	        color: '#FFF',
	        backgroundColor: 'rgba(255,0,0,0.7)',
	        position: 'absolute',
	        top: -15,
	        right: -15,
	        width: 30,
	        height: 30,
	        borderRadius: 15,
	        cursor: 'pointer',
	        fontSize: 18,
	        paddingTop: 3,
	        paddingLeft: 5
	      };
	
	      var features = this.props.product.toJS().features.sort(function (a, b) {
	        return a.order - b.order;
	      }).map(function (feature, index) {
	        return _react2.default.createElement(
	          _Col2.default,
	          { key: index, md: 4, style: { height: 600, marginBottom: 15 } },
	          _react2.default.createElement(
	            _Well2.default,
	            { style: { height: '100%', position: 'relative' } },
	            _react2.default.createElement(
	              'div',
	              { style: removeStyle, onClick: _this2.deleteFeature(index) },
	              _react2.default.createElement(_Glyphicon2.default, { glyph: 'remove' })
	            ),
	            _react2.default.createElement(_Input2.default, {
	              type: 'text',
	              value: feature.name,
	              onBlur: _this2.context.save('features'),
	              onChange: function onChange(_ref) {
	                var value = _ref.target.value;
	                _this2.featureChange(index, 'name')(value);
	              },
	              className: 'featureName mp-field'
	            }),
	            _react2.default.createElement(_htmlEditor2.default, {
	              style: { maxHeight: 510, minHeight: 510, height: 'auto', overflowY: 'auto' },
	              value: feature.description,
	              onBlur: _this2.context.save('features'),
	              onChange: _this2.featureChange(index, 'description'),
	              className: 'featureDescription form-control mp-field'
	            })
	          )
	        );
	      });
	
	      if (features.length < 6) {
	        features.push(_react2.default.createElement(
	          _Col2.default,
	          { className: 'addNewFeature', md: 4, key: 'add', style: { height: 600, marginBottom: 15 }, onClick: this.addFeature },
	          _react2.default.createElement(
	            _Well2.default,
	            { style: { height: '100%' } },
	            _react2.default.createElement(
	              'h3',
	              null,
	              _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'click_to_add_new_feature' })
	            )
	          )
	        ));
	      }
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Well2.default,
	          null,
	          _react2.default.createElement(
	            _Row2.default,
	            null,
	            _react2.default.createElement(
	              _Col2.default,
	              { md: 4 },
	              _react2.default.createElement(
	                'label',
	                { style: { width: '100%' } },
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'version' })
	                ),
	                _react2.default.createElement(_Input2.default, { className: 'versionInput mp-field', type: 'text', onChange: function onChange(_ref2) {
	                    var target = _ref2.target;
	                    return _this2.context.update('version')(target.value);
	                  },
	                  value: this.props.product.toJS().version,
	                  onBlur: this.context.save('version')
	                })
	              )
	            ),
	            _react2.default.createElement(
	              _Col2.default,
	              { md: 4, className: 'product-bo-languages' },
	              _react2.default.createElement(
	                'label',
	                { style: { width: '100%' } },
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'languages' })
	                ),
	                _react2.default.createElement(_reactSelectize.MultiSelect, _extends({ className: 'languagesMultiselect' }, languageOptions))
	              )
	            ),
	            _react2.default.createElement(
	              _Col2.default,
	              { md: 4, className: 'product-bo-sheet-spec' },
	              _react2.default.createElement(Specification, _extends({
	                random: Math.random(),
	                specification: this.props.product.toJS().specification,
	                resources: this.props.product.toJS().resources
	              }, this.props))
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          features
	        )
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
	      return 'products.features.features';
	    }
	
	    // TODO: Pas over all app to check fields with a maximum of chars and do the same IF and show an error message
	
	  }]);
	
	  return Features;
	}(_baseComponent2.default), _class.contextTypes = {
	  product: _react2.default.PropTypes.object.isRequired,
	  update: _react2.default.PropTypes.func.isRequired,
	  save: _react2.default.PropTypes.func.isRequired
	}, _temp);
	
	
	var _components = {
	  default: connector(Features)
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
//# sourceMappingURL=34.bundle.js.map