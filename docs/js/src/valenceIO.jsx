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
// WebComponents .....
import Button from '../../../js/src/WebComponents/Button/Button'
import Input from '../../../js/src/WebComponents/Input/Input'
import Container from '../../../js/src/WebComponents/Grid/Container'
import Col from '../../../js/src/WebComponents/Grid/Column'
import Row from '../../../js/src/WebComponents/Grid/Row'

import valenceLogo from '../../assets/valenceLogo'



Valence.assume({
  shadowByDefault: false,
  underscoreGlobal: true,
  directChildNesting: true,
  kebabCase: false,
  syntaxHighlighting: true
})


const blue = '#0057ff'
const yellow = '#ffc700'
const tomato = '#ff4500'
const green = '#17a637'
const coolGreen = '#669a0f'
const grey = '#323232'


//global styles..
styled.global`
  body {
    background: ${grey}
  }
`

const Fluid =()=> styled.div({
  className: 'container-fluid',
  id: 'hwhatthe'
})`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
`

const Box =()=> styled.div({
  id: 'box',
  className: 'boxy'
})`
  position: absolute;
  top: 50%;
  height: 200px;
  width: 100%;
  margin-top: -130px;
  padding: 30px;
  z-index: 9;
  background-color: transparent;

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

const MyDiv =({shadow})=> styled.div`
  position: absolute;
  left: 76%;
  top: 25%;
  height: ${shadow? '100px' : '700px'};
  width: 200px;
  background: ${tomato};
  z-index: 99;
`

// attribute for inner button text.....
const Thing =({myAtty})=> styled.button({
  id: 'buttonThing',
  className: 'thang',
  type: 'submit',
  label: 'press'
})`
  height: ${myAtty};
  width: 75px;
  border: none;
  border-radius: 7px;
  background-color: pink;
`



const MyDiv2 =({shadow})=> styled.div`
  position: absolute;
  left: 82%;
  top: 25%;
  height: ${shadow? '100px' : '700px'};
  width: 200px;
  background-color: ${green};
  z-index: 99;
  p {
    color: white;
  }
`


const MyInput =()=> styled.input({
  placeholder: 'onsearch',
  type: 'text',
  className: 'myput'
})`
  position: absolute;
  font-family: sfmono, space mono;
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
  color: yellow;

  @media (max-height: 400px) {
      background: blue;
  }
`


//
const Thing2 =({attrib, shadow})=> styled.extend(Thing, {
  id: 'thing2',
  label: 'press me!'
})`
  position: relative;
  top: 100px;
  background-color: ${tomato};
  opacity: ${attrib};
  color: white;
  border: 2px solid ${shadow? 'black' : 'orange'}
`

const rotate = styled.keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner =()=> styled.div`
  position: absolute;
  top: 55%;
  left: 50px;
  height: 300px;
  width: 300px;
  display: block;
  padding: 5px;
  background: grey;

  div {
    position: absolute;
    text-align: center;
    vertical-align: middle;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    padding: 40% 0;
    background: tomato;
    font-size: 44px;
    color: blue;
    font-family: sf mono, space mono;
    animation: ${rotate} 2s linear infinite;
  }
`

const Logo =()=> styled.div({
  cleanHTML: valenceLogo(),
  shadow: false
})`
  width: 100%;
  padding: 10px;
  margin: auto;
  z-index: 999;

  p {
    color: white;
    font-family: sf mono;
  }
`
const inputStyles = `
  --size: 80px
`


const MyName =({className, kebabCase})=> {

  return (
    <div>
      <Box>
        <Button variant='info' size='sm'>Info</Button>
        <Button variant='primary' size='lg' disabled>Primary</Button>
        <Button variant='secondary' size= 'sm' disabled>Secondary</Button>
        <Button variant='success' disabled>Success</Button>
        <Button variant='danger' autofocus>Danger</Button>
        <Button variant='warning' size='lg'>Warning</Button>
        <Button variant='light' >Light</Button>
        <Button variant='dark' size='lg' disabled>Dark</Button>
        <Button variant='link' >Link</Button>

        <Input
          label='Your Name:'
          labelMod='left'
          placeholder='Name'
          styles={inputStyles}
        />
      </Box>
    </div>
  )
}

class App extends Valence.Component {

  constructor() {
    super()
  }

  componentWillMount() {
  }

  render() {
    return (
      <Fluid>
        <Container class='contain'>
          <Row pads='15px' bumpers='5px' borders='1px #343a40'>
            <Col class='on' cols={12} md={6}>1 of 2</Col>
            <Col class='tw' cols={6} md={4} flex>2 of 2</Col>
            <Col class='thr' cols={6} md={2}>3 of 2</Col>
          </Row>
          <Row pads='15px' bumpers='5px' gutters={false}>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
            <Col>3 of 2</Col>
          </Row>
        </Container>
        <Container>
          <Row align='end'>
            <Col offset={2} align='start' cols={3} md={5}>1 of 1</Col>
          </Row>
        </Container>
        <Container class='container'>
          <Row class='row' borders='1px #343a40'>
            <Col order={3} class='col col-1'>1 of 2</Col>
            <Col order={2} class='col col-2'>2 of 2</Col>
            <Col order={1} class='col col-3'>3 of 2</Col>
          </Row>
        </Container>
      </Fluid>
    )
  }
}


Valence.realize(
  <App myProp='hoping' otherProp={42}/>, el('#root')
)
