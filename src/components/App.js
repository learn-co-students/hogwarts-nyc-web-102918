import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Gallery from './Gallery'


class App extends Component {
  state= {
    hogs,
    greasedFilter: false,
  }
  sortByName= () => {
    let newHogs= [...this.state.hogs]
    newHogs.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({hogs: newHogs});
  }

  sortByWeight= () => {
    let newHogs= [...this.state.hogs]
    newHogs.sort((a, b) => a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]-b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"])
    this.setState({hogs: newHogs});
  }

  checkbox = () => {
    this.setState({greasedFilter: !this.state.greasedFilter})
  }

  render() {
    console.log(this.state.hogs)
    return (
      <div className="App">
        <Nav hogs= {this.state.hogs} sortByName={this.sortByName} checkbox={this.checkbox} sortByWeight= {this.sortByWeight}/>
        <Gallery hogs= {this.state.hogs} greasedFilter={this.state.greasedFilter}/>
      </div>
    )
  }
}

export default App;
