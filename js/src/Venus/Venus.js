/*
** Venus.js
**
** Venus.js is essentially a styled-components clone in the way that
** Valence.js is a React.js clone. Venus simply provides a way to use
** the styled-components style api with Valence.js... It is very simple at
** this time and by no means encompasses all that styled-components
** has to offer.
**
** Eric James Foster, Fostware LLC, MIT License.
***/

/*
** Venus Features to incorporate
*********************************/
//TODO:[X] Ability to extend all element types.. 1
//TODO:[X] Ability to extend a component.. 2
//TODO:[ ] Sass/SCSS integration.. 4
//TODO:[ ] Ability to Inject global styles.. 5
//TODO:[ ] Media Queries.. 6
//TODO:[ ] Keyframe Animations.. 7
//TODO:[ ] SVG.. 8
//TODO:[X] Variables, functions (tagged template literals).. 3

import * as _ from '../Utilities/helpers'
import { Is } from '../Utilities/Is'
import { Component } from '../Component'
import { Node } from '../Form/Node'
import { Props } from '../Props/Props'
import { Events } from '../Events'

/* Venus Styling related libraries......*/
// import our extensible element constructors...
import { Input } from './Elements/Input'
import { Button } from './Elements/Button'
import { Paragraph } from './Elements/Paragraph'
import { H1 } from './Elements/H1'
import { H2 } from './Elements/H2'
import { H3 } from './Elements/H3'
import { H4 } from './Elements/H4'
import { H5 } from './Elements/H5'
import { H6 } from './Elements/H6'
import { Header } from './Elements/Header'
// import CSS class...
import { CSS } from './CSS'


// Globalize common helpers..
const dir = console.dir
const log = _.log

