/*
** Button.js
**
** Button.js is an extensible HTML5 Web Component wrapper, built around the Button
** element. It's aim is in providing an button element that is able to be
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


class Button {
// A CSS template literal, holding default styles for a button...
  static _tempLiteral = `:host {
                          background-color: black;
                          border-radius: 5%;
                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare button element...
  static createComponent(props={}, template=false) {
    log('props', ['orange', 'bold'])
    dir(props)

// Declarations..
    let HTMLButtonComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow = props.shadow,
    button,
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

// Create an HTMLButtonElement...
    button = document.createElement('button')
// Some default settings for button elements...
// Set flare identifier flag..
    // button.flare = true
    // if (props.type == 'text') {
    //
    // }

// Pass props from flare component declaration on to the inner button el...
    for (let key of Object.keys(props)) {
// Check all keys in button el object...
      if (key in button) {
// Pass on the ones that match...
        log(`${key} in button`, ['yellow', 'bold'])
        button[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in button.style) {
        log(`${key} in button`, ['pink', 'bold'])
// Put them here...
        button.style[`${key}`] = props[`${key}`]
      }
    }

// Check for 'label' attribute,
    if ('label' in props) {
      button.textContent = props.label
      button.style.fontSize = '24px'
      // button.style.margin = '5'
    }

// The button component element's constructor definition...
    HTMLButtonComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLButtonComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(button)
// Create a node from the template function, and append to shadowRoot....
        Button._appendStyleNode(shadowRoot, template)
      }

// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLButtonComponent.prototype = Object.create(HTMLButtonElement.prototype)
// Add constructor...
    HTMLButtonComponent.prototype.constructor = HTMLButtonComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLButtonComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLButtonComponent.prototype.connectedCallback = function() {
        log('ConnectedCallback', ['red', 'bold'])
        dir(self)
        if (self) {
          log('self', ['yellow', 'bold'])
          self.appendChild(button)
// Add a few default styles for the outer root element....
          self.style.width = '100%'
          self.style.paddingLeft = '10px'
          self.style.paddingRight = '10px'
          self.style.marginLeft = 'auto'
          self.style.marginRight = 'auto'
        } else if (this) {
          log('this', ['yellow', 'bold'])
          dir(this)
          this.appendChild(button)
// Add a few default styles for the outer root element....
          this.style.width = '100%'
          this.style.paddingLeft = '10px'
          this.style.paddingRight = '10px'
          this.style.marginLeft = 'auto'
          this.style.marginRight = 'auto'
        } else {
          throw Error('ConnectedCallbackError: A problem has occured while appending component children.')
        }
      }
    }

// Return component to the caller...
    return HTMLButtonComponent
  }
}

export { Button }
