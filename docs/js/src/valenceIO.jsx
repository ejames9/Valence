/*
** valenceIO.jsx
**
** Javascript entry-point file for the
** Valence framework project Web-Site
**
** Eric J Foster, MIT License.
**
**/

import { Valence } from '../../../Valence'

const __ = window.global

Valence.config({
  shadowByDefault: false
})

const blue = '#0057ff'
const yellow = '#ffc700'
const tomato = '#ff4500'
const green = '#17a637'


//global styles..
__`
body  {
    background-color: ${tomato}
  }
`
const Box = div({
  className: 'boxy'
})`
  position: absolute
  top: 50%
  height: 200px
  width: 100%
  margin-top: -130px
  padding: 30px
  background-color: ${blue}

  h1 {
    color: yellow;
    position: absolute;
    top: -150px;
    left: 100px;
    text-align: center;
    vertical-align: middle;
    font-size: 84px;
    font-family: sf mono;
  }
`
const MyDiv = div`
  position: absolute;
  left: 50%;
  top: 25%;
  height: ${({shadow})=> shadow? '100px' : '700px'};
  width: 200px;
  background-color: ${green};
  z-index: 99;
  p {
    color: brown;
  }
`


const MyInput = input({
  placeholder: 'onsearch',
  type: 'text',
  className: 'myput',
  shadow: true
})`
  position: absolute;
  font-family: sf mono;
  font-size: 38px;
  width: 200px;
  height: 38px;
  margin: 0 auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: orange;
  border: none;
  border-radius: 5px;
  color: blue;
`

const Fluid = div({
  className: 'container-fluid',
  shadow: false,
  id: 'hwhatthe'
})`
position: absolute;
height: 100%;
width: 100%;
padding: 0;

`
// attribute for inner button text.....
const Thing = button({
  id: 'buttonThing',
  type: 'submit',
  label: 'press'
})`
  height: ${({myAtty})=> myAtty};
  width: 75px;
  border: none;
  border-radius: 7px;
  background-color: pink;
`
//
const Thing2 = extend(Thing, {
  id: 'thing2',
  label: 'press me!'
})`
  background-color: ${tomato};
  opacity: ${({attrib})=> attrib};
  color: white;
  border: 2px solid ${({shadow})=> shadow? 'black' : 'orange'}
`


const MyName =()=>
  <div>
    <Box>
      <MyDiv shadow={false}>
        <h1>Yesserri!</h1>
        <p>I'm inside a custom element!</p>
      </MyDiv>
      <Thing myAtty='75px' shadow={false}/>
       <p>What is happening</p>
       <MyInput/>
       <h1 className='name'>My Name Is:</h1>
       <Thing2 attrib={9}/>
    </Box>
  </div>


class App extends Valence.Component {

  render() {
    return (
      <Fluid>
        <MyName className='myname' shadow={false}/>
      </Fluid>
    )
  }
}


Valence.realize(
  <App />, el('#root')
)
