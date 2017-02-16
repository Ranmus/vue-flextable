module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ownKeys = __webpack_require__(1);
	
	var _ownKeys2 = _interopRequireDefault(_ownKeys);
	
	var _Flextable = __webpack_require__(36);
	
	var _Flextable2 = _interopRequireDefault(_Flextable);
	
	var _Header = __webpack_require__(141);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Title = __webpack_require__(146);
	
	var _Title2 = _interopRequireDefault(_Title);
	
	var _Filter = __webpack_require__(143);
	
	var _Filter2 = _interopRequireDefault(_Filter);
	
	var _Footer = __webpack_require__(150);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Paginator = __webpack_require__(152);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _Grid = __webpack_require__(159);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Heading = __webpack_require__(161);
	
	var _Heading2 = _interopRequireDefault(_Heading);
	
	var _Row = __webpack_require__(163);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Cell = __webpack_require__(165);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	var _Row3 = __webpack_require__(170);
	
	var _Row4 = _interopRequireDefault(_Row3);
	
	var _Cell3 = __webpack_require__(172);
	
	var _Cell4 = _interopRequireDefault(_Cell3);
	
	var _State = __webpack_require__(179);
	
	var _State2 = _interopRequireDefault(_State);
	
	var _Spinner = __webpack_require__(183);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	var _NoData = __webpack_require__(181);
	
	var _NoData2 = _interopRequireDefault(_NoData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Components = {
	  Flextable: _Flextable2.default,
	  ftHeader: _Header2.default,
	  ftTitle: _Title2.default,
	  ftFilter: _Filter2.default,
	  ftFooter: _Footer2.default,
	  ftPaginator: _Paginator2.default,
	  ftGrid: _Grid2.default,
	  ftHeading: _Heading2.default,
	  ftHeadingRow: _Row2.default,
	  ftHeadingCell: _Cell2.default,
	  ftRow: _Row4.default,
	  ftCell: _Cell4.default,
	  ftState: _State2.default,
	  ftSpinner: _Spinner2.default,
	  ftNoData: _NoData2.default,
	  install: function install(Vue) {
	    var _this = this;
	
	    var keys = (0, _ownKeys2.default)(this);
	    keys.pop();
	    keys.forEach(function (key) {
	      Vue.component(key, _this[key]);
	    });
	  }
	};
	
	if (window && window.Vue) {
	  window.Vue.use(Components);
	}
	
	module.exports = Components;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(6).Reflect.ownKeys;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(4);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(19)});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(6)
	  , ctx       = __webpack_require__(7)
	  , hide      = __webpack_require__(9)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(8);
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
/* 8 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(10)
	  , createDesc = __webpack_require__(18);
	module.exports = __webpack_require__(14) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(11)
	  , IE8_DOM_DEFINE = __webpack_require__(13)
	  , toPrimitive    = __webpack_require__(17)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(14) && !__webpack_require__(15)(function(){
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(15)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12)
	  , document = __webpack_require__(5).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(12);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(20)
	  , gOPS     = __webpack_require__(35)
	  , anObject = __webpack_require__(11)
	  , Reflect  = __webpack_require__(5).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(21)
	  , hiddenKeys = __webpack_require__(34).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(22)
	  , toIObject    = __webpack_require__(23)
	  , arrayIndexOf = __webpack_require__(27)(false)
	  , IE_PROTO     = __webpack_require__(31)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(24)
	  , defined = __webpack_require__(26);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(25);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(23)
	  , toLength  = __webpack_require__(28)
	  , toIndex   = __webpack_require__(30);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(29)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(32)('keys')
	  , uid    = __webpack_require__(33);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 35 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(37)
	
	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(42),
	  /* template */
	  __webpack_require__(186),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(40)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7e3d9614!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Flextable.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7e3d9614!./../../node_modules/sass-loader/index.js?indentedSyntax!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Flextable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(39)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.ft-align-left {\n  flex-direction: row;\n  text-align: left;\n}\n.ft-align-center {\n  flex-direction: row;\n  justify-content: center;\n  text-align: center;\n}\n.ft-align-right {\n  flex-direction: row-reverse;\n  text-align: right;\n}\n.ft-spinner {\n  width: 64px;\n  height: 64px;\n  animation: ft-spinner 1s infinite linear;\n  border-right: 10px solid #2196F3;\n  border-bottom: 10px solid rgba(33, 150, 243, 0.2);\n  border-left: 10px solid rgba(33, 150, 243, 0.2);\n  border-top: 10px solid rgba(33, 150, 243, 0.2);\n  border-radius: 50%;\n}\n@keyframes ft-spinner {\n0% {\n    transform: rotate(90deg);\n}\n100% {\n    transform: rotate(450deg);\n}\n}\n.flextable {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background: #fff;\n}\n.ft-no-data {\n  padding: 20px 16px;\n  width: 100%;\n  text-align: center;\n  font-size: 2.0em;\n}\n.ft-loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n.ft-header {\n  padding: 20px 16px;\n  display: flex;\n  justify-content: space-between;\n}\n.ft-header-title {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 1.6rem;\n  font-weight: bold;\n}\n.ft-footer {\n  padding: 20px 16px;\n  display: flex;\n  justify-content: flex-end;\n}\n.ft-grid {\n  display: flex;\n  flex-direction: column;\n}\n.ft-row {\n  display: flex;\n  align-items: center;\n  border-top: 1px solid rgba(0, 0, 0, 0.15);\n}\n.ft-row-selected {\n  background: #ccc;\n}\n.ft-cell {\n  width: 100%;\n  overflow: hidden;\n  padding: 16px;\n}\n.ft-heading-row {\n  display: flex;\n  width: 100%;\n}\n.ft-heading-cell {\n  overflow: hidden;\n  display: flex;\n  width: 100%;\n  padding: 16px;\n  color: rgba(0, 0, 0, 0.5);\n  font-weight: bold;\n  user-select: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.ft-heading-cell-sorted {\n  color: #000;\n}\n.ft-clickable {\n  cursor: pointer;\n}\n.ft-accordion {\n  padding: 20px 16px;\n  width: 100%;\n  height: 30px;\n  position: absolute;\n  cursor: pointer;\n  opacity: 0;\n}\n.ft-accordion + .ft-accordion-title + .ft-accordion-panel {\n  transition: all 300ms ease-in-out;\n  padding: 0px 16px;\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n}\n.ft-accordion:checked + .ft-accordion-title + .ft-accordion-panel {\n  opacity: 1;\n  max-height: 300px;\n  padding: 20px 16px;\n}\n", ""]);
	
	// exports


/***/ },
/* 39 */
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
/* 40 */
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
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
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
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(43);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(51);
	
	var _store = __webpack_require__(52);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _Header = __webpack_require__(141);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(150);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Grid = __webpack_require__(159);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _State = __webpack_require__(179);
	
	var _State2 = _interopRequireDefault(_State);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    ftHeader: _Header2.default,
	    ftFooter: _Footer2.default,
	    ftGrid: _Grid2.default,
	    ftState: _State2.default
	  },
	  props: {
	    data: {
	      type: Array,
	      required: false
	    },
	    url: {
	      type: String,
	      required: false
	    },
	    side: {
	      type: String,
	      required: false,
	      default: 'client'
	    },
	
	    columns: {
	      type: Array,
	      required: false,
	      default: function _default() {
	        return [];
	      }
	    },
	    config: {
	      type: Object,
	      required: false,
	      default: function _default() {}
	    }
	  },
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
	    filterStatus: 'filter/status',
	    sortStatus: 'sort/status',
	    pageSize: 'pageSize',
	    page: 'page',
	    pages: 'pages',
	    loaded: 'loaded',
	    loading: 'loading',
	    slots: 'slots',
	    classes: 'classes',
	    rowsToRender: 'rowsToRender',
	    screen: 'screen',
	    device: 'device',
	    selected: 'selected'
	  })),
	  created: function created() {
	    var _this = this;
	
	    this.$store = (0, _store2.default)();
	
	    this.$store.watch(function (state, getters) {
	      return getters.rowsToRender;
	    }, function (rows) {
	      _this.$emit('rendered', { rows: rows });
	    });
	
	    this.$store.watch(function (state, getters) {
	      return getters.selected;
	    }, function (rows) {
	      _this.$emit('selected', { rows: rows });
	    });
	
	    this.$store.watch(function (state, getters) {
	      return getters['sort/status'];
	    }, function (status) {
	      _this.$emit('sorted', { status: status });
	    });
	
	    this.$store.watch(function (state, getters) {
	      return getters['filter/status'];
	    }, function (status) {
	      _this.$emit('filtered', { status: status });
	    });
	  },
	  mounted: function mounted() {
	    var columns = this.columns,
	        config = this.config,
	        data = this.data,
	        side = this.side,
	        url = this.url;
	
	
	    var slots = {
	      named: this.$slots,
	      scoped: this.$scopedSlots
	    };
	
	    this.$store.dispatch('initialize', {
	      columns: columns,
	      config: config,
	      slots: slots,
	      url: url,
	      side: side,
	      data: data
	    });
	  },
	
	  methods: (0, _extends3.default)({
	    firstPage: function firstPage() {
	      this.$store.dispatch('paginatorFirstPage');
	    },
	    previousPage: function previousPage() {
	      this.$store.dispatch('paginatorPreviousPage');
	    },
	    nextPage: function nextPage() {
	      this.$store.dispatch('paginatorNextPage');
	    },
	    lastPage: function lastPage() {
	      this.$store.dispatch('paginatorLastPage');
	    },
	    setPageSize: function setPageSize(pageSize) {
	      this.$store.dispatch('paginatorSetPageSize', { pageSize: pageSize });
	    },
	    setPageSizes: function setPageSizes(pageSizes) {
	      this.$store.dispatch('paginatorSetPageSizes', { pageSizes: pageSizes });
	    },
	    filter: function filter(_ref) {
	      var name = _ref.name,
	          value = _ref.value,
	          filterBy = _ref.filterBy;
	
	      this.$store.dispatch('filter/filter', { name: name, value: value, filterBy: filterBy });
	    },
	    sort: function sort(_ref2) {
	      var name = _ref2.name,
	          order = _ref2.order,
	          sortBy = _ref2.sortBy;
	
	      this.$store.dispatch('sort/sort', { name: name, order: order, sortBy: sortBy });
	    },
	    delete: function _delete(row) {
	      return this.$store.dispatch('delete', { row: row });
	    },
	    sync: function sync(row) {
	      return this.$store.dispatch('sync', { row: row });
	    },
	    select: function select(row) {
	      this.$store.dispatch('select', { row: row });
	    },
	    toggleSelect: function toggleSelect(row) {
	      this.$store.dispatch('toggleSelect', { row: row });
	    },
	    getSelected: function getSelected() {
	      return this.selected;
	    }
	  }, (0, _vuex.mapActions)(['addScreenSize', 'clearScreenSizes']))
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(44);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
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

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(46);
	module.exports = __webpack_require__(6).Object.assign;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(4);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(47)});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(48)
	  , gOPS     = __webpack_require__(35)
	  , pIE      = __webpack_require__(49)
	  , toObject = __webpack_require__(50)
	  , IObject  = __webpack_require__(24)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(15)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(21)
	  , enumBugKeys = __webpack_require__(34);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(26);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("vuex");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(53);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _defineProperty2 = __webpack_require__(57);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _uppercamelcase = __webpack_require__(61);
	
	var _uppercamelcase2 = _interopRequireDefault(_uppercamelcase);
	
	var _vuex = __webpack_require__(51);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _types = __webpack_require__(63);
	
	var _types2 = _interopRequireDefault(_types);
	
	var _device = __webpack_require__(64);
	
	var _device2 = _interopRequireDefault(_device);
	
	var _data = __webpack_require__(102);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _slots = __webpack_require__(119);
	
	var _slots2 = _interopRequireDefault(_slots);
	
	var _paginator = __webpack_require__(120);
	
	var _paginator2 = _interopRequireDefault(_paginator);
	
	var _select = __webpack_require__(121);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _grid = __webpack_require__(122);
	
	var _grid2 = _interopRequireDefault(_grid);
	
	var _filter = __webpack_require__(123);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _sort = __webpack_require__(140);
	
	var _sort2 = _interopRequireDefault(_sort);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createState = function createState() {
	  return {
	    config: {
	      rowsHeight: null
	    },
	    columns: []
	  };
	};
	
	var getters = {
	  config: function config(s) {
	    return s.config;
	  },
	  columns: function columns(s) {
	    return s.columns;
	  },
	  parsedData: function parsedData(state, getters, rootState, rootGetters) {
	    return rootGetters['sort/sorted'];
	  },
	  parsedTotal: function parsedTotal(state, _ref) {
	    var parsedData = _ref.parsedData;
	
	    return parsedData.length;
	  },
	  rowsToRender: function rowsToRender(state, _getters) {
	    var pageSize = _getters.pageSize,
	        side = _getters.side,
	        parsedData = _getters.parsedData,
	        pageOffset = _getters.pageOffset;
	
	
	    if (side === 'server') {
	      return parsedData;
	    }
	
	    if (pageSize) {
	      return parsedData.slice(pageOffset, pageOffset + pageSize);
	    }
	
	    return parsedData;
	  }
	};
	
	var mutations = (0, _defineProperty3.default)({}, _types2.default.COLUMNS_SET, function (state, _ref2) {
	  var columns = _ref2.columns;
	
	  state.columns = columns;
	});
	
	var actions = {
	  initialize: function initialize(_ref3, _ref4) {
	    var commit = _ref3.commit,
	        dispatch = _ref3.dispatch,
	        state = _ref3.state;
	    var columns = _ref4.columns,
	        config = _ref4.config,
	        data = _ref4.data,
	        side = _ref4.side,
	        slots = _ref4.slots,
	        url = _ref4.url;
	
	    commit(_types2.default.SLOTS_INIT, slots);
	    commit(_types2.default.DEVICE_DETECT);
	
	    (0, _keys2.default)(config).forEach(function (key) {
	      dispatch('set' + (0, _uppercamelcase2.default)(key), (0, _defineProperty3.default)({}, key, config[key]));
	    });
	
	    dispatch('setColumns', { columns: columns });
	
	    if (data) {
	      dispatch('setData', { data: data });
	    }
	
	    if (side) {
	      dispatch('setSide', { side: side });
	    }
	
	    if (url) {
	      dispatch('setURL', { url: url });
	    }
	
	    dispatch('initScreenSizes');
	    dispatch('loadData');
	  },
	  setColumns: function setColumns(_ref5, _ref6) {
	    var commit = _ref5.commit;
	    var columns = _ref6.columns;
	
	    commit(_types2.default.COLUMNS_SET, { columns: columns });
	  },
	  setPageSize: function setPageSize(_ref7, _ref8) {
	    var dispatch = _ref7.dispatch;
	    var pageSize = _ref8.pageSize;
	
	    dispatch('paginatorSetPageSize', { pageSize: pageSize });
	  },
	  setPageSizes: function setPageSizes(_ref9, _ref10) {
	    var dispatch = _ref9.dispatch;
	    var pageSizes = _ref10.pageSizes;
	
	    dispatch('paginatorSetPageSizes', { pageSizes: pageSizes });
	  },
	  setMultiSelect: function setMultiSelect(_ref11, _ref12) {
	    var dispatch = _ref11.dispatch;
	    var multiSelect = _ref12.multiSelect;
	
	    dispatch('selectSetMultiSelect', { multiSelect: multiSelect });
	  },
	  setMultiSort: function setMultiSort(_ref13, _ref14) {
	    var dispatch = _ref13.dispatch;
	    var multiSort = _ref14.multiSort;
	
	    dispatch('sort/setMultiple', { multiple: multiSort });
	  }
	};
	
	exports.default = function () {
	  return new _vuex2.default.Store({
	    state: createState(),
	    getters: getters,
	    mutations: mutations,
	    actions: actions,
	    modules: {
	      slotsModule: _slots2.default,
	      dataModule: _data2.default,
	      deviceModule: _device2.default,
	      paginatorModule: _paginator2.default,
	      selectModule: _select2.default,
	      gridModule: _grid2.default,
	      filter: _filter2.default,
	      sort: _sort2.default
	    }
	  });
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(55);
	module.exports = __webpack_require__(6).Object.keys;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(50)
	  , $keys    = __webpack_require__(48);
	
	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(4)
	  , core    = __webpack_require__(6)
	  , fails   = __webpack_require__(15);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(58);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	var $Object = __webpack_require__(6).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(4);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(14), 'Object', {defineProperty: __webpack_require__(10).f});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var camelCase = __webpack_require__(62);
	
	module.exports = function () {
		var cased = camelCase.apply(camelCase, arguments);
		return cased.charAt(0).toUpperCase() + cased.slice(1);
	};


