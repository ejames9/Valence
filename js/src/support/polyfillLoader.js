/*
polyfillLoader.js

Valence, a JavaScript library for building UI's, with an API
resembling that of React, but uses Vanilla JS Web components
under the hood...This file handles loading of the polyfill
loader...

Eric James Foster, MIT License.
*/



(()=> {
// The polyfill CDN url...
  const polyfillCDN = 'https://cdn.rawgit.com/webcomponents/custom-elements/4f7072c0/custom-elements.min.js'

// A function for loading the native-shim....
  function loadPolyfill() {
    return new Promise((resolve, reject)=> {
      const
// Create and config script...
      script         = document.createElement('script')
      script.src     = polyfillCDN
      script.type    = 'text/javascript'
      script.onload  = resolve
      script.onerror = reject

// Append to the DOM...
      document.head.append(script)
    })
  }

// Check for existence of customElements API, and load shim or not...
  if (window.customElements) {
    return
  } else {
// Load the shim...
    loadPolyfill()
      .then((result)=> {
        console.dir(result)
      })
  }
})()
