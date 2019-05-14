/*
Node.js

Form is the virtual dom layer of a Valence app that interfaces
with the actual DOM via the DOM API, making adjustments
to the UI in an inexpensive and effecient manner. This file houses
the Node Class which is a basic virtual dom node

Eric James Foster, MIT License.
*/

// Get utilities...
import {
  convertFuncNameToTagName,
  extractCustomPropNames,
  propNames,
  combineObjects
} from '../Utilities/helpers'
// Get needed validation functions...
import {
  isString,
  isClass,
  isFunction,
  isFlare
 } from '../Utilities/Is'
 // Get logger...
 import { _log as log, _dir } from '../Utilities/Loggers'
// Get Element class for createElement function...
import { Element } from '../Element'
// Get Component class for createComponent function...
import Component from '../Component'
// Get Props...
import { Props } from '../Props/Props'
// Get PropTypes...
import { PropTypes } from '../Props/PropTypes'
// Get Events...
import { Events } from '../Events'
// Bring in Flare...
import { Flare } from '../Flare/Flare'

// Globalize common utilities...
const dir = _dir


// Form Virtual DOM Node...
class Node {
// Node type instance constructor...
  constructor({type, props, children}) {
    this.type = type
// If no props, make sure an empty object is created...
    let _props = props || {}
    this.props = new Props(_props)
    this.children = children
  }

// Config options...
  static _assumptions = {
    kebabCase: true
  }
// An internal method that returns the combination of the CSS class's assumptions
// this class's assumptions... It's ultimately the end of a line of merged config objects...
  static assume(userAssumptions) {
    this._assumptions = combineObjects(this._assumptions, userAssumptions)
    return this._assumptions
  }

// An internal class method for processing component props...
  static processNodeProps(props, ctor, type={}) {
// Get customPropNames for custom prop registration, and propNames for validation...
    let customPropNames = extractCustomPropNames(
      propNames(props)
    )

// If user registered proptypes on the component, proceed with prop validation...
    if (type.propTypes) {
      let propNames = propNames(type.propTypes)
// Validate that all supplied prop value types match that of registered propTypes...
      props = Props.validate(props, propNames, type)
    }

// Register custom element attributes...
    Props.registerCustom(ctor, customPropNames)

// Register all element attributes as observedAttributes...
    Props.registerObserved(ctor, props)

// Need to return both props and the constructor to the Caller's context
    return {
      props: props,
      ctor: ctor
    }
  }


// Either create the given element, or if it's a component, define the element then
// create it...
  static createNode(node) {
//
    if (isString(node)) {
// Create and return the given text node...
      return document.createTextNode(node)
    } else {
// Declare tag var..
      let tagName,
      shadow,
      flareComponent,
      elementConstructor,
      props

// Determine if elem is an element or a Component...
// If it's a function....
      if (isFunction(node.type)) {
        props              = node.props,
        elementConstructor = node.type

// Convert the given function name to it's corresponding component tagname...
        tagName = convertFuncNameToTagName(
          node.type.name,
          (props.kebabCase !== undefined || props.kebab !== undefined)?
            props.kebabCase
          :
            this._assumptions.kebabCase
        )

// Determine if it's a class...
        if (!isClass(node.type)) {
// Add `isStatelessComponent` property so that the shim flags can be
// reset after element creation...
          node.props.isStatelessComponent = true
          if (isFlare(node)) {

// Unpack flare component props... combine props...
// Unpack component....
            flareComponent = node.type(props)

// Set type to tag...
            node.type = tagName

// Push to global collection...
            valenceGlobals.flareComponents[node.type] = props
/// Combine the two props objects, merging them into one......
            props = combineObjects(props, flareComponent.props)

// Use the above to define Flare Component.. and also 'type' for the node...
            Flare.createComponent(
              tagName,
              flareComponent.el,
              flareComponent.taggedTempLit,
              props
            )
            node.props.isStatelessComponent = true
          } else {
/// Set up component creation, first arg..
            const component = [tagName, node.type]

// Extract shadow setting from Props if available...
            if (node.props.shadow) {
              shadow = node.props.shadow
            }
// Return completed component...
            elementConstructor = Component.createComponent(
              component,
              node.props,
              node.children,
              shadow
            )
          }

        } else {
// Add `isStatefulComponent` privateProp for update purposes...
          node.props.isStatefulComponent = true
        }

// Non-Flare component custom element definition....
        if (!isFlare(flareComponent)) {
/* If we're dealing with a class, we need to be sure we're not using the shim when
defining the component...*/
          if (isClass(node.type)) {
            window.useNativeShim = false
            window.HTMLElement   = window._HTMLElement
          }

// Process props......
          let processed = Node.processNodeProps(node.props, elementConstructor, node.type)

// Using a try-catch here to be sure we are not trying to define WebComponents twice...
          try {
// Use Custom elements API to define a custom tag/component...
            window.customElements.define(
              tagName,
// Doing double duty here.. The ctor must be returned from this function anyhow,
// so I'm dropping it in here to avoid redundancy...
              processed.ctor
            )
          } catch (e) {
            log(`Component ${tagName} already defined`, ['blue', 'white'])
          }
// If the component is a class, we need to reset the shim flags.....
          if (isClass(node.type)) {
            window.useNativeShim = true
            window.HTMLElement   = window.HTMLElement_
          }

//FIXME: May not be using this at all....
        if (processed.props.rootNode) {
// Create and dispatch event confirming definition of the root node.
          Events.emit('rootNodeDefined')
// Set root node definition flag...
          window.rootNodeDefined = true
        }
// Set node.type to tagName of the component, and props to the amended props
// object...
        node.props = processed.props
        node.type  = tagName
        }
      }
// Use DOM API (via Valence Element class) to create element and return it...
      return Element.createElement(node)

    }
  }
}

export { Node }
