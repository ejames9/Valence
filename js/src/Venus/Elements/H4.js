/*
** H4.js
**
** H4.js is an extensible HTML5 Web Component wrapper, built around the H4
** element. It's aim is in providing an h4 element that is able to be
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


class H4 {
// A CSS template literal, holding default styles for an h4...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a Venus h4 element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLH4Component,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    h4,
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

// Create an HTMLH4Element...
    h4 = document.createElement('h4')
// Some default settings for h4 elements...
// Set venus identifier flag..
    h4.venus = true

// Pass props from venus component declaration on to the inner h4 el...
    for (let key of Object.keys(props)) {
// Check all keys in h4 el object...
      if (key in h4) {
// Pass on the ones that match...
        // log(`${key} in h4`, ['yellow', 'bold'])
        h4[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in h4.style) {
        // log(`${key} in h4`, ['pink', 'bold'])
// Put them here...
        h4.style[`${key}`] = props[`${key}`]
      }
    }

// Check for 'content' attribute,
    if ('content' in props) {
      h4.textContent = props.content
      // h4.style.margin = '5'
    }


// The h4 component element's constructor definition...
    HTMLH4Component =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLH4Component)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(h4)
// Create a node from the template function, and append to shadowRoot....
        H4._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLH4Component.prototype = Object.create(HTMLH4Element.prototype)
// Add constructor...
    HTMLH4Component.prototype.constructor = HTMLH4Component

// Register event listener methods..
    Events.registerCallbacks(HTMLH4Component, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLH4Component.prototype.connectedCallback =()=> {
        self.appendChild(h4)
      }
    }

// Return component to the caller...
    return HTMLH4Component
  }
}


export { H4 }