/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		var str = [].map.call(arguments, function (str) {
			return str.trim();
		}).filter(function (str) {
			return str.length;
		}).join('-');
	
		if (!str.length) {
			return '';
		}
	
		if (str.length === 1 || !(/[_.\- ]+/).test(str) ) {
			if (str[0] === str[0].toLowerCase() && str.slice(1) !== str.slice(1).toLowerCase()) {
				return str;
			}
	
			return str.toLowerCase();
		}
	
		return str
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, function (m, p1) {
			return p1.toUpperCase();
		});
	};


/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  CONFIG_INIT: 'CONFIG_INIT',
	  DEVICE_DETECT: 'DEVICE_DETECT',
	  SLOTS_INIT: 'SLOTS_INIT',
	  DATA_LOADING: 'DATA_LOADING',
	  DATA_LOADING_ERROR: 'DATA_LOADING_ERROR',
	  DATA_LOADED: 'DATA_LOADED',
	  DATA_DELETE: 'DATA_DELETE',
	  DATA_SYNC: 'DATA_SYNC',
	  DATA_SIDE_SET: 'DATA_SIDE_SET',
	  DATA_DATA_SET: 'DATA_DATA_SET',
	  DATA_URL_SET: 'DATA_URL_SET',
	  SCREEN_SIZE_ADD: 'SCREEN_SIZE_ADD',
	  SCREEN_SIZE_CHANGE: 'SCREEN_SIZE_CHANGE',
	  SCREEN_SIZES_CLEAR: 'SCREEN_SIZES_CLEAR',
	  DATA_TOTAL_SET: 'DATA_TOTAL_SET',
	  GRID_ROWSHEIGHT_SET: 'GRID_ROWSHEIGHT_SET',
	
	  SELECT_SELECT_ROW: 'SELECT_SELECT_ROW',
	  SELECT_UNSELECT_ROW: 'SELECT_UNSELECT_ROW',
	  SELECT_SET_MULTISELECT: 'SELECT_SET_MULTISELECT',
	
	  PAGINATOR_SET_PAGE: 'PAGINATOR_SET_PAGE',
	  PAGINATOR_SET_PAGE_SIZE: 'PAGINATOR_SET_PAGE_SIZE',
	  PAGINATOR_SET_PAGE_SIZES: 'PAGINATOR_SET_PAGE_SIZES',
	
	  FILTER: 'FILTER',
	
	  SORT: 'SORT',
	  SORT_SET_MULTIPLE: 'SORT_SET_MULTIPLE',
	
	  COLUMNS_SET: 'COLUMNS_SET'
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ownKeys = __webpack_require__(1);
	
	var _ownKeys2 = _interopRequireDefault(_ownKeys);
	
	var _defineProperty2 = __webpack_require__(57);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _MediaQuery = __webpack_require__(65);
	
	var _MediaQuery2 = _interopRequireDefault(_MediaQuery);
	
	var _types = __webpack_require__(63);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isMobile = __webpack_require__(101);
	
	exports.default = {
	  state: {
	    mq: new _MediaQuery2.default(),
	    device: {
	      name: 'desktop',
	      isDesktop: true,
	      isMobile: false,
	      isPhone: false,
	      isTablet: false
	    },
	    screen: {
	      size: null,
	      sizes: {
	        small: 'only screen and (max-width: 600px)',
	        medium: 'only screen and (min-width: 601px) and (max-width: 992px)',
	        large: 'only screen and (min-width: 993px)'
	      }
	    },
	    classes: {
	      mobile: null,
	      device: 'ft-desktop',
	      size: null
	    }
	  },
	  getters: {
	    mq: function mq(s) {
	      return s.mq;
	    },
	    device: function device(s) {
	      return s.device;
	    },
	    screen: function screen(s) {
	      return s.screen;
	    },
	    classes: function classes(s) {
	      return s.classes;
	    }
	  },
	  mutations: (_mutations = {}, (0, _defineProperty3.default)(_mutations, _types2.default.DEVICE_DETECT, function (_ref) {
	    var classes = _ref.classes,
	        device = _ref.device;
	
	    if (isMobile.any) {
	      device.isDesktop = false;
	      device.isMobile = true;
	      device.name = 'mobile';
	      classes.mobile = 'ft-mobile';
	    }
	
	    if (isMobile.phone) {
	      device.isPhone = true;
	      device.isTablet = false;
	      device.name = 'phone';
	      classes.device = 'ft-phone';
	    }
	
	    if (isMobile.tablet) {
	      device.isPhone = false;
	      device.isTablet = true;
	      device.name = 'tablet';
	      classes.device = 'ft-tablet';
	    }
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.SCREEN_SIZE_CHANGE, function (_ref2, _ref3) {
	    var classes = _ref2.classes,
	        screen = _ref2.screen;
	    var name = _ref3.name;
	
	    classes.size = 'ft-size-' + name;
	    screen.size = name;
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.SCREEN_SIZE_ADD, function (_ref4, _ref5) {
	    var mq = _ref4.mq,
	        screen = _ref4.screen;
	    var name = _ref5.name,
	        mediaQuery = _ref5.mediaQuery,
	        commit = _ref5.commit;
	
	    screen.sizes[name] = mediaQuery;
	
	    mq.on(mediaQuery, function () {
	      commit(_types2.default.SCREEN_SIZE_CHANGE, { name: name });
	    });
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.SCREEN_SIZES_CLEAR, function (_ref6) {
	    var mq = _ref6.mq,
	        screen = _ref6.screen;
	
	    mq.off();
	    screen.size = null;
	  }), _mutations),
	  actions: {
	    initScreenSizes: function initScreenSizes(_ref7) {
	      var commit = _ref7.commit,
	          getters = _ref7.getters;
	      var mq = getters.mq,
	          screen = getters.screen;
	
	
	      (0, _ownKeys2.default)(screen.sizes).forEach(function (name) {
	        commit(_types2.default.SCREEN_SIZE_ADD, { name: name, mediaQuery: screen.sizes[name], commit: commit });
	      });
	
	      mq.check();
	    },
	    addScreenSize: function addScreenSize(_ref8, _ref9) {
	      var commit = _ref8.commit,
	          getters = _ref8.getters;
	      var name = _ref9.name,
	          mediaQuery = _ref9.mediaQuery;
	
	      commit(_types2.default.SCREEN_SIZE_ADD, { name: name, mediaQuery: mediaQuery, commit: commit });
	    },
	    clearScreenSizes: function clearScreenSizes(_ref10) {
	      var commit = _ref10.commit;
	
	      commit(_types2.default.SCREEN_SIZES_CLEAR);
	    }
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(66);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(67);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _weakMap = __webpack_require__(68);
	
	var _weakMap2 = _interopRequireDefault(_weakMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mediaQueryLists = new _weakMap2.default();
	
	var MediaQuery = function () {
	  function MediaQuery() {
	    (0, _classCallCheck3.default)(this, MediaQuery);
	
	    mediaQueryLists.set(this, []);
	  }
	
	  (0, _createClass3.default)(MediaQuery, [{
	    key: "on",
	    value: function on(query, callback) {
	      var mql = global.matchMedia(query);
	
	      mediaQueryLists.get(this).push({
	        mql: mql,
	        callback: callback
	      });
	
	      mql.addListener(function (_mql) {
	        if (_mql.matches) {
	          callback();
	        }
	      });
	    }
	  }, {
	    key: "check",
	    value: function check() {
	      mediaQueryLists.get(this).forEach(function (item) {
	        if (item.mql.matches) {
	          item.callback();
	        }
	      });
	    }
	  }, {
	    key: "off",
	    value: function off() {
	      var mqls = mediaQueryLists.get(this);
	
	      mqls.foreach(function (item) {
	        item.mql.removeListener(item.callback);
	      });
	
	      mqls.splice(0, mqls.length);
	    }
	  }]);
	  return MediaQuery;
	}();
	
	exports.default = MediaQuery;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(58);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(86);
	module.exports = __webpack_require__(6).WeakMap;

/***/ },
/* 70 */
/***/ function(module, exports) {



/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	var global        = __webpack_require__(5)
	  , hide          = __webpack_require__(9)
	  , Iterators     = __webpack_require__(75)
	  , TO_STRING_TAG = __webpack_require__(84)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(73)
	  , step             = __webpack_require__(74)
	  , Iterators        = __webpack_require__(75)
	  , toIObject        = __webpack_require__(23);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(76)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(77)
	  , $export        = __webpack_require__(4)
	  , redefine       = __webpack_require__(78)
	  , hide           = __webpack_require__(9)
	  , has            = __webpack_require__(22)
	  , Iterators      = __webpack_require__(75)
	  , $iterCreate    = __webpack_require__(79)
	  , setToStringTag = __webpack_require__(83)
	  , getPrototypeOf = __webpack_require__(85)
	  , ITERATOR       = __webpack_require__(84)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(80)
	  , descriptor     = __webpack_require__(18)
	  , setToStringTag = __webpack_require__(83)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(9)(IteratorPrototype, __webpack_require__(84)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(11)
	  , dPs         = __webpack_require__(81)
	  , enumBugKeys = __webpack_require__(34)
	  , IE_PROTO    = __webpack_require__(31)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(16)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(82).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(10)
	  , anObject = __webpack_require__(11)
	  , getKeys  = __webpack_require__(48);
	
	module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5).document && document.documentElement;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(10).f
	  , has = __webpack_require__(22)
	  , TAG = __webpack_require__(84)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(32)('wks')
	  , uid        = __webpack_require__(33)
	  , Symbol     = __webpack_require__(5).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(22)
	  , toObject    = __webpack_require__(50)
	  , IE_PROTO    = __webpack_require__(31)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(87)(0)
	  , redefine     = __webpack_require__(78)
	  , meta         = __webpack_require__(91)
	  , assign       = __webpack_require__(47)
	  , weak         = __webpack_require__(92)
	  , isObject     = __webpack_require__(12)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(100)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(7)
	  , IObject  = __webpack_require__(24)
	  , toObject = __webpack_require__(50)
	  , toLength = __webpack_require__(28)
	  , asc      = __webpack_require__(88);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(89);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12)
	  , isArray  = __webpack_require__(90)
	  , SPECIES  = __webpack_require__(84)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(25);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(33)('meta')
	  , isObject = __webpack_require__(12)
	  , has      = __webpack_require__(22)
	  , setDesc  = __webpack_require__(10).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(15)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(93)
	  , getWeak           = __webpack_require__(91).getWeak
	  , anObject          = __webpack_require__(11)
	  , isObject          = __webpack_require__(12)
	  , anInstance        = __webpack_require__(94)
	  , forOf             = __webpack_require__(95)
	  , createArrayMethod = __webpack_require__(87)
	  , $has              = __webpack_require__(22)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(9);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(7)
	  , call        = __webpack_require__(96)
	  , isArrayIter = __webpack_require__(97)
	  , anObject    = __webpack_require__(11)
	  , toLength    = __webpack_require__(28)
	  , getIterFn   = __webpack_require__(98)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(11);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(75)
	  , ITERATOR   = __webpack_require__(84)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(99)
	  , ITERATOR  = __webpack_require__(84)('iterator')
	  , Iterators = __webpack_require__(75);
	module.exports = __webpack_require__(6).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(25)
	  , TAG = __webpack_require__(84)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(5)
	  , $export        = __webpack_require__(4)
	  , meta           = __webpack_require__(91)
	  , fails          = __webpack_require__(15)
	  , hide           = __webpack_require__(9)
	  , redefineAll    = __webpack_require__(93)
	  , forOf          = __webpack_require__(95)
	  , anInstance     = __webpack_require__(94)
	  , isObject       = __webpack_require__(12)
	  , setToStringTag = __webpack_require__(83)
	  , dP             = __webpack_require__(10).f
	  , each           = __webpack_require__(87)(0)
	  , DESCRIPTORS    = __webpack_require__(14);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * isMobile.js v0.4.0
	 *
	 * A simple library to detect Apple phones and tablets,
	 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
	 * and any kind of seven inch device, via user agent sniffing.
	 *
	 * @author: Kai Mallea (kmallea@gmail.com)
	 *
	 * @license: http://creativecommons.org/publicdomain/zero/1.0/
	 */
	(function (global) {
	
	    var apple_phone         = /iPhone/i,
	        apple_ipod          = /iPod/i,
	        apple_tablet        = /iPad/i,
	        android_phone       = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, // Match 'Android' AND 'Mobile'
	        android_tablet      = /Android/i,
	        amazon_phone        = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
	        amazon_tablet       = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
	        windows_phone       = /IEMobile/i,
	        windows_tablet      = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, // Match 'Windows' AND 'ARM'
	        other_blackberry    = /BlackBerry/i,
	        other_blackberry_10 = /BB10/i,
	        other_opera         = /Opera Mini/i,
	        other_chrome        = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
	        other_firefox       = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, // Match 'Firefox' AND 'Mobile'
	        seven_inch = new RegExp(
	            '(?:' +         // Non-capturing group
	
	            'Nexus 7' +     // Nexus 7
	
	            '|' +           // OR
	
	            'BNTV250' +     // B&N Nook Tablet 7 inch
	
	            '|' +           // OR
	
	            'Kindle Fire' + // Kindle Fire
	
	            '|' +           // OR
	
	            'Silk' +        // Kindle Fire, Silk Accelerated
	
	            '|' +           // OR
	
	            'GT-P1000' +    // Galaxy Tab 7 inch
	
	            ')',            // End non-capturing group
	
	            'i');           // Case-insensitive matching
	
	    var match = function(regex, userAgent) {
	        return regex.test(userAgent);
	    };
	
	    var IsMobileClass = function(userAgent) {
	        var ua = userAgent || navigator.userAgent;
	
	        // Facebook mobile app's integrated browser adds a bunch of strings that
	        // match everything. Strip it out if it exists.
	        var tmp = ua.split('[FBAN');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }
	
	        // Twitter mobile app's integrated browser on iPad adds a "Twitter for
	        // iPhone" string. Same probable happens on other tablet platforms.
	        // This will confuse detection so strip it out if it exists.
	        tmp = ua.split('Twitter');
	        if (typeof tmp[1] !== 'undefined') {
	            ua = tmp[0];
	        }
	
	        this.apple = {
	            phone:  match(apple_phone, ua),
	            ipod:   match(apple_ipod, ua),
	            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
	            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
	        };
	        this.amazon = {
	            phone:  match(amazon_phone, ua),
	            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
	        };
	        this.android = {
	            phone:  match(amazon_phone, ua) || match(android_phone, ua),
	            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
	            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
	        };
	        this.windows = {
	            phone:  match(windows_phone, ua),
	            tablet: match(windows_tablet, ua),
	            device: match(windows_phone, ua) || match(windows_tablet, ua)
	        };
	        this.other = {
	            blackberry:   match(other_blackberry, ua),
	            blackberry10: match(other_blackberry_10, ua),
	            opera:        match(other_opera, ua),
	            firefox:      match(other_firefox, ua),
	            chrome:       match(other_chrome, ua),
	            device:       match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
	        };
	        this.seven_inch = match(seven_inch, ua);
	        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;
	
	        // excludes 'other' devices and ipods, targeting touchscreen phones
	        this.phone = this.apple.phone || this.android.phone || this.windows.phone;
	
	        // excludes 7 inch devices, classifying as phone or tablet is left to the user
	        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;
	
	        if (typeof window === 'undefined') {
	            return this;
	        }
	    };
	
	    var instantiate = function() {
	        var IM = new IsMobileClass();
	        IM.Class = IsMobileClass;
	        return IM;
	    };
	
	    if (typeof module !== 'undefined' && module.exports && typeof window === 'undefined') {
	        //node
	        module.exports = IsMobileClass;
	    } else if (typeof module !== 'undefined' && module.exports && typeof window !== 'undefined') {
	        //browserify
	        module.exports = instantiate();
	    } else if (true) {
	        //AMD
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile = instantiate()), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        global.isMobile = instantiate();
	    }
	
	})(this);


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(103);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _isInteger = __webpack_require__(114);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _defineProperty2 = __webpack_require__(57);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _vue = __webpack_require__(118);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _types = __webpack_require__(63);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  state: {
	    loaded: false,
	    loading: false,
	    data: [],
	    total: 0,
	    source: null,
	    url: null,
	    side: 'client',
	    response: {
	      ok: null,
	      status: null,
	      text: null
	    }
	  },
	  getters: {
	    loaded: function loaded(s) {
	      return s.loaded;
	    },
	    loading: function loading(s) {
	      return s.loading;
	    },
	    url: function url(s) {
	      return s.url;
	    },
	    side: function side(s) {
	      return s.side;
	    },
	    source: function source(s) {
	      return s.source;
	    },
	    total: function total(s) {
	      return s.side === 'server' ? s.total : s.data.length;
	    },
	    response: function response(s) {
	      return s.response;
	    }
	  },
	  mutations: (_mutations = {}, (0, _defineProperty3.default)(_mutations, _types2.default.DATA_SIDE_SET, function (state, _ref) {
	    var side = _ref.side;
	
	    state.side = side;
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.DATA_DATA_SET, function (state, _ref2) {
	    var data = _ref2.data;
	
	    state.data = data;
	    state.source = data;
	    state.loading = false;
	    state.loaded = true;
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.DATA_URL_SET, function (state, _ref3) {
	    var url = _ref3.url;
	
	    state.url = url;
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.DATA_LOADING, function (state) {
	    state.loading = true;
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.DATA_LOADING_ERROR, function (state, _ref4) {
	    var ok = _ref4.ok,
	        status = _ref4.status,
	        text = _ref4.text;
	    var response = state.response;
	
	    response.ok = ok === true;
	    response.status = status;
	    response.text = text;
	    state.loading = false;
	    state.loaded = false;
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.DATA_LOADED, function (state, _ref5) {
	    var data = _ref5.data;
	
	    state.data = data;
	    state.loading = false;
	    state.loaded = true;
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.DATA_DELETE, function (_ref6, _ref7) {
	    var url = _ref6.url,
	        data = _ref6.data;
	    var row = _ref7.row;
	
	    data.splice(data.indexOf(row), 1);
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.DATA_TOTAL_SET, function (state, _ref8) {
	    var total = _ref8.total;
	
	    state.total = total;
	  }), _mutations),
	  actions: {
	    delete: function _delete(_ref9, _ref10) {
	      var commit = _ref9.commit,
	          getters = _ref9.getters;
	      var row = _ref10.row;
	      var url = getters.url,
	          side = getters.side;
	
	
	      return _vue2.default.http.delete(url + row.id).then(function () {
	        commit(_types2.default.DATA_DELETE, { row: row });
	        commit(_types2.default.SELECT_UNSELECT_ROW, { row: row });
	
	        if (side === 'server') {
	          commit('DATA_LOAD');
	        }
	      });
	    },
	    setSide: function setSide(_ref11, _ref12) {
	      var commit = _ref11.commit;
	      var side = _ref12.side;
	
	      commit(_types2.default.DATA_SIDE_SET, { side: side });
	    },
	    setData: function setData(_ref13, _ref14) {
	      var commit = _ref13.commit;
	      var data = _ref14.data;
	
	      commit(_types2.default.DATA_DATA_SET, { data: data });
	    },
	    setURL: function setURL(_ref15, _ref16) {
	      var commit = _ref15.commit;
	      var url = _ref16.url;
	
	      commit(_types2.default.DATA_URL_SET, { url: url });
	    },
	    sync: function sync(_ref17, _ref18) {
	      var state = _ref17.state,
	          rootState = _ref17.rootState,
	          dispatch = _ref17.dispatch;
	      var row = _ref18.row;
	      var data = state.data,
	          url = state.url;
	      var selected = rootState.selectModule.selected;
	
	      var id = (0, _isInteger2.default)(row) ? row : Number(row.id);
	      var found = data.find(function (row_) {
	        return Number(row_.id) === id;
	      });
	
	      return new _promise2.default(function (resolve, reject) {
	        _vue2.default.http.get(url + id).then(function (response) {
	          if (found) {
	            data.splice(data.indexOf(found), 1, response.data);
	            resolve({ state: 'updated', row: found });
	          } else {
	            data.push(response.data);
	            resolve({ state: 'created', row: response.data });
	          }
	        }, function (_ref19) {
	          var status = _ref19.status;
	
	          if (status === 404 && found) {
	            data.splice(data.indexOf(found), 1);
	            if (selected.indexOf(row) !== -1) {
	              dispatch('toggleSelect', { row: row });
	            }
	            resolve({ state: 'deleted', row: row });
	          }
	          reject({ state: 'error', row: row });
	        });
	      });
	    },
	    loadData: function loadData(_ref20) {
	      var commit = _ref20.commit,
	          getters = _ref20.getters;
	      var loading = getters.loading,
	          side = getters.side,
	          source = getters.source,
	          url = getters.url,
	          page = getters.page,
	          limit = getters.limit,
	          sort = getters.sort,
	          search = getters.search;
	
	
	      if (source) {
	        return;
	      }
	
	      if (!side) {
	        console.log('No data provided.');
	        return;
	      }
	
	      if (side && !url) {
	        console.log('No url for data defined.');
	        return;
	      }
	
	      if (loading) {
	        return;
	      }
	
	      commit(_types2.default.DATA_LOADING);
	
	      if (source) {
	        commit(_types2.default.DATA_LOADED, { data: source });
	        return;
	      }
	
	      if (side === 'server') {
	        var params = {
	          _page: page,
	          _limit: limit
	        };
	
	        if (sort.name) {
	          params._sort = sort.name;
	          params._order = sort.order.toUpperCase();
	        }
	
	        if (search.enabled && search.text) {
	          params.q = search.text;
	          params._page = 1;
	          commit(_types2.default.PAGE_SET, { page: 1 });
	        }
	
	        _vue2.default.http.get(url, { params: params }).then(function (_ref21) {
	          var data = _ref21.data,
	              headers = _ref21.headers;
	
	          var total = Number(headers['x-total-count']);
	          commit(_types2.default.DATA_TOTAL_SET, { total: total });
	          commit(_types2.default.DATA_LOADED, { data: data });
	        });
	        return;
	      }
	
	      _vue2.default.http.get(url).then(function (_ref22) {
	        var data = _ref22.data,
	            ok = _ref22.ok,
	            status = _ref22.status,
	            statusText = _ref22.statusText;
	
	        if (status === 200) {
	          commit(_types2.default.DATA_LOADED, { data: data });
	        } else {
	          commit(_types2.default.DATA_LOADING_ERROR, {
	            ok: ok,
	            status: status,
	            text: statusText
	          });
	        }
	      }, function (_ref23) {
	        var ok = _ref23.ok,
	            status = _ref23.status,
	            statusText = _ref23.statusText;
	
	        commit(_types2.default.DATA_LOADING_ERROR, {
	          ok: ok,
	          status: status,
	          text: statusText
	        });
	      });
	    }
	  }
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	__webpack_require__(105);
	__webpack_require__(71);
	__webpack_require__(107);
	module.exports = __webpack_require__(6).Promise;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(106)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(76)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , defined   = __webpack_require__(26);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(77)
	  , global             = __webpack_require__(5)
	  , ctx                = __webpack_require__(7)
	  , classof            = __webpack_require__(99)
	  , $export            = __webpack_require__(4)
	  , isObject           = __webpack_require__(12)
	  , aFunction          = __webpack_require__(8)
	  , anInstance         = __webpack_require__(94)
	  , forOf              = __webpack_require__(95)
	  , speciesConstructor = __webpack_require__(108)
	  , task               = __webpack_require__(109).set
	  , microtask          = __webpack_require__(111)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(84)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(93)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(83)($Promise, PROMISE);
	__webpack_require__(112)(PROMISE);
	Wrapper = __webpack_require__(6)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(113)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(11)
	  , aFunction = __webpack_require__(8)
	  , SPECIES   = __webpack_require__(84)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(7)
	  , invoke             = __webpack_require__(110)
	  , html               = __webpack_require__(82)
	  , cel                = __webpack_require__(16)
	  , global             = __webpack_require__(5)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(25)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , macrotask = __webpack_require__(109).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(25)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(5)
	  , core        = __webpack_require__(6)
	  , dP          = __webpack_require__(10)
	  , DESCRIPTORS = __webpack_require__(14)
	  , SPECIES     = __webpack_require__(84)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(84)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(116);
	module.exports = __webpack_require__(6).Number.isInteger;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(4);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(117)});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(12)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(57);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _ownKeys = __webpack_require__(1);
	
	var _ownKeys2 = _interopRequireDefault(_ownKeys);
	
	var _vue = __webpack_require__(118);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _types = __webpack_require__(63);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  state: {
	    slots: {
	      named: {},
	      scoped: {}
	    }
	  },
	  getters: {
	    slots: function slots(s) {
	      return s.slots;
	    }
	  },
	  mutations: (0, _defineProperty3.default)({}, _types2.default.SLOTS_INIT, function (_ref, _ref2) {
	    var slots = _ref.slots;
	    var named = _ref2.named,
	        scoped = _ref2.scoped;
	
	    (0, _ownKeys2.default)(named).forEach(function (key) {
	      _vue2.default.set(slots.named, key, named[key]);
	    });
	
	    (0, _ownKeys2.default)(scoped).forEach(function (key) {
	      _vue2.default.set(slots.scoped, key, scoped[key]);
	      slots.scoped[key] = scoped[key];
	    });
	  })
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(57);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _types = __webpack_require__(63);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  state: {
	    pageSize: 10,
	    pageSizes: [{
	      value: 10,
	      name: 10
	    }, {
	      value: 20,
	      name: 20
	    }, {
	      value: 30,
	      name: 30
	    }, {
	      value: 50,
	      name: 50
	    }, {
	      value: 100,
	      name: 100
	    }, {
	      value: 0,
	      name: 'No limit'
	    }],
	    page: 1
	  },
	  getters: {
	    page: function page(s) {
	      return s.page;
	    },
	    pages: function pages(state, _ref) {
	      var pageSize = _ref.pageSize,
	          parsedTotal = _ref.parsedTotal;
	
	      return pageSize ? Math.max(Math.ceil(parsedTotal / pageSize), 1) : 1;
	    },
	
	    pageSize: function pageSize(s) {
	      return s.pageSize;
	    },
	    pageOffset: function pageOffset(state, _ref2) {
	      var page = _ref2.page,
	          pageSize = _ref2.pageSize;
	
	      return pageSize ? (page - 1) * pageSize : 0;
	    },
	
	    pageSizes: function pageSizes(s) {
	      return s.pageSizes;
	    },
	    isFirstPage: function isFirstPage(s) {
	      return s.page <= 1;
	    },
	    isLastPage: function isLastPage(s) {
	      return s.page >= s.pages;
	    }
	  },
	  mutations: (_mutations = {}, (0, _defineProperty3.default)(_mutations, _types2.default.PAGINATOR_SET_PAGE, function (state, _ref3) {
	    var page = _ref3.page;
	
	    state.page = page;
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.PAGINATOR_SET_PAGE_SIZE, function (state, _ref4) {
	    var pageSize = _ref4.pageSize;
	
	    state.pageSize = pageSize;
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.PAGINATOR_SET_PAGE_SIZES, function (state, _ref5) {
	    var pageSizes = _ref5.pageSizes;
	
	    state.pageSizes = pageSizes;
	  }), _mutations),
	  actions: {
	    paginatorSetPageSize: function paginatorSetPageSize(_ref6, _ref7) {
	      var commit = _ref6.commit,
	          dispatch = _ref6.dispatch;
	      var pageSize = _ref7.pageSize;
	
	      commit(_types2.default.PAGINATOR_SET_PAGE_SIZE, { pageSize: pageSize });
	      dispatch('paginatorSetPage', { page: 1 });
	    },
	    paginatorSetPageSizes: function paginatorSetPageSizes(_ref8, _ref9) {
	      var commit = _ref8.commit,
	          dispatch = _ref8.dispatch;
	      var pageSizes = _ref9.pageSizes;
	
	      commit(_types2.default.PAGINATOR_SET_PAGE_SIZES, { pageSizes: pageSizes });
	      dispatch('paginatorSetPage', { page: 1 });
	    },
	    paginatorNextPage: function paginatorNextPage(_ref10) {
	      var commit = _ref10.commit,
	          state = _ref10.state,
	          getters = _ref10.getters;
	
	      var page = Math.min(getters.pages, state.page + 1);
	      commit(_types2.default.PAGINATOR_SET_PAGE, { page: page });
	    },
	    paginatorPreviousPage: function paginatorPreviousPage(_ref11) {
	      var commit = _ref11.commit,
	          state = _ref11.state;
	
	      var page = Math.max(1, state.page - 1);
	      commit(_types2.default.PAGINATOR_SET_PAGE, { page: page });
	    },
	    paginatorFirstPage: function paginatorFirstPage(_ref12) {
	      var commit = _ref12.commit;
	
	      commit(_types2.default.PAGINATOR_SET_PAGE, { page: 1 });
	    },
	    paginatorLastPage: function paginatorLastPage(_ref13) {
	      var commit = _ref13.commit,
	          getters = _ref13.getters;
	
	      commit(_types2.default.PAGINATOR_SET_PAGE, { page: getters.pages });
	    },
	    paginatorSetPage: function paginatorSetPage(_ref14, _ref15) {
	      var commit = _ref14.commit;
	      var page = _ref15.page;
	
	      commit(_types2.default.PAGINATOR_SET_PAGE, { page: page });
	    }
	  }
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(57);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _types = __webpack_require__(63);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  state: {
	    multiSelect: true,
	    selected: []
	  },
	  getters: {
	    selected: function selected(s) {
	      return s.selected;
	    },
	    multiSelect: function multiSelect(s) {
	      return s.multiSelect;
	    }
	  },
	  mutations: (_mutations = {}, (0, _defineProperty3.default)(_mutations, _types2.default.SELECT_SELECT_ROW, function (_ref, _ref2) {
	    var selected = _ref.selected;
	    var row = _ref2.row;
	
	    if (selected.indexOf(row) === -1) {
	      selected.push(row);
	    }
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.SELECT_UNSELECT_ROW, function (_ref3, _ref4) {
	    var selected = _ref3.selected;
	    var row = _ref4.row;
	
	    var index = selected.indexOf(row);
	
	    if (index !== -1) {
	      selected.splice(index, 1);
	    }
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.SELECT_SET_MULTISELECT, function (state, _ref5) {
	    var multiSelect = _ref5.multiSelect;
	
	    state.multiSelect = multiSelect;
	  }), _mutations),
	  actions: {
	    toggleSelect: function toggleSelect(_ref6, _ref7) {
	      var commit = _ref6.commit,
	          dispatch = _ref6.dispatch,
	          state = _ref6.state;
	      var row = _ref7.row;
	      var selected = state.selected;
	      var SELECT_SELECT_ROW = _types2.default.SELECT_SELECT_ROW,
	          SELECT_UNSELECT_ROW = _types2.default.SELECT_UNSELECT_ROW;
	
	
	      commit(selected.indexOf(row) === -1 ? SELECT_SELECT_ROW : SELECT_UNSELECT_ROW, { row: row });
	    },
	    isSelected: function isSelected(_ref8, _ref9) {
	      var getters = _ref8.getters;
	      var row = _ref9.row;
	
	      return getters.selected.indexOf(row) !== -1;
	    },
	    selectSetMultiSelect: function selectSetMultiSelect(_ref10, _ref11) {
	      var commit = _ref10.commit;
	      var multiSelect = _ref11.multiSelect;
	
	      commit(_types2.default.SELECT_SET_MULTISELECT, { multiSelect: multiSelect });
	    }
	  }
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(57);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _types = __webpack_require__(63);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  state: {
	    rowsHeight: null
	  },
	  mutations: (0, _defineProperty3.default)({}, _types2.default.GRID_ROWSHEIGHT_SET, function (state, _ref) {
	    var rowsHeight = _ref.rowsHeight;
	
	    state.rowsHeight = rowsHeight;
	  }),
	  actions: {
	    setRowsHeight: function setRowsHeight(_ref2, _ref3) {
	      var commit = _ref2.commit;
	      var rowsHeight = _ref3.rowsHeight;
	
	      commit(_types2.default.GRID_ROWSHEIGHT_SET, { rowsHeight: rowsHeight });
	    }
	  }
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(57);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _typeof2 = __webpack_require__(124);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _stack = __webpack_require__(138);
	
	var _getDeep = __webpack_require__(139);
	
	var _getDeep2 = _interopRequireDefault(_getDeep);
	
	var _types = __webpack_require__(63);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  namespaced: true,
	  state: {
	    multiple: true,
	    stack: [],
	    value: null
	  },
	  getters: {
	    rows: function rows(s) {
	      return s.rows;
	    },
	    value: function value(s) {
	      return s.value;
	    },
	    stack: function stack(s) {
	      return s.stack;
	    },
	    status: function status(_ref, _ref2) {
	      var stack = _ref.stack,
	          value = _ref.value;
	      var filtered = _ref2.filtered;
	
	      var status = {
	        filters: {},
	        filtered: filtered,
	        value: value
	      };
	      stack.forEach(function (_ref3) {
	        var name = _ref3.name,
	            value = _ref3.value,
	            filterBy = _ref3.filterBy;
	
	        status.filters[name] = {
	          value: value,
	          filterBy: filterBy
	        };
	      });
	      return status;
	    },
	    filtered: function filtered(_ref4, _ref5, _ref6, rootGetters) {
	      var stack = _ref4.stack;
	      var value = _ref5.value;
	      var dataModule = _ref6.dataModule;
	
	      var columns = [];
	      var data = dataModule.data;
	
	
	      value = value ? String(value).toLowerCase() : '';
	
	      stack.forEach(function (_ref7) {
	        var name = _ref7.name,
	            value = _ref7.value,
	            filterBy = _ref7.filterBy;
	
	        var path = typeof filterBy === 'string' ? filterBy.split('.') : null;
	        var func = typeof filterBy === 'function' ? filterBy : null;
	        value = value ? String(value).toLowerCase() : '';
	
	        data = data.filter(function (row) {
	          if (func) {
	            return func(row);
	          } else if (path) {
	            return String((0, _getDeep2.default)(row, path)).toLowerCase() === value;
	          } else {
	            return String(row[name]).toLowerCase() === value;
	          }
	        });
	      });
	
	      rootGetters['columns'].forEach(function (_ref8) {
	        var name = _ref8.name,
	            filterable = _ref8.filterable,
	            filterBy = _ref8.filterBy;
	
	        if (name && filterable !== false) {
	          columns.push({
	            name: name,
	            path: typeof filterBy === 'string' ? filterBy.split('.') : null,
	            func: typeof filterBy === 'function' ? filterBy : null
	          });
	        }
	      });
	
	      if (value) {
	        var _ret = function () {
	          var index = 0;
	          var result = false;
	          var column = null;
	
	          return {
	            v: data.filter(function (row) {
	              index = 0;
	              result = false;
	
	              while (result === false && index < columns.length) {
	                column = columns[index++];
	
	                if (column.func) {
	                  result = column.func(value, row[column.name], row);
	                } else if (column.path) {
	                  result = String((0, _getDeep2.default)(row, column.path)).toLowerCase().indexOf(value) !== -1;
	                } else {
	                  result = String(row[column.name]).toLowerCase().indexOf(value) !== -1;
	                }
	              }
	
	              return result;
	            })
	          };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	      }
	
	      return data;
	    }
	  },
	  mutations: (0, _defineProperty3.default)({}, _types2.default.FILTER, function (state, _ref9) {
	    var name = _ref9.name,
	        value = _ref9.value,
	        filterBy = _ref9.filterBy;
	    var multiple = state.multiple,
	        stack = state.stack;
	
	
	    if (!name && !filterBy) {
	      state.value = value;
	      return;
	    }
	
	    if ((0, _stack.has)({ stack: stack }, name) === true) {
	      var item = (0, _stack.get)({ stack: stack }, name);
	      if (value === false) {
	        (0, _stack.remove)({ stack: stack }, name);
	      } else {
	        item.value = value || null;
	        item.filterBy = filterBy || null;
	      }
	    } else {
	      if (!value && !filterBy) {
	        return;
	      }
	
	      (0, _stack.push)({ multiple: multiple, stack: stack }, {
	        name: name,
	        value: value || null,
	        filterBy: filterBy || null
	      });
	    }
	  }),
	  actions: {
	    filter: function filter(_ref10) {
	      var commit = _ref10.commit,
	          rootGetters = _ref10.rootGetters;
	
	      var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	          name = _ref11.name,
	          value = _ref11.value,
	          filterBy = _ref11.filterBy;
	
	      commit(_types2.default.FILTER, { name: name, value: value, filterBy: filterBy });
	    }
	  }
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(125);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(128);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(105);
	__webpack_require__(71);
	module.exports = __webpack_require__(127).f('iterator');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(84);

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(130);
	__webpack_require__(70);
	__webpack_require__(136);
	__webpack_require__(137);
	module.exports = __webpack_require__(6).Symbol;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(5)
	  , has            = __webpack_require__(22)
	  , DESCRIPTORS    = __webpack_require__(14)
	  , $export        = __webpack_require__(4)
	  , redefine       = __webpack_require__(78)
	  , META           = __webpack_require__(91).KEY
	  , $fails         = __webpack_require__(15)
	  , shared         = __webpack_require__(32)
	  , setToStringTag = __webpack_require__(83)
	  , uid            = __webpack_require__(33)
	  , wks            = __webpack_require__(84)
	  , wksExt         = __webpack_require__(127)
	  , wksDefine      = __webpack_require__(131)
	  , keyOf          = __webpack_require__(132)
	  , enumKeys       = __webpack_require__(133)
	  , isArray        = __webpack_require__(90)
	  , anObject       = __webpack_require__(11)
	  , toIObject      = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(17)
	  , createDesc     = __webpack_require__(18)
	  , _create        = __webpack_require__(80)
	  , gOPNExt        = __webpack_require__(134)
	  , $GOPD          = __webpack_require__(135)
	  , $DP            = __webpack_require__(10)
	  , $keys          = __webpack_require__(48)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(20).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(49).f  = $propertyIsEnumerable;
	  __webpack_require__(35).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(77)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(5)
	  , core           = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(77)
	  , wksExt         = __webpack_require__(127)
	  , defineProperty = __webpack_require__(10).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(48)
	  , toIObject = __webpack_require__(23);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(48)
	  , gOPS    = __webpack_require__(35)
	  , pIE     = __webpack_require__(49);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(23)
	  , gOPN      = __webpack_require__(20).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(49)
	  , createDesc     = __webpack_require__(18)
	  , toIObject      = __webpack_require__(23)
	  , toPrimitive    = __webpack_require__(17)
	  , has            = __webpack_require__(22)
	  , IE8_DOM_DEFINE = __webpack_require__(13)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(131)('asyncIterator');

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(131)('observable');

/***/ },
/* 138 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var push = exports.push = function push(_ref, item) {
	  var stack = _ref.stack,
	      multiple = _ref.multiple;
	
	  var removed = [];
	
	  if (!multiple) {
	    while (stack.length > 0) {
	      removed.push(stack.pop());
	    }
	  }
	  stack.push(item);
	
	  return removed;
	};
	
	var get = exports.get = function get(_ref2, name) {
	  var stack = _ref2.stack;
	  return stack.find(function (item) {
	    return item.name === name;
	  });
	};
	
	var has = exports.has = function has(_ref3, name) {
	  var stack = _ref3.stack;
	  return get({ stack: stack }, name) !== undefined;
	};
	
	var remove = exports.remove = function remove(_ref4, name) {
	  var stack = _ref4.stack;
	
	  if (has({ stack: stack }, name)) {
	    var index = stack.indexOf(get({ stack: stack }, name));
	    return stack.splice(index, 1);
	  }
	
	  return [];
	};
	
	var multiple = exports.multiple = function multiple(state, _multiple) {
	  var removed = [];
	  state.multiple = _multiple;
	
	  if (!_multiple) {
	    while (state.stack.length > 1) {
	      removed.push(state.stack.pop());
	    }
	  }
	
	  return removed;
	};

/***/ },
/* 139 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (object, path) {
	  var length = path.length;
	  var index = 0;
	
	  while (object !== undefined && index < length) {
	    object = object[path[index++]];
	  }
	
	  return object;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(57);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _mutations;
	
	var _stack = __webpack_require__(138);
	
	var _getDeep = __webpack_require__(139);
	
	var _getDeep2 = _interopRequireDefault(_getDeep);
	
	var _types = __webpack_require__(63);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  namespaced: true,
	  state: {
	    multiple: true,
	    stack: []
	  },
	  getters: {
	    multiple: function multiple(s) {
	      return s.multiple;
	    },
	    stack: function stack(s) {
	      return s.stack;
	    },
	    status: function status(_ref) {
	      var stack = _ref.stack;
	
	      var status = {};
	      stack.forEach(function (_ref2) {
	        var name = _ref2.name,
	            order = _ref2.order,
	            sortBy = _ref2.sortBy;
	
	        status[name] = {
	          order: order,
	          sortBy: sortBy
	        };
	      });
	      return status;
	    },
	    sorted: function sorted(_ref3, getters, rootState, rootGetters) {
	      var stack = _ref3.stack;
	
	      var filtered = rootGetters['filter/filtered'];
	      var sorters = [];
	
	      if (!stack.length) {
	        return filtered;
	      }
	
	      stack.forEach(function (_ref4) {
	        var name = _ref4.name,
	            order = _ref4.order,
	            sortBy = _ref4.sortBy;
	
	        sorters.push({
	          name: name,
	          func: typeof sortBy === 'function' ? sortBy : null,
	          path: typeof sortBy === 'string' ? sortBy.split('.') : null,
	          negator: 1 * (order === 'asc' ? 1 : -1)
	        });
	      });
	
	      var index = 0;
	      var result = 0;
	      var sorter = null;
	
	      return filtered.sort(function (prev, next) {
	        index = 0;
	        result = 0;
	
	        while (result === 0 && index < sorters.length) {
	          sorter = sorters[index++];
	
	          if (sorter.func) {
	            result = sorter.func(prev[sorter.name], next[sorter.name], prev, next) * sorter.negator;
	          } else if (sorter.path) {
	            if ((0, _getDeep2.default)(prev, sorter.path) < (0, _getDeep2.default)(next, sorter.path)) {
	              result = sorter.negator;
	            } else if ((0, _getDeep2.default)(prev, sorter.path) > (0, _getDeep2.default)(next, sorter.path)) {
	              result = -sorter.negator;
	            } else {
	              result = 0;
	            }
	          } else if (prev[sorter.name] < next[sorter.name]) {
	            result = sorter.negator;
	          } else if (prev[sorter.name] > next[sorter.name]) {
	            result = -sorter.negator;
	          } else {
	            result = 0;
	          }
	        }
	
	        return result;
	      });
	    }
	  },
	  mutations: (_mutations = {}, (0, _defineProperty3.default)(_mutations, _types2.default.SORT_SET_MULTIPLE, function (state, _ref5) {
	    var multiple = _ref5.multiple;
	
	    state.multiple = multiple;
	  }), (0, _defineProperty3.default)(_mutations, _types2.default.SORT, function (_ref6, _ref7) {
	    var multiple = _ref6.multiple,
	        stack = _ref6.stack;
	    var column = _ref7.column,
	        order = _ref7.order,
	        sortBy = _ref7.sortBy;
	    var name = column.name;
	
	
	    if (order === false) {
	      if ((0, _stack.has)({ stack: stack }, name)) {
	        (0, _stack.remove)({ stack: stack }, name);
	      }
	      return;
	    }
	
	    if ((0, _stack.has)({ stack: stack }, name) === true) {
	      var item = (0, _stack.get)({ stack: stack }, name);
	
	      if (sortBy) {
	        item.sortBy = sortBy || column.sortBy || null;
	      }
	
	      if (order) {
	        item.order = order;
	      } else if (item.order === 'asc') {
	        item.order = 'desc';
	      } else if (item.order === 'desc') {
	        (0, _stack.remove)({ stack: stack }, name);
	      }
	    } else {
	      (0, _stack.push)({ multiple: multiple, stack: stack }, {
	        name: name,
	        order: order || 'asc',
	        sortBy: sortBy || column.sortBy || null
	      });
	    }
	  }), _mutations),
	  actions: {
	    sort: function sort(_ref8) {
	      var commit = _ref8.commit,
	          state = _ref8.state,
	          getters = _ref8.getters,
	          rootState = _ref8.rootState,
	          rootGetters = _ref8.rootGetters;
	
	      var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	          name = _ref9.name,
	          order = _ref9.order,
	          sortBy = _ref9.sortBy;
	
	      var columns = rootGetters.columns;
	
	      var column = columns.find(function (column) {
	        return column.name === name;
	      });
	
	      if (!name || !column) {
	        return;
	      }
	
	      if (column.sortable === false) {
	        return;
	      }
	
	      commit(_types2.default.SORT, { column: column, order: order, sortBy: sortBy });
	
	      if (state.side === 'server') {
	        commit('DATA_LOAD');
	      }
	    },
	    setMultiple: function setMultiple(_ref10) {
	      var commit = _ref10.commit;
	
	      var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	          multiple = _ref11.multiple;
	
	      commit(_types2.default.SORT_SET_MULTIPLE, { multiple: multiple });
	    }
	  }
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(142),
	  /* template */
	  __webpack_require__(149),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(43);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(51);
	
	var _Filter = __webpack_require__(143);
	
	var _Filter2 = _interopRequireDefault(_Filter);
	
	var _Title = __webpack_require__(146);
	
	var _Title2 = _interopRequireDefault(_Title);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    ftFilter: _Filter2.default,
	    ftTitle: _Title2.default
	  },
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['loaded']))
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(144),
	  /* template */
	  __webpack_require__(145),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(43);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(51);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
	    status: 'filter/status'
	  })),
	  data: function data() {
	    return {
	      enabled: false,
	      value: ''
	    };
	  },
	
	  methods: (0, _extends3.default)({
	    toggle: function toggle() {
	      var value = this.value;
	
	      this.enabled = !this.enabled;
	      this.filter({ value: this.enabled ? value : '' });
	    }
	  }, (0, _vuex.mapActions)({
	    filter: 'filter/filter'
	  }))
	};

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-filter"
	  }, [_vm._t("default", [(_vm.status.filtered.length && _vm.value) ? _c('span', [_vm._v("Rows found: " + _vm._s(_vm.status.filtered.length))]) : _vm._e(), _vm._v(" "), (_vm.enabled) ? _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.value),
	      expression: "value"
	    }],
	    domProps: {
	      "value": _vm._s(_vm.value)
	    },
	    on: {
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.value = $event.target.value
	      }, function($event) {
	        _vm.filter({
	          value: _vm.enabled ? _vm.value : ''
	        })
	      }]
	    }
	  }) : _vm._e(), _c('button', {
	    on: {
	      "click": _vm.toggle
	    }
	  }, [_vm._v("Search")])])], 2)
	},staticRenderFns: []}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(147),
	  /* template */
	  __webpack_require__(148),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(43);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(51);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['multiSelect', 'selected']))
	};

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-header-title"
	  }, [_vm._t("default", [(_vm.multiSelect) ? [(_vm.selected.length) ? [_vm._t("items-selected", [_vm._v("Items selected: " + _vm._s(_vm.selected.length))])] : [_vm._v("Default title")]] : [_vm._v("Default title")]])], 2)
	},staticRenderFns: []}

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-header"
	  }, [_vm._t("default", [_c('ft-title'), (_vm.loaded) ? _c('ft-filter') : _vm._e()])], 2)
	},staticRenderFns: []}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(151),
	  /* template */
	  __webpack_require__(158),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(43);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(51);
	
	var _Paginator = __webpack_require__(152);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    ftPaginator: _Paginator2.default
	  },
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['loaded']))
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(153),
	  /* template */
	  __webpack_require__(157),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(43);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(51);
	
	var _Selector = __webpack_require__(154);
	
	var _Selector2 = _interopRequireDefault(_Selector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: { ftSelector: _Selector2.default },
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['pageSize', 'pageSizes', 'total', 'page', 'pages', 'isFirstPage', 'isLastPage'])),
	  methods: {
	    first: function first() {
	      this.$store.dispatch('paginatorFirstPage');
	    },
	    next: function next() {
	      this.$store.dispatch('paginatorNextPage');
	    },
	    prev: function prev() {
	      this.$store.dispatch('paginatorPreviousPage');
	    },
	    last: function last() {
	      this.$store.dispatch('paginatorLastPage');
	    },
	    setPageSize: function setPageSize(pageSize) {
	      this.$store.dispatch('paginatorSetPageSize', { pageSize: pageSize });
	    }
	  }
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(155),
	  /* template */
	  __webpack_require__(156),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 155 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    value: {
	      required: false
	    },
	    options: {
	      type: Array,
	      required: false,
	      default: function _default() {
	        return [];
	      }
	    }
	  }
	};

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('select', {
	    staticClass: "ft-select",
	    on: {
	      "change": function($event) {
	        _vm.$emit('input', $event.target.value)
	      }
	    }
	  }, [_vm._l((_vm.options), function(option) {
	    return [_c('option', {
	      domProps: {
	        "value": option.value,
	        "selected": option.value == _vm.value
	      }
	    }, [_vm._v(_vm._s(option.name))])]
	  })], 2)
	},staticRenderFns: []}

