import React from 'react';

const Vehicle = ({ vehicle }) => {
  return (
    <div className="card">
      <h3>{ vehicle.name }</h3>
      <p>Model: { vehicle.model }</p>
      <p>Manufacturer: { vehicle.manufacturer }</p>
      <p>Cost: {vehicle.cost_in_credits}</p>
      <p>Length: {vehicle.length}</p>
      <p>Speed: {vehicle.max_atmosphering_speed}</p>
      <p>Vehicle class: {vehicle.vehicle_class}</p>
    </div>
  );
}
 
export default Vehicle;