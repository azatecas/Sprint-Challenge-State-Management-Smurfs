import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAIL,
    POST_DATA,
    POST_SUCCESS,
    POST_FAIL
    } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    errors: ""
}

export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            };
        case POST_DATA:
            return {                
                ...state,
                // isPosting: true,                
            };
        case POST_SUCCESS:
            // console.log('action', action);
            // console.log('action Payload', action.payload);
            return {
                ...state,
                smurfs: action.payload,
                // isPosting: false,                
            };
        case POST_FAIL :
            return {
                ...state,
                // isPosting: false,
                errors: action.payload
            };      
        default:
            return state
                
            
    }

}