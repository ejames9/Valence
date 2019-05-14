/*
** convertCSSUnitToRealNumber.js
**
** convertCSSUnitToRealNumber.js is a helper function for converting a css value
** string, such as: '15px', to a real, usable number, like: 15.
**
** Eric James Foster, Fostware LLC, MIT License.
***/


const NUM_REG_EXP = /[0-9]/

export default function convertCSSUnitToRealNumber(val) {
  log('val')
  log(val)
// Filter string for numbers....
  let numStringArr = val.split('').filter(char=> NUM_REG_EXP.test(char))
  log('numStringArr')
  dir(numStringArr)
  log(Number.parseInt(numStringArr.join('')))
// Rejoin number string and parse...
  return Number.parseInt(numStringArr.join(''))
}