/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-paginator"
	  }, [_vm._t("default", [_c('span', [_vm._v("Rows per page:")]), _c('ft-selector', {
	    attrs: {
	      "value": _vm.pageSize,
	      "options": _vm.pageSizes
	    },
	    on: {
	      "input": function($event) {
	        _vm.setPageSize(Number($event))
	      }
	    }
	  }), _c('span', [_vm._v("Page " + _vm._s(_vm.page) + " of " + _vm._s(_vm.pages))]), _c('button', {
	    staticClass: "ft-paginator-button",
	    attrs: {
	      "disabled": _vm.isFirstPage
	    },
	    on: {
	      "click": _vm.first
	    }
	  }, [_vm._v("| <")]), _c('button', {
	    staticClass: "ft-paginator-button",
	    attrs: {
	      "disabled": _vm.isFirstPage
	    },
	    on: {
	      "click": _vm.prev
	    }
	  }, [_vm._v("<")]), _c('button', {
	    staticClass: "ft-paginator-button",
	    attrs: {
	      "disabled": _vm.isLastPage
	    },
	    on: {
	      "click": _vm.next
	    }
	  }, [_vm._v(">")]), _c('button', {
	    staticClass: "ft-paginator-button",
	    attrs: {
	      "disabled": _vm.isLastPage
	    },
	    on: {
	      "click": _vm.last
	    }
	  }, [_vm._v("> |")])])], 2)
	},staticRenderFns: []}

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-footer"
	  }, [_vm._t("default", [(_vm.loaded) ? _c('ft-paginator') : _vm._e()])], 2)
	},staticRenderFns: []}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(160),
	  /* template */
	  __webpack_require__(178),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(43);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(51);
	
	var _Heading = __webpack_require__(161);
	
	var _Heading2 = _interopRequireDefault(_Heading);
	
	var _Row = __webpack_require__(170);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    ftHeading: _Heading2.default,
	    ftRow: _Row2.default
	  },
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['rowsToRender']))
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(162),
	  /* template */
	  __webpack_require__(169),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Row = __webpack_require__(163);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: { ftHeadingRow: _Row2.default }
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(164),
	  /* template */
	  __webpack_require__(168),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(43);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(51);
	
	var _Cell = __webpack_require__(165);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    ftHeadingCell: _Cell2.default
	  },
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['columns', 'multiSelect'])),
	  methods: {
	    sortBy: function sortBy(name) {
	      this.$store.dispatch('sortBy', {
	        name: name
	      });
	    }
	  }
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(166),
	  /* template */
	  __webpack_require__(167),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(43);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(51);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    column: {
	      required: false,
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  computed: (0, _extends3.default)({
	    sorting: function sorting() {
	      return this.status[this.column.name] !== undefined;
	    },
	    sortingOrder: function sortingOrder() {
	      return this.sorting ? this.status[this.column.name].order : null;
	    },
	    alignClass: function alignClass() {
	      var align = this.column.align;
	
	      var alignClass = 'ft-align-left';
	
	      if (align === 'center') {
	        alignClass = 'ft-align-center';
	      } else if (align === 'right') {
	        alignClass = 'ft-align-right';
	      }
	
	      return alignClass;
	    }
	  }, (0, _vuex.mapGetters)({
	    status: 'sort/status'
	  })),
	  methods: {
	    sort: function sort(_ref) {
	      var name = _ref.name;
	
	      this.$store.dispatch('sort/sort', { name: name });
	    }
	  }
	};

