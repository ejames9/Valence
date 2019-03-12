/*
Node.js

Form is the virtual dom layer of a Valence app that interfaces
with the actual DOM via the DOM API, making adjustments
to the UI in an inexpensive and effecient manner. This file houses
the Node Class which is a basic virtual dom node

Eric James Foster, MIT License.
*/

// Get utilities...
import * as _ from '../Utilities/helpers'
import { Is as is } from '../Utilities/Is'
// Get Element class for createElement function...
import { Element } from '../Element'
// Get Component class for createComponent function...
import { Component } from '../Component'
// Get Props...
import { Props } from '../Props/Props'
// Get PropTypes...
import { PropTypes } from '../Props/PropTypes'
// Get Events...
import { Events } from '../Events'


// Globalize common utilities...
const dir = console.dir
const log = _.log


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

// An internal class method for processing component props...
  static processNodeProps(props, ctor, type={}) {
// Get customPropNames for custom prop registration, and propNames for validation...
    let customPropNames = _.extractCustomPropNames(
      _.propNames(props)
    )

// If user registered proptypes on the component, proceed with prop validation...
    if (type.propTypes) {
      let propNames = _.propNames(type.propTypes)
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
    if (is.string(node)) {
// Create and return the given text node...
      return document.createTextNode(node)
    } else {
// Declare tag var..
      let tagName, shadow

// Determine if elem is an element or a Component...
// If it's a function....
      if (is.function(node.type)) {
        props              = node.props,
        elementConstructor = node.type

// Extract function name...
          let funcName = node.type.name
// Convert the given function name to it's corresponding component tagname...
          tagName = _.convertFuncNameToTagName(funcName)

// Determine if it's a class...
        if (!is.class(node.type)) {

// Set up component creation, first arg..
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

// Add `isStatelessComponent` property so that the shim flags can be
// reset after element creation...
          node.props.isStatelessComponent = true
        } else {
// Add `isStatefulComponent` privateProp for update purposes...
          node.props.isStatefulComponent = true
        }

// Process props...
        let processed = Node.processNodeProps(node.props, elementConstructor, node.type)

// Use Custom elements API to define a custom tag/component...
        window.customElements.define(
          tagName,
// Doing double duty here.. The ctor must be returned from this function anyhow,
// so I'm dropping it in here to avoid redundancy...
          processed.ctor
        )

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
// Use DOM API (via Valence Element class) to create element and return it...
      return Element.createElement(node)

    }
  }
}

export { Node }
