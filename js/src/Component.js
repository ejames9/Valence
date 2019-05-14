/*
Component.js

This file handles component creation and
functionality, including life cycle methods and
state management....

Eric James Foster, MIT License.
*/



// Get utilities...
import {
  processData,
  propsArray,
  combineObjects,
  separateStyleRules
} from './Utilities/helpers'
// Get loggers...
import { _log, _dir } from './Utilities/Loggers'
// Get type validation...
import { isArray } from './Utilities/Is'
// Get DOM querying function....
import _el from './Utilities/DOM/el'
// Get Node class...
import { Node } from './Form/Node'
// Get data...
import { DATA } from './Utilities/data'
// Get Events...
import { Events } from './Events'
// Get DOMPurify for HTML sanitization....
import DOMPurify from 'dompurify'
// Bring in stylis and plugins for CSS preprocessing...
import stylis from 'stylis'
// Get CSS parser...
import { CSS } from './Flare/CSS'


// Stylis configuration options...
stylis.set({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false,
});


// Globalize common utility functions...
const dir = _dir
const log = _log
const el  = _el

class Component extends HTMLElement{
// Instance vars....
  state = null
  props = null
  _state = null
  _style = null

// Ctor...
  constructor() {
    super()

// Internal state...
    this._state = {
      mounted: false
    }
// Public state...
    this.state = {}

// // Properties...
    this.props = this.observedAttributes

// Set lifecycle listeners...
    DATA.ComponentLifecycleEvents.forEach(ev=> {
      this.addEventListener(ev, (e)=> {
        this[e.type](e.detail)
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

/* This method is called by connectedCallback, and can be used to do any work
once the element is connected...*/
//   propsCallback() {
// // To be overridden......
//     return
//   }

/* This method is called by attributesChangedCallback, and can be used to do any work
once attributes change...*/
  onChange() {
// To be overridden......
    return
  }

// Component render method...
  render() {
// Must be overridden with returned markup...
    return // ...Markup Here....
  }

/*
*** Component Authoring Methods.....
**********************************>>>>>
*/

// An Instance method for setting attributes of custom elements...
  registerProps(props) {
// Convert props object to array....
    Object.entries(props)
    .forEach(prop=> {
// Set the default prop value on it's instance variable...
      this[`_${prop[0]}`] = prop[1].default
// Define the props as HTML attributes...
      Object.defineProperties(this, {
        [prop[0]]: {
          get() {
            return this[`_${prop[0]}`]
          },
          set(val) {
            if (val) {
              this.setAttribute(prop[0], val)
              this[`_${prop[0]}`] = val
            } else {
              this.removeAttribute(prop[0])
            }
          },
          enumerable: true,
          configurable: true
        }
      })
    })
  }


// An instance method for updating element props with user defined props....
  applyUserProps(observed) {
    for (let prop of Object.keys(observed)) {
      if (prop in this) {
/* Seem to be having an issue here with the this.gutters props/attribute. It
seems that we are unable to change the property from the default value to anything
falsey. I was not able to figure out exactly why, but I did find a workaround,
Below we are going directly to the backing variable, an instance var that all
the props need in order to set a default value. The getter for the prop returns
this value, whose name is in the format `_ + propName`. */
        this[`_${prop}`] = observed[prop]
      }
    }
  }


// Instance method for Component authors that aids in ShadowDOM creation....
  shadowCaster(userOptions) {
    let options = {
      mode: 'open',
      slot: true
    },

// Merge options and user options, and destructure into vars...
    {mode, slot} = combineObjects(options, userOptions),

// Create the shadow root...
    shadowRoot = this.attachShadow({mode: mode})
// If a slot is truthy
    if (slot) {
// Create a slot element...
      let slotEl = document.createElement('slot')
// If slot is an object, and has a name... pass it on to the element...
      if (slot.name) {
        slotEl.name = slot.name
      }

// Append the slot to this element...
      shadowRoot.appendChild(slotEl)
    }
    return shadowRoot
  }


// Instance method for Component authors that aids in slot element creation....
  addSlots(root, slots=false) {
// If an object is passed in....
    if (slots) {
      Object.values.forEach(val=> {
// Get a slot...
        let slot = document.createElement('slot')
// Give it a name...
        slot.name = val
// Attach slot to root....
        root.appendChild(slot)
      })
    } else {
      root.appendChild(
        document.createElement('slot')
      )
    }
// Return the root....
      return root
  }


// Instance method for Component authors that aids in adding styles to componentsn....
  addStyles(root, styles) {
// Create style el....
    let style = document.createElement('style')
// Process styles and append to style el...
    style.innerHTML = stylis('', styles)
// Append style el to shadow root...
    root.appendChild(style)

// Return the root...
    return style
  }


/* A private method for appending a CSS rule or an array of CSS rules to the default stylesheet,
one by one.*/
  insertRules(ttl, style) {
// Separate the ttl into individual rules....
    let rules = CSS.separateStyleRules(ttl)
// log('RULES');dir(rules)
    if (isArray(rules)) {
// Insert rules...
      rules.forEach((rule)=> {
        style.sheet.insertRule(rule)
      })
    } else {
// Insert rule..
      style.sheet.insertRule(rules)
    }
  }


// Instance method for processing css with stylis...
  processStyles(css) {
    return stylis(':host', css)
  }

// Helper method for adding classes to the component's classList....
  addClass(class_) {
    return this.classList.add(class_)
  }
// Helper method for removing classes from the component's classList....
  removeClass(class_) {
    return this.classList.remove(class_)
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
  _appendChildren(props) {
/* Declare regexp that will help is determine whether or not the render() method
has been overridden or not.... We also need the method's source code to inspect....*/
    let renderRE = /...Markup Here..../g,
    renderFuncSource = this.render.toString()
// Set props on a class variable...
    // this.props = props
/* If we don't get a match with the regexp, then the method has been overridden
with markup that needs appended ....*/
    if (!renderRE.test(renderFuncSource)) {
      return this.appendChild(
        Node.createNode(
          this.render(
            this.props
          )
        )
      )
    }
  }


// Used as an internal cue for updating, this method is built into the custom
// elements v1 API...
  attributesChangedCallback(name, oldVal, newVal) {
    console.info(
      `the attribute "${name}" changed from "${olVal}" to "${newVal}".`
    )
// Call propsChangedCallback.....
    onChange(name, oldVal, newVal)

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
// Initialize event listeners...
    // this._initializeEvents()
// Do any prop related work here...
    // this.propsCallback()
// Call didMount callback...
    this.componentDidMount()
  }

// Used internally for post-unmount operations, this method is built into the custom
// elements v1 API...
  disconnectedCallback() {
    this.componentDidUnmount()
  }

// A static public method used internally to create a Valence component...
  static createComponent(component, props, children) {
// Pre-declare inner functions, mainly for style considerations...
    let
    appendChildren,
    reflect,
    shadowBool,
    tagName = component[2]

// Create the DOM tree for the component....
    appendChildren =(elem, shadow=false)=> {
// If elem is a shadowRoot, give it a slot...
      if (shadow) {
        let slot = document.createElement('slot')
        elem.appendChild(slot)
      }
// Append nodes...
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
      obj = processData(
        propsArray(props)
      )
// Store attribute and Listener pairs...
      customProps = obj.props
      eListeners  = obj.eventListeners

// Determine if shadow option is set or not...
      shadow = (shadowBool(customProps) !== false)?
        customProps[shadowBool(customProps)][1]
      :
// This is the default setting for Valence component shadow dom....
        false
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
        appendChildren(shadowRoot, true)
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
    HTMLComponent.prototype.connectedCallback =()=> {
      if (!shadow && !props.noChild) {
        appendChildren(self)
      }
// Check for cleanHTML prop....
      if (props.cleanHTML) {
        //log('DOMPURIFY', 'yellow')// log(DOMPurify.sanitize('<img src=x onerror=alert(1)//>'))
        self.insertAdjacentHTML('afterbegin', DOMPurify.sanitize(props.cleanHTML))
      }
    }

// Return the component constructor...
    return HTMLComponent
  }

// End of Class....
}


export default Component














// // An instance method for updating element props with user defined props....
//   applyUserProps(observed) {
//     log('###########################IN_COMPONENTDIDMOUNT##################################################', ['yellow', 'blue'])
//     dir(this)
//     for (let prop of Object.keys(observed)) {
//       if (prop in this) {
//         log(`prop: ${String(prop)}`, ['tomato', 'white'])
//         log(`${String(prop)} = ${this[prop]}`, 'orange')
//         log(`will be: ${observed[prop]}`)
// /* Seem to be having an issue here with the this.gutters props/attribute. It
// seems that we are unable to change the property from the default value to anything
// falsey. I was not able to figure out exactly why, but I did find a workaround,
// Below we are going directly to the backing variable, an instance var that all
// the props need in order to set a default value. The getter for the prop returns
// this value, whose name is in the format `_ + propName`. */
//         this[`_${prop}`] = observed[prop]
//         // if (String(prop) == 'gutters' && this[prop] == '15px') {
//         //   log('hi there', 'green')
//         //   this['_gutters'] = !true
//         // }
//         log(`${String(prop)}: ${this[prop]}`, 'yellow')
//         log(`_${String(prop)}: ${this["_" + prop]}`, 'yellow')
//       }
//     }
//   }
