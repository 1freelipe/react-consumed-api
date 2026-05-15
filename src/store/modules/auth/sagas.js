import { all, takeLatest } from 'redux-saga/effects';
// import * as actions from './action';
import * as types from '../types';

// teste só para o eslint + prettier não barrar
function* loginRequest(payload) {
  yield payload;
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
