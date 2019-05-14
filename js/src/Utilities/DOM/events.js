/*
events.js

This file contains the library convenience EventListener function.

Author: Eric James Foster
License: ISC
*/

import el from './el'


//Function for setting event listeners.
const on =(event, elem, callback)=> {
  let domEl = el(elem)
// Making sure we have addEventListener, in case of IE or Edge....
  if (document.addEventListener) {
    return elem.addEventListener(event, callback)
  } else {
// For IE or Edge...
    return elem.attachEvent(`on${event}`, callback)
  }
}

export default on
