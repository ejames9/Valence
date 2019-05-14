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
//TODO:[X] Media Queries.. 6
//TODO:[ ] Incorporate SVG.. 8

/*
** TODO-MICRO Flare work to complete
********************************************/
//TODO:[X] Finish work on all element component classes...
//TODO:[ ] Move from static class structure to singleton structure...
//TODO:[ ]

/*
** TODO-RELATED spin-off projects to do....
********************************************/
//TODO:[ ] Replicator library...
//TODO:[ ] DeeplicateObject library...
//TODO:[ ] stylisDirectChild middleware plugin



// Grab utilities...
import * as _ from '../Utilities/helpers'
// Get value validation...
import { Is } from '../Utilities/Is'
// Get Component Class...
import Component from '../Component'
// Get Node and Props classes...
import { Node } from '../Form/Node'
import { Props } from '../Props/Props'
// Get Events....
import { Events } from '../Events'
// import CSS class...
import { CSS } from './CSS'
// Get unique identity creating functions...
import _murmurHash from './Utilities/_murmurHash'
import _alphaStringFromHash from './Utilities/_alphaStringFromHash'


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
// The config options object.. with default assumptions...
  static _assumptions = {
    shadowByDefault: true,
    kebabCase: true,
    globalFunctions: true,
    underscoreGlobal: false
  }
  static get options() {
    return Flare._assumptions
  }
// A public helper method for setting Flare assumptions, config options...
  static assume(userAssumptions) {
    this._assumptions = CSS.assume(
      _.combineObjects(
        this._assumptions,
        userAssumptions
      )
    )
    return this._assumptions
  }

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



// An internal static method for first, creating a 10 digit hash from a string of
// css, then a 7 digit alphabetical string from the hash....
  static _createFlareId(array) {
// Create string from template array...
    let string = array[0].join('')
                       .replace(/\s|\n/g, '')
// Create and return unique id...
    return _alphaStringFromHash(_murmurHash(string))
  }

// A publick method for processing a tagged template literal with stylis...
  static css(...tempLit) {
    if (tempLit[0][0].indexOf('{') < 5) {
      return CSS.processStyles(tempLit, ':host')
    }
    return CSS.processStyles(tempLit, '')
  }



// A helper method for accessing the Flare class and defining it's components...
  static createComponent(comTag, elTag, tagTempLit, props={}) {
// log(`Tag name is: ${comTag}`, ['orange', 'white']);dir(props)
// Determine whether or not the component will utilize shadow dom by default...
      if (!Reflect.has(props, 'shadow')) {
// If 'shadow' is not set in props, and if 'shadow' is 'on' by default...
        if (this.options.shadowByDefault) {
// Set the 'shadow' prop to true...
          props.shadow = true
        } else {
// Otherwise, set it to false..
          props.shadow = false
        }
      }

      CSS._superProps[props.flareId] = [comTag, props]
// If a flare component does not use shadow dom...
      if (!props.shadow) {
// it will not need to append anything to it's shadow root later on...
        props.noChild = true
// Define component and add Styles..
        this._define(comTag, props, elTag)
        CSS.addStyles(true, comTag, elTag, props, tagTempLit)
      } else {
// Define component and add Styles..
        this._define(
          comTag,
          props,
          elTag,
          CSS.addStyles(false, comTag, elTag, props, tagTempLit)
        )
      }
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
  static _define(name, props={}, el, template=false) {
    //log('Looka Here', ['white', 'red']);log(`name is: ${name}`);log(`el is: ${el}`);dir(props)
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
// Grab the extensible h1 element constructor..
          elemCtor = H1.createComponent(props, template)
          break
        case 'h2':
// Grab the extensible h2 element constructor..
          elemCtor = H2.createComponent(props, template)
          break
        case 'h3':
// Grab the extensible h3 element constructor..
          elemCtor = H3.createComponent(props, template)
          break
        case 'h4':
// Grab the extensible h4 element constructor..
          elemCtor = H4.createComponent(props, template)
          break
        case 'h5':
// Grab the extensible h5 element constructor..
          elemCtor = H5.createComponent(props, template)
          break
        case 'h6':
// Grab the extensible h6 element constructor..
          elemCtor = H6.createComponent(props, template)
          break
        case 'header':
// Grab the extensible header element constructor..
          elemCtor = Header.createComponent(props, template)
          break
        case 'input':
// Grab the extensible input element constructor..
          elemCtor = Input.createComponent(props, template)
          break
        case 'p':
// Grab the extensible p element constructor..
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
// Do CreateComponent..
    create()
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
    array = [...tempLit],
    props = Flare._propObj
// Set a unique id on the component's props...
    props.flareId = `${Flare._createFlareId(array)}`
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
      props: props,
      el: (tmpl.extended)? Flare._superTag : Flare._elementTag,
      tag: Flare._componentTag
    }
  }


// Component extend Static API Method
// A public method for extending user-defined flare components...
  static extend(component, attrs=false) {
// Get tagName...
    let tagName = _.convertFuncNameToTagName(
      extend.caller.name
    )
// Get a copy of the component so that we don't delete any of the extended component's attrs...
    let superComponent = _.deeplicateObj(
      component(
        valenceGlobals.flareComponents[component({}).tag]
      )
    )

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
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
    }
// Set a unique id on the component's props...
    Flare._elementTag   = `X${superComponent.el}`
    Flare._componentTag = tagName
    Flare._superId      = superComponent.props.flareId
    Flare._superTag     = superComponent.el
    Flare._superTempLit = superComponent.taggedTempLit.array
    Flare._extend       = true

