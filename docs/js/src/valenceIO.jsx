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
// import venus from '../../../js/src/Form/Venus'



Valence.config({
  shadowByDefault: false
})

//
const Box = div({
  className: 'boxy'
})`
  position: absolute;
  top: 50%;
  height: 200px;
  width: 100%;
  margin-top: -130px;
  padding: 30px;
  background-color: blue;

`
const MyDiv = div`
  position: absolute;
  left: 50%;
  top: 25%;
  height: ${({shadow})=> shadow? '100px' : '700px'};
  width: 200px;
  background-color: green;
  z-index: 99;
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
  background-color: red;
  opacity: ${({attrib})=> attrib};
  color: white;
  border: 2px solid ${({shadow})=> shadow? 'black' : 'orange'}
`


const MyName =()=>
  <div>
    <Box>
      <MyDiv shadow={false}/>
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
