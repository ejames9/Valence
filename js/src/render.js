/*
Render.js

This code functions as a bridge from the Component class to the bUd render
method so as to avoid cyclical-dependency between the two class files...

Eric James Foster, MIT License.
*/

// Bring in the dom...
import { Form } from './Form'
// Get events class...
import { Events } from './Events'


class Render {
// Method for converting virtual dom to real dom...
  static realize(node, root) {
// Set component root property...
    this.componentRoot = root

// Create new virtual DOM and mount the root component...
    const mount =()=> {
// Get new vDOM and draw tree...
      this.form = new Form(node, root)
      this.rootComponent = this.form.draw()

// Mount...
      root.appendChild(this.rootComponent)
// Confirm component mounted...
      this.rootComponentMounted = true
    }

// Method for effeciently updating the UI of the bUd application. It is a
// link to Form DOM's updateElement method...
    const update =(formNode)=> formNode.updateElement(root, node)

// If no component is mounted, mount component. Otherwise
// update the component...
    if (!this.rootComponentMounted) {
      mount()
    } else {
      update()
    }
  }

// Method for effeciently updating the UI of the bUd application. It is a
// link to Form DOM's updateElement method...
  static patch(node) {
    this.form.updateElement(node)
  }
}


export { Render }
