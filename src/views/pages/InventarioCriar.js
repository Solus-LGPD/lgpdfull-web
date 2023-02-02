import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CButton,
  CRow,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CFormCheck,
  CFormSelect
} from '@coreui/react';
import useAPI from '../../services/api';

export default () => {

    const api = useAPI();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [sectorsList, setSectorsList] = useState('');
    const [tagName, setTagName] = useState('');
    const [sector, setSector] = useState('');
    const [colletedData, setColletedData] = useState('');
    const [sourceData, setSourceData] = useState('');
    const [reasonData, setReasonData] = useState('');
    const [howStorage, setHowStorage] = useState('');
    const [securityData, setSecurityData] = useState('');
    const [deadlineData, setDeadlineData] = useState('');
    const [justification, setJustification] = useState('');
    const [underAgeData, setUnderAgeData] = useState(false);
    const [sensitiveData, setSensitiveData] = useState(false);
    const [controller, setController] = useState('');

    useEffect(() => {
        getSectorsList();
    }, []);

    const getSectorsList = async () => {
        const listResult = new Array()
        const result = await api.getSectors();
        console.log(result)//
        listResult.push('Escolha o setor do inventário');
        if(result.error === undefined){
            for(let i = 0; i<result.length ; i++){
                let options = {
                    label: result[i].tag_name,
                    value: result[i].id
                }

                listResult.push(options);
            }
            console.log(listResult)//
            setSectorsList(listResult)
        }else{
            alert(result.message);
        }
    }

    const handlePostInventory = async () => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const dpo =  await api.getActualDpo()

        const dataRaw = {
            userId: user.id,
            dpoId: dpo[0].id,
            sectorId: sector,
            tagName,
            sourceData,
            colletedData,
            reasonData,
            howStorage,
            securityData,
            deadlineData,
            justification,
            underAgeData,
            sensitiveData,
            controller
        }

        setLoading(true);
        const result = await api.postInventory(dataRaw);
        setLoading(false);

        if(result.error === undefined){
            navigate('/inventario')
        }else{
            alert(result.message);
        }
    }

    return (
        <div >
            <CRow>
                <h2 class='text-black'>Criação do Inventário de Dados Pessoais</h2>
            </CRow>
           
                <CForm class='text-black'>
                        <CFormLabel>Identificação</CFormLabel>
                        <CFormInput type='text' required value={tagName} onChange={(e) => setTagName(e.target.value)}></CFormInput>
                        <br></br>
                        <CFormLabel>Setor da empresa</CFormLabel>
                        <CFormSelect options={sectorsList} required value={sector} onChange={(e) => setSector(e.target.value)}></CFormSelect>
                        <br></br>
                        <CFormLabel>Dados pessoais coletados</CFormLabel>
                        <CFormTextarea rows={3} required value={colletedData} onChange={(e) => setColletedData(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormLabel>Razão da coleta</CFormLabel>
                        <CFormTextarea rows={2} required value={reasonData} onChange={(e) => setReasonData(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormLabel>Como é armazenado?</CFormLabel>
                        <CFormTextarea rows={2} required value={howStorage} onChange={(e) => setHowStorage(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormLabel>Fonte dos dados</CFormLabel>
                        <CFormTextarea rows={2} required value={sourceData} onChange={(e) => setSourceData(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormLabel>Segurança dos dados pessoais</CFormLabel>
                        <CFormTextarea rows={2} required value={securityData} onChange={(e) => setSecurityData(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormLabel>Prazo de retenção dos dados pessoais</CFormLabel>
                        <CFormTextarea rows={2} required value={deadlineData} onChange={(e) => setDeadlineData(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormLabel>Justificativa do uso</CFormLabel>
                        <CFormTextarea rows={3} required value={justification} onChange={(e) => setJustification(e.target.value)}></CFormTextarea>
                        <br></br>
                        <CFormLabel>Uso de dados pessoais de menores de idade</CFormLabel>
                        <br></br>
                            <CFormCheck inline type="radio" name="underAgeData" id="inlineCheckbox1" value={true} label="Sim" onChange={(e) => setUnderAgeData(e.target.value)}/>
                            <CFormCheck inline type="radio" name="underAgeData" id="inlineCheckbox2" value={false} label="Não" defaultChecked onChange={(e) => setUnderAgeData(e.target.value)}/>
                        <br></br>
                        <br></br>
                        <CFormLabel>Trata dados sensíveis?</CFormLabel>
                        <br></br>
                            <CFormCheck inline type="radio" name="sensitiveData" id="inlineCheckbox1" value={true} label="Sim"  onChange={(e) => setSensitiveData(e.target.value)}/>
                            <CFormCheck inline type="radio" name="sensitiveData" id="inlineCheckbox2" value={false} label="Não" defaultChecked  onChange={(e) => setSensitiveData(e.target.value)}/>
                        <br></br>
                        <br></br>
                        <CFormLabel>Nome do Controlador</CFormLabel>
                        <CFormInput type='text' required value={controller} onChange={(e) => setController(e.target.value)}></CFormInput>
                </CForm>
                <br></br>
                <CButton color='success' disabled={loading} onClick={handlePostInventory}>{loading ? 'Carregando' : 'Criar'}</CButton>
                <br></br>
            <br></br>
            <br></br>
        </div>
    );
}
