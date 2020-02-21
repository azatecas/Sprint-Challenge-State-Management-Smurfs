import React from 'react';

import { SmurfCard } from './SmurfCard';


export const SmurfList = ({smurfs, isFetching, errors}) => {
    return (
        <>
            <h1>This is SmurfList</h1>
            {console.log('smurfs in list', smurfs)}
            
            {smurfs.map(item => (
                <SmurfCard smurf={item} key={item.id}/>
                ))}
        </>
    )
}