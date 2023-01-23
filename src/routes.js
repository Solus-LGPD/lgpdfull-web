import React from 'react'


const Lgpdfull = React.lazy(() => import('./views/lgpdfull/Lgpdfull'))
const Trocarsenha = React.lazy(() => import('./views/pages/Trocarsenha'))
const Logout = React.lazy(() => import('./views/Logout'))
const Perfil = React.lazy(() => import('./views/pages/Perfil'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/lgpdfull', name: 'Lgpdfull', element: Lgpdfull },
  { path: '/lgpdfull/trocarsenha', name: 'Trocar de Senha', element: Trocarsenha },
  { path: '/logout', name: 'Logout', element: Logout },
  { path: '/lgpdfull/perfil', name: 'Perfil', element: Perfil }
  
]

export default routes
