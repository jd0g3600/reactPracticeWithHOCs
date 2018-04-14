import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import reducers from './reducers';
import Resources from './components/resources';
import requireAuth from './components/hocs/require_authentication';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory } >
      <Route path="/" component={ App }>
        <Route path="resources" component={ requireAuth(Resources) } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

// provider connects with the connect() function (used to promote component to container)
// provider holds redux store, it's purpose is to be notified when the redux store changes
// once the store changes, it updates its connected child components