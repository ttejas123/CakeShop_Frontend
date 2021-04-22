import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Bidoya'

// ** Default Route
const DefaultRoute = '/country'

// ** Merge Routes
const Routes = [
  {
    path: '/country',
    component: lazy(() => import('../../views/country/Home'))
  },
  {
    path: '/state',
    component: lazy(() => import('../../views/state/state'))
  },
  {
    path: '/vas',
    component: lazy(() => import('../../views/vas/vas'))
  },
  {
    path: '/brand',
    component: lazy(() => import('../../views/brand/brand'))
  },
  {
    path: '/category',
    component: lazy(() => import('../../components/category/CategoryList.js'))
  },
  {
    path: '/city',
    component: lazy(() => import('../../components/city/CityList'))
  },
  {
    path: '/currency',
    component: lazy(() => import('../../components/currency/CurrencyList'))
  },
  {
    path: '/losgistics',
    component: lazy(() => import('../../views/logistics/logistics'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
