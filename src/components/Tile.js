import React, { Component } from 'react';

// function HogImg(props){
//   let name=props.name.toLowerCase()
//   return <img src={name}>
// }
let weightKey1='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'


function Hoginfo(props){

  if (props.clicked){
    return <p>{props.hogObj.specialty} <br></br>Greased? {props.hogObj.greased.toString()} Highest Medal Achieved {props.hogObj['highest medal achieved']} Weight: {props.hogObj[weightKey1]}</p>
  }else{return null}
}

class Tile extends Component {

  state = {
    clicked: false,
    hidden: false
  }

  handleClick = () => {
    let state= this.state.clicked ? false : true
    this.setState({
        clicked: state
      })
    }

  handleHide = () => {
    this.setState({
      hidden: true
    })
  }

correctImg = (name) => {
  let normalName = name.toLowerCase()
  let newNormalName = normalName.split(' ').join('_');
  return newNormalName
}


  render() {
    console.log("this is", this.props.url);
    return (
      <div className={`pigTile`}>
      <button onClick={this.handleHide}>HIDE ME</button>
      <div onClick={this.handleClick} className={this.state.hidden ? "hide" : ""} >
        <p>{this.props.hogObj.name}</p>
        <img src={this.props.url ? this.props.url.url :null}/>
        <Hoginfo clicked={this.state.clicked} hogObj={this.props.hogObj} />
      </div>
      </div>
    );
  }

}

export default Tile;
