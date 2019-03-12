/*
** H3.js
**
** H3.js is an extensible HTML5 Web Component wrapper, built around the H3
** element. It's aim is in providing an h3 element that is able to be
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


class H3 {
// A CSS template literal, holding default styles for an h3...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a Venus h3 element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLH3Component,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    h3,
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

// Create an HTMLH3Element...
    h3 = document.createElement('h3')
// Some default settings for h3 elements...
// Set venus identifier flag..
    h3.venus = true

// Pass props from venus component declaration on to the inner h3 el...
    for (let key of Object.keys(props)) {
// Check all keys in h3 el object...
      if (key in h3) {
// Pass on the ones that match...
        // log(`${key} in h3`, ['yellow', 'bold'])
        h3[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in h3.style) {
        // log(`${key} in h3`, ['pink', 'bold'])
// Put them here...
        h3.style[`${key}`] = props[`${key}`]
      }
    }

// Check for 'content' attribute,
    if ('content' in props) {
      h3.textContent = props.content
      // h3.style.margin = '5'
    }


// The h3 component element's constructor definition...
    HTMLH3Component =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLH3Component)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(h3)
// Create a node from the template function, and append to shadowRoot....
        H3._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLH3Component.prototype = Object.create(HTMLH3Element.prototype)
// Add constructor...
    HTMLH3Component.prototype.constructor = HTMLH3Component

// Register event listener methods..
    Events.registerCallbacks(HTMLH3Component, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLH3Component.prototype.connectedCallback =()=> {
        self.appendChild(h3)
      }
    }

// Return component to the caller...
    return HTMLH3Component
  }
}


export { H3 }
