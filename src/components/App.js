import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {

  state = {
    hogs: hogs,
    isButtonClicked: false,
  }

  handleClickGreased = () => {
    let greasedHogs = this.state.hogs.filter(hog => hog.greased)
    if (!this.state.isButtonClicked) {
      this.setState({
        hogs: greasedHogs,
        isButtonClicked: !this.state.isButtonClicked
      })
    }
    else {
      this.setState({
        hogs: hogs,
        isButtonClicked: !this.state.isButtonClicked
      })
    }
  }

  handleChange = event => {
    let alphaHogs = [...this.state.hogs].sort((a, b) => {
      return a.name.localeCompare(b.name);
    })

    let weightHogs = [...this.state.hogs].sort((a, b) => b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])

    if (event.target.value === "all") {
      this.setState({
        hogs: hogs
      })
    }
    else if (event.target.value === "name") {
      this.setState({
        hogs: alphaHogs
      })
    }
    else if (event.target.value === "weight") {
      this.setState({
        hogs: weightHogs
      })
    }
  }

  render() {
    let greasedChecker

    !this.state.isButtonClicked ? greasedChecker = <button onClick={this.handleClickGreased} >Show Greased Pigs</button> : greasedChecker = <button onClick={this.handleClickGreased} >Show All Pigs</button>

    return (
      <div className="App">
          < Nav />
          <select onChange={this.handleChange}>
            <option value="all">Sort By NOTHING</option>
            <option value="name">Sort By Name</option>
            <option value="weight">Sort By Weight</option>
          </select>
          {greasedChecker}
          < HogContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
