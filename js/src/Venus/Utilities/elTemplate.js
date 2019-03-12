/*
** ||UppercaseName||.js
**
** ||UppercaseName||.js is an extensible HTML5 Web Component wrapper, built around the ||UppercaseName||
** element. It's aim is in providing an ||name|| element that is able to be
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


class ||UppercaseName|| {
// A CSS template literal, holding default styles for an ||name||...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a Venus ||name|| element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTML||UppercaseName||Component,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    ||name||,
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

// Create an HTML||UppercaseName||Element...
    ||name|| = document.createElement('||name||')
// Some default settings for ||name|| elements...
// Set venus identifier flag..
    // ||name||.venus = true

// Pass props from venus component declaration on to the inner ||name|| el...
    for (let key of Object.keys(props)) {
// Check all keys in ||name|| el object...
      if (key in ||name||) {
// Pass on the ones that match...
        // log(`${key} in ||name||`, ['yellow', 'bold'])
        ||name||[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in ||name||.style) {
        // log(`${key} in ||name||`, ['pink', 'bold'])
// Put them here...
        ||name||.style[`${key}`] = props[`${key}`]
      }
    }

// Check for '||attr0||' attribute,
    if ('||attr0||' in props) {
      ||name||.textContent = props.||attr0||
      // ||name||.style.margin = '5'
    }


// The ||name|| component element's constructor definition...
    HTML||UppercaseName||Component =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTML||Constructor||Component)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(||name||)
// Create a node from the template function, and append to shadowRoot....
        ||UppercaseName||._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTML||UppercaseName||Component.prototype = Object.create(HTML||UppercaseName||Element.prototype)
// Add constructor...
    HTML||UppercaseName||Component.prototype.constructor = HTML||UppercaseName||Component

// Register event listener methods..
    Events.registerCallbacks(HTML||UppercaseName||Component, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTML||UppercaseName||Component.prototype.connectedCallback =()=> {
        self.appendChild(||name||)
      }
    }

// Return component to the caller...
    return HTML||UppercaseName||Component
  }
}


export { ||UppercaseName|| }
