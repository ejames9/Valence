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
import './support/polyfillLoader'
// Get the nativeShimLoader...
import './support/shimLoader'

//Get utilities...
import * as _ from './Utilities/helpers'
// Get Virtual DOM...
import { Form } from './Form/Form'
// Get Node..
import { Component as _Component } from './Component'
// Get events...
import { Events } from './Events'
// Get errors...
import { Errors as _Errors } from './Errors/Errors'
// Get Props...
import { Props } from './Props/Props'
import { PropTypes } from './Props/PropTypes'

// initialize webComponentsLoaded global...
window.webComponentsLoaded = false
window.PropTypes           = PropTypes

// Globalize common utility functions...
const inspect = console.dir
const log     = _.log
const el      = _.el
const dom     = _.dom

// Get `jsx to vDOM` function
const x = Form.x



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

/*
 * Class Methods...
 */

// Method for converting virtual dom to real dom...
  static realize(node, root) {
// Set component root and root component properties...
    this.componentRoot = root
    this.rootNode      = node

// Create new virtual DOM and mount the root component...
    const mount =()=> {
// Get new vDOM and draw tree...
      this.form = new Form(node, root)
// Give this.form to this.Component...
      this.Component.form = this.form

// Convert virtual DOM to actual DOM...
      this.rootComponent = this.form.draw()

// Mount on Valence root node...
      root.appendChild(this.rootComponent)
// Confirm component mounted...
      this.rootComponentMounted = true
    }

// For effeciently updating the UI of the Valence application. It is a
// link to Form DOM's updateElement method...
    const update =()=> this.form.updateDOM(root, rootNode)

// If no component is mounted, mount component. Otherwise
// update the component...
    if (!this.rootComponentMounted) {
      if (webComponentsLoaded) {
        mount()
      } else {
        document.addEventListener('webComponentsLoaded', ()=> {
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

<<<<<<< HEAD
console.log(`what the`)
console.dir(Valence)

export default Valence
=======
export {Valence}
>>>>>>> master
