/*
Component.js

This file handles component creation and
functionality, including life cycle methods and
state management....

Eric James Foster, MIT License.
*/



// Get utilities...
import * as _ from './Utilities/helpers'
// Get Node class...
import { Node } from './Form/Node'
// Get data...
import { DATA } from './Utilities/data'
// Get Events...
import { Events } from './Events'


// Globalize common utility functions...
const dir = console.dir
const log = _.log
const el  = _.el
const dom = _.dom


class Component extends HTMLElement{
  constructor(props) {
    super(props)

// Internal state...
    this._state = {
      mounted: false
    }
// Public state...
    this.state = {}

// Properties...
    this.props = props

// Set lifecycle listeners...
    DATA.ComponentLifecycleEvents.forEach(ev=> {
      this.addEventListener(ev, (e)=> {
        this[e](e.detail)
      })
    }, this)

// Dispatch componentWillMount event...
    // Events.fire('componentWillMount', this)
    // this.componentWillMount()
  }

/*
 * Public API...
 * * * * * * * *
 */

// Class method for immutably setting component state...
  setState(obj) {
// Convert incoming object to array of entries to be manipulated by array.reduce...
    const newStateArray = Object.entries(obj)
// Combine old/new state and set on state object...
    this.state = newStateArray.reduce((newState, stateEntry)=> (
       {
         ...newState,
         [stateEntry[0]]: stateEntry[1]
       }
      ), this.state
    )

// Now that state is reset, trigger a render cycle...
    this._update()

// Return state object...
    return this.state
  }

/*
 * The following methods are callbacks for various component
 * lifecycle events, and are intended to be overridden when
 * components are defined by the user...
 */

// This method is for doing any necessary setting up just before the component
// mounts. The event is fired just before it's constructor returns, see above...
  componentWillMount() {
    log('componentWillMount', ['white', 'blue'])
    return
  }

// This method is for doing any component work just after mounting occurs. It is
// called by this.connectedCallback() (see below)...
  componentDidMount() {
    log('componentDidMount', ['white', 'blue'])
    return
  }

// This event is fired just before an imminent unmounting of a
// component occurs. The event is fired in Valence.js at Valence.unMount()
// line 140 & also in Form.js at Form.updateElement(), line 107...
  componentWillUnmount() {
    log('componentWillUnmount', ['white', 'red'])
    return
  }

// This method is called by this.disconnectedCallback() (see below), just after unmounting...
  componentDidUnmount() {
    log('componentDidUnmount', ['white', 'red'])
    return
  }

// This callback is called just before the component recieves props. The event
// is fired in Element.js at Element.createElement(), line 60, when the
// component is created, and also in Form.js at Form.updateElement(), line 127,
// when the component is updating...
  componentWillReceiveProps(nextProps) {
    log('componentDidRecieveProps', ['white', 'orange'])
    return
  }

// This callback is called just after the component confirms an update should
// take place with `shouldComponentUpdate`, and just before the update occurs. It's
// corresponding event is fired in this._update(), line 62...
  componentWillUpdate(nextProps) {
    log('componentWillUpdate', ['white', 'green'])
    return
  }

// This callback is called just after the component completes the update process.
// It's corresponding event is fired in this._update(), line 70...
  componentDidUpdate(props) {
    log('componentWillUpdate', ['white', 'green'])
    return
  }