/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-heading-cell",
	    class: [_vm.alignClass, {
	      'ft-clickable': _vm.column.sortable !== false
	    }, {
	      'ft-heading-cell-sorted': _vm.sorting
	    }, _vm.column.classes],
	    on: {
	      "click": function($event) {
	        _vm.sort({
	          name: _vm.column.name
	        })
	      }
	    }
	  }, [_vm._t("default", [(_vm.sorting) ? [(_vm.column.align === 'right') ? [(_vm.sortingOrder === 'asc') ? [_vm._t("asc-icon", [_vm._v("▲")]), [_vm._v(_vm._s(_vm.column.label))]] : [_vm._t("desc-icon", [_vm._v("▼")]), [_vm._v(_vm._s(_vm.column.label))]]] : [(_vm.sortingOrder === 'asc') ? [_vm._v(_vm._s(_vm.column.label)), _vm._t("asc-icon", [_vm._v("▲")])] : [_vm._v(_vm._s(_vm.column.label)), _vm._t("desc-icon", [_vm._v("▼")])]]] : [_vm._v(_vm._s(_vm.column.label))]])], 2)
	},staticRenderFns: []}

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-heading-row"
	  }, [_vm._t("default", [(_vm.multiSelect !== false) ? _c('ft-heading-cell', {
	    attrs: {
	      "column": {
	        sortable: false,
	        filterable: false
	      }
	    }
	  }) : _vm._e(), _vm._l((_vm.columns), function(column) {
	    return _c('ft-heading-cell', {
	      attrs: {
	        "column": column
	      }
	    })
	  })])], 2)
	},staticRenderFns: []}

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-heading"
	  }, [_vm._t("default", [_c('ft-heading-row')])], 2)
	},staticRenderFns: []}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(171),
	  /* template */
	  __webpack_require__(177),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(43);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(51);
	
	var _Cell = __webpack_require__(172);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    row: {
	      type: Object,
	      required: true
	    }
	  },
	  components: {
	    ftCell: _Cell2.default
	  },
	  computed: (0, _extends3.default)({
	    isSelected: function isSelected() {
	      return this.selected.indexOf(this.row) !== -1;
	    }
	  }, (0, _vuex.mapGetters)(['selected', 'multiSelect', 'columns'])),
	  methods: (0, _extends3.default)({
	    toggleSelect: function toggleSelect(row) {
	      this.$store.dispatch('toggleSelect', { row: row });
	    }
	  }, (0, _vuex.mapActions)(['delete', 'update']))
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(173)
	
	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(175),
	  /* template */
	  __webpack_require__(176),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(174);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(40)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6805094c!./../../../node_modules/sass-loader/index.js?indentedSyntax!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cell.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6805094c!./../../../node_modules/sass-loader/index.js?indentedSyntax!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cell.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(39)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n", ""]);
	
	// exports


