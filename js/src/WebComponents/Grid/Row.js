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
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: flex-start;
  min-width: 100%;
  margin: 0 -15px;
  background: red;

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
  align: {
    type: String,
    default: 'center'
  },
  justify: {
    type: String,
    default: 'space-evenly'
  },

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
          background: yellow;
          margin: 0px;
          flex: 1;
        }

        @media (min-width: 768px) {
          ::slotted(col-),
          ::slotted(column-) {
            background: orange;
            margin-right: ${this.bumpers};
          }
        }`
    //
    // if (this.gutters) {
    //   let style = css`
    //     ::slotted(col-),
    //     ::slotted(column-) {
    //       background: green;
    //       margin-right: ${this.bumpers};
    //     }
    // }

// Insert the CSS literal into the component style sheet...
      this.insertRules(style, this._style)

    }
  }
}

export default Row
