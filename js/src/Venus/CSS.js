/*
** CSS.js
**
** CSS.js performs CSS functionality within the Venus library..
**
** Eric James Foster, Fostware LLC, MIT License.
***/

import * as _ from '../Utilities/helpers'
import { Is } from '../Utilities/Is'
import stylis from 'stylis'

window.log = _.log
window.dir = console.dir

stylis.set({
  compress: true
})

class CSS {
// A static class property for holding an extended element's parent props....
  static _superProps = {}


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

// A private method for appending an array of CSS rules to the default stylesheet,
// one by one.
  static _insertRules(array) {
    array.forEach((rule)=> {
/* The _styleSheet setter will create a new sheet and append to a new style tag
if necessary, then insert the given css..*/
      CSS._styleSheet = rule
    })
  }


// A Public method for inserting global styles into the stylesheet...
  static insertGlobal(ttlArray) {
    let css = (Is.interpolated(ttlArray))?
      stylis(
        '',
        _.applyInterpolations(ttlArray)
      )
    :
      stylis(
        '',
        ttlArray[0].join('')
      )

    CSS._insertRules(_.separateStyleRules(css))

    log('CSS._styleSheet', ['purple', 'bold'])
     log(CSS._styleSheet)
     log(ttlArray[0].join(''))
  }


//DEPRECATED: NOT NEEDED FOR NOW...
// Public class for creating an HTML style tag loaded with styles...
  static loadStyleTemplate(tempLit) {
    let html = `<style>${tempLit}</style>`,
    tmpl
// Create a template el..
    tmpl = document.createElement('template')
// Set the innerHTML..
    tmpl.innerHTML = html
    return tmpl
  }


// A private method for processing the given CSS literals (Activation of
// interpolation functions and preprocessing with stylis) and returning a
// final product, ready for the stylesheet...
  static _process(ttl, props, cTag) {
    let css
/* If we are working on an extended component, execute interpolation functions,
bring in the parent's styles, and finally, process the resulting css with 'stylis'...
Having some fun with tertiary expressions here..*/
// Is this an extended component? ....
     // log('Is.interpolated(ttl.super[0][0]', ['tomato', 'bold'])
     // log(Is.interpolated(ttl.super[0][0])
    (ttl.extended)? (
// If so, first let's check if we have interpolations in the parent to deal with...
      css = (Is.interpolated(ttl.super))? (
/* If so, go ahead and execute the interpolation functions with superProps, ...
Also check if we have interpolations in the child component, and if so, execute them and
combine the resulting css blocks, and process with Stylis. If not, combine the resulting
parent code block and with the untouched child block, and process with Stylis...
 */
        stylis(
          cTag,
        `${_.applyInterpolations(ttl.super, CSS._superProps[ttl.superId][1])}
         ${
            (Is.interpolated(ttl.array))? (
              _.applyInterpolations(ttl.array, props)
            ) : (
             ttl.array
            )
          }`
        )
/* If not.......*/
      ) : (
/* Check first if we have interpolations in the child, either way, combine the result
with the untouched parent code block, and process with Stylis.
*/
        stylis(
          cTag,
        `${ttl.super[0][0]}
         ${
            (Is.interpolated(ttl.array))? (
              _.applyInterpolations(ttl.array, props)
            ) : (
             ttl.array
            )
          }`
        )
      )
/* Not extended.....*/
    ) : (
// Check for interpolations....*/
      css = (Is.interpolated(ttl.array))? (

        stylis(
          cTag,
// Execute interpolations, with props, process with Stylis ....*/
          _.applyInterpolations(
            ttl.array,
            props
          )
        )
      ) : (
// Otherwise, run the untouched styles through Stylis...*/
        stylis(cTag, ttl.array[0][0])
      )
    )
// return completed CSS ...
    return css
  }


/* Class method dealing with adding styles to the component. If a tag
 is present in the arguments, the style is appended to the head of the doc,
otherwise, it is appended to the shadow root...down the line....*/
  static addStyles(appendStyle, cTag, eTag, props, tagTempLit) {
// Declare vars...
    let sheet,
    styleTag = (eTag === 'div')? cTag : `${cTag} ${eTag}`,
    css
// If we are not appending style to a shadow root...
    if (appendStyle) {
// Process the css...
      css = CSS._process(tagTempLit, props, styleTag)

// Split rules into an array. Insert into style sheet...
      CSS._insertRules(_.separateStyleRules(css))
    } else {
      css = (eTag === 'div')?
        CSS._process(tagTempLit, props, ':host')
      :
        CSS._process(tagTempLit, props, `:host ${eTag}`)
// Return function that returns style related html...
      return ()=>
        <style>{css}</style>
    }
  }
}

export { CSS }
