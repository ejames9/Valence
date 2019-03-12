/*
** Header.js
**
** Header.js is an extensible HTML5 Web Component wrapper, built around the Header
** element. It's aim is in providing an header element that is able to be
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


class Header {
// A CSS template literal, holding default styles for an header...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a Venus header element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLHeaderComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    header,
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

// Create an HTMLHeaderElement...
    header = document.createElement('header')
// Some default settings for header elements...
// Set venus identifier flag..
    header.venus = true

// Pass props from venus component declaration on to the inner header el...
    for (let key of Object.keys(props)) {
// Check all keys in header el object...
      if (key in header) {
// Pass on the ones that match...
        // log(`${key} in header`, ['yellow', 'bold'])
        header[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in header.style) {
        // log(`${key} in header`, ['pink', 'bold'])
// Put them here...
        header.style[`${key}`] = props[`${key}`]
      }
    }

// // Check for '-----' attribute,
//     if ('-----' in props) {
//       header.textContent = props.-----
//       // header.style.margin = '5'
//     }


// The header component element's constructor definition...
    HTMLHeaderComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLHeaderComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(header)
// Create a node from the template function, and append to shadowRoot....
        Header._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLHeaderComponent.prototype = Object.create(HTMLHeaderElement.prototype)
// Add constructor...
    HTMLHeaderComponent.prototype.constructor = HTMLHeaderComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLHeaderComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLHeaderComponent.prototype.connectedCallback =()=> {
        self.appendChild(header)
      }
    }

// Return component to the caller...
    return HTMLHeaderComponent
  }
}


export { Header }
