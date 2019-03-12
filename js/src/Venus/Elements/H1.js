/*
** H1.js
**
** H1.js is an extensible HTML5 Web Component wrapper, built around the H1
** element. It's aim is in providing an h1 element that is able to be
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


class H1 {
// A CSS template literal, holding default styles for an h1...
  static _tempLiteral = `:host {
                          background-color: black;
                          border-radius: 5%;
                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a Venus h1 element...
  static createComponent(props={}, template=false) {
    log('props', ['orange', 'bold'])
    dir(props)

// Declarations..
    let HTMLH1Component,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    h1,
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

// Create an HTMLH1Element...
    h1 = document.createElement('h1')
// Some default settings for h1 elements...
// Set venus identifier flag..
    h1.venus = true
    // if (props.type == 'text') {
    //
    // }

// Pass props from venus component declaration on to the inner h1 el...
    for (let key of Object.keys(props)) {
// Check all keys in h1 el object...
      if (key in h1) {
// Pass on the ones that match...
        log(`${key} in h1`, ['yellow', 'bold'])
        h1[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in h1.style) {
        log(`${key} in h1`, ['pink', 'bold'])
// Put them here...
        h1.style[`${key}`] = props[`${key}`]
      }
    }

// Check for 'content' attribute,
    if ('content' in props) {
      h6.textContent = props.content
      // h6.style.margin = '5'
    }

// The h1 component element's constructor definition...
    HTMLH1Component =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLH1Component)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(h1)
// Create a node from the template function, and append to shadowRoot....
        H1._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLH1Component.prototype = Object.create(HTMLHeaderElement.prototype)
// Add constructor...
    HTMLH1Component.prototype.constructor = HTMLH1Component

// Register event listener methods..
    Events.registerCallbacks(HTMLH1Component, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLH1Component.prototype.connectedCallback =()=> {
        self.appendChild(h1)
      }
    }

// Return component to the caller...
    return HTMLH1Component
  }
}

export { H1 }
