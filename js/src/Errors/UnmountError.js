/*
UnountingError.js

Valence.js, a JavaScript library for building UI's with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file contains the framework's custom
MountingError...

Eric James Foster, MIT License.
*/

class UnmountError {
// A custom error, thrown when an unmounted component is attempted to unmount...
  static get NoComponentMounted() {
// Return new error...
    return new Error('UnmountError: There is no component mounted.')
  }
// A custom error, thrown when there is an unknown error during the umount process...
  static get Unknown() {
// Return new error...
    return new Error(
      'UnmountError: There was an unknown error during the unmount process.'
    )
  }
}


export { UnmountError }
