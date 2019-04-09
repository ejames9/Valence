/*
Is.js

A file containing a small type checking utility library...

Eric James Foster, MIT License.
*/

// Get data...
import { DATA } from './data'


export class Is {
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
}
