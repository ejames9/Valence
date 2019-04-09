/*
Form.js

Form is the virtual dom layer of a Valence app that interfaces
with the actual DOM via the DOM API, making adjustments
to the UI in an inexpensive and effecient manner...

Eric James Foster, MIT License.
*/

// Pull in utilities...
import * as _ from '../Utilities/helpers'
import { Is as is } from '../Utilities/Is'
// Grab Node...
import { Node } from './Node'
// Get Props class...
import { Props } from '../Props/Props'
// Get Events...
import { Events } from '../Events'
// Get Flare...
import { Flare } from '../Flare/Flare'

// Globalize common utilities...
const log     = _.log
const dom     = _.dom
const dir     = console.dir


// Form Virtual DOM...
class Form {
  constructor(node, root) {
// The old DOM for diffing purposes...
    this.DOM = node
    this.DOMString =  String(this.DOM)
    this.propString = String(this.DOM.props)
// The new DOM for diffing...
    this.newDOM = null
// If newDOM is set, set the following...
    if (this.newDOM) {
      this.newDOMString  = String(this.newDOM)
      this.newPropString = String(this.newDOM.props)
    }
// Get a reference to Valence's mount node...
    this.rootNode = root
  }

// Variable holds an array of flareComponent names..
  static _flareComponentNames = []

// Computed property that determines whether or not 2 nodes
// have changed...
  get _changed() {
// Compare DOMStrings...
    return this.newDOMString !== this.DOMString || this.newDOM.props.forceUpdate
  }

  get _propsChanged() {
// Compare PropStrings...
    return this.newPropString !== this.propString
  }

// Computed property that resolves whether or not the given node is a component or not...
  _isStatefulComponent(node) {
    return (node.props.isStatefulComponent)?
      true
    :
      false
  }

// Method for updating an element and all of it's children recursively...
  updateDOM(parent, newNode, oldNode=null, index=0) {
// Get a reference to the current node and incoming props...
    const thisNode  = parent.childNodes[index]
    const nextProps = newNode.props

// If this node is a component, check it's `shouldComponentUpdate` method to
// confirm whether or not an update is necessary...
    if (this._isStatefulComponent(thisNode)) {
      if (!thisNode.type.shouldComponentUpdate(
        thisNode.props/*, this.state?*/
      )) {
        return
      }
    }

// Set newDOM...
    if (this.newDOM = null) {
      this.newDOM = newNode
    }
// If first pass, oldNode will need to be set...
    if (oldNode === null) {
      oldNode = this.DOM
    }

// Get diff length...
    const diff =()=>
      Math.abs(
        newNode.children.length -
        oldNode.children.length
      )

// newNode exist where there is no oldNode...
    if (!oldNode) {
// Create a new node and append it to DOM...
      parent.appendChild(
        Node.createNode(newNode)
      )
// OldNode exists where there is no newNode...
    } else if (!newNode) {
// If current node is a component, fire willUnmount event...
      if (this._isStatefulComponent(thisNode)) {
        Events.fire(
         'componentWillUnmount',
          thisNode,
          thisNode.props
        )
      }
// Then remove the node...
      parent.removeChild(thisNode)

// The node has changed, 'tag' or 'props', for example...
    } else if (this._changed) {
      parent.replaceChild(
        Node.createNode(newNode),
        thisNode
      )
// None of the above apply, and the node is not a textNode...
} else if (!is.string(newNode)) {
// If newNode is  component, fire componentWillReceiveProps event with new props,
// then update props...
      if (this._isStatefulComponent(thisNode)) {
        Events.fire(
         'componentWillReceiveProps',
          thisNode,
          thisNode.props
        )
      }
      Props.update(
        thisNode,
        newNode.props,
        oldNode.props
      )
// Then children and their props...
      for (
        let i = 0;
        i < diff();
        i++
      ) {
        updateElement(
          thisNode,
          newNode.children[i],
          oldNode.children[i],
          i
        )
      }
    }
    this.DOM = newNode
  }



// A helper method representing the API of the virtual DOM...
  static x(type, props, ...children) {
// If type = false, the node is a flare component, and needs to be defined.
    if (type.flare) {
      log('TYPE', ['tomato', 'bold'])
       dir({type})
// Get a variable... load with x's caller function's code
      let xCaller = x.caller.toString(),
      xCallerName = x.caller.name
// Use the above to define Flare Component.. and also 'type' for the node...
      type = Flare.interValenceX(
        xCallerName,
        xCaller,
        type.el,
        type.taggedTempLit,
        props,
        type.props
      )
    } else {
      window.valenceComponents.push(
        _.convertFuncNameToTagName(type)
      )
    }
// Return a new Node...
    return new Node({
      type,
      props,
      children,
    })
  }

// Method for rendering the virtual dom to real dom...
  draw() {
    return Node.createNode(this.DOM)
  }
}


export { Form }
