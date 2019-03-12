/*
Valence.js

Valence is A JavaScript library for building UI's with an API resembling that
of React, but uses Vanilla JS Web components under the hood
this is a test file...

Eric James Foster, MIT License.
*/


import Valence from 'Valence'




const Chooser =({thisAtty})=> {
  let _title

  function onSubmit(e) {
    e.preventDefault()
    log('titleValue', ['yellow', 'bold'])
    log(_title.value)
    _title.value = ''
  }
// Markup...
  return (
    <div id="container">
      <form onSubmit={onSubmit} className="theForm">
        <input type="text"
                ref={input=> _title=input}
          className="theInput"
            onClick={console.log("hey there ye", ['green', 'bold'])}
        placeholder={thisAtty}
        />
        <button onClick={onSubmit} className="theButton"></button>
      </form>
      <ul className="theList">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}


const Box =()=> {
  let a = 'holy moly';
  function onClick() {
    log('hi there youses', ['blue', 'bold'])
    dom('chooser-').bgColor('red')
  }
  return (
// Markup....
    <div id="container" className="container">
      <Chooser id="chooser" className="chooser" onClick={onClick} shadow={true} thisAtty={a}>
        <p className="para2"></p>
      </Chooser>
      <p id="para" className="para">
        My Name is Deric.
      </p>
    </div>
  )
}

Box.propTypes = {
  className: PropTypes.string.isRequired,
  thisNumber: PropTypes.number,
  shadow: PropTypes.boolean

}

Box.defaultProps = {
  className: 'box',
  thisNumber: 9,
  shadow: false
}
console.log(webComponentsLoaded)
class MyApp extends Valence.Component {
  render() {
    return <Box id="box" className="box" shadow={false}/>
  }
}







Valence.realize(
  <MyApp/>, el('#root')
)
