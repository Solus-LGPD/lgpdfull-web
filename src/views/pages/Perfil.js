import React, { useState } from 'react';
import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,  
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleLeft, cilLockLocked } from '@coreui/icons'
import { Link } from 'react-router-dom'
import useAPI from '../../services/api';

export default () => {
  const api = useAPI();

  const [ loading, setLoading ] = useState(false);
  const [ email, setEmail ] = useState('');

  const handleUpdateButton = async () => {
    
    const dataRaw = {
      email
    }

    setLoading(true);
    const result = await api.updateUser(dataRaw);
    setLoading(false);

    if(result.error === undefined){
      navigate('/')
    }else{
      alert(result.message);
    }
  }

  return (
    <>
        <div className=" bg-transparent  ">
          <Link  to='/lgpdfull'>
            
            <CButton class='d-flex border border-0 bg-transparent text-white border-none text-decoration-none' color=" text-uppercase "><CIcon icon={cilArrowCircleLeft} className="me-2" size="xl"/>Lgpdfull</CButton>
          </Link>
          <br></br>
          <br></br>
          <br></br>
          <CForm >
              <CForm className='mb-3'>
                  <CFormLabel htmlFor="exampleFormControlInput1">E-mail</CFormLabel>
                  <CFormInput type="email" id="exampleFormControlInput1" placeholder="name@example.com" aria-describedby="exampleFormControlInputHelpInline" value={email} onChange={(e) => setEmail(e.target.value)} />
              </CForm>
            <CButton onClick={handleUpdateButton} style={{backgroundColor: "#2085c7"}} color=' text-white' type="submit" disabled={loading}>{loading ? 'Carregando' : 'Atualizar'}</CButton>
          </CForm>
      </div>  
    </>
  );
}