import React from 'react'

const Planet = ({planet}) => {
    return (
        <div className='card'>
            <h3>{ planet.name }</h3>
            <p>Terrain: {planet.terrain}</p>
            <p>Climate: {planet.climate}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Rotation period: {planet.rotation_period}</p>
            <p>Orbital period: {planet.orbital_period}</p>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export default Planet