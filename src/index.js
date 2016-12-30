import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store.js';
import {router} from './router.js';
import {fetchAndStoreSpotifyAccessToken} from './api/token.helper';

// Fetch and store the Spotify access token in localStorage.
fetchAndStoreSpotifyAccessToken();

// render the main component
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
