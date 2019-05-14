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
import * as _ from '../../Utilities/helpers'
// Get data...
import { DATA } from '../../Utilities/data'
// Get Events...
import { Events } from '../../Events'
// Get CSS...
import { CSS } from '../CSS'
// Get Node class...
import { Node } from '../../Form/Node'


// Globalize common utility functions...
const dir = console.dir
const log = _.log
const el  = _.el
const dom = _.dom


class H5 {
// A CSS template literal, holding default styles for an h5...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare h5 element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLH5Component,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow = props.shadow,
    h5,
    self,
    obj

/* Doing some finaglery with the native-shim and HTMLElement object.  This will
be necessary until web components are fully supported in all browsers... */
    window.useNativeShim = false
    window.HTMLElement   = window._HTMLElement

// Get attribute names and Listeners...
    if (props) {
      obj = _.processData(
        _.propsArray(props)
      )
// Store attribute and Listener pairs...
      customProps = obj.props
      eListeners  = obj.eventListeners
    }

// Create an HTMLH5Element...
    h5 = document.createElement('h5')
// Some default settings for h5 elements...
// Set flare identifier flag..
    h5.flare = true

// Pass props from flare component declaration on to the inner h5 el...
    for (let key of Object.keys(props)) {
// Check all keys in h5 el object...
      if (key in h5) {
// Pass on the ones that match...
        // log(`${key} in h5`, ['yellow', 'bold'])
        h5[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in h5.style) {
        // log(`${key} in h5`, ['pink', 'bold'])
// Put them here...
        h5.style[`${key}`] = props[`${key}`]
      }
    }

// Check for 'content' attribute,
    if ('content' in props) {
      h5.textContent = props.content
      // h5.style.margin = '5'
    }


// The h5 component element's constructor definition...
    HTMLH5Component =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLH5Component)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(h5)
// Create a node from the template function, and append to shadowRoot....
        H5._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLH5Component.prototype = Object.create(HTMLH5Element.prototype)
// Add constructor...
    HTMLH5Component.prototype.constructor = HTMLH5Component

// Register event listener methods..
    Events.registerCallbacks(HTMLH5Component, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLH5Component.prototype.connectedCallback =()=> {
        self.appendChild(h5)
      }
    }

// Return component to the caller...
    return HTMLH5Component
  }
}


export { H5 }
