import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/country'

// ** Merge Routes
const Routes = [
  {
    path: '/country',
    component: lazy(() => import('../../views/country/Home'))
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage'))
  },
  {
    path: '/currency-list',
    component: lazy(() => import('../../views/master/currency/CurrencyList'))
  },
  {
    path: '/city-list',
    component: lazy(() => import('../../views/master/city/CityList'))
  },
  {
    path: '/category-list',
    component: lazy(() => import('../../views/master/category/CategoryList'))
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
    path: '/company-list',
    component: lazy(() => import('../../views/master/company/CompanyList'))
  },
  {
    path: '/industry-list',
    component: lazy(() => import('../../views/master/industry/IndustryList'))
  },
  {
    path: '/apps/user/list',
    component: lazy(() => import('../../views/master/user/list'))
  },
  {
    path: '/apps/user/edit',
    exact: true,
    component: () => <Redirect to='/components/user/edit/1' />
  },
  {
    path: '/apps/user/edit/:id',
    component: lazy(() => import('../../components/user/edit')),
    meta: {
      navLink: '/apps/user/edit'
    }
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
