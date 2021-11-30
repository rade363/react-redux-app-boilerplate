import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import ErrorBoundary from './components/error-boundary';
import App from './components/app';

import configureStore from './store';

import { saveState, loadState } from './utils/localStorage';
import throttle from './utils/throttle';

import './css/style.scss';

const initialState = loadState();
const { store } = configureStore(initialState);

store.subscribe(throttle(() => {
  const state = store.getState();
  saveState(state);
}, 1000));

const HotApp = hot(() => (
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
));

ReactDOM.render(
  <HotApp />,
  document.getElementById('root'),
);
