import { Mail, Home, Globe, AtSign, Flag, Circle } from 'react-feather'

export default [
  {
    id: 'Masters',
    title: 'Masters',
    icon: <Home size={20} />,
    children: [
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