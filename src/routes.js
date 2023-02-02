import React from 'react'


const Lgpdfull = React.lazy(() => import('./views/lgpdfull/Lgpdfull'))
const Trocarsenha = React.lazy(() => import('./views/pages/Trocarsenha'))
const Logout = React.lazy(() => import('./views/Logout'))
const Perfil = React.lazy(() => import('./views/pages/Perfil'))
const Inventario = React.lazy(() => import('./views/pages/Inventario'));
const InventarioCriar = React.lazy(() => import('./views/pages/InventarioCriar'));
const Dpo = React.lazy(() => import('./views/pages/Dpo'));
const DpoCriar = React.lazy(() => import('./views/pages/DpoCriar'));
const Setor = React.lazy(() => import('./views/pages/Setor'));
const SetorCriar = React.lazy(() => import('./views/pages/SetorCriar'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/lgpdfull', name: 'LGPDFull', element: Lgpdfull },
  { path: '/lgpdfull/trocarsenha', name: 'Trocar de Senha', element: Trocarsenha },
  { path: '/logout', name: 'Logout', element: Logout },
  { path: '/lgpdfull/perfil', name: 'Perfil', element: Perfil },
  { path: '/inventario', name: 'Inventario', element: Inventario },
  { path: '/inventario/criar', name: 'Criar', element: InventarioCriar },
  { path: '/dpo', name: 'Dpo', element: Dpo },
  { path: '/dpo/criar', name: 'Criar', element: DpoCriar },
  { path: '/setor', name: 'Setor', element: Setor },
  { path: '/setor/criar', name: 'Criar', element: SetorCriar }
]

export default routes
