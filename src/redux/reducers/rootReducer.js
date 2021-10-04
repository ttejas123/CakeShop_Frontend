// ** Redux Imports
import { combineReducers } from "redux"

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import country from './master/country'
import city from './master/city'
import states from './master/state'
import SubAttributes from './master/subCat/SubAttributes'
import product from './master/product'
import authenticate from "./authenticate/index"
import statusBS from "./statusBS/index"
import brands from "./master/brand"
import currency from "./master/currency/index"
import employee from "./master/employee/index"
import editAddCategory from "./master/subCat/SubAttributes/editAddCateogry"
import industry from "./master/industry"
import editAddCity from "./master/city/editAddCity"
// //import users from '@src/views/user/store/reducer'
import warehouse from './master/warehouse'
import category from './master/category'
import productSKU from './master/productSKU'
import kycType from './master/kyc/KycType'
import attribute from './master/attribute'
import catalogue from './master/catalogue'
const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  country,
  city,
  states,
  brands,
  SubAttributes,
  warehouse,
  product,
  category,
  productSKU,
  kycType,
  attribute,
  catalogue,
  editAddCategory,
  statusBS,
  authenticate,
  currency,
  employee,
  industry,
  editAddCity

  //users
})

export default rootReducer
