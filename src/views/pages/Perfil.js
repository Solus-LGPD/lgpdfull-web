import React from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  
  CFormText,
  
  CInputGroup,
  
  CInputGroupText,
  
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleLeft, cilLockLocked } from '@coreui/icons'
import { Link } from 'react-router-dom'



const Perfil = () => {
  return (
    <div class=" bg-transparent text-black ">
      <Link  to='/lgpdfull'>
        
        <CButton class='d-flex text-decoration-underline text-decoration-none border border-0 bg-transparent' color=" text-uppercase "><CIcon icon={cilArrowCircleLeft} className="me-2" size="xl"/>Lgpdfull</CButton>
      </Link>
      <CForm >
        <CForm className='mb-3 mt-3'>
            <CFormInput label='Primeiro Nome' type="text" id="exampleFormControlInput1" placeholder="Digite seu Nome" aria-describedby="exampleFormControlInputHelpInline" />
        </CForm>
        <CForm className='mb-3'>
            <CFormInput label='Sobrenome' type="text" id="exampleFormControlInput1" placeholder="Digite seu Sobrenome" aria-describedby="exampleFormControlInputHelpInline" />
        </CForm>
        <CForm className='mb-3'>
            <CFormInput label='E-mail' type="email" id="exampleFormControlInput1" placeholder="name@example.com" aria-describedby="exampleFormControlInputHelpInline" />
        </CForm>
        <CForm className='mb-3'>
            <CFormInput label='Nome da Empresa' type="text" id="exampleFormControlInput1" placeholder="Solus-it" aria-describedby="exampleFormControlInputHelpInline" />
        </CForm>
        <CButton style={{backgroundColor: "#2085c7"}} color='text-white' type="submit">Confirmar</CButton>
      </CForm>
    </div>
  )
}

export default Perfil