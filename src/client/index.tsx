import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import ErrorBoundary from './components/error-boundary';
import App from './components/app';

import './css/style.scss';

const HotApp = hot(() => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
));

ReactDOM.render(
  <HotApp />,
  document.getElementById('root'),
);
