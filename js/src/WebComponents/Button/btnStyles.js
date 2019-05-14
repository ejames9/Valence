/*
** btnStyles.js
**
** btnStyles.js contains the css template literal for the Button
** WebComponent...
**
** Eric James Foster, Fostware LLC, MIT License.
***/
import { css } from '../../Flare/Flare'

// Color variables....
const primary = '#3263cd'
const primaryHover = '#2155cd'
const primaryActive = '#1144cf'
const primaryFocus = '#4486cd'
const secondary = '#6c757d'
const secondaryHover = '#5b646b'
const secondaryActive = '#4a535a'
const secondaryFocus = '#8e979f'
const success = '#5a9400'
const successHover = '#499411'
const successActive = '#38a512'
const successFocus = '#8dc733'
const danger = '#dc3545'
const dangerHover = '#dc2434'
const dangerActive = '#dd1323'
const dangerFocus = '#fe5767'
const warning = '#f8b102'
const warningHover = '#e7a001'
const warningActive = '#d69000'
const warningFocus = '#fce546'
const info = '#16a2b8'
const infoHover = '#05a2a6'
const infoActive = '#02a184'
const infoFocus = '#5ae6fb'
const light = '#f8f9fa'
const lightHover = '#e7e8e9'
const lightActive = '#d6d7d8'
const lightFocus = '#ffffff'
const dark = '#343a40'
const darkHover = '#313830'
const darkActive = '#2d352d'
const darkFocus = '#565656'
const link = '#3263cd'
const linkHover = '#2155cd'
const linkActive = '#1144cf'
const linkFocus = '#4486cd'

