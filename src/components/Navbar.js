import React from 'react'

const Navbar = ({setPage}) => {
    return ( 
        <nav>
            <button onClick={() => setPage('planets')}>Planet</button>
            <button onClick={() => setPage('people')}>People</button>
            <button onClick={() => setPage('starships')}>Starship</button>
            <button onClick={() => setPage('vehicles')}>Vehicles</button>

        </nav>
     );
}
 
export default Navbar;