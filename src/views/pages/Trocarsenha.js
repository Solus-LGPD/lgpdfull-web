import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleLeft} from '@coreui/icons'
import { Link } from 'react-router-dom'



const Trocarsenha = () => {
  
  const [PasswordNow,setPasswordNow] = useState('');
  const [NewPassword,setNewPassword] = useState('');
  const [RepeatPassword,setRepeatPassword] = useState('');
  
  const validar =() =>{
    if (PasswordNow != NewPassword) {
      if (NewPassword === RepeatPassword ) {
        alert('sucess')
      } else{  
        alert('senha mão é igual')
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
            <CFormInput required label='Senha Atual' type="password" value={PasswordNow} onChange={(e) => setPasswordNow(e.target.value)}/>
          </CCol>
        </CRow>
        <CRow className="mb-3 name1">
          <CCol sm={10} >
            <CFormInput required label='Nova Senha' type="password" value={NewPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </CCol>
        </CRow>
        <CRow className="mb-3 name2">
          <CCol sm={10} >
            <CFormInput required label='Repetir Senha' feedback='Parece bom' type="password" value={RepeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}  />
          </CCol>
        </CRow>
        
        <CButton style={{backgroundColor: "#2085c7"}} color='text-white' type="submit" onClick={ validar }>Trocar de Senha</CButton>
      </CForm>
    </div>
  )
}



export default Trocarsenha
