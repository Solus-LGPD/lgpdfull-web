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
    <div className=" bg-transparent  ">
        <Link  to='/lgpdfull'>
          
          <CButton class='d-flex border border-0 bg-transparent text-white border-none text-decoration-none' color=" text-uppercase "><CIcon icon={cilArrowCircleLeft} className="me-2" size="xl"/>Lgpdfull</CButton>
        </Link>
        <CForm >
            <CForm className='mb-3 mt-3'>
                <CFormLabel htmlFor="exampleFormControlInput1">Primeiro Nome</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput1" placeholder="Digite seu Nome" aria-describedby="exampleFormControlInputHelpInline" />
            </CForm>
            <CForm className='mb-3'>
                <CFormLabel htmlFor="exampleFormControlInput1">Sobrenome</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput1" placeholder="Digite seu Sobrenome" aria-describedby="exampleFormControlInputHelpInline" />
            </CForm>
            <CForm className='mb-3'>
                <CFormLabel htmlFor="exampleFormControlInput1">E-mail</CFormLabel>
                <CFormInput type="email" id="exampleFormControlInput1" placeholder="name@example.com" aria-describedby="exampleFormControlInputHelpInline" />
            </CForm>
            <CForm className='mb-3'>
                <CFormLabel htmlFor="exampleFormControlInput1">Nome da Empresa</CFormLabel>
                <CFormInput type="text" id="exampleFormControlInput1" placeholder="Solus-it" aria-describedby="exampleFormControlInputHelpInline" />
            </CForm>
          <CButton color='info text-white' type="submit">Confirmar</CButton>
        </CForm>
    </div>
  )
}

export default Perfil