import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'

const size = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

class App extends Component {

  state = {
    filtered: "all-hogs",
    sortBy: "name"
  }

  handleOnChange = (e) => {
      this.setState( {[e.target.name]: e.target.value} )
  }

  sortHogs = () => {
    let sortedHogs = hogs.slice()
    if (this.state.filtered == "greased") {
      sortedHogs = sortedHogs.filter(function(hog){
        return hog.greased
      })
    }
    else if (this.state.filtered == "no-grease") {
      sortedHogs = sortedHogs.filter(function(hog){
        return !hog.greased
      })
    }
    if (this.state.sortBy == 'weight')
      sortedHogs.sort(function(a, b) {
        return b[size] - a[size];
      })
    else {
      sortedHogs.sort(function(a, b) {
        return a.name.localeCompare(b.name)
      })
    }
    return sortedHogs

  }

  handleCheckboxOnChange = (e) => {
    this.setState( {filtered: e.target.checked} )
  }

  render() {
    return (
      <div className="App">
          < Nav />
          Sort By:
          <select name="sortBy" onChange={this.handleOnChange}>
  				<option value="name">Name</option>
  				<option value="weight">Weight</option>
  				</select>
          Filter Greasers:
          <select name="filtered" onChange={this.handleOnChange}>
  				<option value="greased">Greased</option>
  				<option value="no-grease">No Grease</option>
          <option value="all-hogs">All Hogs</option>
  				</select>
          < HogList hogData={this.sortHogs()}/>
      </div>
    )
  }
}

export default App;
