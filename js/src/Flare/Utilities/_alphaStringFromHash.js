/*
** alphaStringFromHash.js
**
** alphaStringFromHash.js is a very particular algorithm for converting a numeric hash
** into a string of alphabetical characters. Very nearly a copy/paste of the styled-
** components algorithm to do the very same thing. https://github.com/styled-components/
** styled-components/blob/master/packages/styled-components/src/utils/generateAlphabeticName.js
** It is used in conjuction with the murmurhash algorithm to convert a string first
** into a 10 digit hash, then into a unique string of alphabetical characters to be used
** as a name for a css keyframes instance...
**
** Eric James Foster, Fostware LLC, MIT License.
***/



// The number of letters (cap and lower case) in the alphabet..
const alphaRange = 52

/* Once the modulo function gets x within a 2 digit range, we can get into ascii
alphabet range by adding either 39 or 97, depending on whether or not the value
is > than 25.*/
const getACharacter =(code)=>
  String.fromCharCode(code + (code > 25 ? 39 : 97))

export default function alphaStringFromHash(hash, chars=7) {
  let name = '',
  x = hash,
// This number determines the length of the returned string. '52' = 6, '26' = 7 chars...
  divisor = chars=6? 52 : 26

  do {
// Diminish the hash by dividing by 26...
    x = Math.floor(x / divisor)
//  Add a character to 'name'...
    name = `${getACharacter(x % alphaRange)}${name}`
// Continue looping until x is dwindled to below 52...
  } while (x > alphaRange)

// The remainder should be a number in the 0 - 52 range, so we can grab one last char...
  return `${getACharacter(x % alphaRange)}${name}`
}

/**********************************************************
***********************************************************
***********************************************************
***********************************************************
***********************************************************
***********************************************************
**********************************************************/
// Minimal es6 version, for executing in Mancy REPL ...
// var alphaRange = 52
// var divisor = 26
//
// var getACharacter =(code)=>
//   String.fromCharCode(code + (code > 25 ? 39 : 97))
//
// function alphaStringFromHash(code) {
//   var name = '',
//   x = code
//
//   do {
// // Diminish the has by dividing by 52...
//     x = Math.floor(x / divisor)
// //  Add a character to 'name'...
//     name = `${getACharacter(x % alphaRange)}${name}`
// // Continue looping until x is dwindled to below 52...
//   } while (x > alphaRange)
//
// // The remainder should be a number in the 0 - 52 range, so we can grab one last char...
//   return `${getACharacter(x % alphaRange)}${name}`
// }
