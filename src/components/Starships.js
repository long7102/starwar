import React from 'react';
import { useQuery } from 'react-query';
import Starship from './Starship';

const fetchStarship = async () => {
  const res = await fetch('http://swapi.dev/api/starships/');
  return res.json();
}

const Starships = () => {
  const { data, status } = useQuery('Starship', fetchStarship);
  console.log(data);

  return (
    <div>
      <h2>Starship</h2>
      {/* { status } */}

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          { data.results.map(starship => <Starship key={starship.name} starship={starship} /> ) }
        </div>
      )} 
    </div>
  );
}
 
export default Starships;