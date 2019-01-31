import React, { Component } from 'react';
import Card from './Card'

class Gallery extends Component {

  render() {
    // console.log(this.props);
    const greasedHogs= this.props.hogs.filter(hog => hog.greased)
    return (
      <div className= "ui grid container">
      {this.props.greasedFilter ? greasedHogs.map(hog=> <Card hog={hog} />) : this.props.hogs.map(hog=> <Card hog={hog} />)}
      </div>
    );
  }

}

export default Gallery;
