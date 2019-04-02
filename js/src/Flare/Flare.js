/*
** Flare.js
**
** Flare.js is essentially a styled-components clone in the way that
** Valence.js is a React.js clone. Flare simply provides a way to use
** the styled-components style api with Valence.js... It is very simple at
** this time and by no means encompasses all that styled-components
** has to offer.
**
** Eric James Foster, Fostware LLC, MIT License.
***/


/* TODO's **********************************

** TODO-MACRO Flare Features to incorporate
********************************************/
//TODO:[X] Ability to extend all element types.. 1
//TODO:[X] Ability to extend a component.. 2
//TODO:[X] Stylis integration.. 4
//TODO:[X] Ability to Inject global styles.. 5
//TODO:[X] Keyframe Animations.. 7
//TODO:[X] Variables, functions (tagged template literals).. 3
//TODO:[ ] Media Queries.. 6
//TODO:[ ] Incorporate SVG.. 8

/*
** TODO-MICRO Flare work to complete
********************************************/
//TODO:[X] Finish work on all element component classes...
//TODO:[ ] Move from static class structure to singleton structure...
//TODO:[ ]
//TODO:[ ]
//TODO:[ ]
//TODO:[ ]
//TODO:[ ]

/*
** TODO-RELATED spin-off projects to do....
********************************************/
//TODO:[ ] Replicator library...
//TODO:[ ] DeeplicateObject library...
//TODO:[ ]
//TODO:[ ]
//TODO:[ ]
//TODO:[ ]


// Grab utilities...
import * as _ from '../Utilities/helpers'
// Get value validation...
import { Is } from '../Utilities/Is'
// Get Component Class...
import { Component } from '../Component'
// Get Node and Props classes...
import { Node } from '../Form/Node'
import { Props } from '../Props/Props'
// Get Events....
import { Events } from '../Events'
// import CSS class...
import { CSS } from './CSS'
// Get the tagName array builder function....
import _buildArray from './Utilities/_arrayBuilder'
// Get the tagName array builder function....
// import _acquireComponentTagName from './Utilities/_acquireComponentTagName'

/* Flare Styling related libraries......*/
// import our extensible element constructors...
import { Area } from './Elements/Area'
import { Aside } from './Elements/Aside'
import { Button } from './Elements/Button'
import { Col } from './Elements/Col'
import { Colgroup } from './Elements/Colgroup'
import { Footer } from './Elements/Footer'
import { H1 } from './Elements/H1'
import { H2 } from './Elements/H2'
import { H3 } from './Elements/H3'
import { H4 } from './Elements/H4'
import { H5 } from './Elements/H5'
import { H6 } from './Elements/H6'
import { Header } from './Elements/Header'
import { Input } from './Elements/Input'
import { Paragraph } from './Elements/Paragraph'
import { Section } from './Elements/Section'
import { Span } from './Elements/Span'
import { Table } from './Elements/Table'
import { Textarea } from './Elements/Textarea'


// Globalize common helpers..
const dir = console.dir
const log = _.log

// Valence class dealing with JS context, css styling of components...
class Flare {

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

// static _flareNames = []
// Static member to hold arrays awaiting to shift out their tags (inner parent components)....
  static _tagNameArrayQueue = []
// Static member to hold the main component name array ...
  static _flareComponentNames = [[]]

// Getter for the component tagName queue...
  static get _tagQueue() {
// If we have an array in the queue, return it, otherwise return the main array....
    if (Flare._tagNameArrayQueue.length > 0) {
      if (Flare._tagNameArrayQueue[0].length < 1) {
        Flare._tagNameArrayQueue.shift()
        return Flare._flareComponentNames.shift()
      } else {
        return Flare._tagNameArrayQueue.shift()
      }
    } else {
      return Flare._flareComponentNames.shift()
    }
  }
// Setter for the tag queue...
  static set _tagQueue(array) {
/* If the main array is empty, pass the argument to it, otherwise, shift the argument
 in to the beginning of the queue array...*/
    if (Flare._flareComponentNames.length === 0) {
      Flare._flareComponentNames.unshift(array)
    } else {
      Flare._tagNameArrayQueue.unshift(array)
    }
  }

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
    if (Flare._ones_ < 9) {
      ++Flare._ones_
    } else {
      Flare._ones_ = 0
      if (Flare._tens_ < 9) {
        ++Flare._tens_
      } else {
        Flare._tens_ = 0
        if (Flare._huns_ < 9) {
          ++Flare._huns_
        } else {
          Flare._huns_ = 0
        }
      }
    }
// Assemble the numeral string...
    Flare._numeral = `${Flare._huns_}${Flare._tens_}${Flare._ones_}`
// Return..
    return Flare._numeral
  }

