import React, {Component} from 'react'
import HogTile from './HogTile'

const HogList = (props) => {
    return (
      <div style={{top: '400px'}}className="ui grid container">
      {props.hogData.map(hog => {
        return < HogTile key={hog.name} {...hog}/>
      })}
      </div>
    )
}

export default HogList;
