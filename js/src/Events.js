/*
Dispatch.js

Dispatch is the custom event creation and dispatch class behind
the Valence component lifecycle methods...

Eric James Foster, MIT License.
*/

import * as _ from './Utilities/helpers'

// Globalize log function...
const log = _.log

class Events {
// Using emerging js reflection to create a single method for dispatching
// lifecycle event callbacks...
  static fire(event, target, detail={}) {
    const lifecycleEvent = Reflect.construct(CustomEvent, [event, {'detail': detail}])
    return target.dispatchEvent(lifecycleEvent)
  }

// Creating a second Event dispatching method for dispatching non-lifecycle events, and
// custom events with dynamic event strings...
  static emit(eventOrTag, detail={}) {
// Determine whether first arg is an event string or a tagname...
    if (_.included('-', eventOrTag)) {
// If tagname, create a listener for a custom flare event.
      let customEventString = _.uniqueCustomEventString(eventOrTag)
// Instantiate custom event...
      const ev = new CustomEvent(customEventString, {'detail': detail})
// Dispatch the event...
      document.dispatchEvent(ev)
    } else {
// Instantiate custom event...
      const ev = new CustomEvent(eventOrTag, {'detail': detail})
// Dispatch the event...
      document.dispatchEvent(ev)
    }
  }

// A static helper method for developing event listener functions...
  static listen(eventOrTag, cb) {
// Determine whether first arg is an event string or a tagname...
    if (_.included('-', eventOrTag)) {
// If tagname, create a listener for a custom flare event.
      let customEventString = _.uniqueCustomEventString(eventOrTag)
// Add listener...
      document.addEventListener(customEventString, (e)=> {
        cb(e)
      })
    } else {
// Add listener with given event string...
      document.addEventListener(eventOrTag, (e)=> {
        cb(e)
      })
    }
  }

// Static class method for registering event listener callback methods on
// a given HTMLElement...
  static registerCallbacks(ctor, eListeners) {
    if (eListeners.length < 1) {
      return
    } else {
      eListeners
      .forEach(eListener=> {
        ctor.prototype[eListener[1]] = eListener[2]
      }, ctor)
    }
    return ctor
  }
}


export { Events }
