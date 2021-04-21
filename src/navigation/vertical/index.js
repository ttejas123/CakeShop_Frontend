import { Mail, Home, Globe, AtSign, Flag } from 'react-feather'

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
  },
  {
    id: 'UserList',
    title: 'User',
    icon: <AtSign size={20} />,
    navLink: '/user'
  }
]
