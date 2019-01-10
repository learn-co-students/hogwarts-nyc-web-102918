import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Tile from './Tile'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <div className="ui-grid-container">
              {hogs.map(eachHog => <Tile hogObj={eachHog}/>)}
          </div>
      </div>
    )
  }
}

export default App;
