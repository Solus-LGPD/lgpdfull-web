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
  
  const novaSenha = document.getElementById('inputsenha');
  const repSenha = document.getElementById('inputsenharep');
  const atualSenha = document.getElementById('atualsenha');

  const validar =() =>{
    if (atualSenha.value != novaSenha.value && atualSenha.value != repSenha.value) {
      if (novaSenha.value === repSenha.value ) {
        alert('sucess')
      } else{  
        alert('não rolou')
      }
    } else {
      alert('senha igual a atual')
    }
  } 


  return (
  
    <div class=" bg-transparent text-black  ">
      <Link  to='/lgpdfull'>
        
        <CButton class='d-flex text-decoration-underline text-decoration-none border border-0 bg-transparent' color=" text-uppercase "><CIcon icon={cilArrowCircleLeft} className="me-2" size="xl"/>Lgpdfull</CButton>
      </Link>
      <CForm >
        <CRow className="mb-3 mt-2">
          <CCol sm={10} >
            <CFormInput required label='Senha Atual' type="password" id="atualsenha"/>
          </CCol>
        </CRow>
        <CRow className="mb-3 name1">
          <CCol sm={10} >
            <CFormInput required label='Nova Senha' type="password" id="inputsenha" />
          </CCol>
        </CRow>
        <CRow className="mb-3 name2">
          <CCol sm={10} >
            <CFormInput required label='Repetir Senha' feedback='Parece bom' type="password" id="inputsenharep"  />
          </CCol>
        </CRow>
        
        <CButton style={{backgroundColor: "#2085c7"}} color='text-white' type="submit" onClick={ validar }>Trocar de Senha</CButton>
      </CForm>
    </div>
  )
}


export default Trocarsenha
