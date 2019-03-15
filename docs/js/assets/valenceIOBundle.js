;

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _Valence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _templateObject7() {
    var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  opacity: ", ";\n  color: white;\n  border: 2px solid ", "\n"]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    var data = _taggedTemplateLiteral(["\n  height: ", ";\n  width: 75px;\n  border: none;\n  border-radius: 7px;\n  background-color: pink;\n"]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    var data = _taggedTemplateLiteral(["\nposition: absolute;\nheight: 100%;\nwidth: 100%;\npadding: 0;\n\n"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["\n  position: absolute;\n  font-family: sf mono;\n  font-size: 38px;\n  width: 200px;\n  height: 38px;\n  margin: 0 auto;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: orange;\n  border: none;\n  border-radius: 5px;\n  color: blue;\n"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  height: ", ";\n  width: 200px;\n  background-color: ", ";\n  z-index: 99;\n  p {\n    color: brown;\n  }\n"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n  position: absolute\n  top: 50%\n  height: 200px\n  width: 100%\n  margin-top: -130px\n  padding: 30px\n  background-color: ", "\n\n  h1 {\n    color: yellow;\n    position: absolute;\n    top: -150px;\n    left: 100px;\n    text-align: center;\n    vertical-align: middle;\n    font-size: 84px;\n    font-family: sf mono;\n  }\n"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\nbody  {\n    background-color: ", "\n  }\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  /*
  ** valenceIO.jsx
  **
  ** Javascript entry-point file for the
  ** Valence framework project Web-Site
  **
  ** Eric J Foster, MIT License.
  **
  **/


  var __ = window.global;

  _Valence__WEBPACK_IMPORTED_MODULE_0__["Valence"].config({
    shadowByDefault: false
  });

  var blue = '#0057ff';
  var yellow = '#ffc700';
  var tomato = '#ff4500';
  var green = '#17a637'; //global styles..

  __(_templateObject(), tomato);

  var Box = div({
    className: 'boxy'
  })(_templateObject2(), blue);
  var MyDiv = div(_templateObject3(), function (_ref) {
    var shadow = _ref.shadow;
    return shadow ? '100px' : '700px';
  }, green);
  var MyInput = input({
    placeholder: 'onsearch',
    type: 'text',
    className: 'myput',
    shadow: true
  })(_templateObject4());
  var Fluid = div({
    className: 'container-fluid',
    shadow: false,
    id: 'hwhatthe'
  })(_templateObject5()); // attribute for inner button text.....

  var Thing = button({
    id: 'buttonThing',
    type: 'submit',
    label: 'press'
  })(_templateObject6(), function (_ref2) {
    var myAtty = _ref2.myAtty;
    return myAtty;
  }); //

  var Thing2 = extend(Thing, {
    id: 'thing2',
    label: 'press me!'
  })(_templateObject7(), tomato, function (_ref3) {
    var attrib = _ref3.attrib;
    return attrib;
  }, function (_ref4) {
    var shadow = _ref4.shadow;
    return shadow ? 'black' : 'orange';
  });

  var MyName = function MyName() {
    return x("div", null, x(Box, null, x(MyDiv, {
      shadow: false
    }, x("h1", null, "Yesserri!"), x("p", null, "I'm inside a custom element!")), x(Thing, {
      myAtty: "75px",
      shadow: false
    }), x("p", null, "What is happening"), x(MyInput, null), x("h1", {
      className: "name"
    }, "My Name Is:"), x(Thing2, {
      attrib: 9
    })));
  };

  var App =
  /*#__PURE__*/
  function (_Valence$Component) {
    _inherits(App, _Valence$Component);

    function App() {
      _classCallCheck(this, App);

      return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        return x(Fluid, null, x(MyName, {
          className: "myname",
          shadow: false
        }));
      }
    }]);

    return App;
  }(_Valence__WEBPACK_IMPORTED_MODULE_0__["Valence"].Component);

  _Valence__WEBPACK_IMPORTED_MODULE_0__["Valence"].realize(x(App, null), el('#root'));
  /***/

},
/* 1 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Valence", function () {
    return Valence;
  });
  /* harmony import */


  var _js_src_support_polyfillLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
  /* harmony import */


  var _js_src_support_polyfillLoader__WEBPACK_IMPORTED_MODULE_0___default =
  /*#__PURE__*/
  __webpack_require__.n(_js_src_support_polyfillLoader__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */


  var _js_src_support_shimLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
  /* harmony import */


  var _js_src_support_shimLoader__WEBPACK_IMPORTED_MODULE_1___default =
  /*#__PURE__*/
  __webpack_require__.n(_js_src_support_shimLoader__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */


  var _js_src_Utilities_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
  /* harmony import */


  var _js_src_Form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
  /* harmony import */


  var _js_src_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
  /* harmony import */


  var _js_src_Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
  /* harmony import */


  var _js_src_Errors_Errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
  /* harmony import */


  var _js_src_Props_Props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
  /* harmony import */


  var _js_src_Props_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
  /* harmony import */


  var _js_src_Venus_Venus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
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
  //TODO: Figure out what's going on with the shadow parameter in Component.CreateComponent(),
  // also, look into shadowBool()...
  //TODO: Set up observedAttributeCallbacks, if not already done.....
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
  // Get Component..
  // Get events...
  // Get errors...
  // Get Props...
  // Get styles...
  // Initializing an array for venus component tag names...


  window.venusComponents = []; // Initializing an array for all stateless instantiated component tag names...

  window.statelessComponents = []; // initialize component element hash on window object...

  window.elementHash = -1; // initialize global flags...

  window.webComponentsLoaded = false;
  window.rootNodeDefined = false; // Provide access to PropTypes...

  window.PropTypes = _js_src_Props_PropTypes__WEBPACK_IMPORTED_MODULE_8__["PropTypes"]; // Provide `jsx to vDOM`, x(), function...

  window.x = _js_src_Form_Form__WEBPACK_IMPORTED_MODULE_3__["Form"].x; // Globalize common utility functions...

  window.el = _js_src_Utilities_helpers__WEBPACK_IMPORTED_MODULE_2__["el"];
  window.dom = _js_src_Utilities_helpers__WEBPACK_IMPORTED_MODULE_2__["dom"];
  window.dir = console.dir;
  window.log = _js_src_Utilities_helpers__WEBPACK_IMPORTED_MODULE_2__["log"]; //Globalize venus functions for convenience...

  window.global = _js_src_Venus_Venus__WEBPACK_IMPORTED_MODULE_9__["Venus"].global;
  window.extend = _js_src_Venus_Venus__WEBPACK_IMPORTED_MODULE_9__["Venus"].extend; // Globalize style elements for convenience...

  window.div = _js_src_Venus_Venus__WEBPACK_IMPORTED_MODULE_9__["Venus"].div;
  window.input = _js_src_Venus_Venus__WEBPACK_IMPORTED_MODULE_9__["Venus"].input;
  window.button = _js_src_Venus_Venus__WEBPACK_IMPORTED_MODULE_9__["Venus"].button;
  window.p = _js_src_Venus_Venus__WEBPACK_IMPORTED_MODULE_9__["Venus"].p;
  window.h1 = _js_src_Venus_Venus__WEBPACK_IMPORTED_MODULE_9__["Venus"].h1;
  window.h6 = _js_src_Venus_Venus__WEBPACK_IMPORTED_MODULE_9__["Venus"].h6; // The framework's API class...

  var Valence =
  /*#__PURE__*/
  function () {
    function Valence() {
      _classCallCheck(this, Valence);
    }

    _createClass(Valence, null, [{
      key: "realize",

      /*
       * Class Properties....
       */
      // Pull in Component class for building components...
      // Attach Errors...
      // A boolean that confirms whether or not the rootComponent is mounted...
      // the node to which Valence will attach...
      // The true DOM representation of the rootNode...
      // The root Valence component...
      // The form virtual DOM instance...
      // Add config method from the venus class...

      /*
       * Class Methods...
       */
      // Method for converting virtual dom to real dom...
      value: function realize(node, root) {
        var _this = this; // Set component root and root component properties...


        this.componentRoot = root;
        this.rootNode = node;
        this.rootNode.props.rootNode = true; // Create new virtual DOM and mount the root component...

        var mount = function mount() {
          // Get new vDOM and draw tree...
          _this.form = new _js_src_Form_Form__WEBPACK_IMPORTED_MODULE_3__["Form"](_this.rootNode, root); // Give this.form to this.Component...

          _this.Component.form = _this.form; // Convert virtual DOM to actual DOM...

          _this.rootComponent = _this.form.draw(); // Mount on Valence root node...

          root.appendChild(_this.rootComponent); // Confirm component mounted...

          _this.rootComponentMounted = true;
        }; // Method for effeciently updating the UI of the Valence application. It is a
        // link to Form DOM's updateElement method...


        var update = function update() {
          return _this.form.updateDOM(root, rootNode);
        }; // If no component is mounted, mount component. Otherwise
        // update the component...


        if (!this.rootComponentMounted) {
          if (webComponentsLoaded) {
            console.log('Check1');
            mount();
          } else {
            console.log('check1st');
            document.addEventListener('webComponentsLoaded', function () {
              console.log('Check0');

              try {
                mount();
              } catch (err) {
                console.error("MountingError: ".concat(err.message));
              }
            });
          }
        } else {
          try {
            update();
          } catch (err) {
            console.error("UpdateError: ".concat(err.message));
          }
        }
      } // Method for unmounting the given component at the given node...

    }, {
      key: "unMount",
      value: function unMount() {
        if (this.rootComponentMounted) {
          // Fire componentWillUnmount event, then remove component...
          _js_src_Events__WEBPACK_IMPORTED_MODULE_5__["Events"].fire('componentWillUnmount', this.rootComponent);

          this.rootComponent.remove(); // Reset componentMounted flag...

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

  _defineProperty(Valence, "Component", _js_src_Component__WEBPACK_IMPORTED_MODULE_4__["Component"]);

  _defineProperty(Valence, "Errors", _js_src_Errors_Errors__WEBPACK_IMPORTED_MODULE_6__["Errors"]);

  _defineProperty(Valence, "rootComponentMounted", false);

  _defineProperty(Valence, "componentRoot", null);

  _defineProperty(Valence, "rootComponent", null);

  _defineProperty(Valence, "rootNode", null);

  _defineProperty(Valence, "form", null);

  _defineProperty(Valence, "config", _js_src_Venus_Venus__WEBPACK_IMPORTED_MODULE_9__["Venus"].config);
  /***/

},
/* 2 */

/***/
function (module, exports) {
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
    var polyfillCDN = 'https://cdn.rawgit.com/webcomponents/custom-elements/4f7072c0/custom-elements.min.js'; // A function for loading the native-shim....

    function loadPolyfill() {
      return new Promise(function (resolve, reject) {
        var // Create and config script...
        script = document.createElement('script');
        script.src = polyfillCDN;
        script.type = 'text/javascript';
        script.onload = resolve;
        script.onerror = reject; // Append to the DOM...

        document.head.append(script);
      });
    } // Check for existence of customElements API, and load shim or not...


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
/* 3 */

/***/
function (module, exports) {
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
    var shimSrc = './nativeShim.js'; // A function for loading the native-shim....

    function loadNativeShim() {
      return new Promise(function (resolve, reject) {
        var // Create and config script...
        script = document.createElement('script');
        script.src = shimSrc;
        script.onload = resolve;
        script.onerror = reject; // Append to the DOM just after the previously loaded inline script...

        document.head.append(script);
      });
    } // Check for existence of customElements API, and load shim or not...


    if (!window.customElements) {
      return;
    } else {
      // Load the shim...
      loadNativeShim().then(function (result) {
        console.dir(result); // Confirm load with following function that is defined on the window object
        // in the shim...

        supportLoaded();
      });
    }
  })();
  /***/

},
/* 4 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "venusComponentNamesRE", function () {
    return venusComponentNamesRE;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "piper", function () {
    return piper;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "propNames", function () {
    return propNames;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "propsArray", function () {
    return propsArray;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "lowerCaseListeners3", function () {
    return lowerCaseListeners3;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "lowerCaseListeners2", function () {
    return lowerCaseListeners2;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "lowerCaseListeners1", function () {
    return lowerCaseListeners1;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "isolateEventListeners", function () {
    return isolateEventListeners;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "sansON", function () {
    return sansON;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "removePrefixFromListeners", function () {
    return removePrefixFromListeners;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "removeEventListeners", function () {
    return removeEventListeners;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "removeExistingAttributes", function () {
    return removeExistingAttributes;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "processEventListeners", function () {
    return processEventListeners;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "extractCustomProps", function () {
    return extractCustomProps;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "extractCustomPropNames", function () {
    return extractCustomPropNames;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "processProps", function () {
    return processProps;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "processData", function () {
    return processData;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "_shishKebab", function () {
    return _shishKebab;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "convertFuncNameToTagName", function () {
    return convertFuncNameToTagName;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "extractFunctionName", function () {
    return extractFunctionName;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "combineObjects", function () {
    return combineObjects;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "capitalizeAndRemoveHyphen", function () {
    return capitalizeAndRemoveHyphen;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "uniqueCustomEventString", function () {
    return uniqueCustomEventString;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "included", function () {
    return included;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "template", function () {
    return template;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "replicator", function () {
    return replicator;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "splitFilter", function () {
    return splitFilter;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "reAssembleTemplates", function () {
    return reAssembleTemplates;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "applyInterpolations", function () {
    return applyInterpolations;
  });
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "separateStyleRules", function () {
    return separateStyleRules;
  });
  /* harmony import */


  var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
  /* harmony import */


  var _Is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
  /* harmony import */


  var lodash_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
  /* harmony import */


  var lodash_words__WEBPACK_IMPORTED_MODULE_2___default =
  /*#__PURE__*/
  __webpack_require__.n(lodash_words__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */


  var elementsJS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
  /* harmony import */


  var elementsJS__WEBPACK_IMPORTED_MODULE_3___default =
  /*#__PURE__*/
  __webpack_require__.n(elementsJS__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony reexport (safe) */


  __webpack_require__.d(__webpack_exports__, "el", function () {
    return elementsJS__WEBPACK_IMPORTED_MODULE_3__["el"];
  });
  /* harmony reexport (safe) */


  __webpack_require__.d(__webpack_exports__, "dom", function () {
    return elementsJS__WEBPACK_IMPORTED_MODULE_3__["dom"];
  });
  /* harmony reexport (safe) */


  __webpack_require__.d(__webpack_exports__, "log", function () {
    return elementsJS__WEBPACK_IMPORTED_MODULE_3__["log"];
  });
  /* harmony reexport (safe) */


  __webpack_require__.d(__webpack_exports__, "inspect", function () {
    return elementsJS__WEBPACK_IMPORTED_MODULE_3__["inspect"];
  });

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  Utilities.js
  
  A file containing utility functions to aid in the functional
  nature of Valence...
  
  Eric James Foster, MIT License.
  */
  // Get data...
  // Get Is...
  // Get words from lodash...
  // Get and send some utils from elementsJS...
  // a Regular expression for extracting component names from a function's
  // source code...


  var venusComponentNamesRE = function venusComponentNamesRE() {
    return /(\([A-Z]\w*-?)+/g;
  };

  var piper = function piper() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (arg) {
      return fns.reduce(function (value, fn) {
        return fn(value);
      }, arg);
    };
  }; // Returns an array of prop names...


  var propNames = function propNames(props) {
    return Object.keys(props);
  }; // Get an array of key value pairs from the attributes object...


  var propsArray = function propsArray(attribs) {
    return Object.entries(attribs);
  }; // Create a new array with all event listeners lower-cased...


  var lowerCaseListeners3 = function lowerCaseListeners3(arr) {
    return arr.map(function (entry) {
      return [entry[0].toLowerCase(), entry[0], entry[1]];
    });
  }; // Create a new array with all event listeners lower-cased...


  var lowerCaseListeners2 = function lowerCaseListeners2(arr) {
    return arr.map(function (entry) {
      return [entry[0].toLowerCase(), entry[1]];
    });
  }; // Create a new array with all event listeners lower-cased...


  var lowerCaseListeners1 = function lowerCaseListeners1(arr) {
    return arr.map(function (entry) {
      return entry.toLowerCase();
    });
  }; // Create a new array with event listeners and their callback functions...


  var isolateEventListeners = function isolateEventListeners(arr) {
    return arr.filter(function (entry) {
      return _data__WEBPACK_IMPORTED_MODULE_0__["DATA"].DOMElementEvents.indexOf(entry[0]) != -1;
    });
  }; // A function for removing the `on` from event listeners...


  var sansON = function sansON(name) {
    return name.slice(2).toLowerCase();
  }; // Create a new array with the `on` removed from the event listener names...


  var removePrefixFromListeners = function removePrefixFromListeners(arr) {
    return arr.map(function (entry) {
      return [sansON(entry[0]), entry[1], entry[2]];
    });
  }; // Create a new array without the  event listeners and their callback functions...


  var removeEventListeners = function removeEventListeners(arr) {
    return arr.filter(function (entry) {
      return _data__WEBPACK_IMPORTED_MODULE_0__["DATA"].DOMElementEvents.indexOf(_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].array(entry) ? entry[0] : entry) == -1;
    });
  }; // Remove non-custom attributes...


  var removeExistingAttributes = function removeExistingAttributes(arr) {
    return arr.filter(function (entry) {
      return _data__WEBPACK_IMPORTED_MODULE_0__["DATA"].HTMLAttributes.indexOf(_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].array(entry) ? entry[0] : entry) == -1;
    });
  }; // Process event listener attributes...


  var processEventListeners = function processEventListeners(arr) {
    return piper(lowerCaseListeners3, isolateEventListeners, removePrefixFromListeners)(arr);
  }; // Process attribute data...


  var extractCustomProps = function extractCustomProps(arr) {
    return piper(lowerCaseListeners2, removeEventListeners, removeExistingAttributes)(arr);
  }; // Process attribute data...


  var extractCustomPropNames = function extractCustomPropNames(arr) {
    return piper(lowerCaseListeners1, removeEventListeners, removeExistingAttributes)(arr);
  }; // NOT CURRENTLY IN USE...
  // Process attribute data...


  var processProps = function processProps(arr) {
    return piper(lowerCaseListeners2, removeEventListeners)(arr);
  }; // Create an object from the isolated event listener array, and the array width
  // the listeners removed...


  var processData = function processData(arr) {
    return {
      // The following object contains 2 arrays, 1 of the event listener attributes, appendChild
      // one of the remaining attributes...
      'eventListeners': processEventListeners(arr),
      'props': extractCustomProps(arr)
    };
  }; // A function for converting a unicode string into a kebabCase string...


  var _shishKebab = function _shishKebab(string) {
    return lodash_words__WEBPACK_IMPORTED_MODULE_2___default()(string).reduce(function (result, word, ix) {
      return result + (ix ? '-' : '') + word.toLowerCase();
    }, '');
  }; // A function for converting the func name to a custom tag name...


  var convertFuncNameToTagName = function convertFuncNameToTagName(func) {
    return _shishKebab(func).indexOf('-') !== -1 ? _shishKebab(func) : "".concat(func.toLowerCase(), "-");
  }; // NO LONGER USED: Use Function.name instead... duh..
  // Function for extracting the func name from the function statement of the
  // function that called createElement...


  var extractFunctionName = function extractFunctionName(element) {
    return functionRegExp.exec(element.toString()).toString().replace(functArgRegExp, '');
  }; // A function for combining to Props objects into 1 new object...


  var combineObjects = function combineObjects(obj1, obj2) {
    return _objectSpread({}, obj1, obj2);
  }; // Removes the hyphen at the end of the component tag name...


  var capitalizeAndRemoveHyphen = function capitalizeAndRemoveHyphen(name) {
    return name[0].toUpperCase() + name.slice(1, name.length - 1);
  }; // Creates a unique custom event string for individual venus element instantiation
  // notification...


  var uniqueCustomEventString = function uniqueCustomEventString(tagName) {
    return "venus".concat(capitalizeAndRemoveHyphen(tagName), "ElementInstantiated");
  }; // A small helper function for determining if a given string is in a given array..


  var included = function included(string, array) {
    if (array.indexOf(string) > 0) {
      return true;
    } else {
      return false;
    }
  }; // A node.js code templating function. The function takes a string of code, and
  // an object containing replacement values.


  var template = function template(obj, code) {
    // Replacement regexp...
    var replaceRE = /\|\|\w+\|\|/,
        variableRE = /\w+/,
        variable,
        tuple,
        match,
        temp; // If we find a replacement match,

    if (replaceRE.test(code)) {
      // store it...
      match = replaceRE.exec(code)[1]; // extract the variable from the match...

      variable = variableRE.exec(match)[1]; // Replace it in the original code with...

      temp = code.replace(match, variable); // Call function again to be sure we don't have anymore matches...

      template(temp, obj);
    } else {
      // load tuple with UppercaseName and code...
      tuple.push(obj.UppercaseName);
      tuple.push(code);
      return tuple;
    }
  }; // A node.js function for filling out and returning in an array, templates, given an array
  // of replacement objects and a template....


  var replicator = function replicator(objArray, template) {
    var loaded, loadedArray; // Load each template using the above template function...

    objArray.forEach(function (obj) {
      loaded = loader(obj, template);
      loadedArray.push(loaded);
    }); // Return the array...

    return loadedArray;
  }; // An array filter function, which splits the array into 2 new arrays.. Those that
  // agree with the given boolean, and those that do not...


  var splitFilter = function splitFilter(array, bool) {
    var t = [],
        f = []; // Iterate over the array...

    array.forEach(function (i) {
      if (bool(i)) {
        t.push(i);
      } else {
        f.push(i);
      }
    }); // Return a tuple of both arrays...

    return {
      true: t,
      false: f
    };
  };
  /* A helper function for processing tagged template literal interpolation functions,
  and inserting their values back into the template.... The function takes an array
  of strings and an array of functions as arguments, and returns the completed
  template string....*/


  var reAssembleTemplates = function reAssembleTemplates(arrStrings, arrFuncs, props) {
    return (// We need to execute them with the props object, and add the value into the template...
      arrStrings.map(function (string, i) {
        var val;
        /*
        Since the interpolation functions (refs) array will always be 1 shorter in length than
        the strings array, The last index will be undefined if we are iterating based on 'string's'
        indeces. So, we make sure that  we don't try to execute an undefined function by skipping
        the last index.....
        */

        if (i < arrStrings.length - 1) {
          // If we have a function...
          if (typeof arrFuncs[i] === 'function') {
            // Execute it with props passed in...
            val = arrFuncs[i](props); // Or, if we have a string...
          } else if (typeof arrFuncs[i] === 'string') {
            // We can just insert it into the template....
            val = arrFuncs[i]; // Otherwise, I don't know what the hell we're dealing with..... Better off
            // throwing an error!
          } else {
            throw TypeError("Expecting a 'string' or a 'function' here. A value of type: ".concat(_typeof(arrFuncs[i]), ", was given."));
          }
        } else {
          val = ' ';
        } // Add ref function values to array strings, join them...


        return string.concat('', val);
      }).join('')
    );
  };
  /*
  A combination of two of the above functions, this function serves to activate prop
  function interpolations in css styling... The function simply takes a tagged template
  literal as an argument, and spits out completed styles, ready for appending to a style tag...
  */


  var applyInterpolations = function applyInterpolations(taggedTempLit, props) {
    // Declare var for splitting strings and functions into respective arrays...
    var arrays = splitFilter(taggedTempLit, function (index) {
      return _Is__WEBPACK_IMPORTED_MODULE_1__["Is"].array(index);
    }); // Reassemble the css literals...

    return reAssembleTemplates(arrays.true[0], arrays.false, props);
  };
  /*
  A helper function that takes a string containing css rules and splits them up
  into individual rule/strings and appends them to an array. An array of rules
  is returned...
  */


  var separateStyleRules = function separateStyleRules(css) {
    return (// Below we are using a regular expression, returning an array of all of it's matches....
      css.match(/[^\s\{][^\{]*\{[^\}]*\}/g)
    );
  };
  /***/

},
/* 5 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "DATA", function () {
    return DATA;
  });
  /*
  data.js
  
  A file to hold information about HTML
  Elements...
  
  Eric James Foster, MIT License.
  */


  var DATA = {
    DOMElementEvents: ['onabort', 'onauxclick', 'onbeforecopy', 'onbeforecut', 'onbeforepaste', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave', 'onpointermove', 'onpointerout', 'onpointerover', 'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsearch', 'onseeked', 'onseeking', 'onselect', 'onselectstart', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onvolumechange', 'onwaiting', 'onwebkitfullscreenchange', 'onwebkitfullscreenerror', 'onwheel'],
    HTMLAttributes: ['accept', 'accept-charset', 'accesskey', 'action', 'align', 'alt', 'async', 'autocomplete', 'autofocus', 'autoplay', 'bgcolor', 'border', 'charset', 'checked', 'cite', 'class', 'classname', 'color', 'cols', 'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords', 'data', 'datetime', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'dropzone', 'enctype', 'for', 'form', 'formaction', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'id', 'ismap', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'muted', 'name', 'novalidate', 'onabort', 'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onblur', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onhashchange', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpopstate', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsearch', 'onseeked', 'onseeking', 'onselect', 'onshow', 'onst', 'onstorage', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onunload', 'onvolumechange', 'onwaiting', 'onwheel', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'readonly', 'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox', 'scope', 'scoped', 'selected', 'shape', 'size', 'sizes', 'span', 'spellcheck', 'src', 'srcdoc', 'srclang', 'srcset', 'start', 'step', 'style', 'tabindex', 'target', 'title', 'translate', 'type', 'usemap', 'value', 'width', 'wrap'],
    ComponentLifecycleEvents: ['componentWillMount', 'componentWillUnmount', 'componentDidMount', 'componentDidUnmount', 'componentWillUpdate', 'componentDidUpdate', 'componentWillReceiveProps'],
    venusComponentElements: [{
      UppercaseName: 'Area',
      name: 'area'
    }, {
      UppercaseName: 'Col',
      name: 'col'
    }, {
      UppercaseName: 'Aside',
      name: 'aside'
    }, {
      UppercaseName: 'Colgroup',
      name: 'colgroup'
    }, {
      UppercaseName: 'Footer',
      name: 'footer'
    }, {
      UppercaseName: 'Header',
      name: 'header'
    }, {
      UppercaseName: 'H2',
      name: 'h2'
    }, {
      UppercaseName: 'H3',
      name: 'h3'
    }, {
      UppercaseName: 'H4',
      name: 'h4'
    }, {
      UppercaseName: 'H5',
      name: 'h5'
    }, {
      UppercaseName: 'H6',
      name: 'h6'
    }, {
      UppercaseName: 'Section',
      name: 'section'
    }, {
      UppercaseName: 'Span',
      name: 'span'
    }, {
      UppercaseName: 'Table',
      name: 'table'
    }, {
      UppercaseName: 'Textarea',
      name: 'textarea'
    }]
  };
  /***/
},
/* 6 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Is", function () {
    return Is;
  });
  /* harmony import */


  var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  /*
  Is.js
  
  A file containing a small type checking utility library...
  
  Eric James Foster, MIT License.
  */
  // Get data...


  var Is =
  /*#__PURE__*/
  function () {
    function Is() {
      _classCallCheck(this, Is);
    }

    _createClass(Is, null, [{
      key: "eventListener",
      // Determines whether or not a prop is an event listener...
      value: function eventListener(name) {
        return /on[A-Z]\w*/g.test(name) || _data__WEBPACK_IMPORTED_MODULE_0__["DATA"].DOMElementEvents.indexOf(name.toLowerCase()) !== -1;
      } // Determines whether or not an attribute name is custom or not...

    }, {
      key: "newPropName",
      value: function newPropName() {
        return _data__WEBPACK_IMPORTED_MODULE_0__["DATA"].HTMLAttributes.indexOf(name.toLowerCase()) === -1;
      } // NOT CURRENTLY IN USE...
      // A boolean function for determining if a func has called for the first time...

    }, {
      key: "newFunction",
      value: function newFunction(funcs, func) {
        return funcs.indexOf(func) == -1;
      } // Simple convenience function for determining if a value is
      // undefined or not...

    }, {
      key: "undefined",
      value: function undefined(val) {
        return typeof val === 'undefined';
      } // Simple convenience function for determining if a value is
      // an object or not...

    }, {
      key: "object",
      value: function object(val) {
        return _typeof(val) === 'object';
      } // Simple convenience function for determining if a value is
      // a number or not...

    }, {
      key: "number",
      value: function number(val) {
        return typeof val === 'number';
      } // Simple convenience function for determining if a value is
      // a string or not...

    }, {
      key: "string",
      value: function string(val) {
        return typeof val === 'string';
      } // Simple convenience function for determining if a value is
      // a function or not...

    }, {
      key: "function",
      value: function _function(val) {
        return typeof val === 'function';
      } // Simple convenience function for determining if a value is
      // a symbol or not...

    }, {
      key: "symbol",
      value: function symbol(val) {
        return _typeof(val) === 'symbol';
      } // Simple convenience function for determining if a value is
      // a boolean or not...

    }, {
      key: "boolean",
      value: function boolean(val) {
        return typeof val === 'boolean';
      } // A simple convenience function for determining if a value is
      // a class or not...

    }, {
      key: "class",
      value: function _class(val) {
        return /_classCallCheck/.test(String(val));
      } // A simple convenience function for determining if a value is
      // a component or not...

    }, {
      key: "component",
      value: function component(tagName) {
        return !tagName.indexOf('-') === -1 && true;
      } // A simple convenience function for determining if a value is
      // a function or not...

    }, {
      key: "array",
      value: function array(val) {
        return Array.isArray(val);
      } // A function for confirming same type...

    }, {
      key: "kin",
      value: function kin(val1, val2) {
        return _typeof(val1) === _typeof(val2);
      } // A function for determining whether or not a propType is Required...

    }, {
      key: "requiredProp",
      value: function requiredProp(types) {
        return types.length === 1;
      } // A function for determining if a tagged template literal has interpolations...

    }, {
      key: "interpolated",
      value: function interpolated(tagTempLit) {
        return tagTempLit.length > 1;
      }
    }]);

    return Is;
  }();
  /***/

},
/* 7 */

/***/
function (module, exports, __webpack_require__) {
  var asciiWords = __webpack_require__(8),
      hasUnicodeWord = __webpack_require__(9),
      toString = __webpack_require__(10),
      unicodeWords = __webpack_require__(23);
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
/* 8 */

/***/
function (module, exports) {
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
/* 9 */

/***/
function (module, exports) {
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
/* 10 */

/***/
function (module, exports, __webpack_require__) {
  var baseToString = __webpack_require__(11);
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
/* 11 */

/***/
function (module, exports, __webpack_require__) {
  var Symbol = __webpack_require__(12),
      arrayMap = __webpack_require__(16),
      isArray = __webpack_require__(17),
      isSymbol = __webpack_require__(18);
  /** Used as references for various `Number` constants. */


  var INFINITY = 1 / 0;
  /** Used to convert symbols to primitives and strings. */

  var symbolProto = Symbol ? Symbol.prototype : undefined,
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
/* 12 */

/***/
function (module, exports, __webpack_require__) {
  var root = __webpack_require__(13);
  /** Built-in value references. */


  var Symbol = root.Symbol;
  module.exports = Symbol;
  /***/
},
/* 13 */

/***/
function (module, exports, __webpack_require__) {
  var freeGlobal = __webpack_require__(14);
  /** Detect free variable `self`. */


  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || Function('return this')();
  module.exports = root;
  /***/
},
/* 14 */

/***/
function (module, exports, __webpack_require__) {
  /* WEBPACK VAR INJECTION */
  (function (global) {
    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
    module.exports = freeGlobal;
    /* WEBPACK VAR INJECTION */
  }).call(this, __webpack_require__(15));
  /***/
},
/* 15 */

/***/
function (module, exports) {
  var g; // This works in non-strict mode

  g = function () {
    return this;
  }();

  try {
    // This works if eval is allowed (see CSP)
    g = g || new Function("return this")();
  } catch (e) {
    // This works if the window reference is available
    if (typeof window === "object") g = window;
  } // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}


  module.exports = g;
  /***/
},
/* 16 */

/***/
function (module, exports) {
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
/* 17 */

/***/
function (module, exports) {
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
/* 18 */

/***/
function (module, exports, __webpack_require__) {
  var baseGetTag = __webpack_require__(19),
      isObjectLike = __webpack_require__(22);
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
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }

  module.exports = isSymbol;
  /***/
},
/* 19 */

/***/
function (module, exports, __webpack_require__) {
  var Symbol = __webpack_require__(12),
      getRawTag = __webpack_require__(20),
      objectToString = __webpack_require__(21);
  /** `Object#toString` result references. */


  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';
  /** Built-in value references. */

  var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
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
/* 20 */

/***/
function (module, exports, __webpack_require__) {
  var Symbol = __webpack_require__(12);
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

  var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
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
/* 21 */

/***/
function (module, exports) {
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
/* 22 */

/***/
function (module, exports) {
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
    return value != null && typeof value == 'object';
  }

  module.exports = isObjectLike;
  /***/
},
/* 23 */

/***/
function (module, exports) {
  /** Used to compose unicode character classes. */
  var rsAstralRange = "\\ud800-\\udfff",
      rsComboMarksRange = "\\u0300-\\u036f",
      reComboHalfMarksRange = "\\ufe20-\\ufe2f",
      rsComboSymbolsRange = "\\u20d0-\\u20ff",
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = "\\u2700-\\u27bf",
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = "\\u2000-\\u206f",
      rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = "\\ufe0e\\ufe0f",
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
  /** Used to compose unicode capture groups. */

  var rsApos = "['\u2019]",
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = "\\ud83c[\\udffb-\\udfff]",
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = "\\u200d";
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
/* 24 */

/***/
function (module, exports, __webpack_require__) {
  ;

  var _module$exports;

  var _element = __webpack_require__(25);

  var _element2 = _interopRequireDefault(_element);

  var _httpRequests = __webpack_require__(31);

  var requests = _interopRequireWildcard(_httpRequests);

  var _events = __webpack_require__(29);

  var events = _interopRequireWildcard(_events);

  var _logger = __webpack_require__(26);

  var consol = _interopRequireWildcard(_logger);

  var _utilities = __webpack_require__(28);

  var utils = _interopRequireWildcard(_utilities);

  var _DOM = __webpack_require__(30);

  var DOM = _interopRequireWildcard(_DOM);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
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
  }; //This function will simply return true if the given element exists in the DOM, and false otherwise. not a public function.


  var _$ = function _$(el) {
    return null !== utils.queryDOM(el);
  };

  var isArray = function isArray(arr) {
    return utils.isArray(arr);
  }; //This function queries the dom, getting one element for each query (i.e. class/tags), creates
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
  }; //Create element alias function.


  var make = function make(el, tag) {
    return DOM.make(el, tag);
  }; //DOM querying alias function. Will automatically narrow class or tag queries down to one result. It will not return an array.


  var el = function el(l) {
    return utils.queryDOM(l);
  }; //Function for appending elements to other elements.


  var put = function put(el, mom) {
    return DOM.put(el, mom);
  }; //Function for deleting elements from the DOM tree.


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
  }; //console.log alias function.


  var log = function log(text, style, tyme) {
    return consol.log(text, style, tyme);
  }; //console.error alias function.


  var err = function err(text, tyme) {
    return consol.err(text, tyme);
  }; //console.info alias function.


  var info = function info(text, tyme) {
    return consol.info(text, tyme);
  }; //console.warn alias function.


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
  }; //This practically useless function will lock up the browser for a preset amount of time.


  var sleep = function sleep(milliseconds) {
    return utils.sleep(milliseconds);
  }; //A function for combining strings for urls


  var url = function url(bit1, bit2) {
    var bit3 = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
    var bit4 = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];
    return bit1 + bit2 + bit3 + bit4;
  }; //This is a synchronous alias function for XMLHttpRequests.


  var xhr = function xhr(url, fd, method) {
    return requests.xhr(url, fd, method);
  }; //This is an asynchronous alias function for XMLHttpRequests.


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
  }; //Function for setting event listeners.


  var on = function on(event, el, callback) {
    if (document.addEventListener) {
      return events.on(event, el, callback);
    } else {
      return events.onIE(event, el, callback);
    }
  }; //Function for removing event listeners.


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
  }; //<<=================May have found a better solution.======================================>>//

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
  }, _defineProperty(_module$exports, 'clone', clone), _defineProperty(_module$exports, 'spark', spark), _defineProperty(_module$exports, 'blur', blur), _defineProperty(_module$exports, 'click', click), _defineProperty(_module$exports, 'dblClick', dblClick), _defineProperty(_module$exports, 'error', error), _defineProperty(_module$exports, 'focus', focus), _defineProperty(_module$exports, 'focusIn', focusIn), _defineProperty(_module$exports, 'focusOut', focusOut), _defineProperty(_module$exports, 'keyUp', keyUp), _defineProperty(_module$exports, 'keyDown', keyDown), _defineProperty(_module$exports, 'load', load), _defineProperty(_module$exports, 'unLoad', unLoad), _defineProperty(_module$exports, 'mouse', mouse), _defineProperty(_module$exports, 'resize', resize), _defineProperty(_module$exports, 'scroll', scroll), _defineProperty(_module$exports, 'select', select), _module$exports); //DONE:30 functions: err(), info(), warn().
  //DONE:130 Complete all standalone style functions.

  /***/
},
/* 25 */

/***/
function (module, exports, __webpack_require__) {
  ;

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };
  /*
  Element.js
  
  This is a helper file for the elements.js index, which houses
  the code for the Element Class.
  
  Author: Eric James Foster
  License: ISC
  */


  exports.default = Element;

  var _logger = __webpack_require__(26);

  var _utilities = __webpack_require__(28);

  var _events = __webpack_require__(29);

  var events = _interopRequireWildcard(_events);

  var _DOM = __webpack_require__(30);

  var DOM = _interopRequireWildcard(_DOM);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  } //DOING:10 List all functions that need to be added (.textContent, innerHTML etc.)
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
    } // Style methods //


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
    }; //<<========= Transform Methods ======================>>


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
    }; // Element object methods //

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
    }; // this.toggle = function(onFunc, offFunc) {                                 //NOTE: May be unnecessary.
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
    }; //---------Event Methods-----------------//


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
    }; /////// Experimental Methods ////////


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
      } // if (eachCount === onlyArr.length) {
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
    }; //<<================Attribute Methods==================>>//


    this.attrib = function (attrib, val) {
      //TEST:0 Make sure this works
      var r = val !== undefined && val !== 'remove' ? (this.el.setAttribute(attrib, val), undefined) : attrib !== undefined && val !== 'remove' ? this.el.getAttribute(attrib) : (this.el.removeAttribute(attrib), undefined); // (r !== undefined) ?                                                     //TODO:10 See if you can make this work.
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
  }

  ;
  /***/
},
/* 26 */