// The config options object.. with default assumptions...
  static assumptions = {
    shadowByDefault: true,
    kebabCase: true,
  }
// A public helper method for setting Flare assumptions, config options...
  static config(userAssumptions) {
    Flare.assumptions = _.combineObjects(Flare.assumptions, userAssumptions)
    return Flare.assumptions
  }


// Internal method closure for grabbing the variable name from a flare component
// declaration, for tagname representation in custom element creation...
  static _acquireComponentTagName(xCaller, callerName, array) {
    let tagShifter,
    tagTwister,
    tagArray,
    tag

    // log("I've been passed in", ['pink', 'bold']);log(array)
// A very simple function for moving the first item of an array to the end.
    tagTwister =(ra)=>  {
      ra.push(ra.shift())
      return ra
    }

// A function for shifting a tag from the beginning of the component names array....
    tagShifter =(ra)=> {
      let array = [],
      object,
      obj = {}
// If we don't have an empty array....
      if (ra.length > 0) {
// We can shift out a tag....
        obj.tag  = ra.shift()
        // log(`tag: ${obj.tag}`)
// Determine whether or not the array item is a tag or new array....
        if (Is.array(obj.tag)) {
          // log('tag is array', ['green', 'bold']);dir(obj.tag)
// Put the original array back, so we can move on to the new one...
          Flare._tagQueue = ra
// Shift the first tagname to the end....
          array = tagTwister(obj.tag)
// Shift out the first tagname....
          return tagShifter(array)
        } else {
          obj.array = ra
        }
// Else, we have a new component and must rebuild...
      } else {
        // log('Rebuilding', ['green', 'bold'])
        obj.array = _buildArray(xCaller, callerName)
        return tagShifter(obj.array)
      }
// Check the statelessComponents registry for a redundancy...
      if (window.statelessComponents.indexOf(obj.tag) !== -1) {
        // log('Registry', ['orange', 'bold']);log(obj.tag)
        return tagShifter(obj.array)
      }
// If we reach this point, we are ready to return tag...
      // log('return obj', ['yellow', 'bold']);dir(obj)
      return obj
    }

// If there are no component names in the array, lets's get some..
    if (array.length == 0) {
// Build array with x.caller source code, and twist it....
      array = _buildArray(xCaller, callerName)
      // log('building', ['red', 'bold']);dir(array);log(array.length)
    }

/* Call tagShifter function to shift out the bottom-most tagname in the list...
If it has already been instantiated, then it is not a flare component- Pop from
the list and move on... Return both the altered array and the shifted out tag...*/
    let obj = tagShifter(array)
    // log('tag', ['orange', 'bold']);dir(obj.tag);
    Flare._tagQueue = obj.array
// Return tag..
    return obj.tag.toLowerCase()
  }


