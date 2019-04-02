/*
** Footer.js
**
** Footer.js is an extensible HTML5 Web Component wrapper, built around the Footer
** element. It's aim is in providing an footer element that is able to be
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


class Footer {
// A CSS template literal, holding default styles for an footer...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare footer element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLFooterComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    footer,
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

// Create an HTMLFooterElement...
    footer = document.createElement('footer')
// Some default settings for footer elements...
// Set flare identifier flag..
    footer.flare = true

// Pass props from flare component declaration on to the inner footer el...
    for (let key of Object.keys(props)) {
// Check all keys in footer el object...
      if (key in footer) {
// Pass on the ones that match...
        // log(`${key} in footer`, ['yellow', 'bold'])
        footer[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in footer.style) {
        // log(`${key} in footer`, ['pink', 'bold'])
// Put them here...
        footer.style[`${key}`] = props[`${key}`]
      }
    }

// // Check for '-----' attribute,
//     if ('-----' in props) {
//       footer.textContent = props.-----
//       // footer.style.margin = '5'
//     }


// The footer component element's constructor definition...
    HTMLFooterComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLFooterComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(footer)
// Create a node from the template function, and append to shadowRoot....
        Footer._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLFooterComponent.prototype = Object.create(HTMLFooterElement.prototype)
// Add constructor...
    HTMLFooterComponent.prototype.constructor = HTMLFooterComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLFooterComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLFooterComponent.prototype.connectedCallback =()=> {
        self.appendChild(footer)
      }
    }

// Return component to the caller...
    return HTMLFooterComponent
  }
}


export { Footer }
