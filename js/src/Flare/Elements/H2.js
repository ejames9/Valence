/*
** H2.js
**
** H2.js is an extensible HTML5 Web Component wrapper, built around the H2
** element. It's aim is in providing an h2 element that is able to be
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


class H2 {
// A CSS template literal, holding default styles for an h2...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare h2 element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLH2Component,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    h2,
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

// Create an HTMLH2Element...
    h2 = document.createElement('h2')
// Some default settings for h2 elements...
// Set flare identifier flag..
    h2.flare = true

// Pass props from flare component declaration on to the inner h2 el...
    for (let key of Object.keys(props)) {
// Check all keys in h2 el object...
      if (key in h2) {
// Pass on the ones that match...
        // log(`${key} in h2`, ['yellow', 'bold'])
        h2[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in h2.style) {
        // log(`${key} in h2`, ['pink', 'bold'])
// Put them here...
        h2.style[`${key}`] = props[`${key}`]
      }
    }

// Check for 'content' attribute,
    if ('content' in props) {
      h2.textContent = props.content
      // h2.style.margin = '5'
    }


// The h2 component element's constructor definition...
    HTMLH2Component =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLH2Component)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(h2)
// Create a node from the template function, and append to shadowRoot....
        H2._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLH2Component.prototype = Object.create(HTMLH2Element.prototype)
// Add constructor...
    HTMLH2Component.prototype.constructor = HTMLH2Component

// Register event listener methods..
    Events.registerCallbacks(HTMLH2Component, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLH2Component.prototype.connectedCallback =()=> {
        self.appendChild(h2)
      }
    }

// Return component to the caller...
    return HTMLH2Component
  }
}


export { H2 }
