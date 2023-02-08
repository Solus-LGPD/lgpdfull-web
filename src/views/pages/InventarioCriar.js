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
  CFormSelect,
  CPopover,
  CCard
} from '@coreui/react';
import useAPI from '../../services/api';
import { cibSpotlight, cilArrowCircleLeft,cilLightbulb, cilWarning } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

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
        <div>
            <CRow>
                <h2 class='text-black'>Criação do Inventário de Dados Pessoais</h2>
            </CRow>
           
                <CForm class='text-black'>

                    <CPopover content="Colocar o número de referência para a identificação do inventário. Padrão:(Inventário - SiglaDoSetor 'TI' - Número.) Ex.:Inventário-TI-01"placement="right">
                        <CButton color="link" style={{alignItems:'baseline',display:'flex'}} class='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Identificação</CFormLabel><CIcon icon={cilLightbulb}  height='15'/></CButton>
                    </CPopover>
                    <CFormInput type='text' required value={tagName} onChange={(e) => setTagName(e.target.value)}></CFormInput>                       
                    <br></br>
                    <CPopover content="Colocar o nome do setor a qual se refere o inventário. Ex.:TI,RH,ADM"placement="right">
                        <CButton color="link" style={{alignItems:'baseline',display:'flex'}} class='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Setor da empresa</CFormLabel><CIcon icon={cilLightbulb}  height='15'/></CButton>
                    </CPopover>
                    <CFormSelect options={sectorsList} required value={sector} onChange={(e) => setSector(e.target.value)}></CFormSelect>
                    <br></br>
                    <CPopover content="Descrever  como (de que forma) os dados  pessoais são coletados."placement="right">
                        <CButton color="link" style={{alignItems:'baseline',display:'flex'}} class='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Dados pessoais coletados</CFormLabel><CIcon icon={cilLightbulb}  height='15'/></CButton>
                    </CPopover>
                    <CFormTextarea rows={3} required value={colletedData} onChange={(e) => setColletedData(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CPopover content="Descrever a razão ou motivo pela qual se deseja tratar os dados pessoais."placement="right">
                        <CButton color="link" style={{alignItems:'baseline',display:'flex'}} class='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Razão da coleta</CFormLabel><CIcon icon={cilLightbulb}  height='15'/></CButton>
                    </CPopover>
                    <CFormTextarea rows={2} required value={reasonData} onChange={(e) => setReasonData(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CPopover content="Descrever onde seus dados ficam armazenados. Ex.: Banco de dados, Pastas fisicas, Excel,etc "placement="right">
                        <CButton color="link" style={{alignItems:'baseline',display:'flex'}} class='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Como é armazenado?</CFormLabel><CIcon icon={cilLightbulb}  height='15'/></CButton>
                    </CPopover>
                    <CFormTextarea rows={2} required value={howStorage} onChange={(e) => setHowStorage(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CPopover content="Origem dos dados. Ex.:Titular dos dados, Fornecido por terceiros, etc"placement="right">
                        <CButton color="link" style={{alignItems:'baseline',display:'flex'}} class='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Fonte dos dados</CFormLabel><CIcon icon={cilLightbulb}  height='15'/></CButton>
                    </CPopover>
                    <CFormTextarea rows={2} required value={sourceData} onChange={(e) => setSourceData(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CPopover content=" Descreva as medidas de segurança usadas para garantir a privacidade dos titulares dos dados"placement="right">
                        <CButton color="link" style={{alignItems:'baseline',display:'flex'}} class='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Segurança dos dados pessoais</CFormLabel><CIcon icon={cilLightbulb}  height='15'/></CButton>
                    </CPopover>
                    <CFormTextarea rows={2} required value={securityData} onChange={(e) => setSecurityData(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CPopover content="Tempo até o descarte dos dados pessoais"placement="right">
                        <CButton color="link" style={{alignItems:'baseline',display:'flex'}} class='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Prazo de retenção dos dados pessoais</CFormLabel><CIcon icon={cilLightbulb}  height='15'/></CButton>
                    </CPopover>
                    <CFormTextarea rows={2} required value={deadlineData} onChange={(e) => setDeadlineData(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CPopover content="Razão ou motivo pela qual se deseja tratar os dados pessoais."placement="right">
                        <CButton color="link" style={{alignItems:'baseline',display:'flex'}} class='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Justificativa do uso</CFormLabel><CIcon icon={cilLightbulb}  height='15'/></CButton>
                    </CPopover>
                    <CFormTextarea rows={3} required value={justification} onChange={(e) => setJustification(e.target.value)}></CFormTextarea>
                    <br></br>
                    <CFormLabel>Uso de dados pessoais de menores de idade?</CFormLabel>
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
                    <CPopover content="A quem competem as decisões referentes ao tratamento de dados pessoais"placement="right">
                        <CButton color="link" style={{alignItems:'baseline',display:'flex'}} class='d-flex align-items-baseliner border border-0 bg-transparent text-red border-none' shape="rounded-0"><CFormLabel>Nome do Controlador</CFormLabel><CIcon icon={cilLightbulb}  height='15'/></CButton>
                    </CPopover>
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