/***/
function (module, exports, __webpack_require__) {
  ;
  /*
  logger.js
  
  This file contains the code for the various logging functions
  of the library.
  
  Author: Eric James Foster
  License: ISC
  */

  var colors = __webpack_require__(27); //DONE:90 Add second argument for log ID purposes, figure best way to approach this.
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
      return console.log(colors(text, {
        fg: colr,
        style: styl
      }) + '   '.repeat(10) + t);
    } else {
      var color = colr,
          bgColor = styl,
          css = 'background: ' + bgColor + '; color: ' + color;
      return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
    }
  }; //Console.error alias function.


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
      return console.log(colors(text, {
        fg: colr,
        style: styl
      }) + '   '.repeat(10) + t);
    } else {
      var color = colr,
          bgColor = '',
          css = 'background: ' + bgColor + '; color: ' + color;
      return console.error('%c' + text + '%s', css, '   '.repeat(10) + t);
    }
  }; //Console.error alias function.


  var error = function error(text) {
    return console.error(text);
  }; //Console.info alias function.


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
      return console.log(colors(text, {
        fg: colr,
        style: styl
      }) + '   '.repeat(10) + t);
    } else {
      var color = colr,
          bgColor = '',
          css = 'background: ' + bgColor + '; color: ' + color;
      return console.info('%c' + text + '%s', css, '   '.repeat(10) + t);
    }
  }; //Console.warn alias function.


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
      return console.log(colors(text, {
        fg: colr,
        style: styl
      }) + '   '.repeat(10) + t);
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
/* 27 */

/***/
function (module, exports, __webpack_require__) {
  ;

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
  }; // generate foreground normal colors

  for (var i in names) {
    Colors.fg[names[i]] = +i + 30;
  } // generate foreground bright colors


  for (var i in namesBright) {
    Colors.fg[namesBright[i]] = +i + 90;
  } // generate background normal colors


  for (var i in names) {
    Colors.bg[names[i]] = +i + 40;
  } // generate background bright colors


  for (var i in namesBright) {
    Colors.bg[namesBright[i]] = +i + 100;
  } // generate style attributes


  for (var i in namesStyle) {
    if (!namesStyle[i]) continue;
    Colors.style[namesStyle[i]] = +i + 1;
  }

  function formatColor(color) {
    color = color || {};
    var fg = Colors.fg[color.fg] || 39;
    var bg = Colors.bg[color.bg] || 49;
    var style = Colors.style[color.style] || 0; //	var code = '\x1b';

    return '\x1b[' + style + ';' + fg + ';' + bg + 'm';
  }

  function colorize(str, colors) {
    if (!str || typeof colors !== 'object') return str;
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
/* 28 */

/***/
function (module, exports, __webpack_require__) {
  ;

  var _logger = __webpack_require__(26); //TODO:20 browser detection functionality, noop(), merge(), toggle().


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
  }; //This practically useless function will lock up the browser for a preset amount of time.


  var sleep = function sleep(milliseconds) {
    var start = new Date().getTime();

    while (true) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }; //This function will alternate function calls depending on the value of a global flag.


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
  }

  ; //Boolean function returns true if given function has given ancestor, and false otherwise. Checks 6 parents deep.

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
    } //For inspection....
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
  }

  ;

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
  }

  ;

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
/* 29 */

/***/
function (module, exports, __webpack_require__) {
  ;

  var _logger = __webpack_require__(26);

  var _utilities = __webpack_require__(28);

  var utils = _interopRequireWildcard(_utilities);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  } //DONE:10 Complete X-Browser support for these 3 functions.

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
  }; //Function for setting event listeners.


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
  }; //Function for removing event listeners.


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
  }; //Function for removing event listeners.


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
    var cb = callback; //DONE:80 Test once function.

    var callBack = function callBack(e) {
      cb(e);
      el.removeEventListener(event, callBack);
    };

    el = utils.queryDOM(el);
    return el.addEventListener(event, callBack);
  };

  var onceIE = function onceIE(event, el, callback) {
    var cb = callback; //DONE:90 Test onceIE function.

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
    var cb = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2]; //sufx is string, options are 'up', 'down', 'enter', 'leave', 'over', 'out' and 'move'.

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
/* 30 */

/***/
function (module, exports, __webpack_require__) {
  ;

  var _element = __webpack_require__(25);

  var _element2 = _interopRequireDefault(_element);

  var _logger = __webpack_require__(26);

  var _utilities = __webpack_require__(28);

  var utils = _interopRequireWildcard(_utilities);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  } //TODO:0 Check out querySelector() method, see if it helps out.
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
  }; //Create element alias function.

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
  }; //------------------------------This function is not being used in the current build ---------------------------//
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
  }; //Function for deleting elements from the DOM tree.


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
  }; //DOM function for inserting an element before a specified node.


  var fore = function fore(ref, elem) {
    return utils.queryDOM(ref).parentNode.insertBefore(utils.queryDOM(elem), utils.queryDOM(ref));
  }; //DOM function for inserting an element after a specified node.


  var aft = function aft(ref, elem) {
    ref = utils.queryDOM(ref);
    ref = ref.nextElementSibling;
    return ref.parentNode.insertBefore(utils.queryDOM(elem), ref);
  }; //DOM function for showing an element, or a list of elements.


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
  }; //DOM function for hiding an element, or a list of elements.


  var hide = function hide(elem) {
    elem = utils.queryDOM(elem);

    if (Array.isArray(elem)) {
      elem.forEach(function (l) {
        l.style.display = 'none';
      });
    } else {
      elem.style.display = 'none';
    }
  }; //DOM function for setting height and width of an element. 's' is an object, with height and width as keys.


  var size = function size(elem, h, w) {
    elem = utils.queryDOM(elem);
    elem.style.height = h;
    elem.style.width = w;
    return elem;
  }; //function clones given node.ddeep is a boolean, if true, clone will include all descendants as well as node and its' attributes.


  var clone = function clone(elem, deep) {
    var node = elem.cloneNode(deep);
    return node;
  }; //Function for setting css style properties of elements.
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
/* 31 */

