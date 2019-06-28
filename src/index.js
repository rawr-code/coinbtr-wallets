import React from 'react';
import { render } from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

const WRAPPER = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  WRAPPER
);
