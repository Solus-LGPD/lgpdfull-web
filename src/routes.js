import React from 'react'


const Password = React.lazy(() => import('./views/Password'))
const Lgpdfull = React.lazy(() => import('./views/lgpdfull/Lgpdfull'))

const routes = [
  { path: '/password', name: 'Password', element: Password },
  { path: '/', exact: true, name: 'Home' },
  { path: '/lgpdfull', name: 'Lgpdfull', element: Lgpdfull },
  
]

export default routes
