/*
UpdateError.js

Valence.js, a JavaScript library for building UI's with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file contains the framework's custom
UpdateError...

Eric James Foster, MIT License.
*/

class UpdateError {
// A custom error, thrown when a component fails to update properly...
  static get Failure() {
// Return new error...
    return new Error('UpdateError: The component update failed.')
  }
// A custom error, thrown when there is an unknown error during the mounting process...
  static get Unknown() {
// Return new error...
    return new Error(
      'UpdateError: There was an unknown error during the update process.'
    )
  }
}

export { UpdateError }
