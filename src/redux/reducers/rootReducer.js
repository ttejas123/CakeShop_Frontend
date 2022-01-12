// ** Redux Imports
import { combineReducers } from "redux"

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'

import authenticate from "./authenticate/index"
import statusBS from "./statusBS/index"
import cake from './cake/index'
import order from './orders/index'

import ecommerce from '@src/views/ecommerce/store/reducer'
const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  statusBS,
  authenticate,
  cake,
  order,
  ecommerce
})

export default rootReducer
