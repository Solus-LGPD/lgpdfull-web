import React from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  
  CInputGroup,
  
  CInputGroupText,
  
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleLeft, cilLockLocked } from '@coreui/icons'
import { Link } from 'react-router-dom'



const Trocarsenha = () => {
  return (
      <div className="bg-light  ">
        <Link to='/lgpdfull'>
          
          <CButton color="link text-decoration-none"><CIcon icon={cilArrowCircleLeft} className="me-2" size="xl"/>Voltar para Lgpdfull</CButton>
        </Link>
        <CForm>
          <CRow className="mb-3 mt-2">
            <CFormLabel htmlFor="inputPassword3" className="col-sm-4 col-form-label">Senha Atual</CFormLabel>
            <CCol sm={10} >
              <CFormInput type="password" id="inputPassword3"/>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputPassword3" className="col-sm-4 col-form-label">Nova Senha</CFormLabel>
            <CCol sm={10} >
              <CFormInput type="password" id="inputPassword3"/>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputPassword3" className="col-sm-6 col-form-label">Repetir Nova Senha</CFormLabel>
            <CCol sm={10} >
              <CFormInput type="password" id="inputPassword3"/>
            </CCol>
          </CRow>
          
          <CButton type="submit">Trocar de Senha</CButton>
        </CForm>
      </div>
  )
}

export default Trocarsenha
