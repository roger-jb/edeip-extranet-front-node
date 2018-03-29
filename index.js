import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from './containers/Main'
import About from './containers/About'
import Repos from './containers/Repos'
import Repo from './containers/Repo'
import Home from './containers/Home'

const store = configureStore()

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="/repos" component={Repos}>
          <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
