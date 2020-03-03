import React from 'react';

import { SmurfCard } from './SmurfCard';


export const SmurfList = ({smurfs, isFetching, errors}) => {
    return (
        <div className="smurf-container">      
            
                {smurfs.map(item => (
                <SmurfCard smurf={item} key={item.id} />
            ))}
                
        </div>
    )
}