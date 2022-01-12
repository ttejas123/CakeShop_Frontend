import { Mail, User, BarChart2, Bell, Home, Globe, LogOut, DollerSign, Share, Codesandbox, AtSign, Flag, Circle, DollarSign, Database, Grid, FileText, Book, Clipboard } from 'react-feather'

export default [
  {
    id: 'DashBoard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    children: [
      {
        id: 'Call_Center',
        title: 'Call_Center',
        icon: <Circle size={20} />,
        navLink: '/ccdashboard'
      },
      {
        id: 'Call_Center1',
        title: 'On Ground Staff',
        icon: <Circle size={20} />,
        navLink: '/ogedashbaord'
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
        children: [
                {
                  id: 'CatalogueList',
                  title: 'List',
                  icon: <Circle size={20} />,
                  navLink: '/dashboard/cateloge'
                },
                {
                  id: 'createcatalague',
                  title: 'Create',
                  icon: <Circle size={20} />,
                  navLink: '/dashboard/createcatalague'
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
      }
    ]
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
        id: 'CurrencyList',
        title: 'Currrency',
        icon: <Circle size={20} />,
        navLink: '/currency-list'
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
                  navLink: '/master/product/create-sku'
                },
                {
                  id: 'sku',
                  title: 'Sku List',
                  icon: <Circle size={20} />,
                  navLink: '/master/product/sku-list'
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
        id: 'Block_User',
        title: 'Block User',
        icon: <Circle size={20} />,
        navLink: '/report/BlockUsers'
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
  }
]
