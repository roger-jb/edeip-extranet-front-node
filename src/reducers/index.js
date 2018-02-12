import {routerReducer as routing} from 'react-router-redux'
import { combineReducers } from 'redux'

// import each reducer
import appReducer from './appReducer'

export default combineReducers({
  appReducer: appReducer,
  routing,
})