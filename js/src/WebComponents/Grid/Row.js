/*
** Row.js
**
** Row.js is part of the Grid-Layout system. It is a horizontal section
** that holds between 1 and 12 Columns or Cols.
**
** Eric James Foster, Fostware LLC, MIT License.
***/

// Get Valence...
import ValenceComponent from '../../Component'
// Get Flare...
import { css } from '../../Flare/Flare'
// Get logger...
import { _log as log } from '../../Utilities/Loggers'
import { separateStyleRules } from '../../Utilities/helpers'
// Get classlist manipulation...
import { addClass, removeClass } from '../../Utilities/DOM/classList'
// Get Int parsing...
import getIntFromCSSString from '../Utilities/convertCSSUnitToRealNumber'


// Component styles...
const rowStyles = css` {
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  min-width: 100%;
  margin: 0px -15px;
  background: red;
  min-height: 120px;

  &(.align-top),
  &(.align-start) {
    align-content: flex-start;
  }

  &(.align-mid),
  &(.align-middle),
  &(.align-center) {
    align-content: center;
  }

  &(.align-bottom),
  &(.align-end) {
    align-content: flex-end;
  }

  &(.justify-start),
  &(.justify-beginning) {
    justify-content: flex-start;
  }

  &(.justify-mid),
  &(.justify-middle),
  &(.justify-center) {
    justify-content: center;
  }

  &(.justify-end),
  &(.justify-beginning) {
    justify-content: flex-start;
  }

  &(.justify-between),
  &(.justify-space-between) {
    justify-content: space-between;
  }

  &(.justify-around),
  &(.justify-space-around) {
    justify-content: space-around;
  }

  &(.justify-evenly),
  &(.justify-space-evenly) {
    justify-content: space-evenly;
  }
}
`

// Component props....
const rowProps = {
  gutters: {
    type: [Boolean, String],
    default: '15px'
  },
  bumpers: {
    type: [Boolean, String],
    default: null
  },
  pads: {
    type: [Boolean, String],
    default: false
  },
  borders: {
    type: [String, Boolean],
    default: false
  },
  align: {
    type: String,
    default: null
  },
  justify: {
    type: String,
    default: null
  }
}


// Component class....
class Row extends ValenceComponent {
// An instance variable holding a reference to the component's style sheet...
  _style = null

// ctor
  constructor() {
    super()

// Add shadow root and slot for user markup...
    let shadowRoot = this.shadowCaster()
/* Attach styles to shadowRoot.... Set the style object on an instance var
 for access to the style sheet ...*/
    this._style = this.addStyles(shadowRoot, rowStyles)

// Register the component's prop object...
    this.registerProps(rowProps)
  }


// Work to complete once component is mounted and props are applied....
  componentDidMount() {
// Update element props with user defined props....
    this.applyUserProps(this.props)

// Check for `gutters` prop, and set padding accordingly...
    if (this.gutters) {
// Remove unit from CSS string and parse int...
      let cssVal = getIntFromCSSString(this.gutters)

      // this.parentNode.style.padding = `15px ${this.gutters + 15}px`
      this.style.margin = `0px -${cssVal}px`
    } else {
      // this.parentNode.style.padding = '15px 15px'
      this.style.margin = `0px -30px`
    }

// Check for `bumpers`...
    if (this.bumpers) {
      let style = css`
        ::slotted(col-),
        ::slotted(column-) {
          background: green;
          margin-right: ${this.bumpers};
        }

        ::slotted(:last-child) {
          background: tomato;
          margin-right: 0px;
        }

        ::slotted(:last-child:not([cols])) {
          background: yellow;
          flex: 1 !important;
        }

        ::slotted([flex]) {
          background: yellow;
          flex: 1 !important;
        }`

// Insert the CSS literal into the component style sheet...
      this.insertRules(style, this._style)
    }

// If `pads` props is present, adjust padding as necessary...
    if (this.pads) {
      let padsCSS = css`
        ::slotted(col-),
        ::slotted(column-) {
          padding: 0px ${this.pads};
        }`

// Insert CSS into component style sheet...
      this.insertRules(padsCSS, this._style)
    }

// Check borders prop....
    if (this.borders) {
      borderCSS = css`
        ::slotted(col-),
        ::slotted(column-) {
          background: green;
          box-shadow: 0px 0px 0px ${this.borders} inset;
        }`

// Insert the CSS literal into the component style sheet...
      this.insertRules(borderCSS, this._style)
    }

// Check for align prop...
    if (this.align) {
      let alignCSS = css` {
        align-items:${this.align !== 'center' ? ' flex-' : ' '}${this.align};
      }`

      this.insertRules(alignCSS, this._style)
    }

// Check for align prop...
    if (this.justify) {
      let spaceRE = /around|between|evenly/,
      flexRE = /start|end/,
      justify

      switch (true) {
        case spaceRE.test(this.justify):
          justify = `space-${this.justify}`
          break
        case flexRE.test(this.justify):
          justify = `flex-${this.justify}`
          break
        default:
          justify = this.justify
      }

      let justifyCSS = css` {
        justify-content: ${justify};
      }`

      this.insertRules(justifyCSS, this._style)
    }

   //
    // if (this.gutters) {
    //   let style = css`
    //     ::slotted(col-),
    //     ::slotted(column-) {
    //       background: green;
    //       margin-right: ${this.bumpers};
    //     }
    // }
  }
}

export default Row
