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

    const [sectorsList, setSectorsList] = useState([]);
    const [tagName, setTagName] = useState([]);
    const [sector, setSector] = useState([]);
    const [collectedData, setCollectedData] = useState([]);
    const [reasonData, setReasonData] = useState([]);
    const [howStorage, setHowStorage] = useState([]);
    const [securityData, setSecurityData] = useState([]);
    const [deadlineData, setdeadlineData] = useState([]);
    const [justification, setJustification] = useState([]);
    const [underAgeData, setUnderAgeData] = useState([]);
    const [sensitiveData, setSensitiveData] = useState([]);
    const [controller, setController] = useState([]);

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
                    value: i
                }

                listResult.push(options);
            }
            console.log(listResult)//
            setSectorsList(listResult)
        }else{
            alert(result.message);
        }
    }

    return (
        <>
            <CRow>
                <h2>Criação do inventário de dados pessoais</h2>
            </CRow>
           
                <CForm>
                        <CFormLabel>Identificação</CFormLabel>
                        <CFormInput type='text' required></CFormInput>
                        <br></br>
                        <CFormLabel>Setor da empresa</CFormLabel>
                        <CFormSelect options={sectorsList} required></CFormSelect>
                        <br></br>
                        <CFormLabel>Dados pessoais coletados</CFormLabel>
                        <CFormTextarea rows={3} required></CFormTextarea>
                        <br></br>
                        <CFormLabel>Razão da coleta</CFormLabel>
                        <CFormTextarea rows={2} required></CFormTextarea>
                        <br></br>
                        <CFormLabel>Como é armazenado?</CFormLabel>
                        <CFormTextarea rows={2} required></CFormTextarea>
                        <br></br>
                        <CFormLabel>Segurança dos dados pessoais</CFormLabel>
                        <CFormTextarea rows={2} required></CFormTextarea>
                        <br></br>
                        <CFormLabel>Prazo de retenção dos dados pessoais</CFormLabel>
                        <CFormTextarea rows={2} required></CFormTextarea>
                        <br></br>
                        <CFormLabel>Justificativa do uso</CFormLabel>
                        <CFormTextarea rows={3} required></CFormTextarea>
                        <br></br>
                        <CFormLabel>Uso de dados pessoais de menores de idade</CFormLabel>
                        <br></br>
                            <CFormCheck inline type="radio" name="underAgeData" id="inlineCheckbox1" value="true" label="Sim"/>
                            <CFormCheck inline type="radio" name="underAgeData" id="inlineCheckbox2" value="false" label="Não" defaultChecked/>
                        <br></br>
                        <br></br>
                        <CFormLabel>Trata dados sensíveis?</CFormLabel>
                        <br></br>
                            <CFormCheck inline type="radio" name="sensitiveData" id="inlineCheckbox1" value="true" label="Sim"/>
                            <CFormCheck inline type="radio" name="sensitiveData" id="inlineCheckbox2" value="false" label="Não" defaultChecked/>
                        <br></br>
                        <br></br>
                        <CFormLabel>Nome do Controlador</CFormLabel>
                        <CFormInput type='text' required></CFormInput>
                </CForm>
                <br></br>
                <CButton color='success'>Criar</CButton>
                <br></br>
            <br></br>
            <br></br>
        </>
    );
}
