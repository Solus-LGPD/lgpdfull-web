import React from 'react'

const Dashboard = React.lazy(() => import('./views/Dashboard'))
const Password = React.lazy(() => import('./views/Password'))

const routes = [
  { path: '/password', name: 'Password', element: Password },
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  
]

export default routes
