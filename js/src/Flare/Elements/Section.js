/*
** Section.js
**
** Section.js is an extensible HTML5 Web Component wrapper, built around the Section
** element. It's aim is in providing an section element that is able to be
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


class Section {
// A CSS template literal, holding default styles for an section...
  static _tempLiteral = `:host {

                        }`

// Static method for appending child nodes to parent elements...
  static _appendStyleNode(root, child) {
    return root.appendChild(Node.createNode(child()))
  }

// Static method for defining a flare section element...
  static createComponent(props={}, template=false) {
    // log('props', ['orange', 'bold'])
    // dir(props)

// Declarations..
    let HTMLSectionComponent,
    eListeners  = [],
    customProps = [],
    shadowBool,
    shadow = props.shadow,
    section,
    self,
    obj

/* Doing some finaglery with the native-shim and HTMLElement object.  This will
be necessary until web components are fully supported in all browsers... */
    window.useNativeShim = false
    window.HTMLElement   = window._HTMLElement

// Get attribute names and Listeners...
    if (props) {
      obj = _.processData(
        _.propsArray(props)
      )
// Store attribute and Listener pairs...
      customProps = obj.props
      eListeners  = obj.eventListeners
    }

// Create an HTMLSectionElement...
    section = document.createElement('section')
// Some default settings for section elements...
// Set flare identifier flag..
    section.flare = true

// Pass props from flare component declaration on to the inner section el...
    for (let key of Object.keys(props)) {
// Check all keys in section el object...
      if (key in section) {
// Pass on the ones that match...
        // log(`${key} in section`, ['yellow', 'bold'])
        section[`${key}`] = props[`${key}`]
// Or if they are style properties...,
      } else if (key in section.style) {
        // log(`${key} in section`, ['pink', 'bold'])
// Put them here...
        section.style[`${key}`] = props[`${key}`]
      }
    }

// Check for 'content' attribute,
    if ('content' in props) {
      section.textContent = props.content
      // section.style.margin = '5'
    }


// The section component element's constructor definition...
    HTMLSectionComponent =()=> {
      let shadowRoot

// Construct an element, store as self...
      self = Reflect.construct(HTMLElement, [], HTMLSectionComponent)

      if (shadow) {
// Create shadow root...
        shadowRoot = self.attachShadow({mode: 'open'})
// Append to shadow root...
        shadowRoot.appendChild(section)
// Create a node from the template function, and append to shadowRoot....
        Section._appendStyleNode(shadowRoot, template)
      }
// Return constructor...
      return self
    }

// Add superclass prototype...
    HTMLSectionComponent.prototype = Object.create(HTMLSectionElement.prototype)
// Add constructor...
    HTMLSectionComponent.prototype.constructor = HTMLSectionComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLSectionComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      HTMLSectionComponent.prototype.connectedCallback =()=> {
        self.appendChild(section)
      }
    }

// Return component to the caller...
    return HTMLSectionComponent
  }
}


export { Section }
