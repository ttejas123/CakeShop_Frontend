// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import authenticate from './authenticate/index'
import statusBS from './statusBS/index'
import navbar from './navbar'
import layout from './layout'
import country from './master/country'
import city from './master/city'
import editAddCity from './master/city/editAddCity'
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
  editAddCity,
  states,
  brands,
  SubAttributes,
  statusBS,
  authenticate

  //users
})

export default rootReducer
