import React from 'react';
import { useQuery } from 'react-query';
import Vehicle from './Vehicle';

const fetchVehicles = async () => {
    const res = await fetch('http://swapi.dev/api/vehicles/');
    return res.json();
}

const Vehicles = () => {
    const { data, status } = useQuery('people', fetchVehicles);
    console.log(data);

    return (
        <div>
            <h2>Vehicle</h2>
            {/* { status } */}

            {status === 'loading' && (
                <div>Loading data</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}
            
            {status === 'success' && (
                <div>
                    {data.results.map(vehicle => <Vehicle key={vehicle.name} vehicle={vehicle} />)}
                </div>
            )}
        </div>
    );
}

export default Vehicles;