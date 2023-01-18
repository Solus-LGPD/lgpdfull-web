import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCursor,
  cilChart,
  cilLayers,
  cilNotes,
  cilPencil,
  cilPlus,
  cilSpeedometer,
  cilUser,
  cilZoom
} from '@coreui/icons'
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
    to: '/dashboard',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Painel Principal',
  },
  {
    component: CNavItem,
    name: 'Quiz LGPD',
    to: '/lgpdfull',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
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
    name: 'Processos',
    to: '/processos',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Todos',
        to: '/processos',
        icon: <CIcon icon={cilLayers} customClassName="nav-icon" />
      },
      {
        component: CNavItem,
        name: 'Criar',
        to: '/processos/criar',
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
