import React from 'react';


export const SmurfCard = ({ smurf }) => {
    return (
        <div className='smurf-card'>
            <h1>{smurf.name}</h1>
            <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3>
        </div>
    )
}

