import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    cilPen,
    cilArrowCircleLeft,
    cilArrowLeft,
    cilArrowThickLeft,
    cilBackspace
  } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import useAPI from '../../services/api';

export default () => {

    const api = useAPI();
    const navigate = useNavigate();

    const [ list, setList ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ firstName, setFirstName ] = useState('');
    const [ socialName, setSocialName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ showEditModal, setShowEditModal ] = useState(false);

    useEffect(() => {
        getList();
    }, []);

    const handleCloseModal = () => {
        setShowEditModal(false);
    }

    const handleEditButton =  async (id) => {
        sessionStorage.setItem('dpoId', id);
        setShowEditModal(true);
        const result = await api.getActualDpo();
        if(result.error === undefined){
            setSocialName(result.social_name);
            setEmail(result.email);
            setFirstName(result.name);
        }
        else{
            alert(result.message);
        }
    }

    const handleUpdateButton =  async () => {
        const id = sessionStorage.getItem('dpoId');

        const dataRaw = {
            name: firstName,
            socialName,
            email
        }

        setLoading(true);
        const result = await api.updateDpo(id ,dataRaw);
        setLoading(false);

        if(result.error === undefined){
            sessionStorage.removeItem('dpoId');
            window.location.reload();
        }else{
            alert(result.message);
        }
    }

    const getList = async () => {
        setLoading(true);
        const result = await api.getDpos();
        setLoading(false);
        if(result.error === undefined){
            for(let i = 0; i<result.length ; i++){

                let naturalPerson = 'Pessoa Jurídica'
                if(result[i].natural_person === true){
                    naturalPerson = 'Pessoa Física';
                }

                let statusComponent = <></>;
                let statusDpo = '';
                if(result[i].actual === true){
                    statusDpo = 'Atual'
                    statusComponent = <CBadge color='success'>{statusDpo}</CBadge>
                }
                else{
                    statusDpo = 'Inativo'
                    statusComponent = <CBadge color='danger'>{statusDpo}</CBadge>
                }

                if(result[i].actual === true){
                    result[i] = {
                        "id": result[i].id,
                        naturalPerson,
                        socialName: result[i].social_name,
                        "CBadge": statusComponent,
                        "CButtonEdit": <CButton onClick={() => handleEditButton(result[i].id)}><CIcon icon={cilPen}></CIcon></CButton>,
                    }
                }else{
                    result[i] = {
                        "id": result[i].id,
                        naturalPerson,
                        socialName: result[i].social_name,
                        "CBadge": statusComponent,
                        "CButtonEdit": <CButton disabled><CIcon icon={cilPen}></CIcon></CButton>,
                    }
                }
            }
            setList(result);
        }else{
            alert(result.message);
        }
    }

    const fields = [
        {label: 'Nome Social', key: 'socialName'},
        {label: 'Tipo', key: 'naturalPerson' },
        {label: 'Status', key: 'CBadge' },
        {label: 'Editar', key: 'CButtonEdit'},
    ];

    return (
        <>
            <CRow>
                
                <CCol>
                    
                    <h2 className='text-black'>Encarregado dos Dados Pessoais</h2>

                    <CCard>
                        <CCardHeader>
                            <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" onClick={() => navigate('/dpo/criar')}>
                                <CIcon icon={cilCheck}></CIcon>
                                Cadastrar Novo Encarregado
                            </CButton>
                        </CCardHeader>
                        <CCardBody>
                            <CTable
                                loading={loading.toString()}
                                items={list}
                                columns={fields}
                                hover
                            >
                            </CTable>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CModal fullscreen visible={showEditModal} onClose={handleCloseModal}>
                <CModalHeader closeButton>Editar DPO</CModalHeader>
                <CModalBody>
                    <CForm>
                        <CFormLabel>Nome</CFormLabel>
                        <CFormInput type='text' required value={firstName} onChange={(e) => setFirstName(e.target.value)}></CFormInput>
                        <br></br>
                        <CFormLabel>Nome Social ou Nome dos Integrantes do Comitê</CFormLabel>
                        <CFormInput type='text' required value={socialName} onChange={(e) => setSocialName(e.target.value)}></CFormInput>
                        <br></br>
                        <CFormLabel>E-mail</CFormLabel>
                        <CFormInput type='text' required value={email} onChange={(e) => setEmail(e.target.value)}></CFormInput>
                        <br></br>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton onClick={handleUpdateButton}>Atualizar</CButton>
                    <CButton color='danger' onClick={handleCloseModal}>Cancelar</CButton>
                </CModalFooter>
            </CModal>

        </>
    );
}