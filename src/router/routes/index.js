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
    path: '/bidDetails/:id',
    component: lazy(() => import('../../views/master/bids/bidDetails'))
  },
  {
    path: '/productDetails',
    component: lazy(() => import('../../views/master/product/productDetails'))
  },
  {
    path: '/PReviewsle/:id',
    component: lazy(() => import('../../views/master/user/userProfile'))
  },
  {
    path: '/product-category',
    component: lazy(() => import('../../views/master/product/productCategory'))
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
    path: '/corporateView',
    component: lazy(() => import('../../views/master/corporate/corporateView'))
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
    path: '/warehouse',
    component: lazy(() => import('../../views/master/warehouse/warehouse'))
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
    path: '/product-list',
    component: lazy(() => import('../../views/master/product/ProductList'))
  },
  {
    path: '/financialPartner-list',
    component: lazy(() => import('../../views/master/financialPartner/financialPartnerList'))
  },
  {
    path: '/edit-product',
    component: lazy(() => import('../../views/master/product/editProduct'))
  },
  {
    path: '/edit-corporate',
    component: lazy(() => import('../../views/master/corporate/editCorporate'))
  },
  {
    path: '/corporate-list',
    component: lazy(() => import('../../views/master/corporate/CorporateList'))
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
    path: '/master/subattribute',
    component: lazy(() => import('../../views/master/subCat/SubAttributes/SubAttributes'))
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
    path: '/report/Invoice',
    component: lazy(() => import('../../views/report/Invoice/Invoice'))
  },
  {
    path: '/settings',
    component: lazy(() => import('../../views/settings'))
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
  },
  {
    path: '/comingSoon',
    component: lazy(() => import('../../views/pages/comingSoon'))
  }
]

export { DefaultRoute, TemplateTitle, Routes }
