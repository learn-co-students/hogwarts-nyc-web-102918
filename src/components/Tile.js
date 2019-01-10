import React, { Component } from 'react';

// function HogImg(props){
//   let name=props.name.toLowerCase()
//   return <img src={name}>
// }

class Tile extends Component {

correctImg = (name) => {
  name.toLowerCase(this.props.hogObj.name)
}

  render() {
    return (
      <div className="pigTile">
        <p>{this.props.hogObj.name}</p>
        <img src={require("../hog-imgs/cherub.jpg")}/>
      </div>
    );
  }

}

export default Tile;
