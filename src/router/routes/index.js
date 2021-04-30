import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Bidoya'

// ** Default Route
const DefaultRoute = '/ccdashboard'

// ** Merge Routes
const Routes = [
  {
    path: '/country',
    component: lazy(() => import('../../views/master/country/Home'))
  },
  {
    path: '/state',
    component: lazy(() => import('../../views/master/state/state'))
  },
  {
    path: '/bidDetails',
    component: lazy(() => import('../../views/master/bids/bidDetails'))
  },
  {
    path: '/productDetails',
    component: lazy(() => import('../../views/master/product/productDetails'))
  },
  {
    path: '/PReviewsle',
    component: lazy(() => import('../../views/master/user/userProfile'))
  },
  {
    path: '/edit',
    component: lazy(() => import('../../views/master/bids/edit'))
  },
  {
    path: '/vas',
    component: lazy(() => import('../../views/master/vas/vas'))
  },
  {
    path: '/brand',
    component: lazy(() => import('../../views/master/brand/brand'))
  },
  {
    path: '/category-list',
    component: lazy(() => import('../../views/master/category/CategoryList'))
  },
  {
    path: '/city-list',
    component: lazy(() => import('../../views/master/city/CityList'))
  },
  {
    path: '/sub-category-list',
    component: lazy(() => import('../../views/master/category/subCategory/SubCategoryList'))
  },
  {
    path: '/kyc-document-list',
    component: lazy(() => import('../../views/master/kyc/kycList'))
  },
  {
    path: '/bids',
    component: lazy(() => import('../../views/master/bids/bids'))
  },
  {
    path: '/company-list',
    component: lazy(() => import('../../views/master/company/CompanyList'))
  },
  {
    path: '/industry-list',
    component: lazy(() => import('../../views/master/industry/IndustryList'))
  },
  {
    path: '/currency-list',
    component: lazy(() => import('../../views/master/currency/CurrencyList'))
  },
  {
    path: '/losgistics',
    component: lazy(() => import('../../views/master/logistics/logistics'))
  },
  {
    path: '/product',
    component: lazy(() => import('../../views/master/product/ProductList'))
  },
  {
    path: '/user-list',
    component: lazy(() => import('../../views/master/user/users'))
  },
  {
    path: '/rfq',
    component: lazy(() => import('../../views/master/RFQ/RFQ'))
  },
  {
    path: '/user-edit',
    component: lazy(() => import('../../views/master/user/edit'))
  },
  {
    path: '/report/review',
    component: lazy(() => import('../../views/report/Reviews/Reviews'))
  },
  {
    path: '/report/redressal',
    component: lazy(() => import('../../views/report/Redressal/Redressal'))
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
  },
  {
    path: '/ccdashboard',
    component: lazy(() => import('../../views/dashboards/call_center'))
  },
  {
    path: '/ogedashbaord',
    component: lazy(() => import('../../views/dashboards/on_ground_executive'))
  }
]

export { DefaultRoute, TemplateTitle, Routes }
