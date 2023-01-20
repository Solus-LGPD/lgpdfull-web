import React from 'react'


const Lgpdfull = React.lazy(() => import('./views/lgpdfull/Lgpdfull'))
const Trocarsenha = React.lazy(() => import('./views/pages/Trocarsenha'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/lgpdfull', name: 'Lgpdfull', element: Lgpdfull },
  { path: '/lgpdfull/trocarsenha', name: 'Trocar de Senha', element: Trocarsenha },
  
]

export default routes
