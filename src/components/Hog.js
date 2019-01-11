import React, { Component } from 'react'
import augustusGloop from '../hog-imgs/augustus_gloop.jpg'
import bayOfPigs from '../hog-imgs/bay_of_pigs.jpg'
import Cherub from '../hog-imgs/cherub.png'
import galaxyNote from '../hog-imgs/galaxy_note.jpg'
import leggoMyEggo from '../hog-imgs/leggo_my_eggo.jpg'
import Mudblood from '../hog-imgs/mudblood.jpg'
import piggySmalls from '../hog-imgs/piggy_smalls.jpg'
import Porkchop from '../hog-imgs/porkchop.jpg'
import Rainbowdash from '../hog-imgs/rainbowdash.jpg'
import Sobriety from '../hog-imgs/sobriety.jpg'
import theProsciuttoConcern from '../hog-imgs/the_prosciutto_concern.jpg'
import Trouble from '../hog-imgs/trouble.jpg'
import TruffleShuffle from '../hog-imgs/truffleshuffle.jpg'

const images = {
	Mudblood,
	Porkchop,
	Cherub,
	Trouble,
	Sobriety,
	Rainbowdash,
	TruffleShuffle,
	'Piggy smalls': piggySmalls,
	'Bay of Pigs': bayOfPigs,
	'The Prosciutto Concern': theProsciuttoConcern,
	'Galaxy Note': galaxyNote,
	'Leggo My Eggo': leggoMyEggo,
	'Augustus Gloop': augustusGloop
}

export default class Hog extends Component {
	state = {
		infoDisplay: false,
		hidden: false
	}

	handleClick = e => {
		this.setState({[e.target.name || "infoDisplay"]: !this.state[e.target.name || "infoDisplay"]})
	}

	render() {
		return (
			<div key={this.props.id} onClick={this.handleClick} className="ui four wide column card" style={{display: this.state.hidden ? "none" : ""}}>
				<div className="image">
					<img src={images[this.props.name]} alt="" />
				</div>
				<div className="content">
					<div className="header">{this.props.name}</div>
					<div className="description" style={{display: this.state.infoDisplay ? "" : "none"}}>
						<p className="specialty">Specialty: {this.props.specialty}</p>
						<p className="weight">Weight: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
						<p className="medal">Best Medal: {this.props['highest medal achieved']}</p>
						<p className="greased">Is{this.props.greased ? "" : "n't"} Greased</p>
					</div>
				</div>
				<div className="extra info">
					<button onClick={this.handleClick} className="ui button" name="hidden">Hide Hog</button>
				</div>
			</div>
		)
	}
}