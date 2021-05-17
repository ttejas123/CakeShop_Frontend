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
    path: '/edit-employee',
    component: lazy(() => import('../../views/master/employee/editEmployee'))
  },
  {
    path: '/backup-accounts',
    component: lazy(() => import('../../views/master/employee/backupAccount'))
  },
  {
    path: '/right-assignment',
    component: lazy(() => import('../../views/master/employee/rightAssignment.js'))
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
    path: '/company-list',
    component: lazy(() => import('../../views/master/company/CompanyList'))
  },
  {
    path: '/warehouse-list',
    component: lazy(() => import('../../views/master/warehouse/warehouseList'))
  },
  {
    path: '/membership-list',
    component: lazy(() => import('../../views/master/membership/membershipList'))
  },
  {
    path: '/bga-list',
    component: lazy(() => import('../../views/master/bankGuaranteeApplication/bgaList'))
  },
  {
    path: '/edit-bank-guarrante-appl',
    component: lazy(() => import('../../views/master/bankGuaranteeApplication/editBga'))
  },
  {
    path: '/badges-list',
    component: lazy(() => import('../../views/master/badges/badgesList'))
  },
  {
    path: '/edit-warehouse',
    component: lazy(() => import('../../views/master/warehouse/editWarehouse'))
  },
  {
    path: '/edit-badge',
    component: lazy(() => import('../../views/master/badges/editBadge'))
  },
  {
    path: '/edit-membership',
    component: lazy(() => import('../../views/master/membership/editMembership'))
  },
  {
    path: '/on-ground-staff',
    component: lazy(() => import('../../views/master/onGroundStaff/OnGroundStaff'))
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
    path: '/add-product',
    component: lazy(() => import('../../views/master/product/add'))
  },
  {
    path: '/add-attribute',
    component: lazy(() => import('../../views/master/subCat/Attributes/add'))
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
    path: '/report/ticket-list',
    component: lazy(() => import('../../views/report/tickets/ticketsList'))
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
    path: '/master/Sub/addE/:id',
    component: lazy(() => import('../../views/master/subCat/SubAttributes/addE'))
  },
  {
    path: '/master/sms/add',
    component: lazy(() => import('../../views/master/SMSAdd'))
  },
  {
    path: '/master/Sub/add',
    component: lazy(() => import('../../views/master/subCat/SubAttributes/add'))
  },
  {
    path: '/report/ProfileCmpltChklist',
    component: lazy(() => import('../../views/report/ProfileCmpltChklist'))
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
    path: '/report/productIssue',
    component: lazy(() => import('../../views/report/productIssue'))
  },
  {
    path: '/report/emails-list',
    component: lazy(() => import('../../views/report/emails/emailsList'))
  },
  {
    path: '/report/revenue-list',
    component: lazy(() => import('../../views/report/revenue/revenueList'))
  },
  {
    path: '/report/purchase-intent-list',
    component: lazy(() => import('../../views/report/purchaseIntent/purchaseIntentList'))
  },
  {
    path: '/report/sms-history-list',
    component: lazy(() => import('../../views/report/smsHistory/smsHistoryList'))
  },
  {
    path: '/report/add-email',
    component: lazy(() => import('../../views/report/emails/addEmail'))
  },
  {
    path: '/report/Invoice',
    component: lazy(() => import('../../views/report/Invoice/Invoice'))
  },
  {
    path: '/report/Cart',
    component: lazy(() => import('../../views/report/Cart/cart'))
  },
  {
    path: '/report/SrchKeyWHistory',
    component: lazy(() => import('../../views/report/SrchKeyWHistory'))
  },
  {
    path: '/report/bidCoin',
    component: lazy(() => import('../../views/report/bidCoin'))
  },
  {
    path: '/report/bidCoin-add',
    component: lazy(() => import('../../views/report/bidCoin/add.js'))
  },
  {
    path: '/report/bidCoin-edit/:id',
    component: lazy(() => import('../../views/report/bidCoin/edit.js'))
  },
  {
    path: '/report/bankGTransca',
    component: lazy(() => import('../../views/report/bankGTransca'))
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
    path: '/adashboard',
    component: lazy(() => import('../../views/dashboards/admin'))
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
