/*
** Input.js
**
** Input.js is an extensible HTML5 Web Component wrapper, built around the Input
** element. It's aim is in providing an input element that is able to be
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


class Input {
// A CSS template literal, holding default styles for an input...
  static _textLiteral = `:host {
                          background-color: black;
                          border-radius: 5%;
                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a Venus input element...
  static createComponent(props={}, template=false) {
    log('props', ['orange', 'bold'])
    dir(props)

// Declarations..
    let HTMLInputComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    input,
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

// Create an HTMLInputElement...
    input = document.createElement('input')
// Some default settings for input elements...
// Set venus identifier flag..
    // input.venus = true
    // if (props.type == 'text') {
    //
    // }

// Pass props from venus component declaration on to the inner input el...
    for (let key of Object.keys(props)) {
// Check all keys in input el object...
      if (key in input) {
// Pass on the ones that match...
        log(`${key} in input`, ['yellow', 'bold'])
        input[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in input.style) {
        log(`${key} in input`, ['pink', 'bold'])
// Put them here...
        input.style[`${key}`] = props[`${key}`]
      }
    }

// The input component element's constructor definition...
    HTMLInputComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLInputComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(input)
// Create a node from the template function, and append to shadowRoot....
        Input._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLInputComponent.prototype = Object.create(HTMLInputElement.prototype)
// Add constructor...
    HTMLInputComponent.prototype.constructor = HTMLInputComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLInputComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLInputComponent.prototype.connectedCallback =()=> {
        self.appendChild(input)
      }
    }

// Return component to the caller...
    return HTMLInputComponent
  }
}

export { Input }
