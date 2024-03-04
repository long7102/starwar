import React from 'react';

const Starship = ({ starship }) => {
  return (
    <div className="card">
      <h3>{ starship.name }</h3>
      <p>Model: { starship.model }</p>
      <p>Cost: {starship.cost_in_credits}</p>
      <p>Manufacturer: { starship.manufacturer }</p>
      <p>Length: {starship.length}</p>
      <p>MGLT: {starship.MGLT}</p>
      <p>Class: {starship.starship_class}</p>
      <p>̶D̶̶E̶̶L̶̶E̶̶T̶̶E̶̶D̶</p>
    </div>
  );
}
 
export default Starship;