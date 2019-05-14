/*
Is.js

A file containing a small type checking utility library...

Eric James Foster, MIT License.
*/

// Get data...
import { DATA } from './data'


class Is {
  // Determines whether or not a prop is an event listener...
  static eventListener(name) {
     return /on[A-Z]\w*/g.test(name)
            ||
    DATA.DOMElementEvents.indexOf(name.toLowerCase()) !== -1
  }
  // Determines whether or not an attribute name is custom or not...
  static newPropName() {
    return DATA.HTMLAttributes.indexOf(name.toLowerCase()) === -1
  }

  // NOT CURRENTLY IN USE...
  // A boolean function for determining if a func has called for the first time...
  static newFunction(funcs, func) {
    return funcs
      .indexOf(func) == -1
  }

// Simple convenience function for determining if a value is
// undefined or not...
    static undefined(val) {
      return typeof val === 'undefined'
    }

// Simple convenience function for determining if a value is
// an object or not...
    static object(val) {
      return typeof val === 'object'
    }

// Simple convenience function for determining if a value is
// a number or not...
    static number(val) {
      return typeof val === 'number'
    }

// Simple convenience function for determining if a value is
// a string or not...
    static string(val) {
      return typeof val === 'string'
    }

// Simple convenience function for determining if a value is
// a function or not...
    static function(val) {
      return typeof val === 'function'
    }

// A copy of the above function with a different name... I have my reasons....
    static func(val) {
      return typeof val === 'function'
    }

// Simple convenience function for determining if a value is
// a symbol or not...
  static symbol(val) {
    return typeof val === 'symbol'
  }

// Simple convenience function for determining if a value is
// a boolean or not...
  static boolean(val) {
    return typeof val === 'boolean'
  }

// A simple convenience function for determining if a value is
// a class or not...
  static class(val) {
    return /_classCallCheck/.test(String(val))
  }

// A simple convenience function for determining if a value is
// a component or not...
  static component(tagName) {
    return (!tagName.indexOf('-') === -1)&& true
  }

// A simple convenience function for determining if a value is
// a function or not...
  static array(val) {
    return Array.isArray(val)
  }

// A function for confirming same type...
  static kin(val1, val2) {
    return typeof val1 === typeof val2
  }

// A function for determining whether or not a propType is Required...
  static requiredProp(types) {
    return types.length === 1
  }

// A function for determining if a tagged template literal has interpolations...
  static interpolated(tagTempLit) {
    return tagTempLit.length > 1
  }

/* A function for determining whether or not a component is a
valence component ... */
  static valenceComponent(tag) {
    return window.valenceComponents.indexOf(tag) !== -1
  }

/* A function for determining whether or not a component is
a flare component... */
  static flareComponent(tag) {
    return window.flareComponents.indexOf(tag) !== -1
  }

/* A function for determining whether or not a component is
a flare component... */
  static flare(node) {
// Regular expression for determination...
    let flareFuncRE = /_templateObject/g,
    funcSourceCode

// Do your thing.....
    if (typeof node === 'undefined') {
      return false
// If we have a node.type....
    } else if (node !== undefined && node.type !== undefined) {
       funcSourceCode = node.type.toString()
// Test the regexp....
      if (flareFuncRE.test(funcSourceCode)) {
        return true
      } else {
        return false
      }
    } else {
// If we already have a node.tag, go ahead and return true....
      if (node.tag) {
        return true
      }
      return false
    }
  }
}


const isEventListener = Is.eventListener
const isNewPropName = Is.newPropName
const isUndefined = Is.undefined
const isObject = Is.object
const isNumber = Is.number
const isString = Is.string
const isFunction = Is.function
const isNewFunction = Is.newFunction
const isFunc = Is.func
const isSymbol = Is.symbol
const isBoolean = Is.boolean
const isClass = Is.class
const isComponent = Is.component
const isArray = Is.array
const isKin = Is.kin
const isRequiredProp = Is.requiredProp
const isInterpolated = Is.interpolated
const isValence = Is.valenceComponent
const isFlareComponent = Is.flareComponent
const isFlare = Is.flare

export {
  Is,
  isEventListener,
  isNewPropName,
  isNewFunction,
  isUndefined,
  isObject,
  isNumber,
  isString,
  isFunction,
  isFunc,
  isSymbol,
  isBoolean,
  isClass,
  isComponent,
  isArray,
  isKin,
  isRequiredProp,
  isInterpolated,
  isValence,
  isFlareComponent,
  isFlare
}
