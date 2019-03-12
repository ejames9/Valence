/*
Errors.js

Valence.js, a JavaScript library for building UI's with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file deals with the framework's custom
error handling...

Eric James Foster, MIT License.
*/

// Include custom errors...
import { MountingError } from './MountingError'
import { UnmountError } from './UnmountError'
import { UpdateError } from './UpdateError'


class Errors {
// Mounting failure error...
  static MountingFailure = MountingError.Failure
// Unknown mounting error...
  static UnknownMounting = MountingError.Unknown
// Error thrown when an unmounted component is attempted to be unmounted...
  static NoMountedUnmount = UnmountError.NoComponentMounted
// Unknown unmounting error...
  static UnknownUnmount = UnmountError.Unknown
// Update failure error...
  static UpdateFailure = UpdateError.Failure
// Unknown update error...
  static UnknownUpdate = UpdateError.Unknown
}

export { Errors }
