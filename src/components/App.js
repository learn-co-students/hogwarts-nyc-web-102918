import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Tile from './Tile'

let weightKey='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
class App extends Component {

  state = {
    hogs: hogs
  }

  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/search?api_key=SzWFZPVvj5Pw5yp39B5gQsCTSiYdAq9E&q=pig&limit=13&offset=0&rating=G&lang=en')
    .then(res => res.json())
    .then(res => {
    let gifArray = res.data.map(gif => {
        return gif.images.fixed_height_downsampled
      })
      // let updatedHogs = hogs.map((hog,i)=> Object.assign({},{..hog},url:gifArray[i]))
      return gifArray
    }).then(console.log)
  }

  handleSortName = () => {
    console.log("sup");
    let sortedArray = [...hogs].sort((h1,h2) => {
      if (h1.name < h2.name)
    return -1;
  if (h1.name > h2.name)
    return 1;
  return 0;
    })
    this.setState({hogs: sortedArray})
    console.log(sortedArray);
  }

  handleSortWeight = () => {
    let sortedArray=[...hogs].sort((h1,h2)=>{
      return h2[weightKey] - h1[weightKey]
    })
    this.setState({hogs:sortedArray})
  }

  handleGrease = (event) => {
    let thisArray=event.target.checked ? [...hogs].filter((hog)=> hog.greased) : hogs
    this.setState({hogs:thisArray})

  }

  // url={this.state.urls[i]}

  render() {

    return (
      <div className="App">
          < Nav />
          <button onClick={this.handleSortName}>Sort By Name</button>
          <button onClick={this.handleSortWeight}>Sort By Weight</button>
          Greased ?  <input onChange={this.handleGrease} type="checkbox"/>

          <div className="ui-grid-container">
              {this.state.hogs.map(eachHog => <Tile key={eachHog.name} hogObj={eachHog}/>)}

          </div>
      </div>
    )
  }
}

export default App;
