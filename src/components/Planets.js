import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (page) => {
  const res = await fetch('http://swapi.dev/api/planets/');
  return res.json();
}

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets, {
    staleTime: 2000,
    cacheTime: 10,
    onSuccess: () => console.log('data fetched with no problems'),
  });
  console.log(data);

  return (
    <div>
      <h2>Planets</h2>

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          { data.results.map(planet => <Planet key={planet.name} planet={planet} /> ) }
        </div>
      )} 
    </div>
  );
}
 
export default Planets;