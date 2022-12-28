import {combineReducers, applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../Saga';

const rootReducer = combineReducers({
  user: require('./getUserRedux').reducer,
  game: require('./getGameRedux').reducer,
});
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);
export default store;
