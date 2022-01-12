import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Bidoya'

// ** Default Route
const DefaultRoute = '/home/source-meterial'

// ** Merge Routes
const Routes = [
  {
    path: '/home/source-meterial',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/ecommerce/shop/index.js'))
  },
  {
    path: '/home/add_cake',
    component: lazy(() => import('../../views/ecommerce/shop/add.js'))
  },
  {
    path: '/home/add_order/:id',
    component: lazy(() => import('../../views/ecommerce/order/add.js'))
  },
  {
    path: '/home/order/list',
    component: lazy(() => import('../../views/ecommerce/order/list.js'))
  },
  {
    path: '/home/source-video',
   
    component: lazy(() => import('../../views/sourceVid'))
  },
  {
    path: '/home/cake_details/:id',
    component: lazy(() => import('../../views/productDetail/index.js'))
  },
  {
    path: '/home',
    component: lazy(() => import('../../views/MyProd/index.js'))
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
  }
]

export { DefaultRoute, TemplateTitle, Routes }
