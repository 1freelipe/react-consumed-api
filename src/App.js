import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import history from './services/history';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header';
import RoutesPages from './routes';

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Header />
            <RoutesPages />
            <GlobalStyle />
            <ToastContainer autoClose={3000} className="toast-container" />
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
