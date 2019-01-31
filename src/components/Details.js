import React from 'react';

const Details = ({hog} ) => {
  return(
    <div className="details">
      <p> Weight: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} </p>
      <p> Highest Medal Achieved: {hog['highest medal achieved']} </p>
      {hog.greased ? <p>Greased</p> : <p>Not greased</p>}
    </div>
  )
}
export default Details;
