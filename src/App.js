import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Route exact path="/" component={Home} />
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
