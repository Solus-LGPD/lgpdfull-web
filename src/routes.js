import React from 'react'


const Lgpdfull = React.lazy(() => import('./views/pages/Lgpdfull'))
const Trocarsenha = React.lazy(() => import('./views/pages/ChangePassword'))
const Logout = React.lazy(() => import('./views/Logout'))
const Perfil = React.lazy(() => import('./views/pages/Profile'))
const Inventario = React.lazy(() => import('./views/pages/Inventory'));
const InventarioCriar = React.lazy(() => import('./views/pages/CreateInventory'));
const Dpo = React.lazy(() => import('./views/pages/Dpo'));
const DpoCriar = React.lazy(() => import('./views/pages/CreateDpo'));
const Setor = React.lazy(() => import('./views/pages/Sector'));
const SetorCriar = React.lazy(() => import('./views/pages/CreateSector'));
const Quiz  = React.lazy(() => import('./views/pages/Quiz'));
const QuizCriar = React.lazy(() => import('./views/pages/CreateQuiz'));
const Help = React.lazy(() => import('./views/pages/Help'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/lgpdfull', element: Lgpdfull },
  { path: '/lgpdfull/trocarsenha', name: 'Trocar de Senha', element: Trocarsenha },
  { path: '/logout', name: 'Logout', element: Logout },
  { path: '/lgpdfull/perfil', name: 'Perfil', element: Perfil },
  { path: '/inventario', name: 'Inventario', element: Inventario },
  { path: '/inventario/criar', name: 'Criar', element: InventarioCriar },
  { path: '/dpo', name: 'DPO', element: Dpo },
  { path: '/dpo/criar', name: 'Criar', element: DpoCriar },
  { path: '/setor', name: 'Setor', element: Setor },
  { path: '/setor/criar', name: 'Criar', element: SetorCriar },
  { path: '/quiz', name: 'Quiz', element: Quiz },
  { path: '/quiz/novo', name: 'Quiz', element: QuizCriar },
  { path: '/ajuda', name: 'Ajuda', element: Help }
]

export default routes
