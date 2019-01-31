import React, { Component } from 'react';
import Details from './Details';

class Card extends Component {
    state={details: false, hidden: false, gif: null}
   convertImageFile= (name) => {
     return require('../hog-imgs/' + name.toLowerCase().split(' ').join('_') + '.jpg')
   }
   showDetails= () => {
     this.setState({details: !this.state.details})
   }
   hidePig = () => {
     this.setState({hidden: true})
   }
   getGif = () => {
     fetch('http://api.giphy.com/v1/gifs/random?tag=pig&api_key=BjWrnrIgxuFNHOOobBsAnUuQNISKATz4&li')
     .then(response => response.json())
     .then(data => this.setState({gif: data.data.image_url}))
   }
  render() {
    return (
      <div className={this.state.hidden ? 'hiddenPig' : ''}>
        <div className= 'ui eight wide column'>
          <h1>{this.props.hog.name}</h1>
          <button onClick={this.hidePig}>Hide pig</button><br/>
          <button onClick={this.getGif}>Show Gif </button><br/>
          <img style={{"width":"200px"}} src= {this.state.gif ? this.state.gif : this.convertImageFile(this.props.hog.name)} onClick= {this.showDetails}/>
          {this.state.details && <Details hog={this.props.hog} />}
        </div>
      </div>
    );
  }

}

export default Card;
