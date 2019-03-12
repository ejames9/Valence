/*
** Aside.js
**
** Aside.js is an extensible HTML5 Web Component wrapper, built around the Aside
** element. It's aim is in providing an aside element that is able to be
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


class Aside {
// A CSS template literal, holding default styles for an aside...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a Venus aside element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLAsideComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    aside,
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

// Create an HTMLAsideElement...
    aside = document.createElement('aside')
// Some default settings for aside elements...
// Set venus identifier flag..
    aside.venus = true

// Pass props from venus component declaration on to the inner aside el...
    for (let key of Object.keys(props)) {
// Check all keys in aside el object...
      if (key in aside) {
// Pass on the ones that match...
        // log(`${key} in aside`, ['yellow', 'bold'])
        aside[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in aside.style) {
        // log(`${key} in aside`, ['pink', 'bold'])
// Put them here...
        aside.style[`${key}`] = props[`${key}`]
      }
    }

// // Check for '-----' attribute,
//     if ('-----' in props) {
//       aside.textContent = props.-----
//       // aside.style.margin = '5'
//     }


// The aside component element's constructor definition...
    HTMLAsideComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLAsideComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(aside)
// Create a node from the template function, and append to shadowRoot....
        Aside._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLAsideComponent.prototype = Object.create(HTMLAsideElement.prototype)
// Add constructor...
    HTMLAsideComponent.prototype.constructor = HTMLAsideComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLAsideComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLAsideComponent.prototype.connectedCallback =()=> {
        self.appendChild(aside)
      }
    }

// Return component to the caller...
    return HTMLAsideComponent
  }
}


export { Aside }
