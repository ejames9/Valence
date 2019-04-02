/*
** Colgroup.js
**
** Colgroup.js is an extensible HTML5 Web Component wrapper, built around the Colgroup
** element. It's aim is in providing an colgroup element that is able to be
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


class Colgroup {
// A CSS template literal, holding default styles for an colgroup...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare colgroup element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLColgroupComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    colgroup,
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

// Create an HTMLColgroupElement...
    colgroup = document.createElement('colgroup')
// Some default settings for colgroup elements...
// Set flare identifier flag..
    colgroup.flare = true

// Pass props from flare component declaration on to the inner colgroup el...
    for (let key of Object.keys(props)) {
// Check all keys in colgroup el object...
      if (key in colgroup) {
// Pass on the ones that match...
        // log(`${key} in colgroup`, ['yellow', 'bold'])
        colgroup[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in colgroup.style) {
        // log(`${key} in colgroup`, ['pink', 'bold'])
// Put them here...
        colgroup.style[`${key}`] = props[`${key}`]
      }
    }

// // Check for '-----' attribute,
//     if ('-----' in props) {
//       colgroup.textContent = props.-----
//       // colgroup.style.margin = '5'
//     }


// The colgroup component element's constructor definition...
    HTMLColgroupComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLColgroupComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(colgroup)
// Create a node from the template function, and append to shadowRoot....
        Colgroup._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLColgroupComponent.prototype = Object.create(HTMLColgroupElement.prototype)
// Add constructor...
    HTMLColgroupComponent.prototype.constructor = HTMLColgroupComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLColgroupComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLColgroupComponent.prototype.connectedCallback =()=> {
        self.appendChild(colgroup)
      }
    }

// Return component to the caller...
    return HTMLColgroupComponent
  }
}


export { Colgroup }
