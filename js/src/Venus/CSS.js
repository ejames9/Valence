/*
** CSS.js
**
** CSS.js performs CSS functionality within the Venus library..
**
** Eric James Foster, Fostware LLC, MIT License.
***/

import * as _ from '../Utilities/helpers'
import { Is } from '../Utilities/Is'


class CSS {
// A static class property for holding an extended element's parent props....
  static _superProps = {}

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

/* Class method dealing with adding styles to the component. If a tag
 is present in the arguments, the style is appended to the head of the doc,
otherwise, it is appended to the shadow root...down the line....*/
  static addStyles(appendStyle, cTag, eTag, props, tagTempLit) {
// Declare var...
// Styles template...
    let sheet,
    styles,
    styleTag = (eTag === 'div')? cTag : `${cTag} ${eTag}`,
    tempLit

// if we have some interpolation functions in the true array
    if (Is.interpolated(tagTempLit.array)) {
      tempLit = _.activateFunctionInterpolations(tagTempLit.array, props)
    } else {
      tempLit = tagTempLit.array[0]
    }
// If we are working on an extended component, bring in the parent's styles...
    if (tagTempLit.extended) {
      tempLit = (Is.interpolated(tagTempLit.super))?
                  `${_.activateFunctionInterpolations(tagTempLit.super, CSS._superProps[tagTempLit.superId][1])}
                   ${tempLit}`
                :
                  `${tagTempLit.super[0]}
                   ${tempLit}`
    }

// If we are not appending style to a shadow root...
    if (appendStyle) {
// Get new stylesheet and attach to dom...
      sheet = CSS._createNewStyleSheet()

// Insert the Component css into new style sheet...
      CSS._insertCSS(sheet, styleTag, tempLit)
    } else {
      styles = (eTag === 'div')?
      `:host {
         ${tempLit}
       }`
          :
      `:host ${eTag} {
         ${tempLit}
       }`

// Return function that returns style related html...
      return ()=>
        <style>{styles}</style>
    }
  }
}

export { CSS }
