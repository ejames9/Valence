/*
** Span.js
**
** Span.js is an extensible HTML5 Web Component wrapper, built around the Span
** element. It's aim is in providing an span element that is able to be
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


class Span {
// A CSS template literal, holding default styles for an span...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare span element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLSpanComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow = props.shadow,
    span,
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

// Create an HTMLSpanElement...
    span = document.createElement('span')
// Some default settings for span elements...
// Set flare identifier flag..
    span.flare = true

// Pass props from flare component declaration on to the inner span el...
    for (let key of Object.keys(props)) {
// Check all keys in span el object...
      if (key in span) {
// Pass on the ones that match...
        // log(`${key} in span`, ['yellow', 'bold'])
        span[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in span.style) {
        // log(`${key} in span`, ['pink', 'bold'])
// Put them here...
        span.style[`${key}`] = props[`${key}`]
      }
    }

// Check for 'content' attribute,
    if ('content' in props) {
      span.textContent = props.content
      // span.style.margin = '5'
    }


// The span component element's constructor definition...
    HTMLSpanComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLSpanComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(span)
// Create a node from the template function, and append to shadowRoot....
        Span._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLSpanComponent.prototype = Object.create(HTMLSpanElement.prototype)
// Add constructor...
    HTMLSpanComponent.prototype.constructor = HTMLSpanComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLSpanComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLSpanComponent.prototype.connectedCallback =()=> {
        self.appendChild(span)
      }
    }

// Return component to the caller...
    return HTMLSpanComponent
  }
}


export { Span }
