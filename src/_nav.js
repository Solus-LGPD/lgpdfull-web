import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilCursor,cilChart,cilLayers,cilPencil,cilPlus,cilUser,cilChartPie, cilPeople, cilVoice, cilAudio, cilBullhorn} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  /*{
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },*/
  {
    component: CNavTitle,
    name: 'Painel Geral',
  },
  {
    component: CNavItem,
    name: 'LGPDFull',
    to: '/lgpdfull',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Ajuda',
    to: '/',
    icon: <CIcon icon={cilBullhorn} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Fase de Mapeamento A'
    // name: 'Painel Principal',
  },
  {
    component: CNavGroup,
    name: 'Quiz LGPD',
    to: '/quiz',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Todos',
        to: '/quiz',
        icon: <CIcon icon={cilLayers} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name: 'Fazer',
        to: '/quiz/fazer',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />
      }
    ]
  },
  {
    component: CNavGroup,
    name: 'DPO',
    to: '/dpo',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Todos',
        to: '/dpo',
        icon: <CIcon icon={cilLayers} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name: 'Criar',
        to: '/dpo/criar',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Setor',
    to: '/setor',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Todos',
        to: '/setor',
        icon: <CIcon icon={cilLayers} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name: 'Criar',
        to: '/setor/criar',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Inventário',
    to: '/Inventario',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Todos',
        to: '/inventario',
        icon: <CIcon icon={cilLayers} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name: 'Criar',
        to: '/inventario/criar',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />
      }
    ],
  },
]

export default _nav
