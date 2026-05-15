import { all, takeLatest } from 'redux-saga/effects';
// import * as actions from './action';
import * as types from '../types';

// teste só para o eslint + prettier não barrar
// eslint-disable-next-line
function* loginRequest({ payload }) {
  console.log('SAGA', payload);
  // yield payload;
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
