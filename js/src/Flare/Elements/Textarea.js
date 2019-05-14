/*
** Textarea.js
**
** Textarea.js is an extensible HTML5 Web Component wrapper, built around the Textarea
** element. It's aim is in providing an textarea element that is able to be
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


class Textarea {
// A CSS template literal, holding default styles for an textarea...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare textarea element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLTextareaComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow = props.shadow,
    textarea,
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

// Create an HTMLTextareaElement...
    textarea = document.createElement('textarea')
// Some default settings for textarea elements...
// Set flare identifier flag..
    textarea.flare = true

// Pass props from flare component declaration on to the inner textarea el...
    for (let key of Object.keys(props)) {
// Check all keys in textarea el object...
      if (key in textarea) {
// Pass on the ones that match...
        // log(`${key} in textarea`, ['yellow', 'bold'])
        textarea[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in textarea.style) {
        // log(`${key} in textarea`, ['pink', 'bold'])
// Put them here...
        textarea.style[`${key}`] = props[`${key}`]
      }
    }

// Check for 'content' attribute,
    if ('content' in props) {
      textarea.textContent = props.content
      // textarea.style.margin = '5'
    }


// The textarea component element's constructor definition...
    HTMLTextareaComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLTextareaComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(textarea)
// Create a node from the template function, and append to shadowRoot....
        Textarea._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLTextareaComponent.prototype = Object.create(HTMLTextareaElement.prototype)
// Add constructor...
    HTMLTextareaComponent.prototype.constructor = HTMLTextareaComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLTextareaComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLTextareaComponent.prototype.connectedCallback =()=> {
        self.appendChild(textarea)
      }
    }

// Return component to the caller...
    return HTMLTextareaComponent
  }
}


export { Textarea }
