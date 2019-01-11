import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import Hogs from './Hogs'


class App extends Component {
  state = {
    hogsData: hogs
  }

  sortByName = () => {
  console.log('hi');
    const sortArray = this.state.hogsData.sort((a, b) => {
       if (a.name < b.name) {return -1}
       if (a.name > b.name) {return +1}
     })

    this.setState( {
      hogsData: sortArray
    })
  }
  sortByWeight = () => {
    const weight = this.state.hogsData.sort((a, b) => {
       if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) {return -1}
       if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) {return +1}
  })
  this.setState( {
    hogsData: weight
  })
}
  handleGreased = (event) => {
if (event.target.innerText === "Greased") {
  const greasedHog= hogs.filter(hog => {
    return hog.greased
  })
  this.setState( {
    hogsData: greasedHog
  })
  event.target.innerText = "Not Greased"
}else{
  const greasedHog= hogs.filter(hog => {
    return !hog.greased
  })
  this.setState( {
    hogsData: greasedHog
  })
  event.target.innerText = "Greased"
}

  }

  render() {
    console.log(this.state.hogsData);
    return (
      <div className="App">
        <button onClick={this.sortByName}> Sort By Name </button>
        <button onClick={this.sortByWeight}> Sort By Weight </button>
        <button onClick={this.handleGreased}>{this.handleGreased ? "Greased" : "Not Greased"}</button>
          < Nav />

          <div className= 'ui grid container'>
        {this.state.hogsData.map((hog) => {
          return  < Hogs key= {hog.name} greased={hog.greased} highestMedalAchieved ={hog['highest medal achieved']} name= { hog.name} specialty= {hog.specialty} weight= {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} pic = {`${hog.name.toLowerCase().split(' ').join('_')}.jpg`} />

        })}
      </div>
      </div>
    )
  }
}

export default App;
