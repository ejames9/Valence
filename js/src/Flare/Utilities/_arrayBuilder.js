/*
** arrayBuilder.js
**
** arrayBuilder.js is a pretty straightforward algorithm for creating a usable array
** of component names, nesting and all, from the simple vDOM function markup...
** This is done to preserve the component names for actual html tagnames. Being that
** the components are created as variables and not functions, many hoops needed
** jumping through in order to do this....
**
** Eric James Foster, Fostware LLC, MIT License.
***/

import * as _ from '../../Utilities/helpers'
import { Is } from '../../Utilities/Is'

// window.log = _.log

/* A very functionally-minded version of this algorithm, this function takes source
code from a function, and produces a usable array of component tagnames, nesting included...*/
export default function manifestArray(source, fnName) {
  let nameRE = /\([A-Z a-z 0-9]+/g,
  placeholderRE = /\[--\]|--/,
  substitutions,
  toTrim,
  toTwist,
  animate,
  rePlaceholder,
  rePlacements,
  nameTwister,
  arrayString,
  logOut,
  bracketHelper,
  commaHelper,
  names = source.match(nameRE)
                .map((i)=> {
    return `'${
      _.convertFuncNameToTagName(i.replace(/\(/, ''))
    }'`
  })
// A function for logging a string to the console, mid _.piper() stream...
  logOut =(string)=> {
    log('PIPER-LOG', ['tomato', 'bold'])
    log(string)
    dir(props)
    return string
  }
// This function executes a list of RegExp string replacements...
  substitutions =(source)=> {
    return source.replace(nameRE, '(--')
                 .replace(/[^()-]/g, '')
                 .replace(/\(/g, '[')
                 .replace(/\)/g, ']')
                 .replace(/\[\]/g, '')
  }
// Determines whether or not the string should be trimmed of it's first and last chars...
  toTrim =(string)=> {
    log('fnName', 'orange')
    log(fnName)
    return (fnName !== 'render')?
      string.substring(1, string.length-1)
    :
      string
  }
// Replaces names from name array into string placeholders...
  rePlaceholder =(string)=> {
    let temp = string.replace(placeholderRE, `${names.shift()},`)
    if (placeholderRE.test(temp)) {
      return rePlaceholder(temp)
    }
    return temp
  }
// Executes rePlaceholder and a couple regexp replacements...
  rePlacements =(string)=> {
    return rePlaceholder(string)
                  .replace(/\,\]/g, '],')
                  .replace(/\,\]/g, ']')
  }
// Determines whether or not the string has enough brackets, and adds one if necessary...
  bracketHelper =(string)=> {
    let brackets = string.match(/[\[\]]/g)
    // log('brackets', ['yellow', 'bold']);log(brackets);dir(brackets)
    if (brackets.length % 2 !== 0) {
      return `${string}]`
    }
    return string
  }
// Determines whether or not a trailing comma needs removed or not...
  commaHelper =(string)=> {
    if (string[string.length-1] === ',') {
      return string.substring(0, string.length-1)
    }
    return string
  }
// Moves the first item of an array to the end...
  nameTwister =(ra)=> {
    log('Twisting Array', ['lightblue', 'bold'])
    ra.push(ra.shift())
    return ra
  }
// Brings a string array to life...
  animate =(string)=> {
    return Function(
        `return ${string}`
    )()
  }
// Determines whether or not an array needs twisted or not...
  toTwist =(array)=> {
    if  (fnName !== 'render') {
      return nameTwister(array)
    } else {
      // array.unshift(array.pop())
    }
    return array
  }
// Run functions through the _.piper() stream and return....
  return _.piper(
    substitutions,
    logOut,
    toTrim,
    logOut,
    rePlacements,
    logOut,
    bracketHelper,
    commaHelper,
    animate,
    toTwist
  )(source)
}

/**********************************************************
***********************************************************
***********************************************************
***********************************************************
***********************************************************
***********************************************************
**********************************************************/
//Minimal es6 version, for executing in Mancy REPL ...
// export default function manifestArray(source, fnName) {
//   console.log('callername')
//   console.log(fnName)
//   let nameRE = /\([A-Z a-z 0-9]+/g,
//   placeholderRE = /\[--\]|--/,
//   names = source.match(nameRE)
//                 .map((i)=> {
//     return `'${_.convertFuncNameToTagName(i.replace(/\(/, ''))}'`
//   }),
//   fs = source.replace(nameRE, '(--')
//              .replace(/[^()-]/g, '')
//              .replace(/\(/g, '[')
//              .replace(/\)/g, ']')
//              .replace(/\[\]/g, ''),
//
//   fs2 = (fnName !== 'render')?
//         fs.substring(1, fs.length-1)
//       :
//         fs,
//
//   replacePlaceholder =(string)=> {
//     var temp = string.replace(placeholderRE, `${names.shift()},`)
//     if (placeholderRE.test(temp)) {
//       return replacePlaceholder(temp)
//     }
//     return temp
//   },
//   fs3 = replacePlaceholder(fs2)
//             .replace(/\,\]/g, '],')
//             .replace(/\,\]/g, ''),
//   tagTwister =(ra)=>  {
//     ra.push(ra.shift())
//     return ra
//   }
//
//   log('fs3', ['tomato', 'bold'])
//    log(fs3)
//
//   return (fnName !== 'render')?
//     tagTwister(
//       Function(
//         `return ${fs3.substring(0, fs3.length-1)}`
//       )()
//     )
//   :
//     Function(
//       `return ${fs3.substring(0, fs3.length-1)}`
//     )()
// }
