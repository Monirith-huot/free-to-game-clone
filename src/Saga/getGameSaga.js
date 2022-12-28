import {call, put, takeLatest, all} from 'redux-saga/effects';
import GameApi from '../api/gameApi';
import GameActions from '../Redux/getGameRedux';

const api = GameApi.game();

export function* getGameSaga(action) {
  const {gameDataSuccess} = action;

  const response = yield call(api.getAllGameData, gameDataSuccess);
  // console.log(response.data);
  if (response.ok) {
    yield put(GameActions.gameDataSuccess(response.data));
  } else {
    yield put(GameActions.gameDataFailure());
  }
}
