/*
** Keyframes.js
**
** Keyframes.js holds the Keyframes class, and implements @keyframe functionality
** in the component styling branch of Valence, Flare...
**
** Eric James Foster, Fostware LLC, MIT License.
***/


class Keyframes {
// The name of the animation...
  animationName = ''
// CSS Rules...
  rules = ''
// Instance id...
  id = ''
// Instance constructor...
  constructor(name, css) {
    this.rules = css
    this.animationName = name

    this.id = `flare-keyframes-${name}`
  }

// Getter for 'name'..
  get name() {
    return this.animationName
  }
}

export { Keyframes }
