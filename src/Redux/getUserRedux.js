
import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';


/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
    
    userDataRequest : null,
    userDataSuccess : ['data'],
    userDataFailure: ["error"],
});


export const UserTypes = Types;
export default Creators;


/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    data: null,
    fetchingData: false,
    fetchedData: false,
    error: null,
});

/* ------------- Reducers ------------- */
export const requestUserData = state => {
    return state.merge({fetchingData: true});
}

export const successUserData = (state, {data}) => {
    return state.merge({
        fetchingData: false,
        error: null,
        data,
        fetchedData: true,
    });
}
export const failureUserData = (state, {data}) => {
    return state.merge({
        fetchingData: false,
        error: true,    
        data: null,
        fetchedData: false,
    })
}
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.USER_DATA_REQUEST]: requestUserData,
    [Types.USER_DATA_SUCCESS]: successUserData,
    [Types.USER_DATA_FAILURE]: failureUserData,
});