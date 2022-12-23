import {call, put, takeLatest, all} from 'redux-saga/effects';
import UserApi from '../api/userApi';
import UserActions from '../Redux/getUserRedux';
const api = UserApi.user();

export function* getUserSaga(action) {
  const {userDataSuccess} = action;

  const response = yield call(api.getUserData, userDataSuccess);
  // console.log(response.data);
  if (response.ok) {
    yield put(UserActions.userDataSuccess(response.data));
  } else {
    yield put(UserActions.userDataFailure());
  }
}
