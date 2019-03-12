/*
** Paragraph.js
**
** Paragraph.js is an extensible HTML5 Web Component wrapper, built around the P
** element. It's aim is in providing a p element that is able to be
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


class Paragraph {
// A CSS template literal, holding default styles for a p...
  static _textLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a Venus p element...
  static createComponent(props={}, template=false) {

// Declarations..
    let HTMLPGraphComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    p,
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

// Create an HTMLPElement...
    p = document.createElement('p')
// Some default settings for p elements...
// Set venus identifier flag..
    // p.venus = true
    // if (props.type == 'text') {
    //
    // }

// Pass props from venus component declaration on to the inner p el...
    for (let key of Object.keys(props)) {
// Check all keys in p el object...
      if (key in p) {
// Pass on the ones that match...
        log(`${key} in p`, ['yellow', 'bold'])
        p[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in p.style) {
        log(`${key} in p`, ['pink', 'bold'])
// Put them here...
        p.style[`${key}`] = props[`${key}`]
      }
    }

// // Check for 'content' attribute,
//     if ('content' in props) {
//       p.textContent = props.content
//     }


// The p component element's constructor definition...
    HTMLPGraphComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLPGraphComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(p)
// Create a node from the template function, and append to shadowRoot....
        Paragraph._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLPGraphComponent.prototype = Object.create(HTMLParagraphElement.prototype)
// Add constructor...
    HTMLPGraphComponent.prototype.constructor = HTMLPGraphComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLPGraphComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLPGraphComponent.prototype.connectedCallback =()=> {
        self.appendChild(p)
      }
    }

// Return component to the caller...
    return HTMLPGraphComponent
  }
}

export { Paragraph }
