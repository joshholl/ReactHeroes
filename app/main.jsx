import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App.jsx';
import application from '../reducers/heroes.js';

let store = createStore(application);

render(
    <Provider store={store}>
      <App />
    </Provider>
    ,

    document.getElementById('app')

    );

