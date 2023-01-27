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
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CFormCheck
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

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        setLoading(true);
        const result = await api.getInventories();
        setLoading(false);
        console.log(result)
        if(result.error === undefined){
            for(let i = 0; i<result.length ; i++){
                
                let createdAt = new Date(result[i].created_at);
                createdAt = createdAt.toLocaleDateString();
    
                let updatedAt = new Date(result[i].updated_at);
                updatedAt = updatedAt.toLocaleDateString();
                
                result[i] = {
                    "id": result[i].id,
                    "dpoId": result[i].dpo_id,
                    "userId": result[i].user_id,
                    "tagName": result[i].tag_name,
                    createdAt,
                    updatedAt,
                    "CButtonEdit": <CButton onClick={() => handleEditButton(i)}><CIcon icon={cilPen}></CIcon></CButton>,
                    "CButtonRemove": <CButton color="danger"><CIcon icon={cilX}></CIcon></CButton>
                }
            }
            console.log(result)
            setList(result)
        }else{
            alert(result.message);
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleEditButton = () => {
        setShowModal(true);
    }

    const fields = [
        {label: 'Identificação', key: 'tagName'},
        {label: 'Data de Criação', key: 'createdAt' },
        {label: 'Data de Atualização', key: 'updatedAt' },
        {label: 'Editar', key: 'CButtonEdit'},
        {label: 'Deletar', key: 'CButtonRemove'}
    ];

    return (
        <>
            <CRow>
                <CCol>
                    <h2>Inventário de Dados Pessoais</h2>

                    <CCard>
                        <CCardHeader>
                            <CButton onClick={() => navigate('/inventario/criar')}>
                                <CIcon icon={cilCheck}></CIcon>
                                Novo Inventário
                            </CButton>
                        </CCardHeader>
                        <CCardBody>
                            <CTable
                                loading={loading}
                                items={list}
                                columns={fields}
                                hover
                            >
                            </CTable>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>


            <CModal fullscreen visible={showModal} onClose={handleCloseModal}>
                <CModalHeader closeButton>Editar Inventário</CModalHeader>
                <CModalBody>
                    <CForm>
                        <CFormLabel>Fonte dos dados pessoais</CFormLabel>
                        <CFormInput type='text'></CFormInput>
                        <CFormLabel>Dados pessoais coletados</CFormLabel>
                        <CFormTextarea rows={3}></CFormTextarea>
                        <CFormLabel>Razão da coleta</CFormLabel>
                        <CFormTextarea rows={2}></CFormTextarea>
                        <CFormLabel>Como é armazenado?</CFormLabel>
                        <CFormTextarea rows={2}></CFormTextarea>
                        <CFormLabel>Segurança dos dados pessoais</CFormLabel>
                        <CFormTextarea rows={2}></CFormTextarea>
                        <CFormLabel>Prazo de retenção dos dados pessoais</CFormLabel>
                        <CFormTextarea rows={2}></CFormTextarea>
                        <CFormLabel>Justificativa do uso</CFormLabel>
                        <CFormTextarea rows={3}></CFormTextarea>
                        <CFormLabel>Uso de dados pessoais de menores de idade</CFormLabel>
                        <br></br>
                            <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="true" label="Sim"/>
                            <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="false" label="Não"/>
                        <br></br>
                        <CFormLabel>Trata dados sensíveis?</CFormLabel>
                        <br></br>
                            <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="true" label="Sim"/>
                            <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="false" label="Não"/>
                        <br></br>
                        <CFormLabel>Nome do Controlador</CFormLabel>
                        <CFormTextarea type='text'></CFormTextarea>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton >Atualizar</CButton>
                    <CButton color='danger' onClick={handleCloseModal}>Cancelar</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}