import {takeLatest, all} from 'redux-saga/effects';
import {UserTypes} from '../Redux/getUserRedux';
import {getUserSaga} from './getUserSaga';
import {GameTypes} from '../Redux/getGameRedux';
import {getGameSaga} from './getGameSaga';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.USER_DATA_REQUEST, getUserSaga),
    takeLatest(GameTypes.GAME_DATA_REQUEST, getGameSaga),
  ]);
}