/***/
function (module, exports, __webpack_require__) {
  ;

  var _logger = __webpack_require__(26); //DONE:20 Complete X-Browser support for both functions.
  //This is an alias function for XMLHttpRequests.


  var xhr = function xhr(url, fd, method) {
    //DONE:80 Perfect this function.
    var formData; //DONE:100 Build FormData in function from object that user passes as an argument.

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
    } //log('fd'); log(formData);


    var m = method || 'get'; // var data = fd || null;

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
    } //log('fd'); log(formData);


    var m = method || 'get';

    if (formData !== null) {
      m = 'post';
    } // var data = fd;


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
/* 32 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Form", function () {
    return Form;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_Is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
  /* harmony import */


  var _Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
  /* harmony import */


  var _Props_Props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
  /* harmony import */


  var _Venus_Venus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
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
  // Get Venus...
  // Globalize common utilities...


  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];
  var dir = console.dir; // Form Virtual DOM...

  var Form =
  /*#__PURE__*/
  function () {
    function Form(node, root) {
      _classCallCheck(this, Form); // The old DOM for diffing purposes...


      this.DOM = node;
      this.DOMString = String(this.DOM);
      this.propString = String(this.DOM.props); // The new DOM for diffing...

      this.newDOM = null; // If newDOM is set, set the following...

      if (this.newDOM) {
        this.newDOMString = String(this.newDOM);
        this.newPropString = String(this.newDOM.props);
      } // Get a reference to Valence's mount node...


      this.rootNode = root;
    } // Variable holds an array of venusComponent names..


    _createClass(Form, [{
      key: "_isStatefulComponent",
      // Computed property that resolves whether or not the given node is a component or not...
      value: function _isStatefulComponent(node) {
        return node.props.isStatefulComponent ? true : false;
      } // Method for updating an element and all of it's children recursively...

    }, {
      key: "updateDOM",
      value: function updateDOM(parent, newNode) {
        var oldNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0; // Get a reference to the current node and incoming props...

        var thisNode = parent.childNodes[index];
        var nextProps = newNode.props; // If this node is a component, check it's `shouldComponentUpdate` method to
        // confirm whether or not an update is necessary...

        if (this._isStatefulComponent(thisNode)) {
          if (!thisNode.type.shouldComponentUpdate(thisNode.props
          /*, this.state?*/
          )) {
            return;
          }
        } // Set newDOM...


        if (this.newDOM = null) {
          this.newDOM = newNode;
        } // If first pass, oldNode will need to be set...


        if (oldNode === null) {
          oldNode = this.DOM;
        } // Get diff length...


        var diff = function diff() {
          return Math.abs(newNode.children.length - oldNode.children.length);
        }; // newNode exist where there is no oldNode...


        if (!oldNode) {
          // Create a new node and append it to DOM...
          parent.appendChild(_Node__WEBPACK_IMPORTED_MODULE_2__["Node"].createNode(newNode)); // OldNode exists where there is no newNode...
        } else if (!newNode) {
          // If current node is a component, fire willUnmount event...
          if (this._isStatefulComponent(thisNode)) {
            _Events__WEBPACK_IMPORTED_MODULE_4__["Events"].fire('componentWillUnmount', thisNode, thisNode.props);
          } // Then remove the node...


          parent.removeChild(thisNode); // The node has changed, 'tag' or 'props', for example...
        } else if (this._changed) {
          parent.replaceChild(_Node__WEBPACK_IMPORTED_MODULE_2__["Node"].createNode(newNode), thisNode); // None of the above apply, and the node is not a textNode...
        } else if (!_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].string(newNode)) {
          // If newNode is  component, fire componentWillReceiveProps event with new props,
          // then update props...
          if (this._isStatefulComponent(thisNode)) {
            _Events__WEBPACK_IMPORTED_MODULE_4__["Events"].fire('componentWillReceiveProps', thisNode, thisNode.props);
          }

          _Props_Props__WEBPACK_IMPORTED_MODULE_3__["Props"].update(thisNode, newNode.props, oldNode.props); // Then children and their props...


          for (var i = 0; i < diff(); i++) {
            updateElement(thisNode, newNode.children[i], oldNode.children[i], i);
          }
        }

        this.DOM = newNode;
      } // A helper method representing the API of the virtual DOM...

    }, {
      key: "draw",
      // Method for rendering the virtual dom to real dom... The method takes
      // Valence.createElement as it's second argument...
      value: function draw() {
        return _Node__WEBPACK_IMPORTED_MODULE_2__["Node"].createNode(this.DOM);
      }
    }, {
      key: "_changed",
      // Computed property that determines whether or not 2 nodes
      // have changed...
      get: function get() {
        // Compare DOMStrings...
        return this.newDOMString !== this.DOMString || this.newDOM.props.forceUpdate;
      }
    }, {
      key: "_propsChanged",
      get: function get() {
        // Compare PropStrings...
        return this.newPropString !== this.propString;
      }
    }], [{
      key: "x",
      value: function (_x) {
        function x(_x2, _x3) {
          return _x.apply(this, arguments);
        }

        x.toString = function () {
          return _x.toString();
        };

        return x;
      }(function (type, props) {
        for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          children[_key - 2] = arguments[_key];
        } // If type = false, the node is a venus component, and needs to be defined.


        if (type.venus) {
          // Get a variable... load with x's caller function's code
          var xCaller = x.caller.toString(),
              xCallerName = x.caller.name; // Use the above to define Venus Component.. and also 'type' for the node...

          type = _Venus_Venus__WEBPACK_IMPORTED_MODULE_5__["Venus"].interfaceFormX(xCallerName, xCaller, type.el, type.taggedTempLit, props, type.props);
        } // Return a new Node...


        return new _Node__WEBPACK_IMPORTED_MODULE_2__["Node"]({
          type: type,
          props: props,
          children: children
        });
      })
    }]);

    return Form;
  }();

  _defineProperty(Form, "_venusComponentNames", []);
  /***/

},
/* 33 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Node", function () {
    return Node;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_Is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
  /* harmony import */


  var _Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
  /* harmony import */


  var _Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
  /* harmony import */


  var _Props_Props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
  /* harmony import */


  var _Props_PropTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  /*
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
  // Get Events...
  // Globalize common utilities...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"]; // Form Virtual DOM Node...

  var Node =
  /*#__PURE__*/
  function () {
    // Node type instance constructor...
    function Node(_ref) {
      var type = _ref.type,
          props = _ref.props,
          children = _ref.children;

      _classCallCheck(this, Node);

      this.type = type; // If no props, make sure an empty object is created...

      var _props = props || {};

      this.props = new _Props_Props__WEBPACK_IMPORTED_MODULE_4__["Props"](_props);
      this.children = children;
    } // An internal class method for processing component props...


    _createClass(Node, null, [{
      key: "processNodeProps",
      value: function processNodeProps(props, ctor) {
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}; // Get customPropNames for custom prop registration, and propNames for validation...

        var customPropNames = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["extractCustomPropNames"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propNames"](props)); // If user registered proptypes on the component, proceed with prop validation...


        if (type.propTypes) {
          var propNames = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propNames"](type.propTypes); // Validate that all supplied prop value types match that of registered propTypes...


          props = _Props_Props__WEBPACK_IMPORTED_MODULE_4__["Props"].validate(props, propNames, type);
        } // Register custom element attributes...


        _Props_Props__WEBPACK_IMPORTED_MODULE_4__["Props"].registerCustom(ctor, customPropNames); // Register all element attributes as observedAttributes...


        _Props_Props__WEBPACK_IMPORTED_MODULE_4__["Props"].registerObserved(ctor, props); // Need to return both props and the constructor to the Caller's context


        return {
          props: props,
          ctor: ctor
        };
      } // Either create the given element, or if it's a component, define the element then
      // create it...

    }, {
      key: "createNode",
      value: function createNode(node) {
        //
        if (_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].string(node)) {
          // Create and return the given text node...
          return document.createTextNode(node);
        } else {
          // Declare tag var..
          var tagName, shadow; // Determine if elem is an element or a Component...
          // If it's a function....

          if (_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].function(node.type)) {
            props = node.props, elementConstructor = node.type; // Extract function name...

            var funcName = node.type.name; // Convert the given function name to it's corresponding component tagname...

            tagName = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["convertFuncNameToTagName"](funcName); // Determine if it's a class...

            if (!_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].class(node.type)) {
              // Set up component creation, first arg..
              var component = [tagName, node.type]; // Extract shadow setting from Props if available...

              if (node.props.shadow) {
                shadow = node.props.shadow;
              } // Return completed component...


              elementConstructor = _Component__WEBPACK_IMPORTED_MODULE_3__["Component"].createComponent(component, node.props, node.children, shadow); // Add `isStatelessComponent` property so that the shim flags can be
              // reset after element creation...

              node.props.isStatelessComponent = true;
            } else {
              // Add `isStatefulComponent` privateProp for update purposes...
              node.props.isStatefulComponent = true;
            } // Process props...


            var processed = Node.processNodeProps(node.props, elementConstructor, node.type); // Use Custom elements API to define a custom tag/component...

            window.customElements.define(tagName, // Doing double duty here.. The ctor must be returned from this function anyhow,
            // so I'm dropping it in here to avoid redundancy...
            processed.ctor);

            if (processed.props.rootNode) {
              // Create and dispatch event confirming definition of the root node.
              _Events__WEBPACK_IMPORTED_MODULE_6__["Events"].emit('rootNodeDefined'); // Set root node definition flag...


              window.rootNodeDefined = true;
            } // Set node.type to tagName of the component, and props to the amended props
            // object...


            node.props = processed.props;
            node.type = tagName;
          } // Use DOM API (via Valence Element class) to create element and return it...


          return _Element__WEBPACK_IMPORTED_MODULE_2__["Element"].createElement(node);
        }
      }
    }]);

    return Node;
  }();
  /***/

},
/* 34 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Element", function () {
    return Element;
  });
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_Is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
  /* harmony import */


  var _Props_Props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  /*
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
  // Globalize common _...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_1__["log"];

  var Element =
  /*#__PURE__*/
  function () {
    function Element() {
      _classCallCheck(this, Element);
    }

    _createClass(Element, null, [{
      key: "createElement",
      // Create a Valence element...
      value: function createElement(_ref) {
        var type = _ref.type,
            _ref$props = _ref.props,
            props = _ref$props === void 0 ? {} : _ref$props,
            children = _ref.children; // Pre-declare inner functions...

        var makeDOMElement, setProps, addEventListeners, appendChildren, elem; // Create a new DOM element...

        makeDOMElement = function makeDOMElement(tagName) {
          //       if (window.venusComponents.indexOf(tagName) != -1) {
          // // Flip the required switches...
          //         window.useNativeShim = false
          //         window.HTMLElement   = window._HTMLElement
          //       }
          // Create a new element given the tag name, and
          // store for sending through the pipe......
          elem = document.createElement(tagName); // If we just created a Venus Component element...

          if (window.venusComponents.indexOf(tagName) != -1) {
            // Emit an event that cues Venus to set props on the newly created element...
            _Events__WEBPACK_IMPORTED_MODULE_3__["Events"].emit(tagName, {
              element: elem
            });
          }
          /* If `Reflect` programmatic library constructed component, reset native-shim flag,
          and also reset window.HTMLElement to the nativeShim.js patched version...
          */


          if (props.isStatelessComponent) {
            window.useNativeShim = true;
            window.HTMLElement = window.HTMLElement_; // Push tagname to global collection..

            window.statelessComponents.push(tagName);
          } // Send the created element through the pipe...


          return elem;
        }; // Set given attributes on the created element....


        setProps = function setProps(elem) {
          if (props) {
            /* If setting props on user defined (stateful) component, fire willRecieveProps
            event..*/
            if (props.isStatefulComponent) {
              _Events__WEBPACK_IMPORTED_MODULE_3__["Events"].fire('componentWillReceiveProps', elem, props);
            }
            /* The ref function is defined in jsx markup as a prop in curlies, and When
             * we get to this point in the definition of the ref'd element, we access the
             * function via props and execute it, injecting the brand new element instance
             * that we just created in the function above. This will complete the purpose
             * of the ref function, which is to pass the reference into a variable, but in
             * the context in which it was defined, the component definition...
             */


            if (props.ref) {
              props.ref(elem);
            } // Set props and return the element to the pipe...


            return _Props_Props__WEBPACK_IMPORTED_MODULE_4__["Props"].set(elem, props);
          }
        }; // Add event listener(s) to element...


        addEventListeners = function addEventListeners(elem) {
          _Utilities_helpers__WEBPACK_IMPORTED_MODULE_1__["propNames"](props).forEach(function (name) {
            if (_Utilities_Is__WEBPACK_IMPORTED_MODULE_2__["Is"].eventListener(name)) {
              elem.addEventListener(_Utilities_helpers__WEBPACK_IMPORTED_MODULE_1__["sansON"](name), props[name]);
            }
          }, elem);

          return elem;
        }; // Add elements children to the DOM.....


        appendChildren = function appendChildren(elem) {
          // Determine if elem is a string or a Component...
          if (children) {
            // Append children...
            children.map(_Form_Node__WEBPACK_IMPORTED_MODULE_5__["Node"].createNode, _Form_Node__WEBPACK_IMPORTED_MODULE_5__["Node"]).forEach(elem.appendChild, elem);
          } // Return the element...


          return elem;
        }; // Connected to each other with the higher-order function piper, the following will
        // return the requested element...


        return _Utilities_helpers__WEBPACK_IMPORTED_MODULE_1__["piper"](makeDOMElement, setProps, addEventListeners, appendChildren)(type);
      }
    }]);

    return Element;
  }();
  /***/

},
/* 35 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Events", function () {
    return Events;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  /*
  Dispatch.js
  Dispatch is the custom event creation and dispatch class behind
  the Valence component lifecycle methods...
  Eric James Foster, MIT License.
  */
  // Globalize log function...


  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];

  var Events =
  /*#__PURE__*/
  function () {
    function Events() {
      _classCallCheck(this, Events);
    }

    _createClass(Events, null, [{
      key: "fire",
      // Using emerging js reflection to create a single method for dispatching
      // lifecycle event callbacks...
      value: function fire(event, target) {
        var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var lifecycleEvent = Reflect.construct(CustomEvent, [event, {
          'detail': detail
        }]);
        return target.dispatchEvent(lifecycleEvent);
      } // Creating a second Event dispatching method for dispatching non-lifecycle events, and
      // custom events with dynamic event strings...

    }, {
      key: "emit",
      value: function emit(eventOrTag) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // Determine whether first arg is an event string or a tagname...

        if (_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["included"]('-', eventOrTag)) {
          // If tagname, create a listener for a custom venus event.
          var customEventString = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["uniqueCustomEventString"](eventOrTag); // Instantiate custom event...


          var ev = new CustomEvent(customEventString, {
            'detail': detail
          }); // Dispatch the event...

          document.dispatchEvent(ev);
        } else {
          // Instantiate custom event...
          var _ev = new CustomEvent(eventOrTag, {
            'detail': detail
          }); // Dispatch the event...


          document.dispatchEvent(_ev);
        }
      } // A static helper method for developing event listener functions...

    }, {
      key: "listen",
      value: function listen(eventOrTag, cb) {
        // Determine whether first arg is an event string or a tagname...
        if (_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["included"]('-', eventOrTag)) {
          // If tagname, create a listener for a custom venus event.
          var customEventString = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["uniqueCustomEventString"](eventOrTag); // Add listener...


          document.addEventListener(customEventString, function (e) {
            cb(e);
          });
        } else {
          // Add listener with given event string...
          document.addEventListener(eventOrTag, function (e) {
            cb(e);
          });
        }
      } // Static class method for registering event listener callback methods on
      // a given HTMLElement...

    }, {
      key: "registerCallbacks",
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
  /***/

},
/* 36 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Props", function () {
    return Props;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_Is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
  /* harmony import */


  var _PropTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  /*
  Props.js
  
  Valence, a JavaScript library for building UI's, with an API
  resembling that of React, but uses Vanilla JS Web components
  under the hood...This file handles  element
  property (props) creation, assignment etc...
  
  Eric James Foster, MIT License.
  */
  // Get utilities...
  //Get PropTypes...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];

  var Props =
  /*#__PURE__*/
  function () {
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
    } // An internal method for applying the default props when none are supplied...


    _createClass(Props, null, [{
      key: "_applyDefault",
      value: function _applyDefault(defaultProps, propName) {
        return defaultProps[propName];
      } // An object to hold prop types for type checking purposes...

    }, {
      key: "validate",
      value: function validate(props, propNames, component) {
        var _this = this; // Cycle through props, comparing it's value type with it's expected propType...


        var validatedProps = propNames.reduce(function (propsObj, propName) {
          // Store types, default props, prop value and value type...
          var types = null,
              defProps = null,
              propValue = props[propName],
              valueType = _typeof(propValue); // Don't want to attempt to access propTypes or defaultProps if they don't exist.
          // but if they do, store them...


          if (component.propTypes[propName]) {
            types = component.propTypes[propName].types;
          }

          if (component.defaultProps) {
            defProps = component.defaultProps;
          } // If prop is undefined...


          if (propValue === undefined) {
            // but propType specifies `required`...
            if (_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].requiredProp(types)) {
              // If we have defaultProp...
              if (defProps) {
                // Apply it to props object...
                propValue = _this._applyDefault(defProps, propName);
                return _objectSpread({}, propsObj, _defineProperty({}, propName, propValue)); // Else, output warning to the console, and pass undefined prop to props object...
              } else {
                console.warn("Warning: Failed PropType: Required prop `".concat(propName, "` is undefined."));
                return _objectSpread({}, propsObj, _defineProperty({}, propName, propValue));
              }
            }
            /*else (who cares) {}*/
            // Or, if value type is not among propTypes' specified types...

          } else if (types.indexOf(valueType) === -1) {
            // output warning to console, and add our value to the props object....
            console.warn("Warning: Failed PropType: Prop `".concat(propName, "` was given a value of type `").concat(valueType, "`, expected `").concat(types[0], "`."));
            return _objectSpread({}, propsObj, _defineProperty({}, propName, propValue)); // Else, everything is just as it should be. Add value to props object...
          } else {
            return _objectSpread({}, propsObj, _defineProperty({}, propName, propValue));
          }
        }, {}); // Return the props object...

        return _objectSpread({}, props, validatedProps);
      } // A simple boolean for determining if prop is custom or not...

    }, {
      key: "_isPrivateProp",
      value: function _isPrivateProp(name) {
        return _Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].eventListener(name) || name === 'forceUpdate' || name === 'isStatefulComponent' || name === 'isStatelessComponent' || name === 'ref' || name === 'noChild' || name === 'rootNode' || name === 'Venus' || name === 'venus' || name === 'label' || name === 'content' || name === 'identity';
      } // Method for updating props...

    }, {
      key: "update",
      value: function update(elem, newProps) {
        var _this2 = this;

        var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var updateProp; // Check if the given prop on the given element needs updated or not,
        // and update, add or remove it...

        updateProp = function updateProp(elem, name, newVal, oldVal) {
          if (!newVal) {
            _this2.remove(elem, name, oldVal);
          } else if (!oldVal || newVal !== oldVal) {
            _this2.set(elem, name, newVal);
          }
        }; // Combine old and new props into 1 new object...


        var props = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["combineObjects"](newProps, oldProps); // Get an array of unique props keys and use it to iterate through
        // both objects comparing for differences and update requirements...


        Object.keys(props).forEach(function (name) {
          updateProp(elem, name, newProps[name], oldProps[name]);
        });
      } // Set given attributes on the created element....

    }, {
      key: "set",
      value: function set(elem, props) {
        var _this3 = this;

        var setProp, setBooleanProp; // A function for setting boolean properties on elements...

        setBooleanProp = function setBooleanProp(elem, name, value) {
          if (value) {
            elem.setAttribute(name, value);
            elem[name] = true;
          } else {
            elem[name] = false;
          }
        }; // A function for setting props...


        setProp = function setProp(elem, name, value) {
          if (_this3._isPrivateProp(name)) {
            return;
          } else if (name === 'className') {
            elem.setAttribute('class', value);
          } else if (_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].boolean(value)) {
            setBooleanProp(elem, name, value);
          } else {
            elem.setAttribute(name, value);
          }
        }; // Remove event listeners from attributes...


        var propsArray = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props); // Determine if elem is a string or a Component...


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
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } // Return element...


        return elem;
      } // Method for setting up a list of observed attributes. These attributes
      // will trigger the attributesChangedCallback method on the custom
      // element when changed in any way...

    }, {
      key: "registerObserved",
      value: function registerObserved(ctor, propNames) {
        Object.defineProperties(ctor.prototype, {
          observedAttributes: {
            get: function get() {
              return propNames;
            }
          }
        });
      } // Method for setting custom attributes of custom elements...

    }, {
      key: "registerCustom",
      value: function registerCustom(ctor, propNames) {
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
      } // A method for removing Properties...

    }, {
      key: "remove",
      value: function remove(elem, name, value) {
        // A function for removing boolean properties...
        var removeBooleanProp = function removeBooleanProp(elem, name) {
          elem.removeAttribute(name);
          elem[name] = false;
        }; // Remove Properties...


        if (this._isPrivateProp(name)) {
          return;
        } else if (name === 'classname') {
          elem.removeAttribute('class');
        } else if (_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].boolean(value)) {
          removeBooleanProp(elem, name);
        } else {
          elem.removeAttribute(name);
        }
      }
    }]);

    return Props;
  }();
  /***/

},
/* 37 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "PropTypes", function () {
    return PropTypes;
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  PropTypes.js
  
  Valence, a JavaScript library for building UI's, with an API
  resembling that of React, but uses Vanilla JS Web components
  under the hood...This file handles property type-checking
  functionality...
  
  Eric James Foster, MIT License.
  */


  var PropTypes = function PropTypes() {
    _classCallCheck(this, PropTypes);
  };

  _defineProperty(PropTypes, "boolean", {
    types: ['boolean', 'undefined'],
    isRequired: {
      types: ['boolean']
    }
  });

  _defineProperty(PropTypes, "number", {
    types: ['number', 'undefined'],
    isRequired: {
      types: ['number']
    }
  });

  _defineProperty(PropTypes, "string", {
    types: ['string', 'undefined'],
    isRequired: {
      types: ['string']
    }
  });

  _defineProperty(PropTypes, "symbol", {
    types: ['symbol', 'undefined'],
    isRequired: {
      types: ['symbol']
    }
  });

  _defineProperty(PropTypes, "object", {
    types: ['object', 'undefined'],
    isRequired: {
      types: ['number']
    }
  });

  _defineProperty(PropTypes, "array", {
    types: ['array', 'undefined'],
    isRequired: {
      types: ['array']
    }
  });
  /***/

},
/* 38 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Component", function () {
    return Component;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  /*
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
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var el = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["el"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];

  var Component =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(Component, _HTMLElement);

    function Component(props) {
      var _this;

      _classCallCheck(this, Component);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, props)); // Internal state...

      _this._state = {
        mounted: false // Public state...

      };
      _this.state = {}; // Properties...

      _this.props = props; // Set lifecycle listeners...

      _Utilities_data__WEBPACK_IMPORTED_MODULE_2__["DATA"].ComponentLifecycleEvents.forEach(function (ev) {
        _this.addEventListener(ev, function (e) {
          _this[e](e.detail);
        });
      }, _assertThisInitialized(_assertThisInitialized(_this))); // Dispatch componentWillMount event...
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
      key: "setState",
      value: function setState(obj) {
        // Convert incoming object to array of entries to be manipulated by array.reduce...
        var newStateArray = Object.entries(obj); // Combine old/new state and set on state object...

        this.state = newStateArray.reduce(function (newState, stateEntry) {
          return _objectSpread({}, newState, _defineProperty({}, stateEntry[0], stateEntry[1]));
        }, this.state); // Now that state is reset, trigger a render cycle...

        this._update(); // Return state object...


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
      key: "componentWillMount",
      value: function componentWillMount() {
        log('componentWillMount', ['white', 'blue']);
        return;
      } // This method is for doing any component work just after mounting occurs. It is
      // called by this.connectedCallback() (see below)...

    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        log('componentDidMount', ['white', 'blue']);
        return;
      } // This event is fired just before an imminent unmounting of a
      // component occurs. The event is fired in Valence.js at Valence.unMount()
      // line 140 & also in Form.js at Form.updateElement(), line 107...

    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        log('componentWillUnmount', ['white', 'red']);
        return;
      } // This method is called by this.disconnectedCallback() (see below), just after unmounting...

    }, {
      key: "componentDidUnmount",
      value: function componentDidUnmount() {
        log('componentDidUnmount', ['white', 'red']);
        return;
      } // This callback is called just before the component recieves props. The event
      // is fired in Element.js at Element.createElement(), line 60, when the
      // component is created, and also in Form.js at Form.updateElement(), line 127,
      // when the component is updating...

    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        log('componentDidRecieveProps', ['white', 'orange']);
        return;
      } // This callback is called just after the component confirms an update should
      // take place with `shouldComponentUpdate`, and just before the update occurs. It's
      // corresponding event is fired in this._update(), line 62...

    }, {
      key: "componentWillUpdate",
      value: function componentWillUpdate(nextProps) {
        log('componentWillUpdate', ['white', 'green']);
        return;
      } // This callback is called just after the component completes the update process.
      // It's corresponding event is fired in this._update(), line 70...

    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(props) {
        log('componentWillUpdate', ['white', 'green']);
        return;
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState, name, oldVal, newVal) {
        log('componentShouldUpdate', ['white', 'yellow']);
        return true;
      } // Component render method...

    }, {
      key: "render",
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
      key: "_update",
      value: function _update() {
        if (this.shouldComponentUpdate(this.props, this.state)) {
          // Fire componentWillUpdate event...
          _Events__WEBPACK_IMPORTED_MODULE_3__["Events"].fire('componentWillUpdate', this, {
            'nextProps': this.props,
            'state': this.state
          }); // Update the component tree...


          this.form.updateDOM(this.render(this.props)); // Fire componentDidUpdate event...

          _Events__WEBPACK_IMPORTED_MODULE_3__["Events"].fire('componentDidUpdate', this, {
            'props': this.props,
            'state': this.state
          });
        }
      } // A private method for appending the child nodes of a component...

    }, {
      key: "_appendChildren",
      value: function _appendChildren() {
        return this.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_1__["Node"].createNode(this.render(this.props)));
      } // Used as an internal cue for updating, this method is built into the custom
      // elements v1 API...

    }, {
      key: "attributesChangedCallback",
      value: function attributesChangedCallback(name, oldVal, newVal) {
        console.info("the attribute \"".concat(name, "\" changed from \"").concat(olVal, "\" to \"").concat(newVal, "\".")); // Confirm an update with sCU(), then trigger a diff and patch cycle...

        if (this.shouldComponentUpdate(null, null, name, oldVal, newVal)) {
          this._update(this.render(this.props));
        }
      } // Used internally for post-mount operations, this method is built into the custom
      // elements v1 API...

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        /* Technically the component is already mounted here, but it's DOM tree has yet
         * to be added. This is the closest point in the component lifecycle that I can
         * get thus far to a component will mount event.. As you can see below, once
         * the component's children are added, we consider it to be fully `mounted`
         * and fire it's `didMount` event....
         */
        // Call willMount callback...
        this.componentWillMount(); // Append the component's children...

        this._appendChildren(); // Call didMount callback...


        this.componentDidMount();
      } // Used internally for post-unmount operations, this method is built into the custom
      // elements v1 API...

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.componentDidUnmount();
      } // Create a Valence componenet...

    }], [{
      key: "createComponent",
      value: function createComponent(component, props, children) {
        // Pre-declare inner functions, mainly for style considerations...
        var appendChildren,
            reflect,
            shadowBool,
            tagName = component[2]; // Create the DOM tree for the component....

        appendChildren = function appendChildren(elem) {
          return elem.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_1__["Node"].createNode(component[1](props)));
        }; // NO LONGER IN USE... CURRENTLY USING BUILT IN JS REFLECT CLASS....
        // Using a metaprogramming technique called reflection via javascript's evaluation
        // function to create dynamic element registration.... Will check out es6's new
        // metaprogramming features (Reflect, Symbols and Proxy) to see If this can be
        // accomplished without using eval... *** DONE ***


        reflect = function reflect(code) {
          // But for now...
          return eval(code);
        }; // Return boolean value for shadow...


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
        */


        window.useNativeShim = false;
        window.HTMLElement = window._HTMLElement;

        var _HTMLComponent,
            eListeners = [],
            customProps = [],
            shadow,
            obj; // Get attribute names and Listeners...


        if (props) {
          obj = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["processData"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props)); // Store attribute and Listener pairs...

          customProps = obj.props;
          eListeners = obj.eventListeners; // Determine if shadow option is set or not...

          shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : true;
        } // Declare self here so that it may be used in this scope, below
        // the ctor definition...


        var self; // Define constructor of the custom element....

        _HTMLComponent = function HTMLComponent() {
          //Self will function as `this` for this constructor... Determine the type of element
          //to construct and go...
          self = Reflect.construct(HTMLElement, [], _HTMLComponent); // Use `self` as this to add props to the constructor...

          if (shadow && !props.noChild) {
            // Create shadow root and pass it in to append children function...
            var shadowRoot = self.attachShadow({
              mode: 'open'
            });
            appendChildren(shadowRoot);
          } // Add event listeners...


          if (eListeners.length > 0) {
            eListeners.forEach(function (entry) {
              return self.addEventListener(entry[0], self[entry[1]]);
            }, self);
          }

          return self;
        }; // Add superclass prototype...


        _HTMLComponent.prototype = Object.create(HTMLElement.prototype); // Add constructor...

        _HTMLComponent.prototype.constructor = _HTMLComponent; // Register event listener methods..

        _Events__WEBPACK_IMPORTED_MODULE_3__["Events"].registerCallbacks(_HTMLComponent, eListeners); // console.dir(HTMLComponent)
        // Add connectedCallback method appending children if shadow is false...


        if (!shadow) {
          if (props == undefined || !props.noChild) {
            _HTMLComponent.prototype.connectedCallback = function () {
              appendChildren(self);
            };
          }
        } // Return the component constructor...


        return _HTMLComponent;
      }
    }]);

    return Component;
  }(_wrapNativeSuper(HTMLElement)); // // log('shadow: ' + shadowBool(customProps))
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
/* 39 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Venus", function () {
    return Venus;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_Is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
  /* harmony import */


  var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
  /* harmony import */


  var _Props_Props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
  /* harmony import */


  var _Elements_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40);
  /* harmony import */


  var _Elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43);
  /* harmony import */


  var _Elements_Paragraph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);
  /* harmony import */


  var _Elements_H1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45);
  /* harmony import */


  var _Elements_H2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46);
  /* harmony import */


  var _Elements_H3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47);
  /* harmony import */


  var _Elements_H4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(48);
  /* harmony import */


  var _Elements_H5__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49);
  /* harmony import */


  var _Elements_H6__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50);
  /* harmony import */


  var _Elements_Header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51);
  /* harmony import */


  var _CSS__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41);

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** Venus.js
  **
  ** Venus.js is essentially a styled-components clone in the way that
  ** Valence.js is a React.js clone. Venus simply provides a way to use
  ** the styled-components style api with Valence.js... It is very simple at
  ** this time and by no means encompasses all that styled-components
  ** has to offer.
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/

  /*
  ** Venus Features to incorporate
  *********************************/
  //TODO:[X] Ability to extend all element types.. 1
  //TODO:[X] Ability to extend a component.. 2
  //TODO:[ ] Sass/SCSS integration.. 4
  //TODO:[ ] Ability to Inject global styles.. 5
  //TODO:[ ] Media Queries.. 6
  //TODO:[ ] Keyframe Animations.. 7
  //TODO:[ ] SVG.. 8
  //TODO:[X] Variables, functions (tagged template literals).. 3

  /* Venus Styling related libraries......*/
  // import our extensible element constructors...
  // import CSS class...
  // Globalize common helpers..


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"]; // Valence class dealing with JS context, css styling of components...

  var Venus =
  /*#__PURE__*/
  function () {
    function Venus() {
      _classCallCheck(this, Venus);
    }

    _createClass(Venus, null, [{
      key: "config",
      value: function config(userAssumptions) {
        Venus.assumptions = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["combineObjects"](Venus.assumptions, userAssumptions);
        return Venus.assumptions;
      } // Internal method closure for grabbing the variable name from a venus component
      // declaration, for tagname representation in custom element creation...

    }, {
      key: "_extractComponentTagName",
      value: function _extractComponentTagName(xCaller, callerName, array) {
        var buildArray, _typeShifter, type;
        /***********************************************************************************
        ** A function for shifting a type from the beginning of the component names array....
        ************************************************************************************/


        _typeShifter = function typeShifter(array) {
          var obj = {}; // If we don't have an empty array....

          if (array.length > 0) {
            // We can shift out a type....
            obj.type = array.shift();
            obj.array = array; // Else, we have a new component and must rebuild...
          } else {
            obj.array = buildArray(xCaller);
            obj.type = _typeShifter(obj.array).type;
          } // Check the statelessComponents registry for a redundancy...


          if (window.statelessComponents.indexOf(obj.type) !== -1) {
            return _typeShifter(obj.array);
          } // If we reach this point, we are ready to return type...


          return obj;
        };
        /***************************************************************************
        ** A function for building out the venusComponentNames Array...
        ****************************************************************************/


        buildArray = function buildArray(source) {
          // Some vars...
          var callerTagName,
              _extractEntryFromSource,
              componentNameArray = [];
          /*****************************************************************************
          ** A recursive function for extracting regExp matches from a bit of source code.
          ** The purpose is to programmatically extract variable names from venus component
          ** declarations for the purpose of custom element tag names.
          ******************************************************************************/


          _extractEntryFromSource = function extractEntryFromSource(source) {
            // Some vars...
            var sib, componentName; // Execute regexp... and single out result..

            sib = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["venusComponentNamesRE"]().exec(source)[1], // Eliminate result from source code string, so that it won't be found again,
            // and store in temp variable...
            source = source.replace(sib, ''); // log(source, 'red')
            // Remove "(" from the string, and return a new one..
            // Convert to tagname with kebab-case...

            componentName = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["convertFuncNameToTagName"](sib.replace('(', '')); //log('component tagname.', ['orange', 'bold']); log(componentName, ['yellow', 'bold'])
            // Push component name into a local array..

            componentNameArray.push(componentName); // Push also into a global collection....

            window.venusComponents.push(componentName.toLowerCase()); // If there are still matches in the caller source code, call function again,
            // recursively, with the altered source...

            if (_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["venusComponentNamesRE"]().test(source)) {
              return _extractEntryFromSource(source);
            } // return..
            // log('componentNameArray'); log(componentNameArray)


            return componentNameArray;
          }; // If there are any matches in the caller's source code, start the process of building
          // out the array...


          if (_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["venusComponentNamesRE"]().test(source)) {
            array = _extractEntryFromSource(source); //log('The Array', ['yellow', 'bold']); dir(array)
          } // Also convert x.caller func name to tag-name to identify stateless components...


          callerTagName = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["convertFuncNameToTagName"](callerName); // log(callerTagName)
          // Check global registry of stateless components for the caller's tag name. If it is
          // present, we must rearrange the array...

          if (window.statelessComponents.indexOf(callerTagName) != -1) {
            // log('rearranged', ['orange', 'bold'])
            // Rearrange the array...
            // Remove the first item...
            var item = array.shift(); // Push it on to the end of the array..

            array.push(item); // log(array)
          } // return array...


          return array;
        }; // Build an array...
        // If there are no component names in the array, lets's get some..


        if (array.length == 0) {
          // Build array with x.caller source code...
          array = buildArray(xCaller);
        }
        /* Call typeShifter function to shift out the bottom-most tagname in the list...
        If it has already been instantiated, then it is not a venus component- Pop from
        the list and move on... Return both the altered array and the shifted out type...*/


        var obj = _typeShifter(array); // log('arrayLength'); log(obj.array.length, ['pink', 'bold']);dir(obj.array)
        // log('type', ['orange', 'bold']);dir(obj.type)


        Venus._venusComponentNames = obj.array; // Return type..

        return obj.type.toLowerCase();
      } // A helper method for accessing the Venus class and defining it's components...

    }, {
      key: "interfaceFormX",
      value: function interfaceFormX(xCrName, xCr, elTag, tagTempLit) {
        var props1 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
        var props2 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {}; // extract var name..

        var tagName = Venus._extractComponentTagName(xCr, xCrName, Venus._venusComponentNames); // Add props from venus to props object...


        props = _objectSpread({}, props2, props1); //log('Venus.propsobj');dir(props1); dir(props2); dir(props)
        // Determine whether or not the component will utilize shadow dom by default...

        if (!Reflect.has(props, 'shadow')) {
          log('Venus.config.shadowByDefault', ['orange', 'bold']);
          dir(props1);
          dir(props2); // If 'shadow' is not set in props, and if 'shadow' is 'on' by default...

          if (Venus.config.shadowByDefault) {
            // Set the 'shadow' prop to true...
            props.shadow = true;
          } else {
            // Otherwise, set it to false..
            props.shadow = false;
          }
        }

        _CSS__WEBPACK_IMPORTED_MODULE_16__["CSS"]._superProps[props2.identity] = [tagName, props]; // If a venus component does not use shadow dom...

        if (!props.shadow) {
          // it will not need to append anything to it's shadow root later on...
          props.noChild = true; // Define component and add Styles..

          Venus._defineComponent(tagName, props, elTag);

          _CSS__WEBPACK_IMPORTED_MODULE_16__["CSS"].addStyles(true, tagName, elTag, props, tagTempLit);
        } else {
          // Define component and add Styles..
          Venus._defineComponent(tagName, props, elTag, _CSS__WEBPACK_IMPORTED_MODULE_16__["CSS"].addStyles(false, tagName, elTag, props, tagTempLit));
        } //


        return tagName;
      } // DEPRECATED: NOT CURRENTLY IN USE

    }, {
      key: "_resetFlags",
      value: function _resetFlags() {
        // Reset these, they were flipped for Component definition, and would typically
        // be reset in the flow of component creation just after the call to doc.createEl(),
        // but when creating components with Venus, element instantiation is delayed...
        window.useNativeShim = true;
        window.HTMLElement = window.HTMLElement_;
      }
    }, {
      key: "_defineComponent",
      value: function _defineComponent(name) {
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var el = arguments.length > 2 ? arguments[2] : undefined;
        var template = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false; // Declare element constructior var..

        var elemCtor,
            // Create function will create the component element definition..
        create = function create() {
          // Pulling a switch here, so that we can choose what type of constructor we'd
          // like to use for our component...
          switch (el) {
            case 'div':
              // Do CreateComponent..
              elemCtor = _Component__WEBPACK_IMPORTED_MODULE_2__["Component"].createComponent([name, template, el], props);
              break;

            case 'input':
              // Grab the extensible input element constructor..
              elemCtor = _Elements_Input__WEBPACK_IMPORTED_MODULE_6__["Input"].createComponent(props, template);
              break;

            case 'button':
              // Grab the extensible input element constructor..
              elemCtor = _Elements_Button__WEBPACK_IMPORTED_MODULE_7__["Button"].createComponent(props, template);
              break;

            case 'p':
              // Grab the extensible input element constructor..
              elemCtor = _Elements_Paragraph__WEBPACK_IMPORTED_MODULE_8__["Paragraph"].createComponent(props, template);
              break;

            case 'h1':
              // Grab the extensible input element constructor..
              elemCtor = _Elements_H1__WEBPACK_IMPORTED_MODULE_9__["H1"].createComponent(props, template);
              break;

            case 'h2':
              // Grab the extensible input element constructor..
              elemCtor = _Elements_H2__WEBPACK_IMPORTED_MODULE_10__["H2"].createComponent(props, template);
              break;

            case 'h3':
              // Grab the extensible input element constructor..
              elemCtor = _Elements_H3__WEBPACK_IMPORTED_MODULE_11__["H3"].createComponent(props, template);
              break;

            case 'h4':
              // Grab the extensible input element constructor..
              elemCtor = _Elements_H4__WEBPACK_IMPORTED_MODULE_12__["H4"].createComponent(props, template);
              break;

            case 'h5':
              // Grab the extensible input element constructor..
              elemCtor = _Elements_H5__WEBPACK_IMPORTED_MODULE_13__["H5"].createComponent(props, template);
              break;

            case 'h6':
              // Grab the extensible input element constructor..
              elemCtor = _Elements_H6__WEBPACK_IMPORTED_MODULE_14__["H6"].createComponent(props, template);
              break;

            case 'header':
              // Grab the extensible input element constructor..
              elemCtor = _Elements_Header__WEBPACK_IMPORTED_MODULE_15__["Header"].createComponent(props, template);
              break;

            case 'default':
              break;
          } // Process props...


          var processed = _Form_Node__WEBPACK_IMPORTED_MODULE_3__["Node"].processNodeProps(props, elemCtor); // Add venusComponent property to venus component constructor...


          processed.ctor.prototype.venusComponent = true; // Define component...

          window.customElements.define(name, processed.ctor); // Reset nativeShim flags..
          // Venus._resetFlags()
          // Listen for element instantiation, grab element...

          _Events__WEBPACK_IMPORTED_MODULE_5__["Events"].listen(name, function (e) {
            // Set props on new element..
            _Props_Props__WEBPACK_IMPORTED_MODULE_4__["Props"].set(e.detail.element, props); // props = {}

          });
        }; // Add isStatelessComponent flag to props for Component...


        props.isStatelessComponent = true;

        if (webComponentsLoaded) {
          // Do CreateComponent..
          create();
        } else {
          // Listen for supporting files to be loaded, then create and define component...
          _Events__WEBPACK_IMPORTED_MODULE_5__["Events"].listen('webComponentsLoaded', function () {
            create();
          });
        }
      } //A static public method for inserting global rules into the styleSheet...

    }, {
      key: "global",
      value: function global() {
        for (var _len = arguments.length, tempLit = new Array(_len), _key = 0; _key < _len; _key++) {
          tempLit[_key] = arguments[_key];
        } // Send the ttLiteral over to CSS for inserting into the stylesheet...


        _CSS__WEBPACK_IMPORTED_MODULE_16__["CSS"].insertGlobal([].concat(tempLit));
      } // An internal method used for retrieving a css template literal..

    }, {
      key: "_getTemplateLiteral",
      value: function _getTemplateLiteral() {
        for (var _len2 = arguments.length, tempLit = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          tempLit[_key2] = arguments[_key2];
        }

        var tmpl,
            // Store ref functions with tempLit in an array
        array = [].concat(tempLit);
        console.log(array); //

        if (Venus._extend) {
          /* An object holding the styles of the extended component, and also,
          an array holding the broken up tempLit and ref functions... Once the Props
          from component instantiation are merged with the existing prop object, the
          resulting object will be injected into each ref function as they are called  so that
          the css can be completed...*/
          tmpl = {
            extended: true,
            super: Venus._superTempLit,
            superEl: Venus._elementTag,
            superId: Venus._superId,
            array: array
          };
        } else {
          tmpl = {
            extended: false,
            array: array
          };
        }

        return {
          venus: true,
          taggedTempLit: tmpl,
          props: Venus._propObj,
          el: Venus._elementTag
        };
      } // Component extend Static API Method
      // A public method for extending user-defined venus components...

    }, {
      key: "extend",
      value: function extend(component) {
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // Filter component arg's props for id and classname properties, which can
        // not, obviously, be shared with other elements/components...

        if ('id' in component.props) {
          delete component.props.id;
        }

        if ('className' in component) {
          delete component.props.className;
        } // If arg is an object...


        if (attrs) {
          // Let's first combine prop objects so as to override any common props...
          var _props = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["combineObjects"](component.props, attrs); // Set the Venus component indicator...


          _props.Venus = true; // Set a unique id on the component's props...

          _props.identity = "venusX".concat(component.el).concat(Venus._incrementor); // Set stateless-component flag for the component..

          _props.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

          Venus._propObj = _props;
        }

        Venus._superId = component.props.identity;
        Venus._superEl = component.el;
        Venus._superTempLit = component.taggedTempLit.array;
        Venus._extend = true; // Get css..

        return Venus._getTemplateLiteral;
      } // Div Static API Method

    }, {
      key: "div",
      value: function div() {
        for (var _len3 = arguments.length, arg = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          arg[_key3] = arguments[_key3];
        } // If the argument is not an array, it's probably our props object...


        if (!_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].array(arg[0])) {
          var _props2 = arg[0]; // Set the Venus component indicator...

          _props2.Venus = true; // Set a unique id on the component's props...

          _props2.identity = "venusDiv".concat(Venus._incrementor); // Set stateless-component flag for the component..

          _props2.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

          Venus._propObj = _props2;
          Venus._elementTag = 'div'; // Define component..

          return Venus._getTemplateLiteral;
        } else {
          var array = [].concat(arg),
              _privateProps = {}; //

          _privateProps.Venus = true;
          _privateProps.isStatelessComponent = true;
          _privateProps.identity = "venusDiv".concat(Venus._incrementor);
          return {
            venus: true,
            taggedTempLit: {
              extended: false,
              array: array
            },
            props: _privateProps,
            el: 'div'
          };
        }
      } // Input Static API Method

    }, {
      key: "input",
      value: function input() {
        for (var _len4 = arguments.length, arg = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          arg[_key4] = arguments[_key4];
        } // If the argument is not an array, it's probably our props object...


        if (!_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].array(arg[0])) {
          var _props3 = arg[0]; // Set the Venus component indicator...

          _props3.Venus = true; // Set a unique id on the component's props...

          _props3.identity = "venusInput".concat(Venus._incrementor); // Set stateless-component flag for the component..

          _props3.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

          Venus._propObj = _props3;
          Venus._elementTag = 'input'; // Define component..

          return Venus._getTemplateLiteral;
        } else {
          var array = [].concat(arg),
              _privateProps = {}; // Add some properties to the private props object....

          _privateProps.Venus = true;
          _privateProps.isStatelessComponent = true;
          _privateProps.identity = "venusInput".concat(Venus._incrementor); // Add private props to return object and... return..

          return {
            venus: true,
            taggedTempLit: {
              extended: false,
              array: array
            },
            props: _privateProps,
            el: 'input'
          };
        }
      } // Button Static API Method

    }, {
      key: "button",
      value: function button() {
        for (var _len5 = arguments.length, arg = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          arg[_key5] = arguments[_key5];
        } // If the argument is not an array, it's probably our props object...


        if (!_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].array(arg[0])) {
          var _props4 = arg[0]; // Set the Venus component indicator...

          _props4.Venus = true; // Set a unique id on the component's props...

          _props4.identity = "venusButton".concat(Venus._incrementor); // Set stateless-component flag for the component..

          _props4.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

          Venus._propObj = _props4;
          Venus._elementTag = 'button'; // Define component..

          return Venus._getTemplateLiteral;
        } else {
          var array = [].concat(arg),
              _privateProps = {}; // Add some properties to the private props object....

          _privateProps.Venus = true;
          _privateProps.isStatelessComponent = true;
          _privateProps.identity = "venusButton".concat(Venus._incrementor); // Add private props to return object and... return..

          return {
            venus: true,
            taggedTempLit: {
              extended: false,
              array: array
            },
            props: _privateProps,
            el: 'button'
          };
        }
      } // P API Method

    }, {
      key: "p",
      value: function p() {
        for (var _len6 = arguments.length, arg = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          arg[_key6] = arguments[_key6];
        } // If the argument is not an array, it's probably our props object...


        if (!_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].array(arg[0])) {
          var _props5 = arg[0]; // Set the Venus component indicator...

          _props5.Venus = true; // Set a unique id on the component's props...

          _props5.identity = "venusP".concat(Venus._incrementor); // Set stateless-component flag for the component..

          _props5.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

          Venus._propObj = _props5;
          Venus._elementTag = 'p'; // Define component..

          return Venus._getTemplateLiteral;
        } else {
          var array = [].concat(arg),
              _privateProps = {}; // Add some properties to the private props object....

          _privateProps.Venus = true;
          _privateProps.isStatelessComponent = true;
          _privateProps.identity = "venusP".concat(Venus._incrementor); // Add private props to return object and... return..

          return {
            venus: true,
            taggedTempLit: {
              extended: false,
              array: array
            },
            props: _privateProps,
            el: 'p'
          };
        }
      } // H1 API Method

    }, {
      key: "h1",
      value: function h1() {
        for (var _len7 = arguments.length, arg = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          arg[_key7] = arguments[_key7];
        } // If the argument is not an array, it's probably our props object...


        if (!_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].array(arg[0])) {
          var _props6 = arg[0]; // Set the Venus component indicator...

          _props6.Venus = true; // Set a unique id on the component's props...

          _props6.identity = "venusH1".concat(Venus._incrementor); // Set stateless-component flag for the component..

          _props6.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

          Venus._propObj = _props6;
          Venus._elementTag = 'h1'; // Define component..

          return Venus._getTemplateLiteral;
        } else {
          var array = [].concat(arg),
              _privateProps = {}; // Add some properties to the private props object....

          _privateProps.Venus = true;
          _privateProps.isStatelessComponent = true;
          _privateProps.identity = "venusH1".concat(Venus._incrementor); // Add private props to return object and... return..

          return {
            venus: true,
            taggedTempLit: {
              extended: false,
              array: array
            },
            props: _privateProps,
            el: 'h1'
          };
        }
      } // H6 API Function

    }, {
      key: "h6",
      value: function h6() {
        for (var _len8 = arguments.length, arg = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          arg[_key8] = arguments[_key8];
        } // If the argument is not an array, it's probably our props object...


        if (!_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].array(arg[0])) {
          var _props7 = arg[0]; // Set the Venus component indicator...

          _props7.Venus = true; // Set a unique id on the component's props...

          _props7.identity = "venusH6".concat(Venus._incrementor); // Set stateless-component flag for the component..

          _props7.isStatelessComponent = true; // Pass the prop object, and element tag name  on to the global members..

          Venus._propObj = _props7;
          Venus._elementTag = 'h6'; // Define component..

          return Venus._getTemplateLiteral;
        } else {
          var array = [].concat(arg),
              _privateProps = {}; // Add some properties to the private props object....

          _privateProps.Venus = true;
          _privateProps.isStatelessComponent = true;
          _privateProps.identity = "venusH6".concat(Venus._incrementor); // Add private props to return object and... return..

          return {
            venus: true,
            taggedTempLit: {
              extended: false,
              array: array
            },
            props: _privateProps,
            el: 'h6'
          };
        }
      }
    }, {
      key: "_incrementor",
      // Static member to hold component names...
      // Static member to hold element tag name to be created...
      // Static member to hold element tag name to be created...
      // Static member to hold a unique ID for an extended component's parent...
      // Static member to hold a unique ID for a component...
      // Static member object to hold props that will be passed on to the component element...
      // A reference to an extended element's parent style literal...
      // A reference to an extended element's parent props object...
      // A boolean flag used to determine whether or not a component is a extension
      // of another, or not....
      // Number places for _numeral
      // A number that increments every time it is used. Aids in creating a unique identifier
      // for components...
      // A simple getter for static _numeral
      get: function get() {
        // Increment ones place first, then rest accordingly...
        if (Venus._ones_ < 9) {
          ++Venus._ones_;
        } else {
          Venus._ones_ = 0;

          if (Venus._tens_ < 9) {
            ++Venus._tens_;
          } else {
            Venus._tens_ = 0;

            if (Venus._huns_ < 9) {
              ++Venus._huns_;
            } else {
              Venus._huns_ = 0;
            }
          }
        } // Assemble the numeral string...


        Venus._numeral = "".concat(Venus._huns_).concat(Venus._tens_).concat(Venus._ones_); // Return..

        return Venus._numeral;
      } // The config options object.. with default assumptions...

    }]);

    return Venus;
  }();

  _defineProperty(Venus, "_venusComponentNames", []);

  _defineProperty(Venus, "_elementTag", '');

  _defineProperty(Venus, "_superTag", '');

  _defineProperty(Venus, "_superId", '');

  _defineProperty(Venus, "_id", '');

  _defineProperty(Venus, "_propObj", {});

  _defineProperty(Venus, "_superTempLit", "");

  _defineProperty(Venus, "_superProps", {});

  _defineProperty(Venus, "_extend", false);

  _defineProperty(Venus, "_ones_", 0);

  _defineProperty(Venus, "_tens_", 0);

  _defineProperty(Venus, "_huns_", 0);

  _defineProperty(Venus, "_numeral", -1);

  _defineProperty(Venus, "assumptions", {
    shadowByDefault: true,
    kebabCase: true // // Static member object for holding configuration options... Using a getter
    // // and setter so that configuration objects may be combined.
    //   static get config() {
    // // Return the assumptions object..
    //     return Venus.assumptions
    //   }
    //   static set config(obj) {
    // // Take in a new assumptions obj, combine with existing, and store...
    //     Venus.assumptions = _.combineObjects(Venus.assumptions, obj)
    //   }

  });
  /***/

},
/* 40 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Input", function () {
    return Input;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
  /* harmony import */


  var _CSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** Input.js
  **
  ** Input.js is an extensible HTML5 Web Component wrapper, built around the Input
  ** element. It's aim is in providing an input element that is able to be
  ** extended via the v1 web components api...
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/
  // Get utilities...
  // Get data...
  // Get Events...
  // Get CSS...
  // Get Node class...
  // Globalize common utility functions...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var el = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["el"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];

  var Input =
  /*#__PURE__*/
  function () {
    function Input() {
      _classCallCheck(this, Input);
    }

    _createClass(Input, null, [{
      key: "_appendStyleNode",
      // A CSS template literal, holding default styles for an input...
      // Static method for appending child nodes to parent elements...
      value: function _appendStyleNode(root, child) {
        return root.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_4__["Node"].createNode(child()));
      } // Static method for defining a Venus input element...

    }, {
      key: "createComponent",
      value: function createComponent() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        log('props', ['orange', 'bold']);
        dir(props); // Declarations..

        var _HTMLInputComponent,
            eListeners = [],
            customProps = [],
            shadowBool,
            shadow,
            input,
            self,
            obj; // Return boolean value for shadow...


        shadowBool = function shadowBool(arr) {
          return arr.reduce(function (shadow, keyVal, index) {
            return keyVal.indexOf('shadow') == -1 ? shadow : index;
          }, false);
        }; // Get attribute names and Listeners...


        if (props) {
          obj = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["processData"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props)); // Store attribute and Listener pairs...

          customProps = obj.props;
          eListeners = obj.eventListeners; // Determine if shadow option is set or not...

          shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : true;
        } // Create an HTMLInputElement...


        input = document.createElement('input'); // Some default settings for input elements...
        // Set venus identifier flag..
        // input.venus = true
        // if (props.type == 'text') {
        //
        // }
        // Pass props from venus component declaration on to the inner input el...

        var _arr = Object.keys(props);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i]; // Check all keys in input el object...

          if (key in input) {
            // Pass on the ones that match...
            log("".concat(key, " in input"), ['yellow', 'bold']);
            input["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
          } else if (key in input.style) {
            log("".concat(key, " in input"), ['pink', 'bold']); // Put them here...

            input.style["".concat(key)] = props["".concat(key)];
          }
        } // The input component element's constructor definition...


        _HTMLInputComponent = function HTMLInputComponent() {
          var shadowRoot; // Construct an element, store as self...

          self = Reflect.construct(HTMLElement, [], _HTMLInputComponent);

          if (shadow) {
            // Create shadow root...
            shadowRoot = self.attachShadow({
              mode: 'open'
            }); // Append to shadow root...

            shadowRoot.appendChild(input); // Create a node from the template function, and append to shadowRoot....

            Input._appendStyleNode(shadowRoot, template);
          } // Return constructor...


          return self;
        }; // Add superclass prototype...


        _HTMLInputComponent.prototype = Object.create(HTMLInputElement.prototype); // Add constructor...

        _HTMLInputComponent.prototype.constructor = _HTMLInputComponent; // Register event listener methods..

        _Events__WEBPACK_IMPORTED_MODULE_2__["Events"].registerCallbacks(_HTMLInputComponent, eListeners); // console.dir(HTMLComponent)
        // Add connectedCallback method appending children if shadow is false...


        if (!shadow) {
          _HTMLInputComponent.prototype.connectedCallback = function () {
            self.appendChild(input);
          };
        } // Return component to the caller...


        return _HTMLInputComponent;
      }
    }]);

    return Input;
  }();

  _defineProperty(Input, "_textLiteral", ":host {\n                          background-color: black;\n                          border-radius: 5%;\n                        }");
  /***/

},
/* 41 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "CSS", function () {
    return CSS;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_Is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
  /* harmony import */


  var stylis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
  /* harmony import */


  var stylis__WEBPACK_IMPORTED_MODULE_2___default =
  /*#__PURE__*/
  __webpack_require__.n(stylis__WEBPACK_IMPORTED_MODULE_2__);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** CSS.js
  **
  ** CSS.js performs CSS functionality within the Venus library..
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/


  window.log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  window.dir = console.dir;
  stylis__WEBPACK_IMPORTED_MODULE_2___default.a.set({
    compress: true
  });

  var CSS =
  /*#__PURE__*/
  function () {
    function CSS() {
      _classCallCheck(this, CSS);
    }

    _createClass(CSS, null, [{
      key: "_createNewStyleSheet",
      // Class method for creating, appending and returning a new style sheet...
      value: function _createNewStyleSheet() {
        // Create style tag..
        var style = document.createElement('style'); // Append a textNode to it. Apparently, this is a webkit hack? More research needed...

        style.appendChild(document.createTextNode("")); // Append style tag to the head of the current doc's dom...

        document.head.appendChild(style); //

        return style.sheet;
      } //DEPRECATED: Not needed for now....
      // Internal Class method for dynamically inserting css rules into a given sheet

    }, {
      key: "_insertCSS",
      value: function _insertCSS(sheet, selector, rules) {
        var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if ('insertRule' in sheet) {
          if (index) {
            // Use the sheet object method insertRule if available, otherwise, use addRule....
            sheet.insertRule("".concat(selector, " { ").concat(rules, " }"), index);
          } else {
            sheet.insertRule("".concat(selector, " { ").concat(rules, " }"));
          }
        } else if ('addRule' in sheet) {
          sheet.addRule(selector, rules, 1);
        }
      } // A private method for appending an array of CSS rules to the default stylesheet,
      // one by one.

    }, {
      key: "_insertRules",
      value: function _insertRules(array) {
        array.forEach(function (rule) {
          /* The _styleSheet setter will create a new sheet and append to a new style tag
          if necessary, then insert the given css..*/
          CSS._styleSheet = rule;
        });
      } // A Public method for inserting global styles into the stylesheet...

    }, {
      key: "insertGlobal",
      value: function insertGlobal(ttlArray) {
        var css = _Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].interpolated(ttlArray) ? stylis__WEBPACK_IMPORTED_MODULE_2___default()('', _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["applyInterpolations"](ttlArray)) : stylis__WEBPACK_IMPORTED_MODULE_2___default()('', ttlArray[0].join(''));

        CSS._insertRules(_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["separateStyleRules"](css));

        log('CSS._styleSheet', ['purple', 'bold']);
        log(CSS._styleSheet);
        log(ttlArray[0].join(''));
      } //DEPRECATED: NOT NEEDED FOR NOW...
      // Public class for creating an HTML style tag loaded with styles...

    }, {
      key: "loadStyleTemplate",
      value: function loadStyleTemplate(tempLit) {
        var html = "<style>".concat(tempLit, "</style>"),
            tmpl; // Create a template el..

        tmpl = document.createElement('template'); // Set the innerHTML..

        tmpl.innerHTML = html;
        return tmpl;
      } // A private method for processing the given CSS literals (Activation of
      // interpolation functions and preprocessing with stylis) and returning a
      // final product, ready for the stylesheet...

    }, {
      key: "_process",
      value: function _process(ttl, props, cTag) {
        var css;
        /* If we are working on an extended component, execute interpolation functions,
        bring in the parent's styles, and finally, process the resulting css with 'stylis'...
        Having some fun with tertiary expressions here..*/
        // Is this an extended component? ....
        // log('Is.interpolated(ttl.super[0][0]', ['tomato', 'bold'])
        // log(Is.interpolated(ttl.super[0][0])

        ttl.extended ? // If so, first let's check if we have interpolations in the parent to deal with...
        css = _Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].interpolated(ttl.super) ?
        /* If so, go ahead and execute the interpolation functions with superProps, ...
        Also check if we have interpolations in the child component, and if so, execute them and
        combine the resulting css blocks, and process with Stylis. If not, combine the resulting
        parent code block and with the untouched child block, and process with Stylis...
         */
        stylis__WEBPACK_IMPORTED_MODULE_2___default()(cTag, "".concat(_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["applyInterpolations"](ttl.super, CSS._superProps[ttl.superId][1]), "\n         ").concat(_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].interpolated(ttl.array) ? _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["applyInterpolations"](ttl.array, props) : ttl.array))
        /* If not.......*/
        :
        /* Check first if we have interpolations in the child, either way, combine the result
        with the untouched parent code block, and process with Stylis.
        */
        stylis__WEBPACK_IMPORTED_MODULE_2___default()(cTag, "".concat(ttl.super[0][0], "\n         ").concat(_Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].interpolated(ttl.array) ? _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["applyInterpolations"](ttl.array, props) : ttl.array))
        /* Not extended.....*/
        : // Check for interpolations....*/
        css = _Utilities_Is__WEBPACK_IMPORTED_MODULE_1__["Is"].interpolated(ttl.array) ? stylis__WEBPACK_IMPORTED_MODULE_2___default()(cTag, // Execute interpolations, with props, process with Stylis ....*/
        _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["applyInterpolations"](ttl.array, props)) : // Otherwise, run the untouched styles through Stylis...*/
        stylis__WEBPACK_IMPORTED_MODULE_2___default()(cTag, ttl.array[0][0]); // return completed CSS ...

        return css;
      }
      /* Class method dealing with adding styles to the component. If a tag
       is present in the arguments, the style is appended to the head of the doc,
      otherwise, it is appended to the shadow root...down the line....*/

    }, {
      key: "addStyles",
      value: function addStyles(appendStyle, cTag, eTag, props, tagTempLit) {
        // Declare vars...
        var sheet,
            styleTag = eTag === 'div' ? cTag : "".concat(cTag, " ").concat(eTag),
            css; // If we are not appending style to a shadow root...

        if (appendStyle) {
          // Process the css...
          css = CSS._process(tagTempLit, props, styleTag); // Split rules into an array. Insert into style sheet...

          CSS._insertRules(_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["separateStyleRules"](css));
        } else {
          css = eTag === 'div' ? CSS._process(tagTempLit, props, ':host') : CSS._process(tagTempLit, props, ":host ".concat(eTag)); // Return function that returns style related html...

          return function () {
            return x("style", null, css);
          };
        }
      }
    }, {
      key: "_styleSheet",
      // A static class property for holding an extended element's parent props....
      // A property to hold the default stylesheet of the app...
      // A getter for _sheet...
      get: function get() {
        // return the sheet!
        return CSS._sheet;
      } // A setter for _sheet... Setting sheet appends a CSS rule to it....
      ,
      set: function set(rule) {
        // If there is no sheet, create one...
        if (!CSS._sheet) {
          CSS._sheet = CSS._createNewStyleSheet();
        } // Insert given rule into stylesheet...


        CSS._sheet.insertRule(rule);
      }
    }]);

    return CSS;
  }();

  _defineProperty(CSS, "_superProps", {});

  _defineProperty(CSS, "_sheet", null);
  /***/

},
/* 42 */

