import { Mail, User, BarChart2, Bell, Home, Globe, LogOut, DollerSign, Share, Codesandbox, AtSign, Flag, Circle, DollarSign, Database, Grid, FileText, Book, Clipboard } from 'react-feather'

export default [
  {
    id: 'DashBoard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    children: [
      {
        id: 'Call Center',
        title: 'Call Center',
        icon: <Circle size={20} />,
        navLink: '/ccdashboard'
      },
      {
        id: 'Call Center',
        title: 'On Ground Staff',
        icon: <Circle size={20} />,
        navLink: '/ogedashbaord'
      },
      
      {
        id: 'Admin',
        title: 'Admin',
        icon: <Circle size={20} />,
        navLink: '/adashboard'
      },
      {
        id: 'Finances',
        title: 'Finances',
        icon: <Circle size={20} />,
        navLink: '/finances'
      },
      {
        id: 'Catalogue',
        title: 'Catalogue',
        icon: <Circle size={20} />,
        navLink: '/catalogue'
      }
    ]
  },
  {
    header: 'Role: Call Center executive'
  }, 
  {
    id: 'Masters',
    title: 'Masters',
    icon: <Codesandbox size={20} />,
    children: [
      {
        id: 'RFQ',
        title: 'RFQ',
        icon: <Circle size={20} />,
        navLink: '/bids'
      },
      {
        id: 'Country',
        title: 'Country',
        icon: <Circle size={20} />,
        navLink: '/country'
      },
      {
        id: 'CityList',
        title: 'City',
        icon: <Circle size={20} />,
        navLink: '/city-list'
      },
      {
        id: 'Category',
        title: 'Category',
        icon: <Circle size={20} />,
        navLink: '/master/subattribute'
      },   
      {
        id: 'CurrencyList',
        title: 'Currrency',
        icon: <Circle size={20} />,
        navLink: '/currency-list'
      },
      {
        id: 'CompanyList',
        title: 'Company',
        icon: <Circle size={20} />,
        navLink: '/company-list'
      },
      {
        id: 'IndustryList',
        title: 'Industry',
        icon: <Circle size={20} />,
        navLink: '/industry-list'
      },
      {
        id: 'StatePage',
        title: 'State',
        icon: <Circle size={20} />,
        navLink: '/state'
      },
      {
        id: 'BrandPage',
        title: 'Brand',
        icon: <Circle size={20} />,
        navLink: '/brand'
      },
      {
        id: 'LogisticsPartners',
        title: 'Logistics Partners',
        icon: <Circle size={20} />,
        navLink: '/losgistics'
      },
      {
        id: 'FinancialPartners',
        title: 'Financial Partners',
        icon: <Circle size={20} />,
        navLink: '/financialPartner-list'
      },
      {
        id: 'WarehouseList',
        title: 'Warehouse',
        icon: <Circle size={20} />,
        navLink: '/warehouse-list'
      },
      {
        id: 'badges',
        title: 'Badges',
        icon: <Circle size={20} />,
        navLink: '/badges-list'
      },
      {
        id: 'customizationTimeline',
        title: 'Customization Timeline',
        icon: <Circle size={20} />,
        navLink: '/customization-timeline'
      },
      {
        id: 'badgeMapping',
        title: 'Badge Mapping',
        icon: <Circle size={20} />,
        navLink: '/badge-mapping-list'
      },
      {
        id: 'workFlowHistory',
        title: 'Work Flow History',
        icon: <Circle size={20} />,
        navLink: '/work-flow-history-list'
      },
      {
        id: 'bidMapping',
        title: 'Bid Mapping',
        icon: <Circle size={20} />,
        navLink: '/bid-mapping'
      },
      {
        id: 'profileCompAdd',
        title: 'profile Completion Add',
        icon: <Circle size={20} />,
        navLink: '/master/profileCompAdd'
      },
      {
           id: 'payment',
           title: 'Payments',
           icon: <Circle size={20} />,
           navLink: '/master/payment'
      },
      {
           id: 'SMS_Add',
           title: 'SMS Add',
           icon: <Circle size={20} />,
           navLink: '/master/sms/add'
      },
      {
        id: 'billDiscounting',
        title: 'Bill Discounting',
        icon: <Circle size={20} />,
        navLink: '/bill-discounting-list'
      },
      {
           id: 'Commission_Slab',
           title: 'Commission Slab',
           icon: <Circle size={20} />,
           navLink: '/master/commi'
      },
      {
            id: 'Orders',
            title: 'Orders',
            icon: <Circle size={20} />,
            navLink: '/master/order'
      },
      {
           id: 'WishList',
           title: 'Wishlist',
           icon: <Circle size={20} />,
           navLink: '/master/wishlist'
      },
      {
           id: 'Subscription_Plan',
           title: 'Subscription Plan',
           icon: <Circle size={20} />,
           navLink: '/master/subscriptionplan'
      },
      {
           id: 'Charges',
           title: 'Charges',
           icon: <Circle size={20} />,
           navLink: '/master/Charges'
      },
      {
           id: 'Bid_commision_change',
           title: 'Bid commision change',
           icon: <Circle size={20} />,
           navLink: '/master/bidcommissionchange'
      },
      {
           id: 'Critical_Junction_Report',
           title: 'Critical Junction Report',
           icon: <Circle size={20} />,
           navLink: '/master/CritJunReport'
      },
      {
           id: 'Calculator',
           title: 'Calculator',
           icon: <Circle size={20} />,
           navLink: '/master/calculator'
      },
      {
        id: 'ValueAddedServices',
        title: 'VAS',
        icon: <Circle size={20} />,
        children: [
                {
                  id: 'vas',
                  title: 'VAS',
                  icon: <Circle size={20} />,
                  navLink: '/master/vas'
                },
                {
                  id: 'Provider',
                  title: 'Provider',
                  icon: <Circle size={20} />,
                  navLink: '/master/vass/Provider'
                },
                {
                  id: 'vas_transac',
                  title: 'Transaction',
                  icon: <Circle size={20} />,
                  navLink: '/master/vass/Transaction'
                },
                {
                  id: 'vas_transc_add',
                  title: 'Transaction Add',
                  icon: <Circle size={20} />,
                  navLink: '/master/vass/trans/add'
                },
                {
                  id: 'Order_List',
                  title: 'Order List',
                  icon: <Circle size={20} />,
                  navLink: '/master/vass/orderlist'
                }
        ]
      },
      {
        id: 'ProductPage',
        title: 'Product',
        icon: <Circle size={20} />,
        nanavLink: '/productDetails',
        children: [
                // {
                //   id: 'catalogue',
                //   title: 'Catalogue',
                //   icon: <Circle size={20} />,
                //   navLink: '/product-list'
                // },
                // {
                //   id: 'myProducts',
                //   title: 'My Products',
                //   icon: <Circle size={20} />,
                //   navLink: '/my-product-list'
                // },
                // {
                //   id: 'pendingProducts',
                //   title: 'Pending Products',
                //   icon: <Circle size={20} />,
                //   navLink: '/pending-product-list'
                // },
                // {
                //   id: 'view',
                //   title: 'View',
                //   icon: <Circle size={20} />,
                //   navLink: '/productDetails'
                // },
                // {
                //   id: 'edit',
                //   title: 'Edit',
                //   icon: <Circle size={20} />,
                //   navLink: '/edit-product'
                // },
                {
                  id: 'create',
                  title: 'Create',
                  icon: <Circle size={20} />,
                  navLink: '/add-product'
                },
                {
                  id: 'products',
                  title: 'Products',
                  icon: <Circle size={20} />,
                  navLink: '/product-list'
                },
                {
                  id: 'pendingProducts',
                  title: 'Pending Products',
                  icon: <Circle size={20} />,
                  navLink: '/pending-product-list'
                },
                {
                  id: 'createSku',
                  title: 'Create Sku',
                  icon: <Circle size={20} />,
                  navLink: '/master/SKUs/add'
                },
                {
                  id: 'sku',
                  title: 'Sku List',
                  icon: <Circle size={20} />,
                  navLink: '/master/SKU'
                }
                // ,
                // {
                //   id: 'productCategory',
                //   title: 'Product Category',
                //   icon: <Circle size={20} />,
                //   navLink: '/product-category'
                // }
                
        ]
      },
      {
        id: 'onGroundStaffPage',
        title: 'On Ground Staff',
        icon: <Circle size={20} />,
        children: [
                {
                  id: 'list',
                  title: 'List',
                  icon: <Circle size={20} />,
                  navLink: '/on-ground-staff'
                },
                {
                  id: 'view',
                  title: 'View',
                  icon: <Circle size={20} />,
                  navLink: '/on-ground-staff-view'
                }
                
        ]
      },
      {
        id: 'orders',
        title: 'Orders',
        icon: <Circle size={20} />,
        children: [
                {
                  id: 'list',
                  title: 'List',
                  icon: <Circle size={20} />,
                  navLink: '/master-order'
                },
                {
                  id: 'view',
                  title: 'View',
                  icon: <Circle size={20} />,
                  navLink: '/order-details'
                }
                
        ]
      },
      {
                  id: 'productCategory',
                  title: 'Product Category',
                  icon: <Circle size={20} />,
                  navLink: '/product-category'
      },
      {
        id: 'KycPage',
        title: 'KYC',
        icon: <Circle size={20} />,
        children: [
                {
                  id: 'kycList',
                  title: 'KYC List',
                  icon: <Circle size={20} />,
                  navLink: '/kyc-document-list'
                },
               {
                  id: 'uploadKyc',
                  title: 'Upload Kyc',
                  icon: <Circle size={20} />,
                  navLink: '/upload-kyc'
                },
                {
                  id: 'buyerKyc',
                  title: 'Buyer Kyc',
                  icon: <Circle size={20} />,
                  navLink: '/buyer-kyc-list'
                },
                {
                  id: 'sellerKyc',
                  title: 'Seller Kyc',
                  icon: <Circle size={20} />,
                  navLink: '/seller-kyc-list'
                },
                {
                  id: 'corporateKyc',
                  title: 'Corporate Kyc',
                  icon: <Circle size={20} />,
                  navLink: '/corporate-kyc-list'
                }
        ]
      },
      {
        id: 'EmployeePage',
        title: 'Employee',
        icon: <Circle size={20} />,
        children: [
                {
                  id: 'list',
                  title: 'List',
                  icon: <Circle size={20} />,
                  navLink: '/employee-list'
                },
                {
                  id: 'view',
                  title: 'View',
                  icon: <Circle size={20} />,
                  navLink: '/employee-view'
                },
                {
                  id: 'edit',
                  title: 'Edit',
                  icon: <Circle size={20} />,
                  navLink: '/edit-employee'
                },
                {
                  id: 'backupAccounts',
                  title: 'BackUp Accounts',
                  icon: <Circle size={20} />,
                  navLink: '/backup-accounts'
                },
                {
                  id: 'rightAssignment',
                  title: 'Right Assignment',
                  icon: <Circle size={20} />,
                  navLink: '/right-assignment'
                }
                
        ]
      },
      {
        id: 'CorporatePage',
        title: 'Corporate',
        icon: <Circle size={20} />,
        children: [
                {
                  id: 'list',
                  title: 'List',
                  icon: <Circle size={20} />,
                  navLink: '/corporate-list'
                },
                {
                  id: 'noGstCorporate',
                  title: 'No Gst Corporate',
                  icon: <Circle size={20} />,
                  navLink: '/no-gst-corporate'
                },
                {
                  id: 'view',
                  title: 'View',
                  icon: <Circle size={20} />,
                  navLink: '/corporateView'
                },
                {
                  id: 'addCorporateAddress',
                  title: 'Add Address',
                  icon: <Circle size={20} />,
                  navLink: '/add-corporate-address'
                },
                {
                  id: 'Corporate_Role',
                  title: 'Role Management',
                  icon: <Circle size={20} />,
                  navLink: '/master/corporateRole'
                },
                {
                  id: 'edit',
                  title: 'Edit',
                  icon: <Circle size={20} />,
                  navLink: '/edit-corporate'
                },
                {
                  id: 'add',
                  title: 'Add',
                  icon: <Circle size={20} />,
                  navLink: '/add-corporate'
                }
        ]
      },
      {
        id: 'MembershipPage',
        title: 'Membership',
        icon: <Circle size={20} />,
        children: [
                {
                  id: 'list',
                  title: 'List',
                  icon: <Circle size={20} />,
                  navLink: '/membership-list'
                },
                {
                  id: 'view',
                  title: 'View',
                  icon: <Circle size={20} />,
                  navLink: '/master/membershps/views'
                },
                {
                  id: 'edit',
                  title: 'Edit',
                  icon: <Circle size={20} />,
                  navLink: '/edit-membership'
                }
        ]
      },
      {
        id: 'OrdersPage',
        title: 'Orders',
        icon: <Circle size={20} />,
        children: [
                {
                  id: 'invoiceList',
                  title: 'Invoice List',
                  icon: <Circle size={20} />,
                  navLink: '/invoice-list'
                },
                {
                  id: 'sampleOrders',
                  title: 'Sample Orders',
                  icon: <Circle size={20} />,
                  navLink: '/sampleOrder-list'
                }
        ]
      },
      {
        id: 'UserPage',
        title: 'User',
        icon: <Circle size={20} />,
        children: [
                {
                  id: 'Add User',
                  title: 'Add',
                  icon: <Circle size={20} />,
                  navLink: '/user-edit'
                },
                {
                  id: 'addUserAddress',
                  title: 'Add Address',
                  icon: <Circle size={20} />,
                  navLink: '/add-user-address'
                },
                {
                  id: 'List',
                  title: 'List',
                  icon: <Circle size={20} />,
                  navLink: '/user-list'
                },
                {
                  id: 'comissionMapping',
                  title: 'Comission Mapping',
                  icon: <Circle size={20} />,
                  navLink: '/users-comission-mapping'
                }
        ]
      },
      {
        id: 'credit',
        title: 'Credit',
        icon: <Circle size={20} />,
        children: [
                {
                  id: 'corporateCredit',
                  title: 'Corporate Credit',
                  icon: <Circle size={20} />,
                  navLink: '/corporate-credit-list'
                },
                {
                  id: 'creditLimit',
                  title: 'Credit Limit',
                  icon: <Circle size={20} />,
                  navLink: '/credit-limit-list'
                },
                {
                  id: 'creditTransactions',
                  title: 'Credit Transactions',
                  icon: <Circle size={20} />,
                  navLink: '/credit-transactions-list'
                },
                {
                  id: 'corporateCreditHistory',
                  title: 'Credit History Corporate',
                  icon: <Circle size={20} />,
                  navLink: '/corporate-credit-history'
                }
        ]
      },
      {
        id: 'BankGuaranteeAppication',
        title: 'Bank Guarantee',
        icon: <Circle size={20} />,
        children: [
          {
            id: 'bankGuaranteeApplication',
            title: 'List',
            icon: <Circle size={20} />,
            navLink: '/bga-list'
          },
          {
            id: 'bankGuaranteePendingApplications',
            title: 'Pending List',
            icon: <Circle size={20} />,
            navLink: '/bga-pending-list'
          },
          {
            id: 'bankGuaranteeApplication',
            title: 'Action',
            icon: <Circle size={20} />,
            navLink: '/bga-action'
          },
          {
            id: 'transactions',
            title: 'Transactions',
            icon: <Circle size={20} />,
            navLink: '/bga-transactions-list'
          }
        ]
      },
      {
        id: 'Lead',
        title: 'Lead',
        icon: <Circle size={20} />,
        children: [
          {
            id: 'Lead',
            title: 'List',
            icon: <Circle size={20} />,
            navLink: '/master/Lead'
          },
          {
            id: 'Create',
            title: 'Create',
            icon: <Circle size={20} />,
            navLink: '/master/Leads/add'
          }
        ]
      },
      {
        id: 'Invoice',
        title: 'Invoice',
        icon: <Circle size={20} />,
        children: [
          {
            id: 'Invoice',
            title: 'List',
            icon: <Circle size={20} />,
            navLink: '/master/Invoice/List'
          },
          {
            id: 'View',
            title: 'View',
            icon: <Circle size={20} />,
            navLink: '/master/Invoice/view'
          },
          {
            id: 'Add',
            title: 'Add',
            icon: <Circle size={20} />,
            navLink: '/master/Invoice/add'
          }
        ]
      },
      {
        id: 'Keyword',
        title: 'Keyword',
        icon: <Circle size={20} />,
        children: [
          {
            id: 'Keyword',
            title: 'List',
            icon: <Circle size={20} />,
            navLink: '/master/Keyword/List'
          }
        ]
        },
        {      
        id: 'SKU',
        title: 'SKU',
        icon: <Circle size={20} />,
        children: [
          {
            id: 'SKU_List',
            title: 'SKU List',
            icon: <Circle size={20} />,
            navLink: '/master/SKU'
          },
          {
            id: 'SKU_Add',
            title: 'SKU Add',
            icon: <Circle size={20} />,
            navLink: '/master/SKUs/add'
          },
          {
            id: 'SKU_Seller_List',
            title: 'Sellers List',
            icon: <Circle size={20} />,
            navLink: '/master/SKUs/sellers'
          }
        ]
      }  
    ]
    
  },
  {
    id: 'Report',
    title: 'Report',
    icon: <Book size={20} />,
    children: [
      {
        id: 'Transaction',
        title: 'Transaction',
        icon: <Circle size={20} />,
        navLink: '/report/transactions'
      },
      {
        id: 'Approval',
        title: 'Approval',
        icon: <Circle size={20} />,
        navLink: '/approval'
      },
      {
        id: 'emails',
        title: 'Emails',
        icon: <Circle size={20} />,
        navLink: '/report/emails-list'
      },
      {
        id: 'orders',
        title: 'Orders',
        icon: <Circle size={20} />,
        navLink: '/report/orders-list'
      },
      {
        id: 'purchaseIntent',
        title: 'Purchase Intent',
        icon: <Circle size={20} />,
        navLink: '/report/purchase-intent-list'
      },
      {
        id: 'revenue',
        title: 'Revenue',
        icon: <Circle size={20} />,
        navLink: '/report/revenue-list'
      },
      {
        id: 'Bid_Coin',
        title: 'Bid Coin',
        icon: <Circle size={20} />,
        navLink: '/report/bidCoin'
      },
      {
        id: 'Bid_Coin_Utiliz',
        title: 'Bid Coin Utiliz',
        icon: <Circle size={20} />,
        navLink: '/report/bidCoinUtiliz'
      },
      {
        id: 'Bid_Cash',
        title: 'Bid Cash',
        icon: <Circle size={20} />,
        navLink: '/report/bidCash'
      },
      {
        id: 'Bid_Cash_Utiliz',
        title: 'Bid Cash Utiliz',
        icon: <Circle size={20} />,
        navLink: '/report/bidCashUtiliz'
      },
      {
        id: 'inspection',
        title: 'Inspection',
        icon: <Circle size={20} />,
        navLink: '/report/inspections-list'
      },
      {
        id: 'cclExhaust',
        title: 'Corporate Credit Limit Exhaust',
        icon: <Circle size={20} />,
        navLink: '/report/ccl-exhausted-list'
      },
      {
        id: 'smsHistory',
        title: 'SMS History',
        icon: <Circle size={20} />,
        navLink: '/report/sms-history-list'
      },
      {
        id: 'gstCalculation',
        title: 'GST Calculation',
        icon: <Circle size={20} />,
        navLink: '/report/gst-calculation'
      },
      {
        id: 'gstReport',
        title: 'GST Report',
        icon: <Circle size={20} />,
        navLink: '/report/gst-report-list'
      },
      {
        id: 'defectiveGoods',
        title: 'Defective Goods',
        icon: <Circle size={20} />,
        navLink: '/report/defective-goods'
      },
      {
        id: 'userActivity',
        title: 'User Activity',
        icon: <Circle size={20} />,
        navLink: '/report/user-activity'
      },
      {
        id: 'samplingStatus',
        title: 'Sampling Status',
        icon: <Circle size={20} />,
        navLink: '/report/sample-status'
      },
      {
        id: 'paidCorporate',
        title: 'Paid Corporate',
        icon: <Circle size={20} />,
        navLink: '/report/paid-corporate'
      },
      {
        id: 'vas',
        title: 'VAS',
        icon: <Circle size={20} />,
        navLink: '/report/vas-list'
      },
      {
        id: 'sampleRequest',
        title: 'Sample Request',
        icon: <Circle size={20} />,
        navLink: '/report/sample-request-list'
      },
      {
        id: 'creditApproved',
        title: 'Credit Approved',
        icon: <Circle size={20} />,
        navLink: '/report/creditApproved'
      },
      {
        id: 'ticket',
        title: 'Tickets',
        icon: <Circle size={20} />,
        navLink: '/report/ticket-List'
      },
      {
        id: 'shipment',
        title: 'Shipment',
        icon: <Circle size={20} />,
        navLink: '/report/shipment'
      },
      {
        id: 'sellerResponse',
        title: 'Seller Response Denial',
        icon: <Circle size={20} />,
        navLink: '/report/seller-response-denial'
      },
      {
        id: 'sellerSale',
        title: 'Seller Sale Denial',
        icon: <Circle size={20} />,
        navLink: '/report/seller-sale-denial'
      },
      {
        id: 'bidNotification',
        title: 'Bid Notification',
        icon: <Circle size={20} />,
        navLink: '/report/bid-notification'
      },
      {
        id: 'Search_keyWord_History',
        title: 'Search keyWord History',
        icon: <Circle size={20} />,
        navLink: '/report/SrchKeyWHistory'
      },
      {
        id: 'Cart',
        title: 'Cart',
        icon: <Circle size={20} />,
        navLink: '/report/Cart'
      },
      {
        id: 'OnGround',
        title: 'Onground',
        id: 'Invoice',
        title: 'Invoice',
        icon: <Circle size={20} />,
        navLink: '/report/Invoice'
      },
      {
        id: 'Redressal',
        title: 'Redressal',
        icon: <Circle size={20} />,
        navLink: '/report/redressal'
      },
      {
        id: 'Reviews',
        title: 'Reviews',
        icon: <Circle size={20} />,
        navLink: '/report/review'
      },
      {
        id: 'Bank_Guarantee_Transaction',
        title: 'Bank Guarantee Transaction',
        icon: <Circle size={20} />,
        navLink: '/report/bankGTransca'
      },
      {
        id: 'Product Issue',
        title: 'Product Issue',
        icon: <Circle size={20} />,
        navLink: '/report/productIssue'
      },
      {
        id: 'Profile_Completion_Checklist',
        title: 'Profile Completion Checklist',
        icon: <Circle size={20} />,
        navLink: '/report/ProfileCmpltChklist'
      },
      {
        id: 'Block_User',
        title: 'Block User',
        icon: <Circle size={20} />,
        navLink: '/report/BlockUsers'
      },
      {
        id: 'Commission',
        title: 'Commission',
        icon: <Circle size={20} />,
        navLink: '/report/commision'
      },
      {
        id: 'Corporate',
        title: 'Corporate',
        icon: <Circle size={20} />,
        navLink: '/report/corporate'
      },
      {
        id: 'Customer',
        title: 'Customer',
        icon: <Circle size={20} />,
        navLink: '/report/customer'
      },
      {
        id: 'PIN Activity',
        title: 'PIN Activity',
        icon: <Circle size={20} />,
        navLink: '/report/pinbaseactivity'
        },
        {
          id: 'PIN Access',
          title: 'PIN Access',
          icon: <Circle size={20} />,
          navLink: '/report/pinaccess'
          },
        {
        id: 'Order_Cancel',
        title: 'Order Cancel',
        icon: <Circle size={20} />,
        navLink: '/report/orderclancel'
      }
    
    ]
  },
  {
    id: 'Nodal',
    title: 'Nodal',
    icon: <img src="https://img.icons8.com/metro/21/000000/refund-2.png" className="pr-1"/>,
    children: [
      {
        id: 'Nodal_Transcation',
        title: 'Transcation',
        icon: <Circle size={20} />,
        navLink: '/Nodal/transcation'
      },
      {
        id: 'Receipt_and_Payment_report',
        title: 'Receipt And Payment Report',
        icon: <Circle size={32} />,
        navLink: '/Nodal/ReceiptPayment'
      },
      {
        id: 'Pending_Receipt',
        title: 'Pending Receipt',
        icon: <Circle size={20} />,
        navLink: '/Nodal/pendingreceipt'
      },
      {
        id: 'Pending_Payments',
        title: 'Pending Payments',
        icon: <Circle size={20} />,
        navLink: '/Nodal/pendingpayment'
      }
    ]
  },
  {
    id: 'Transaction',
    title: 'Transaction',
    icon: <Share size={20} />,
    children: [
      {
        id: 'All bids',
        title: 'All bids',
        icon: <Circle size={20} />,
        navLink: '/allbids'
      },
      {
        id: 'All Corporate',
        title: 'All Corporate',
        icon: <Circle size={20} />,
        navLink: '/allcorporate'
      },
      {
        id: 'All Catalogue',
        title: 'All Catalogue',
        icon: <Circle size={20} />,
        navLink: '/allcatalogue'
      },
      {
        id: 'History',
        title: 'History',
        icon: <Circle size={20} />,
        navLink: '/history'
      }
    ]
  },
  {
    id: 'User',
    title: 'User',
    icon: <User size={20} />,
    children: [
      {
        id: 'Buyer',
        title: 'Buyer',
        icon: <Circle size={20} />,
        navLink: '/buyer'
      },
      {
        id: 'Sellers',
        title: 'Sellers',
        icon: <Circle size={20} />,
        navLink: '/sellers'
      },
      {
        id: 'Preferred Partners',
        title: 'Preferred Partners',
        icon: <Circle size={20} />,
        navLink: '/preferredpartners'
      }
    ]
  },
  {
    id: 'Auditorial',
    title: 'Auditorial',
    icon: <BarChart2 size={20} />,
    children: [
      {
        id: 'Company AT',
        title: 'Company AT',
        icon: <Circle size={20} />,
        navLink: '/company'
      },
      {
        id: 'Approved AT',
        title: 'Approved AT',
        icon: <Circle size={20} />,
        navLink: '/approvedAT'
      },
      {
        id: 'Cradit AT',
        title: 'Cradit AT',
        icon: <Circle size={20} />,
        navLink: '/craditAT'
      },
      {
        id: 'Commission AT',
        title: 'Commission AT',
        icon: <Circle size={20} />,
        navLink: '/commissionAT'
      }
    ]
  },
  {
    id: 'Notification',
    title: 'Notification',
    icon: <Bell size={20} />,
    children: [
      {
        id: 'My Notification',
        title: 'My Notification',
        icon: <Circle size={20} />,
        navLink: '/buyer'
      }
    ]
  },
  {
        id: 'Approval',
        title: 'Approval',
        icon: <Circle size={20} />,
        navLink: '/appruval'
  },
  {
    id: 'Employee',
    title: 'Employee',
    icon: <User size={20} />,
    navLink: '/employee'
  },
  {
    id: 'Disbursement',
    title: 'Disbursement',
    icon: <Clipboard size={20} />,
    children: [
      {
        // id: 'My Notification',
        title: 'GST',
        icon: <Circle size={20} />
        // navLink: '/buyer'
      },
      {
        // id: 'My Notification',
        title: 'Report Invoices',
        icon: <Circle size={20} />
        // navLink: '/buyer'
      },
       {
        // id: 'My Notification',
        title: 'Disbursement Form',
        icon: <Circle size={20} />
        // navLink: '/buyer'
      }
    ]
  },
  // {
  //   id: 'BrandPage',
  //   title: 'Brand',
  //   icon: <AtSign size={20} />,
  //   navLink: '/brand'
  // },
  {
    id: 'UserList',
    title: 'KOMALTest',
    icon: <AtSign size={20} />,
    navLink: '/usertest'
  },
    {
        id: 'LOGOUT',
        title: 'LOGOUT',
        icon: <LogOut size={20} />,
        navLink: '/logout'
  }
]
