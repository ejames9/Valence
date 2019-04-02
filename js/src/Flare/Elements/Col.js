/*
** Col.js
**
** Col.js is an extensible HTML5 Web Component wrapper, built around the Col
** element. It's aim is in providing an col element that is able to be
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


class Col {
// A CSS template literal, holding default styles for an col...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare col element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLColComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    col,
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

// Create an HTMLColElement...
    col = document.createElement('col')
// Some default settings for col elements...
// Set flare identifier flag..
    col.flare = true

// Pass props from flare component declaration on to the inner col el...
    for (let key of Object.keys(props)) {
// Check all keys in col el object...
      if (key in col) {
// Pass on the ones that match...
        // log(`${key} in col`, ['yellow', 'bold'])
        col[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in col.style) {
        // log(`${key} in col`, ['pink', 'bold'])
// Put them here...
        col.style[`${key}`] = props[`${key}`]
      }
    }

// // Check for '-----' attribute,
//     if ('-----' in props) {
//       col.textContent = props.-----
//       // col.style.margin = '5'
//     }


// The col component element's constructor definition...
    HTMLColComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLColComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(col)
// Create a node from the template function, and append to shadowRoot....
        Col._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLColComponent.prototype = Object.create(HTMLColElement.prototype)
// Add constructor...
    HTMLColComponent.prototype.constructor = HTMLColComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLColComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLColComponent.prototype.connectedCallback =()=> {
        self.appendChild(col)
      }
    }

// Return component to the caller...
    return HTMLColComponent
  }
}


export { Col }
