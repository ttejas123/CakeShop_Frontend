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
    path: '/bidDetail/communication',
    component: lazy(() => import('../../views/master/bids/ui-elements/newCards/Comnicatn.js'))
  },
  {
    path: '/master/bidDetail/participents',
    component: lazy(() => import('../../views/master/bids/ui-elements/cards/advance/participentss.js'))
  },
  {
    path: '/productDetails',
    component: lazy(() => import('../../views/master/product/productDetails'))
  },
  {
    path: '/master/userProfile/:id',
    component: lazy(() => import('../../views/master/user/userProfile'))
  },
  {
    path: '/master/bidcommissionchange',
    component: lazy(() => import('../../views/master/Bidcomchange'))
  },
  {
    path: '/product-category',
    component: lazy(() => import('../../views/master/product/productCategory'))
  },
  {
    path: '/no-gst-corporate',
    component: lazy(() => import('../../views/master/corporate/noGstCorporateList'))
  },
  {
    path: '/product-cat-add',
    component: lazy(() => import('../../views/master/product/prodCatCom/addcat'))
  },
  {
    path: '/customization-timeline',
    component: lazy(() => import('../../views/master/customization/custTimelineView'))
  },
  {
    path: '/bid-mapping',
    component: lazy(() => import('../../views/master/bids/bidMapping/bidMapping'))
  },
  {
    path: '/product-cat-edit/:id',
    component: lazy(() => import('../../views/master/product/prodCatCom/editCat'))
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
    path: '/master/backupA/add',
    component: lazy(() => import('../../views/master/employee/badd'))
  },
  {
    path: '/master/backupA/edit/:id',
    component: lazy(() => import('../../views/master/employee/bedit'))
  },
  {
    path: '/right-assignment',
    component: lazy(() => import('../../views/master/employee/rightAssignment.js'))
  },
  {
    path: '/master/vas',
    component: lazy(() => import('../../views/master/vas/vas'))
  },
  {
    path: '/master/vass/Provider',
    component: lazy(() => import('../../views/master/vas/provider'))
  },
  {
    path: '/master/vass/Transaction',
    component: lazy(() => import('../../views/master/vas/transaction'))
  },
  {
    path: '/master/vass/orderlist',
    component: lazy(() => import('../../views/master/vas/orderlist'))
  },
  {
    path: '/master/vass/trans/add',
    component: lazy(() => import('../../views/master/vas/trascAdd'))
  },
  {
    path: '/master/vass/add',
    component: lazy(() => import('../../views/master/vas/add'))
  },
  {
    path: '/master/vass/edit/:id',
    component: lazy(() => import('../../views/master/vas/edit'))
  },
  {
    path: '/master/CritJunReport',
    component: lazy(() => import('../../views/master/CritJunRep'))
  },
  {
    path: '/brand',
    component: lazy(() => import('../../views/master/brand/brand'))
  },
  {
    path: '/master/branda/add',
    component: lazy(() => import('../../views/master/brand/add'))
  },
  {
    path: '/master/branda/edit/:id',
    component: lazy(() => import('../../views/master/brand/edit'))
  },
  {
    path: '/category-list',
    component: lazy(() => import('../../views/master/category/CategoryList'))
  },
  {
    path: '/employee-list',
    component: lazy(() => import('../../views/master/employee/employeeList'))
  },
  {
    path: '/corporateView',
    component: lazy(() => import('../../views/master/corporate/corporateView/index'))
  },
  {
    path: '/employee-view',
    component: lazy(() => import('../../views/master/employee/employeeView'))
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
    path: '/upload-kyc',
    component: lazy(() => import('../../views/master/kyc/uploadKyc'))
  },
  {
    path: '/buyer-kyc-list',
    component: lazy(() => import('../../views/master/kyc/buyerKycList'))
  },
  {
    path: '/seller-kyc-list',
    component: lazy(() => import('../../views/master/kyc/sellerKycList'))
  },
  {
    path: '/corporate-kyc-list',
    component: lazy(() => import('../../views/master/kyc/corporateKycList'))
  },
  {
    path: '/master/Charges',
    component: lazy(() => import('../../views/master/Charges'))
  },
  {
    path: '/master/Charge/add',
    component: lazy(() => import('../../views/master/Charges/add'))
  },
  {
    path: '/master/Charge/edit/:id',
    component: lazy(() => import('../../views/master/Charges/edit'))
  },
  {
    path: '/master/bidDetails/preferredPart/edit/:id',
    component: lazy(() => import('../../views/master/bids/ui-elements/addEPartner/edit'))
  },
  {
    path: '/master/bidDetails/preferredPart/add',
    component: lazy(() => import('../../views/master/bids/ui-elements/addEPartner/add'))
  },
  {
    path: '/bids',
    component: lazy(() => import('../../views/master/bids/bids'))
  },
  {
    path: '/master/bids/bulk',
    component: lazy(() => import('../../views/master/bids/bulkUpload'))
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
    path: '/update-membership-plan',
    component: lazy(() => import('../../views/master/membership/updateMembershipPlan'))
  },
  {
    path: '/master/membershipavail/edit',
    component: lazy(() => import('../../views/master/membership/membershipComp/edits.js'))
  },
  {
    path: '/master/corporate/corpmanag',
    component: lazy(() => import('../../views/master/corporate/corpmanag'))
  },
  {
    path: '/master/payment',
    component: lazy(() => import('../../views/master/payment'))
  },
  {
    path: '/master/order',
    component: lazy(() => import('../../views/master/order'))
  },
  {
    path: '/master/orders/add',
    component: lazy(() => import('../../views/master/order/add'))
  },
  {
    path: '/master/orders/edit/:id',
    component: lazy(() => import('../../views/master/order/edit'))
  },
  {
    path: '/master/calculator',
    component: lazy(() => import('../../views/master/claculator'))
  },
  {
    path: '/master/membership/view',
    component: lazy(() => import('../../views/master/membership/membershipView'))
  },
  {
    path: '/master/membershps/views',
    component: lazy(() => import('../../views/master/membership/memViewE'))
  },
  {
    path: '/bga-list',
    component: lazy(() => import('../../views/master/bankGuaranteeApplication/bgaList'))
  },
  {
    path: '/corporate-credit-list',
    component: lazy(() => import('../../views/master/credit/corporateCreditRequest'))
  },
  {
    path: '/credit-limit-list',
    component: lazy(() => import('../../views/master/credit/creditLimitList'))
  },
  {
    path: '/credit-transactions-list',
    component: lazy(() => import('../../views/master/credit/creditTransactions'))
  },
  {
    path: '/corporate-credit-history',
    component: lazy(() => import('../../views/master/credit/creditHistoryCorporate'))
  },
  {
    path: '/bill-discounting-list',
    component: lazy(() => import('../../views/master/billDiscounting/billDiscountingList'))
  },
  {
    path: '/add-bill-discounting',
    component: lazy(() => import('../../views/master/billDiscounting/addBillDiscounting'))
  },
  {
    path: '/bill-discounting-transactions',
    component: lazy(() => import('../../views/master/billDiscounting/transactions'))
  },
  {
    path: '/bga-action',
    component: lazy(() => import('../../views/master/bankGuaranteeApplication/bgaActionForm'))
  },
  {
    path: '/bga-pending-list',
    component: lazy(() => import('../../views/master/bankGuaranteeApplication/bgaPendingList'))
  },
  {
    path: '/bga-transactions-list',
    component: lazy(() => import('../../views/master/bankGuaranteeApplication/transactionsList'))
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
    path: '/on-ground-staff-view',
    component: lazy(() => import('../../views/master/onGroundStaff/view/onGroundStaffView'))
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
    path: '/badge-mapping-list',
    component: lazy(() => import('../../views/master/badgeMapping/badgeMappingList'))
  },
  {
    path: '/pending-product-list',
    component: lazy(() => import('../../views/master/product/pendingProductsList'))
  },
  {
    path: '/product-list',
    component: lazy(() => import('../../views/master/product/myProductsList'))
  },
  {
    path: '/work-flow-history-list',
    component: lazy(() => import('../../views/master/workFlowHistory/workFlowHistoryList'))
  },
  {
    path: '/financialPartner-list',
    component: lazy(() => import('../../views/master/financialPartner/financialPartnerList'))
  },
  {
    path: '/master/wishlist',
    component: lazy(() => import('../../views/master/WishList'))
  },
  {
    path: '/master/SKU',
    component: lazy(() => import('../../views/master/SKU'))
  },
  {
    path: '/master/SKUs/add',
    component: lazy(() => import('../../views/master/SKU/add'))
  },
  {
    path: '/master/SKUs/edit/:id',
    component: lazy(() => import('../../views/master/SKU/edit'))
  },
  {
    path: '/master/SKUs/sellers',
    component: lazy(() => import('../../views/master/SKU/SKU_seller'))
  },
  {
    path: '/master/financialPartners/add',
    component: lazy(() => import('../../views/master/financialPartner/add'))
  },
  {
    path: '/master/financialPartners/edit/:id',
    component: lazy(() => import('../../views/master/financialPartner/edit'))
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
    path: '/master/Lead',
    component: lazy(() => import('../../views/master/Lead'))
  },
  {
    path: '/master/Leads/add',
    component: lazy(() => import('../../views/master/Lead/leadAdd/add'))
  },
  {
    path: '/master/Leads/edit/:id',
    component: lazy(() => import('../../views/master/Lead/edit'))
  },
  {
    path: '/master/Leads/fileupload',
    component: lazy(() => import('../../views/master/Lead/fileupload'))
  },
  {
    path: '/master/Invoice/List',
    component: lazy(() => import('../../views/master/InvoiceL/List'))
  },
  {
    path: '/master/Invoice/add',
    component: lazy(() => import('../../views/master/InvoiceL/add'))
  },
  {
    path: '/master/Invoice/view',
    component: lazy(() => import('../../views/master/InvoiceL/view'))
  },
  {
    path: '/master/corporateRole',
    component: lazy(() => import('../../views/master/corporate/corpmanag'))
  },
  {
    path: '/master/corporateRoles/add',
    component: lazy(() => import('../../views/master/corporate/corpmanag/add'))
  },
  {
    path: '/master/corporateRoles/edit/:id',
    component: lazy(() => import('../../views/master/corporate/corpmanag/edit'))
  },
  {
    path: '/edit-corporate',
    component: lazy(() => import('../../views/master/corporate/editCorporate'))
  },
  {
    path: '/add-corporate',
    component: lazy(() => import('../../views/master/corporate/add'))
  },
  {
    path: '/add-corporate-address',
    component: lazy(() => import('../../views/master/corporate/corporateAddressAdd'))
  },
  {
    path: '/corporate-list',
    component: lazy(() => import('../../views/master/corporate/CorporateList'))
  },
  {
    path: '/order-details',
    component: lazy(() => import('../../views/master/order/orderDetailsView/orderDetails'))
  },
  {
    path: '/user-list',
    component: lazy(() => import('../../views/master/user/users'))
  },
  {
    path: '/users-comission-mapping',
    component: lazy(() => import('../../views/master/user/userComissionMapping'))
  },
  {
    path: '/user-notifications/:id',
    component: lazy(() => import('../../views/master/user/userNotificationSetting'))
  },
  {
    path: '/invoice-list',
    component: lazy(() => import('../../views/master/orders/invoiceList'))
  },
  {
    path: '/sampleOrder-list',
    component: lazy(() => import('../../views/master/orders/sampleOrdersList'))
  },
  {
    path: '/add-invoice',
    component: lazy(() => import('../../views/master/orders/addInvoice'))
  },
  {
    path: '/add-user-address',
    component: lazy(() => import('../../views/master/user/userAddressAdd'))
  },
  {
    path: '/master/subscriptionplan',
    component: lazy(() => import('../../views/master/subScrPlan/index'))
  },
  {
    path: '/master/subscriptionplans/add',
    component: lazy(() => import('../../views/master/subScrPlan/add'))
  },
  {
    path: '/master/subscriptionplans/edit/:id',
    component: lazy(() => import('../../views/master/subScrPlan/edit'))
  },
  {
    path: '/master/subscription/aveil/:id',
    component: lazy(() => import('../../views/master/subScrPlan/aveil'))
  },
  {
    path: '/master/commi',
    component: lazy(() => import('../../views/master/comslb/index'))
  },
  {
    path: '/master/cmmi/edit/:id',
    component: lazy(() => import('../../views/master/comslb/edit'))
  },
  {
    path: '/master/permissions/:id',
    component: lazy(() => import('../../views/master/user/profileComponets/pemis'))
  },
  {
    path: '/master/rights',
    component: lazy(() => import('../../views/master/user/rightsView'))
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
    component: lazy(() => import('../../views/master/user/add'))
  },
  {
    path: '/master/profileCompAdd',
    component: lazy(() => import('../../views/master/profileCompAdd'))
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
    path: '/master/attribute',
    component: lazy(() => import('../../views/master/subCat/Attributes'))
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
    path: '/report/customer',
    component: lazy(() => import('../../views/report/customer'))
  },
  {
    path: '/report/onGoingStaff',
    component: lazy(() => import('../../views/report/onGoingStaff'))
  },
  {
    path: '/report/corporate',
    component: lazy(() => import('../../views/report/corpolist'))
  },
  {
    path: '/report/commision',
    component: lazy(() => import('../../views/report/commission'))
  },
  {
    path: '/report/BlockUsers',
    component: lazy(() => import('../../views/report/BlockUser'))
  },
  {
    path: '/report/bidCash',
    component: lazy(() => import('../../views/report/bidCash'))
  },
  {
    path: '/report/bidCashUtiliz',
    component: lazy(() => import('../../views/report/BidcashUti'))
  },
  {
    path: '/report/bidCoinUtiliz',
    component: lazy(() => import('../../views/report/BidcoinUti'))
  },
  {
    path: '/report/Notification',
    component: lazy(() => import('../../views/report/Notification'))
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
    path: '/report/transactions',
    component: lazy(() => import('../../views/report/transactions/transactionsList'))
  },
  {
    path: '/report/productIssue',
    component: lazy(() => import('../../views/report/productIssue'))
  },
  {
    path: '/report/creditApproved',
    component: lazy(() => import('../../views/report/credit/creditApproved'))
  },
  {
    path: '/report/defective-goods',
    component: lazy(() => import('../../views/report/defectiveGoods/defectiveGoodsList'))
  },
  {
    path: '/report/emails-list',
    component: lazy(() => import('../../views/report/emails/emailsList'))
  },
  {
    path: '/report/sample-request-list',
    component: lazy(() => import('../../views/report/sampleRequest/sampleRequestList'))
  },
  {
    path: '/report/revenue-list',
    component: lazy(() => import('../../views/report/revenue/revenueList'))
  },
  {
    path: '/report/vas-list',
    component: lazy(() => import('../../views/report/vas/vasList'))
  },
  {
    path: '/report/corporate-team-list',
    component: lazy(() => import('../../views/report/corporate/corporateTeam'))
  },
  {
    path: '/report/inspections-list',
    component: lazy(() => import('../../views/report/inspections/inspectionsList'))
  },
  {
    path: '/report/ccl-exhausted-list',
    component: lazy(() => import('../../views/report/corporateCreditLimit/corporateCreditLimitExhaust'))
  },
  {
    path: '/report/customization-list',
    component: lazy(() => import('../../views/report/customizationRequest/crList'))
  },
  {
    path: '/report/orders-list',
    component: lazy(() => import('../../views/report/Orders/orderList'))
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
    path: '/report/gst-report-list',
    component: lazy(() => import('../../views/report/gstReport/gstReportList'))
  },
  {
    path: '/report/add-email',
    component: lazy(() => import('../../views/report/emails/addEmail'))
  },
  {
    path: '/report/add-sample-request',
    component: lazy(() => import('../../views/report/sampleRequest/addSampleRequest'))
  },
  {
    path: '/report/Invoice',
    component: lazy(() => import('../../views/report/Invoice/Invoice'))
  },
  {
    path: '/report/bid-notification',
    component: lazy(() => import('../../views/report/bidNotification/bidNotificationReport'))
  },
  {
    path: '/report/sample-status',
    component: lazy(() => import('../../views/report/sampleRequest/samplingStatus'))
  },
  {
    path: '/report/gst-calculation',
    component: lazy(() => import('../../views/report/gstReport/gstCalculation'))
  },
  {
    path: '/report/user-activity',
    component: lazy(() => import('../../views/report/user/userActivity'))
  },
  {
    path: '/report/seller-response-denial',
    component: lazy(() => import('../../views/report/seller/sellerResponseDenial'))
  },
  {
    path: '/report/seller-sale-denial',
    component: lazy(() => import('../../views/report/seller/sellerSaleDenial'))
  },
  {
    path: '/report/paid-corporate',
    component: lazy(() => import('../../views/report/corporate/paidCorporate'))
  },
  {
    path: '/report/Cart',
    component: lazy(() => import('../../views/report/Cart/cart'))
  },
  {
    path: '/report/shipment',
    component: lazy(() => import('../../views/report/shipment/shipmentList'))
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
    path: '/report/orderclancel',
    component: lazy(() => import('../../views/report/Order_Cancel'))
  },
  {
    path: '/Nodal/transcation',
    component: lazy(() => import('../../views/Nodal/Transcation'))
  },
  {
    path: '/Nodal/transcations/add',
    component: lazy(() => import('../../views/Nodal/Transcation/add'))
  },
  {
    path: '/Nodal/transcations/edit/:id',
    component: lazy(() => import('../../views/Nodal/Transcation/edit'))
  },
  {
    path: '/Nodal/ReceiptPayment',
    component: lazy(() => import('../../views/Nodal/RcptPayreport'))
  },
  {
    path: '/Nodal/pendingreceipt',
    component: lazy(() => import('../../views/Nodal/PendingRecip'))
  },
  {
    path: '/Nodal/pendingpayment',
    component: lazy(() => import('../../views/Nodal/PendingPayment'))
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
    // path: '/user',
    // component: lazy(() => import('../../views/user/list')),
    // layout: 'BlankLayout'
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
  },
  {
    path: '/master/Keyword/List',
    component: lazy(() => import('../../views/master/sponsoredKeyword/List'))
  },
  {
    path: '/add-sponsored_keyword',
    component: lazy(() => import('../../views/master/sponsoredKeyword/Add'))
  },
  {
    path: '/report/pinbaseactivity',
    component: lazy(() => import('../../views/report/pinActivity/list'))
  },
  {
    path: '/report/pinaccess',
    component: lazy(() => import('../../views/report/pinActivity/pinAccess/index'))
  }
  
  // 
]

export { DefaultRoute, TemplateTitle, Routes }
