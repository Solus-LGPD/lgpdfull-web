
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CButton,
  CRow,
  CForm,
  CFormInput,
  CFormLabel,
  CFormCheck,
} from '@coreui/react';
import useAPI from '../../services/api';

export default () => {

    const api = useAPI();
    const navigate = useNavigate();

    const [ loading, setLoading ] = useState(false);
    const [ firstName, setFirstName ] = useState('');
    const [ socialName, setSocialName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ naturalPerson, setNaturalPerson ] = useState('');

    const handlePostDpo = async () => {

        const dataRaw = {
            name: firstName,
            naturalPerson,
            socialName,
            email,
        }

        setLoading(true);
        const result = await api.postDpo(dataRaw);
        setLoading(false);

        if(result.error === undefined){
            navigate('/dpo')
        }else{
            alert(result.message);
        }
    }

    return (
        <>
            <CRow>
                <h2 class='text-black'>Registro de Encarregado de Dados Pessoais</h2>
            </CRow>
           
                <CForm class='text-black'>
                        <CFormLabel>Nome</CFormLabel>
                        <CFormInput type='text' required value={firstName} onChange={(e) => setFirstName(e.target.value)}></CFormInput>
                        <br></br>
                        <CFormLabel>Nome Social</CFormLabel>
                        <CFormInput type='text' required value={socialName} onChange={(e) => setSocialName(e.target.value)}></CFormInput>
                        <br></br>
                        <CFormLabel>Tipo</CFormLabel>
                        <br></br>
                            <CFormCheck inline type="radio" name="naturalPerson" id="inlineCheckbox1" value={true} label="Pessoa Física" defaultChecked onChange={(e) => setNaturalPerson(e.target.value)}/>
                            <CFormCheck inline type="radio" name="naturalPerson" id="inlineCheckbox2" value={false} label="Pessoa Jurídica"  onChange={(e) => setNaturalPerson(e.target.value)}/>
                        <br></br>
                        <br></br>
                        <CFormLabel>E-mail</CFormLabel>
                        <CFormInput type='text' required value={email} onChange={(e) => setEmail(e.target.value)}></CFormInput>
                        <br></br>
                </CForm>
            <br></br>
            <CButton color='success' disabled={loading} onClick={handlePostDpo}>{loading ? 'Carregando' : 'Criar'}</CButton>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}