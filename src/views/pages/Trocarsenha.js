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
  
  // const [senhaNova, setSenhaNova] = useState('');
  // const [confSenha, setConfSenha] = useState('');
  // const [okSenha, setOkSenha] = useState(false);
  const novaSenha = document.getElementById('inputsenha');
  const repSenha = document.getElementById('inputsenharep');
  
  function validar(){
   
    
    if(repSenha.value === novaSenha ){
      
    }  else alert('Senhas diferentes');
      
    
  } 


  return (
  
    <div className=" bg-transparent  ">
      <Link  to='/lgpdfull'>
        
        <CButton class='d-flex border border-0 bg-transparent text-white border-none' color=" text-uppercase "><CIcon icon={cilArrowCircleLeft} className="me-2" size="xl"/>Lgpdfull</CButton>
      </Link>
      <CForm name='formularioTrocarSenha' action="#" method="POST" >
        <CRow className="mb-3 mt-2">
          <CFormLabel htmlFor="inputPassword3" className="col-sm-4 col-form-label">Senha Atual</CFormLabel>
          <CCol sm={10} >
            <CFormInput type="password" id="inputPassword3"/>
          </CCol>
        </CRow>
        <CRow className="mb-3 name1">
          <CFormLabel htmlFor="inputPassword3" className="col-sm-4 col-form-label">Nova Senha</CFormLabel>
          <CCol sm={10} >
            <CFormInput name='novaSenha' type="password" id="inputsenha" />
          </CCol>
        </CRow>
        <CRow className="mb-3 name2">
          <CFormLabel htmlFor="inputPassword3" className="col-sm-6 col-form-label">Repetir Nova Senha</CFormLabel>
          <CCol sm={10} >
            <CFormInput name='repSenha' type="password" id="inputsenharep"  />
          </CCol>
        </CRow>
        
        <CButton style={{backgroundColor: "#2085c7"}} color='text-white' type="submit" onClick={ validar }>Trocar de Senha</CButton>
      </CForm>
    </div>
  )
}



export default Trocarsenha
