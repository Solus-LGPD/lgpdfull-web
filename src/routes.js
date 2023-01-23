import React from 'react'


const Password = React.lazy(() => import('./views/Password'))
const Lgpdfull = React.lazy(() => import('./views/lgpdfull/Lgpdfull'))
const Trocarsenha = React.lazy(() => import('./views/pages/Trocarsenha'))
const Perfil = React.lazy(() => import('./views/pages/Perfil'))

const routes = [
  { path: '/password', name: 'Password', element: Password },
  { path: '/', exact: true, name: 'Home' },
  { path: '/lgpdfull', name: 'Lgpdfull', element: Lgpdfull },
  { path: '/lgpdfull/trocarsenha', name: 'Trocar de Senha', element: Trocarsenha },
  { path: '/lgpdfull/perfil', name: 'Perfil', element: Perfil }
  
]

export default routes
