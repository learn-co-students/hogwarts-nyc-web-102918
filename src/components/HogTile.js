import React from 'react'

const formatName = name => name.split(' ').map(n=>n.toLowerCase()).join("_")


export default class HogTile extends React.Component {

  state = {
    displayDetails: false
  }

details = () => {
  if(this.state.displayDetails){
  return (
    <div>
  <h1>SPECIALTY: {this.props.specialty}</h1>
  <h3>WEIGHT RATIO: {this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
  <h3>MEDAL ACHIEVMENT: {this.props['highest medal achieved']}</h3>
  </div>
)
}
}

handleOnClick = (event) => {
  this.setState({
    displayDetails: !this.state.displayDetails
  })
}

  render(){
    return(
      <div value="name" onClick={this.handleOnClick} className='ui eight wide column'>
      <h1>{this.props.name}</h1>
      <img src={require(`../hog-imgs/${formatName(this.props.name)}.jpg`)} />
      {this.details()}
      </div>
    )
  }
}
