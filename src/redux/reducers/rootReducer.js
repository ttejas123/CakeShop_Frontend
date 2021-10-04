// ** Redux Imports
import { combineReducers } from "redux"

// ** Reducers Imports
import auth from "./auth"
import authenticate from "./authenticate/index"
import statusBS from "./statusBS/index"
import navbar from "./navbar"
import layout from "./layout"
import country from "./master/country"
import city from "./master/city"
import states from "./master/state"
import brands from "./master/brand"
import SubAttributes from "./master/subCat/SubAttributes"
import currency from "./master/currency/index"
import employee from "./master/employee/index"
import editAddCategory from "./master/subCat/SubAttributes/editAddCateogry"
import industry from "./master/industry"
import editAddCity from "./master/city/editAddCity"
// //import users from '@src/views/user/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  country,
  city,
  states,
  brands,
  SubAttributes,
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
