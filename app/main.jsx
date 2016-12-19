import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App.jsx';
import application from '../reducers/heroes.js';
import {getHeroes} from '../actions/index.js';

let store = createStore(application);

getHeroes(store.dispatch);
render(
    <Provider store={store}>
      <App />
    </Provider>
    ,

    document.getElementById('app')

    );

