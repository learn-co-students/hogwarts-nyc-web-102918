import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTile from './HogTile'

class App extends Component {
state = {
  hogs:hogs
}


  render() {
    //console.log(this.state.hogs)
    return (
      <div className="App">
          < Nav />
          <div className="ui grid container">
              {this.state.hogs.map(hog => {
                // estamos usando este componente de hog tile por eso lo importamos al principio, el key viene de nuestraa data
                // el nombre me refiero.
                return <HogTile key={hog.name}name={hog.name}/>


              })}
          </div>
      </div>
    )

  }
}

export default App;