// Preconfigured styles for the button....
const btnStyles = css` {
      display: inline-block;
      font-family: sf mono;
      font-size: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      color: white;
      background: transparent;
      border: 1px solid white;
      border-radius: 5px;
      padding: 12px;
      margin: 5px;

      &(:hover) {
        background: tomato;
        text-decoration: none;
      }

      &.focus {
        border: 1px solid tomato;
        color: tomato;
        background: white;
      }

      &(:active) {
        border: 1px solid tomato;
        color: tomato;
        background: white;
      }

      &(.disabled),
      &(:disabled) {
        opacity: .4;
        pointer-events: none;
      }

      &(.btn-block) {
        display: block;
        width: 100%;

        + .btn-block {
          margin-top: 20px;
        }
      }

      &(.btn-lg) {
        font-size: 24px;
        padding: 20px;
      }
      &(.btn-sm) {
        font-size: 16px;
        padding: 5px;
        border-radius: 3px;
      }

      &(.primary) {
        background: ${primary};
        color: white;
        border: 1px solid ${primary};
      }
      &(.primary:hover) {
        box-shadow: 10px 10px 20px 20px ${primaryHover} inset;
      }
      &(.primary:active) {
        box-shadow: 10px 10px 20px 20px ${primaryActive} inset;
      }
      &(.primary:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${primaryFocus};
      }

      &(.outline-primary) {
        background: transparent;
        color: ${primary};
        border: 1px solid ${primary};
      }
      &(.outline-primary:hover) {
        background: ${primaryHover};
        color: white;
        box-shadow: 10px 10px 20px 20px ${primaryHover} inset;
      }
      &(.outline-primary:active) {
        color: white;
        box-shadow: 10px 10px 20px 20px ${primaryActive} inset;
      }
      &(.outline-primary:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${primaryFocus};
      }

      &(.secondary) {
        background: ${secondary};
        color: white;
        border: 1px solid ${secondary};
      }
      &(.secondary:hover) {
        color: white;
        box-shadow: 10px 10px 20px 20px ${secondaryHover} inset;
      }
      &(.secondary:active) {
        color: white;
        box-shadow: 10px 10px 20px 20px ${secondaryActive} inset;
      }
      &(.secondary:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${secondaryFocus};
      }

      &(.outline-secondary) {
        background: transparent;
        color: ${secondary};
        border: 1px solid ${secondary};
      }
      &(.outline-secondary:hover) {
        background: ${secondaryHover};
        color: white;
        box-shadow: 10px 10px 20px 20px ${secondaryHover} inset;
      }
      &(.outline-secondary:active) {
        color: white;
        box-shadow: 10px 10px 20px 20px ${secondaryActive} inset;
      }
      &(.outline-secondary:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${secondaryFocus};
      }

      &(.success) {
        background: ${success};
        color: white;
        border: 1px solid ${success};
      }
      &(.success:hover) {
        box-shadow: 10px 10px 20px 20px ${successHover} inset;
      }
      &(.success:active) {
        box-shadow: 10px 10px 20px 20px ${successActive} inset;
      }
      &(.success:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${successFocus};
      }

      &(.outline-success) {
        background: transparent;
        color: ${success};
        border: 1px solid ${success};
      }
      &(.outline-success:hover) {
        background: ${successHover};
        color: white;
        box-shadow: 10px 10px 20px 20px ${successHover} inset;
      }
      &(.outline-success:active) {
        color: white;
        box-shadow: 10px 10px 20px 20px ${successActive} inset;
      }
      &(.outline-success:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${successFocus};
      }

      &(.danger) {
        background: ${danger};
        color: white;
        border: 1px solid ${danger};
      }
      &(.danger:hover) {
        box-shadow: 10px 10px 20px 20px ${dangerHover} inset;
      }
      &(.danger:active) {
        box-shadow: 10px 10px 20px 20px ${dangerActive} inset;
      }
      &(.danger:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${dangerFocus};
      }

      &(.outline-danger) {
        background: transparent;
        color: ${danger};
        border: 1px solid ${danger};
      }
      &(.outline-danger:hover) {
        background: ${dangerHover};
        color: white;
        box-shadow: 10px 10px 20px 20px ${dangerHover} inset;
      }
      &(.outline-danger:active) {
        color: white;
        box-shadow: 10px 10px 20px 20px ${dangerActive} inset;
      }
      &(.outline-danger:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${dangerFocus};
      }

      &(.warning) {
        background: ${warning};
        color: white;
        border: 1px solid ${warning};
      }
      &(.warning:hover) {
        box-shadow: 10px 10px 20px 20px ${warningHover} inset;
      }
      &(.warning:active) {
        box-shadow: 10px 10px 20px 20px ${warningActive} inset;
      }
      &(.warning:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${warningFocus};
      }

      &(.outline-warning) {
        background: transparent;
        color: ${warning};
        border: 1px solid ${warning};
      }
      &(.outline-warning:hover) {
        background: ${warningHover};
        color: black;
        box-shadow: 10px 10px 20px 20px ${warningHover} inset;
      }
      &(.outline-warning:active) {
        color: black;
        box-shadow: 10px 10px 20px 20px ${warningActive} inset;
      }
      &(.outline-warning:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${warningFocus};
      }

      &(.info) {
        background: ${info};
        color: white;
        border: 1px solid ${info};
      }
      &(.info:hover) {
        box-shadow: 10px 10px 20px 20px ${infoHover} inset;
      }
      &(.info:active) {
        box-shadow: 10px 10px 20px 20px ${infoActive} inset;
      }
      &(.info:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${infoFocus};
      }

      &(.outline-info) {
        background: transparent;
        color: ${info};
        border: 1px solid ${info};
      }
      &(.outline-info:hover) {
        background: ${infoHover};
        color: white;
        box-shadow: 10px 10px 20px 20px ${infoHover} inset;
      }
      &(.outline-info:active) {
        color: white;
        box-shadow: 10px 10px 20px 20px ${infoActive} inset;
      }
      &(.outline-info:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${infoFocus};
      }

      &(.light) {
        background: ${light};
        color: black;
        border: 1px solid ${light};
      }
      &(.light:hover) {
        box-shadow: 10px 10px 20px 20px ${lightHover} inset;
      }
      &(.light:active) {
        box-shadow: 10px 10px 20px 20px ${lightActive} inset;
      }
      &(.light:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${darkFocus};
      }

      &(.outline-light) {
        background: transparent;
        color: ${light};
        border: 1px solid ${light};
      }
      &(.outline-light:hover) {
        background: ${lightHover};
        color: black;
        box-shadow: 10px 10px 20px 20px ${lightHover} inset;
      }
      &(.outline-light:active) {
        color: black;
        box-shadow: 10px 10px 20px 20px ${lightActive} inset;
      }
      &(.outline-light:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${darkFocus};
      }

      &(.dark) {
        background: ${dark};
        color: white;
        border: 1px solid ${dark};
      }
      &(.dark:hover) {
        box-shadow: 10px 10px 20px 20px ${darkHover} inset;
      }
      &(.dark:active) {
        box-shadow: 10px 10px 20px 20px ${darkActive} inset;
      }
      &(.dark:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${darkFocus};
      }

      &(.outline-dark) {
        background: transparent;
        color: ${dark};
        border: 1px solid ${dark};
      }
      &(.outline-dark:hover) {
        background: ${darkHover};
        color: white;
        box-shadow: 10px 10px 20px 20px ${darkHover} inset;
      }
      &(.outline-dark:active) {
        color: white;
        box-shadow: 10px 10px 20px 20px ${darkActive} inset;
      }
      &(.outline-dark:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${darkFocus};
      }

      &(.link) {
        background: transparent;
        color: ${link};
        border: 1px solid transparent;
      }
      &(.link:hover) {
        color: ${linkHover};
      }
      &(.link:active) {
        color: ${linkActive};
      }
      &(.link:focus) {
        outline: none !important;
        box-shadow: 0px 0px 2px 3px ${linkFocus};
      }

    }

    input[type="submit"],
    input[type="reset"],
    input[type="button"] {
      &.btn-block {
        width: 100%;
      }
    }
`


export default btnStyles
