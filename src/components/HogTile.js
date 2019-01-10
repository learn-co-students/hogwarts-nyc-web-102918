import React from 'react'



class HogTile extends React.Component {

state = {
  specialty: "",
  clicked: false
}

handleClick = () => {
  // if (clicked == 0){
  //   clicked = 1
  //   // specialty is the key y debo poner primero
  //   // with setstate is going to re render otra vez
  //   this.setState({specialty: this.props.specialty})
  //
  //   clicked = 0
  // }  else {
  //   clicked = 0
  // }

// estamos heredando sobre un parent por eso uso this.props
  this.setState({
     clicked: !this.state.clicked,
     specialty: this.props.specialty,
     greased: this.props.greased,
     weight: this.props.weight,
     medal: this.props.medal

  })

}
// ternary
//   <br />Weight:{this.state.weight}<br /> </div>

      //this header me va a poner el nombre en negrita
      //console.log(this.props)
      // dentro del render todo es JSX y por eso debo usar curlybraces
render(){
  const imgSrc = this.props.name.split(" ").join("_").toLowerCase() + '.jpg'
  // this is the child
  return(
  <div className="card">
      <div className="image">
        <img src={ require(`../hog-imgs/${imgSrc}`)}/>
      </div>
      <div className="content">

        <div className="header" onClick={this.handleClick}>{this.props.name}</div>
          <div className="meta"> <a> {this.state.specialty} </a> </div>
          <div className="description">
          {this.state.greased ? `Greased:${this.state.greased}` : null}
          <br />{ this.state.medal ? `Medal:${this.state.medal}` : null } <br />
          {this.state.weight ? `Weight:${this.state.weight}`: null}</div>
          <button onClick={() => this.props.hide(this.props.name)}>Hide</button>
      </div>
  </div>
 )
}



}



export default HogTile
