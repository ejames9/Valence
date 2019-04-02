/*
** Area.js
**
** Area.js is an extensible HTML5 Web Component wrapper, built around the Area
** element. It's aim is in providing an area element that is able to be
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


class Area {
// A CSS template literal, holding default styles for an area...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare area element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLAreaComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    area,
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

// Create an HTMLAreaElement...
    area = document.createElement('area')
// Some default settings for area elements...
// Set flare identifier flag..
    area.flare = true

// Pass props from flare component declaration on to the inner area el...
    for (let key of Object.keys(props)) {
// Check all keys in area el object...
      if (key in area) {
// Pass on the ones that match...
        // log(`${key} in area`, ['yellow', 'bold'])
        area[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in area.style) {
        // log(`${key} in area`, ['pink', 'bold'])
// Put them here...
        area.style[`${key}`] = props[`${key}`]
      }
    }

// // Check for '-----' attribute,
//     if ('-----' in props) {
//       area.textContent = props.-----
//       // area.style.margin = '5'
//     }


// The area component element's constructor definition...
    HTMLAreaComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLAreaComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(area)
// Create a node from the template function, and append to shadowRoot....
        Area._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLAreaComponent.prototype = Object.create(HTMLAreaElement.prototype)
// Add constructor...
    HTMLAreaComponent.prototype.constructor = HTMLAreaComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLAreaComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLAreaComponent.prototype.connectedCallback =()=> {
        self.appendChild(area)
      }
    }

// Return component to the caller...
    return HTMLAreaComponent
  }
}


export { Area }
