import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTile from './HogTile'

class App extends Component {
state = {
  hogs:hogs
}

sortWeight = () => {
  //spread operator
  let weightArray = [...this.state.hogs]
  console.log(weightArray)
  weightArray.sort(function(a, b) {
    return a.weight - b.weight
  })
// aqui va a render one more time y luego va organizar todos los animales en el dom porque se ejecuta tdo de nuevo con esta criteria
  this.setState({hogs : weightArray})
  //console.log(weightArray)

}

sortName = () => {
  //spread operator
  let nameArray = [...this.state.hogs]
  //console.log(weightArray)
  nameArray.sort(function(a, b) {
    if( a.name.toUpperCase() < b.name.toUpperCase()){
      return -1
    } else {
      return 1
    }
  })
// aqui va a render one more time y luego va organizar todos los animales en el dom porque se ejecuta tdo de nuevo con esta criteria
  this.setState({hogs : nameArray})
  //console.log(weightArray)
  console.log(nameArray)
}

sortGreased = () => {
  //spread operator
  let greasedArray = [...this.state.hogs]
  //console.log(weightArray)
  const array = []
  greasedArray.map( grease => {
    if (grease.greased == true){
      return array.push(grease)
    }
  })
// aqui va a render one more time y luego va organizar todos los animales en el dom porque se ejecuta tdo de nuevo con esta criteria
  this.setState({hogs : array})
  //console.log(weightArray)
  console.log(array)
}

reset = () => {
  this.setState({hogs: hogs})
}

hide = (name) => {
  console.log("hola")
  let nameArray = [...this.state.hogs]
  const array = []
  //nameArray.array.map(name => {
  console.log(name)
  nameArray.map(name1 => {
    if (name1.name != name){
      array.push(name1)
    }
  })
  this.setState({hogs : array})
}
  render() {
    //console.log(this.state.hogs)
    return (
      <div className="App">
          < Nav sortWeight={this.sortWeight} sortName={this.sortName} sortGreased={this.sortGreased} reset={this.reset}/>
          <div className="ui link cards">
              {this.state.hogs.map(hog => {
                // estamos usando este componente de hog tile por eso lo importamos al principio, el key viene de nuestraa data
                // el nombre me refiero.
                return <HogTile  key={hog.name}name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog.medal} hide={this.hide} />



              })}
          </div>
      </div>
    )

  }
}

export default App;
