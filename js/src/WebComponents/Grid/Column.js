/*
** Column.js
**
** Column Components will hold the content in the grid system....
**
** Eric James Foster, Fostware LLC, MIT License.
***/


import ValenceComponent from '../../Component'
// Get css ...
import { css } from '../../Flare/Flare'
// Get logger...
import { _log as log } from '../../Utilities/Loggers'
// Get classlist manipulation...
import {
  addClass,
  removeClass,
  listContains
 } from '../../Utilities/DOM/classList'
// Get validation...
import { isArray } from '../../Utilities/Is'
// Get event listener method...
import on from '../../Utilities/DOM/events'


// Component styles...
const columnStyles = css` {
    box-sizing: border-box;
    flex: 1;
    background: #6c757d;
    border: none;
    font-family: hermit;
    font-size: 22px;
    line-height: 66px;
    text-align: center;
  }
`

const userMarkupStyles = css`
  ::slotted(row-) {
    justify-content: space-evenly;
    align-items: stretch;
    flex-wrap: nowrap;
    background: blue;
  }
  ::slotted(column-) {
    background: blue;
  }`



const columnProps = {
  col: {
    type: Boolean,
  default: false
  },
  cols: {
    type: Number,
    default: null
  },
  xs: {
    type: [Boolean, String, Number],
  default: false
  },
  sm: {
    type: [Boolean, String, Number],
  default: false
  },
  md: {
    type: [Boolean, String, Number],
  default: false
  },
  lg: {
    type: [Boolean, String, Number],
  default: false
  },
  xl: {
    type: [Boolean, String, Number],
  default: false
  },
  flex: {
    type: Boolean,
    default: false
  },
  align: {
    type: String,
    default: null
  },
  border: {
    type: [String, Boolean],
    default: false
  },
  order: {
    type: Number,
    default: null
  },
  offset: {
    type: Number,
    default: null
  }
}

class Column extends ValenceComponent {
/*
*** Class variables ********
**************************/

// An instance property for this component's active col count....
  _cols_ = null
// An instance property for the component's style object...
  _style = null
// An instance prop holding screen size breakpoints for layout changes....
  _breakpoint = 0
// An instance prop holding the devices screen width...
  _screenWidth = null
// An instance prop holding the parent row's width...
  // _rowWidth = null


// Ctor....
  constructor() {
    super()

// Add shadow root and slot for user markup...
    let shadowRoot = this.shadowCaster()

// Attach styles to shadowRoot....
    this._style = this.addStyles(shadowRoot, columnStyles)
/// Register the component's prop object...
    this.registerProps(columnProps)
  }


// A privat Boolean instance prop, reflecting whether or not a _screenWidth breakpoint has been surpassed...
  get _beyondBreakpoint() {
    if (this._screenWidth > this._breakpoint) {
      return true
    } else {
      return false
    }
  }


// An internal method for setting _cols according with screen size....
  _set_cols(screenWidth) {
// Using a switch to determine col size, based on _screenWidth and props given...
    switch (true) {
      case screenWidth < 576:
        if (this.xs) {
          return this.xs
        } else if (this._beyondBreakpoint) {
          return this._breakCols
        } else {
          return this.cols
        }
        break
      case screenWidth < 768:
        if (this.sm) {
          return this.sm
        } else if (this._beyondBreakpoint) {
          return this._breakCols
        } else {
          return this.cols
        }
        break
      case screenWidth < 992:
        if (this.md) {
          return this.md
        } else if (this._beyondBreakpoint) {
          return this._breakCols
        } else {
          return this.cols
        }
        break
      case screenWidth < 1200:
        if (this.lg) {
          return this.lg
        } else if (this._beyondBreakpoint) {
          return this._breakCols
        } else {
          return this.cols
        }
        break
      case screenWidth > 1200:
        if (this.xl) {
          return this.xl
        } else if (this._beyondBreakpoint) {
          return this._breakCols
        } else {
          return this.cols
        }
        break
      default:
        return this.cols
    }
  }


// A method for determining col value to use in setting flex-basis, and setting it...
  setFlexBasis() {
// If we have a breakpoint...
    if (this._breakpoint) {
// Set cols...
      this._cols_ = this._set_cols(this._screenWidth)
//
    } else {
      this._cols_ = this.cols
    }
// Define basis...
    let flexBasis = (this._cols_ / 12) * 100
// Check flag to be sure flex Basis is not already set on another col....
    this.style.flex = `0 0 ${flexBasis}%`

    let colsCSS = css`  {
      position: relative;
    }`

// Insert rules into comp. sheet...
    this.insertRules(colsCSS, this._style)
  }


  componentDidMount() {
// Set _screenWidth...
    this._screenWidth = window.innerWidth
/// Update element props with user defined props....
    this.applyUserProps(this.props)

// Check cols prop, and adjust width accordingly...
    if (this.cols || this.md || this.sm || this.lg || this.xl) {
// Set breakpoint...
      let breakpointData = this.sm ? [576, this.sm] :
                         this.md ? [768, this.md] :
                         this.lg ? [992, this.lg] :
                        this.xl ? [1200, this.xl] : false

      this._breakpoint = breakpointData[0]
      this._breakCols  = breakpointData[1]

// If we have a breakpoint, see if we are beyond it to determine the cols amount to use for determining length...
         this.setFlexBasis()

//Dynamic readjustment of the column's width....
      on('resize', window, (e)=> {
// Reset _screenWidth...
        this._screenWidth = window.innerWidth

/// If we have a breakpoint, see if we are beyond it to determine the cols amount to use for determining length...
        this.setFlexBasis()
      })
    }

// Check placement prop...
    if (this.border) {
// border css...
      let borderCSS = css`
        &(.border) {
          box-shadow: 0px 0px 0px ${this.border} inset;
        }`

      this.addClass('border')
// Insert CSS into component style sheet...
      this.insertRules(borderCSS, this._style)

    }

/// Check for align prop...
    if (this.align) {
// `align-self` styles...
      let alignCSS = css` {
        align-self:${
          (this.align === 'start' || this.align === 'end')?
            ' flex-'
          : ' '
        }${this.align};
      }`

// Insert rules ...
      this.insertRules(alignCSS, this._style)
    }

// Check for order prop...
    if (this.order) {
      let orderCSS = css` {
        order: ${Number(this.order)};
      }`

      this.insertRules(orderCSS, this._style)
    }

/// Check for order prop...
    if (this.offset) {
      let offsetCSS = css` {
        margin-left: ${(this.offset / 12) * 100}%;
      }`

      this.insertRules(offsetCSS, this._style)

      log('#####################################-OFFSET-########################################', ['', ''])
      log(this.offset)
      log(`${(this.offset / 12) * 100}%`)
    }
  }
}

export default Column






































/// Class method for setting styles based on cols and breakpoint props...
//   _setColWidths() {
// // Set the width of the column...
//     if (this._screenWidth >= this._breakpoint) {
// // Remove wrapping functionality from the parent row...
//       addClass(this.parentNode, 'no-wrap')
// // Remove class 'wrap'...
//       if (this.parentNode.classList.contains('wrap')) {
//         removeClass(this.parentNode, 'wrap')
//       }
//       this.style.flex = this._cols
//       this.style.flexBasis = ''
//     } else {
// // Add column wrapping functionality...
//       addClass(this.parentNode, 'wrap')
// // Remove 'no-wrap' class...
//       if (this.parentNode.classList.contains('no-wrap')) {
//         removeClass(this.parentNode, 'no-wrap')
//       }
//       this.style.flex = this._cols
//       this.style.minWidth = ''
//     }
//   }
