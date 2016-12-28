import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {history} from './store.js';
import App from './components/app';
import Artists from './components/artists';
import Artist from './components/artist';
import NotFound from './components/notfound';

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Artists} />
      <Route path='artist(/:id)' component={Artist} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);

// export
export {router};
