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
const coolGreen = '#669a0f'


//global styles..
__`
body {
  background: ${coolGreen}
}
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


const Box = div({
  id: 'box',
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

  @media (max-height: 400px) {
    background: red;
    border-radius: 40%;
  }
`

const MyDiv = div`
  position: absolute;
  left: 50%;
  top: 25%;
  height: ${({shadow})=> shadow? '100px' : '700px'};
  width: 200px;
  background: ${tomato}
  z-index: 99;


`

// attribute for inner button text.....
const Thing = button({
  id: 'buttonThing',
  className: 'thang',
  type: 'submit',
  label: 'press'
})`
  height: ${({myAtty})=> myAtty};
  width: 75px;
  border: none;
  border-radius: 7px;
  background-color: pink;
`


const MyDiv2 = div`
  position: absolute;
  left: 80%;
  top: 25%;
  height: ${({shadow})=> shadow? '100px' : '700px'};
  width: 200px;
  background-color: ${green};
  z-index: 99;
  p {
    color: white;
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

  @media (max-height: 400px) {
      background: blue;
  }
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = div`
  position: absolute;
  left: -500px;
  height: 300px;
  width: 300px;
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;

  h1 {
    position: absolute;
    font-size: 44px;
    color: white;
    text-align: center;
    font-family: sf mono;
    top: 45%;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0 auto;
  }
`




const MyName =()=>
  <div>
    <Box>

      <MyDiv >
        <Thing myAtty='75px' shadow={false}/>
        <Spinner>
          <h1>Yesserri!</h1>
        </Spinner>
        <p>I'm inside a custom element!</p>
      </MyDiv>

      <p>What is happening</p>
      <h1 className='name'>My Name Is:</h1>
      <MyDiv2>
        <MyInput/>
        <Thing2 attrib={9}/>
      </MyDiv2>

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
