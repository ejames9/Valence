/*
Valence.js

Valence is A JavaScript library for building UI's with an API resembling that
of React, but uses Vanilla JS Web components under the hood...

Eric James Foster, MIT License.
*/

// TODO: Difference between shadow and light dom, composed and user html.
// content etc...  What happens to children of component being use? light dom?
// versus components shadow dom...

/*
Todo's
-------*/
//TODO: Figure out what's going on with the shadow parameter in Component.CreateComponent(),
// also, look into shadowBool()...
//TODO: Set up observedAttributeCallbacks, if not already done.....

//DONE?: Finish lifecycle event firings...
/*
[X] - componentWillMount
[X] - componentDidMount
[X] - shouldComponentUpdate
[X] - componentWillReceiveProps
[X] - componentWillUpdate
[X] - componentDidUpdate **TWEAK: SEE Component.js line 54...
[X] - componentWillUnmount

*/
//DONE?: Figure out the native-shim ambivalence thing...
//DONE?: Implement the polyfill & native-shim where needed...
//DONE?: Finish coding update on setState() process, there's still an unsolved
// problem there...
//DONE?: Figure out the name for good, Valence or Valence or ambiValence...
//TODO: Figure out how to integrate <slot/> and/or <content/> functionality...
//DONE?: Implement observed attributes functionality.. Trigger effecient
// re-rendering when certain attributes change...
//DONE: Reformat utilities, with one main class and sub classes, IS class for ex.
// then move on to propTypes and defaultProps...
//DONE: refs...
//DONE?: propTypes & defaultProps...
//TODO: Add errors where needed...
//TODO: Explore more of what vanilla js webcomponents can add to the framework...
//TODO: Add some testing, Continuous Integration....
//TODO: Make a website.. Logo.. whathaveyou...
//TODO: Learn about proxies....

// Get the polyfillLoader...
import './js/src/support/polyfillLoader'
// Get the nativeShimLoader...
import './js/src/support/shimLoader'

//Get utilities...
import * as _ from './js/src/Utilities/helpers'
// Get Virtual DOM...
import { Form } from './js/src/Form/Form'
// Get Component..
import { Component as _Component } from './js/src/Component'
// Get events...
import { Events } from './js/src/Events'
// Get errors...
import { Errors as _Errors } from './js/src/Errors/Errors'
// Get Props...
import { Props } from './js/src/Props/Props'
import { PropTypes } from './js/src/Props/PropTypes'
// Get styles...
import { Venus } from './js/src/Venus/Venus'


// Initializing an array for venus component tag names...
window.venusComponents = []
// Initializing an array for all stateless instantiated component tag names...
window.statelessComponents = []

// initialize component element hash on window object...
window.elementHash = -1
// initialize global flags...
window.webComponentsLoaded = false
window.rootNodeDefined = false

// Provide access to PropTypes...
window.PropTypes           = PropTypes
// Provide `jsx to vDOM`, x(), function...
window.x                   = Form.x
// Globalize common utility functions...
window.el                  = _.el
window.dom                 = _.dom
window.dir                 = console.dir
window.log                 = _.log

//Globalize venus functions for convenience...
window.extend              = Venus.extend
// Globalize style elements for convenience...
window.div                 = Venus.div
window.div_                 = Venus.div_
window.input               = Venus.input
window.button              = Venus.button
window.p                   = Venus.p
window.h1                  = Venus.h1
window.h6                  = Venus.h6


// The framework's entry class...
class Valence {
/*
 * Class Properties....
 */

// Pull in Component class for building components...
  static Component = _Component

// Attach Errors...
  static Errors = _Errors

// A boolean that confirms whether or not the rootComponent is mounted...
  static rootComponentMounted = false

// the node to which Valence will attach...
  static componentRoot = null

// The true DOM representation of the rootNode...
  static rootComponent = null

// The root Valence component...
  static rootNode = null

// The form virtual DOM instance...
  static form = null

// Add config method from the venus class...
  static config = Venus.config

/*
 * Class Methods...
 */

// Method for converting virtual dom to real dom...
  static realize(node, root) {
// Set component root and root component properties...
    this.componentRoot = root
    this.rootNode      = node
    this.rootNode.props.rootNode = true

// Create new virtual DOM and mount the root component...
    const mount =()=> {
// Get new vDOM and draw tree...
      this.form = new Form(this.rootNode, root)
// Give this.form to this.Component...
      this.Component.form = this.form

// Convert virtual DOM to actual DOM...
      this.rootComponent = this.form.draw()

// Mount on Valence root node...
      root.appendChild(this.rootComponent)
// Confirm component mounted...
      this.rootComponentMounted = true
    }

// Method for effeciently updating the UI of the Valence application. It is a
// link to Form DOM's updateElement method...
    const update =()=> this.form.updateDOM(root, rootNode)

// If no component is mounted, mount component. Otherwise
// update the component...
    if (!this.rootComponentMounted) {
      if (webComponentsLoaded) {
        console.log('Check1')
        mount()
      } else {
        console.log('check1st')
        document.addEventListener('webComponentsLoaded', ()=> {
          console.log('Check0')
          try {
            mount()
          }
          catch (err) {
            console.error(`MountingError: ${err.message}`)
          }
        })
      }
    } else {
      try {
        update()
      }
      catch (err) {
        console.error(`UpdateError: ${err.message}`)
      }
    }
  }

// Method for unmounting the given component at the given node...
  static unMount() {
    if (this.rootComponentMounted) {
// Fire componentWillUnmount event, then remove component...
      Events.fire('componentWillUnmount', this.rootComponent)
      this.rootComponent.remove()

// Reset componentMounted flag...
      this.rootComponentMounted = false
    } else {
      try {
        throw this.Errors.UnmountError
      }
      catch (err) {
        console.error(err.message)
      }
    }
  }
}


export { Valence, Venus }