// Valence class dealing with JS context, css styling of components...
class Venus {

// Static member to hold component names...
  static _venusComponentNames = []
// Static member to hold element tag name to be created...
  static _elementTag = ''
// Static member to hold element tag name to be created...
  static _superTag = ''
// Static member to hold a unique ID for an extended component's parent...
  static _superId = ''
// Static member to hold a unique ID for a component...
  static _id = ''
// Static member object to hold props that will be passed on to the component element...
  static _propObj = {}
// A reference to an extended element's parent style literal...
  static _superTempLit = ``
// A reference to an extended element's parent props object...
  static _superProps = {}
// A boolean flag used to determine whether or not a component is a extension
// of another, or not....
  static _extend = false

// Number places for _numeral
  static _ones_ = 0
  static _tens_ = 0
  static _huns_ = 0
// A number that increments every time it is used. Aids in creating a unique identifier
// for components...
  static _numeral = -1
// A simple getter for static _numeral
  static get _incrementor() {
// Increment ones place first, then rest accordingly...
    if (Venus._ones_ < 9) {
      ++Venus._ones_
    } else {
      Venus._ones_ = 0
      if (Venus._tens_ < 9) {
        ++Venus._tens_
      } else {
        Venus._tens_ = 0
        if (Venus._huns_ < 9) {
          ++Venus._huns_
        } else {
          Venus._huns_ = 0
        }
      }
    }
// Assemble the numeral string...
    Venus._numeral = `${Venus._huns_}${Venus._tens_}${Venus._ones_}`
// Return..
    return Venus._numeral
  }

// The config options object.. with default assumptions...
  static assumptions = {
    shadowByDefault: true,
    kebabCase: true,
  }
// // Static member object for holding configuration options... Using a getter
// // and setter so that configuration objects may be combined.
//   static get config() {
// // Return the assumptions object..
//     return Venus.assumptions
//   }
//   static set config(obj) {
// // Take in a new assumptions obj, combine with existing, and store...
//     Venus.assumptions = _.combineObjects(Venus.assumptions, obj)
//   }
  static config(userAssumptions) {
    Venus.assumptions = _.combineObjects(Venus.assumptions, userAssumptions)
    return Venus.assumptions
  }

// Internal method closure for grabbing the variable name from a venus component
// declaration, for tagname representation in custom element creation...
  static _extractComponentTagName(xCaller, callerName, array) {
    let buildArray,
    typeShifter,
    type

/***********************************************************************************
** A function for shifting a type from the beginning of the component names array....
************************************************************************************/
    typeShifter =(array)=> {
      let obj = {}
// If we don't have an empty array....
      if (array.length > 0) {
// We can shift out a type....
        obj.type  = array.shift()
        obj.array = array
// Else, we have a new component and must rebuild...
      } else {
        obj.array = buildArray(xCaller)
        obj.type  = typeShifter(obj.array).type
      }
// Check the statelessComponents registry for a redundancy...
      if (window.statelessComponents.indexOf(obj.type) !== -1) {
        return typeShifter(obj.array)
      }
// If we reach this point, we are ready to return type...
      return obj
    }


/***************************************************************************
** A function for building out the venusComponentNames Array...
****************************************************************************/
    buildArray =(source)=> {
// Some vars...
      let callerTagName,
      extractEntryFromSource,
      componentNameArray = []

/*****************************************************************************
** A recursive function for extracting regExp matches from a bit of source code.
** The purpose is to programmatically extract variable names from venus component
** declarations for the purpose of custom element tag names.
******************************************************************************/
      extractEntryFromSource =(source)=> {
// Some vars...
        let sib,
        componentName

// Execute regexp... and single out result..
        sib = _.venusComponentNamesRE().exec(source)[1],
// Eliminate result from source code string, so that it won't be found again,
// and store in temp variable...
        source = source.replace(
          sib,
          ''
        )
        // log(source, 'red')
// Remove "(" from the string, and return a new one..
// Convert to tagname with kebab-case...
        componentName =  _.convertFuncNameToTagName(
          sib.replace('(', '')
        )
        //log('component tagname.', ['orange', 'bold']); log(componentName, ['yellow', 'bold'])
// Push component name into a local array..
        componentNameArray.push(componentName)
// Push also into a global collection....
        window.venusComponents.push(componentName.toLowerCase())
// If there are still matches in the caller source code, call function again,
// recursively, with the altered source...
        if (_.venusComponentNamesRE().test(source)) {
          return extractEntryFromSource(source)
        }
// return..
        // log('componentNameArray'); log(componentNameArray)
        return componentNameArray
      }


// If there are any matches in the caller's source code, start the process of building
// out the array...
      if (_.venusComponentNamesRE().test(source)) {
        array = extractEntryFromSource(source)
        //log('The Array', ['yellow', 'bold']); dir(array)
      }

// Also convert x.caller func name to tag-name to identify stateless components...
      callerTagName =  _.convertFuncNameToTagName(callerName)
      // log(callerTagName)
// Check global registry of stateless components for the caller's tag name. If it is
// present, we must rearrange the array...
      if (window.statelessComponents.indexOf(callerTagName) != -1) {
        // log('rearranged', ['orange', 'bold'])
// Rearrange the array...
// Remove the first item...
        let item = array.shift()
// Push it on to the end of the array..
        array.push(item)
        // log(array)
      }
// return array...
      return array
    }

// Build an array...
// If there are no component names in the array, lets's get some..
    if (array.length == 0) {
// Build array with x.caller source code...
      array = buildArray(xCaller)
    }

/* Call typeShifter function to shift out the bottom-most tagname in the list...
If it has already been instantiated, then it is not a venus component- Pop from
the list and move on... Return both the altered array and the shifted out type...*/
    let obj = typeShifter(array)
    // log('arrayLength'); log(obj.array.length, ['pink', 'bold']);dir(obj.array)
    // log('type', ['orange', 'bold']);dir(obj.type)
    Venus._venusComponentNames = obj.array
// Return type..
    return obj.type.toLowerCase()
  }



// A helper method for accessing the Venus class and defining it's components...
  static interfaceFormX(xCrName, xCr, elTag, tagTempLit, props1={}, props2={}) {
// extract var name..
      let tagName = Venus._extractComponentTagName(xCr, xCrName, Venus._venusComponentNames)
// Add props from venus to props object...
      props = {
        ...props2,
        ...props1
      }
        //log('Venus.propsobj');dir(props1); dir(props2); dir(props)
// Determine whether or not the component will utilize shadow dom by default...
      if (!Reflect.has(props, 'shadow')) {
        log('Venus.config.shadowByDefault', ['orange', 'bold'])
         dir(props1)
         dir(props2)
// If 'shadow' is not set in props, and if 'shadow' is 'on' by default...
        if (Venus.config.shadowByDefault) {
// Set the 'shadow' prop to true...
          props.shadow = true
        } else {
// Otherwise, set it to false..
          props.shadow = false
        }
      }
      CSS._superProps[props2.identity] = [tagName, props]
// If a venus component does not use shadow dom...
      if (!props.shadow) {
// it will not need to append anything to it's shadow root later on...
        props.noChild = true
// Define component and add Styles..
        Venus._defineComponent(tagName, props, elTag)
        CSS.addStyles(true, tagName, elTag, props, tagTempLit)
      } else {
// Define component and add Styles..
        Venus._defineComponent(
          tagName,
          props,
          elTag,
          CSS.addStyles(false, tagName, elTag, props, tagTempLit)
        )
      }
//
    return tagName
    }


// DEPRECATED: NOT CURRENTLY IN USE
  static _resetFlags() {
// Reset these, they were flipped for Component definition, and would typically
// be reset in the flow of component creation just after the call to doc.createEl(),
// but when creating components with Venus, element instantiation is delayed...
    window.useNativeShim = true
    window.HTMLElement   = window.HTMLElement_
  }


