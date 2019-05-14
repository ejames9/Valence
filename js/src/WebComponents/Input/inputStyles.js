/*
** inputStyles.js
**
** inputStyles.js contains the css template literal for the Input
** WebComponent...
**
** Eric James Foster, Fostware LLC, MIT License.
***/

// Get css ...
import { css } from '../../Flare/Flare'


const inputStyles = css` {
    --size: 20px;
    display: block;
    padding: 0px;
    padding-top: 0px;
    padding-bottom: 40px;
    background: blue;
    font-family: hermit;
    font-size: calc(var(--size) / 2);
    height: var(--size);
    width: 1200px;

    input {
      width: 85%;
      height: 100%;
      margin-top: 5px;
      font-family: hermit;
      font-size: calc(var(--size) * .8);
      border: none;
      border-radius: 5px;
      background: yellow;
    }

    > input.label-left {
      display: inline-block;
      width: 75%;
      margin-left: 10px;
    }

    > input.label-right {
      display: inline-block;
      width: 75%;
      margin-right: 10px;
    }

    > input.label-bottom {
      margin-bottom: 10px;
    }

    > span.label-left,
      span.label-right {
        display: inline-block;
    }

    > span.label-bottom-right,
      span.label-top-right {
      float: right;
    }
  }
`

export default inputStyles