/***/ },
/* 175 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    column: {
	      required: false,
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    value: {
	      required: false
	    }
	  },
	  computed: {
	    alignClass: function alignClass() {
	      var align = this.column.align;
	
	      var alignClass = 'ft-align-left';
	
	      if (align === 'center') {
	        alignClass = 'ft-align-center';
	      } else if (align === 'right') {
	        alignClass = 'ft-align-right';
	      }
	
	      return alignClass;
	    }
	  }
	};

/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-cell",
	    class: [_vm.alignClass, _vm.column.classes]
	  }, [_vm._t("default", [
	    [_vm._v(_vm._s(_vm.value))]
	  ])], 2)
	},staticRenderFns: []}

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-row",
	    class: {
	      'ft-row-selected': _vm.isSelected
	    }
	  }, [_vm._t("default", [(_vm.multiSelect !== false) ? [_vm._t("multiSelect", [_c('ft-cell', {
	    attrs: {
	      "column": {
	        name: 'multiSelect'
	      },
	      "value": ""
	    }
	  }, [_c('input', {
	    staticClass: "ft-clickable",
	    attrs: {
	      "type": "checkbox"
	    },
	    domProps: {
	      "checked": _vm.isSelected,
	      "value": _vm.row.id
	    },
	    on: {
	      "click": function($event) {
	        _vm.toggleSelect(_vm.row)
	      }
	    }
	  })])])] : _vm._e(), _vm._l((_vm.columns), function(column) {
	    return [_vm._t(column.name, [_c('ft-cell', {
	      attrs: {
	        "column": column,
	        "value": _vm.row[column.name]
	      }
	    })])]
	  })])], 2)
	},staticRenderFns: []}

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-grid"
	  }, [_vm._t("default", [_c('ft-heading'), _vm._l((_vm.rowsToRender), function(row) {
	    return _c('ft-row', {
	      attrs: {
	        "row": row
	      }
	    })
	  })])], 2)
	},staticRenderFns: []}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  __webpack_require__(180),
	  /* template */
	  __webpack_require__(185),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(43);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(51);
	
	var _NoData = __webpack_require__(181);
	
	var _NoData2 = _interopRequireDefault(_NoData);
	
	var _Spinner = __webpack_require__(183);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    ftNoData: _NoData2.default,
	    ftSpinner: _Spinner2.default
	  },
	  computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['loading']))
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(182),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-no-data"
	  }, [_vm._t("default", [
	    [_vm._v("No data")]
	  ])], 2)
	},staticRenderFns: []}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(41)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(184),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-spinner"
	  })
	},staticRenderFns: []}

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ft-loader"
	  }, [_vm._t("default", [(_vm.loading) ? _c('ft-spinner') : _c('ft-no-data')])], 2)
	},staticRenderFns: []}

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "flextable",
	    class: [_vm.classes.mobile, _vm.classes.device, _vm.classes.size]
	  }, [_vm._t("default", [_c('ft-header'), (_vm.loaded) ? _c('ft-grid') : _c('ft-state'), _c('ft-footer')], {
	    selected: _vm.selected,
	    screenSize: _vm.screen.size,
	    device: _vm.device,
	    page: _vm.page,
	    pages: _vm.pages,
	    sort: _vm.sort,
	    filter: _vm.filter,
	    sortStatus: _vm.sortStatus,
	    pageSize: _vm.pageSize,
	    setPageSize: _vm.setPageSize,
	    firstPage: _vm.firstPage,
	    previousPage: _vm.previousPage,
	    nextPage: _vm.nextPage,
	    lastPage: _vm.lastPage,
	    rowsToRender: _vm.rowsToRender,
	    columns: _vm.columns,
	    toggleSelect: _vm.toggleSelect,
	    dataLoaded: _vm.loaded,
	    dataLoading: _vm.loading
	  })], 2)
	},staticRenderFns: []}

/***/ }
/******/ ]);
//# sourceMappingURL=flextable.common.js.map