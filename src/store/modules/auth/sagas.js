import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './action';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

// eslint-disable-next-line
function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens/', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    // Mandando as informações de token para o header da API
    axios.defaults.headers.Authorization = `Header ${response.data.token}`;

    toast.success('Autenticação válida!');
    // Redirecionando o usuário para a rota configurada no prevPath caso ele não acesse a rota autenticada
    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuário ou senha inváidos.');
    yield put(actions.loginFailure);
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;

  axios.defaults.headers.Authorization = `Header ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
