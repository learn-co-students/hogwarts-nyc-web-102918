import React from 'react'




class HogTile extends React.Component {


handleClick = (e) => {


}


render(){
  // this is the child
  return  <p className="ui eight wide column" onClick={this.handleClick}>{this.props.name}</p>
  //console.log(this.props)

}



}



export default HogTile
