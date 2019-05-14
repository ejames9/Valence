/*
** Input.js
**
** Input.js is a WebComponent/Custom Element wrapper around the built-in
** HTML5 input element.. It has increased functionality, and built-in
** scoped styles....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


// imports...
import ValenceComponent from '../../Component'
// Get Loggers...
import { _log as log } from '../../Utilities/Loggers'
// Get classList modifiers....
import { addClass, removeClass } from '../../Utilities/DOM/classList'
// Get Component styles...
import inputStyles from './inputStyles'


// Input component's props....
const inputProps = {
  name: {
    type: String,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: null
  },
  labelMod: {
    type: String,
    default: 'top'
  },
  styles: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  autocomplete: {
    type: String,
    default: 'on'
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  form: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: 'md'
  },
  state: {
    type: [String, Boolean],
    default: null
  },
  value: {
    type: String,
    default: null
  },
  readonly: {
    type: Boolean,
    default: false
  },
  number: {
    type: Boolean,
    default: false
  },
  list: {
    type: Boolean,
    default: false
  }
}


class Input extends ValenceComponent {
// Ctor...
  constructor() {
    super()

// Create a shadow-root with a slot for user markup...
    let shadowRoot = this.shadowCaster({
      mode: 'open',
      slot: true
    })

// Create and append, an <input> el...
    let input = document.createElement('input'),
    label

// Pass props component declaration on to the inner input el...
    for (let key of Object.keys(this.props)) {
// Check all keys in input el object...
      if (key in input) {
// Pass on the ones that match...
// log(`${key} in input`, ['yellow', 'bold'])
        input[`${key}`] = this.props[`${key}`]
// Or if they are style properties...,
      } else if (key in input.style) {
// log(`${key} in input`, ['pink', 'bold'])
// Put them here...
        input.style[`${key}`] = this.props[`${key}`]
      }
    }

    if (this.props.label) {
// Create a span for text spatial manipulation....
      label = document.createElement('span')
      label.append(this.props.label)

// Check label modifier....
      if (this.props.labelMod) {
        addClass(label, `label-${this.props.labelMod}`)
        addClass(input, `label-${this.props.labelMod}`)
// Append label and input to root....
        if (this.props.labelMod === 'left' ||
            this.props.labelMod === 'top-right') {
          shadowRoot.appendChild(label)
          shadowRoot.appendChild(input)
        } else if (this.props.labelMod === 'right' ||
        this.props.labelMod.indexOf('bottom') !== -1) {
          shadowRoot.appendChild(input)
          shadowRoot.appendChild(label)
        }
      }
    }

// Apply styles to the component via the shadow-root....
    if (this.props.styles) {
      this.addStyles(
        shadowRoot,
        `${inputStyles}
         ${this.processStyles(this.props.styles)}`
      )
    } else {
      this.addStyles(shadowRoot, inputStyles)
    }

// Register the component's prop object...
    this.registerProps(inputProps)
  }

// Completing any component post-mounting work here...
  componentDidMount() {
// Update element props with user defined props....
    this.applyUserProps(this.observedAttributes)
  }

// Defining the props Callback to apply user-defined prop settings to the component...
  onChange(props) {
    log('&&&&&&&&&&&&&&&&&&&&&&onChange&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
    dir(this)
    dir(this.props)
    dir(props)
  }

}

export default Input
