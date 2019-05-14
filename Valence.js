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
import { combineObjects } from './js/src/Utilities/helpers'
import _el from './js/src/Utilities/DOM/el'
import { _log, _dir } from './js/src/Utilities/Loggers'
// Get Virtual DOM...
import { Form } from './js/src/Form/Form'
// Get Component..
import _Component from './js/src/Component'
// Get events...
import { Events } from './js/src/Events'
// Get errors...
import { Errors as _Errors } from './js/src/Errors/Errors'
// Get Props...
import { Props } from './js/src/Props/Props'
import { PropTypes } from './js/src/Props/PropTypes'
// Get styles...
import { Flare } from './js/src/Flare/Flare'



// Create empty object for the library's globals.....
window.valenceGlobals = {}
// Initializing an array for Flare component tag names...
window.valenceGlobals.flareComponents = {}
window.valenceGlobals.webComponents = {}
window.valenceGlobals.valenceComponents = []
window.valenceGlobals.registeredComponents = []
// Initializing an array for all stateless instantiated component tag names...
window.valenceGlobals.statelessComponents = []

// initialize global flags...
window.valenceGlobals.webComponentsLoaded = false
window.valenceGlobals.rootNodeDefined = false
window.valenceGlobals.webComponents.flexBasisDefined = false
// Provide access to PropTypes...
window.PropTypes           = PropTypes
// Provide `jsx to vDOM`, x(), function...
window.x                   = Form.x
// Globalize common utility functions...
window.el                  = _el
window.dir                 = _dir
window.log                 = _log

// Globalize Flare library...
window.flare = Flare



// The framework's API class...
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

// The config options object.. with default assumptions...
  static _assumptions = {
    cornDogCase: false
  }

/*
 * Class Methods...
 */

// A private static method for setting library user assumptions...
  static _setAssumptions(assumptions) {
// If we have the global functions option set to true.....
    if (assumptions.globalFunctions) {
// Globalize Flare functions for convenience...
      window.global              = flare.global
      window.extend              = flare.extend
      window.keyframes           = flare.keyframes
// Globalize style elements for convenience...
      window.div                 = flare.div
      window.aside               = flare.aside
      window.area                = flare.area
      window.button              = flare.button
      window.col                 = flare.col
      window.colgroup            = flare.colgroup
      window.header              = flare.header
      window.footer              = flare.footer
      window.input               = flare.input
      window.h1                  = flare.h1
      window.h2                  = flare.h2
      window.h3                  = flare.h3
      window.h4                  = flare.h4
      window.h5                  = flare.h5
      window.h6                  = flare.h6
      window.p                   = flare.p
      window.section             = flare.section
      window.span                = flare.span
      window.table               = flare.table
      window.textarea            = flare.textarea
    }
// If underscore abbreviation for global insertion option is set to true....
    if (assumptions.underscoreGlobal) {
// Abbreviate flare.global...
      window.__                  = flare.global
    }
// Syntax highlighting....
    if (assumptions.syntaxHighlighting) {
      window.styled = flare
    }
    return assumptions
  }

// A public helper method for setting Flare assumptions, config options...
  static assume(userAssumptions) {
    return Valence._setAssumptions(
      Flare.assume(
        combineObjects(
          Valence._assumptions,
          userAssumptions
        )
      )
    )
  }

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
      if (valenceGlobals.webComponentsLoaded) {
        mount()
      } else {
        document.addEventListener('webComponentsLoaded', ()=> {
          mount()
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


export { Valence }
