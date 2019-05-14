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


class H6 {
// A CSS template literal, holding default styles for an h6...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare h6 element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLH6Component,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow = props.shadow,
    h6,
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

// Create an HTMLH6Element...
    h6 = document.createElement('h6')
// Some default settings for h6 elements...
// Set flare identifier flag..
    h6.flare = true

// Pass props from flare component declaration on to the inner h6 el...
    for (let key of Object.keys(props)) {
// Check all keys in h6 el object...
      if (key in h6) {
// Pass on the ones that match...
        // log(`${key} in h6`, ['yellow', 'bold'])
        h6[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in h6.style) {
        // log(`${key} in h6`, ['pink', 'bold'])
// Put them here...
        h6.style[`${key}`] = props[`${key}`]
      }
    }

// Check for 'content' attribute,
    if ('content' in props) {
      h6.textContent = props.content
      // h6.style.margin = '5'
    }


// The h6 component element's constructor definition...
    HTMLH6Component =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLH6Component)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(h6)
// Create a node from the template function, and append to shadowRoot....
        H6._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLH6Component.prototype = Object.create(HTMLElement.prototype)
// Add constructor...
    HTMLH6Component.prototype.constructor = HTMLH6Component

// Register event listener methods..
    Events.registerCallbacks(HTMLH6Component, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLH6Component.prototype.connectedCallback =()=> {
        self.appendChild(h6)
      }
    }

// Return component to the caller...
    return HTMLH6Component
  }
}


export { H6 }
