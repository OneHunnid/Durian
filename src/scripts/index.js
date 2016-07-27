import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import MainLayout from './containers/MainLayout'
import Home from './components/Home'
import NotFound from './components/NotFound'

import store from './store/store'

const history = syncHistoryWithStore(hashHistory, store)

const app = document.querySelector('.root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={MainLayout}>
        <Route path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  app
);
