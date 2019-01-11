import React, {Component} from 'react'

class Hogs extends Component{

  makeItPretty = (event) => {
    event.target.parentNode.querySelector('.PigsInABlanket').style.display = 'block'
    // document.querySelector('.PigsInABlanket')
  }
  render() {
    // console.log(this.props);
    return(

        <div className = 'ui eight wide column'>
          <h2 key = {this.props.name} onClick= {this.makeItPretty}>  Name: {this.props.name} </h2>
          <img src={ require(`../hog-imgs/${this.props.pic}`) } />
        <div className = 'PigsInABlanket'>
          <h3 > Greased: {`${this.props.greased}`}</h3>
          <h3> Medal: {this.props.highestMedalAchieved}</h3>
          <h3> Specialty: {this.props.specialty}</h3>
          <h3> Weight: {this.props.weight}</h3>
        </div>
      </div>

    )
  }

}








export default Hogs
