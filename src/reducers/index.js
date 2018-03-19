import {routerReducer as routing} from 'react-router-redux'
import { combineReducers } from 'redux'

// import each reducer
import homeReducer from './homeReducer'

export default combineReducers({
  homeState: homeReducer,
  routing,
})