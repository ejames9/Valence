/*
** CSS.js
**
** CSS.js performs CSS functionality within the flare library..
**
** Eric James Foster, Fostware LLC, MIT License.
***/

//OPTIMIZE: Rework process function so that there aren't so many checks for Is.interpolated()...

// Get helper funcs...
import * as _ from '../Utilities/helpers'
// Get type validation lib...
import { Is } from '../Utilities/Is'
// Get Keyframes class....
import { Keyframes } from './Keyframes'
// Grab tagged template literal interpolation code...
import _interpolationStation from './Utilities/_interpolationStation'
// Grab hash to string converter...
import _alphaStringFromHash from './Utilities/_alphaStringFromHash'
// Get murmurhash...
import _murmurHash from './Utilities/_murmurHash'
// Get stylis...
import stylis from 'stylis'

window.log = _.log
window.dir = console.dir

// Stylis configuration options...
stylis.set({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false,
});

class CSS {
// A static class property for holding an extended element's parent props....
  static _superProps = {}


// A static class property for holding a keyframes css template...
  static _template = ``
// A getter for the keyframes template...
  static get _keyframesCSS() {
    return CSS._template
  }
// A setter for the keyframes template...
  static set _keyframesCSS(obj) {
    CSS._template = `${obj.selector} {
      ${obj.code}
    }`
  }


// A property to hold the default stylesheet of the app...
  static _sheet = null
// A getter for _sheet...
  static get _styleSheet() {
// return the sheet!
    return CSS._sheet
  }
// A setter for _sheet... Setting sheet appends a CSS rule to it....
  static set _styleSheet(rule) {
// If there is no sheet, create one...
    if (!CSS._sheet) {
      CSS._sheet = CSS._createNewStyleSheet()
    }
// Insert given rule into stylesheet...
    CSS._sheet.insertRule(rule)
  }


// Class method for creating, appending and returning a new style sheet...
  static _createNewStyleSheet() {
// Create style tag..
    let style = document.createElement('style')
// Append a textNode to it. Apparently, this is a webkit hack? More research needed...
    style.appendChild(document.createTextNode(""))
// Append style tag to the head of the current doc's dom...
    document.head.appendChild(style)
//
    return style.sheet
  }

  //DEPRECATED: Not needed for now....
  // Internal Class method for dynamically inserting css rules into a given sheet
    static _insertCSS(sheet, selector, rules, index=false) {
      if ('insertRule' in sheet) {
        if (index) {
  // Use the sheet object method insertRule if available, otherwise, use addRule....
          sheet.insertRule(`${selector} { ${rules} }`, index)
        } else {
          sheet.insertRule(`${selector} { ${rules} }`)
        }
      } else if ('addRule' in sheet) {
        sheet.addRule(selector, rules, 1)
      }
    }


  // An internal static class method for creating usable css from a tagged template literal....
    static _createCSS(ttlObj, selector, props={}) {
      let css
/* If we are working on an extended component, execute interpolation functions,
bring in the parent's styles, and finally, process the resulting css with 'stylis'...
*/
// Is this an extended component? ....
      css = (ttlObj.extended)? (
/* If so, go ahead and execute the interpolation functions with superProps, ...
Also check if we have interpolations in the child component, and if so, execute them and
combine the resulting css blocks, and process with Stylis.
 */     stylis(
          selector,
        `${
            _interpolationStation(
              ttlObj.super,
              CSS._superProps[ttlObj.superId][1]
            )
          }
         ${
            _interpolationStation(
              ttlObj.array,
              props
            )
          }`
        )
/* If not.......*/
      ) : (
/* If not, combine the resulting
parent code block and with the untouched child block, and process with Stylis...
*/      stylis(
          selector,
        // Execute interpolations, with props, process with Stylis ....*/
          _interpolationStation(
            ttlObj.array,
            props
          )
        )
      )
      if (ttlObj.extended) {
        log('X Styles', 'tomato')
        log(css, 'tomato')
      }
  // Return css....
      return css
    }


/* A private method for appending a CSS rule or an array of CSS rules to the default stylesheet,
one by one.*/
  static _insertRules(rules) {
    if (Is.array(rules)) {
      rules.forEach((rule)=> {
  /* The _styleSheet setter will create a new sheet and append to a new style tag
  if necessary, then insert the given css..*/
        CSS._styleSheet = rule
      })
    } else {
      CSS._styleSheet = rules
    }
  }


// A Public method for inserting global styles into the stylesheet...
  static insertGlobal(obj) {
    let css = CSS._createCSS(obj, ' ')
// Separate and insert rules...
    CSS._insertRules(_.separateStyleRules(css))
  }


// An internal static method for first, creating a 10 digit hash from a string of
// css, then a 7 digit alphabetical string from the hash....
  static _createKeyframesName(array) {
// Create string from template array...
    let string = array[0].join('')
                       .replace(/\s|\n/g, '')
// Create and return unique id...
    return _alphaStringFromHash(_murmurHash(string))
  }


/* an instance constructor for the keyframes class.... Returns the instance and
inserts the rules into the stylesheet...*/
  static keyframes(obj) {
// Create a css string from the objects array... and remove whitespace...
    let css,
// Create hash from string, and then a name from the hash....
    name = CSS._createKeyframesName((obj.array)),

// Create some usable css ...
    object = {}
    object.selector = `@keyframes ${name}`
    object.code = obj.array.join('')
// Use the computed keyframes property to generate our animation code...
    CSS._keyframesCSS = object
// Insert the rules...
    css = CSS._keyframesCSS
    log('css', ['red', 'bold'])
     log(css)
    CSS._insertRules(css)
// Return a keframes instance....
    return new Keyframes(name, css)
  }



/* Class method dealing with adding styles to the component. If a tag
 is present in the arguments, the style is appended to the head of the doc,
otherwise, it is appended to the shadow root...down the line....*/
  static addStyles(appendStyle, cTag, eTag, props, tagTempLit) {
    // log('tagTempLit', ['orange', 'bold'])
    //  dir(tagTempLit)
// Declare vars...
    let sheet,
    selector = `[flareId=${props.flareId}]`,
    styleTag = (eTag === 'div')? selector : `${selector} ${eTag}`,
    css
// If we are not appending style to a shadow root...
    if (appendStyle) {
// Process the css...
      css = CSS._createCSS(tagTempLit, styleTag, props)

// Split rules into an array. Insert into style sheet...
      CSS._insertRules(_.separateStyleRules(css))
    } else {
      css = (eTag === 'div')?
        CSS._createCSS(tagTempLit, ':host', props)
      :
        CSS._createCSS(tagTempLit, `:host ${eTag}`, props)
// Return function that returns style related html...
      return ()=>
        <style>{css}</style>
    }
  }
}

export { CSS }
