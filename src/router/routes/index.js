import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/country'

// ** Merge Routes
const Routes = [
  {
    path: '/country',
    component: lazy(() => import('../../views/country/Home'))
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage'))
  },
  {
    path: '/state',
    component: lazy(() => import('../../views/state/state'))
  },
  {
    path: '/vas',
    component: lazy(() => import('../../views/vas/vas'))
  },
  {
    path: '/brand',
    component: lazy(() => import('../../views/brand/brand'))
  },
  {
    path: '/losgistics',
    component: lazy(() => import('../../views/logistics/logistics'))
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
