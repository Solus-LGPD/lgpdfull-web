import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CFormCheck,
  CBadge
} from '@coreui/react';
import {
    cilCheck,
    cilX,
    cilPen
  } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import useAPI from '../../services/api';

export default () => {

    const api = useAPI();
    const navigate = useNavigate();

    const [ tagName, setTagName ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const handlePostSector = async () => {
        
        setLoading(true);
        const result = await api.postSector(tagName);
        setLoading(false);

        if(result.error === undefined){
            window.location.reload();
            alert("Setor Criado");
        }else{
            alert(result.message);
        }
    }

    return (
        <>
            <CRow>
                <h2 class='text-black'>Cadastrar Novo Setor</h2>
            </CRow>
           
                <CForm class='text-black'>
                        <CFormLabel>Nome</CFormLabel>
                        <CFormInput type='text' required value={tagName} onChange={(e) => setTagName(e.target.value)}></CFormInput>
                        <br></br>
                </CForm>
            <br></br>
            <CButton color='success' disabled={loading} onClick={handlePostSector}>{loading ? 'Carregando' : 'Criar'}</CButton>
            <br></br>
            <br></br>
            <br></br>
        </>        
    );
}