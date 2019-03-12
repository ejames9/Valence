'use strict';

var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 14);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.extractFunctionName = exports.convertFuncNameToTagName = exports.processData = exports.processProps = exports.extractCustomPropNames = exports.processEventListeners = exports.sansON = exports.propsArray = exports.propNames = exports.piper = exports.inspect = exports.log = exports.dom = exports.el = undefined;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  }; /*
     Utilities.js
     
     A file containing utility functions to aid in the functional
     nature of Valence...
     
     Eric James Foster, MIT License.
     */

  // Get data...

  // Get Is...

  // Get words from lodash...


  var _elementsJS = __webpack_require__(17);

  Object.defineProperty(exports, 'el', {
    enumerable: true,
    get: function get() {
      return _elementsJS.el;
    }
  });
  Object.defineProperty(exports, 'dom', {
    enumerable: true,
    get: function get() {
      return _elementsJS.dom;
    }
  });
  Object.defineProperty(exports, 'log', {
    enumerable: true,
    get: function get() {
      return _elementsJS.log;
    }
  });
  Object.defineProperty(exports, 'inspect', {
    enumerable: true,
    get: function get() {
      return _elementsJS.inspect;
    }
  });

  var _data = __webpack_require__(4);

  var _Is = __webpack_require__(2);

  var _words = __webpack_require__(20);

  var _words2 = _interopRequireDefault(_words);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var piper = exports.piper = function piper() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (arg) {
      return fns.reduce(function (value, fn) {
        return fn(value);
      }, arg);
    };
  };

  // Returns an array of prop names...
  var propNames = exports.propNames = function propNames(props) {
    return Object.keys(props);
  };

  // Get an array of key value pairs from the attributes object...
  var propsArray = exports.propsArray = function propsArray(attribs) {
    return Object.entries(attribs);
  };

  // Create a new array with all event listeners lower-cased...
  var lowerCaseListeners3 = function lowerCaseListeners3(arr) {
    return arr.map(function (entry) {
      return [entry[0].toLowerCase(), entry[0], entry[1]];
    });
  };

  // Create a new array with all event listeners lower-cased...
  var lowerCaseListeners2 = function lowerCaseListeners2(arr) {
    return arr.map(function (entry) {
      return [entry[0].toLowerCase(), entry[1]];
    });
  };

  // Create a new array with all event listeners lower-cased...
  var lowerCaseListeners1 = function lowerCaseListeners1(arr) {
    return arr.map(function (entry) {
      return entry.toLowerCase();
    });
  };

  // Create a new array with event listeners and their callback functions...
  var isolateEventListeners = function isolateEventListeners(arr) {
    return arr.filter(function (entry) {
      return _data.DATA.DOMElementEvents.indexOf(entry[0]) != -1;
    });
  };

  // A function for removing the `on` from event listeners...
  var sansON = exports.sansON = function sansON(name) {
    return name.slice(2).toLowerCase();
  };

  // Create a new array with the `on` removed from the event listener names...
  var removePrefixFromListeners = function removePrefixFromListeners(arr) {
    return arr.map(function (entry) {
      return [sansON(entry[0]), entry[1], entry[2]];
    });
  };

  // Create a new array without the  event listeners and their callback functions...
  var removeEventListeners = function removeEventListeners(arr) {
    return arr.filter(function (entry) {
      return _data.DATA.DOMElementEvents.indexOf(_Is.Is.array(entry) ? entry[0] : entry) == -1;
    });
  };

  // Remove non-custom attributes...
  var removeExistingAttributes = function removeExistingAttributes(arr) {
    return arr.filter(function (entry) {
      return _data.DATA.HTMLAttributes.indexOf(_Is.Is.array(entry) ? entry[0] : entry) == -1;
    });
  };

  // Process event listener attributes...
  var processEventListeners = exports.processEventListeners = function processEventListeners(arr) {
    return piper(lowerCaseListeners3, isolateEventListeners, removePrefixFromListeners)(arr);
  };

  // Process attribute data...
  var extractCustomProps = function extractCustomProps(arr) {
    return piper(lowerCaseListeners2, removeEventListeners, removeExistingAttributes)(arr);
  };

  // Process attribute data...
  var extractCustomPropNames = exports.extractCustomPropNames = function extractCustomPropNames(arr) {
    return piper(lowerCaseListeners1, removeEventListeners, removeExistingAttributes)(arr);
  };

  // NOT CURRENTLY IN USE...
  // Process attribute data...
  var processProps = exports.processProps = function processProps(arr) {
    return piper(lowerCaseListeners2, removeEventListeners)(arr);
  };

  // Create an object from the isolated event listener array, and the array width
  // the listeners removed...
  var processData = exports.processData = function processData(arr) {
    return {
      // The following object contains 2 arrays, 1 of the event listener attributes, appendChild
      // one of the remaining attributes...
      'eventListeners': processEventListeners(arr),
      'props': extractCustomProps(arr)
    };
  };

  // A function for converting a unicode string into a kebabCase string...
  var _shishKebab = function _shishKebab(string) {
    return (0, _words2.default)(string).reduce(function (result, word, ix) {
      return result + (ix ? '-' : '') + word.toLowerCase();
    }, '');
  };

  // A function for converting the func name to a custom tag name...
  var convertFuncNameToTagName = exports.convertFuncNameToTagName = function convertFuncNameToTagName(func) {
    return _shishKebab(func).indexOf('-') !== -1 ? _shishKebab(func) : func.toLowerCase() + '-';
  };

  // NO LONGER USED: Use Function.name instead... duh..
  // Function for extracting the func name from the function statement of the
  // function that called createElement...
  var extractFunctionName = exports.extractFunctionName = function extractFunctionName(element) {
    return functionRegExp.exec(element.toString()).toString().replace(functArgRegExp, '');
  };

  // A function for combining to Props objects into 1 new object...
  var combineObjects = function combineObjects(obj1, obj2) {
    return _extends({}, obj1, obj2);
  };

  // Removes the hyphen at the end of the component tag name...
  var capitalizeAndRemoveHyphen = function capitalizeAndRemoveHyphen(name) {
    return name[0].toUpperCase() + name.slice(1, name.length - 1);
  };

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /*
  logger.js
  
  This file contains the code for the various logging functions
  of the library.
  
  Author: Eric James Foster
  License: ISC
  */

  var colors = __webpack_require__(18);

  //DONE:90 Add second argument for log ID purposes, figure best way to approach this.
  //Console.log alias function.                                                  //DONE:140 Make sure date is logging properly.
  var log = function log(text, style, tyme) {
    var colr = Array.isArray(style) ? style[0] : style,
        styl = Array.isArray(style) ? style[1] : null,
        tym = tyme || false;

    var time = new Date(),
        hours = time.getHours(),
        mins = time.getMinutes(),
        secs = time.getSeconds();
    if (secs <= 9) {
      secs = '0' + String(secs);
    }
    if (mins <= 9) {
      mins = '0' + String(mins);
    }
    var abbr = hours >= 12 ? 'pm' : 'am';
    var stan = hours >= 13 ? hours - 12 : hours; //DONE:40 Either fix singular hours, or choose alternate.
    if (stan === 0) {
      hours = stan + 12;
    } else {
      hours = stan;
    }
    time = hours + ':' + mins + ':' + secs + abbr;

    var t = tym ? time : '';

    if (typeof document === 'undefined') {
      return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
    } else {
      var color = colr,
          bgColor = styl,
          css = 'background: ' + bgColor + '; color: ' + color;

      return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
    }
  };

  //Console.error alias function.
  var err = function err(text, tyme) {
    var colr = 'red',
        styl = 'bold',
        tym = tyme || false;

    var time = new Date(),
        hours = time.getHours(),
        mins = time.getMinutes(),
        secs = time.getSeconds();
    if (secs <= 9) {
      secs = '0' + String(secs);
    }
    if (mins <= 9) {
      mins = '0' + String(mins);
    }
    var abbr = hours >= 12 ? 'pm' : 'am';
    var stan = hours >= 13 ? hours - 12 : hours;
    if (stan === 0) {
      hours = stan + 12;
    } else {
      hours = stan;
    }
    time = hours + ':' + mins + ':' + secs + abbr;

    var t = tym ? time : '';

    if (typeof document === 'undefined') {
      return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
    } else {
      var color = colr,
          bgColor = '',
          css = 'background: ' + bgColor + '; color: ' + color;

      return console.error('%c' + text + '%s', css, '   '.repeat(10) + t);
    }
  };

  //Console.error alias function.
  var error = function error(text) {
    return console.error(text);
  };

  //Console.info alias function.
  var info = function info(text, tyme) {
    var colr = '#008cff',
        styl = 'bold',
        tym = tyme || false;

    var time = new Date(),
        hours = time.getHours(),
        mins = time.getMinutes(),
        secs = time.getSeconds();
    if (secs <= 9) {
      secs = '0' + String(secs);
    }
    if (mins <= 9) {
      mins = '0' + String(mins);
    }
    var abbr = hours >= 12 ? 'pm' : 'am';
    var stan = hours >= 13 ? hours - 12 : hours;
    if (stan === 0) {
      hours = stan + 12;
    } else {
      hours = stan;
    }
    time = hours + ':' + mins + ':' + secs + abbr;

    var t = tym ? time : '';

    if (typeof document === 'undefined') {
      colr = 'blueBright';
      return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
    } else {
      var color = colr,
          bgColor = '',
          css = 'background: ' + bgColor + '; color: ' + color;

      return console.info('%c' + text + '%s', css, '   '.repeat(10) + t);
    }
  };

  //Console.warn alias function.
  var warn = function warn(text, tyme) {
    var colr = 'orange',
        styl = 'bold',
        tym = tyme || false;

    var time = new Date(),
        hours = time.getHours(),
        mins = time.getMinutes(),
        secs = time.getSeconds();
    if (secs <= 9) {
      secs = '0' + String(secs);
    }
    if (mins <= 9) {
      mins = '0' + String(mins);
    }
    var abbr = hours >= 12 ? 'pm' : 'am';
    var stan = hours >= 13 ? hours - 12 : hours;
    if (stan === 0) {
      hours = stan + 12;
    } else {
      hours = stan;
    }
    time = hours + ':' + mins + ':' + secs + abbr;

    var t = tym ? time : '';

    if (typeof document === 'undefined') {
      colr = 'yellow';
      colr = 'blueBright';
      return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
    } else {
      var color = colr,
          bgColor = '',
          css = 'background: ' + bgColor + '; color: ' + color;

      return console.warn('%c' + text + '%s', css, '   '.repeat(10) + t);
    }
  };

  var inspect = function inspect(obj) {
    return console.log(obj);
  };

  module.exports = {
    log: log,
    err: err,
    info: info,
    warn: warn,
    inspect: inspect
  };

  /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Is = undefined;

  var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }(); /*
       Is.js
       
       A file containing a small type checking utility library...
       
       Eric James Foster, MIT License.
       */

  // Get data...


  var _data = __webpack_require__(4);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Is = exports.Is = function () {
    function Is() {
      _classCallCheck(this, Is);
    }

    _createClass(Is, null, [{
      key: 'eventListener',

      // Determines whether or not a prop is an event listener...
      value: function eventListener(name) {
        return (/on[A-Z]\w*/g.test(name) || _data.DATA.DOMElementEvents.indexOf(name.toLowerCase()) !== -1
        );
      }
      // Determines whether or not an attribute name is custom or not...

    }, {
      key: 'newPropName',
      value: function newPropName() {
        return _data.DATA.HTMLAttributes.indexOf(name.toLowerCase()) === -1;
      }

      // NOT CURRENTLY IN USE...
      // A boolean function for determining if a func has called for the first time...

    }, {
      key: 'newFunction',
      value: function newFunction(funcs, func) {
        return funcs.indexOf(func) == -1;
      }

      // Simple convenience function for determining if a value is
      // undefined or not...

    }, {
      key: 'undefined',
      value: function undefined(val) {
        return typeof val === 'undefined';
      }

      // Simple convenience function for determining if a value is
      // an object or not...

    }, {
      key: 'object',
      value: function object(val) {
        return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
      }

      // Simple convenience function for determining if a value is
      // a number or not...

    }, {
      key: 'number',
      value: function number(val) {
        return typeof val === 'number';
      }

      // Simple convenience function for determining if a value is
      // a string or not...

    }, {
      key: 'string',
      value: function string(val) {
        return typeof val === 'string';
      }

      // Simple convenience function for determining if a value is
      // a function or not...

    }, {
      key: 'function',
      value: function _function(val) {
        return typeof val === 'function';
      }

      // Simple convenience function for determining if a value is
      // a symbol or not...

    }, {
      key: 'symbol',
      value: function symbol(val) {
        return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'symbol';
      }

      // Simple convenience function for determining if a value is
      // a boolean or not...

    }, {
      key: 'boolean',
      value: function boolean(val) {
        return typeof val === 'boolean';
      }

      // A simple convenience function for determining if a value is
      // a class or not...

    }, {
      key: 'class',
      value: function _class(val) {
        return (/_classCallCheck/.test(String(val))
        );
      }

      // A simple convenience function for determining if a value is
      // a component or not...

    }, {
      key: 'component',
      value: function component(tagName) {
        return !tagName.indexOf('-') === -1 && true;
      }

      // A simple convenience function for determining if a value is
      // a function or not...

    }, {
      key: 'array',
      value: function array(val) {
        return Array.isArray(val);
      }

      // A function for confirming same type...

    }, {
      key: 'kin',
      value: function kin(val1, val2) {
        return (typeof val1 === 'undefined' ? 'undefined' : _typeof(val1)) === (typeof val2 === 'undefined' ? 'undefined' : _typeof(val2));
      }

      // A function for determining whether or not a propType is Required...

    }, {
      key: 'requiredProp',
      value: function requiredProp(types) {
        return types.length === 1;
      }
    }]);

    return Is;
  }();

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _logger = __webpack_require__(1);

  //TODO:20 browser detection functionality, noop(), merge(), toggle().

  var isArray = function isArray(arr) {
    return Array.isArray(arr);
  };
  /*
  utilities.js
  
  This file contains various functions for the library, either public or not,
  that don't fit into any other module.
  
  Author: Eric James Foster
  License: ISC
  */

  var isElement = function isElement(el) {
    if (el.element) {
      return true;
    } else {
      return false;
    }
  };

  var isDOMElement = function isDOMElement(el) {
    return el.tagName ? true : false;
  };

  /*This function combines querySelector and querySelectorAll, and becomes a noop if 'el' is a variable. There is an optional 2nd argument 'mod', that
  accepts the string 'all' to modify behaviour of the function. By default, 'mod' is null. If the string 'all' is passed as the 2nd argument, the function
  will use querySelectorAll() instead of querySelector(), meaning an array will be returned if possible. */
  var queryDOM = function queryDOM(el) {

    var lm = void 0,
        lms = [];

    if (typeof el === 'string') {
      if (el.charAt(0) === '.') {
        el = el.substring(1, el.length);

        lm = document.getElementsByClassName(el);

        if (lm.length !== 0) {
          if (lm.length === 1) {
            lms = lm[0];
          } else {
            for (var i = 0; i < lm.length; i++) {
              lms.push(lm[i]);
            }
          }
        } else {
          return null;
        }
      } else if (el.charAt(0) !== '#' && el.indexOf('[') === -1 && el.indexOf(':') === -1 && el.indexOf(' ') === -1) {
        lm = document.getElementsByTagName(el);

        if (lm.length !== 0) {
          if (lm.length === 1) {
            lms = lm[0];
          } else {
            for (var j = 0; j < lm.length; j++) {
              lms.push(lm.item(j));
            }
          }
        } else {
          return null;
        }
      } else {
        lm = document.querySelectorAll(el);
        if (lm.length <= 1) {
          lm = undefined;
          lm = document.querySelector(el);
          return lm;
        } else {
          return lm;
        }
      }
      return lms;
    } else {
      return el;
    }
  };

  /*This function copies the prototype object of a superConstructor to the prototype object
  of a constructor. It functions just like nodes' util.inherits function, it copies methods only,
  not internal properties.*/
  var proto = function proto(constructer, superConstructer) {
    construct.prototype = Object.create(superConstructer.prototype);
    constructer.prototype.constructor = constructer;
    return constructer;
  };

  /*This convenience function sets imported module function names as global variables, so that
  the module variable doesn't need to preface every function.*/
  var functions = function functions(funcs, module) {
    //TEST:110 Test this with other node_modules.
    var context = module || this;

    if (Array.isArray(funcs)) {
      funcs.forEach(function (func) {
        var evil = new Function('window.' + func + ' = ' + 'this.' + func + ';');
        evil.call(context);
      }, context);
    } else {
      (function () {
        var evil = new Function('window.' + funcs + ' = ' + 'this.' + funcs + ';');
        evil.call(context);
      }).apply(context);
    }
  };

  //This practically useless function will lock up the browser for a preset amount of time.
  var sleep = function sleep(milliseconds) {
    var start = new Date().getTime();
    while (true) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  };

  //This function will alternate function calls depending on the value of a global flag.
  function shifter(onFunc, offFunc) {
    window.toggleFlag = true;

    return function () {
      if (toggleFlag) {
        onFunc();
        toggleFlag = false;
      } else {
        offFunc();
        toggleFlag = true;
      }
    };
  };

  //Boolean function returns true if given function has given ancestor, and false otherwise. Checks 6 parents deep.
  function hasAncestor(l, ance) {
    var tick,
        ancestor,
        ancestors = [1, 2, 3, 4, 5];

    if (typeof ance === 'string') {
      ancestor = queryDOM(ance);
    } else {
      ancestor = ance;
    }

    ancestors[0] = l.parentNode;
    ancestors[1] = ancestors[0].parentNode;

    if (!!ancestors[1].parentNode) {
      ancestors[2] = ancestors[1].parentNode;
    }
    if (!!ancestors[2].parentNode) {
      ancestors[3] = ancestors[2].parentNode;
    }
    if (!!ancestors[3].parentNode) {
      ancestors[4] = ancestors[3].parentNode;
    }
    //For inspection....
    // var dir           = {};
    //     dir.ance      = ance;
    //     dir.l         = l;
    //     dir.ancestor  = ancestor;
    //     dir.ancestors = ancestors;
    //
    // console.log(dir);

    tick = 0;

    for (var i = 0; i < ancestors.length; i++) {
      if (ancestors[i] === ancestor) tick++;
    }
    if (tick > 0) return true;else return false;
  };

  function lookBehind(leftContextRE, matchRE, subject) {
    var returnMatch, match, leftContext;

    match = matchRE.exec(subject)[0];
    leftContext = subject.substring(0, subject.indexOf(match));

    if (leftContextRE.test(leftContext)) {
      returnMatch = match;
    } else {
      returnMatch = false;
    }

    return returnMatch;
  };

  function isMobile() {
    this.android = function () {
      return navigator.userAgent.match(/Android/i);
    };
    this.blackBerry = function () {
      return navigator.userAgent.match(/BlackBerry/i);
    }, this.iOS = function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }, this.operaMini = function () {
      return navigator.userAgent.match(/Opera Mini/i);
    }, this.windowsMobile = function () {
      return navigator.userAgent.match(/IEMobile/i);
    }, this.any = function () {
      return this.android() || this.blackBerry() || this.iOS() || this.operaMini() || this.windowsMobile();
    };
    return this.any();
  }

  module.exports = {
    queryDOM: queryDOM,
    functions: functions,
    isArray: isArray,
    isElement: isElement,
    isDOMElement: isDOMElement,
    shifter: shifter,
    sleep: sleep,
    proto: proto,
    hasAncestor: hasAncestor,
    lookBehind: lookBehind,
    isMobile: isMobile
  };

  /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /*
  data.js
  
  A file to hold information about HTML
  Elements...
  
  Eric James Foster, MIT License.
  */

  var DATA = exports.DATA = {
    DOMElementEvents: ['onabort', 'onauxclick', 'onbeforecopy', 'onbeforecut', 'onbeforepaste', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave', 'onpointermove', 'onpointerout', 'onpointerover', 'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsearch', 'onseeked', 'onseeking', 'onselect', 'onselectstart', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onvolumechange', 'onwaiting', 'onwebkitfullscreenchange', 'onwebkitfullscreenerror', 'onwheel'],
    HTMLAttributes: ['accept', 'accept-charset', 'accesskey', 'action', 'align', 'alt', 'async', 'autocomplete', 'autofocus', 'autoplay', 'bgcolor', 'border', 'charset', 'checked', 'cite', 'class', 'classname', 'color', 'cols', 'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords', 'data', 'datetime', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'dropzone', 'enctype', 'for', 'form', 'formaction', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'id', 'ismap', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'muted', 'name', 'novalidate', 'onabort', 'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onblur', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onhashchange', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpopstate', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsearch', 'onseeked', 'onseeking', 'onselect', 'onshow', 'onst', 'onstorage', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onunload', 'onvolumechange', 'onwaiting', 'onwheel', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'readonly', 'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox', 'scope', 'scoped', 'selected', 'shape', 'size', 'sizes', 'span', 'spellcheck', 'src', 'srcdoc', 'srclang', 'srcset', 'start', 'step', 'style', 'tabindex', 'target', 'title', 'translate', 'type', 'usemap', 'value', 'width', 'wrap'],
    ComponentLifecycleEvents: ['componentWillMount', 'componentWillUnmount', 'componentDidMount', 'componentDidUnmount', 'componentWillUpdate', 'componentDidUpdate', 'componentWillReceiveProps']

  };

  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Events = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }(); /*
       Dispatch.js
       Dispatch is the custom event creation and dispatch class behind
       the Valence component lifecycle methods...
       Eric James Foster, MIT License.
       */

  var _helpers = __webpack_require__(0);

  var _ = _interopRequireWildcard(_helpers);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // Globalize log function...
  var log = _.log;

  var Events = function () {
    function Events() {
      _classCallCheck(this, Events);
    }

    _createClass(Events, null, [{
      key: 'fire',

      // Using emerging js reflection to create a single method for dispatching
      // lifecycle event callbacks...
      value: function fire(event, target) {
        var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var lifecycleEvent = Reflect.construct(CustomEvent, [event, { 'detail': detail }]);
        return target.dispatchEvent(lifecycleEvent);
      }

      // Static class method for registering event listener callback methods on
      // a given HTMLElement...

    }, {
      key: 'registerCallbacks',
      value: function registerCallbacks(ctor, eListeners) {
        if (eListeners.length < 1) {
          return;
        } else {
          eListeners.forEach(function (eListener) {
            ctor.prototype[eListener[1]] = eListener[2];
          }, ctor);
        }
        return ctor;
      }
    }]);

    return Events;
  }();

  exports.Events = Events;

  /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Props = undefined;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }(); /*
       Props.js
       
       Valence, a JavaScript library for building UI's, with an API
       resembling that of React, but uses Vanilla JS Web components
       under the hood...This file handles  element
       property (props) creation, assignment etc...
       
       Eric James Foster, MIT License.
       */

  // Get utilities...

  //Get PropTypes...


  var _templateObject = _taggedTemplateLiteral(['customProps'], ['customProps']);

  var _helpers = __webpack_require__(0);

  var _ = _interopRequireWildcard(_helpers);

  var _Is = __webpack_require__(2);

  var _PropTypes = __webpack_require__(9);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var dir = console.dir;
  var log = _.log;

  var Props = function () {
    function Props(props) {
      _classCallCheck(this, Props);

      var propPairs = Object.entries(props);
      var ppLength = propPairs.length;
      var i = 0;
      while (ppLength > 0) {
        this[propPairs[i][0]] = propPairs[i][1];
        ppLength--;
        i++;
      }
    }

    // An internal method for applying the default props when none are supplied...


    _createClass(Props, null, [{
      key: '_applyDefault',
      value: function _applyDefault(defaultProps, propName) {
        return defaultProps[propName];
      }

      // An object to hold prop types for type checking purposes...

    }, {
      key: 'validate',
      value: function validate(props, propNames, component) {
        var _this = this;

        // Cycle through props, comparing it's value type with it's expected propType...
        var validatedProps = propNames.reduce(function (propsObj, propName) {
          // Store types, default props, prop value and value type...
          var types = null,
              defProps = null,
              propValue = props[propName],
              valueType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

          // Don't want to attempt to access propTypes or defaultProps if they don't exist.
          // but if they do, store them...
          if (component.propTypes[propName]) {
            types = component.propTypes[propName].types;
          }
          if (component.defaultProps) {
            defProps = component.defaultProps;
          }

          // If prop is undefined...
          if (propValue === undefined) {
            // but propType specifies `required`...
            if (_Is.Is.requiredProp(types)) {
              // If we have defaultProp...
              if (defProps) {
                // Apply it to props object...
                propValue = _this._applyDefault(defProps, propName);
                return _extends({}, propsObj, _defineProperty({}, propName, propValue));
                // Else, output warning to the console, and pass undefined prop to props object...
              } else {
                console.warn('Warning: Failed PropType: Required prop `' + propName + '` is undefined.');
                return _extends({}, propsObj, _defineProperty({}, propName, propValue));
              }
            } /*else (who cares) {}*/
            // Or, if value type is not among propTypes' specified types...
          } else if (types.indexOf(valueType) === -1) {
            // output warning to console, and add our value to the props object....
            console.warn('Warning: Failed PropType: Prop `' + propName + '` was given a value of type `' + valueType + '`, expected `' + types[0] + '`.');
            return _extends({}, propsObj, _defineProperty({}, propName, propValue));
            // Else, everything is just as it should be. Add value to props object...
          } else {
            return _extends({}, propsObj, _defineProperty({}, propName, propValue));
          }
        }, {});
        // Return the props object...
        return _extends({}, props, validatedProps);
      }

      // A simple boolean for determining if prop is custom or not...

    }, {
      key: '_isPrivateProp',
      value: function _isPrivateProp(name) {
        return _Is.Is.eventListener(name) || name === 'forceUpdate' || name === 'isStatefulComponent' || name === 'isStatelessComponent' || name === 'ref';
      }

      // Method for updating props...

    }, {
      key: 'update',
      value: function update(elem, newProps) {
        var _this2 = this;

        var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var updateProp = void 0;

        // Check if the given prop on the given element needs updated or not,
        // and update, add or remove it...
        updateProp = function updateProp(elem, name, newVal, oldVal) {
          if (!newVal) {
            _this2.remove(elem, name, oldVal);
          } else if (!oldVal || newVal !== oldVal) {
            _this2.set(elem, name, newVal);
          }
        };

        // Combine old and new props into 1 new object...
        var props = _.combineObjects(newProps, oldProps);
        // Get an array of unique props keys and use it to iterate through
        // both objects comparing for differences and update requirements...
        Object.keys(props).forEach(function (name) {
          updateProp(elem, name, newProps[name], oldProps[name]);
        });
      }

      // Set given attributes on the created element....

    }, {
      key: 'set',
      value: function set(elem, props) {
        var _this3 = this;

        var setProp = void 0,
            setBooleanProp = void 0;

        // A function for setting boolean properties on elements...
        setBooleanProp = function setBooleanProp(elem, name, value) {
          if (value) {
            elem.setAttribute(name, value);
            elem[name] = true;
          } else {
            elem[name] = false;
          }
        };

        // A function for setting props...
        setProp = function setProp(elem, name, value) {
          if (_this3._isPrivateProp(name)) {
            return;
          } else if (name === 'classname') {
            elem.setAttribute('class', value);
          } else if (_Is.Is.boolean(value)) {
            setBooleanProp(elem, name, value);
          } else {
            elem.setAttribute(name, value);
          }
        };

        // Remove event listeners from attributes...
        var propsArray = _.propsArray(props);

        // Determine if elem is a string or a Component...
        if (propsArray.length > 0) {
          // dir(filteredProps)
          // Add attributes to element...
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = propsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var prop = _step.value;

              setProp(elem, prop[0], prop[1]);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        // Return element...
        return elem;
      }

      // Method for setting up a list of observed attributes. These attributes
      // will trigger the attributesChangedCallback method on the custom
      // element when changed in any way...

    }, {
      key: 'registerObserved',
      value: function registerObserved(ctor, propNames) {
        Object.defineProperties(ctor.prototype, {
          observedAttributes: {
            get: function get() {
              return propNames;
            }
          }
        });
      }

      // Method for setting custom attributes of custom elements...

    }, {
      key: 'registerCustom',
      value: function registerCustom(ctor, propNames) {
        log(_templateObject);
        dir(ctor.prototype);
        propNames.forEach(function (prop) {
          Object.defineProperties(ctor.prototype, _defineProperty({}, prop, {
            get: function get() {
              return this.hasAttribute(prop);
            },
            set: function set(val) {
              if (val) {
                this.setAttribute(prop, val);
              } else {
                this.removeAttribute(prop);
              }
            }
          }));
        }, ctor);
        return ctor;
      }

      // A method for removing Properties...

    }, {
      key: 'remove',
      value: function remove(elem, name, value) {
        // A function for removing boolean properties...
        var removeBooleanProp = function removeBooleanProp(elem, name) {
          elem.removeAttribute(name);
          elem[name] = false;
        };

        // Remove Properties...
        if (this._isPrivateProp(name)) {
          return;
        } else if (name === 'classname') {
          elem.removeAttribute('class');
        } else if (_Is.Is.boolean(value)) {
          removeBooleanProp(elem, name);
        } else {
          elem.removeAttribute(name);
        }
      }
    }]);

    return Props;
  }();

  exports.Props = Props;

  /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

  var root = __webpack_require__(25);

  /** Built-in value references. */
  var _Symbol = root.Symbol;

  module.exports = _Symbol;

  /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var root = __webpack_require__(25);

  /** Built-in value references. */
  var _Symbol = root.Symbol;

  module.exports = _Symbol;

  /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Node = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }(); /*
       Node.js
       
       Form is the virtual dom layer of a Valence app that interfaces
       with the actual DOM via the DOM API, making adjustments
       to the UI in an inexpensive and effecient manner. This file houses
       the Node Class which is a basic virtual dom node
       
       Eric James Foster, MIT License.
       */

  // Get utilities...

  // Get Element class for createElement function...

  // Get Component class for createComponent function...

  // Get Props...

  // Get PropTypes...


  var _helpers = __webpack_require__(0);

  var _ = _interopRequireWildcard(_helpers);

  var _Is = __webpack_require__(2);

  var _Element = __webpack_require__(37);

  var _Component = __webpack_require__(13);

  var _Props = __webpack_require__(6);

  var _PropTypes = __webpack_require__(9);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // Globalize common utilities...
  var dir = console.dir;
  var log = _.log;

  // Form Virtual DOM Node...

  var Node = function () {
    // Node type instance constructor...
    function Node(_ref) {
      var type = _ref.type,
          props = _ref.props,
          children = _ref.children;

      _classCallCheck(this, Node);

      this.type = type;
      // If no props, make sure an empty object is created...
      var _props = props || {};
      this.props = new _Props.Props(_props);
      this.children = children;
    }

    // Either create the given element, or if it's a component, define the element then
    // create it...


    _createClass(Node, null, [{
      key: 'createNode',
      value: function createNode(node) {
        if (_Is.Is.string(node)) {
          // Create and return the given text node...
          return document.createTextNode(node);
        } else {
          // Declare tag var..
          var tagName = void 0;

          // Determine if elem is an element or a Component...
          // If it's a function....
          if (_Is.Is.function(node.type)) {
            var props = node.props,
                elementConstructor = node.type;

            // Extract function name...
            var funcName = node.type.name;
            // Convert the given function name to it's corresponding component tagname...
            tagName = _.convertFuncNameToTagName(funcName);

            // Determine if it's a class...
            if (!_Is.Is.class(node.type)) {

              // Set up component creation, first arg..
              var component = [tagName, node.type];

              // Return completed component...
              elementConstructor = _Component.Component.createComponent(component, node.props, node.children);
              // Add `isStatelessComponent` property so that the shim flags can be
              // reset after element creation...
              node.props.isStatelessComponent = true;
            } else {
              // Add `isStatefulComponent` privateProp for update purposes...
              node.props.isStatefulComponent = true;
            }

            // Get customPropNames for custom prop registration, and propNames for validation...
            var customPropNames = _.extractCustomPropNames(_.propNames(node.props));
            // If user registered proptypes on the component, proceed with prop validation...
            if (node.type.propTypes) {
              var propNames = _.propNames(node.type.propTypes);
              // Validate that all supplied prop value types match that of registered propTypes...
              props = _Props.Props.validate(node.props, propNames, node.type);
            }

            // Register custom element attributes...
            _Props.Props.registerCustom(elementConstructor, customPropNames);

            // Register all element attributes as observedAttributes...
            _Props.Props.registerObserved(elementConstructor, props);

            // Use Custom elements API to define a custom tag/component...
            window.customElements.define(tagName, elementConstructor);

            // Set node.type to tagName of the component, and props to the amended props
            // object...
            node.props = props;
            node.type = tagName;
          }
          // Use DOM API (via Valence Element class) to create element and return it...
          return _Element.Element.createElement(node);
        }
      }
    }]);

    return Node;
  }();

  exports.Node = Node;

  /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /*
  PropTypes.js
  
  Valence, a JavaScript library for building UI's, with an API
  resembling that of React, but uses Vanilla JS Web components
  under the hood...This file handles property type-checking
  functionality...
  
  Eric James Foster, MIT License.
  */

  var PropTypes = exports.PropTypes = function PropTypes() {
    _classCallCheck(this, PropTypes);
  };

  PropTypes.boolean = {
    types: ['boolean', 'undefined'],
    isRequired: {
      types: ['boolean']
    }
  };
  PropTypes.number = {
    types: ['number', 'undefined'],
    isRequired: {
      types: ['number']
    }
  };
  PropTypes.string = {
    types: ['string', 'undefined'],
    isRequired: {
      types: ['string']
    }
  };
  PropTypes.symbol = {
    types: ['symbol', 'undefined'],
    isRequired: {
      types: ['symbol']
    }
  };
  PropTypes.object = {
    types: ['object', 'undefined'],
    isRequired: {
      types: ['number']
    }
  };
  PropTypes.array = {
    types: ['array', 'undefined'],
    isRequired: {
      types: ['array']
    }
  };

  /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
  };
  /*
  Element.js
  
  This is a helper file for the elements.js index, which houses
  the code for the Element Class.
  
  Author: Eric James Foster
  License: ISC
  */

  exports.default = Element;

  var _logger = __webpack_require__(1);

  var _utilities = __webpack_require__(3);

  var _events = __webpack_require__(11);

  var events = _interopRequireWildcard(_events);

  var _DOM = __webpack_require__(12);

  var DOM = _interopRequireWildcard(_DOM);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  //DOING:10 List all functions that need to be added (.textContent, innerHTML etc.)
  //DOING:20 Complete all functions for this object.

  function Element(el) {
    if ((0, _utilities.isArray)(el)) {
      this.els = el;
    } else {
      this.el = el;
      this.element = true;
    }

    var self = this;

    if (!(this instanceof Element)) {
      return new Element();
    }

    // Style methods //

    this.border = function (val) {
      if (val !== undefined) {
        el.style.border = val;
        return this;
      } else {
        val = el.style.border;
        return val;
      }
    };
    this.bg = function (val) {
      if (val !== undefined) {
        el.style.background = val;
        return this;
      } else {
        val = el.style.background;
        return val;
      }
    };
    this.bgColor = function (val) {
      if (val !== undefined) {
        el.style.backgroundColor = val;
        return this;
      } else {
        val = el.style.backgroundColor;
        return val;
      }
    };
    this.bgImage = function (val) {
      if (val !== undefined) {
        el.style.backgroundImage = val;
        return this;
      } else {
        val = el.style.backgroundImage;
        return val;
      }
    };
    this.bgSize = function (val) {
      if (val !== undefined) {
        el.style.backgroundSize = val;
        return this;
      } else {
        val = el.style.backgroundSize;
        return val;
      }
    };
    this.bgPosition = function (val) {
      if (val !== undefined) {
        el.style.backgroundPosition = val;
        return this;
      } else {
        val = el.style.backgroundPosition;
        return val;
      }
    };
    this.borderColor = function (val) {
      if (val !== undefined) {
        el.style.borderColor = val;
        return this;
      } else {
        val = el.style.borderColor;
        return val;
      }
    };
    this.borderRadius = function (val) {
      if (val !== undefined) {
        el.style.borderRadius = val;
        return this;
      } else {
        val = el.style.borderRadius;
        return val;
      }
    };
    this.borderWidth = function (val) {
      if (val !== undefined) {
        el.style.borderWidth = val;
        return this;
      } else {
        val = el.style.borderWidth;
        return val;
      }
    };
    this.borderTop = function (val) {
      if (val !== undefined) {
        el.style.borderTop = val;
        return this;
      } else {
        val = el.style.borderTop;
        return val;
      }
    };
    this.borderBottom = function (val) {
      if (val !== undefined) {
        el.style.borderBottom = val;
        return this;
      } else {
        val = el.style.borderBottom;
        return val;
      }
    };
    this.borderRight = function (val) {
      if (val !== undefined) {
        el.style.borderRight = val;
        return this;
      } else {
        val = el.style.borderRight;
        return val;
      }
    };
    this.borderLeft = function (val) {
      if (val !== undefined) {
        el.style.borderLeft = val;
        return this;
      } else {
        val = el.style.borderLeft;
        return val;
      }
    };
    this.bottom = function (val) {
      if (val !== undefined) {
        el.style.bottom = val;
        return this;
      } else {
        val = el.style.bottom;
        return val;
      }
    };
    this.boxShadow = function (val) {
      if (val !== undefined) {
        el.style.boxShadow = val;
        return this;
      } else {
        val = el.style.boxShadow;
        return val;
      }
    };
    this.boxSizing = function (val) {
      if (val !== undefined) {
        el.style.boxSizing = val;
        return this;
      } else {
        val = el.style.boxSizing;
        return val;
      }
    };
    this.clear = function (val) {
      if (val !== undefined) {
        el.style.clear = val;
        return this;
      } else {
        val = el.style.clear;
        return val;
      }
    };
    this.color = function (val) {
      if (val !== undefined) {
        el.style.color = val;
        return this;
      } else {
        val = el.style.color;
        return val;
      }
    };
    this.columns = function (val) {
      if (val !== undefined) {
        el.style.columns = val;
        return this;
      } else {
        val = el.style.columns;
        return val;
      }
    };
    this.content = function (val) {
      if (val !== undefined) {
        el.style.content = val;
        return this;
      } else {
        val = el.style.content;
        return val;
      }
    };
    this.cursor = function (val) {
      if (val !== undefined) {
        el.style.cursor = val;
        return this;
      } else {
        val = el.style.cursor;
        return val;
      }
    };
    this.direction = function (val) {
      if (val !== undefined) {
        el.style.direction = val;
        return this;
      } else {
        val = el.style.direction;
        return val;
      }
    };
    this.display = function (val) {
      if (val !== undefined) {
        el.style.display = val;
        return this;
      } else {
        val = el.style.display;
        return val;
      }
    };
    this.cssFloat = function (val) {
      if (val !== undefined) {
        el.style.cssFloat = val;
        return this;
      } else {
        val = el.style.cssFloat;
        return val;
      }
    };
    this.font = function (val) {
      if (val !== undefined) {
        el.style.font = val;
        return this;
      } else {
        val = el.style.font;
        return val;
      }
    };
    this.fontFamily = function (val) {
      if (val !== undefined) {
        el.style.fontFamily = val;
        return this;
      } else {
        val = el.style.fontFamily;
        return val;
      }
    };
    this.fontStyle = function (val) {
      if (val !== undefined) {
        el.style.fontStyle = val;
        return this;
      } else {
        val = el.style.fontStyle;
        return val;
      }
    };
    this.fontSize = function (val) {
      if (val !== undefined) {
        el.style.fontSize = val;
        return this;
      } else {
        val = el.style.fontSize;
        return val;
      }
    };
    this.fontWeight = function (val) {
      if (val !== undefined) {
        el.style.fontWeight = val;
        return this;
      } else {
        val = el.style.fontWeight;
        return val;
      }
    };
    this.height = function (val) {
      if (val !== undefined) {
        el.style.height = val;
        return this;
      } else {
        val = el.style.height;
        return val;
      }
    };
    this.lineHeight = function (val) {
      if (val !== undefined) {
        el.style.lineHeight = val;
        return this;
      } else {
        val = el.style.lineHeight;
        return val;
      }
    };
    this.icon = function (val) {
      if (val !== undefined) {
        el.style.icon = val;
        return this;
      } else {
        val = el.style.icon;
        return val;
      }
    };
    this.left = function (val) {
      if (val !== undefined) {
        el.style.left = val;
        return this;
      } else {
        val = el.style.left;
        return val;
      }
    };
    this.listStyle = function (val) {
      if (val !== undefined) {
        el.style.listStyle = val;
        return this;
      } else {
        val = el.style.listStyle;
        return val;
      }
    };
    this.margin = function (val) {
      if (val !== undefined) {
        el.style.margin = val;
        return this;
      } else {
        val = el.style.margin;
        return val;
      }
    };
    this.marginRight = function (val) {
      if (val !== undefined) {
        el.style.marginRight = val;
        return this;
      } else {
        val = el.style.marginRight;
        return val;
      }
    };
    this.marginLeft = function (val) {
      if (val !== undefined) {
        el.style.marginLeft = val;
        return this;
      } else {
        val = el.style.marginLeft;
        return val;
      }
    };
    this.marginTop = function (val) {
      if (val !== undefined) {
        el.style.marginTop = val;
        return this;
      } else {
        val = el.style.marginTop;
        return val;
      }
    };
    this.marginBottom = function (val) {
      if (val !== undefined) {
        el.style.marginBottom = val;
        return this;
      } else {
        val = el.style.marginBottom;
        return val;
      }
    };
    this.maxHeight = function (val) {
      if (val !== undefined) {
        el.style.maxHeight = val;
        return this;
      } else {
        val = el.style.maxHeight;
        return val;
      }
    };
    this.maxWidth = function (val) {
      if (val !== undefined) {
        el.style.maxWidth = val;
        return this;
      } else {
        val = el.style.maxWidth;
        return val;
      }
    };
    this.minWidth = function (val) {
      if (val !== undefined) {
        el.style.minWidth = val;
        return this;
      } else {
        val = el.style.minWidth;
        return val;
      }
    };
    this.minHeight = function (val) {
      if (val !== undefined) {
        el.style.minHeight = val;
        return this;
      } else {
        val = el.style.minHeight;
        return val;
      }
    };
    this.opacity = function (val) {
      if (val !== undefined) {
        el.style.opacity = val;
        return this;
      } else {
        val = el.style.opacity;
        return val;
      }
    };
    this.outline = function (val) {
      if (val !== undefined) {
        el.style.outline = val;
        return this;
      } else {
        val = el.style.outline;
        return val;
      }
    };
    this.overflow = function (val) {
      if (val !== undefined) {
        el.style.overflow = val;
        return this;
      } else {
        val = el.style.overflow;
        return val;
      }
    };
    this.overflowX = function (val) {
      if (val !== undefined) {
        el.style.overflowX = val;
        return this;
      } else {
        val = el.style.overflowX;
        return val;
      }
    };
    this.overflowY = function (val) {
      if (val !== undefined) {
        el.style.overflowY = val;
        return this;
      } else {
        val = el.style.overflowY;
        return val;
      }
    };
    this.padding = function (val) {
      if (val !== undefined) {
        el.style.padding = val;
        return this;
      } else {
        val = el.style.padding;
        return val;
      }
    };
    this.paddingRight = function (val) {
      if (val !== undefined) {
        el.style.paddingRight = val;
        return this;
      } else {
        val = el.style.paddingRight;
        return val;
      }
    };
    this.paddingLeft = function (val) {
      if (val !== undefined) {
        el.style.paddingLeft = val;
        return this;
      } else {
        val = el.style.paddingLeft;
        return val;
      }
    };
    this.paddingTop = function (val) {
      if (val !== undefined) {
        el.style.paddingTop = val;
        return this;
      } else {
        val = el.style.paddingTop;
        return val;
      }
    };
    this.paddingBottom = function (val) {
      if (val !== undefined) {
        el.style.paddingBottom = val;
        return this;
      } else {
        val = el.style.paddingBottom;
        return val;
      }
    };
    this.position = function (val) {
      if (val !== undefined) {
        el.style.position = val;
        return this;
      } else {
        val = el.style.position;
        return val;
      }
    };
    this.right = function (val) {
      if (val !== undefined) {
        el.style.right = val;
        return this;
      } else {
        val = el.style.right;
        return val;
      }
    };
    this.top = function (val) {
      if (val !== undefined) {
        el.style.top = val;
        return this;
      } else {
        val = el.style.top;
        return val;
      }
    };

    this.transform = function (val) {
      this.el.style.transform = val;

      return this;
    };

    //<<========= Transform Methods ======================>>

    this.turn = function (val) {
      this.el.style.transform = 'rotate(' + String(val) + 'deg)';

      return this;
    };

    this.turnX = function (val) {
      this.el.style.transform = 'rotateX(' + String(val) + 'deg)';

      return this;
    };

    this.turnY = function (val) {
      this.el.style.transform = 'rotateY(' + String(val) + 'deg)';

      return this;
    };

    this.turnZ = function (val) {
      this.el.style.transform = 'rotateZ(' + String(val) + 'deg)';

      return this;
    };

    this.textAlign = function (val) {
      if (val !== undefined) {
        el.style.textAlign = val;
        return this;
      } else {
        val = el.style.textAlign;
        return val;
      }
    };
    this.textDecoration = function (val) {
      if (val !== undefined) {
        el.style.textDecoration = val;
        return this;
      } else {
        val = el.style.textDecoration;
        return val;
      }
    };
    this.textShadow = function (val) {
      if (val !== undefined) {
        el.style.textShadow = val;
        return this;
      } else {
        val = el.style.textShadow;
        return val;
      }
    };
    this.verticalAlign = function (val) {
      if (val !== undefined) {
        el.style.verticalAlign = val;
        return this;
      } else {
        val = el.style.verticalAlign;
        return val;
      }
    };
    this.visibility = function (val) {
      if (val !== undefined) {
        el.style.visibility = val;
        return this;
      } else {
        val = el.style.visibility;
        return val;
      }
    };
    this.whiteSpace = function (val) {
      if (val !== undefined) {
        el.style.whiteSpace = val;
        return this;
      } else {
        val = el.style.whiteSpace;
        return val;
      }
    };
    this.width = function (val) {
      if (val !== undefined) {
        el.style.width = val;
        return this;
      } else {
        val = el.style.width;
        return val;
      }
    };
    this.wordSpacing = function (val) {
      if (val !== undefined) {
        el.style.wordSpacing = val;
        return this;
      } else {
        val = el.style.wordSpacing;
        return val;
      }
    };
    this.zIndex = function (val) {
      if (val !== undefined) {
        el.style.zIndex = val;
        return this;
      } else {
        val = el.style.zIndex;
        return val;
      }
    };
    this.alignContent = function (val) {
      if (browser.safari && browser.version >= 7) {
        if (val !== undefined) {
          el.style.WebkitAlignContent = val;
          return this;
        } else {
          val = el.style.WebkitAlignContent;
          return val;
        }
      } else {
        if (val !== undefined) {
          el.style.alignContent = val;
          return this;
        } else {
          val = el.style.alignContent;
          return val;
        }
      }
    };
    this.transformOrigin = function (val) {
      if (browser.webkit) {
        if (val !== undefined) {
          el.style.WebkitTransformOrigin = val;
          return this;
        } else {
          val = el.style.WebkitTransformOrigin;
          return val;
        }
      } else {
        if (val !== undefined) {
          el.style.transformOrigin = val;
          return this;
        } else {
          val = el.style.transformOrigin;
          return val;
        }
      }
    };
    this.transition = function (val) {
      if (browser.safari) {
        if (val !== undefined) {
          el.style.WebkitTransition = val;
          return this;
        } else {
          val = el.style.WebkitTransition;
          return val;
        }
      } else {
        if (val !== undefined) {
          el.style.transition = val;
          return this;
        } else {
          val = el.style.transition;
          return val;
        }
      }
    };
    this.transitionDuration = function (val) {
      if (browser.safari) {
        if (val !== undefined) {
          el.style.WebkitTransitionDuration = val;
          return this;
        } else {
          val = el.style.WebkitTransitionDuration;
          return val;
        }
      } else {
        if (val !== undefined) {
          el.style.transitionDuration = val;
          return this;
        } else {
          val = el.style.transitionDuration;
          return val;
        }
      }
    };
    this.animation = function (val) {
      if (browser.webkit) {
        if (val !== undefined) {
          el.style.WebkitAnimation = val;
          return this;
        } else {
          val = el.style.WebkitAnimation;
          return val;
        }
      } else {
        if (val !== undefined) {
          el.style.animation = val;
          return this;
        } else {
          val = el.style.animation;
          return val;
        }
      }
    };
    this.filter = function (val) {
      if (browser.webkit) {
        if (val !== undefined) {
          el.style.WebkitFilter = val;
          return this;
        } else {
          val = el.style.WebkitFilter;
          return val;
        }
      } else {
        if (val !== undefined) {
          el.style.filter = val;
          return this;
        } else {
          val = el.style.filter;
          return val;
        }
      }
    };
    this.flex = function (val) {
      if (browser.safari) {
        if (val !== undefined) {
          el.style.WebkitFlex = val;
          return this;
        } else {
          val = el.style.WebkitFlex;
          return val;
        }
      } else {
        if (val !== undefined) {
          el.style.flex = val;
          return this;
        } else {
          val = el.style.flex;
          return val;
        }
      }
    };
    this.perspective = function (val) {
      if (browser.webkit) {
        if (val !== undefined) {
          el.style.WebkitPerspective = val;
          return this;
        } else {
          val = el.style.WebkitPerspective;
          return val;
        }
      } else {
        if (val !== undefined) {
          el.style.perspective = val;
          return this;
        } else {
          val = el.style.perspective;
          return val;
        }
      }
    };
    this.perspectiveOrigin = function (val) {
      if (browser.webkit) {
        if (val !== undefined) {
          el.style.WebkitPerspectiveOrigin = val;
          return this;
        } else {
          val = el.style.WebkitPerspectiveOrigin;
          return val;
        }
      } else {
        if (val !== undefined) {
          el.style.perspectiveOrigin = val;
          return this;
        } else {
          val = el.style.perspectiveOrigin;
          return val;
        }
      }
    };
    this.transitionDelay = function (val) {
      if (browser.safari) {
        if (val !== undefined) {
          el.style.WebkitTransitionDelay = val;
          return this;
        } else {
          val = el.style.WebkitTransitionDelay;
          return val;
        }
      } else {
        if (val !== undefined) {
          el.style.transitionDelay = val;
          return this;
        } else {
          val = el.style.transitionDelay;
          return val;
        }
      }
    };

    // Element object methods //

    /*This function is a wrapper that allows the developer to create an anonymous function that has
    access to the core element object and its' methods... Meaning, that methods not incuded in this library
    can still be used in a chain-like fashion.  # example:
    <'#header'/>
          .height('200px')
          .width('800px')
          .backgroundColor('red')
          .text('elements.js')
          .core(el=>
           {    el.lang = 'spanish';
                el.jackAss();
                el.nodeValue = this;
                el.normalize();   }
               )
          .put('body')
    */
    this.core = function (func) {
      var obj = arguments.length <= 1 || arguments[1] === undefined ? 'el' : arguments[1];

      if (obj === 'style') func(this.el.style);else if (obj === 'el') func(this.el);else (0, _logger.err)('Invalid Argument.');

      return this;
    };

    this.add = function (child) {
      child = DOM.el(child);
      this.el.appendChild(child);
      return this;
    };

    this.children = function (s) {
      var count = void 0,
          arr = [];
      if (s === 'all') {
        count = this.el.childNodes;
      } else {
        count = this.el.children;
      }
      for (var i = 0; i < count.length; i++) {
        arr.push(new Element(count[i]));
      }
      return new Element(arr);
    };

    this.child = function () {
      var count = void 0;
      if ((0, _utilities.isArray)(this.el.children)) {
        var _count = this.el.children;
        _count = _count[0];
      } else {
        var _count2 = this.el.children;
      }
      return new Element(count);
    };

    this.first = function (s) {
      //TEST:30 Make sure this works.
      var sib = s === 'node' ? this.el.firstChild : this.el.firstElementChild;
      return new Element(sib);
    };

    this.second = function (s) {
      //TEST:30 Make sure this works.
      var sib = s === 'node' ? this.el.firstChild.nextSibling : this.el.firstElementChild.nextElementSibling;
      return new Element(sib);
    };

    this.third = function (s) {
      var varb = el.firstElementChild.nextElementSibling,
          varb2 = el.firstChild.nextSibling,


      //TEST:30 Make sure this works.
      sib = s === 'node' ? varb2.nextSibling : varb.nextElementSibling;
      return new Element(sib);
    };

    this.last = function (s) {
      //TEST:30 Make sure this works.
      var sib = s === 'node' ? this.el.lastChild : this.el.lastElementChild;
      return new Element(sib);
    };

    this.id = function (val) {
      if (val !== undefined) {
        this.el.id = val;
        return this;
      } else {
        val = this.el.id;
        return val;
      }
    };

    this.class = function (val) {
      var mod = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (val !== undefined) {
        if (null !== mod) {
          if (mod === '+') {
            this.el.classList.add(val);
            return this;
          } else if (mod == '-') {
            this.el.classList.remove(val);
            return this;
          } else {
            (0, _logger.err)('Invalid Argument');
          }
        } else {
          this.el.className = val;
          return this;
        }
      } else {
        val = this.el.className;
        return val;
      }
    };

    this.x = function (elem) {
      var child = DOM.el(elem);
      this.el.removeChild(child);
      return this;
    };

    this.xClass = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (cb !== null) {
        cb();
      }
      this.el.className = '';
      return this;
    };

    this.html = function (val) {
      var mod = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (val !== undefined) {
        if (null !== mod) {
          if (mod === '+') {
            this.el.innerHTML += val;
            return this;
          } else {
            (0, _logger.err)('Invalid Argument');
          }
        } else {
          this.el.innerHTML = val;
          return this;
        }
      } else {
        val = this.el.innerHTML;
        return val;
      }
    };

    this.text = function (val) {
      var mod = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (val !== undefined) {
        if (null !== mod) {
          if (mod === '+') {
            this.el.textContent += val;
            return this;
          } else {
            (0, _logger.err)('Invalid Argument');
          }
        } else {
          this.el.textContent = val;
          return this;
        }
      } else {
        val = this.el.textContent;
        return val;
      }
    };

    this.lang = function (val) {
      if (val !== undefined) {
        this.el.lang = val;
        return this;
      } else {
        val = this.el.lang;
        return val;
      }
    };

    this.clone = function (deep) {
      var node = this.el.cloneNode(deep);
      return node;
    };

    this.sib = function (ord) {
      var r = void 0;

      if (ord === 'next') {
        r = this.el.nextElementSibling;
      } else if (ord === 'prev') {
        r = this.el.previousElementSibling;
      } else {
        (0, _logger.err)('Invalid argument.');
      }
      return new Element(r);
    };

    this.node = function (ord) {
      var r = void 0;

      if (ord === 'next') {
        r = this.el.nextSibling;
      } else if (ord === 'prev') {
        r = this.el.previousSibling;
      } else {
        (0, _logger.err)('Invalid argument.');
      }
      return new Element(r);
    };

    this.value = function (val) {
      if (val !== undefined) {
        this.el.nodeValue = val;
        return this;
      } else {
        val = this.el.nodeValue;
        return val;
      }
    };

    this.normalize = function () {
      this.el.normalize();
      return this;
    };

    this.toString = function () {
      var r = this.el.toString();
      return r;
    };

    this.tag = function () {
      var r = this.el.tagName;
      return r;
    };

    this.fromTop = function () {
      //TODO
      var r = this.el.offsetTop;

      return r;
    };

    this.fromLeft = function () {
      var r = this.el.offsetLeft;

      return r;
    };

    this.offset = function () {
      var off = {};

      off.top = this.el.offsetTop;
      off.left = this.el.offsetLeft;
      off.height = this.el.offsetHeight;
      off.width = this.el.offsetWidth;
      off.parent = this.el.offsetParent;

      return off;
    };

    this.scrolled = function (val) {
      if (val !== undefined) {
        el.scrollTop = val;
        return this;
      } else if (val === 0) {
        el.scrollTop = 0;
        return this;
      } else {
        val = el.scrollTop;
        return val;
      }
    };

    this.scrollLeft = function (val) {
      if (val !== undefined) {
        el.scrollLeft = val;
        return this;
      } else {
        val = el.scrollLeft;
        return val;
      }
    };

    this.scrollHeight = function (val) {
      if (val !== undefined) {
        el.scrollHeight = val;
        return this;
      } else {
        val = el.scrollHeight;
        return val;
      }
    };

    this.scrollWidth = function (val) {
      if (val !== undefined) {
        el.scrollWidth = val;
        return this;
      } else {
        val = el.scrollWidth;
        return val;
      }
    };

    this.title = function (val) {
      if (val !== undefined) {
        this.el.title = val;
        return this;
      } else {
        val = this.el.title;
        return val;
      }
    };

    this.put = function (mom) {
      DOM.put(this.el, mom);
      return this;
    };

    this.ma = function () {
      return new Element(this.el.parentNode);
    };

    this.fore = function (elem) {
      var ref = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      elem = (0, _utilities.queryDOM)(elem); //TEST:20 Make sure this works.
      ref === null ? elem.parentNode.insertBefore(this.el, elem) : this.el.parentNode.insertBefore(elem, this.el);

      return this;
    };

    this.aft = function (elem) {
      var ref = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      elem = (0, _utilities.queryDOM)(elem); //TEST:10 Make sure this works.
      ref === null ? elem.parentNode.insertBefore(this.el, elem.nextElementSibling) : this.el.parentNode.insertBefore(elem, this.el.nextElementSibling);

      return this;
    };

    this.on = function (ev, callback) {
      if (document.addEventListener) {
        events.on(ev, this.el, function (e) {
          return callback(e, new Element(el));
        });
      } else {
        events.on(ev, this.el, function (e) {
          return callback(e, new Element(el));
        });
      }
      return this;
    };

    this.off = function (ev, callback) {
      if (document.addEventListener) {
        events.off(ev, this.el, callback);
      } else {
        events.offIE(ev, this.el, callback);
      }
      return this;
    };

    this.once = function (ev, callback) {
      if (document.addEventListener) {
        events.once(ev, this.el, function (e) {
          return callback(e, new Element(el));
        });
      } else {
        events.onceIE(ev, this.el, function (e) {
          return callback(e, new Element(el));
        });
      }
      return this;
    };

    // this.toggle = function(onFunc, offFunc) {                                 //NOTE: May be unnecessary.
    //   window.toggleFlag = true;
    //
    //   if (toggleFlag) {
    //     onFunc();
    //     toggleFlag = false;
    //   } else {
    //     offFunc();
    //     toggleFlag = true;
    //   }
    //   return this;
    // };

    this.size = function (height, width) {
      this.el.style.height = height;
      this.el.style.width = width;

      return this;
    };

    this.show = function () {
      var disp = arguments.length <= 0 || arguments[0] === undefined ? 'block' : arguments[0];

      this.el.style.display = disp;

      return this;
    };

    this.hide = function () {
      this.el.style.display = 'none';

      return this;
    };

    this.viz = function (val) {
      this.el.style.visibility = val;

      return this;
    };

    //---------Event Methods-----------------//

    this.blur = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.blur(this.el, cb);
      } else {
        events.blurIE(this.el, cb);
      }
      return this;
    };

    this.click = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.click(this.el, cb);
      } else {
        events.clickIE(this.el, cb);
      }
      return this;
    };

    this.dblClick = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.dblClick(this.el, cb);
      } else {
        events.dblClickIE(this.el, cb);
      }
      return this;
    };

    this.error = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.error(this.el, cb);
      } else {
        events.errorIE(this.el, cb);
      }
      return this;
    };

    this.focus = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.focus(this.el, cb);
      } else {
        events.focusIE(this.el, cb);
      }
      return this;
    };

    this.focusIn = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.focusIn(this.el, cb);
      } else {
        events.focusInIE(this.el, cb);
      }
      return this;
    };

    this.focusOut = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.focusOut(this.el, cb);
      } else {
        events.focusOut(this.el, cb);
      }
      return this;
    };

    this.keyUp = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.keyUp(this.el, cb);
      } else {
        events.keyUpIE(this.el, cb);
      }
      return this;
    };

    this.keyDown = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.keyDown(this.el, cb);
      } else {
        events.keyDownIE(this.el, cb);
      }
      return this;
    };

    this.load = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.load(this.el, cb);
      } else {
        events.loadIE(this.el, cb);
      }
      return this;
    };

    this.unLoad = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.unLoad(this.el, cb);
      } else {
        events.unLoadIE(this.el, cb);
      }
      return this;
    };

    this.mouse = function (sfx) {
      var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (this.el.addEventListener) {
        events.mouse(sfx, this.el, cb);
      } else {
        events.mouseIE(sfx, this.el, cb);
      }
      return this;
    };

    this.resize = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.resize(this.el, cb);
      } else {
        events.resizeIE(this.el, cb);
      }
      return this;
    };

    this.scroll = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.scroll(this.el, cb);
      } else {
        events.scrollIE(this.el, cb);
      }
      return this;
    };

    this.select = function () {
      var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this.el.addEventListener) {
        events.select(this.el, cb);
      } else {
        events.selectIE(this.el, cb);
      }
      return this;
    };

    /////// Experimental Methods ////////

    this.every = function (eachFunc) {
      this.els.forEach(function (elem, i, a) {
        eachFunc(elem, a, i);
      });
      return this;
    };

    this.only = function (num, func) {
      var arr = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      (0, _logger.log)(typeof onlyArr === 'undefined' ? 'undefined' : _typeof(onlyArr), 'yellow');

      if (null !== arr) {
        if (typeof onlyArr === 'undefined') {
          window.onlyArr = arr;
          window.eachCount = 1;
        } else {
          if (onlyArr !== arr) {
            window.eachCount = 1;
            window.onlyArr = arr;
          } else {
            eachCount++;
          }
        }
      }
      if (num === eachCount) {
        func();
        (0, _logger.log)(eachCount, ['red', 'bold']);
      } else {
        (0, _logger.log)(eachCount, ['blue', 'bold']);
      }

      // if (eachCount === onlyArr.length) {
      //   eachCount = '';
      // }
      (0, _logger.log)(eachCount, 'white');
      return this;
    };

    this.func = function (func) {
      var mod = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (null === mod) {
        func(this.el);
      } else if (mod === 'style') {
        func(this.el.style);
      }
      return this;
    };

    //<<================Attribute Methods==================>>//

    this.attrib = function (attrib, val) {
      //TEST:0 Make sure this works
      var r = val !== undefined && val !== 'remove' ? (this.el.setAttribute(attrib, val), undefined) : attrib !== undefined && val !== 'remove' ? this.el.getAttribute(attrib) : (this.el.removeAttribute(attrib), undefined);
      // (r !== undefined) ?                                                     //TODO:10 See if you can make this work.
      //   return r
      // :
      //   return this;
      if (r !== undefined) {
        return r;
      } else {
        return this;
      }
    };

    this.src = function (val) {
      if (val !== undefined) {
        this.el.src = val;
        return this;
      } else {
        val = this.el.src;
        return val;
      }
    };

    this.alt = function (val) {
      if (val !== undefined) {
        this.el.alt = val;
        return this;
      } else {
        val = this.el.alt;
        return val;
      }
    };

    this.href = function (val) {
      if (val !== undefined) {
        this.el.href = val;
        return this;
      } else {
        val = this.el.href;
        return val;
      }
    };

    this.hash = function () {
      var _re = /\#.*/;
      var hash = _re.exec(el.href);

      return hash;
    };

    this.type = function (val) {
      if (val !== undefined) {
        this.el.type = val;
        return this;
      } else {
        val = this.el.type;
        return val;
      }
    };
  };

  /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _logger = __webpack_require__(1);

  var _utilities = __webpack_require__(3);

  var utils = _interopRequireWildcard(_utilities);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  //DONE:10 Complete X-Browser support for these 3 functions.

  /*
  events.js
  
  This file contains code for the librarys' convenience EventListener
  alias functions.
  
  Author: Eric James Foster
  License: ISC
  */

  var go = function go(cb) {
    return document.addEventListener('DOMContentLoaded', cb());
  };

  var goIE = function goIE(cb) {
    return document.attachEvent('onDOMContentLoaded', cb());
  };

  //Function for setting event listeners.
  var on = function on(event, el, callback) {
    //TODO: allow arg 'el' to be an array.
    if (typeof el === 'string') {
      if (el[0] === '#') {
        el = el.slice(1);
        return document.getElementById(el).addEventListener(event, callback);
      } else if (el[0] === '.') {
        el = el.slice(1);
        return document.getElementsByClassName(el)[0].addEventListener(event, callback);
      } else {
        return document.getElementsByTagName(el).addEventListener(event, callback);
      }
    } else {
      return el.addEventListener(event, callback);
    }
  };

  var onIE = function onIE(event, el, callback) {
    if (typeof el === 'string') {
      if (el[0] === '#') {
        el = el.slice(1);
        return document.getElementById(el).attachEvent('on' + event, callback);
      } else if (el[0] === '.') {
        el = el.slice(1);
        return document.getElementsByClassName(el)[0].attachEvent('on' + event, callback);
      } else {
        return document.getElementsByTagName(el).attachEvent('on' + event, callback);
      }
    } else {
      return el.attachEvent('on' + event, callback);
    }
  };

  //Function for removing event listeners.
  var off = function off(event, el, callback) {
    if (typeof el === 'string') {
      if (el[0] === '#') {
        el = el.slice(1);
        return document.getElementById(el).removeEventListener(event, callback);
      } else if (el[0] === '.') {
        el = el.slice(1);
        return document.getElementsByClassName(el)[0].removeEventListener(event, callback);
      } else {
        return document.getElementsByTagName(el).removeEventListener(event, callback);
      }
    } else {
      el.removeEventListener(event, callback);
    }
  };

  //Function for removing event listeners.
  var offIE = function offIE(event, el, callback) {
    if (typeof el === 'string') {
      if (el[0] === '#') {
        el = el.slice(1);
        return document.getElementById(el).detachEvent('on' + event, callback);
      } else if (el[0] === '.') {
        el = el.slice(1);
        return document.getElementsByClassName(el)[0].detachEvent('on' + event, callback);
      } else {
        return document.getElementsByTagName(el).detachEvent('on' + event, callback);
      }
    } else {
      el.detachEvent('on' + event, callback);
    }
  };

  var once = function once(event, el, callback) {
    //DONE:60 Finish once function.
    var cb = callback;
    //DONE:80 Test once function.
    var callBack = function callBack(e) {
      cb(e);
      el.removeEventListener(event, callBack);
    };

    el = utils.queryDOM(el);

    return el.addEventListener(event, callBack);
  };

  var onceIE = function onceIE(event, el, callback) {
    var cb = callback;
    //DONE:90 Test onceIE function.
    var callBack = function callBack(e) {
      cb(e);
      el.detachEvent('on' + event, callBack);
    };

    el = utils.queryDOM(el);

    return el.attachEvent('on' + event, callBack);
  };

  function spark(evt, el) {

    var ev = new MouseEvent(evt, {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(ev);
  }
  function sparkIE(evt, el) {
    var ev = document.createEventObject();
    l = document.querySelector(el);

    evt.eventType = 'on' + evt;
    el.fireEvent('on' + evt, ev);
  }

  function blur(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('blur', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('blur', cb);
    }
  }
  function blurIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onblur';
      el.fireEvent('on' + 'blur', evt);
    } else {
      el.attachEvent('on' + 'blur', cb);
    }
  }

  function click(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('click', cb);
    }
  }

  function clickIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'on' + 'click';
      el.fireEvent('on' + 'click', evt);
    } else {
      el.attachEvent('on' + 'click', cb);
    }
  }

  function dblClick(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('dblclick', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('dblclick', cb);
    }
  }
  function dblClickIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'ondblclick';
      el.fireEvent('on' + 'dblclick', evt);
    } else {
      el.attachEvent('on' + 'dblclick', cb);
    }
  }

  function error(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('error', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('error', cb);
    }
  }
  function errorIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onerror';
      el.fireEvent('on' + 'error', evt);
    } else {
      el.attachEvent('on' + 'error', cb);
    }
  }

  function focus(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('focus', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('focus', cb);
    }
  }
  function focusIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onfocus';
      el.fireEvent('on' + 'focus', evt);
    } else {
      el.attachEvent('on' + 'focus', cb);
    }
  }

  function focusIn(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('focusin', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('focusin', cb);
    }
  }
  function focusInIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onfocusin';
      el.fireEvent('on' + 'focusin', evt);
    } else {
      el.attachEvent('on' + 'focusin', cb);
    }
  }

  function focusOut(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('focusout', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('focusout', cb);
    }
  }
  function focusOutIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onfocusout';
      el.fireEvent('on' + 'focusout', evt);
    } else {
      el.attachEvent('on' + 'focusout', cb);
    }
  }

  function keyUp(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('keyup', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('keyup', cb);
    }
  }
  function keyUpIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onkeyup';
      el.fireEvent('on' + 'keyup', evt);
    } else {
      el.attachEvent('on' + 'keyup', cb);
    }
  }

  function keyDown(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('keydown', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('keydown', cb);
    }
  }
  function keyDownIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onkeydown';
      el.fireEvent('on' + 'keydown', evt);
    } else {
      el.attachEvent('on' + 'keydown', cb);
    }
  }

  function load(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('load', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('load', cb);
    }
  }
  function loadIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onload';
      el.fireEvent('on' + 'load', evt);
    } else {
      el.attachEvent('on' + 'load', cb);
    }
  }

  function unLoad(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('unload', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('unload', cb);
    }
  }
  function unLoadIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onunload';
      el.fireEvent('on' + 'unload', evt);
    } else {
      el.attachEvent('on' + 'unload', cb);
    }
  }

  function mouse(sufx, el) {
    var cb = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
    //sufx is string, options are 'up', 'down', 'enter', 'leave', 'over', 'out' and 'move'.

    if (cb === null) {
      var evt = new MouseEvent('mouse' + sufx, {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('mouse' + sufx, cb);
    }
  }
  function mouseIE(sufx, el) {
    var cb = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onmouse' + sufx;
      el.fireEvent('on' + 'mouse' + sufx, evt);
    } else {
      el.attachEvent('on' + 'mouse' + sufx, cb);
    }
  }

  function reSize(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('resize', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('resize', cb);
    }
  }
  function reSizeIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onresize';
      el.fireEvent('on' + 'resize', evt);
    } else {
      el.attachEvent('on' + 'resize', cb);
    }
  }

  function scroll(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('scroll', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('scroll', cb);
    }
  }
  function scrollIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onscroll';
      el.fireEvent('on' + 'scroll', evt);
    } else {
      el.attachEvent('on' + 'scroll', cb);
    }
  }

  function select(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = new MouseEvent('select', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      el.dispatchEvent(evt);
    } else {
      el.addEventListener('select', cb);
    }
  }
  function selectIE(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (cb === null) {
      var evt = document.createEventObject();

      evt.eventType = 'onselect';
      el.fireEvent('on' + 'select', evt);
    } else {
      el.attachEvent('on' + 'select', cb);
    }
  }

  module.exports = {
    blur: blur,
    blurIE: blurIE,
    click: click,
    clickIE: clickIE,
    dblClick: dblClick,
    dblClickIE: dblClickIE,
    error: error,
    errorIE: errorIE,
    focus: focus,
    focusIE: focusIE,
    focusIn: focusIn,
    focusInIE: focusInIE,
    focusOut: focusOut,
    focusOutIE: focusOutIE,
    keyUp: keyUp,
    keyUpIE: keyUpIE,
    keyDown: keyDown,
    keyDownIE: keyDownIE,
    load: load,
    loadIE: loadIE,
    unLoad: unLoad,
    unLoadIE: unLoadIE,
    mouse: mouse,
    mouseIE: mouseIE,
    reSize: reSize,
    reSizeIE: reSizeIE,
    scroll: scroll,
    scrollIE: scrollIE,
    select: select,
    selectIE: selectIE,
    spark: spark,
    sparkIE: sparkIE,
    go: go,
    goIE: goIE,
    on: on,
    onIE: onIE,
    off: off,
    offIE: offIE,
    once: once,
    onceIE: onceIE
  };

  /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _element = __webpack_require__(10);

  var _element2 = _interopRequireDefault(_element);

  var _logger = __webpack_require__(1);

  var _utilities = __webpack_require__(3);

  var utils = _interopRequireWildcard(_utilities);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  //TODO:0 Check out querySelector() method, see if it helps out.
  //DOING:0 go() DOMREady function, Class toggling method, aft(), fore(), size(), show(), hide().

  // ------------------- This function is now run straight from index.js---------------------------//
  //This function queries the dom, getting one element for each query (i.e. class/tags), creates
  //an Element object with it and returns it, so that it may be easily styled.
  // var dom = function(el) {
  //   el = utils.queryDOM(el);
  //
  //   return new Element(el);
  // };

  /*function for insterting template literals into the DOM.
  
  bones(`
  
  <html>
    <head></head>
    <body></body>
  </html>
  
  `);
  
  */
  var bones = function bones(tempLit) {
    var elem = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

    elem = utils.queryDOM(elem);
    elem.innerHTML += tempLit;

    return elem;
  };

  //Create element alias function.

  /*
  DOM.js
  
  This file contains the code for the elements.js librarys' DOM manipulation
  convenience functions.
  
  Author: Eric James Foster
  License: ISC
  */

  var make = function make(l, tag) {
    var t = tag || 'div',
        el = document.createElement(t);

    if (l[0] === '#') {
      l = l.slice(1);
      el.id = l;
      return new _element2.default(el);
    } else if (l[0] === '.') {
      l = l.slice(1);
      el.className = l;
      return new _element2.default(el);
    }
  };

  /*DOM querying alias function. Will return an array if there is more than one result. If there is
   only 1 it will NOT, even if the CSS Selector is a className or tagName.*/
  //NOTE: Now referencing queryDOM() function from index.js.
  var el = function el(_el) {
    return utils.queryDOM(_el);
  };

  //------------------------------This function is not being used in the current build ---------------------------//
  //DOM querying function, same as above, but it will return an array if a tag or class name are given as argument.
  // var all = function(l) {
  //   return utils.queryDOM(el, 'all');
  // };

  //Function for appending elements to other elements.
  var put = function put(el, mom) {
    //DONE:120 Make sure this works.
    if (typeof el === 'string') {
      //IDEA:0 If el doesn't exist, create it and give it id/class.
      if (el[0] === '#') {
        el = el.slice(1);
        if (typeof mom === 'string') {
          if (mom[0] === '#') {
            //TEST:40 Test this function thoroughly.
            mom = mom.slice(1);
            return document.getElementById(mom).appendChild(document.getElementById(el));
          } else if (mom[0] === '.') {
            mom = mom.slice(1);
            return document.getElementsByClassName(mom)[0].appendChild(document.getElementById(el));
          } else {
            return document.getElementsByTagName(mom)[0].appendChild(document.getElementById(el));
          }
        } else {
          return mom.appendChild(document.getElementById(el));
        }
      } else if (el[0] === '.') {
        el = el.slice(1);
        if (typeof mom === 'string') {
          if (mom[0] === '#') {
            mom = mom.slice(1);
            return document.getElementById(mom).appendChild(document.getElementsByClassName(el)[0]);
          } else if (mom[0] === '.') {
            mom = mom.slice(1);
            return document.getElementsByClassName(mom)[0].appendChild(document.getElementsByClassName(el)[0]);
          } else {
            return document.getElementsByTagName(mom)[0].appendChild(document.getElementsByClassName(el)[0]);
          }
        } else {
          return mom.appendChild(document.getElementsByClassName(el)[0]);
        }
      } else {
        if (typeof mom === 'string') {
          if (mom[0] === '#') {
            mom = mom.slice(1);
            return document.getElementById(mom).appendChild(document.getElementsByTagName(el)[0]);
          } else if (mom[0] === '.') {
            mom = mom.slice(1);
            return document.getElementsByClassName(mom)[0].appendChild(document.getElementsByTagName(el)[0]);
          } else {
            return document.getElementsByTagName(mom)[0].appendChild(document.getElementsByTagName(el)[0]);
          }
        } else {
          return mom.appendChild(document.getElementsByTagName(el)[0]);
        }
      }
    } else {
      if (typeof mom === 'string') {
        if (mom[0] === '#') {
          mom = mom.slice(1);
          return document.getElementById(mom).appendChild(el);
        } else if (mom[0] === '.') {
          mom = mom.slice(1);
          return document.getElementsByClassName(mom)[0].appendChild(el);
        } else {
          return document.getElementsByTagName(mom)[0].appendChild(el);
        }
      } else {
        return mom.appendChild(el);
      }
    }
  };

  //Function for deleting elements from the DOM tree.
  var kill = function kill(el) {
    if (typeof el === 'string') {
      if (el[0] === '#') {
        el = el.slice(1);
        return document.getElementById(el).parentNode.removeChild(document.getElementById(el));
      } else if (el[0] === '.') {
        el = el.slice(1);
        return document.getElementsByClassName(el)[0].parentNode.removeChild(document.getElementsByClassName(el)[0]);
      } else {
        return document.getElementsByTagName(el)[0].parentNode.removeChild(getElementsByTagName(el)[0]);
      }
    } else {
      return el.parentNode.removeChild(el);
    }
  };

  //DOM function for inserting an element before a specified node.

  var fore = function fore(ref, elem) {
    return utils.queryDOM(ref).parentNode.insertBefore(utils.queryDOM(elem), utils.queryDOM(ref));
  };

  //DOM function for inserting an element after a specified node.
  var aft = function aft(ref, elem) {
    ref = utils.queryDOM(ref);
    ref = ref.nextElementSibling;

    return ref.parentNode.insertBefore(utils.queryDOM(elem), ref);
  };

  //DOM function for showing an element, or a list of elements.
  var show = function show(elem) {
    var disp = arguments.length <= 1 || arguments[1] === undefined ? 'block' : arguments[1];

    elem = utils.queryDOM(elem);
    if (Array.isArray(elem)) {
      elem.forEach(function (l) {
        l.style.display = disp;
      });
    } else {
      elem.style.display = disp;
    }
  };

  //DOM function for hiding an element, or a list of elements.
  var hide = function hide(elem) {
    elem = utils.queryDOM(elem);

    if (Array.isArray(elem)) {
      elem.forEach(function (l) {
        l.style.display = 'none';
      });
    } else {
      elem.style.display = 'none';
    }
  };

  //DOM function for setting height and width of an element. 's' is an object, with height and width as keys.
  var size = function size(elem, h, w) {
    elem = utils.queryDOM(elem);

    elem.style.height = h;
    elem.style.width = w;
    return elem;
  };

  //function clones given node.ddeep is a boolean, if true, clone will include all descendants as well as node and its' attributes.
  var clone = function clone(elem, deep) {
    var node = elem.cloneNode(deep);
    return node;
  };

  //Function for setting css style properties of elements.
  // var style = function(el) {
  //   if (el[0] === '#') {                                                      //DONE:110 Give this chaining functionality.
  //     el = el.slice(1);
  //     return document.getElementById(el).style;
  //   } else if (el[0] === '.') {
  //     el = el.slice(1);
  //     return document.getElementsByClassName(el)[0].style;
  //   } else {
  //     return document.getElementsByTagName(el)[0].style;
  //   }
  // };

  module.exports = {
    make: make,
    bones: bones,
    clone: clone,
    // all: all,
    put: put,
    kill: kill,
    fore: fore,
    aft: aft,
    show: show,
    hide: hide,
    size: size
  };

  /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Component = undefined;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _helpers = __webpack_require__(0);

  var _ = _interopRequireWildcard(_helpers);

  var _Node = __webpack_require__(8);

  var _data = __webpack_require__(4);

  var _Events = __webpack_require__(5);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof3(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  } /*
    Component.js
    
    This file handles component creation and
    functionality, including life cycle methods and
    state management....
    
    Eric James Foster, MIT License.
    */

  // Get utilities...

  // Get Node class...

  // Get data...

  // Get Events...


  // Globalize common utility functions...
  var dir = console.dir;
  var log = _.log;
  var el = _.el;
  var dom = _.dom;

  var Component = function (_HTMLElement) {
    _inherits(Component, _HTMLElement);

    function Component(props) {
      _classCallCheck(this, Component);

      // Internal state...
      var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

      _this._state = {
        mounted: false
        // Public state...
      };_this.state = {};

      // Properties...
      _this.props = props;

      // Set lifecycle listeners...
      _data.DATA.ComponentLifecycleEvents.forEach(function (ev) {
        _this.addEventListener(ev, function (e) {
          _this[e](e.detail);
        });
      }, _this);

      // Dispatch componentWillMount event...
      // Events.fire('componentWillMount', this)
      // this.componentWillMount()
      return _this;
    }

    /*
     * Public API...
     * * * * * * * *
     */

    // Class method for immutably setting component state...


    _createClass(Component, [{
      key: 'setState',
      value: function setState(obj) {
        // Convert incoming object to array of entries to be manipulated by array.reduce...
        var newStateArray = Object.entries(obj);
        // Combine old/new state and set on state object...
        this.state = newStateArray.reduce(function (newState, stateEntry) {
          return _extends({}, newState, _defineProperty({}, stateEntry[0], stateEntry[1]));
        }, this.state);

        // Now that state is reset, trigger a render cycle...
        this._update();

        // Return state object...
        return this.state;
      }

      /*
       * The following methods are callbacks for various component
       * lifecycle events, and are intended to be overridden when
       * components are defined by the user...
       */

      // This method is for doing any necessary setting up just before the component
      // mounts. The event is fired just before it's constructor returns, see above...

    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        log('componentWillMount', ['white', 'blue']);
        return;
      }

      // This method is for doing any component work just after mounting occurs. It is
      // called by this.connectedCallback() (see below)...

    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        log('componentDidMount', ['white', 'blue']);
        return;
      }

      // This event is fired just before an imminent unmounting of a
      // component occurs. The event is fired in Valence.js at Valence.unMount()
      // line 140 & also in Form.js at Form.updateElement(), line 107...

    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        log('componentWillUnmount', ['white', 'red']);
        return;
      }

      // This method is called by this.disconnectedCallback() (see below), just after unmounting...

    }, {
      key: 'componentDidUnmount',
      value: function componentDidUnmount() {
        log('componentDidUnmount', ['white', 'red']);
        return;
      }

      // This callback is called just before the component recieves props. The event
      // is fired in Element.js at Element.createElement(), line 60, when the
      // component is created, and also in Form.js at Form.updateElement(), line 127,
      // when the component is updating...

    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        log('componentDidRecieveProps', ['white', 'orange']);
        return;
      }

      // This callback is called just after the component confirms an update should
      // take place with `shouldComponentUpdate`, and just before the update occurs. It's
      // corresponding event is fired in this._update(), line 62...

    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps) {
        log('componentWillUpdate', ['white', 'green']);
        return;
      }

      // This callback is called just after the component completes the update process.
      // It's corresponding event is fired in this._update(), line 70...

    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(props) {
        log('componentWillUpdate', ['white', 'green']);
        return;
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState, name, oldVal, newVal) {
        log('componentShouldUpdate', ['white', 'yellow']);
        return true;
      }

      // Component render method...

    }, {
      key: 'render',
      value: function render() {
        // Must be overridden with returned markup...
        return; // ...Markup....
      }

      /*
       * Private Methods....
       * * * * * * * * * * *
       */

      //FIXME: Figure out how to add nextProps here.....VVVV **DONE?**
      // Private class method for diffing and patching the dom...

    }, {
      key: '_update',
      value: function _update() {
        if (this.shouldComponentUpdate(this.props, this.state)) {
          // Fire componentWillUpdate event...
          _Events.Events.fire('componentWillUpdate', this, {
            'nextProps': this.props,
            'state': this.state
          });
          // Update the component tree...
          this.form.updateDOM(this.render(this.props));

          // Fire componentDidUpdate event...
          _Events.Events.fire('componentDidUpdate', this, {
            'props': this.props,
            'state': this.state
          });
        }
      }

      // A private method for appending the child nodes of a component...

    }, {
      key: '_appendChildren',
      value: function _appendChildren() {
        return this.appendChild(_Node.Node.createNode(this.render(this.props)));
      }

      // Used as an internal cue for updating, this method is built into the custom
      // elements v1 API...

    }, {
      key: 'attributesChangedCallback',
      value: function attributesChangedCallback(name, oldVal, newVal) {
        console.info('the attribute "' + name + '" changed from "' + olVal + '" to "' + newVal + '".');
        // Confirm an update with sCU(), then trigger a diff and patch cycle...
        if (this.shouldComponentUpdate(null, null, name, oldVal, newVal)) {
          this._update(this.render(this.props));
        }
      }

      // Used internally for post-mount operations, this method is built into the custom
      // elements v1 API...

    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        /* Technically the component is already mounted here, but it's DOM tree has yet
         * to be added. This is the closest point in the component lifecycle that I can
         * get thus far to a component will mount event.. As you can see below, once
         * the component's children are added, we consider it to be fully `mounted`
         * and fire it's `didMount` event....
         */
        // Call willMount callback...
        this.componentWillMount();
        // Append the component's children...
        this._appendChildren();
        // Call didMount callback...
        this.componentDidMount();
      }

      // Used internally for post-unmount operations, this method is built into the custom
      // elements v1 API...

    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.componentDidUnmount();
      }

      // Create a Valence componenet...

    }], [{
      key: 'createComponent',
      value: function createComponent(component, props, children) {
        var shadow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        // Pre-declare inner functions, mainly for style considerations...
        var appendChildren = void 0,
            reflect = void 0,
            shadowBool = void 0;

        // Create the DOM tree for the component....
        appendChildren = function appendChildren(elem) {
          return elem.appendChild(_Node.Node.createNode(component[1](props)));
        };

        // NO LONGER IN USE... CURRENTLY USING BUILT IN JS REFLECT CLASS....
        // Using a metaprogramming technique called reflection via javascript's evaluation
        // function to create dynamic element registration.... Will check out es6's new
        // metaprogramming features (Reflect, Symbols and Proxy) to see If this can be
        // accomplished without using eval... *** DONE ***
        reflect = function reflect(code) {
          // But for now...
          return eval(code);
        };

        // Return boolean value for shadow...
        shadowBool = function shadowBool(arr) {
          return arr.reduce(function (shadow, keyVal, index) {
            return keyVal.indexOf('shadow') == -1 ? shadow : index;
          }, false);
        };

        /*
        ==== Define custom element/web component...
        ====================================================================>>>
        * Doing a bit of finagling with the native-shim to make things work
        * here.. When a web component is defined in a manner as below,
        * the shim cannot be used, and we must be using a native implementation
        * of HTMLElement. The following 2 lines accomplish both. Both must
        * be reset (the shim and patched HTMLElement used) in order for es6
        * class definition of custom elements to work.. and they are
        * just after every custom element's call to HTMLElement from
        * document.createElement() for element instantiation.........
        */window.useNativeShim = false;
        window.HTMLElement = window._HTMLElement;

        var HTMLComponent = void 0,
            eListeners = [],
            customProps = [],
            obj = void 0;
        // Get attribute names and Listeners...
        if (props) {
          obj = _.processData(_.propsArray(props));
          // Store attribute and Listener pairs...
          customProps = obj.props;
          eListeners = obj.eventListeners;

          // Determine if shadow option is set or not...
          shadow = shadowBool(customProps) > -1 ? customProps[shadowBool(customProps)][1] : true;
        }

        // Declare self here so that it may be used in this scope, below
        // the ctor definition...
        var self = void 0;
        // Define constructor of the custom element....
        HTMLComponent = function HTMLComponent() {
          // Self will function as `this` for this constructor...
          self = Reflect.construct(HTMLElement, [], new.target);

          // Use `self` as this to add props to the constructor...
          if (shadow) {
            // Create shadow root and pass it in to append children function...
            var shadowRoot = self.attachShadow({ mode: 'open' });
            appendChildren(shadowRoot);
          }

          // Add event listeners...
          if (eListeners.length > 0) {
            eListeners.forEach(function (entry) {
              return self.addEventListener(entry[0], self[entry[1]]);
            }, self);
          }
          return self;
        };

        // Add superclass prototype...
        HTMLComponent.prototype = Object.create(HTMLElement.prototype);
        // Add constructor...
        HTMLComponent.prototype.constructor = HTMLComponent;

        // Register event listener methods..
        _Events.Events.registerCallbacks(HTMLComponent, eListeners);
        console.dir(HTMLComponent);

        // Add connectedCallback method appending children if shadow is false...
        if (!shadow) {
          HTMLComponent.prototype.connectedCallback = function () {
            appendChildren(self);
          };
        }

        // Return the component constructor...
        return HTMLComponent;
      }
    }]);

    return Component;
  }(HTMLElement);

  exports.Component = Component;

  // // log('shadow: ' + shadowBool(customProps))
  // // Use the new custom elements DOM API to define a new tag...
  // // Dynamically create class source code for each component...
  // reflect(`
  //   window.customElements.define(
  //     "${component[0]}",
  //
  //     class extends HTMLElement {
  //       ${customProps.map(key=>`
  //           get ${key[0]}() {
  //             return this.hasAttribute("${key[0]}")
  //           }
  //           set ${key[0]}(val) {
  //             if (val) {
  //               this.setAttribute("${key[0]}", "")
  //             } else {
  //               this.removeAttribute("${key[0]}")
  //             }
  //           }
  //        `).join('\n')
  //       }
  //
  //       constructor() {
  //         super()
  //         ${(shadow)?
  //             `let shadowRoot = this.attachShadow({mode: "open"})
  //              appendChildren(shadowRoot)`
  //           :
  //             ``
  //         }
  //         console.log('hi')
  //         ${(eListeners.length > 0)?
  //           eListeners.map(entry=>`
  //             this.addEventListener("${entry[0]}", this.${entry[1]})
  //          `).join('\n')
  //          : ``
  //         }
  //       }
  //       ${(eListeners.length > 0)?
  //         eListeners.map(entry=>`
  //           ${entry[1]}() {
  //             console.log('what about me')
  //             return (${entry[2]})()
  //           }
  //         `).join('\n')
  //        : ``
  //       }
  //       ${(!shadow)?
  //          `connectedCallback() {
  //            appendChildren(this)
  //          }`
  //        :
  //          ``
  //       }
  //     }
  //   )
  // `)

  /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }(); /*
       Valence.js
       
       Valence is A JavaScript library for building UI's with an API resembling that
       of React, but uses Vanilla JS Web components under the hood...
       
       Eric James Foster, MIT License.
       */

  // TODO: Difference between shadow and light dom, composed and user html.
  // content etc...  What happens to children of component being use? light dom?
  // versus components shadow dom...

  /*
  Todo's
  -------*/
  //DONE?: Finish lifecycle event firings...
  /*
  [X] - componentWillMount
  [X] - componentDidMount
  [X] - shouldComponentUpdate
  [X] - componentWillReceiveProps
  [X] - componentWillUpdate
  [X] - componentDidUpdate **TWEAK: SEE Component.js line 54...
  [X] - componentWillUnmount
  
  */
  //DONE?: Figure out the native-shim ambivalence thing...
  //DONE?: Implement the polyfill & native-shim where needed...
  //DONE?: Finish coding update on setState() process, there's still an unsolved
  // problem there...
  //DONE?: Figure out the name for good, Valence or Valence or ambiValence...
  //TODO: Figure out how to integrate <slot/> and/or <content/> functionality...
  //DONE?: Implement observed attributes functionality.. Trigger effecient
  // re-rendering when certain attributes change...
  //DONE: Reformat utilities, with one main class and sub classes, IS class for ex.
  // then move on to propTypes and defaultProps...
  //DONE: refs...
  //DONE?: propTypes & defaultProps...
  //TODO: Add errors where needed...
  //TODO: Explore more of what vanilla js webcomponents can add to the framework...
  //TODO: Add some testing, Continuous Integration....
  //TODO: Make a website.. Logo.. whathaveyou...
  //TODO: Learn about proxies....

  // Get the polyfillLoader...

  // Get the nativeShimLoader...


  //Get utilities...

  // Get Virtual DOM...

  // Get Node..

  // Get events...

  // Get errors...
