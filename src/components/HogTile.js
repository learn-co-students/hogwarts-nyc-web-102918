import React, { Component } from 'react';

class HogTile extends Component {

  state = {
    isClicked: false
  }

  getHogName = (hogname) => {
    return hogname.split(" ").map(word => word.toLowerCase()).join("_") + ".jpg"
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    let displayCard
    if (!this.state.isClicked) {
      displayCard = <img src={ require(`../hog-imgs/${this.getHogName(this.props.name)}`) } alt=""/>
    }
    else {
      displayCard = <div>
                      <h3>Specialty: {this.props.specialty}</h3>
                      <h3>Weight: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
                      <h3>Medal: {this.props['highest medal achieved']}</h3>
                      <h3>Greased? {this.props.greased ? "Yep" : "Nah"}</h3>
                    </div>
    }

    return (
      <div className="pigTile" onClick={this.handleClick}>
        <h1>{this.props.name}</h1>
        {displayCard}
      </div>
    );
  }

}

export default HogTile;
