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

// Static method for defining a Venus button element...
  static createComponent(props={}, template=false) {
    log('props', ['orange', 'bold'])
    dir(props)

// Declarations..
    let HTMLButtonComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    button,
    self,
    obj

// Return boolean value for shadow...
    shadowBool =(arr)=>
      arr.reduce((shadow, keyVal, index)=>
        (keyVal.indexOf('shadow') == -1)?
          shadow
        :
          index
        ,false
      )

// Get attribute names and Listeners...
    if (props) {
      obj = _.processData(
        _.propsArray(props)
      )
// Store attribute and Listener pairs...
      customProps = obj.props
      eListeners  = obj.eventListeners

// Determine if shadow option is set or not...
      shadow = (shadowBool(customProps) !== false)?
        customProps[shadowBool(customProps)][1]
      :
        true
    }

// Create an HTMLButtonElement...
    button = document.createElement('button')
// Some default settings for button elements...
// Set venus identifier flag..
    // button.venus = true
    // if (props.type == 'text') {
    //
    // }

// Pass props from venus component declaration on to the inner button el...
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
      HTMLButtonComponent.prototype.connectedCallback =()=> {
        self.appendChild(button)
      }
    }

// Return component to the caller...
    return HTMLButtonComponent
  }
}

export { Button }
