import {createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

export default function configureStore (initialStore) {
  const middlewares = [
    thunk,
  ];
  const store = createStore(rootReducer, initialStore, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension : f => f
  )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer)
    })
  }

  return store
}