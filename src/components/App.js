import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hog from './Hog'
import hogs from '../porkers_data';

class App extends Component {
	state = {
		sort: "name",
		filter: null
	}

	getHogs = () => {
		let clone = hogs.slice()

		if (this.state.filter) {
			const filterVal = Boolean(Number(this.state.filter))

			clone = clone.filter(hog => hog.greased === filterVal)
		}

		if (this.state.sort === "name") {
			clone.sort((a, b) => a.name.localeCompare(b.name))
		} else if (this.state.sort === "weight") {
			clone.sort((a, b) => b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"])
		}

		return clone.map(hog => <Hog {...hog} />)
	}

	handleChange = e => {
		this.setState({[e.target.name]: e.target.value})
	}

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="ui form container">
	        <div className="field">
		        <label htmlFor="sort">Sort by:</label>
		        <select name="sort" onChange={this.handleChange} className="ui dropdown" value={this.state.sort} >
		        	<option value="name">Name</option>
		        	<option value="weight">Weight</option>
		        </select>
		      </div>
	        <div className="field">
		        <label htmlFor="filter">Filter by:</label>
		        <select name="filter" onChange={this.handleChange} className="ui dropdown" defaultValue="">
		        	<option value="">None</option>
		        	<option value="1">Greased</option>
		        	<option value="0">Ungreased</option>
		        </select>
		      </div>
		     </div>
        <div className="ui grid container">
        	{this.getHogs()}
        </div>
      </div>
    )
  }
}

export default App;
