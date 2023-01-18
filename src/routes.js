import React from 'react'

const Dashboard = React.lazy(() => import('./views/Dashboard'))
const Password = React.lazy(() => import('./views/Password'))
const Lgpdfull = React.lazy(() => import('./views/lgpdfull/Lgpdfull'))

const routes = [
  { path: '/password', name: 'Password', element: Password },
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/lgpdfull', name: 'Lgpdfull', element: Lgpdfull },
  
]

export default routes
