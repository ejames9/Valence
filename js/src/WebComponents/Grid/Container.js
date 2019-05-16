/*
** Container.js
**
** Container.js is a very simple Valence Component. A container of fixed-width
** that changes max-width at defined breaking points, or, with an optional
** `fluid` prop, remains at 100% at all times, changing with the width of it's
** parent...
**
** Eric James Foster, Fostware LLC, MIT License.
***/


import ValenceComponent from '../../Component'
// Get css ...
import { css } from '../../Flare/Flare'
// Get logger...
import { _log as log } from '../../Utilities/Loggers'
// Get classlist manipulation...
import { addClass, removeClass } from '../../Utilities/DOM/classList'
// Get Component styles...
// import btnStyles from './btnStyles'


const containerStyles = css` {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    background: blue;
    padding: 15px 30px;
    margin: auto;
    width: 100%;

    @media (max-width: 576px) {
      max-width: 410px;
    }

    @media (min-width: 576px) {
      max-width: 510px;
    }

    @media (min-width: 768px) {
      max-width: 690px;
    }

    @media (min-width: 992px) {
      max-width: 930px;
    }

    @media (min-width: 1200px) {
      max-width: 1090px;
    }

    &(.fluid) {
      width: 100%;
    }

  }
`

// Component props....
const containerProps = {
  fluid: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  }
}


// Component class....
class Container extends ValenceComponent {
// Reference to stule element...
  _style = null
// ctor
  constructor() {
    super()

// Add shadow root and slot for user markup...
    let shadowRoot = this.shadowCaster()

// Attach styles to shadowRoot....
    this._style = this.addStyles(shadowRoot, containerStyles)
/// Register the component's prop object...
    this.registerProps(containerProps)
  }

// Complete post mounting Component work here...
  componentDidMount() {
/// Update element props with user defined props....
    this.applyUserProps(this.props)
  }
}

export default Container
