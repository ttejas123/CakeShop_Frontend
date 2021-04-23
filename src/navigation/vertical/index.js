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
        navLink: '/admin'
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
        id: 'CurrencyList',
        title: 'Currrency',
        icon: <Circle size={20} />,
        navLink: '/currency-list'
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
        navLink: '/category-list'
      },
      {
        id: 'SubCategory',
        title: 'Sub Category',
        icon: <Circle size={20} />,
        navLink: '/sub-category-list'
      },
      {
        id: 'KYC',
        title: 'KYC',
        icon: <Circle size={20} />,
        navLink: '/kyc-document-list'
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
        id: 'Country',
        title: 'Country',
        icon: <Circle size={20} />,
        navLink: '/country'
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
        id: 'ValueAddedServices',
        title: 'VAS',
        icon: <Circle size={20} />,
        navLink: '/vas'
      },
      {
        id: 'LogisticsPartners',
        title: 'Logistics Partners',
        icon: <Circle size={20} />,
        navLink: '/losgistics'
      },
      {
        id: 'ProductList',
        title: 'Product',
        icon: <Circle size={20} />,
        navLink: '/product'
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
                  navLink: '/userAdd'
                },
                {
                  id: 'list',
                  title: 'list',
                  icon: <Circle size={20} />,
                  navLink: '/userlist'
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
        navLink: '/transaction'
      },
      {
        id: 'Revenue',
        title: 'Revenue',
        icon: <Circle size={20} />,
        navLink: '/revenue'
      },
      {
        id: 'Approval',
        title: 'Approval',
        icon: <Circle size={20} />,
        navLink: '/approval'
      },
      {
        id: 'OnGround',
        title: 'Onground',
        icon: <Circle size={20} />,
        navLink: '/onground'
      },
      {
        id: 'CA',
        title: 'CA',
        icon: <Circle size={20} />,
        navLink: '/ca'
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
    navLink: '/user'
  },
    {
        id: 'LOGOUT',
        title: 'LOGOUT',
        icon: <LogOut size={20} />,
        navLink: '/logout'
  }
]
