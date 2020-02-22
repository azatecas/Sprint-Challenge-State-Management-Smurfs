import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { postSmurfs } from '../actions';


export const SmurfForm = ({ postSmurfs }) => {
    const [smurf, setSmurf ] = useState({
        name:'',
        age:0,
        height:'',
        id: Date.now()
    })

    const inputHandler = e => {
        setSmurf({
            ...smurf, [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        postSmurfs(smurf);
        
    }

    return (
        <div>
            <form >
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                name="name"
                label="name"
                placeholder="Smurfett"
                value={smurf.name}
                onChange={inputHandler}
                className="input"
            />
            <label htmlFor="age">Age</label>
            <input 
                type="text"
                name="age"
                label="age"
                placeholder="1"
                value={smurf.age}
                onChange={inputHandler}
                className="input"
            />
            <label htmlFor="height">Height</label>
            <input 
                type="text"
                name="height"
                label="height"
                placeholder="9cm"
                value={smurf.height}
                onChange={inputHandler}
                className="input"
            />
            <button onClick={submitHandler}>ADD</button>
        </form>
        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         smurfs: state.smurfs,
//         errors: state.errors
//     }
// }

// export default connect(
//     mapStateToProps,
//         { postSmurf }
//     )(SmurfForm);