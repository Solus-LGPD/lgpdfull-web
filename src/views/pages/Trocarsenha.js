import React, { useState } from 'react'
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
import { Button } from '@coreui/coreui'



const Trocarsenha = () => {
  
  const [senhaNova, setSenhaNova] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [okSenha, setOkSenha] = useState(false);

  const validador = () => {
    if (senhaNova === confSenha) {
      setOkSenha(true)
    } else {
        setOkSenha(false)
      }
  }



  return (
  
    <div className=" bg-transparent  ">
      <Link  to='/lgpdfull'>
        
        <CButton class='d-flex border border-0 bg-transparent text-white border-none' color=" text-uppercase "><CIcon icon={cilArrowCircleLeft} className="me-2" size="xl"/>Lgpdfull</CButton>
      </Link>
      <CForm >
        <CRow className="mb-3 mt-2">
          <CFormLabel htmlFor="inputPassword3" className="col-sm-4 col-form-label">Senha Atual</CFormLabel>
          <CCol sm={10} >
            <CFormInput type="password" id="inputPassword3"/>
          </CCol>
        </CRow>
        <CRow className="mb-3 name1">
          <CFormLabel htmlFor="inputPassword3" className="col-sm-4 col-form-label">Nova Senha</CFormLabel>
          <CCol sm={10} >
            <CFormInput type="password" id="inputPassword3" onChange={validador()}/>
          </CCol>
        </CRow>
        <CRow className="mb-3 name2">
          <CFormLabel htmlFor="inputPassword3" className="col-sm-6 col-form-label">Repetir Nova Senha</CFormLabel>
          <CCol sm={10} >
            <CFormInput type="password" id="inputPassword3" onChange={validador()} />
          </CCol>
        </CRow>
        
        <CButton color='info text-white' type="submit" onChange={validador()}>Trocar de Senha</CButton>
      </CForm>
    </div>
  )
}
if (name1 != name2){
  
}
export default Trocarsenha