  shouldComponentUpdate(
    nextProps,
    nextState,
    name,
    oldVal,
    newVal,
  ) {
    log('componentShouldUpdate', ['white', 'yellow'])
    return true
  }

// Component render method...
  render() {
// Must be overridden with returned markup...
    return // ...Markup....
  }

/*
 * Private Methods....
 * * * * * * * * * * *
 */

//FIXME: Figure out how to add nextProps here.....VVVV **DONE?**
// Private class method for diffing and patching the dom...
  _update() {
    if (this.shouldComponentUpdate(this.props, this.state)) {
// Fire componentWillUpdate event...
      Events.fire('componentWillUpdate', this, {
        'nextProps': this.props,
        'state': this.state
      })
// Update the component tree...
      this.form.updateDOM(this.render(this.props))

// Fire componentDidUpdate event...
      Events.fire('componentDidUpdate', this, {
        'props': this.props,
        'state': this.state
      })
    }
  }


// A private method for appending the child nodes of a component...
  _appendChildren() {
    return this.appendChild(Node.createNode(this.render(this.props)))
  }

// Used as an internal cue for updating, this method is built into the custom
// elements v1 API...
  attributesChangedCallback(name, oldVal, newVal) {
    console.info(
      `the attribute "${name}" changed from "${olVal}" to "${newVal}".`
    )
// Confirm an update with sCU(), then trigger a diff and patch cycle...
    if (this.shouldComponentUpdate(null, null, name, oldVal, newVal)) {
      this._update(this.render(this.props))
    }
  }

// Used internally for post-mount operations, this method is built into the custom
// elements v1 API...
  connectedCallback() {
/* Technically the component is already mounted here, but it's DOM tree has yet
 * to be added. This is the closest point in the component lifecycle that I can
 * get thus far to a component will mount event.. As you can see below, once
 * the component's children are added, we consider it to be fully `mounted`
 * and fire it's `didMount` event....
 */
// Call willMount callback...
    this.componentWillMount()
// Append the component's children...
    this._appendChildren()
// Call didMount callback...
    this.componentDidMount()
  }

// Used internally for post-unmount operations, this method is built into the custom
// elements v1 API...
  disconnectedCallback() {
    this.componentDidUnmount()
  }

// Create a Valence componenet...
  static createComponent(component, props, children) {
// Pre-declare inner functions, mainly for style considerations...
    let
    appendChildren,
    reflect,
    shadowBool,
    tagName = component[2]

// Create the DOM tree for the component....
    appendChildren =(elem)=> {
      return elem.appendChild(Node.createNode(component[1](props)))
    }

// NO LONGER IN USE... CURRENTLY USING BUILT IN JS REFLECT CLASS....
// Using a metaprogramming technique called reflection via javascript's evaluation
// function to create dynamic element registration.... Will check out es6's new
// metaprogramming features (Reflect, Symbols and Proxy) to see If this can be
// accomplished without using eval... *** DONE ***
    reflect =(code)=> {
// But for now...
      return eval(code)
    }

// Return boolean value for shadow...
    shadowBool =(arr)=>
      arr.reduce((shadow, keyVal, index)=>
        (keyVal.indexOf('shadow') == -1)?
          shadow
        :
          index
        ,false
      )

/*
==== Define custom element/web component...
====================================================================>>>
* Doing a bit of finagling with the native-shim to make things work
* here.. When a web component is defined in a manner as below,
* the shim cannot be used, and we must be using a native implementation
* of HTMLElement. The following 2 lines accomplish both. Both must
* be reset (the shim and patched HTMLElement used) in order for es6
* class definition of custom elements to work.. and they are
* just after every custom element's call to HTMLElement from
* document.createElement() for element instantiation.........
*/  window.useNativeShim = false
   window.HTMLElement   = window._HTMLElement

    let HTMLComponent,
        eListeners  = [],
        customProps = [],
        shadow,
        obj
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

// Declare self here so that it may be used in this scope, below
// the ctor definition...
    let self
// Define constructor of the custom element....
    HTMLComponent =()=> {
//Self will function as `this` for this constructor... Determine the type of element
//to construct and go...
      self = Reflect.construct(HTMLElement, [], HTMLComponent)

// Use `self` as this to add props to the constructor...
      if (shadow && !props.noChild) {
// Create shadow root and pass it in to append children function...
        let shadowRoot = self.attachShadow({mode: 'open'})
        appendChildren(shadowRoot)
      }

// Add event listeners...
      if (eListeners.length > 0) {
        eListeners.forEach(entry=>
          self.addEventListener(entry[0], self[entry[1]]),
          self
        )
      }
      return self
    }


// Add superclass prototype...
    HTMLComponent.prototype = Object.create(HTMLElement.prototype)
// Add constructor...
    HTMLComponent.prototype.constructor = HTMLComponent

// Register event listener methods..
    Events.registerCallbacks(HTMLComponent, eListeners)
    // console.dir(HTMLComponent)

// Add connectedCallback method appending children if shadow is false...
    if (!shadow) {
      if (props == undefined || !props.noChild) {
        HTMLComponent.prototype.connectedCallback =()=> {
          appendChildren(self)
        }
      }
    }


// Return the component constructor...
    return HTMLComponent
  }
}


export { Component }






// // log('shadow: ' + shadowBool(customProps))
// // Use the new custom elements DOM API to define a new tag...
// // Dynamically create class source code for each component...
// reflect(`
//   window.customElements.define(
//     "${component[0]}",
//
//     class extends HTMLElement {
//       ${customProps.map(key=>`
//           get ${key[0]}() {
//             return this.hasAttribute("${key[0]}")
//           }
//           set ${key[0]}(val) {
//             if (val) {
//               this.setAttribute("${key[0]}", "")
//             } else {
//               this.removeAttribute("${key[0]}")
//             }
//           }
//        `).join('\n')
//       }
//
//       constructor() {
//         super()
//         ${(shadow)?
//             `let shadowRoot = this.attachShadow({mode: "open"})
//              appendChildren(shadowRoot)`
//           :
//             ``
//         }
//         console.log('hi')
//         ${(eListeners.length > 0)?
//           eListeners.map(entry=>`
//             this.addEventListener("${entry[0]}", this.${entry[1]})
//          `).join('\n')
//          : ``
//         }
//       }
//       ${(eListeners.length > 0)?
//         eListeners.map(entry=>`
//           ${entry[1]}() {
//             console.log('what about me')
//             return (${entry[2]})()
//           }
//         `).join('\n')
//        : ``
//       }
//       ${(!shadow)?
//          `connectedCallback() {
//            appendChildren(this)
//          }`
//        :
//          ``
//       }
//     }
//   )
// `)
