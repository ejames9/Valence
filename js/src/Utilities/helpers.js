/*
Utilities.js

A file containing utility functions to aid in the functional
nature of Valence...

Eric James Foster, MIT License.
*/

// Get data...
import { DATA } from './data'
// Get Is...
import { Is as is } from './Is'
// Get words from lodash...
import words from 'lodash/words'
// Get and send some utils from elementsJS...
export { el, dom, log, inspect } from 'elementsJS'



// a Regular expression for extracting component names from a function's
// source code...
export const venusComponentNamesRE =()=> /(\([A-Z]\w*-?)+/g


export const piper =(...fns)=>
  (arg)=>
    fns.reduce(
      (value, fn)=> fn(value)
      , arg
    )

// Returns an array of prop names...
export const propNames =(props)=> Object.keys(props)

// Get an array of key value pairs from the attributes object...
export const propsArray =(attribs)=> Object.entries(attribs)

// Create a new array with all event listeners lower-cased...
export const lowerCaseListeners3 =(arr)=>
  arr.map(entry=>
    [entry[0].toLowerCase(), entry[0], entry[1]]
  )

// Create a new array with all event listeners lower-cased...
export const lowerCaseListeners2 =(arr)=>
  arr.map(entry=>
    [entry[0].toLowerCase(), entry[1]]
  )

// Create a new array with all event listeners lower-cased...
export const lowerCaseListeners1 =(arr)=>
  arr.map(entry=> entry.toLowerCase())

// Create a new array with event listeners and their callback functions...
export const isolateEventListeners =(arr)=>
  arr.filter(entry=>
    DATA.DOMElementEvents.indexOf(entry[0]) != -1
  )

// A function for removing the `on` from event listeners...
export const sansON =(name)=> name.slice(2).toLowerCase()

// Create a new array with the `on` removed from the event listener names...
export const removePrefixFromListeners =(arr)=>
  arr.map(entry=>
    [sansON(entry[0]), entry[1], entry[2]]
  )

// Create a new array without the  event listeners and their callback functions...
export const removeEventListeners =(arr)=>
  arr.filter(entry=>
    DATA.DOMElementEvents.indexOf(
      is.array(entry)?
        entry[0]
      :
        entry
    ) == -1
  )

// Remove non-custom attributes...
export const removeExistingAttributes =(arr)=>
  arr.filter(entry=>
    DATA.HTMLAttributes.indexOf(
      is.array(entry)?
        entry[0]
      :
        entry
    ) == -1
  )

// Process event listener attributes...
export const processEventListeners =(arr)=>
  piper(
    lowerCaseListeners3,
    isolateEventListeners,
    removePrefixFromListeners
  )(arr)

// Process attribute data...
export const extractCustomProps =(arr)=>
  piper(
    lowerCaseListeners2,
    removeEventListeners,
    removeExistingAttributes
  )(arr)

// Process attribute data...
export const extractCustomPropNames =(arr)=>
  piper(
    lowerCaseListeners1,
    removeEventListeners,
    removeExistingAttributes
  )(arr)

// NOT CURRENTLY IN USE...
// Process attribute data...
export const processProps =(arr)=>
  piper(
    lowerCaseListeners2,
    removeEventListeners
  )(arr)

// Create an object from the isolated event listener array, and the array width
// the listeners removed...
export const processData =(arr)=> ({
// The following object contains 2 arrays, 1 of the event listener attributes, appendChild
// one of the remaining attributes...
    'eventListeners': processEventListeners(arr),
    'props': extractCustomProps(arr)
  })

// A function for converting a unicode string into a kebabCase string...
<<<<<<< HEAD
export const _shishKebab =(string)=>
=======
const _shishKebab =(string)=>
>>>>>>> master
  words(string).reduce((result, word, ix)=>
    result + (ix ? '-' : '') + word.toLowerCase()
  , '')

// A function for converting the func name to a custom tag name...
export const convertFuncNameToTagName =(func)=>
  (_shishKebab(func).indexOf('-') !== -1)?
    _shishKebab(func)
  :
    `${func.toLowerCase()}-`

// NO LONGER USED: Use Function.name instead... duh..
// Function for extracting the func name from the function statement of the
// function that called createElement...
export const extractFunctionName =(element)=>
  functionRegExp
    .exec(
      element
        .toString())
        .toString()
        .replace(functArgRegExp, '')

// A function for combining to Props objects into 1 new object...
export const combineObjects =(obj1, obj2)=> ({
  ...obj1,
  ...obj2
})

// Removes the hyphen at the end of the component tag name...
export const capitalizeAndRemoveHyphen =(name)=>
  name[0].toUpperCase() +
  name.slice(1, name.length - 1)

// Creates a unique custom event string for individual venus element instantiation
// notification...
export const uniqueCustomEventString =(tagName)=>
  `venus${capitalizeAndRemoveHyphen(tagName)}ElementInstantiated`

// A small helper function for determining if a given string is in a given array..
export const included =(string, array)=> {
  if (array.indexOf(string) > 0) {
    return true
  } else {
    return false
  }
}

// A node.js code templating function. The function takes a string of code, and
// an object containing replacement values.
export const template =(obj, code)=> {
// Replacement regexp...
  let replaceRE = /\|\|\w+\|\|/,
  variableRE    = /\w+/,
  variable,
  tuple,
  match,
  temp

// If we find a replacement match,
  if (replaceRE.test(code)) {
// store it...
    match = replaceRE.exec(code)[1]
// extract the variable from the match...
    variable = variableRE.exec(match)[1]
// Replace it in the original code with...
    temp  = code.replace(
      match,
      variable
    )
// Call function again to be sure we don't have anymore matches...
    template(temp, obj)
  } else {
// load tuple with UppercaseName and code...
  tuple.push(obj.UppercaseName)
  tuple.push(code)
    return tuple
  }
}

// A node.js function for filling out and returning in an array, templates, given an array
// of replacement objects and a template....
export const replicator =(objArray, template)=> {
  let loaded,
  loadedArray

// Load each template using the above template function...
  objArray.forEach((obj)=> {
    loaded = loader(obj, template)
    loadedArray.push(loaded)
  })

// Return the array...
  return loadedArray
}

// An array filter function, which splits the array into 2 new arrays.. Those that
// agree with the given boolean, and those that do not...
export const splitFilter =(array, bool)=> {
  let t = [],
  f = []
// Iterate over the array...
  array.forEach((i)=> {
    if (bool(i)) {
      t.push(i)
    } else {
      f.push(i)
    }
  })
// Return a tuple of both arrays...
  return {
    true: t,
    false: f
  }
}


/* A helper function for processing tagged template literal interpolation functions,
and inserting their values back into the template.... The function takes an array
of strings and an array of functions as arguments, and returns the completed
template string....*/
export const reAssembleTemplates =(arrStrings, arrFuncs, props)=>
// We need to execute them with the props object, and add the value into the template...
   arrStrings.map((string, i)=> {
    let val
/*
Since the interpolation functions (refs) array will always be 1 shorter in length than
the strings array, The last index will be undefined if we are iterating based on 'string's'
indeces. So, we make sure that  we don't try to execute an undefined function by skipping
the last index.....
*/    if (i < arrStrings.length - 1) {
      val = arrFuncs[i](props)
    } else {
      val = ' '
    }
// Add ref function values to array strings, join them...
    return string.concat(
      '',
      val
    )
  }).join('')


/*
A combination of two of the above functions, this function serves to activate prop
function interpolations in css styling... The function simply takes a tagged template
literal as an argument, and spits out completed styles, ready for appending to a style tag...
*/
export const activateFunctionInterpolations =(taggedTempLit, props)=> {
// Declare var for splitting strings and functions into respective arrays...
  let arrays = splitFilter(taggedTempLit, (index)=> {
    return typeof index === 'function'
  })
// Reassemble the css literals...
  return reAssembleTemplates(arrays.false[0], arrays.true, props)
}
