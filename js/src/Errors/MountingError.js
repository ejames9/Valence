/*
MountingError.js

Valence.js, a JavaScript library for building UI's with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file contains the framework's custom
MountingError...

Eric James Foster, MIT License.
*/

class MountingError {
// A custom error, thrown when a component fails to mount properly...
  static get Failure() {
// Return new error...
    return new Error('MountingError: There is no component mounted.')
  }
// A custom error, thrown when there is an unknown error during the mounting process...
  static get Unknown() {
// Return new error...
    return new Error(
      'MountingError: There was an unknown error during the mounting process.'
    )
  }
}

export { MountingError }
