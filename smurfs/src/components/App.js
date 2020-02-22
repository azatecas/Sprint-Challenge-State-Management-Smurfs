import React, { useEffect } from "react";
import "./App.css";

import { SmurfForm } from './SmurfForm';
import { SmurfList } from './SmurfList';
import { connect } from 'react-redux';
import { fetchSmurfs, postSmurfs } from '../actions';



function App({ fetchSmurfs, postSmurfs, smurfs, isFetching, isPosting, errors }) {

useEffect(()=>{   
    fetchSmurfs()  
  }, [])

  // const onSubmitBtn = e => {
  //   e.preventDefault();
  //   fetchSmurfs();
  // }

  console.log('smurfs in app', smurfs);

  return (
    <div>    
      <p>This is App.js</p>
      <SmurfForm 
        postSmurfs={postSmurfs}
      />
      {/* <button onClick={onSubmitBtn}>getStuff</button> */}
      <SmurfList 
        smurfs={smurfs}
        isFetching={isFetching}
        errors={errors}
      />
    </div>
  )
}
const mapStateToProps = state => {
  // console.log('this is state in app', state);
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    isPosting: state.isPosting,
    errors: state.errors
  }
}

export default connect(
    mapStateToProps,
    {
      fetchSmurfs,
      postSmurfs,
    }
    )(App);
