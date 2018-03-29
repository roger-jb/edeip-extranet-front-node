import {routerReducer as routing} from 'react-router-redux'
import { combineReducers } from 'redux'

// import each reducer
import mainReducer from './mainReducer'

export default combineReducers({
  // add all reducers here
  mainState: mainReducer,
  routing,
})