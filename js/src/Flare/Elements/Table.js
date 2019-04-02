/*
** Table.js
**
** Table.js is an extensible HTML5 Web Component wrapper, built around the Table
** element. It's aim is in providing an table element that is able to be
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


class Table {
// A CSS template literal, holding default styles for an table...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare table element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLTableComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow,
    table,
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

// Create an HTMLTableElement...
    table = document.createElement('table')
// Some default settings for table elements...
// Set flare identifier flag..
    table.flare = true

// Pass props from flare component declaration on to the inner table el...
    for (let key of Object.keys(props)) {
// Check all keys in table el object...
      if (key in table) {
// Pass on the ones that match...
        // log(`${key} in table`, ['yellow', 'bold'])
        table[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in table.style) {
        // log(`${key} in table`, ['pink', 'bold'])
// Put them here...
        table.style[`${key}`] = props[`${key}`]
      }
    }

// // Check for '-----' attribute,
//     if ('-----' in props) {
//       table.textContent = props.-----
//       // table.style.margin = '5'
//     }


// The table component element's constructor definition...
    HTMLTableComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLTableComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(table)
// Create a node from the template function, and append to shadowRoot....
        Table._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLTableComponent.prototype = Object.create(HTMLTableElement.prototype)
// Add constructor...
    HTMLTableComponent.prototype.constructor = HTMLTableComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLTableComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLTableComponent.prototype.connectedCallback =()=> {
        self.appendChild(table)
      }
    }

// Return component to the caller...
    return HTMLTableComponent
  }
}


export { Table }
