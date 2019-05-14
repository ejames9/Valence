/*
Props.js

Valence, a JavaScript library for building UI's, with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file handles  element
property (props) creation, assignment etc...

Eric James Foster, MIT License.
*/

// Get utilities...
import * as _ from '../Utilities/helpers'
import { Is as is } from '../Utilities/Is'
//Get PropTypes...
import { PropTypes } from './PropTypes'

const dir = console.dir
const log = _.log


class Props {
  constructor(props) {
    let propPairs = Object.entries(props)
    let ppLength = propPairs.length
    let i = 0
    while (ppLength > 0) {
      this[propPairs[i][0]] = propPairs[i][1]
      ppLength--
      i++
    }
  }

// An internal method for applying the default props when none are supplied...
  static _applyDefault(defaultProps, propName) {
    return defaultProps[propName]
  }

// An object to hold prop types for type checking purposes...
  static validate(props, propNames, component) {
// Cycle through props, comparing it's value type with it's expected propType...
    const validatedProps = propNames.reduce((propsObj, propName)=> {
// Store types, default props, prop value and value type...
      let types = null,
       defProps = null,
      propValue = props[propName],
      valueType = typeof propValue

// Don't want to attempt to access propTypes or defaultProps if they don't exist.
// but if they do, store them...
      if (component.propTypes[propName]) {
        types = component.propTypes[propName].types
      }
      if (component.defaultProps) {
        defProps = component.defaultProps
      }

// If prop is undefined...
      if (propValue === undefined) {
// but propType specifies `required`...
        if (is.requiredProp(types)) {
// If we have defaultProp...
          if (defProps) {
// Apply it to props object...
            propValue = this._applyDefault(defProps, propName)
            return {
           ...propsObj,
              [propName]: propValue
            }
// Else, output warning to the console, and pass undefined prop to props object...
          } else {
            console.warn(
              `Warning: Failed PropType: Required prop \`${propName}\` is undefined.`
            )
            return {
           ...propsObj,
              [propName]: propValue
            }
          }
        } /*else (who cares) {}*/
// Or, if value type is not among propTypes' specified types...
      } else if (types.indexOf(valueType) === -1) {
// output warning to console, and add our value to the props object....
        console.warn(
          `Warning: Failed PropType: Prop \`${propName}\` was given a value of type \`${valueType}\`, expected \`${types[0]}\`.`
        )
        return {
       ...propsObj,
          [propName]: propValue
        }
// Else, everything is just as it should be. Add value to props object...
      } else {
        return {
       ...propsObj,
          [propName]: propValue
        }
      }
    }, {})
// Return the props object...
    return {
   ...props,
   ...validatedProps
    }
  }

// A simple boolean for determining if prop is custom or not...
  static _isPrivateProp(name) {
    return is.eventListener(name) ||
      name === 'forceUpdate' ||
      name === 'isStatefulComponent' ||
      name === 'isStatelessComponent' ||
      name === 'ref' ||
      name === 'noChild' ||
      name === 'rootNode' ||
      name === 'Flare' ||
      name === 'flare' ||
      name === 'label' ||
      name === 'content' ||
      name === 'cleanHTML' ||
      name === 'kebabCase'
  }

// Method for updating props...
  static update(elem, newProps, oldProps={}) {
    let updateProp

// Check if the given prop on the given element needs updated or not,
// and update, add or remove it...
    updateProp =(elem, name, newVal, oldVal)=> {
      if (!newVal) {
        this.remove(elem, name, oldVal)
      } else if (!oldVal || newVal !== oldVal) {
        this.set(elem, name, newVal)
      }
    }

// Combine old and new props into 1 new object...
    const props = _.combineObjects(newProps, oldProps)
// Get an array of unique props keys and use it to iterate through
// both objects comparing for differences and update requirements...
    Object.keys(props).forEach(name=> {
      updateProp(elem, name, newProps[name], oldProps[name])
    })
  }

// Set given attributes on the created element....
  static set(elem, props) {
    let setProp,
    setBooleanProp

// A function for setting boolean properties on elements...
    setBooleanProp =(elem, name, value)=> {
      if (value) {
        elem.setAttribute(name, value)
        elem[name] = true
      } else {
        elem[name] = false
      }
    }

// A function for setting props...
    setProp =(elem, name, value)=> {
      if (this._isPrivateProp(name)) {
        return
      } else if (name === 'className') {
        elem.setAttribute('class', value)
      } else if (is.boolean(value)) {
        setBooleanProp(elem, name, value)
      } else {
        elem.setAttribute(name, value)
      }
    }

// Remove event listeners from attributes...
    let propsArray = _.propsArray(props)

// Determine if elem is a string or a Component...
    if (propsArray.length > 0) {
// dir(filteredProps)
// Add attributes to element...
      for (let prop of propsArray) {
        setProp(elem, prop[0], prop[1])
      }
    }

// Return element...
    return elem
  }

// Method for setting up a list of observed attributes. These attributes
// will trigger the attributesChangedCallback method on the custom
// element when changed in any way...
  static registerObserved(ctor, propNames) {
    Object.defineProperties(ctor.prototype, {
      observedAttributes: {
        get() {
          return propNames
        },
        enumerable: true,
        configurable: true
      }
    })
  }

// Method for setting custom attributes of custom elements...
  static registerCustom(ctor, propNames) {
    propNames
      .forEach(prop=> {
        if (!Boolean(ctor.prototype.observedAttributes) ||
          !prop in ctor.prototype.observedAttributes) {

          Object.defineProperties(ctor.prototype, {
            [prop]: {
              get() {
                return this.getAttribute(prop)
              },
              set(val) {
                if (val) {
                  this.setAttribute(prop, val)
                } else {
                  this.removeAttribute(prop)
                }
              },
              enumerable: true,
              configurable: true
            }
          })
        }
      }, ctor)
    return ctor
  }


// A method for removing Properties...
  static remove(elem, name, value) {
// A function for removing boolean properties...
    const removeBooleanProp =(elem, name)=> {
      elem.removeAttribute(name)
      elem[name] = false
    }

// Remove Properties...
    if (this._isPrivateProp(name)) {
      return
    } else if (name === 'classname') {
      elem.removeAttribute('class')
    } else if (is.boolean(value)) {
      removeBooleanProp(elem, name)
    } else {
      elem.removeAttribute(name)
    }
  }
}


export { Props }
