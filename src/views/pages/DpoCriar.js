
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {CButton,CRow,CForm,CFormInput,CFormLabel,CFormCheck,CPopover,} from '@coreui/react';
import useAPI from '../../services/api';
import CIcon from '@coreui/icons-react';
import { cilLightbulb } from '@coreui/icons';

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
                <h2 className='text-black'>Registro de Encarregado de Dados Pessoais</h2>
            </CRow>
           
                <CForm className='text-black'>
                        <CFormLabel>Nome Completo ou Nome dos Integrantes do Comitê</CFormLabel>
                        <CFormInput type='text' required value={firstName} onChange={(e) => setFirstName(e.target.value)}></CFormInput>
                        <br></br>
                        <CPopover trigger="focus" content="Nome Social = Como você quer ser chamado. Comitê = Todas as pessoas que são integrantes do comitê responsável pela LGPD na empresa. Ex.:Fulano, Ciclano, etc.  "placement="right">
                            <CButton data-coreui-toggle="popover" color="link" style={{alignItems:'baseline',display:'flex'}}   class='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Nome Social ou Nomes das pessoas do Comitê</CFormLabel><CIcon className='text-warning' icon={cilLightbulb}  height='15'/></CButton>
                        </CPopover>
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