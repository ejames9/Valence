/*
shimLoader.js

Valence, a JavaScript library for building UI's, with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file handles loading of the native-shim
dynamic loader...

Eric James Foster, MIT License.
*/

//TODO: Get external source for shim....



(()=> {
// native shim src...
  const shimSrc = './nativeShim.js'

// A function for loading the native-shim....
  function loadNativeShim() {
    return new Promise((resolve, reject)=> {
      const
// Create and config script...
      script         = document.createElement('script')
      script.src     = shimSrc
      script.onload  = resolve
      script.onerror = reject

// Append to the DOM just after the previously loaded inline script...
      document.head.append(script)
    })
  }

// Check for existence of customElements API, and load shim or not...
  if (!window.customElements) {
    return
  } else {
// Load the shim...
    loadNativeShim()
      .then((result)=> {
        console.dir(result)
// Confirm load with following function that is defined on the window object
// in the shim...
        supportLoaded()
      })
  }
})()
