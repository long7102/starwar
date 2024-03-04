import React from 'react';

const Person = ({ person }) => {
  return (
    <div className="card">
      <h3>{ person.name }</h3>
      <p>Gender: { person.gender }</p>
      <p>Birth year: { person.birth_year }</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <p>Hair Color: {person.hair_color}</p>
    </div>
  );
}
 
export default Person;