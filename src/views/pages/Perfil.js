import React, { useState } from 'react';
import {CButton,CForm,CFormInput,CFormLabel,CAlert  } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleLeft } from '@coreui/icons'
import { Link } from 'react-router-dom'
import useAPI from '../../services/api';

export default () => {
  const api = useAPI();

  const [ loading, setLoading ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ visible, setVisible ] = useState(false);
  const [ message, setMessage ] = useState('');
  const [ color, setColor ] = useState('primary');

  const handleUpdateButton = async () => {
    
    const dataRaw = {
      email
    }

    setLoading(true);
    const result = await api.updateUser(dataRaw);
    setLoading(false);

    if(result.error === undefined){
      navigate('/lgpdfull')
    }else{
      setVisible(true);
      setMessage('Email Inválido');
      setColor('danger');
    }
  }

  return (
    <>
        <div className=" bg-transparent text-black">
          <br></br>
          <CAlert color={color} dismissible visible={visible} onClose={() => setVisible(false)}>
            {message}
          </CAlert>
          <CForm className='mb-3 '>
            <CFormLabel htmlFor="exampleFormControlInput1">E-mail</CFormLabel>
            <CFormInput required type="email" id="exampleFormControlInput1" placeholder="name@example.com" aria-describedby="exampleFormControlInputHelpInline" value={email} onChange={(e) => setEmail(e.target.value)} />
          </CForm>
          <CButton  onClick={handleUpdateButton} style={{backgroundColor: "#2085c7"}} color=' text-white' disabled={loading}>{loading ? 'Carregando' : 'Atualizar'}</CButton>
      </div>  
    </>
  );
}