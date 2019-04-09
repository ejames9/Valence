/*
** _acquireComponentTagName.js
**
** _acquireComponentTagName returns an array of component variable names from
** a given function's source code...
**
** Eric James Foster, Fostware LLC, MIT License.
***/

import _buildArray from './_arrayBuilder'
// A closure for grabbing the variable name from a flare component
// declaration, for tagname representation in custom element creation...
export default function _acquireComponentTagName(xCaller, callerName, array) {
  let tagShifter,
  tagTwister,
  tagArray,
  tag
  // log('thisConstructor', ['orange', 'bold']);log(this)
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
        this.constructor._tagQueue = ra
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
  this.constructor._tagQueue = obj.array
// Return tag..
  return obj.tag.toLowerCase()
}
