import { Mail, Home, Grid, Database, FileText, Circle, DollarSign, User, Globe, AtSign, Flag }  from 'react-feather'

export default [
  {
    id: 'Country',
    title: 'country',
    icon: <Globe size={20} />,
    navLink: '/country'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'master',
    title: 'Master',
    icon: <User size={20} />,
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
    id: 'StatePage',
    title: 'State',
    icon: <Flag size={20} />,
    navLink: '/state'
  },
  {
    id: 'BrandPage',
    title: 'Brand',
    icon: <AtSign size={20} />,
    navLink: '/brand'
  }
]
}
]