<<<<<<< HEAD

  // Get Props...

=======

  // Get Props...

>>>>>>> master

  __webpack_require__(15);

  __webpack_require__(16);

  var _helpers = __webpack_require__(0);

  var _ = _interopRequireWildcard(_helpers);

  var _Form = __webpack_require__(36);

  var _Component2 = __webpack_require__(13);

  var _Events = __webpack_require__(5);

  var _Errors2 = __webpack_require__(38);

  var _Props = __webpack_require__(6);

  var _PropTypes = __webpack_require__(9);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // initialize webComponentsLoaded global...
  window.webComponentsLoaded = false;
  window.PropTypes = _PropTypes.PropTypes;

  // Globalize common utility functions...
  var inspect = console.dir;
  var log = _.log;
  var el = _.el;
  var dom = _.dom;

  // Get `jsx to vDOM` function
  var x = _Form.Form.x;

  // The framework's entry class...

<<<<<<< HEAD
  var Valence = exports.Valence = function () {
=======
  var Valence = function () {
>>>>>>> master
    function Valence() {
      _classCallCheck(this, Valence);
    }

    _createClass(Valence, null, [{
      key: 'realize',

      /*
       * Class Methods...
       */

      // Method for converting virtual dom to real dom...


      // The root Valence component...


      // the node to which Valence will attach...


      // Attach Errors...
      value: function realize(node, root) {
        var _this = this;

        // Set component root and root component properties...
        this.componentRoot = root;
        this.rootNode = node;

        // Create new virtual DOM and mount the root component...
        var mount = function mount() {
          // Get new vDOM and draw tree...
          _this.form = new _Form.Form(node, root);
          // Give this.form to this.Component...
          _this.Component.form = _this.form;

          // Convert virtual DOM to actual DOM...
          _this.rootComponent = _this.form.draw();

          // Mount on Valence root node...
          root.appendChild(_this.rootComponent);
          // Confirm component mounted...
          _this.rootComponentMounted = true;
        };

        // Method for effeciently updating the UI of the Valence application. It is a
        // link to Form DOM's updateElement method...
        var update = function update() {
          return _this.form.updateDOM(root, rootNode);
        };

        // If no component is mounted, mount component. Otherwise
        // update the component...
        if (!this.rootComponentMounted) {
          if (webComponentsLoaded) {
            mount();
          } else {
            document.addEventListener('webComponentsLoaded', function () {
              try {
                mount();
              } catch (err) {
                console.error('MountingError: ' + err.message);
              }
            });
          }
        } else {
          try {
            update();
          } catch (err) {
            console.error('UpdateError: ' + err.message);
          }
        }
      }

      // Method for unmounting the given component at the given node...


      // The form virtual DOM instance...


      // The true DOM representation of the rootNode...


      // A boolean that confirms whether or not the rootComponent is mounted...

      /*
       * Class Properties....
       */

      // Pull in Component class for building components...

    }, {
      key: 'unMount',
      value: function unMount() {
        if (this.rootComponentMounted) {
          // Fire componentWillUnmount event, then remove component...
          _Events.Events.fire('componentWillUnmount', this.rootComponent);
          this.rootComponent.remove();

          // Reset componentMounted flag...
          this.rootComponentMounted = false;
        } else {
          try {
            throw this.Errors.UnmountError;
          } catch (err) {
            console.error(err.message);
          }
        }
      }
    }]);

    return Valence;
  }();

  Valence.Component = _Component2.Component;
  Valence.Errors = _Errors2.Errors;
  Valence.rootComponentMounted = false;
  Valence.componentRoot = null;
  Valence.rootComponent = null;
  Valence.rootNode = null;
  Valence.form = null;
<<<<<<< HEAD
=======
  exports.default = Valence;
>>>>>>> master

  /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /*
  polyfillLoader.js
  
  Valence, a JavaScript library for building UI's, with an API
  resembling that of React, but uses Vanilla JS Web components
  under the hood...This file handles loading of the polyfill
  loader...
  
  Eric James Foster, MIT License.
  */

  (function () {
    // The polyfill CDN url...
    var polyfillCDN = 'https://cdn.rawgit.com/webcomponents/custom-elements/4f7072c0/custom-elements.min.js';

    // A function for loading the native-shim....
    function loadPolyfill() {
      return new Promise(function (resolve, reject) {
        var
        // Create and config script...
        script = document.createElement('script');
        script.src = polyfillCDN;
        script.type = 'text/javascript';
        script.onload = resolve;
        script.onerror = reject;

        // Append to the DOM...
        document.head.append(script);
      });
    }

    // Check for existence of customElements API, and load shim or not...
    if (window.customElements) {
      return;
    } else {
      // Load the shim...
      loadPolyfill().then(function (result) {
        console.dir(result);
      });
    }
  })();

  /***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /*
  shimLoader.js
  
  Valence, a JavaScript library for building UI's, with an API
  resembling that of React, but uses Vanilla JS Web components
  under the hood...This file handles loading of the native-shim
  dynamic loader...
  
  Eric James Foster, MIT License.
  */

  //TODO: Get external source for shim....


  (function () {
    // native shim src...
    var shimSrc = './js/src/support/nativeShim.js';

    // A function for loading the native-shim....
    function loadNativeShim() {
      return new Promise(function (resolve, reject) {
        var
        // Create and config script...
        script = document.createElement('script');
        script.src = shimSrc;
        script.onload = resolve;
        script.onerror = reject;

        // Append to the DOM just after the previously loaded inline script...
        document.head.append(script);
      });
    }

    // Check for existence of customElements API, and load shim or not...
    if (!window.customElements) {
      return;
    } else {
      // Load the shim...
      loadNativeShim().then(function (result) {
        console.dir(result);
        // Confirm load with following function that is defined on the window object
        // in the shim...
        supportLoaded();
      });
    }
  })();

  /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _module$exports;

  var _element = __webpack_require__(10);

  var _element2 = _interopRequireDefault(_element);

  var _httpRequests = __webpack_require__(19);

  var requests = _interopRequireWildcard(_httpRequests);

  var _events = __webpack_require__(11);

  var events = _interopRequireWildcard(_events);

  var _logger = __webpack_require__(1);

  var consol = _interopRequireWildcard(_logger);

  var _utilities = __webpack_require__(3);

  var utils = _interopRequireWildcard(_utilities);

  var _DOM = __webpack_require__(12);

  var DOM = _interopRequireWildcard(_DOM);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  } /*
    Elements.js
    
    A JavaScript DOM manipulation/Alias function Library.
    This is the index file for the library. It contains alias functions for
    all of the librarys' public functions. This makes it easy to import the
    functions without a module prefix es6 style.
    
    Author: Eric James Foster
    EMail: maniphestival@gmail.com
    License: MIT
    Version: 1.0.0
    URL: ""
    */

  //DONE: elements syntax not working in parenthesis.
  //FIXME: reg exp did not find element with CSS Selector, <'[class=active]'/>.
  //FIXME: eJS Interpreter hangs when eJS element is within brackets, and directly adjacent to one of them.
  //FIXME: cannot create element from variable representing a string.
  //FIXME: Find out why module imports are printing twice..
  //FIXME: Figure out why elements in square brackets slow things up...

  //DONE: Can't put elements in comments.
  //DONE: HTML interfering with regExp's.
  //DONE: can't use file blobs with import() func.

  //DONE: Should be able to use variables inside of elementJS elements.
  //TODO: make some functions complete operations for arrays automagically, instead of needing .every().
  //TODO: Make all event functions like once(), .once().
  //TODO: Complete <elem> syntax docs.
  //TODO: change apropo methods to properties.
  //DONE: .sib() does not return element.......
  //DONE: addClass() method.
  //DONE: new log.dir() function.
  //DONE: .src, .href() etc.
  //DONE: add a class method, remove a class method.
  //TODO: more .transform() methods.
  //DONE: += html method.
  //DONE: transform methods. i.e. this.turnX(), this.turnY.
  //TODO: .do(), do() animation functionality. (with tween.js?)
  //DONE: be able to create element object from e.target.....
  //TODO: getCookie, setCookie, checkCookie functions....
  //TODO: move functions........
  //TODO: Needed polyfills.
  //TODO: element.classList()....
  //TODO: hover(mouseOverFunc, mouseOutFunc) func.....
  //TODO: element.name() function.....
  //TODO: add functionality to make() function to allow creating nameless, id less divs.
  //TODO: write scroll-snapper plugin,
  //TODO: list of plug-ins
  //TODO: touch('start', ()=> {});  touch event function, method..

  //DONE:0 Complete X-Browser 'style' functions, and implement X-Browser compatibility in EventListener functions.

  //Index of polyfill for IE...........
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (item) {
      var i = this.length;
      while (i--) {
        if (this[i] === item) return i;
      }
      return -1;
    };
  }

  var element = function element(el) {
    if (isDOMElement(el)) {
      return new _element2.default(el);
    } else if (utils.isArray(el)) {
      if (isElement(el[0])) {
        return new _element2.default(el);
      } else if (isDOMElement(el[0])) {
        var arr = [];
        for (var i = 0; i < el.length; i++) {
          arr.push(new _element2.default(el[i]));
        }
        return new _element2.default(arr);
      } else {
        throw new Error('Invalid Array.');
      }
    } else {
      throw new Error('Invalid Argument.');
    }
  };

  var isElement = function isElement(el) {
    return utils.isElement(el);
  };

  var isDOMElement = function isDOMElement(el) {
    return utils.isDOMElement(el);
  };

  /*This function copies the prototype object of a superConstructor to the prototype object
  of a constructor. It functions just like nodes' util.inherits function, it copies methods only,
  not internal properties.*/
  var proto = function proto(construct, superConstruct) {
    return utils.proto(construct, superConstruct);
  };

  //This function will simply return true if the given element exists in the DOM, and false otherwise. not a public function.
  var _$ = function _$(el) {
    return null !== utils.queryDOM(el);
  };

  var isArray = function isArray(arr) {
    return utils.isArray(arr);
  };

  //This function queries the dom, getting one element for each query (i.e. class/tags), creates
  //an Element object with it and returns it, so that it may be easily styled.
  var dom = function dom(el) {
    var rv = void 0;

    el = utils.queryDOM(el);

    if (el.length !== undefined) {
      rv = [];
      for (var i = 0; i < el.length; i++) {
        rv.push(new _element2.default(el[i]));
      }
      rv = new _element2.default(rv);
    } else {
      rv = new _element2.default(el);
    }
    return rv;
  };

  /*function for inserting template literals into the DOM.
  
  bones(`
  
  <html>
    <head></head>
    <body></body>
  </html>
  
  `);
  
  */
  var __ = function __(tempLit) {
    var el = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

    return DOM.bones(tempLit, el);
  };

  //Create element alias function.
  var make = function make(el, tag) {
    return DOM.make(el, tag);
  };

  //DOM querying alias function. Will automatically narrow class or tag queries down to one result. It will not return an array.
  var el = function el(l) {
    return utils.queryDOM(l);
  };

  //Function for appending elements to other elements.
  var put = function put(el, mom) {
    return DOM.put(el, mom);
  };

  //Function for deleting elements from the DOM tree.
  var x = function x(el) {
    return DOM.kill(el);
  };

  var fore = function fore(ref, elem) {
    return DOM.fore(ref, elem);
  };

  var aft = function aft(ref, elem) {
    return DOM.aft(ref, elem);
  };

  var show = function show(elem, disp) {
    return DOM.show(elem);
  };

  var hide = function hide(elem) {
    return DOM.hide(elem);
  };

  var size = function size(elem, h, w) {
    return DOM.size(elem, h, w);
  };

  var clone = function clone(elem, deep) {
    return DOM.clone(elem, deep);
  };

  //console.log alias function.
  var log = function log(text, style, tyme) {
    return consol.log(text, style, tyme);
  };

  //console.error alias function.
  var err = function err(text, tyme) {
    return consol.err(text, tyme);
  };

  //console.info alias function.
  var info = function info(text, tyme) {
    return consol.info(text, tyme);
  };

  //console.warn alias function.
  var warn = function warn(text, tyme) {
    return consol.warn(text, tyme);
  };

  var inspect = function inspect(obj) {
    return consol.inspect(obj);
  };

  var shifter = function shifter(onFunc, offFunc) {
    return utils.shifter(onFunc, offFunc);
  };

  var hasAncestor = function hasAncestor(l, ance) {
    return utils.hasAncestor(l, ance);
  };

  var lookBehind = function lookBehind(leftContextRE, matchRE, subject) {
    return utils.lookBehind(leftContextRE, matchRE, subject);
  };

  var isMobile = function isMobile() {
    return utils.isMobile();
  };

  //This practically useless function will lock up the browser for a preset amount of time.
  var sleep = function sleep(milliseconds) {
    return utils.sleep(milliseconds);
  };

  //A function for combining strings for urls
  var url = function url(bit1, bit2) {
    var bit3 = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
    var bit4 = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

    return bit1 + bit2 + bit3 + bit4;
  };

  //This is a synchronous alias function for XMLHttpRequests.
  var xhr = function xhr(url, fd, method) {
    return requests.xhr(url, fd, method);
  };

  //This is an asynchronous alias function for XMLHttpRequests.
  var ajax = function ajax(url, fd, callback, method) {
    return requests.ajax(url, fd, callback, method);
  };

  /*---------Event Functions-----------*/

  var go = function go(cb) {
    if (document.addEventListener) {
      return events.go(cb);
    } else {
      return events.goIE(cb);
    }
  };

  //Function for setting event listeners.
  var on = function on(event, el, callback) {
    if (document.addEventListener) {
      return events.on(event, el, callback);
    } else {
      return events.onIE(event, el, callback);
    }
  };

  //Function for removing event listeners.
  var off = function off(event, el, callback) {
    if (document.addEventListener) {
      return events.off(event, el, callback);
    } else {
      return events.offIE(event, el, callback);
    }
  };

  var once = function once(event, el, callback) {
    //DONE:50 Finish once function.
    if (document.addEventListener) {
      return events.once(event, el, callback);
    } else {
      return events.onceIE(event, el, callback);
    } //TEST:70 Test once function.
  };

  var spark = function spark(evt, el) {
    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.spark(evt, el);
    } else {
      return events.sparkIE(evt, el);
    }
  };

  var blur = function blur(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.blur(el, cb);
    } else {
      return events.blurIE(el, cb);
    }
  };

  var click = function click(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.click(el, cb);
    } else {
      return events.clickIE(el, cb);
    }
  };

  var dblClick = function dblClick(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.dblClick(el, cb);
    } else {
      return events.dblClickIE(el, cb);
    }
  };

  var error = function error(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.error(el, cb);
    } else {
      return events.errorIE(el, cb);
    }
  };

  var focus = function focus(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.focus(el, cb);
    } else {
      return events.focusIE(el, cb);
    }
  };

  var focusIn = function focusIn(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.focusIn(el, cb);
    } else {
      return events.focusInIE(el, cb);
    }
  };

  var focusOut = function focusOut(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.focusOut(el, cb);
    } else {
      return events.focusOut(el, cb);
    }
  };

  var keyUp = function keyUp(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.keyUp(el, cb);
    } else {
      return events.keyUpIE(el, cb);
    }
  };

  var keyDown = function keyDown(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.keyDown(el, cb);
    } else {
      return events.keyDownIE(el, cb);
    }
  };

  var load = function load(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.load(el, cb);
    } else {
      return events.loadIE(el, cb);
    }
  };

  var unLoad = function unLoad(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.unLoad(el, cb);
    } else {
      return events.unLoadIE(el, cb);
    }
  };

  var mouse = function mouse(sfx, el) {
    var cb = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.mouse(sfx, el, cb);
    } else {
      return events.mouseIE(sfx, el, cb);
    }
  };

  var resize = function resize(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.resize(el, cb);
    } else {
      return events.resizeIE(el, cb);
    }
  };

  var scroll = function scroll(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.scroll(el, cb);
    } else {
      return events.scrollIE(el, cb);
    }
  };

  var select = function select(el) {
    var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    el = utils.queryDOM(el);

    if (document.addEventListener) {
      return events.select(el, cb);
    } else {
      return events.selectIE(el, cb);
    }
  };

  //<<=================May have found a better solution.======================================>>//
  /*This convenience function sets imported module function names as global variables, so that
  the module variable doesn't need to preface every function.*/
  // var functions = function(funcs, mod) {
  //   var context = mod || this;
  //
  //   if (Array.isArray(funcs)) {
  //     log(mod, 'red');
  //
  //     funcs.forEach(function(func) {
  //       var evil = new Function('window.' + func + ' = ' + 'this.' + func + ';');
  //           evil.call(context);
  //     }, context);
  //   } else {
  //     (function() {
  //       var evil = new Function('window.' + funcs + ' = ' + 'this.' + funcs + ';');
  //           evil.call(context);
  //     }).apply(context);
  //   }
  // };

  module.exports = (_module$exports = {
    element: element,
    _$: _$,
    x: x,
    go: go,
    shifter: shifter,
    make: make,
    __: __,
    dom: dom,
    proto: proto,
    clone: clone,
    isArray: isArray,
    isElement: isElement,
    isDOMElement: isDOMElement,
    // functions: functions,
    hasAncestor: hasAncestor,
    lookBehind: lookBehind,
    isMobile: isMobile,
    put: put,
    on: on,
    off: off,
    once: once,
    el: el,
    log: log,
    url: url,
    xhr: xhr,
    err: err,
    info: info,
    warn: warn,
    inspect: inspect,
    ajax: ajax,
    fore: fore,
    aft: aft,
    show: show,
    hide: hide,
    size: size
  }, _defineProperty(_module$exports, 'clone', clone), _defineProperty(_module$exports, 'spark', spark), _defineProperty(_module$exports, 'blur', blur), _defineProperty(_module$exports, 'click', click), _defineProperty(_module$exports, 'dblClick', dblClick), _defineProperty(_module$exports, 'error', error), _defineProperty(_module$exports, 'focus', focus), _defineProperty(_module$exports, 'focusIn', focusIn), _defineProperty(_module$exports, 'focusOut', focusOut), _defineProperty(_module$exports, 'keyUp', keyUp), _defineProperty(_module$exports, 'keyDown', keyDown), _defineProperty(_module$exports, 'load', load), _defineProperty(_module$exports, 'unLoad', unLoad), _defineProperty(_module$exports, 'mouse', mouse), _defineProperty(_module$exports, 'resize', resize), _defineProperty(_module$exports, 'scroll', scroll), _defineProperty(_module$exports, 'select', select), _module$exports);

  //DONE:30 functions: err(), info(), warn().
  //DONE:130 Complete all standalone style functions.

  /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  };

  var names = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
  var namesBright = names.map(function (name) {
    return name + 'Bright';
  });
  var namesStyle = ['bold', 'dim', 'underline', 'blink', null, 'invert', 'hidden'];

  var RESET = '\x1b[0m';

  var Colors = {
    fg: {},
    bg: {},
    style: {}
  };

  // generate foreground normal colors
  for (var i in names) {
    Colors.fg[names[i]] = +i + 30;
  }
  // generate foreground bright colors
  for (var i in namesBright) {
    Colors.fg[namesBright[i]] = +i + 90;
  }

  // generate background normal colors
  for (var i in names) {
    Colors.bg[names[i]] = +i + 40;
  }
  // generate background bright colors
  for (var i in namesBright) {
    Colors.bg[namesBright[i]] = +i + 100;
  }

  // generate style attributes
  for (var i in namesStyle) {
    if (!namesStyle[i]) continue;
    Colors.style[namesStyle[i]] = +i + 1;
  }

  function formatColor(color) {
    color = color || {};
    var fg = Colors.fg[color.fg] || 39;
    var bg = Colors.bg[color.bg] || 49;
    var style = Colors.style[color.style] || 0;

    //	var code = '\x1b';

    return '\x1b[' + style + ';' + fg + ';' + bg + 'm';
  }

  function colorize(str, colors) {
    if (!str || (typeof colors === 'undefined' ? 'undefined' : _typeof(colors)) !== 'object') return str;

    return formatColor(colors) + str + RESET;
  }
  module.exports = colorize;
  module.exports.colors = Colors;
  module.exports.names = names.concat(namesBright);
  module.exports.styles = namesStyle.filter(function (name) {
    return !!name;
  });

  /***/
},
/* 19 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _logger = __webpack_require__(1);

  //DONE:20 Complete X-Browser support for both functions.

  //This is an alias function for XMLHttpRequests.
  var xhr = function xhr(url, fd, method) {
    //DONE:80 Perfect this function.
    var formData;
    //DONE:100 Build FormData in function from object that user passes as an argument.
    if (fd) {
      //DONE:70 Need async ajax function
      if (Object.getOwnPropertyNames(fd).length === 0) {
        formData = fd; //log(Object.getOwnPropertyNames(fd).length);
      } else {
        formData = new FormData();
        for (var key in fd) {
          //TEST:50 Test this function.
          formData.append(key, fd[key]);
        }
      }
    } else {
      formData = null;
    }
    //log('fd'); log(formData);
    var m = method || 'get';
    // var data = fd || null;
    var val;

    var ajax = function ajax() {
      var ajax = new XMLHttpRequest();

      ajax.onloadend = function () {
        if (ajax.status === 200) {
          val = this.response;
        }
      };
      ajax.open(m, url, false);
      ajax.send(formData);
    };
    ajax();

    return val;
  };
  /*
  httpRequests.js
  
  This file contains code for 2 HTTP request convenience functions, 1 synchronous,
  and the other asynchronous.
  
  Author: Eric James Foster
  License: ISC
  */

  //TODO:30 reWrite 'await' version of xhr().

  var ajax = function ajax(url, fd, callback, method) {
    //TEST:60 Test this function.
    var formData;

    if (fd) {
      if (Object.getOwnPropertyNames(fd).length === 0) {
        formData = fd; //log(Object.getOwnPropertyNames(fd).length);
      } else {
        formData = new FormData();
        for (var key in fd) {
          formData.append(key, fd[key]);
        }
      }
    } else {
      formData = null;
    }
    //log('fd'); log(formData);
    var m = method || 'get';
    if (formData !== null) {
      m = 'post';
    }
    // var data = fd;
    var val;
    var req = new XMLHttpRequest();

    req.onloadend = function () {
      if (req.status === 200) {
        var response = this.response;
        callback(response);
      }
    };
    req.open(m, url);
    req.send(formData);
  };

  module.exports = {
    ajax: ajax,
    xhr: xhr
  };

  /***/
},
/* 20 */
<<<<<<< HEAD
=======
/***/function (module, exports, __webpack_require__) {

  var asciiWords = __webpack_require__(21),
      hasUnicodeWord = __webpack_require__(22),
      toString = __webpack_require__(23),
      unicodeWords = __webpack_require__(35);

  /**
   * Splits `string` into an array of its words.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {RegExp|string} [pattern] The pattern to match words.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the words of `string`.
   * @example
   *
   * _.words('fred, barney, & pebbles');
   * // => ['fred', 'barney', 'pebbles']
   *
   * _.words('fred, barney, & pebbles', /[^, ]+/g);
   * // => ['fred', 'barney', '&', 'pebbles']
   */
  function words(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? undefined : pattern;

    if (pattern === undefined) {
      return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }
    return string.match(pattern) || [];
  }

  module.exports = words;

  /***/
},
/* 21 */
/***/function (module, exports) {

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  module.exports = asciiWords;

  /***/
},
/* 22 */
/***/function (module, exports) {

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  module.exports = hasUnicodeWord;

  /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

  var baseToString = __webpack_require__(24);

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  module.exports = toString;

  /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

  var _Symbol2 = __webpack_require__(7),
      arrayMap = __webpack_require__(28),
      isArray = __webpack_require__(29),
      isSymbol = __webpack_require__(30);

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol2 ? _Symbol2.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  module.exports = baseToString;

  /***/
},
/* 25 */
/***/function (module, exports, __webpack_require__) {

  var freeGlobal = __webpack_require__(26);

  /** Detect free variable `self`. */
  var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof2(self)) == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  module.exports = root;

  /***/
},
/* 26 */
/***/function (module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function (global) {
    /** Detect free variable `global` from Node.js. */
    var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof2(global)) == 'object' && global && global.Object === Object && global;

    module.exports = freeGlobal;

    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(27));

  /***/
},
/* 27 */
/***/function (module, exports) {

  var g;

  // This works in non-strict mode
  g = function () {
    return this;
  }();

  try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
  } catch (e) {
    // This works if the window reference is available
    if ((typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === "object") g = window;
  }

  // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}

  module.exports = g;

  /***/
},
/* 28 */
/***/function (module, exports) {

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  module.exports = arrayMap;

  /***/
},
/* 29 */
/***/function (module, exports) {

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  module.exports = isArray;

  /***/
},
/* 30 */
/***/function (module, exports, __webpack_require__) {

  var baseGetTag = __webpack_require__(31),
      isObjectLike = __webpack_require__(34);

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof2(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }

  module.exports = isSymbol;

  /***/
},
/* 31 */
/***/function (module, exports, __webpack_require__) {

  var _Symbol3 = __webpack_require__(7),
      getRawTag = __webpack_require__(32),
      objectToString = __webpack_require__(33);

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = _Symbol3 ? _Symbol3.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  module.exports = baseGetTag;

  /***/
},
/* 32 */
/***/function (module, exports, __webpack_require__) {

  var _Symbol4 = __webpack_require__(7);

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol4 ? _Symbol4.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  module.exports = getRawTag;

  /***/
},
/* 33 */
/***/function (module, exports) {

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  module.exports = objectToString;

  /***/
},
/* 34 */
/***/function (module, exports) {

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof2(value)) == 'object';
  }

  module.exports = isObjectLike;

  /***/
},
/* 35 */
/***/function (module, exports) {

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = '[\'\u2019]',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  module.exports = unicodeWords;

  /***/
},
/* 36 */
>>>>>>> master
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var asciiWords = __webpack_require__(21),
      hasUnicodeWord = __webpack_require__(22),
      toString = __webpack_require__(23),
      unicodeWords = __webpack_require__(35);

  /**
   * Splits `string` into an array of its words.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to inspect.
   * @param {RegExp|string} [pattern] The pattern to match words.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the words of `string`.
   * @example
   *
   * _.words('fred, barney, & pebbles');
   * // => ['fred', 'barney', 'pebbles']
   *
   * _.words('fred, barney, & pebbles', /[^, ]+/g);
   * // => ['fred', 'barney', '&', 'pebbles']
   */
  function words(string, pattern, guard) {
    string = toString(string);
    pattern = guard ? undefined : pattern;

    if (pattern === undefined) {
      return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }
    return string.match(pattern) || [];
  }

  module.exports = words;

  /***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /** Used to match words composed of alphanumeric characters. */

  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  module.exports = asciiWords;

  /***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

<<<<<<< HEAD
  "use strict";
=======
  var _Node = __webpack_require__(8);
>>>>>>> master

  /** Used to detect strings that need a more robust regexp to match words. */

  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  module.exports = hasUnicodeWord;

  /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var baseToString = __webpack_require__(24);

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  module.exports = toString;

  /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _Symbol = __webpack_require__(7),
      arrayMap = __webpack_require__(28),
      isArray = __webpack_require__(29),
      isSymbol = __webpack_require__(30);

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  module.exports = baseToString;

  /***/
},
/* 25 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  };

  var freeGlobal = __webpack_require__(26);

  /** Detect free variable `self`. */
  var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  module.exports = root;

  /***/
},
/* 26 */
/***/function (module, exports, __webpack_require__) {

  "use strict";
  /* WEBPACK VAR INJECTION */
  (function (global) {

    var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
    };

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

    module.exports = freeGlobal;
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(27));

  /***/
},
/* 27 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  };

  var g;

  // This works in non-strict mode
  g = function () {
    return this;
  }();

  try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
  } catch (e) {
    // This works if the window reference is available
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
  }

  // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}

  module.exports = g;

  /***/
},
/* 28 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */

  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  module.exports = arrayMap;

  /***/
},
/* 29 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */

  var isArray = Array.isArray;

  module.exports = isArray;

  /***/
},
/* 30 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  };

  var baseGetTag = __webpack_require__(31),
      isObjectLike = __webpack_require__(34);

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }

  module.exports = isSymbol;

  /***/
},
/* 31 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _Symbol = __webpack_require__(7),
      getRawTag = __webpack_require__(32),
      objectToString = __webpack_require__(33);

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  module.exports = baseGetTag;

  /***/
},
/* 32 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _Symbol = __webpack_require__(7);

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  module.exports = getRawTag;

  /***/
},
/* 33 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /** Used for built-in method references. */

  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  module.exports = objectToString;

  /***/
},
/* 34 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
  };

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
  }

  module.exports = isObjectLike;

  /***/
},
/* 35 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  /** Used to compose unicode character classes. */

  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = '[\'\u2019]',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')', rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower, rsUpper + '+' + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join('|'), 'g');

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  module.exports = unicodeWords;

  /***/
},
/* 36 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Form = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }(); /*
       Form.js
       
       Form is the virtual dom layer of a Valence app that interfaces
       with the actual DOM via the DOM API, making adjustments
       to the UI in an inexpensive and effecient manner...
       
       Eric James Foster, MIT License.
       */

  // Pull in utilities...

  // Grab Node...

  // Get Props class...

  // Get Events...


  var _helpers = __webpack_require__(0);

  var _ = _interopRequireWildcard(_helpers);

  var _Is = __webpack_require__(2);

  var _Node = __webpack_require__(8);

  var _Props = __webpack_require__(6);

  var _Events = __webpack_require__(5);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // Globalize common utilities...
  var log = _.log;
  var dom = _.dom;
  var dir = console.dir;

  // Form Virtual DOM...

  var Form = function () {
    function Form(node, root) {
      _classCallCheck(this, Form);

      // The old DOM for diffing purposes...
      this.DOM = node;
      this.DOMString = String(this.DOM);
      this.propString = String(this.DOM.props);
      // The new DOM for diffing...
      this.newDOM = null;
      // If newDOM is set, set the following...
      if (this.newDOM) {
        this.newDOMString = String(this.newDOM);
        this.newPropString = String(this.newDOM.props);
      }
      // Get a reference to Valence's mount node...
      this.rootNode = root;
    }

    // Computed property that determines whether or not 2 nodes
    // have changed...


    _createClass(Form, [{
      key: '_isStatefulComponent',

      // Computed property that resolves whether or not the given node is a component or not...
      value: function _isStatefulComponent(node) {
        return node.props.isStatefulComponent ? true : false;
      }

      // Method for updating an element and all of it's children recursively...

    }, {
      key: 'updateDOM',
      value: function updateDOM(parent, newNode) {
        var oldNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        // Get a reference to the current node and incoming props...
        var thisNode = parent.childNodes[index];
        var nextProps = newNode.props;

        // If this node is a component, check it's `shouldComponentUpdate` method to
        // confirm whether or not an update is necessary...
        if (this._isStatefulComponent(thisNode)) {
          if (!thisNode.type.shouldComponentUpdate(thisNode.props /*, this.state?*/
          )) {
            return;
          }
        }

        // Set newDOM...
        if (this.newDOM = null) {
          this.newDOM = newNode;
        }
        // If first pass, oldNode will need to be set...
        if (oldNode === null) {
          oldNode = this.DOM;
        }

        // Get diff length...
        var diff = function diff() {
          return Math.abs(newNode.children.length - oldNode.children.length);
        };

        // newNode exist where there is no oldNode...
        if (!oldNode) {
          // Create a new node and append it to DOM...
          parent.appendChild(_Node.Node.createNode(newNode));
          // OldNode exists where there is no newNode...
        } else if (!newNode) {
          // If current node is a component, fire willUnmount event...
          if (this._isStatefulComponent(thisNode)) {
            _Events.Events.fire('componentWillUnmount', thisNode, thisNode.props);
          }
          // Then remove the node...
          parent.removeChild(thisNode);

          // The node has changed, 'tag' or 'props', for example...
        } else if (this._changed) {
          parent.replaceChild(_Node.Node.createNode(newNode), thisNode);
          // None of the above apply, and the node is not a textNode...
        } else if (!_Is.Is.string(newNode)) {
          // If newNode is  component, fire componentWillReceiveProps event with new props,
          // then update props...
          if (this._isStatefulComponent(thisNode)) {
            _Events.Events.fire('componentWillReceiveProps', thisNode, thisNode.props);
          }
          _Props.Props.update(thisNode, newNode.props, oldNode.props);
          // Then children and their props...
          for (var i = 0; i < diff(); i++) {
            updateElement(thisNode, newNode.children[i], oldNode.children[i], i);
          }
        }
        this.DOM = newNode;
      }

      // A helper method representing the API of the virtual DOM...

    }, {
      key: 'draw',

      // Method for rendering the virtual dom to real dom... The method takes
      // Valence.createElement as it's second argument...
      value: function draw() {
        return _Node.Node.createNode(this.DOM);
      }
    }, {
      key: '_changed',
      get: function get() {
        // Compare DOMStrings...
        return this.newDOMString !== this.DOMString || this.newDOM.props.forceUpdate;
      }
    }, {
      key: '_propsChanged',
      get: function get() {
        // Compare PropStrings...
        return this.newPropString !== this.propString;
      }
    }], [{
      key: 'x',
      value: function x(type, props) {
        for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          children[_key - 2] = arguments[_key];
        }

        // Return a new Node...
        return new _Node.Node({
          type: type,
          props: props,
          children: children
        });
      }
    }]);

    return Form;
  }();

  exports.Form = Form;

  /***/
},
/* 37 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Element = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }(); /*
       Element.js
       
       Valence.js, a JavaScript library for building UI's, with an API
       resembling that of React, but uses Vanilla JS Web components
       under the hood...This file handles the framework's element
       creation and configuration...
       
       Eric James Foster, MIT License.
       */

  // Get data...

  // Get utilities...

  // Grab events...

  // Get Props class...

  // Get Node Class...


  var _data = __webpack_require__(4);

  var _helpers = __webpack_require__(0);

  var _ = _interopRequireWildcard(_helpers);

  var _Is = __webpack_require__(2);

  var _Events = __webpack_require__(5);

  var _Props = __webpack_require__(6);

  var _Node = __webpack_require__(8);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  // Globalize common _...
  var dir = console.dir;
  var log = _.log;

  var Element = exports.Element = function () {
    function Element() {
      _classCallCheck(this, Element);
    }

    _createClass(Element, null, [{
      key: 'createElement',

      // Create a Valence element...
      value: function createElement(_ref) {
        var type = _ref.type,
            props = _ref.props,
            children = _ref.children;

        // Pre-declare inner functions...
        var makeDOMElement = void 0,
            setProps = void 0,
            addEventListeners = void 0,
            appendChildren = void 0;

        // Create a new DOM element...
        makeDOMElement = function makeDOMElement(tagName) {
          // Store the new DOM element for sending through return...
          var elem = document.createElement(tagName);

          /* If `Reflect` programmatic library constructed component, reset native-shim flag,
          and also reset window.HTMLElement to the nativeShim.js patched version...
          */if (props.isStatelessComponent) {
            window.useNativeShim = true;
            window.HTMLElement = window.HTMLElement_;
          }
          // Send the created element through the pipe...
          return elem;
        };

        // Set given attributes on the created element....
        setProps = function setProps(elem) {
          if (props) {
            /* If setting props on user defined (stateful) component, fire willRecieveProps
            event..*/
            if (props.isStatefulComponent) {
              _Events.Events.fire('componentWillReceiveProps', elem, props);
            }
            /* The ref function is defined in jsx markup as a prop in curlies, and When
             * we get to this point in the definition of the ref'd element, we access the
             * function via props and execute it, injecting the brand new element instance
             * that we just created in the function above. This will complete the purpose
             * of the ref function, which is to pass the reference into a variable, but in
             * the context in which it was defined, the component definition...
             */if (props.ref) {
              props.ref(elem);
            }
            // Set props and return the element to the pipe...
            return _Props.Props.set(elem, props);
          }
        };

        // Add event listener(s) to element...
        addEventListeners = function addEventListeners(elem) {
          _.propNames(props).forEach(function (name) {
            if (_Is.Is.eventListener(name)) {
              elem.addEventListener(_.sansON(name), props[name]);
            }
          }, elem);
          return elem;
        };

        // Add elements children to the DOM.....
        appendChildren = function appendChildren(elem) {
          // Determine if elem is a string or a Component...
          if (children) {
            // Append children...
            children.map(_Node.Node.createNode, _Node.Node).forEach(elem.appendChild, elem);
          }
          // Return the element...
          return elem;
        };

        // Connected to each other with the higher-order function piper, the following will
        // return the requested element...
        return _.piper(makeDOMElement, setProps, addEventListeners, appendChildren)(type);
      }
    }]);

    return Element;
  }();

  /***/
},
/* 38 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Errors = undefined;

  var _MountingError = __webpack_require__(39);

  var _UnmountError = __webpack_require__(40);

  var _UpdateError = __webpack_require__(41);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  } /*
    Errors.js
    
    Valence.js, a JavaScript library for building UI's with an API
    resembling that of React, but uses Vanilla JS Web components
    under the hood...This file deals with the framework's custom
    error handling...
    
    Eric James Foster, MIT License.
    */

  // Include custom errors...


  var Errors = function Errors() {
    _classCallCheck(this, Errors);
  };

  Errors.MountingFailure = _MountingError.MountingError.Failure;
  Errors.UnknownMounting = _MountingError.MountingError.Unknown;
  Errors.NoMountedUnmount = _UnmountError.UnmountError.NoComponentMounted;
  Errors.UnknownUnmount = _UnmountError.UnmountError.Unknown;
  Errors.UpdateFailure = _UpdateError.UpdateError.Failure;
  Errors.UnknownUpdate = _UpdateError.UpdateError.Unknown;
  exports.Errors = Errors;

  /***/
},
/* 39 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /*
  MountingError.js
  
  Valence.js, a JavaScript library for building UI's with an API
  resembling that of React, but uses Vanilla JS Web components
  under the hood...This file contains the framework's custom
  MountingError...
  
  Eric James Foster, MIT License.
  */

  var MountingError = function () {
    function MountingError() {
      _classCallCheck(this, MountingError);
    }

    _createClass(MountingError, null, [{
      key: 'Failure',

      // A custom error, thrown when a component fails to mount properly...
      get: function get() {
        // Return new error...
        return new Error('MountingError: There is no component mounted.');
      }
      // A custom error, thrown when there is an unknown error during the mounting process...

    }, {
      key: 'Unknown',
      get: function get() {
        // Return new error...
        return new Error('MountingError: There was an unknown error during the mounting process.');
      }
    }]);

    return MountingError;
  }();

  exports.MountingError = MountingError;

  /***/
},
/* 40 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /*
  UnountingError.js
  
  Valence.js, a JavaScript library for building UI's with an API
  resembling that of React, but uses Vanilla JS Web components
  under the hood...This file contains the framework's custom
  MountingError...
  
  Eric James Foster, MIT License.
  */

  var UnmountError = function () {
    function UnmountError() {
      _classCallCheck(this, UnmountError);
    }

    _createClass(UnmountError, null, [{
      key: 'NoComponentMounted',

      // A custom error, thrown when an unmounted component is attempted to unmount...
      get: function get() {
        // Return new error...
        return new Error('UnmountError: There is no component mounted.');
      }
      // A custom error, thrown when there is an unknown error during the umount process...

    }, {
      key: 'Unknown',
      get: function get() {
        // Return new error...
        return new Error('UnmountError: There was an unknown error during the unmount process.');
      }
    }]);

    return UnmountError;
  }();

  exports.UnmountError = UnmountError;

  /***/
},
/* 41 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /*
  UpdateError.js
  
  Valence.js, a JavaScript library for building UI's with an API
  resembling that of React, but uses Vanilla JS Web components
  under the hood...This file contains the framework's custom
  UpdateError...
  
  Eric James Foster, MIT License.
  */

  var UpdateError = function () {
    function UpdateError() {
      _classCallCheck(this, UpdateError);
    }

    _createClass(UpdateError, null, [{
      key: 'Failure',

      // A custom error, thrown when a component fails to update properly...
      get: function get() {
        // Return new error...
        return new Error('UpdateError: The component update failed.');
      }
      // A custom error, thrown when there is an unknown error during the mounting process...

    }, {
      key: 'Unknown',
      get: function get() {
        // Return new error...
        return new Error('UpdateError: There was an unknown error during the update process.');
      }
    }]);

    return UpdateError;
  }();

  exports.UpdateError = UpdateError;

  /***/
}]
/******/);