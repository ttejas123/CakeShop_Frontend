import { Mail, Home, Globe, AtSign, Flag, Circle, DollarSign, Database, Grid, FileText } from 'react-feather'

export default [
  {
    id: 'Masters',
    title: 'Masters',
    icon: <Home size={20} />,
    children: [
      {
        id: 'CurrencyList',
        title: 'Currrency',
        icon: <DollarSign size={20} />,
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
        icon: <Grid size={20} />,
        navLink: '/category-list'
      },
      {
        id: 'SubCategory',
        title: 'Sub Category',
        icon: <Database size={20} />,
        navLink: '/sub-category-list'
      },
      {
        id: 'KYC',
        title: 'KYC',
        icon: <FileText size={20} />,
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
  } 
]