// Get css..
    return Flare._getTemplateLiteral
  }

// Div Static API Method
  static div(...arg) {
// Get tagName...
    let tagName = _.convertFuncNameToTagName(div.caller.name)
    //log('TAGNAME', ['green', 'bold']);log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true

// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'div'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
//
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'div',
        tag: tagName
      }
    }
  }

/**********************************************************
***********************************************************
************* Flare Component Elements ********************
***********************************************************
**********************************************************/

// Input Static API Method
  static input(...arg) {
// Get tagName...
    let tagName = _.convertFuncNameToTagName(input.caller.name)
    //log('TAGNAME', ['green', 'bold']);log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'input'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'input',
        tag: tagName
      }
    }
  }

// Button Static API Method
  static button(...arg) {
// Get tagName...
    let tagName = _.convertFuncNameToTagName(button.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
    let args = [...arg]
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]

// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'button'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'button',
        tag: tagName
      }
    }
  }

// P API Method
  static p(...arg) {
// Get tagName...
    let tagName = _.convertFuncNameToTagName(p.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'p'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'p',
        tag: tagName
      }
    }
  }

// H1 API Method
  static h1(...arg) {
// Get tagName...
    let tagName = _.convertFuncNameToTagName(h1.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'h1'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'h1',
        tag: tagName
      }
    }
  }

// H2 API Method
  static h2(...arg) {
// Get tagName...
    let tagName = _.convertFuncNameToTagName(h2.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'h2'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'h2',
        tag: tagName
      }
    }
  }

// H3 API Method
  static h3(...arg) {
// Get tagName...
    let tagName = _.convertFuncNameToTagName(h3.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'h3'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'h3',
        tag: tagName
      }
    }
  }

// H4 API Method
  static h4(...arg) {
/// Get tagName...
    let tagName = _.convertFuncNameToTagName(h4.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'h4'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'h4',
        tag: tagName
      }
    }
  }


// H5 API Method
  static h5(...arg) {
/// Get tagName...
    let tagName = _.convertFuncNameToTagName(h5.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'h5'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'h5',
        tag: tagName
      }
    }
  }

// H6 API Function
  static h6(...arg) {
/// Get tagName...
    let tagName = _.convertFuncNameToTagName(h6.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'h6'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
    _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'h6',
        tag: tagName
      }
    }
  }

// HEADER API Method
  static header(...arg) {
/// Get tagName...
    let tagName = _.convertFuncNameToTagName(header.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'header'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'header',
        tag: tagName
      }
    }
  }

// AREA API Method
  static area(...arg) {
/// Get tagName...
    let tagName = _.convertFuncNameToTagName(area.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'area'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'area',
        tag: tagName
      }
    }
  }

// ASIDE API Method
  static aside(...arg) {
/// Get tagName...
    let tagName = _.convertFuncNameToTagName(aside.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'aside'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'aside',
        tag: tagName
      }
    }
  }


// COL API Method
  static col(...arg) {
/// Get tagName...
    let tagName = _.convertFuncNameToTagName(col.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'col'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'col',
        tag: tagName
      }
    }
  }

// COLGROUP API Method
  static colgroup(...arg) {
/// Get tagName...
    let tagName = _.convertFuncNameToTagName(colgroup.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'colgroup'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'colgroup',
        tag: tagName
      }
    }
  }

// SPAN API Method
  static span(...arg) {
/// Get tagName...
    let tagName = _.convertFuncNameToTagName(span.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'span'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'span',
        tag: tagName
      }
    }
  }

// SECTION API Method
  static section(...arg) {
/// Get tagName...
    let tagName = _.convertFuncNameToTagName(section.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'section'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
      _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'section',
        tag: tagName
      }
    }
  }


// TABLE API Function
  static table(...arg) {
// Get tagName...
    let tagName = _.convertFuncNameToTagName(table.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'table'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
    _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'table',
        tag: tagName
      }
    }
  }



  // TEXTAREA API Function
  static textarea(...arg) {
// Get tagName...
    let tagName = _.convertFuncNameToTagName(textarea.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'textarea'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
    _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'textarea',
        tag: tagName
      }
    }
  }



// FOOTER API Function
  static footer(...arg) {
// Get tagName...
    let tagName = _.convertFuncNameToTagName(footer.caller.name)
    // log('TAGNAME', ['green', 'bold'])
    //  log(tagName)
// If the argument is not an array, it's probably our props object...
    if (!Is.array(arg[0])) {
      let props = arg[0]
// Set the Flare component indicator...
      props.Flare = true
// Set stateless-component flag for the component..
      props.isStatelessComponent = true
// Pass the prop object, and element tag name  on to the global members..
      Flare._propObj = props
      Flare._elementTag = 'footer'
      Flare._componentTag = tagName
// Define component..
      return Flare._getTemplateLiteral
    } else {
      let array = [...arg],
      _privateProps = {}
// Add some properties to the private props object....
      _privateProps.Flare = true
      _privateProps.isStatelessComponent = true
    _privateProps.flareId = `${Flare._createFlareId(array)}`
// Add private props to return object and... return..
      return {
        flare: true,
        taggedTempLit: {
          extended: false,
          array: array
        },
        props: _privateProps,
        el: 'footer',
        tag: tagName
      }
    }
  }
}
const css = Flare.css

export { Flare, css }