  static _defineComponent(name, props={}, el, template=false) {
// Declare element constructior var..
    let elemCtor,
// Create function will create the component element definition..
    create =()=> {
// Pulling a switch here, so that we can choose what type of constructor we'd
// like to use for our component...
      switch (el) {
        case 'div':
// Do CreateComponent..
          elemCtor = Component.createComponent(
            [name, template, el],
            props
          )
          break
        case 'input':
// Grab the extensible input element constructor..
          elemCtor = Input.createComponent(props, template)
          break
        case 'button':
// Grab the extensible input element constructor..
          elemCtor = Button.createComponent(props, template)
          break
        case 'p':
// Grab the extensible input element constructor..
          elemCtor = Paragraph.createComponent(props, template)
          break
        case 'h1':
// Grab the extensible input element constructor..
          elemCtor = H1.createComponent(props, template)
          break
        case 'h2':
// Grab the extensible input element constructor..
          elemCtor = H2.createComponent(props, template)
          break
        case 'h3':
// Grab the extensible input element constructor..
          elemCtor = H3.createComponent(props, template)
          break
        case 'h4':
// Grab the extensible input element constructor..
          elemCtor = H4.createComponent(props, template)
          break
        case 'h5':
// Grab the extensible input element constructor..
          elemCtor = H5.createComponent(props, template)
          break
        case 'h6':
// Grab the extensible input element constructor..
          elemCtor = H6.createComponent(props, template)
          break
        case 'header':
// Grab the extensible input element constructor..
          elemCtor = Header.createComponent(props, template)
          break
        case 'default':
          break
      }

// Process props...
      let processed = Node.processNodeProps(props, elemCtor)
// Add venusComponent property to venus component constructor...
      processed.ctor.prototype.venusComponent = true
// Define component...
      window.customElements.define(name, processed.ctor)
// Reset nativeShim flags..
      // Venus._resetFlags()
// Listen for element instantiation, grab element...
      Events.listen(name, (e)=> {
// Set props on new element..
        Props.set(e.detail.element, props)
        // props = {}
      })
    }

// Add isStatelessComponent flag to props for Component...
    props.isStatelessComponent = true

    if (webComponentsLoaded) {
// Do CreateComponent..
      create()
    } else {
// Listen for supporting files to be loaded, then create and define component...
      Events.listen('webComponentsLoaded', ()=> {
        create()
      })
    }
  }


// An internal method used for retrieving a css template literal..
  static _getTemplateLiteral(...tempLit) {
    let tmpl,
// Store ref functions with tempLit in an array
    array = [...tempLit]

    console.log(array)
//
  if (Venus._extend) {
/* An object holding the styles of the extended component, and also,
an array holding the broken up tempLit and ref functions... Once the Props
from component instantiation are merged with the existing prop object, the
resulting object will be injected into each ref function as they are called  so that
the css can be completed...*/
    tmpl = {
      extended: true,
      super: Venus._superTempLit,
      superEl: Venus._elementTag,
      superId: Venus._superId,
      array: array
    }
  } else {
    tmpl = {
      extended: false,
      array: array
    }
  }
    return {
      venus: true,
      taggedTempLit: tmpl,
      props: Venus._propObj,
      el: Venus._elementTag
    }
  }

// Component extend Static API Method
// A public method for extending user-defined venus components...
  static extend(component, attrs=false) {
// Filter component arg's props for id and classname properties, which can
// not, obviously, be shared with other elements/components...
    if ('id' in component.props) {
      delete component.props.id
    }
    if ('className' in component) {
      delete component.props.className
    }

// If arg is an object...
    if (attrs) {
// Let's first combine prop objects so as to override any common props...
      let props = _.combineObjects(component.props, attrs)
// Set the Venus component indicator...
      props.Venus = true
// Set a unique id on the component's props...
      props.identity = `venusX${component.el}${Venus._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Venus._propObj = props
    }
    Venus._superId      = component.props.identity
    Venus._superEl      = component.el
    Venus._superTempLit = component.taggedTempLit.array
    Venus._extend       = true

// Get css..
    return Venus._getTemplateLiteral
  }

// Div Static API Method
  static div(...arg) {
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Venus component indicator...
      props.Venus = true
// Set a unique id on the component's props...
      props.identity = `venusDiv${Venus._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Venus._propObj = props
      Venus._elementTag = 'div'
// Define component..
      return Venus._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
//
      _privateProps.Venus = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `venusDiv${Venus._incrementor}`
      return {
        venus: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'div'
      }
    }
  }

// Input Static API Method
  static input(...arg) {
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Venus component indicator...
      props.Venus = true
// Set a unique id on the component's props...
      props.identity = `venusInput${Venus._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Venus._propObj = props
      Venus._elementTag = 'input'
// Define component..
      return Venus._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Venus = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `venusInput${Venus._incrementor}`
// Add private props to return object and... return..
      return {
        venus: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'input'
      }
    }
  }

// Button Static API Method
  static button(...arg) {
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Venus component indicator...
      props.Venus = true
// Set a unique id on the component's props...
      props.identity = `venusButton${Venus._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Venus._propObj = props
      Venus._elementTag = 'button'
// Define component..
      return Venus._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Venus = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `venusButton${Venus._incrementor}`
// Add private props to return object and... return..
      return {
        venus: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'button'
      }
    }
  }

// P API Method
  static p(...arg) {
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Venus component indicator...
      props.Venus = true
// Set a unique id on the component's props...
      props.identity = `venusP${Venus._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Venus._propObj = props
      Venus._elementTag = 'p'
// Define component..
      return Venus._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Venus = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `venusP${Venus._incrementor}`
// Add private props to return object and... return..
      return {
        venus: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'p'
      }
    }
  }

// H1 API Method
  static h1(...arg) {
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Venus component indicator...
      props.Venus = true
// Set a unique id on the component's props...
      props.identity = `venusH1${Venus._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Venus._propObj = props
      Venus._elementTag = 'h1'
// Define component..
      return Venus._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Venus = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `venusH1${Venus._incrementor}`
// Add private props to return object and... return..
      return {
        venus: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'h1'
      }
    }
  }

// H6 API Function
  static h6(...arg) {
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Venus component indicator...
      props.Venus = true
// Set a unique id on the component's props...
      props.identity = `venusH6${Venus._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Venus._propObj = props
      Venus._elementTag = 'h6'
// Define component..
      return Venus._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Venus = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `venusH6${Venus._incrementor}`
// Add private props to return object and... return..
      return {
        venus: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'h6'
      }
    }
  }
}
export { Venus }
