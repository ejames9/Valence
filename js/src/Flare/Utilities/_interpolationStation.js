/*
** interpolationStation.js
**
** interpolationStation.js takes in an array with css rules and also an undefined
** number of interpolations...
**
** Eric James Foster, Fostware LLC, MIT License.
***/

// Get splitFilter from helpers...
import { splitFilter } from '../../Utilities/helpers'
// Get verification library...
import { Is } from '../../Utilities/Is'
// Get Keyframes class for validation....
import { Keyframes } from '../Keyframes'

// Pre-declaring all functions here, mainly a style thing...
let stringWeaver,
interpolationFilter

/* A helper function for processing tagged template literal interpolation functions,
and inserting their values back into the template.... The function takes an array
of strings and an array of interpolation, and props as arguments, and returns the completed
css string....*/
stringWeaver =(strings, interpolations, props={})=>
// We need to execute them with the props object, and add the value into the template...
  strings.map((string, i)=> {
    let val
/*
Since the interpolation functions (refs) array will always be 1 shorter in length than
the strings array, The last index will be undefined if we are iterating based on 'string's'
indeces. So, we make sure that  we don't try to execute an undefined function by skipping
the last index.....
*/  if (i < strings.length - 1) {
// Utilizing a switch for the different types of interpolations we may encounter...
      switch (true) {
// If we find a function, execute it with props passed in...
        case typeof interpolations[i] === 'function':
          val = interpolations[i](props)
          break
// If we have a string, It is the return value of a variable, just take it as it is...
        case typeof interpolations[i] === 'string':
          val = interpolations[i]
          break
// If we find a keyframes instance, we need it's name....
        case interpolations[i] instanceof Keyframes:
          val = interpolations[i].name
          break
        case typeof interpolations[i] === 'number':
          val = interpolations[i]
          break
/* Otherwise, I don't know what the hell we're dealing with..... Better off
throwing an error!*/
        default:
          throw TypeError(
            `Expecting a 'Keyframe', 'string', 'number' or 'function' here. A value of type: ${typeof interpolations[i]}, was given.`
          )
      }
/* The last index will end up here. Since there will never be an interpolation here,
we'll just give the value an empty string....*/
    } else {
      val = ''
    }
// Add interpolation values to array strings, join them...
    return string.concat(
      '',
      val
    )
  }).join('')

/*
This function serves to activate prop function interpolations in css styling...
The function simply takes a tagged template literal as an argument, and spits out
completed styles, ready for appending to a style tag...   */
export default interpolationFilter =(ttlArray, props={})=> {
// First let's check if we have interpolations to deal with...
  if (Is.interpolated(ttlArray)) {
// Declare var for splitting strings and functions into respective arrays...
      let arrays = splitFilter(ttlArray, (index)=> {
        return Is.array(index)
      })
// Reassemble the css literals...
      let s = stringWeaver(arrays.true[0], arrays.false, props)

      return s
// Otherwise, rejoin the css fragments and return...
  } else {
    return ttlArray.join('')
  }
}
