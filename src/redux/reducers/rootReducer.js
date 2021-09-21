// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import country from './master/country'
import city from './master/city'
import editCity from './master/city/editCity'
import states from './master/state'
import brands from './master/brand'
import SubAttributes from './master/subCat/SubAttributes'
// //import users from '@src/views/user/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  country,
  city,
  editCity,
  states,
  brands,
  SubAttributes

  //users
})

export default rootReducer
