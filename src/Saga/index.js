import {takeLatest, all} from 'redux-saga/effects';
import {UserTypes} from '../Redux/getUserRedux';
import {getUserSaga} from './getUserSaga';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.USER_DATA_REQUEST, getUserSaga)]);
}
