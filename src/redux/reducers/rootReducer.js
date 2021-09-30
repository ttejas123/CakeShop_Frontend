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
import product from './master/product'
// //import users from '@src/views/user/store/reducer'
import warehouse from './master/warehouse'
import category from './master/category'
import productSKU from './master/productSKU'
import kycType from './master/kyc/KycType'
import attribute from './master/attribute'
const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  country,
  city,
  editCity,
  states,
  brands,
  SubAttributes,
  warehouse,
  product,
  category,
  productSKU,
  kycType,
  attribute
  //users
})

export default rootReducer