/***/
function (module, exports, __webpack_require__) {
  /*
   *          __        ___
   *    _____/ /___  __/ (_)____
   *   / ___/ __/ / / / / / ___/
   *  (__  ) /_/ /_/ / / (__  )
   * /____/\__/\__, /_/_/____/
   *          /____/
   *
   * light - weight css preprocessor @licence MIT
   */
  (function (factory) {
    /* eslint-disable */
    true ? module['exports'] = factory(null) : undefined;
  })(
  /** @param {*=} options */
  function factory(options) {
    /* eslint-disable */
    'use strict';
    /**
     * Notes
     *
     * The ['<method name>'] pattern is used to support closure compiler
     * the jsdoc signatures are also used to the same effect
     *
     * ----
     *
     * int + int + int === n4 [faster]
     *
     * vs
     *
     * int === n1 && int === n2 && int === n3
     *
     * ----
     *
     * switch (int) { case ints...} [faster]
     *
     * vs
     *
     * if (int == 1 && int === 2 ...)
     *
     * ----
     *
     * The (first*n1 + second*n2 + third*n3) format used in the property parser
     * is a simple way to hash the sequence of characters
     * taking into account the index they occur in
     * since any number of 3 character sequences could produce duplicates.
     *
     * On the other hand sequences that are directly tied to the index of the character
     * resolve a far more accurate measure, it's also faster
     * to evaluate one condition in a switch statement
     * than three in an if statement regardless of the added math.
     *
     * This allows the vendor prefixer to be both small and fast.
     */

    var nullptn = /^\0+/g;
    /* matches leading null characters */

    var formatptn = /[\0\r\f]/g;
    /* matches new line, null and formfeed characters */

    var colonptn = /: */g;
    /* splits animation rules */

    var cursorptn = /zoo|gra/;
    /* assert cursor varient */

    var transformptn = /([,: ])(transform)/g;
    /* vendor prefix transform, older webkit */

    var animationptn = /,+\s*(?![^(]*[)])/g;
    /* splits multiple shorthand notation animations */

    var propertiesptn = / +\s*(?![^(]*[)])/g;
    /* animation properties */

    var elementptn = / *[\0] */g;
    /* selector elements */

    var selectorptn = /,\r+?/g;
    /* splits selectors */

    var andptn = /([\t\r\n ])*\f?&/g;
    /* match & */

    var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g;
    /* matches :global(.*) */

    var invalidptn = /\W+/g;
    /* removes invalid characters from keyframes */

    var keyframeptn = /@(k\w+)\s*(\S*)\s*/;
    /* matches @keyframes $1 */

    var plcholdrptn = /::(place)/g;
    /* match ::placeholder varient */

    var readonlyptn = /:(read-only)/g;
    /* match :read-only varient */

    var beforeptn = /\s+(?=[{\];=:>])/g;
    /* matches \s before ] ; = : */

    var afterptn = /([[}=:>])\s+/g;
    /* matches \s after characters [ } = : */

    var tailptn = /(\{[^{]+?);(?=\})/g;
    /* matches tail semi-colons ;} */

    var whiteptn = /\s{2,}/g;
    /* matches repeating whitespace */

    var pseudoptn = /([^\(])(:+) */g;
    /* pseudo element */

    var writingptn = /[svh]\w+-[tblr]{2}/;
    /* match writing mode property values */

    var gradientptn = /([\w-]+t\()/g;
    /* match *gradient property */

    var supportsptn = /\(\s*(.*)\s*\)/g;
    /* match supports (groups) */

    var propertyptn = /([\s\S]*?);/g;
    /* match properties leading semicolon */

    var selfptn = /-self|flex-/g;
    /* match flex- and -self in align-self: flex-*; */

    var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/;
    /* extrats :readonly or :placholder from selector */

    var trimptn = /[ \t]+$/;
    /* match tail whitspace */

    var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/;
    /* match max/min/fit-content, fill-available */

    var imgsrcptn = /([^-])(image-set\()/;
    /* vendors */

    var webkit = '-webkit-';
    var moz = '-moz-';
    var ms = '-ms-';
    /* character codes */

    var SEMICOLON = 59;
    /* ; */

    var CLOSEBRACES = 125;
    /* } */

    var OPENBRACES = 123;
    /* { */

    var OPENPARENTHESES = 40;
    /* ( */

    var CLOSEPARENTHESES = 41;
    /* ) */

    var OPENBRACKET = 91;
    /* [ */

    var CLOSEBRACKET = 93;
    /* ] */

    var NEWLINE = 10;
    /* \n */

    var CARRIAGE = 13;
    /* \r */

    var TAB = 9;
    /* \t */

    var AT = 64;
    /* @ */

    var SPACE = 32;
    /*   */

    var AND = 38;
    /* & */

    var DASH = 45;
    /* - */

    var UNDERSCORE = 95;
    /* _ */

    var STAR = 42;
    /* * */

    var COMMA = 44;
    /* , */

    var COLON = 58;
    /* : */

    var SINGLEQUOTE = 39;
    /* ' */

    var DOUBLEQUOTE = 34;
    /* " */

    var FOWARDSLASH = 47;
    /* / */

    var GREATERTHAN = 62;
    /* > */

    var PLUS = 43;
    /* + */

    var TILDE = 126;
    /* ~ */

    var NULL = 0;
    /* \0 */

    var FORMFEED = 12;
    /* \f */

    var VERTICALTAB = 11;
    /* \v */

    /* special identifiers */

    var KEYFRAME = 107;
    /* k */

    var MEDIA = 109;
    /* m */

    var SUPPORTS = 115;
    /* s */

    var PLACEHOLDER = 112;
    /* p */

    var READONLY = 111;
    /* o */

    var IMPORT = 105;
    /* <at>i */

    var CHARSET = 99;
    /* <at>c */

    var DOCUMENT = 100;
    /* <at>d */

    var PAGE = 112;
    /* <at>p */

    var column = 1;
    /* current column */

    var line = 1;
    /* current line numebr */

    var pattern = 0;
    /* :pattern */

    var cascade = 1;
    /* #id h1 h2 vs h1#id h2#id  */

    var prefix = 1;
    /* vendor prefix */

    var escape = 1;
    /* escape :global() pattern */

    var compress = 0;
    /* compress output */

    var semicolon = 0;
    /* no/semicolon option */

    var preserve = 0;
    /* preserve empty selectors */

    /* empty reference */

    var array = [];
    /* plugins */

    var plugins = [];
    var plugged = 0;
    var should = null;
    /* plugin context */

    var POSTS = -2;
    var PREPS = -1;
    var UNKWN = 0;
    var PROPS = 1;
    var BLCKS = 2;
    var ATRUL = 3;
    /* plugin newline context */

    var unkwn = 0;
    /* keyframe animation */

    var keyed = 1;
    var key = '';
    /* selector namespace */

    var nscopealt = '';
    var nscope = '';
    /**
     * Compile
     *
     * @param {Array<string>} parent
     * @param {Array<string>} current
     * @param {string} body
     * @param {number} id
     * @param {number} depth
     * @return {string}
     */

    function compile(parent, current, body, id, depth) {
      var bracket = 0;
      /* brackets [] */

      var comment = 0;
      /* comments /* // or /* */

      var parentheses = 0;
      /* functions () */

      var quote = 0;
      /* quotes '', "" */

      var first = 0;
      /* first character code */

      var second = 0;
      /* second character code */

      var code = 0;
      /* current character code */

      var tail = 0;
      /* previous character code */

      var trail = 0;
      /* character before previous code */

      var peak = 0;
      /* previous non-whitespace code */

      var counter = 0;
      /* count sequence termination */

      var context = 0;
      /* track current context */

      var atrule = 0;
      /* track @at-rule context */

      var pseudo = 0;
      /* track pseudo token index */

      var caret = 0;
      /* current character index */

      var format = 0;
      /* control character formating context */

      var insert = 0;
      /* auto semicolon insertion */

      var invert = 0;
      /* inverted selector pattern */

      var length = 0;
      /* generic length address */

      var eof = body.length;
      /* end of file(length) */

      var eol = eof - 1;
      /* end of file(characters) */

      var char = '';
      /* current character */

      var chars = '';
      /* current buffer of characters */

      var child = '';
      /* next buffer of characters */

      var out = '';
      /* compiled body */

      var children = '';
      /* compiled children */

      var flat = '';
      /* compiled leafs */

      var selector;
      /* generic selector address */

      var result;
      /* generic address */
      // ...build body

      while (caret < eof) {
        code = body.charCodeAt(caret); // eof varient

        if (caret === eol) {
          // last character + noop context, add synthetic padding for noop context to terminate
          if (comment + quote + parentheses + bracket !== 0) {
            if (comment !== 0) {
              code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH;
            }

            quote = parentheses = bracket = 0;
            eof++;
            eol++;
          }
        }

        if (comment + quote + parentheses + bracket === 0) {
          // eof varient
          if (caret === eol) {
            if (format > 0) {
              chars = chars.replace(formatptn, '');
            }

            if (chars.trim().length > 0) {
              switch (code) {
                case SPACE:
                case TAB:
                case SEMICOLON:
                case CARRIAGE:
                case NEWLINE:
                  {
                    break;
                  }

                default:
                  {
                    chars += body.charAt(caret);
                  }
              }

              code = SEMICOLON;
            }
          } // auto semicolon insertion


          if (insert === 1) {
            switch (code) {
              // false flags
              case OPENBRACES:
              case CLOSEBRACES:
              case SEMICOLON:
              case DOUBLEQUOTE:
              case SINGLEQUOTE:
              case OPENPARENTHESES:
              case CLOSEPARENTHESES:
              case COMMA:
                {
                  insert = 0;
                }
              // ignore

              case TAB:
              case CARRIAGE:
              case NEWLINE:
              case SPACE:
                {
                  break;
                }
              // valid

              default:
                {
                  insert = 0;
                  length = caret;
                  first = code;
                  caret--;
                  code = SEMICOLON;

                  while (length < eof) {
                    switch (body.charCodeAt(length++)) {
                      case NEWLINE:
                      case CARRIAGE:
                      case SEMICOLON:
                        {
                          ++caret;
                          code = first;
                          length = eof;
                          break;
                        }

                      case COLON:
                        {
                          if (format > 0) {
                            ++caret;
                            code = first;
                          }
                        }

                      case OPENBRACES:
                        {
                          length = eof;
                        }
                    }
                  }
                }
            }
          } // token varient


          switch (code) {
            case OPENBRACES:
              {
                chars = chars.trim();
                first = chars.charCodeAt(0);
                counter = 1;
                length = ++caret;

                while (caret < eof) {
                  switch (code = body.charCodeAt(caret)) {
                    case OPENBRACES:
                      {
                        counter++;
                        break;
                      }

                    case CLOSEBRACES:
                      {
                        counter--;
                        break;
                      }

                    case FOWARDSLASH:
                      {
                        switch (second = body.charCodeAt(caret + 1)) {
                          // /*, //
                          case STAR:
                          case FOWARDSLASH:
                            {
                              caret = delimited(second, caret, eol, body);
                            }
                        }

                        break;
                      }
                    // given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93

                    case OPENBRACKET:
                      {
                        code++;
                      }
                    // given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41

                    case OPENPARENTHESES:
                      {
                        code++;
                      }
                    // quote tail delimiter is identical to the head delimiter hence noop,
                    // fallthrough clauses have been shifted to the correct tail delimiter

                    case DOUBLEQUOTE:
                    case SINGLEQUOTE:
                      {
                        while (caret++ < eol) {
                          if (body.charCodeAt(caret) === code) {
                            break;
                          }
                        }
                      }
                  }

                  if (counter === 0) {
                    break;
                  }

                  caret++;
                }

                child = body.substring(length, caret);

                if (first === NULL) {
                  first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0);
                }

                switch (first) {
                  // @at-rule
                  case AT:
                    {
                      if (format > 0) {
                        chars = chars.replace(formatptn, '');
                      }

                      second = chars.charCodeAt(1);

                      switch (second) {
                        case DOCUMENT:
                        case MEDIA:
                        case SUPPORTS:
                        case DASH:
                          {
                            selector = current;
                            break;
                          }

                        default:
                          {
                            selector = array;
                          }
                      }

                      child = compile(current, selector, child, second, depth + 1);
                      length = child.length; // preserve empty @at-rule

                      if (preserve > 0 && length === 0) {
                        length = chars.length;
                      } // execute plugins, @at-rule context


                      if (plugged > 0) {
                        selector = select(array, chars, invert);
                        result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id);
                        chars = selector.join('');

                        if (result !== void 0) {
                          if ((length = (child = result.trim()).length) === 0) {
                            second = 0;
                            child = '';
                          }
                        }
                      }

                      if (length > 0) {
                        switch (second) {
                          case SUPPORTS:
                            {
                              chars = chars.replace(supportsptn, supports);
                            }

                          case DOCUMENT:
                          case MEDIA:
                          case DASH:
                            {
                              child = chars + '{' + child + '}';
                              break;
                            }

                          case KEYFRAME:
                            {
                              chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''));
                              child = chars + '{' + child + '}';

                              if (prefix === 1 || prefix === 2 && vendor('@' + child, 3)) {
                                child = '@' + webkit + child + '@' + child;
                              } else {
                                child = '@' + child;
                              }

                              break;
                            }

                          default:
                            {
                              child = chars + child;

                              if (id === PAGE) {
                                child = (out += child, '');
                              }
                            }
                        }
                      } else {
                        child = '';
                      }

                      break;
                    }
                  // selector

                  default:
                    {
                      child = compile(current, select(current, chars, invert), child, id, depth + 1);
                    }
                }

                children += child; // reset

                context = 0;
                insert = 0;
                pseudo = 0;
                format = 0;
                invert = 0;
                atrule = 0;
                chars = '';
                child = '';
                code = body.charCodeAt(++caret);
                break;
              }

            case CLOSEBRACES:
            case SEMICOLON:
              {
                chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim();

                if ((length = chars.length) > 1) {
                  // monkey-patch missing colon
                  if (pseudo === 0) {
                    first = chars.charCodeAt(0); // first character is a letter or dash, buffer has a space character

                    if (first === DASH || first > 96 && first < 123) {
                      length = (chars = chars.replace(' ', ':')).length;
                    }
                  } // execute plugins, property context


                  if (plugged > 0) {
                    if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
                      if ((length = (chars = result.trim()).length) === 0) {
                        chars = '\0\0';
                      }
                    }
                  }

                  first = chars.charCodeAt(0);
                  second = chars.charCodeAt(1);

                  switch (first) {
                    case NULL:
                      {
                        break;
                      }

                    case AT:
                      {
                        if (second === IMPORT || second === CHARSET) {
                          flat += chars + body.charAt(caret);
                          break;
                        }
                      }

                    default:
                      {
                        if (chars.charCodeAt(length - 1) === COLON) {
                          break;
                        }

                        out += property(chars, first, second, chars.charCodeAt(2));
                      }
                  }
                } // reset


                context = 0;
                insert = 0;
                pseudo = 0;
                format = 0;
                invert = 0;
                chars = '';
                code = body.charCodeAt(++caret);
                break;
              }
          }
        } // parse characters


        switch (code) {
          case CARRIAGE:
          case NEWLINE:
            {
              // auto insert semicolon
              if (comment + quote + parentheses + bracket + semicolon === 0) {
                // valid non-whitespace characters that
                // may precede a newline
                switch (peak) {
                  case CLOSEPARENTHESES:
                  case SINGLEQUOTE:
                  case DOUBLEQUOTE:
                  case AT:
                  case TILDE:
                  case GREATERTHAN:
                  case STAR:
                  case PLUS:
                  case FOWARDSLASH:
                  case DASH:
                  case COLON:
                  case COMMA:
                  case SEMICOLON:
                  case OPENBRACES:
                  case CLOSEBRACES:
                    {
                      break;
                    }

                  default:
                    {
                      // current buffer has a colon
                      if (pseudo > 0) {
                        insert = 1;
                      }
                    }
                }
              } // terminate line comment


              if (comment === FOWARDSLASH) {
                comment = 0;
              } else if (cascade + context === 0 && id !== KEYFRAME && chars.length > 0) {
                format = 1;
                chars += '\0';
              } // execute plugins, newline context


              if (plugged * unkwn > 0) {
                proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id);
              } // next line, reset column position


              column = 1;
              line++;
              break;
            }

          case SEMICOLON:
          case CLOSEBRACES:
            {
              if (comment + quote + parentheses + bracket === 0) {
                column++;
                break;
              }
            }

          default:
            {
              // increment column position
              column++; // current character

              char = body.charAt(caret); // remove comments, escape functions, strings, attributes and prepare selectors

              switch (code) {
                case TAB:
                case SPACE:
                  {
                    if (quote + bracket + comment === 0) {
                      switch (tail) {
                        case COMMA:
                        case COLON:
                        case TAB:
                        case SPACE:
                          {
                            char = '';
                            break;
                          }

                        default:
                          {
                            if (code !== SPACE) {
                              char = ' ';
                            }
                          }
                      }
                    }

                    break;
                  }
                // escape breaking control characters

                case NULL:
                  {
                    char = '\\0';
                    break;
                  }

                case FORMFEED:
                  {
                    char = '\\f';
                    break;
                  }

                case VERTICALTAB:
                  {
                    char = '\\v';
                    break;
                  }
                // &

                case AND:
                  {
                    // inverted selector pattern i.e html &
                    if (quote + comment + bracket === 0 && cascade > 0) {
                      invert = 1;
                      format = 1;
                      char = '\f' + char;
                    }

                    break;
                  }
                // ::p<l>aceholder, l
                // :read-on<l>y, l

                case 108:
                  {
                    if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
                      switch (caret - pseudo) {
                        // ::placeholder
                        case 2:
                          {
                            if (tail === PLACEHOLDER && body.charCodeAt(caret - 3) === COLON) {
                              pattern = tail;
                            }
                          }
                        // :read-only

                        case 8:
                          {
                            if (trail === READONLY) {
                              pattern = trail;
                            }
                          }
                      }
                    }

                    break;
                  }
                // :<pattern>

                case COLON:
                  {
                    if (quote + comment + bracket === 0) {
                      pseudo = caret;
                    }

                    break;
                  }
                // selectors

                case COMMA:
                  {
                    if (comment + parentheses + quote + bracket === 0) {
                      format = 1;
                      char += '\r';
                    }

                    break;
                  }
                // quotes

                case DOUBLEQUOTE:
                case SINGLEQUOTE:
                  {
                    if (comment === 0) {
                      quote = quote === code ? 0 : quote === 0 ? code : quote;
                    }

                    break;
                  }
                // attributes

                case OPENBRACKET:
                  {
                    if (quote + comment + parentheses === 0) {
                      bracket++;
                    }

                    break;
                  }

                case CLOSEBRACKET:
                  {
                    if (quote + comment + parentheses === 0) {
                      bracket--;
                    }

                    break;
                  }
                // functions

                case CLOSEPARENTHESES:
                  {
                    if (quote + comment + bracket === 0) {
                      parentheses--;
                    }

                    break;
                  }

                case OPENPARENTHESES:
                  {
                    if (quote + comment + bracket === 0) {
                      if (context === 0) {
                        switch (tail * 2 + trail * 3) {
                          // :matches
                          case 533:
                            {
                              break;
                            }
                          // :global, :not, :nth-child etc...

                          default:
                            {
                              counter = 0;
                              context = 1;
                            }
                        }
                      }

                      parentheses++;
                    }

                    break;
                  }

                case AT:
                  {
                    if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
                      atrule = 1;
                    }

                    break;
                  }
                // block/line comments

                case STAR:
                case FOWARDSLASH:
                  {
                    if (quote + bracket + parentheses > 0) {
                      break;
                    }

                    switch (comment) {
                      // initialize line/block comment context
                      case 0:
                        {
                          switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
                            // //
                            case 235:
                              {
                                comment = FOWARDSLASH;
                                break;
                              }
                            // /*

                            case 220:
                              {
                                length = caret;
                                comment = STAR;
                                break;
                              }
                          }

                          break;
                        }
                      // end block comment context

                      case STAR:
                        {
                          if (code === FOWARDSLASH && tail === STAR && length + 2 !== caret) {
                            // /*<!> ... */, !
                            if (body.charCodeAt(length + 2) === 33) {
                              out += body.substring(length, caret + 1);
                            }

                            char = '';
                            comment = 0;
                          }
                        }
                    }
                  }
              } // ignore comment blocks


              if (comment === 0) {
                // aggressive isolation mode, divide each individual selector
                // including selectors in :not function but excluding selectors in :global function
                if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
                  switch (code) {
                    case COMMA:
                    case TILDE:
                    case GREATERTHAN:
                    case PLUS:
                    case CLOSEPARENTHESES:
                    case OPENPARENTHESES:
                      {
                        if (context === 0) {
                          // outside of an isolated context i.e nth-child(<...>)
                          switch (tail) {
                            case TAB:
                            case SPACE:
                            case NEWLINE:
                            case CARRIAGE:
                              {
                                char = char + '\0';
                                break;
                              }

                            default:
                              {
                                char = '\0' + char + (code === COMMA ? '' : '\0');
                              }
                          }

                          format = 1;
                        } else {
                          // within an isolated context, sleep untill it's terminated
                          switch (code) {
                            case OPENPARENTHESES:
                              {
                                // :globa<l>(
                                if (pseudo + 7 === caret && tail === 108) {
                                  pseudo = 0;
                                }

                                context = ++counter;
                                break;
                              }

                            case CLOSEPARENTHESES:
                              {
                                if ((context = --counter) === 0) {
                                  format = 1;
                                  char += '\0';
                                }

                                break;
                              }
                          }
                        }

                        break;
                      }

                    case TAB:
                    case SPACE:
                      {
                        switch (tail) {
                          case NULL:
                          case OPENBRACES:
                          case CLOSEBRACES:
                          case SEMICOLON:
                          case COMMA:
                          case FORMFEED:
                          case TAB:
                          case SPACE:
                          case NEWLINE:
                          case CARRIAGE:
                            {
                              break;
                            }

                          default:
                            {
                              // ignore in isolated contexts
                              if (context === 0) {
                                format = 1;
                                char += '\0';
                              }
                            }
                        }
                      }
                  }
                } // concat buffer of characters


                chars += char; // previous non-whitespace character code

                if (code !== SPACE && code !== TAB) {
                  peak = code;
                }
              }
            }
        } // tail character codes


        trail = tail;
        tail = code; // visit every character

        caret++;
      }

      length = out.length; // preserve empty selector

      if (preserve > 0) {
        if (length === 0 && children.length === 0 && current[0].length === 0 === false) {
          if (id !== MEDIA || current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0]) {
            length = current.join(',').length + 2;
          }
        }
      }

      if (length > 0) {
        // cascade isolation mode?
        selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current; // execute plugins, block context

        if (plugged > 0) {
          result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id);

          if (result !== void 0 && (out = result).length === 0) {
            return flat + out + children;
          }
        }

        out = selector.join(',') + '{' + out + '}';

        if (prefix * pattern !== 0) {
          if (prefix === 2 && !vendor(out, 2)) pattern = 0;

          switch (pattern) {
            // ::read-only
            case READONLY:
              {
                out = out.replace(readonlyptn, ':' + moz + '$1') + out;
                break;
              }
            // ::placeholder

            case PLACEHOLDER:
              {
                out = out.replace(plcholdrptn, '::' + webkit + 'input-$1') + out.replace(plcholdrptn, '::' + moz + '$1') + out.replace(plcholdrptn, ':' + ms + 'input-$1') + out;
                break;
              }
          }

          pattern = 0;
        }
      }

      return flat + out + children;
    }
    /**
     * Select
     *
     * @param {Array<string>} parent
     * @param {string} current
     * @param {number} invert
     * @return {Array<string>}
     */


    function select(parent, current, invert) {
      var selectors = current.trim().split(selectorptn);
      var out = selectors;
      var length = selectors.length;
      var l = parent.length;

      switch (l) {
        // 0-1 parent selectors
        case 0:
        case 1:
          {
            for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
              out[i] = scope(selector, out[i], invert, l).trim();
            }

            break;
          }
        // >2 parent selectors, nested

        default:
          {
            for (var i = 0, j = 0, out = []; i < length; ++i) {
              for (var k = 0; k < l; ++k) {
                out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim();
              }
            }
          }
      }

      return out;
    }
    /**
     * Scope
     *
     * @param {string} parent
     * @param {string} current
     * @param {number} invert
     * @param {number} level
     * @return {string}
     */


    function scope(parent, current, invert, level) {
      var selector = current;
      var code = selector.charCodeAt(0); // trim leading whitespace

      if (code < 33) {
        code = (selector = selector.trim()).charCodeAt(0);
      }

      switch (code) {
        // &
        case AND:
          {
            switch (cascade + level) {
              case 0:
              case 1:
                {
                  if (parent.trim().length === 0) {
                    break;
                  }
                }

              default:
                {
                  return selector.replace(andptn, '$1' + parent.trim());
                }
            }

            break;
          }
        // :

        case COLON:
          {
            switch (selector.charCodeAt(1)) {
              // g in :global
              case 103:
                {
                  if (escape > 0 && cascade > 0) {
                    return selector.replace(escapeptn, '$1').replace(andptn, '$1' + nscope);
                  }

                  break;
                }

              default:
                {
                  // :hover
                  return parent.trim() + selector.replace(andptn, '$1' + parent.trim());
                }
            }
          }

        default:
          {
            // html &
            if (invert * cascade > 0 && selector.indexOf('\f') > 0) {
              return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1') + parent.trim());
            }
          }
      }

      return parent + selector;
    }
    /**
     * Property
     *
     * @param {string} input
     * @param {number} first
     * @param {number} second
     * @param {number} third
     * @return {string}
     */


    function property(input, first, second, third) {
      var index = 0;
      var out = input + ';';
      var hash = first * 2 + second * 3 + third * 4;
      var cache; // animation: a, n, i characters

      if (hash === 944) {
        return animation(out);
      } else if (prefix === 0 || prefix === 2 && !vendor(out, 1)) {
        return out;
      } // vendor prefix


      switch (hash) {
        // text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
        case 1015:
          {
            // text-shadow/text-align/text-transform, a
            return out.charCodeAt(10) === 97 ? webkit + out + out : out;
          }
        // filter/fill f, i, l

        case 951:
          {
            // filter, t
            return out.charCodeAt(3) === 116 ? webkit + out + out : out;
          }
        // color/column, c, o, l

        case 963:
          {
            // column, n
            return out.charCodeAt(5) === 110 ? webkit + out + out : out;
          }
        // box-decoration-break, b, o, x

        case 1009:
          {
            if (out.charCodeAt(4) !== 100) {
              break;
            }
          }
        // mask, m, a, s
        // clip-path, c, l, i

        case 969:
        case 942:
          {
            return webkit + out + out;
          }
        // appearance: a, p, p

        case 978:
          {
            return webkit + out + moz + out + out;
          }
        // hyphens: h, y, p
        // user-select: u, s, e

        case 1019:
        case 983:
          {
            return webkit + out + moz + out + ms + out + out;
          }
        // background/backface-visibility, b, a, c

        case 883:
          {
            // backface-visibility, -
            if (out.charCodeAt(8) === DASH) {
              return webkit + out + out;
            } // image-set(...)


            if (out.indexOf('image-set(', 11) > 0) {
              return out.replace(imgsrcptn, '$1' + webkit + '$2') + out;
            }

            return out;
          }
        // flex: f, l, e

        case 932:
          {
            if (out.charCodeAt(4) === DASH) {
              switch (out.charCodeAt(5)) {
                // flex-grow, g
                case 103:
                  {
                    return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out;
                  }
                // flex-shrink, s

                case 115:
                  {
                    return webkit + out + ms + out.replace('shrink', 'negative') + out;
                  }
                // flex-basis, b

                case 98:
                  {
                    return webkit + out + ms + out.replace('basis', 'preferred-size') + out;
                  }
              }
            }

            return webkit + out + ms + out + out;
          }
        // order: o, r, d

        case 964:
          {
            return webkit + out + ms + 'flex' + '-' + out + out;
          }
        // justify-items/justify-content, j, u, s

        case 1023:
          {
            // justify-content, c
            if (out.charCodeAt(8) !== 99) {
              break;
            }

            cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
            return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out;
          }
        // cursor, c, u, r

        case 1005:
          {
            return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out;
          }
        // writing-mode, w, r, i

        case 1000:
          {
            cache = out.substring(13).trim();
            index = cache.indexOf('-') + 1;

            switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
              // vertical-lr
              case 226:
                {
                  cache = out.replace(writingptn, 'tb');
                  break;
                }
              // vertical-rl

              case 232:
                {
                  cache = out.replace(writingptn, 'tb-rl');
                  break;
                }
              // horizontal-tb

              case 220:
                {
                  cache = out.replace(writingptn, 'lr');
                  break;
                }

              default:
                {
                  return out;
                }
            }

            return webkit + out + ms + cache + out;
          }
        // position: sticky

        case 1017:
          {
            if (out.indexOf('sticky', 9) === -1) {
              return out;
            }
          }
        // display(flex/inline-flex/inline-box): d, i, s

        case 975:
          {
            index = (out = input).length - 10;
            cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim();

            switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7) | 0)) {
              // inline-
              case 203:
                {
                  // inline-box
                  if (cache.charCodeAt(8) < 111) {
                    break;
                  }
                }
              // inline-box/sticky

              case 115:
                {
                  out = out.replace(cache, webkit + cache) + ';' + out;
                  break;
                }
              // inline-flex
              // flex

              case 207:
              case 102:
                {
                  out = out.replace(cache, webkit + (hash > 102 ? 'inline-' : '') + 'box') + ';' + out.replace(cache, webkit + cache) + ';' + out.replace(cache, ms + cache + 'box') + ';' + out;
                }
            }

            return out + ';';
          }
        // align-items, align-center, align-self: a, l, i, -

        case 938:
          {
            if (out.charCodeAt(5) === DASH) {
              switch (out.charCodeAt(6)) {
                // align-items, i
                case 105:
                  {
                    cache = out.replace('-items', '');
                    return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out;
                  }
                // align-self, s

                case 115:
                  {
                    return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out;
                  }
                // align-content

                default:
                  {
                    return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out;
                  }
              }
            }

            break;
          }
        // min/max

        case 973:
        case 989:
          {
            // min-/max- height/width/block-size/inline-size
            if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
              break;
            }
          }
        // height/width: min-content / width: max-content

        case 931:
        case 953:
          {
            if (dimensionptn.test(input) === true) {
              // stretch
              if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115) return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch');else return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out;
            }

            break;
          }
        // transform, transition: t, r, a

        case 962:
          {
            out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out; // transitions

            if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
              return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out;
            }

            break;
          }
      }

      return out;
    }
    /**
     * Vendor
     *
     * @param {string} content
     * @param {number} context
     * @return {boolean}
     */


    function vendor(content, context) {
      var index = content.indexOf(context === 1 ? ':' : '{');
      var key = content.substring(0, context !== 3 ? index : 10);
      var value = content.substring(index + 1, content.length - 1);
      return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context);
    }
    /**
     * Supports
     *
     * @param {string} match
     * @param {string} group
     * @return {string}
     */


    function supports(match, group) {
      var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2));
      return out !== group + ';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '(' + group + ')';
    }
    /**
     * Animation
     *
     * @param {string} input
     * @return {string}
     */


    function animation(input) {
      var length = input.length;
      var index = input.indexOf(':', 9) + 1;
      var declare = input.substring(0, index).trim();
      var out = input.substring(index, length - 1).trim();

      switch (input.charCodeAt(9) * keyed) {
        case 0:
          {
            break;
          }
        // animation-*, -

        case DASH:
          {
            // animation-name, n
            if (input.charCodeAt(10) !== 110) {
              break;
            }
          }
        // animation/animation-name

        default:
          {
            // split in case of multiple animations
            var list = out.split((out = '', animationptn));

            for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
              var value = list[i];
              var items = value.split(propertiesptn);

              while (value = items[index]) {
                var peak = value.charCodeAt(0);

                if (keyed === 1 && ( // letters
                peak > AT && peak < 90 || peak > 96 && peak < 123 || peak === UNDERSCORE || // dash but not in sequence i.e --
                peak === DASH && value.charCodeAt(1) !== DASH)) {
                  // not a number/function
                  switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
                    case 1:
                      {
                        switch (value) {
                          // not a valid reserved keyword
                          case 'infinite':
                          case 'alternate':
                          case 'backwards':
                          case 'running':
                          case 'normal':
                          case 'forwards':
                          case 'both':
                          case 'none':
                          case 'linear':
                          case 'ease':
                          case 'ease-in':
                          case 'ease-out':
                          case 'ease-in-out':
                          case 'paused':
                          case 'reverse':
                          case 'alternate-reverse':
                          case 'inherit':
                          case 'initial':
                          case 'unset':
                          case 'step-start':
                          case 'step-end':
                            {
                              break;
                            }

                          default:
                            {
                              value += key;
                            }
                        }
                      }
                  }
                }

                items[index++] = value;
              }

              out += (i === 0 ? '' : ',') + items.join(' ');
            }
          }
      }

      out = declare + out + ';';
      if (prefix === 1 || prefix === 2 && vendor(out, 1)) return webkit + out + out;
      return out;
    }
    /**
     * Isolate
     *
     * @param {Array<string>} current
     */


    function isolate(current) {
      for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
        // split individual elements in a selector i.e h1 h2 === [h1, h2]
        var elements = current[i].split(elementptn);
        var out = '';

        for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
          // empty element
          if ((size = (element = elements[j]).length) === 0 && l > 1) {
            continue;
          }

          tail = out.charCodeAt(out.length - 1);
          code = element.charCodeAt(0);
          padding = '';

          if (j !== 0) {
            // determine if we need padding
            switch (tail) {
              case STAR:
              case TILDE:
              case GREATERTHAN:
              case PLUS:
              case SPACE:
              case OPENPARENTHESES:
                {
                  break;
                }

              default:
                {
                  padding = ' ';
                }
            }
          }

          switch (code) {
            case AND:
              {
                element = padding + nscopealt;
              }

            case TILDE:
            case GREATERTHAN:
            case PLUS:
            case SPACE:
            case CLOSEPARENTHESES:
            case OPENPARENTHESES:
              {
                break;
              }

            case OPENBRACKET:
              {
                element = padding + element + nscopealt;
                break;
              }

            case COLON:
              {
                switch (element.charCodeAt(1) * 2 + element.charCodeAt(2) * 3) {
                  // :global
                  case 530:
                    {
                      if (escape > 0) {
                        element = padding + element.substring(8, size - 1);
                        break;
                      }
                    }
                  // :hover, :nth-child(), ...

                  default:
                    {
                      if (j < 1 || elements[j - 1].length < 1) {
                        element = padding + nscopealt + element;
                      }
                    }
                }

                break;
              }

            case COMMA:
              {
                padding = '';
              }

            default:
              {
                if (size > 1 && element.indexOf(':') > 0) {
                  element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2');
                } else {
                  element = padding + element + nscopealt;
                }
              }
          }

          out += element;
        }

        selector[i] = out.replace(formatptn, '').trim();
      }

      return selector;
    }
    /**
     * Proxy
     *
     * @param {number} context
     * @param {string} content
     * @param {Array<string>} selectors
     * @param {Array<string>} parents
     * @param {number} line
     * @param {number} column
     * @param {number} length
     * @param {number} id
     * @param {number} depth
     * @param {number} at
     * @return {(string|void|*)}
     */


    function proxy(context, content, selectors, parents, line, column, length, id, depth, at) {
      for (var i = 0, out = content, next; i < plugged; ++i) {
        switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
          case void 0:
          case false:
          case true:
          case null:
            {
              break;
            }

          default:
            {
              out = next;
            }
        }
      }

      if (out !== content) {
        return out;
      }
    }
    /**
     * @param {number} code
     * @param {number} index
     * @param {number} length
     * @param {string} body
     * @return {number}
     */


    function delimited(code, index, length, body) {
      for (var i = index + 1; i < length; ++i) {
        switch (body.charCodeAt(i)) {
          // /*
          case FOWARDSLASH:
            {
              if (code === STAR) {
                if (body.charCodeAt(i - 1) === STAR && index + 2 !== i) {
                  return i + 1;
                }
              }

              break;
            }
          // //

          case NEWLINE:
            {
              if (code === FOWARDSLASH) {
                return i + 1;
              }
            }
        }
      }

      return i;
    }
    /**
     * @param {number} type
     * @param {number} index
     * @param {number} length
     * @param {number} find
     * @param {string} body
     * @return {number}
     */


    function match(type, index, length, body) {
      for (var i = index + 1; i < length; ++i) {
        switch (body.charCodeAt(i)) {
          case type:
            {
              return i;
            }
        }
      }

      return i;
    }
    /**
     * Minify
     *
     * @param {(string|*)} output
     * @return {string}
     */


    function minify(output) {
      return output.replace(formatptn, '').replace(beforeptn, '').replace(afterptn, '$1').replace(tailptn, '$1').replace(whiteptn, ' ');
    }
    /**
     * Use
     *
     * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
     */


    function use(plugin) {
      switch (plugin) {
        case void 0:
        case null:
          {
            plugged = plugins.length = 0;
            break;
          }

        default:
          {
            if (typeof plugin === 'function') {
              plugins[plugged++] = plugin;
            } else if (typeof plugin === 'object') {
              for (var i = 0, length = plugin.length; i < length; ++i) {
                use(plugin[i]);
              }
            } else {
              unkwn = !!plugin | 0;
            }
          }
      }

      return use;
    }
    /**
     * Set
     *
     * @param {*} options
     */


    function set(options) {
      for (var name in options) {
        var value = options[name];

        switch (name) {
          case 'keyframe':
            keyed = value | 0;
            break;

          case 'global':
            escape = value | 0;
            break;

          case 'cascade':
            cascade = value | 0;
            break;

          case 'compress':
            compress = value | 0;
            break;

          case 'semicolon':
            semicolon = value | 0;
            break;

          case 'preserve':
            preserve = value | 0;
            break;

          case 'prefix':
            should = null;

            if (!value) {
              prefix = 0;
            } else if (typeof value !== 'function') {
              prefix = 1;
            } else {
              prefix = 2;
              should = value;
            }

        }
      }

      return set;
    }
    /**
     * Stylis
     *
     * @param {string} selector
     * @param {string} input
     * @return {*}
     */


    function stylis(selector, input) {
      if (this !== void 0 && this.constructor === stylis) {
        return factory(selector);
      } // setup


      var ns = selector;
      var code = ns.charCodeAt(0); // trim leading whitespace

      if (code < 33) {
        code = (ns = ns.trim()).charCodeAt(0);
      } // keyframe/animation namespace


      if (keyed > 0) {
        key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-');
      } // reset, used to assert if a plugin is moneky-patching the return value


      code = 1; // cascade/isolate

      if (cascade === 1) {
        nscope = ns;
      } else {
        nscopealt = ns;
      }

      var selectors = [nscope];
      var result; // execute plugins, pre-process context

      if (plugged > 0) {
        result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0);

        if (result !== void 0 && typeof result === 'string') {
          input = result;
        }
      } // build


      var output = compile(array, selectors, input, 0, 0); // execute plugins, post-process context

      if (plugged > 0) {
        result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0); // bypass minification

        if (result !== void 0 && typeof (output = result) !== 'string') {
          code = 0;
        }
      } // reset


      key = '';
      nscope = '';
      nscopealt = '';
      pattern = 0;
      line = 1;
      column = 1;
      return compress * code === 0 ? output : minify(output);
    }

    stylis['use'] = use;
    stylis['set'] = set;

    if (options !== void 0) {
      set(options);
    }

    return stylis;
  });
  /***/

},
/* 43 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Button", function () {
    return Button;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
  /* harmony import */


  var _CSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** Button.js
  **
  ** Button.js is an extensible HTML5 Web Component wrapper, built around the Button
  ** element. It's aim is in providing an button element that is able to be
  ** extended via the v1 web components api...
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/
  // Get utilities...
  // Get data...
  // Get Events...
  // Get CSS...
  // Get Node class...
  // Globalize common utility functions...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var el = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["el"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];

  var Button =
  /*#__PURE__*/
  function () {
    function Button() {
      _classCallCheck(this, Button);
    }

    _createClass(Button, null, [{
      key: "_appendStyleNode",
      // A CSS template literal, holding default styles for a button...
      // Static method for appending child nodes to parent elements...
      value: function _appendStyleNode(root, child) {
        return root.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_4__["Node"].createNode(child()));
      } // Static method for defining a Venus button element...

    }, {
      key: "createComponent",
      value: function createComponent() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        log('props', ['orange', 'bold']);
        dir(props); // Declarations..

        var _HTMLButtonComponent,
            eListeners = [],
            customProps = [],
            shadowBool,
            shadow,
            button,
            self,
            obj; // Return boolean value for shadow...


        shadowBool = function shadowBool(arr) {
          return arr.reduce(function (shadow, keyVal, index) {
            return keyVal.indexOf('shadow') == -1 ? shadow : index;
          }, false);
        }; // Get attribute names and Listeners...


        if (props) {
          obj = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["processData"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props)); // Store attribute and Listener pairs...

          customProps = obj.props;
          eListeners = obj.eventListeners; // Determine if shadow option is set or not...

          shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : true;
        } // Create an HTMLButtonElement...


        button = document.createElement('button'); // Some default settings for button elements...
        // Set venus identifier flag..
        // button.venus = true
        // if (props.type == 'text') {
        //
        // }
        // Pass props from venus component declaration on to the inner button el...

        var _arr = Object.keys(props);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i]; // Check all keys in button el object...

          if (key in button) {
            // Pass on the ones that match...
            log("".concat(key, " in button"), ['yellow', 'bold']);
            button["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
          } else if (key in button.style) {
            log("".concat(key, " in button"), ['pink', 'bold']); // Put them here...

            button.style["".concat(key)] = props["".concat(key)];
          }
        } // Check for 'label' attribute,


        if ('label' in props) {
          button.textContent = props.label;
          button.style.fontSize = '24px'; // button.style.margin = '5'
        } // The button component element's constructor definition...


        _HTMLButtonComponent = function HTMLButtonComponent() {
          var shadowRoot; // Construct an element, store as self...

          self = Reflect.construct(HTMLElement, [], _HTMLButtonComponent);

          if (shadow) {
            // Create shadow root...
            shadowRoot = self.attachShadow({
              mode: 'open'
            }); // Append to shadow root...

            shadowRoot.appendChild(button); // Create a node from the template function, and append to shadowRoot....

            Button._appendStyleNode(shadowRoot, template);
          } // Return constructor...


          return self;
        }; // Add superclass prototype...


        _HTMLButtonComponent.prototype = Object.create(HTMLButtonElement.prototype); // Add constructor...

        _HTMLButtonComponent.prototype.constructor = _HTMLButtonComponent; // Register event listener methods..

        _Events__WEBPACK_IMPORTED_MODULE_2__["Events"].registerCallbacks(_HTMLButtonComponent, eListeners); // console.dir(HTMLComponent)
        // Add connectedCallback method appending children if shadow is false...


        if (!shadow) {
          _HTMLButtonComponent.prototype.connectedCallback = function () {
            self.appendChild(button);
          };
        } // Return component to the caller...


        return _HTMLButtonComponent;
      }
    }]);

    return Button;
  }();

  _defineProperty(Button, "_tempLiteral", ":host {\n                          background-color: black;\n                          border-radius: 5%;\n                        }");
  /***/

},
/* 44 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Paragraph", function () {
    return Paragraph;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
  /* harmony import */


  var _CSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** Paragraph.js
  **
  ** Paragraph.js is an extensible HTML5 Web Component wrapper, built around the P
  ** element. It's aim is in providing a p element that is able to be
  ** extended via the v1 web components api...
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/
  // Get utilities...
  // Get data...
  // Get Events...
  // Get CSS...
  // Get Node class...
  // Globalize common utility functions...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var el = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["el"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];

  var Paragraph =
  /*#__PURE__*/
  function () {
    function Paragraph() {
      _classCallCheck(this, Paragraph);
    }

    _createClass(Paragraph, null, [{
      key: "_appendStyleNode",
      // A CSS template literal, holding default styles for a p...
      // Static method for appending child nodes to parent elements...
      value: function _appendStyleNode(root, child) {
        return root.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_4__["Node"].createNode(child()));
      } // Static method for defining a Venus p element...

    }, {
      key: "createComponent",
      value: function createComponent() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // Declarations..

        var _HTMLPGraphComponent,
            eListeners = [],
            customProps = [],
            shadowBool,
            shadow,
            p,
            self,
            obj; // Return boolean value for shadow...


        shadowBool = function shadowBool(arr) {
          return arr.reduce(function (shadow, keyVal, index) {
            return keyVal.indexOf('shadow') == -1 ? shadow : index;
          }, false);
        }; // Get attribute names and Listeners...


        if (props) {
          obj = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["processData"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props)); // Store attribute and Listener pairs...

          customProps = obj.props;
          eListeners = obj.eventListeners; // Determine if shadow option is set or not...

          shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : true;
        } // Create an HTMLPElement...


        p = document.createElement('p'); // Some default settings for p elements...
        // Set venus identifier flag..
        // p.venus = true
        // if (props.type == 'text') {
        //
        // }
        // Pass props from venus component declaration on to the inner p el...

        var _arr = Object.keys(props);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i]; // Check all keys in p el object...

          if (key in p) {
            // Pass on the ones that match...
            log("".concat(key, " in p"), ['yellow', 'bold']);
            p["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
          } else if (key in p.style) {
            log("".concat(key, " in p"), ['pink', 'bold']); // Put them here...

            p.style["".concat(key)] = props["".concat(key)];
          }
        } // // Check for 'content' attribute,
        //     if ('content' in props) {
        //       p.textContent = props.content
        //     }
        // The p component element's constructor definition...


        _HTMLPGraphComponent = function HTMLPGraphComponent() {
          var shadowRoot; // Construct an element, store as self...

          self = Reflect.construct(HTMLElement, [], _HTMLPGraphComponent);

          if (shadow) {
            // Create shadow root...
            shadowRoot = self.attachShadow({
              mode: 'open'
            }); // Append to shadow root...

            shadowRoot.appendChild(p); // Create a node from the template function, and append to shadowRoot....

            Paragraph._appendStyleNode(shadowRoot, template);
          } // Return constructor...


          return self;
        }; // Add superclass prototype...


        _HTMLPGraphComponent.prototype = Object.create(HTMLParagraphElement.prototype); // Add constructor...

        _HTMLPGraphComponent.prototype.constructor = _HTMLPGraphComponent; // Register event listener methods..

        _Events__WEBPACK_IMPORTED_MODULE_2__["Events"].registerCallbacks(_HTMLPGraphComponent, eListeners); // console.dir(HTMLComponent)
        // Add connectedCallback method appending children if shadow is false...


        if (!shadow) {
          _HTMLPGraphComponent.prototype.connectedCallback = function () {
            self.appendChild(p);
          };
        } // Return component to the caller...


        return _HTMLPGraphComponent;
      }
    }]);

    return Paragraph;
  }();

  _defineProperty(Paragraph, "_textLiteral", ":host {\n\n                        }");
  /***/

},
/* 45 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "H1", function () {
    return H1;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
  /* harmony import */


  var _CSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** H1.js
  **
  ** H1.js is an extensible HTML5 Web Component wrapper, built around the H1
  ** element. It's aim is in providing an h1 element that is able to be
  ** extended via the v1 web components api...
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/
  // Get utilities...
  // Get data...
  // Get Events...
  // Get CSS...
  // Get Node class...
  // Globalize common utility functions...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var el = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["el"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];

  var H1 =
  /*#__PURE__*/
  function () {
    function H1() {
      _classCallCheck(this, H1);
    }

    _createClass(H1, null, [{
      key: "_appendStyleNode",
      // A CSS template literal, holding default styles for an h1...
      // Static method for appending child nodes to parent elements...
      value: function _appendStyleNode(root, child) {
        return root.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_4__["Node"].createNode(child()));
      } // Static method for defining a Venus h1 element...

    }, {
      key: "createComponent",
      value: function createComponent() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        log('props', ['orange', 'bold']);
        dir(props); // Declarations..

        var _HTMLH1Component,
            eListeners = [],
            customProps = [],
            shadowBool,
            shadow,
            h1,
            self,
            obj; // Return boolean value for shadow...


        shadowBool = function shadowBool(arr) {
          return arr.reduce(function (shadow, keyVal, index) {
            return keyVal.indexOf('shadow') == -1 ? shadow : index;
          }, false);
        }; // Get attribute names and Listeners...


        if (props) {
          obj = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["processData"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props)); // Store attribute and Listener pairs...

          customProps = obj.props;
          eListeners = obj.eventListeners; // Determine if shadow option is set or not...

          shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : true;
        } // Create an HTMLH1Element...


        h1 = document.createElement('h1'); // Some default settings for h1 elements...
        // Set venus identifier flag..

        h1.venus = true; // if (props.type == 'text') {
        //
        // }
        // Pass props from venus component declaration on to the inner h1 el...

        var _arr = Object.keys(props);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i]; // Check all keys in h1 el object...

          if (key in h1) {
            // Pass on the ones that match...
            log("".concat(key, " in h1"), ['yellow', 'bold']);
            h1["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
          } else if (key in h1.style) {
            log("".concat(key, " in h1"), ['pink', 'bold']); // Put them here...

            h1.style["".concat(key)] = props["".concat(key)];
          }
        } // Check for 'content' attribute,


        if ('content' in props) {
          h6.textContent = props.content; // h6.style.margin = '5'
        } // The h1 component element's constructor definition...


        _HTMLH1Component = function HTMLH1Component() {
          var shadowRoot; // Construct an element, store as self...

          self = Reflect.construct(HTMLElement, [], _HTMLH1Component);

          if (shadow) {
            // Create shadow root...
            shadowRoot = self.attachShadow({
              mode: 'open'
            }); // Append to shadow root...

            shadowRoot.appendChild(h1); // Create a node from the template function, and append to shadowRoot....

            H1._appendStyleNode(shadowRoot, template);
          } // Return constructor...


          return self;
        }; // Add superclass prototype...


        _HTMLH1Component.prototype = Object.create(HTMLHeaderElement.prototype); // Add constructor...

        _HTMLH1Component.prototype.constructor = _HTMLH1Component; // Register event listener methods..

        _Events__WEBPACK_IMPORTED_MODULE_2__["Events"].registerCallbacks(_HTMLH1Component, eListeners); // console.dir(HTMLComponent)
        // Add connectedCallback method appending children if shadow is false...


        if (!shadow) {
          _HTMLH1Component.prototype.connectedCallback = function () {
            self.appendChild(h1);
          };
        } // Return component to the caller...


        return _HTMLH1Component;
      }
    }]);

    return H1;
  }();

  _defineProperty(H1, "_tempLiteral", ":host {\n                          background-color: black;\n                          border-radius: 5%;\n                        }");
  /***/

},
/* 46 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "H2", function () {
    return H2;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
  /* harmony import */


  var _CSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** H2.js
  **
  ** H2.js is an extensible HTML5 Web Component wrapper, built around the H2
  ** element. It's aim is in providing an h2 element that is able to be
  ** extended via the v1 web components api...
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/
  // Get utilities...
  // Get data...
  // Get Events...
  // Get CSS...
  // Get Node class...
  // Globalize common utility functions...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var el = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["el"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];

  var H2 =
  /*#__PURE__*/
  function () {
    function H2() {
      _classCallCheck(this, H2);
    }

    _createClass(H2, null, [{
      key: "_appendStyleNode",
      // A CSS template literal, holding default styles for an h2...
      // Static method for appending child nodes to parent elements...
      value: function _appendStyleNode(root, child) {
        return root.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_4__["Node"].createNode(child()));
      } // Static method for defining a Venus h2 element...

    }, {
      key: "createComponent",
      value: function createComponent() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // log('props', ['orange', 'bold'])
        // dir(props)
        // Declarations..

        var _HTMLH2Component,
            eListeners = [],
            customProps = [],
            shadowBool,
            shadow,
            h2,
            self,
            obj; // Return boolean value for shadow...


        shadowBool = function shadowBool(arr) {
          return arr.reduce(function (shadow, keyVal, index) {
            return keyVal.indexOf('shadow') == -1 ? shadow : index;
          }, false);
        }; // Get attribute names and Listeners...


        if (props) {
          obj = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["processData"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props)); // Store attribute and Listener pairs...

          customProps = obj.props;
          eListeners = obj.eventListeners; // Determine if shadow option is set or not...

          shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : true;
        } // Create an HTMLH2Element...


        h2 = document.createElement('h2'); // Some default settings for h2 elements...
        // Set venus identifier flag..

        h2.venus = true; // Pass props from venus component declaration on to the inner h2 el...

        var _arr = Object.keys(props);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i]; // Check all keys in h2 el object...

          if (key in h2) {
            // Pass on the ones that match...
            // log(`${key} in h2`, ['yellow', 'bold'])
            h2["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
          } else if (key in h2.style) {
            // log(`${key} in h2`, ['pink', 'bold'])
            // Put them here...
            h2.style["".concat(key)] = props["".concat(key)];
          }
        } // Check for 'content' attribute,


        if ('content' in props) {
          h2.textContent = props.content; // h2.style.margin = '5'
        } // The h2 component element's constructor definition...


        _HTMLH2Component = function HTMLH2Component() {
          var shadowRoot; // Construct an element, store as self...

          self = Reflect.construct(HTMLElement, [], _HTMLH2Component);

          if (shadow) {
            // Create shadow root...
            shadowRoot = self.attachShadow({
              mode: 'open'
            }); // Append to shadow root...

            shadowRoot.appendChild(h2); // Create a node from the template function, and append to shadowRoot....

            H2._appendStyleNode(shadowRoot, template);
          } // Return constructor...


          return self;
        }; // Add superclass prototype...


        _HTMLH2Component.prototype = Object.create(HTMLH2Element.prototype); // Add constructor...

        _HTMLH2Component.prototype.constructor = _HTMLH2Component; // Register event listener methods..

        _Events__WEBPACK_IMPORTED_MODULE_2__["Events"].registerCallbacks(_HTMLH2Component, eListeners); // console.dir(HTMLComponent)
        // Add connectedCallback method appending children if shadow is false...


        if (!shadow) {
          _HTMLH2Component.prototype.connectedCallback = function () {
            self.appendChild(h2);
          };
        } // Return component to the caller...


        return _HTMLH2Component;
      }
    }]);

    return H2;
  }();

  _defineProperty(H2, "_tempLiteral", ":host {\n\n                        }");
  /***/

},
/* 47 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "H3", function () {
    return H3;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
  /* harmony import */


  var _CSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** H3.js
  **
  ** H3.js is an extensible HTML5 Web Component wrapper, built around the H3
  ** element. It's aim is in providing an h3 element that is able to be
  ** extended via the v1 web components api...
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/
  // Get utilities...
  // Get data...
  // Get Events...
  // Get CSS...
  // Get Node class...
  // Globalize common utility functions...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var el = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["el"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];

  var H3 =
  /*#__PURE__*/
  function () {
    function H3() {
      _classCallCheck(this, H3);
    }

    _createClass(H3, null, [{
      key: "_appendStyleNode",
      // A CSS template literal, holding default styles for an h3...
      // Static method for appending child nodes to parent elements...
      value: function _appendStyleNode(root, child) {
        return root.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_4__["Node"].createNode(child()));
      } // Static method for defining a Venus h3 element...

    }, {
      key: "createComponent",
      value: function createComponent() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // log('props', ['orange', 'bold'])
        // dir(props)
        // Declarations..

        var _HTMLH3Component,
            eListeners = [],
            customProps = [],
            shadowBool,
            shadow,
            h3,
            self,
            obj; // Return boolean value for shadow...


        shadowBool = function shadowBool(arr) {
          return arr.reduce(function (shadow, keyVal, index) {
            return keyVal.indexOf('shadow') == -1 ? shadow : index;
          }, false);
        }; // Get attribute names and Listeners...


        if (props) {
          obj = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["processData"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props)); // Store attribute and Listener pairs...

          customProps = obj.props;
          eListeners = obj.eventListeners; // Determine if shadow option is set or not...

          shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : true;
        } // Create an HTMLH3Element...


        h3 = document.createElement('h3'); // Some default settings for h3 elements...
        // Set venus identifier flag..

        h3.venus = true; // Pass props from venus component declaration on to the inner h3 el...

        var _arr = Object.keys(props);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i]; // Check all keys in h3 el object...

          if (key in h3) {
            // Pass on the ones that match...
            // log(`${key} in h3`, ['yellow', 'bold'])
            h3["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
          } else if (key in h3.style) {
            // log(`${key} in h3`, ['pink', 'bold'])
            // Put them here...
            h3.style["".concat(key)] = props["".concat(key)];
          }
        } // Check for 'content' attribute,


        if ('content' in props) {
          h3.textContent = props.content; // h3.style.margin = '5'
        } // The h3 component element's constructor definition...


        _HTMLH3Component = function HTMLH3Component() {
          var shadowRoot; // Construct an element, store as self...

          self = Reflect.construct(HTMLElement, [], _HTMLH3Component);

          if (shadow) {
            // Create shadow root...
            shadowRoot = self.attachShadow({
              mode: 'open'
            }); // Append to shadow root...

            shadowRoot.appendChild(h3); // Create a node from the template function, and append to shadowRoot....

            H3._appendStyleNode(shadowRoot, template);
          } // Return constructor...


          return self;
        }; // Add superclass prototype...


        _HTMLH3Component.prototype = Object.create(HTMLH3Element.prototype); // Add constructor...

        _HTMLH3Component.prototype.constructor = _HTMLH3Component; // Register event listener methods..

        _Events__WEBPACK_IMPORTED_MODULE_2__["Events"].registerCallbacks(_HTMLH3Component, eListeners); // console.dir(HTMLComponent)
        // Add connectedCallback method appending children if shadow is false...


        if (!shadow) {
          _HTMLH3Component.prototype.connectedCallback = function () {
            self.appendChild(h3);
          };
        } // Return component to the caller...


        return _HTMLH3Component;
      }
    }]);

    return H3;
  }();

  _defineProperty(H3, "_tempLiteral", ":host {\n\n                        }");
  /***/

},
/* 48 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "H4", function () {
    return H4;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
  /* harmony import */


  var _CSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** H4.js
  **
  ** H4.js is an extensible HTML5 Web Component wrapper, built around the H4
  ** element. It's aim is in providing an h4 element that is able to be
  ** extended via the v1 web components api...
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/
  // Get utilities...
  // Get data...
  // Get Events...
  // Get CSS...
  // Get Node class...
  // Globalize common utility functions...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var el = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["el"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];

  var H4 =
  /*#__PURE__*/
  function () {
    function H4() {
      _classCallCheck(this, H4);
    }

    _createClass(H4, null, [{
      key: "_appendStyleNode",
      // A CSS template literal, holding default styles for an h4...
      // Static method for appending child nodes to parent elements...
      value: function _appendStyleNode(root, child) {
        return root.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_4__["Node"].createNode(child()));
      } // Static method for defining a Venus h4 element...

    }, {
      key: "createComponent",
      value: function createComponent() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // log('props', ['orange', 'bold'])
        // dir(props)
        // Declarations..

        var _HTMLH4Component,
            eListeners = [],
            customProps = [],
            shadowBool,
            shadow,
            h4,
            self,
            obj; // Return boolean value for shadow...


        shadowBool = function shadowBool(arr) {
          return arr.reduce(function (shadow, keyVal, index) {
            return keyVal.indexOf('shadow') == -1 ? shadow : index;
          }, false);
        }; // Get attribute names and Listeners...


        if (props) {
          obj = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["processData"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props)); // Store attribute and Listener pairs...

          customProps = obj.props;
          eListeners = obj.eventListeners; // Determine if shadow option is set or not...

          shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : true;
        } // Create an HTMLH4Element...


        h4 = document.createElement('h4'); // Some default settings for h4 elements...
        // Set venus identifier flag..

        h4.venus = true; // Pass props from venus component declaration on to the inner h4 el...

        var _arr = Object.keys(props);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i]; // Check all keys in h4 el object...

          if (key in h4) {
            // Pass on the ones that match...
            // log(`${key} in h4`, ['yellow', 'bold'])
            h4["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
          } else if (key in h4.style) {
            // log(`${key} in h4`, ['pink', 'bold'])
            // Put them here...
            h4.style["".concat(key)] = props["".concat(key)];
          }
        } // Check for 'content' attribute,


        if ('content' in props) {
          h4.textContent = props.content; // h4.style.margin = '5'
        } // The h4 component element's constructor definition...


        _HTMLH4Component = function HTMLH4Component() {
          var shadowRoot; // Construct an element, store as self...

          self = Reflect.construct(HTMLElement, [], _HTMLH4Component);

          if (shadow) {
            // Create shadow root...
            shadowRoot = self.attachShadow({
              mode: 'open'
            }); // Append to shadow root...

            shadowRoot.appendChild(h4); // Create a node from the template function, and append to shadowRoot....

            H4._appendStyleNode(shadowRoot, template);
          } // Return constructor...


          return self;
        }; // Add superclass prototype...


        _HTMLH4Component.prototype = Object.create(HTMLH4Element.prototype); // Add constructor...

        _HTMLH4Component.prototype.constructor = _HTMLH4Component; // Register event listener methods..

        _Events__WEBPACK_IMPORTED_MODULE_2__["Events"].registerCallbacks(_HTMLH4Component, eListeners); // console.dir(HTMLComponent)
        // Add connectedCallback method appending children if shadow is false...


        if (!shadow) {
          _HTMLH4Component.prototype.connectedCallback = function () {
            self.appendChild(h4);
          };
        } // Return component to the caller...


        return _HTMLH4Component;
      }
    }]);

    return H4;
  }();

  _defineProperty(H4, "_tempLiteral", ":host {\n\n                        }");
  /***/

},
/* 49 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "H5", function () {
    return H5;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
  /* harmony import */


  var _CSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** H5.js
  **
  ** H5.js is an extensible HTML5 Web Component wrapper, built around the H5
  ** element. It's aim is in providing an h5 element that is able to be
  ** extended via the v1 web components api...
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/
  // Get utilities...
  // Get data...
  // Get Events...
  // Get CSS...
  // Get Node class...
  // Globalize common utility functions...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var el = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["el"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];

  var H5 =
  /*#__PURE__*/
  function () {
    function H5() {
      _classCallCheck(this, H5);
    }

    _createClass(H5, null, [{
      key: "_appendStyleNode",
      // A CSS template literal, holding default styles for an h5...
      // Static method for appending child nodes to parent elements...
      value: function _appendStyleNode(root, child) {
        return root.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_4__["Node"].createNode(child()));
      } // Static method for defining a Venus h5 element...

    }, {
      key: "createComponent",
      value: function createComponent() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // log('props', ['orange', 'bold'])
        // dir(props)
        // Declarations..

        var _HTMLH5Component,
            eListeners = [],
            customProps = [],
            shadowBool,
            shadow,
            h5,
            self,
            obj; // Return boolean value for shadow...


        shadowBool = function shadowBool(arr) {
          return arr.reduce(function (shadow, keyVal, index) {
            return keyVal.indexOf('shadow') == -1 ? shadow : index;
          }, false);
        }; // Get attribute names and Listeners...


        if (props) {
          obj = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["processData"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props)); // Store attribute and Listener pairs...

          customProps = obj.props;
          eListeners = obj.eventListeners; // Determine if shadow option is set or not...

          shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : true;
        } // Create an HTMLH5Element...


        h5 = document.createElement('h5'); // Some default settings for h5 elements...
        // Set venus identifier flag..

        h5.venus = true; // Pass props from venus component declaration on to the inner h5 el...

        var _arr = Object.keys(props);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i]; // Check all keys in h5 el object...

          if (key in h5) {
            // Pass on the ones that match...
            // log(`${key} in h5`, ['yellow', 'bold'])
            h5["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
          } else if (key in h5.style) {
            // log(`${key} in h5`, ['pink', 'bold'])
            // Put them here...
            h5.style["".concat(key)] = props["".concat(key)];
          }
        } // Check for 'content' attribute,


        if ('content' in props) {
          h5.textContent = props.content; // h5.style.margin = '5'
        } // The h5 component element's constructor definition...


        _HTMLH5Component = function HTMLH5Component() {
          var shadowRoot; // Construct an element, store as self...

          self = Reflect.construct(HTMLElement, [], _HTMLH5Component);

          if (shadow) {
            // Create shadow root...
            shadowRoot = self.attachShadow({
              mode: 'open'
            }); // Append to shadow root...

            shadowRoot.appendChild(h5); // Create a node from the template function, and append to shadowRoot....

            H5._appendStyleNode(shadowRoot, template);
          } // Return constructor...


          return self;
        }; // Add superclass prototype...


        _HTMLH5Component.prototype = Object.create(HTMLH5Element.prototype); // Add constructor...

        _HTMLH5Component.prototype.constructor = _HTMLH5Component; // Register event listener methods..

        _Events__WEBPACK_IMPORTED_MODULE_2__["Events"].registerCallbacks(_HTMLH5Component, eListeners); // console.dir(HTMLComponent)
        // Add connectedCallback method appending children if shadow is false...


        if (!shadow) {
          _HTMLH5Component.prototype.connectedCallback = function () {
            self.appendChild(h5);
          };
        } // Return component to the caller...


        return _HTMLH5Component;
      }
    }]);

    return H5;
  }();

  _defineProperty(H5, "_tempLiteral", ":host {\n\n                        }");
  /***/

},
/* 50 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "H6", function () {
    return H6;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
  /* harmony import */


  var _CSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** H6.js
  **
  ** H6.js is an extensible HTML5 Web Component wrapper, built around the H6
  ** element. It's aim is in providing an h6 element that is able to be
  ** extended via the v1 web components api...
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/
  // Get utilities...
  // Get data...
  // Get Events...
  // Get CSS...
  // Get Node class...
  // Globalize common utility functions...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var el = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["el"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];

  var H6 =
  /*#__PURE__*/
  function () {
    function H6() {
      _classCallCheck(this, H6);
    }

    _createClass(H6, null, [{
      key: "_appendStyleNode",
      // A CSS template literal, holding default styles for an h6...
      // Static method for appending child nodes to parent elements...
      value: function _appendStyleNode(root, child) {
        return root.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_4__["Node"].createNode(child()));
      } // Static method for defining a Venus h6 element...

    }, {
      key: "createComponent",
      value: function createComponent() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // log('props', ['orange', 'bold'])
        // dir(props)
        // Declarations..

        var _HTMLH6Component,
            eListeners = [],
            customProps = [],
            shadowBool,
            shadow,
            h6,
            self,
            obj; // Return boolean value for shadow...


        shadowBool = function shadowBool(arr) {
          return arr.reduce(function (shadow, keyVal, index) {
            return keyVal.indexOf('shadow') == -1 ? shadow : index;
          }, false);
        }; // Get attribute names and Listeners...


        if (props) {
          obj = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["processData"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props)); // Store attribute and Listener pairs...

          customProps = obj.props;
          eListeners = obj.eventListeners; // Determine if shadow option is set or not...

          shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : true;
        } // Create an HTMLH6Element...


        h6 = document.createElement('h6'); // Some default settings for h6 elements...
        // Set venus identifier flag..

        h6.venus = true; // Pass props from venus component declaration on to the inner h6 el...

        var _arr = Object.keys(props);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i]; // Check all keys in h6 el object...

          if (key in h6) {
            // Pass on the ones that match...
            // log(`${key} in h6`, ['yellow', 'bold'])
            h6["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
          } else if (key in h6.style) {
            // log(`${key} in h6`, ['pink', 'bold'])
            // Put them here...
            h6.style["".concat(key)] = props["".concat(key)];
          }
        } // Check for 'content' attribute,


        if ('content' in props) {
          h6.textContent = props.content; // h6.style.margin = '5'
        } // The h6 component element's constructor definition...


        _HTMLH6Component = function HTMLH6Component() {
          var shadowRoot; // Construct an element, store as self...

          self = Reflect.construct(HTMLElement, [], _HTMLH6Component);

          if (shadow) {
            // Create shadow root...
            shadowRoot = self.attachShadow({
              mode: 'open'
            }); // Append to shadow root...

            shadowRoot.appendChild(h6); // Create a node from the template function, and append to shadowRoot....

            H6._appendStyleNode(shadowRoot, template);
          } // Return constructor...


          return self;
        }; // Add superclass prototype...


        _HTMLH6Component.prototype = Object.create(HTMLElement.prototype); // Add constructor...

        _HTMLH6Component.prototype.constructor = _HTMLH6Component; // Register event listener methods..

        _Events__WEBPACK_IMPORTED_MODULE_2__["Events"].registerCallbacks(_HTMLH6Component, eListeners); // console.dir(HTMLComponent)
        // Add connectedCallback method appending children if shadow is false...


        if (!shadow) {
          _HTMLH6Component.prototype.connectedCallback = function () {
            self.appendChild(h6);
          };
        } // Return component to the caller...


        return _HTMLH6Component;
      }
    }]);

    return H6;
  }();

  _defineProperty(H6, "_tempLiteral", ":host {\n\n                        }");
  /***/

},
/* 51 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Header", function () {
    return Header;
  });
  /* harmony import */


  var _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
  /* harmony import */


  var _Utilities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
  /* harmony import */


  var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
  /* harmony import */


  var _CSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
  /* harmony import */


  var _Form_Node__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
  ** Header.js
  **
  ** Header.js is an extensible HTML5 Web Component wrapper, built around the Header
  ** element. It's aim is in providing an header element that is able to be
  ** extended via the v1 web components api...
  **
  ** Eric James Foster, Fostware LLC, MIT License.
  ***/
  // Get utilities...
  // Get data...
  // Get Events...
  // Get CSS...
  // Get Node class...
  // Globalize common utility functions...


  var dir = console.dir;
  var log = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["log"];
  var el = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["el"];
  var dom = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["dom"];

  var Header =
  /*#__PURE__*/
  function () {
    function Header() {
      _classCallCheck(this, Header);
    }

    _createClass(Header, null, [{
      key: "_appendStyleNode",
      // A CSS template literal, holding default styles for an header...
      // Static method for appending child nodes to parent elements...
      value: function _appendStyleNode(root, child) {
        return root.appendChild(_Form_Node__WEBPACK_IMPORTED_MODULE_4__["Node"].createNode(child()));
      } // Static method for defining a Venus header element...

    }, {
      key: "createComponent",
      value: function createComponent() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // log('props', ['orange', 'bold'])
        // dir(props)
        // Declarations..

        var _HTMLHeaderComponent,
            eListeners = [],
            customProps = [],
            shadowBool,
            shadow,
            header,
            self,
            obj; // Return boolean value for shadow...


        shadowBool = function shadowBool(arr) {
          return arr.reduce(function (shadow, keyVal, index) {
            return keyVal.indexOf('shadow') == -1 ? shadow : index;
          }, false);
        }; // Get attribute names and Listeners...


        if (props) {
          obj = _Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["processData"](_Utilities_helpers__WEBPACK_IMPORTED_MODULE_0__["propsArray"](props)); // Store attribute and Listener pairs...

          customProps = obj.props;
          eListeners = obj.eventListeners; // Determine if shadow option is set or not...

          shadow = shadowBool(customProps) !== false ? customProps[shadowBool(customProps)][1] : true;
        } // Create an HTMLHeaderElement...


        header = document.createElement('header'); // Some default settings for header elements...
        // Set venus identifier flag..

        header.venus = true; // Pass props from venus component declaration on to the inner header el...

        var _arr = Object.keys(props);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i]; // Check all keys in header el object...

          if (key in header) {
            // Pass on the ones that match...
            // log(`${key} in header`, ['yellow', 'bold'])
            header["".concat(key)] = props["".concat(key)]; // Or if they are style properties...,
          } else if (key in header.style) {
            // log(`${key} in header`, ['pink', 'bold'])
            // Put them here...
            header.style["".concat(key)] = props["".concat(key)];
          }
        } // // Check for '-----' attribute,
        //     if ('-----' in props) {
        //       header.textContent = props.-----
        //       // header.style.margin = '5'
        //     }
        // The header component element's constructor definition...


        _HTMLHeaderComponent = function HTMLHeaderComponent() {
          var shadowRoot; // Construct an element, store as self...

          self = Reflect.construct(HTMLElement, [], _HTMLHeaderComponent);

          if (shadow) {
            // Create shadow root...
            shadowRoot = self.attachShadow({
              mode: 'open'
            }); // Append to shadow root...

            shadowRoot.appendChild(header); // Create a node from the template function, and append to shadowRoot....

            Header._appendStyleNode(shadowRoot, template);
          } // Return constructor...


          return self;
        }; // Add superclass prototype...


        _HTMLHeaderComponent.prototype = Object.create(HTMLHeaderElement.prototype); // Add constructor...

        _HTMLHeaderComponent.prototype.constructor = _HTMLHeaderComponent; // Register event listener methods..

        _Events__WEBPACK_IMPORTED_MODULE_2__["Events"].registerCallbacks(_HTMLHeaderComponent, eListeners); // console.dir(HTMLComponent)
        // Add connectedCallback method appending children if shadow is false...


        if (!shadow) {
          _HTMLHeaderComponent.prototype.connectedCallback = function () {
            self.appendChild(header);
          };
        } // Return component to the caller...


        return _HTMLHeaderComponent;
      }
    }]);

    return Header;
  }();

  _defineProperty(Header, "_tempLiteral", ":host {\n\n                        }");
  /***/

},
/* 52 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "Errors", function () {
    return Errors;
  });
  /* harmony import */


  var _MountingError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
  /* harmony import */


  var _UnmountError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
  /* harmony import */


  var _UpdateError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }
  /*
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

  _defineProperty(Errors, "MountingFailure", _MountingError__WEBPACK_IMPORTED_MODULE_0__["MountingError"].Failure);

  _defineProperty(Errors, "UnknownMounting", _MountingError__WEBPACK_IMPORTED_MODULE_0__["MountingError"].Unknown);

  _defineProperty(Errors, "NoMountedUnmount", _UnmountError__WEBPACK_IMPORTED_MODULE_1__["UnmountError"].NoComponentMounted);

  _defineProperty(Errors, "UnknownUnmount", _UnmountError__WEBPACK_IMPORTED_MODULE_1__["UnmountError"].Unknown);

  _defineProperty(Errors, "UpdateFailure", _UpdateError__WEBPACK_IMPORTED_MODULE_2__["UpdateError"].Failure);

  _defineProperty(Errors, "UnknownUpdate", _UpdateError__WEBPACK_IMPORTED_MODULE_2__["UpdateError"].Unknown);
  /***/

},
/* 53 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "MountingError", function () {
    return MountingError;
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  /*
  MountingError.js
  
  Valence.js, a JavaScript library for building UI's with an API
  resembling that of React, but uses Vanilla JS Web components
  under the hood...This file contains the framework's custom
  MountingError...
  
  Eric James Foster, MIT License.
  */


  var MountingError =
  /*#__PURE__*/
  function () {
    function MountingError() {
      _classCallCheck(this, MountingError);
    }

    _createClass(MountingError, null, [{
      key: "Failure",
      // A custom error, thrown when a component fails to mount properly...
      get: function get() {
        // Return new error...
        return new Error('MountingError: There is no component mounted.');
      } // A custom error, thrown when there is an unknown error during the mounting process...

    }, {
      key: "Unknown",
      get: function get() {
        // Return new error...
        return new Error('MountingError: There was an unknown error during the mounting process.');
      }
    }]);

    return MountingError;
  }();
  /***/

},
/* 54 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "UnmountError", function () {
    return UnmountError;
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  /*
  UnountingError.js
  
  Valence.js, a JavaScript library for building UI's with an API
  resembling that of React, but uses Vanilla JS Web components
  under the hood...This file contains the framework's custom
  MountingError...
  
  Eric James Foster, MIT License.
  */


  var UnmountError =
  /*#__PURE__*/
  function () {
    function UnmountError() {
      _classCallCheck(this, UnmountError);
    }

    _createClass(UnmountError, null, [{
      key: "NoComponentMounted",
      // A custom error, thrown when an unmounted component is attempted to unmount...
      get: function get() {
        // Return new error...
        return new Error('UnmountError: There is no component mounted.');
      } // A custom error, thrown when there is an unknown error during the umount process...

    }, {
      key: "Unknown",
      get: function get() {
        // Return new error...
        return new Error('UnmountError: There was an unknown error during the unmount process.');
      }
    }]);

    return UnmountError;
  }();
  /***/

},
/* 55 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  ;

  __webpack_require__.r(__webpack_exports__);
  /* harmony export (binding) */


  __webpack_require__.d(__webpack_exports__, "UpdateError", function () {
    return UpdateError;
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  /*
  UpdateError.js
  
  Valence.js, a JavaScript library for building UI's with an API
  resembling that of React, but uses Vanilla JS Web components
  under the hood...This file contains the framework's custom
  UpdateError...
  
  Eric James Foster, MIT License.
  */


  var UpdateError =
  /*#__PURE__*/
  function () {
    function UpdateError() {
      _classCallCheck(this, UpdateError);
    }

    _createClass(UpdateError, null, [{
      key: "Failure",
      // A custom error, thrown when a component fails to update properly...
      get: function get() {
        // Return new error...
        return new Error('UpdateError: The component update failed.');
      } // A custom error, thrown when there is an unknown error during the mounting process...

    }, {
      key: "Unknown",
      get: function get() {
        // Return new error...
        return new Error('UpdateError: There was an unknown error during the update process.');
      }
    }]);

    return UpdateError;
  }();
  /***/

}]);