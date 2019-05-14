/*
** Button.js
**
** This file contains a customizable button component, for use with the
** Valence framework.
**
** Eric James Foster, Fostware LLC, MIT License.
***/

// imports...
import ValenceComponent from '../../Component'
// import on from '../Utilities/DOM/events'
// import el from '../Utilities/DOM/events'
import { _log as log } from '../../Utilities/Loggers'
import { addClass, removeClass } from '../../Utilities/DOM/classList'
// Get Component styles...
import btnStyles from './btnStyles'



// Component Props....
const btnProps = {
  name: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: false
  },
  to: {
    type: String,
    default: '#'
  },
// Gives the button focus upon page load...
  autofocus: {
    type: Boolean,
    default: false
  },
// Gives a button full width of parent...
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
// Gives a button one of 3 default sizes, `sm`, `md`, and `lg`.....
  size: {
    type: String,
    default: 'md'
  },
/* Decides the semantic purpose of the button. Options are: 'primary' & 'outline-primary'
'secondary' & 'outline-secondary', 'success' & 'outline-success', 'danger' & 'outline-danger'
'warning & 'outline-warning, 'info' & 'outline-info', 'light' & 'outline-light', 'dark' &
'outline-dark' and 'link'*/
  variant: {
    type: String,
    default: 'outline-primary'
  },
// Options are 'button', 'submit' & 'reset'...
  type: {
    type: String,
    default: 'button'
  },
// Options are: 'input', 'a' & 'button'...
  tag: {
    type: String,
    default: 'button'
  },
// Specifies an initial value for the button...
  value: {
    type: String,
    default: null
  },
// three state prop: true, false or null
// on, off, (null) not a toggle
  pressed: {
    type: Boolean,
    default: null
  }
}

// Define Component......
class Button extends ValenceComponent {
// Ctor...
  constructor() {
// Extended classes must include call to super() in ctor..
    super()

// Declare state...
    this.state = {
      pressed: null
    }

/// Create shadowRoot with a slot....
    shadowRoot = this.shadowCaster({
      mode: 'open',
      slot: true
    })
  
// Attach styles to shadowRoot....
    this.addStyles(shadowRoot, btnStyles)

// Register props on element ...
    this.registerProps(btnProps)

// Events....
    this.onfocus =()=> {
      this.addClass('focus')
    }
    this.onblur =()=> {
      this.removeClass('focus')
    }
  }

// A class method for toggling button state...
  toggleState(state) {
    return !state
  }

/// An instance method for updating element props with user defined props....
  _applyUserProps() {
    for (let prop of Object.keys(this.props)) {
      if (prop in this) {
        this[prop] = this.props[prop]
      }
    }
  }

  // onChange() {
  //   log('<<<<<<<[][][][][][]ONCHANGE[][][][]][][][]>>>>>>>', ['yellow', 'orange'])
  // }

/* This method allows any needed changes to the component to be made once the
element is appended to the DOM */
  componentDidMount() {
/// Update element props with user defined props....
    this._applyUserProps()

// Set the tab index to make it focusable....
    this.tabIndex = -1
// Do prop related configurations...
    if (this.autofocus) {
      this.focus()
    }
    if (this.block) {
      this.addClass('btn-block')
    }
    if (this.disabled) {
      this.addClass('disabled')
    }
    if (this.size) {
      this.addClass(`btn-${this.size}`)
    }
    if (this.variant) {
      this.addClass(this.variant)
    }
    if (this.pressed !== this.state.pressed) {
      this.toggleState(this.pressed)
      // this.setState({pressed: })
    }
    if (this.href !== '#') {
      this.onclick =e=> {
        // window.location = this.props.href
      }
    }
    if (this.to !== '#') {
      this.onclick =e=> {
        window.location = this.href
      }
    }
    if (this.type === 'submit') {

    }
  }

/* This method allows any needed changes to the component to be made when attribute
values change....  */
  onChange() {

  }

// End of Class
}


// Define the button component according to the v1 custom elements spec....
// window.customElements.define('button-', Button)

// Say Goodbye:)
export default Button
