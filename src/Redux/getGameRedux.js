import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  gameDataRequest: null,
  gameDataSuccess: ['data'],
  gameDataFailure: ['error'],
});

export const GameTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetchingData: false,
  fetchedData: false,
  error: null,
});

/* ------------- Reducers ------------- */
export const requestGameData = state => {
  return state.merge({fetchingData: true});
};

export const successGameData = (state, {data}) => {
  return state.merge({
    fetchingData: false,
    error: null,
    data,
    fetchedData: true,
  });
};
export const failureGameData = (state, {data}) => {
  return state.merge({
    fetchingData: false,
    error: true,
    data: null,
    fetchedData: false,
  });
};
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GAME_DATA_REQUEST]: requestGameData,
  [Types.GAME_DATA_SUCCESS]: successGameData,
  [Types.GAME_DATA_FAILURE]: failureGameData,
});
