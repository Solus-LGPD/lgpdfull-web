import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilUser,
  cilExitToApp,
  cilLockLocked
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'


const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Configurações</CDropdownHeader>
        <CDropdownItem href="/lgpdfull/Perfil">
          <CIcon icon={cilUser} className="me-2" />
          Perfil
        </CDropdownItem>
        <Link class="text-decoration-none" to='/lgpdfull/trocarsenha'>
          <CDropdownItem >
            <CIcon icon={cilLockLocked} className="me-2" />
            Trocar Senha
          </CDropdownItem>
        </Link> 
        <CDropdownDivider />
        <CDropdownItem href="/logout">
          <CIcon icon={cilExitToApp} className="me-2" />
          Sair
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown