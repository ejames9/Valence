/*
Element.js

Valence.js, a JavaScript library for building UI's, with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file handles the framework's element
creation and configuration...

Eric James Foster, MIT License.
*/


// Get data...
import { DATA } from './Utilities/data'
// Get utilities...
import * as _ from './Utilities/helpers'
import { Is as is } from './Utilities/Is'
// Grab events...
import { Events } from './Events'
// Get Props class...
import { Props } from './Props/Props'
// Get Node Class...
import { Node } from './Form/Node'


// Globalize common _...
const dir = console.dir
const log = _.log



export class Element {
// Create a Valence element...
  static createElement({type, props={}, children}) {
// Pre-declare inner functions...
    let
    makeDOMElement,
    setProps,
    addEventListeners,
    appendChildren,
    elem

// Create a new DOM element...
    makeDOMElement =(tagName)=> {
      if (window.flareComponents.indexOf(tagName) != -1) {
// Flip the required switches...
        window.useNativeShim = false
        window.HTMLElement   = window._HTMLElement
      }
        log('TAGNAME', ['lightblue', 'bold'])
         log(tagName)
         dir(props)
         dir(children)
// Create a new element given the tag name, and
// store for sending through the pipe......
      elem = document.createElement(tagName)

// If we just created a Flare Component element...
      if (window.flareComponents.indexOf(tagName) != -1) {
// Emit an event that cues Flare to set props on the newly created element...
        Events.emit(tagName, {element: elem})
      }
      log('new Element', ['orange', 'bold'])
       log(tagName)
/* If `Reflect` programmatic library constructed component, reset native-shim flag,
and also reset window.HTMLElement to the nativeShim.js patched version...
*/    if (props.isStatelessComponent) {
        log('stateless')
        window.useNativeShim = true
        window.HTMLElement   = window.HTMLElement_
// Push tagname to global collection..
        window.statelessComponents.push(tagName)
      }
// Send the created element through the pipe...
      return elem
    }

// Set given attributes on the created element....
    setProps =(elem)=> {
      if (props) {
/* If setting props on user defined (stateful) component, fire willRecieveProps
event..*/
        if (props.isStatefulComponent) {
          Events.fire('componentWillReceiveProps',
            elem,
            props
          )
        }
/* The ref function is defined in jsx markup as a prop in curlies, and When
 * we get to this point in the definition of the ref'd element, we access the
 * function via props and execute it, injecting the brand new element instance
 * that we just created in the function above. This will complete the purpose
 * of the ref function, which is to pass the reference into a variable, but in
 * the context in which it was defined, the component definition...
 */     if (props.ref) {
          props.ref(elem)
        }
// Set props and return the element to the pipe...
        return Props.set(elem, props)
      }
    }

// Add event listener(s) to element...
    addEventListeners =(elem)=> {
      _.propNames(props).forEach(name=> {
        if (is.eventListener(name)) {
          elem.addEventListener(
            _.sansON(name),
              props[name]
          )
        }
      }, elem)
      return elem
    }

// Add elements children to the DOM.....
    appendChildren =(elem)=> {
// Determine if elem is a string or a Component...
      if (children) {
// Append children...
        children
          .map(Node.createNode, Node)
          .forEach(elem.appendChild, elem)
      }
// Return the element...
      return elem;
    }

// Connected to each other with the higher-order function piper, the following will
// return the requested element...
    return _.piper(
     makeDOMElement,
     setProps,
     addEventListeners,
     appendChildren
   )(type)
  }
}
