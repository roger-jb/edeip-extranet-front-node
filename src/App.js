import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import Home2 from './containers/Home2'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/articles" component={Home} />
              <Route path="/test" component={PrivateRoute()(Home)} />
              <Route path="/test2" component={PrivateRoute((props)=>{console.log(props)})(Home2)} />
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

const PrivateRoute = callback => BaseComponent => {
  const routeOnEnterCallback = (props) => {
    if (callback && typeof callback === 'function') {
      callback(props)
    }
  }

  class routeOnEnterComponent extends React.Component {
    componentWillMount() {
      routeOnEnterCallback(this.props)
    }

    componentWillReceiveProps(nextProps) {
      // not 100% sure about using `locatoin.key` to distinguish between routes
      if (nextProps.location.key !== this.props.location.key) {
        routeOnEnterCallback(nextProps)
      }
    }

    render() {
      if (store.getState().homeState.isConnected) {
        return <BaseComponent {...this.props} />
      } else {
        return <Home {...this.props}/>
      }
    }
  }

  return routeOnEnterComponent
}


export default App
