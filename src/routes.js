import React from 'react'


const Lgpdfull = React.lazy(() => import('./views/pages/Lgpdfull'))
const Trocarsenha = React.lazy(() => import('./views/pages/ChangePassword'))
const Logout = React.lazy(() => import('./views/Logout'))
const Perfil = React.lazy(() => import('./views/pages/Profile'))

//FASE A
const Inventario = React.lazy(() => import('./views/pages/Inventory'));
const InventarioCriar = React.lazy(() => import('./views/pages/CreateInventory'));
const Dpo = React.lazy(() => import('./views/pages/Dpo'));
const DpoCriar = React.lazy(() => import('./views/pages/CreateDpo'));
const Setor = React.lazy(() => import('./views/pages/Sector'));
const SetorCriar = React.lazy(() => import('./views/pages/CreateSector'));
const Quiz  = React.lazy(() => import('./views/pages/Quiz'));
const QuizCriar = React.lazy(() => import('./views/pages/CreateQuiz'));
const Ajuda = React.lazy(() => import('./views/pages/Help'));

//FASE B
const PoliticaDePrivacidade = React.lazy(() => import('./views/pages/PrivacyPolicy'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/lgpdfull', element: Lgpdfull },
  { path: '/lgpdfull/trocarsenha', name: 'Trocar de Senha', element: Trocarsenha },
  { path: '/lgpdfull/logout', name: 'Logout', element: Logout },
  { path: '/lgpdfull/perfil', name: 'Perfil', element: Perfil },
  { path: '/lgpdfull/inventario', name: 'Inventario', element: Inventario },
  { path: '/lgpdfull/inventario/criar', name: 'Criar', element: InventarioCriar },
  { path: '/lgpdfull/dpo', name: 'DPO', element: Dpo },
  { path: '/lgpdfull/dpo/criar', name: 'Criar', element: DpoCriar },
  { path: '/lgpdfull/setor', name: 'Setor', element: Setor },
  { path: '/lgpdfull/setor/criar', name: 'Criar', element: SetorCriar },
  { path: '/lgpdfull/quiz', name: 'Quiz', element: Quiz },
  { path: '/lgpdfull/quiz/novo', name: 'Quiz', element: QuizCriar },
  { path: '/lgpdfull/ajuda', name: 'Ajuda', element: Ajuda },
  { path: '/lgpdfull/politica-de-privacidade', name: 'Política De Privacidade', element: PoliticaDePrivacidade }
]

export default routes