// A helper method for accessing the Flare class and defining it's components...
  static interfaceValenceX(xCrName, xCr, elTag, tagTempLit, props1={}, props2={}) {
// extract var name..
    let tagName = Flare._acquireComponentTagName(xCr, xCrName, Flare._tagQueue)
      // log(`Tag name is: ${tagName}`, ['orange', 'bold'])
// Add props from flare to props object...
      props = {
        ...props2,
        ...props1
      }
        // log('Flare.propsobj');dir(props1); dir(props2); dir(props)
// Determine whether or not the component will utilize shadow dom by default...
      if (!Reflect.has(props, 'shadow')) {
// If 'shadow' is not set in props, and if 'shadow' is 'on' by default...
        if (Flare.config.shadowByDefault) {
// Set the 'shadow' prop to true...
          props.shadow = true
        } else {
// Otherwise, set it to false..
          props.shadow = false
        }
      }

      CSS._superProps[props2.identity] = [tagName, props]
// If a flare component does not use shadow dom...
      if (!props.shadow) {
// it will not need to append anything to it's shadow root later on...
        props.noChild = true
// Define component and add Styles..
        Flare._defineComponent(tagName, props, elTag)
        CSS.addStyles(true, tagName, elTag, props, tagTempLit)
      } else {
// Define component and add Styles..
        Flare._defineComponent(
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
// but when creating components with Flare, element instantiation is delayed...
    window.useNativeShim = true
    window.HTMLElement   = window.HTMLElement_
  }

// Static method used for defining Flare components...
  static _defineComponent(name, props={}, el, template=false) {
    // log('Looka Here', ['red', 'bold']);log(`name is: ${name}`);log(`el is: ${el}`);dir(props)
// Declare element constructior var..
    let elemCtor,
// Create function will create the component element definition..
    create =()=> {
// Pulling a switch here, so that we can choose what type of constructor we'd
// like to use for our component...
      switch (el) {
        case 'area':
// Grab the extensible area element constructor..
          elemCtor = Area.createComponent(props, template)
          break
        case 'aside':
// Grab the extensible aside element constructor..
          elemCtor = Aside.createComponent(props, template)
          break
        case 'button':
// Grab the extensible input element constructor..
          elemCtor = Button.createComponent(props, template)
          break
        case 'col':
// Grab the extensible col element constructor..
          elemCtor = Col.createComponent(props, template)
          break
        case 'colgroup':
// Grab the extensible colgroup element constructor..
          elemCtor = Colgroup.createComponent(props, template)
          break
        case 'div':
// Do CreateComponent..
          elemCtor = Component.createComponent(
            [name, template, el],
            props
          )
          break
        case 'footer':
// Grab the extensible footer element constructor..
          elemCtor = Footer.createComponent(props, template)
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
        case 'input':
// Grab the extensible input element constructor..
          elemCtor = Input.createComponent(props, template)
          break
        case 'p':
// Grab the extensible input element constructor..
          elemCtor = Paragraph.createComponent(props, template)
          break
        case 'section':
// Grab the extensible section element constructor..
          elemCtor = Section.createComponent(props, template)
          break
        case 'span':
// Grab the extensible span element constructor..
          elemCtor = Span.createComponent(props, template)
          break
        case 'table':
// Grab the extensible table element constructor..
          elemCtor = Table.createComponent(props, template)
          break
        case 'textarea':
// Grab the extensible textarea element constructor..
          elemCtor = Textarea.createComponent(props, template)
          break
        case 'default':
          break
      }

// Process props...
      let processed = Node.processNodeProps(props, elemCtor)
// Add flareComponent property to flare component constructor...
      processed.ctor.prototype.flareComponent = true
// Define component...
      window.customElements.define(name, processed.ctor)
// Reset nativeShim flags..
      // Flare._resetFlags()
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
      Events.listen('rootComponentMounted', ()=> {
        create()
      })
    }
  }


// A static public method for instantiating a keyframes instance for css animation...
  static keyframes(...tempLit) {
    let obj = {}
    obj.array = [...tempLit]
    obj.extended = false
// Send the ttLiteral object over to CSS for processing and inserting into the stylesheet...
    return CSS.keyframes(obj)
  }


//A static public method for inserting global rules into the styleSheet...
  static global(...tempLit) {
    let obj = {}
    obj.array = [...tempLit]
    obj.extended = false
// Send the ttLiteral object over to CSS for processing and inserting into the stylesheet...
    CSS.insertGlobal(obj)
  }


// An internal method used for retrieving a css template literal..
  static _getTemplateLiteral(...tempLit) {
    let tmpl,
// Store ref functions with tempLit in an array
    array = [...tempLit]

    // log('array', ['orange', 'bold'])
    //  dir(array)

    console.log(array)
//
    if (Flare._extend) {
/* An object holding the styles of the extended component, and also,
an array holding the broken up tempLit and ref functions... Once the Props
from component instantiation are merged with the existing prop object, the
resulting object will be injected into each ref function as they are called  so that
the css can be completed...*/
      tmpl = {
        extended: true,
        super: Flare._superTempLit,
        superEl: Flare._superTag,
        superId: Flare._superId,
        array: array
      }
    } else {
      tmpl = {
        extended: false,
        array: array
      }
    }
    return {
      flare: true,
      taggedTempLit: tmpl,
      props: Flare._propObj,
      el: (tmpl.extended)? Flare._superTag : Flare._elementTag
    }
  }


// Component extend Static API Method
// A public method for extending user-defined flare components...
  static extend(component, attrs=false) {
// Get a copy of the component so that we don't delete any of the extended component's attrs...
    let superComponent = _.deeplicateObject(component)

// Filter component arg's props for id and classname properties, which can
// not, obviously, be shared with other elements/components...
    if ('id' in superComponent.props) {
      delete superComponent.props.id
    }
    if ('className' in superComponent.props) {
      delete superComponent.props.className
    }

// If arg is an object...
    if (attrs) {
// Let's first combine prop objects so as to override any common props...
      let props = _.combineObjects(superComponent.props, attrs)
// Set the Flare component indicator...
      props.Flare = true
// Set a unique id on the component's props...
      props.identity = `flareX${superComponent.el}${Flare._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
    }
    Flare._superId      = superComponent.props.identity
    Flare._superTag     = superComponent.el
    Flare._superTempLit = superComponent.taggedTempLit.array
    Flare._extend       = true

// Get css..
    return Flare._getTemplateLiteral
  }

// Div Static API Method
  static div(...arg) {
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set a unique id on the component's props...
      props.identity = `flareDiv${Flare._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'div'
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
//
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `flareDiv${Flare._incrementor}`
      return {
        flare: true,
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
    log('Looka these', ['red', 'bold'])
       dir(arg[0])
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set a unique id on the component's props...
      props.identity = `flareInput${Flare._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'input'
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `flareInput${Flare._incrementor}`
// Add private props to return object and... return..
      return {
        flare: true,
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
    let args = [...arg]
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]

// Set the Flare component indicator...
      props.Flare = true
// Set a unique id on the component's props...
      props.identity = `flareButton${Flare._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'button'
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `flareButton${Flare._incrementor}`
// Add private props to return object and... return..
      return {
        flare: true,
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
// Set the Flare component indicator...
      props.Flare = true
// Set a unique id on the component's props...
      props.identity = `flareP${Flare._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'p'
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `flareP${Flare._incrementor}`
// Add private props to return object and... return..
      return {
        flare: true,
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
// Set the Flare component indicator...
      props.Flare = true
// Set a unique id on the component's props...
      props.identity = `flareH1${Flare._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'h1'
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `flareH1${Flare._incrementor}`
// Add private props to return object and... return..
      return {
        flare: true,
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
// Set the Flare component indicator...
      props.Flare = true
// Set a unique id on the component's props...
      props.identity = `flareH6${Flare._incrementor}`
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'h6'
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.identity = `flareH6${Flare._incrementor}`
// Add private props to return object and... return..
      return {
        flare: true,
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
export { Flare }













// // Internal method closure for grabbing the variable name from a flare component
// // declaration, for tagname representation in custom element creation...
//   static _acquireComponentTagName(xCaller, callerName, array) {
//     let buildArray,
//     typeShifter,
//     type
//
// /***********************************************************************************
// ** A function for shifting a type from the beginning of the component names array....
// ************************************************************************************/
//     typeShifter =(array)=> {
//       let obj = {}
// // If we don't have an empty array....
//       if (array.length > 0) {
// // We can shift out a type....
//         obj.type  = array.shift()
//         obj.array = array
// // Else, we have a new component and must rebuild...
//       } else {
//         obj.array = buildArray(xCaller)
//         obj.type  = typeShifter(obj.array).type
//       }
// // Check the statelessComponents registry for a redundancy...
//       if (window.statelessComponents.indexOf(obj.type) !== -1) {
//         return typeShifter(obj.array)
//       }
// // If we reach this point, we are ready to return type...
//       return obj
//     }
//
//
// /***************************************************************************
// ** A function for building out the flareComponentNames Array...
// ****************************************************************************/
//     buildArray =(source)=> {
// // Some vars...
//       let callerTagName,
//       extractEntryFromSource,
//       componentNameArray = []
//
// /*****************************************************************************
// ** A recursive function for extracting regExp matches from a bit of source code.
// ** The purpose is to programmatically extract variable names from flare component
// ** declarations for the purpose of custom element tag names.
// ******************************************************************************/
//       extractEntryFromSource =(source)=> {
// // Some vars...
//         let sib,
//         componentName
//
// // Execute regexp... and single out result..
//         sib = _.flareComponentNamesRE().exec(source)[1],
// // Eliminate result from source code string, so that it won't be found again,
// // and store in temp variable...
//         source = source.replace(
//           sib,
//           ''
//         )
//         // log(source, 'red')
// // Remove "(" from the string, and return a new one..
// // Convert to tagname with kebab-case...
//         componentName =  _.convertFuncNameToTagName(
//           sib.replace('(', '')
//         )
//         //log('component tagname.', ['orange', 'bold']); log(componentName, ['yellow', 'bold'])
// // Push component name into a local array..
//         componentNameArray.push(componentName)
// // Push also into a global collection....
//         window.flareComponents.push(componentName.toLowerCase())
// // If there are still matches in the caller source code, call function again,
// // recursively, with the altered source...
//         if (_.flareComponentNamesRE().test(source)) {
//           return extractEntryFromSource(source)
//         }
// // return..
//         // log('componentNameArray'); log(componentNameArray)
//         return componentNameArray
//       }
//
//
// // If there are any matches in the caller's source code, start the process of building
// // out the array...
//       if (_.flareComponentNamesRE().test(source)) {
//         array = extractEntryFromSource(source)
//         //log('The Array', ['yellow', 'bold']); dir(array)
//       }
//
// // Also convert x.caller func name to tag-name to identify stateless components...
//       callerTagName =  _.convertFuncNameToTagName(callerName)
//       // log(callerTagName)
// // Check global registry of stateless components for the caller's tag name. If it is
// // present, we must rearrange the array...
//       log('window.statelessComponents', ['red', 'bold'])
//        log(window.statelessComponents)
//       if (window.statelessComponents.indexOf(callerTagName) != -1) {
//         log('rearranged', ['orange', 'bold'])
// // Rearrange the array...
// // Remove the first item...
//         let item = array.shift()
// // Push it on to the end of the array..
//         array.push(item)
//         log(array)
//       }
// // return array...
//       return array
//     }
//
// // Build an array...
// // If there are no component names in the array, lets's get some..
//     if (array.length == 0) {
// // Build array with x.caller source code...
//       array = buildArray(xCaller)
//     }
//
// /* Call typeShifter function to shift out the bottom-most tagname in the list...
// If it has already been instantiated, then it is not a flare component- Pop from
// the list and move on... Return both the altered array and the shifted out type...*/
//     let obj = typeShifter(array)
//     // log('arrayLength'); log(obj.array.length, ['pink', 'bold']);dir(obj.array)
//     // log('type', ['orange', 'bold']);dir(obj.type)
//     Flare._flareNames = obj.array
// // Return type..
//     return obj.type.toLowerCase()
//   }



// var obj = {
//    a: 'string',
//    b: function func(str) { console.log(str) },
//    c: 9,
//    d: {
//     e: 6,
//     f: 'hello',
//     j: {
//       q: 5,
//       r: 'jesus',
//       c: {
//         m: 4,
//         n: 'christ'
//       }
//     }
//    },
//    e: /hello/g,
//    g: null
// }
// let newObj = _.deeplicateObject(obj)
// newObj.d.j = 'lord'
// log('objs', 'tomato')
// dir(obj)
// dir(newObj)
