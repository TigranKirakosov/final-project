import regeneratorRuntime from 'regenerator-runtime'; // To handle generators & async/await
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import 'Sass/main.scss';

import store from 'Redux/store';
import { EventEmitter } from 'events';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
