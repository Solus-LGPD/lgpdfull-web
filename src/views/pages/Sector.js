import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {CButton,CCard,CCardBody,CCardHeader,CCol,CRow,CTable,CModal,CModalHeader,CModalBody,CModalFooter,CForm,CFormLabel,CFormInput} from '@coreui/react';
import {cilCheck,cilX,cilPen} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import useAPI from '../../services/api';

export default () => {
    const api = useAPI();
    const navigate = useNavigate();

    const [ list, setList ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ tagName, setTagName] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        getList();
    }, []);

    const handleCloseModal = () => {
        setShowEditModal(false);
        setShowDeleteModal(false);
        sessionStorage.removeItem('setorId');
    }

    const handleEditButton =  async (id) => {
        sessionStorage.setItem('sectorId', id);
        setShowEditModal(true);
        const result = await api.getOneSector(id);
        if(result.error === undefined){
            setTagName(result.tag_name);
        }
        else{
            alert(result.message);
        }
    }

    const handleUpdateButton = async () => {
        const dataRaw = {
            id: sessionStorage.getItem('sectorId'),
            tag_name: tagName
        }

        setLoading(true);
        const result = await api.updateSector(dataRaw);
        setLoading(false);

        if(result.error === undefined){
            window.location.reload();
        }else{
            alert(result.message);
        }
    }

    const handleDeleteModal = (id) => {
        setShowDeleteModal(true);
        sessionStorage.setItem('sectorId', id);
    }

    const handleDeleteButton = async () => {
        const id = sessionStorage.getItem('sectorId');
        const result  = await api.deleteSector(id);
        if(result.error === undefined){
            sessionStorage.removeItem('sectorId');
            alert("Setor removido")
            window.location.reload();
        }
        else{
            alert(result.message);
        }
    }

    const getList = async () => {

        setLoading(true);
        const result = await api.getSectors();
        setLoading(false);

        if(result.error === undefined){
            for(let i = 0; i<result.length ; i++){

                result[i] = {
                    "id": result[i].id,
                    tagName: result[i].tag_name,
                    "CButtonEdit": <CButton onClick={() => handleEditButton(result[i].id)}><CIcon icon={cilPen}></CIcon></CButton>,
                    "CButtonRemove": <CButton onClick={() => {handleDeleteModal(result[i].id)}} color="danger"><CIcon icon={cilX}></CIcon></CButton>
                }
            }
            setList(result);
        }else{
            alert(result.message);
        }
    }

    const fields = [
        {label: 'Nome do Setor', key: 'tagName'},
        {label: 'Editar', key: 'CButtonEdit'},
        {label: 'Excluir', key: 'CButtonRemove'}
    ];

    return (
        <>
            <CRow>
                <CCol>
                    <h2 className='text-black'>Setores</h2>

                    <CCard>
                        <CCardHeader>
                            <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" onClick={() => navigate('/setor/criar')}>
                                <CIcon icon={cilCheck}></CIcon>
                                Cadastrar Novo Setor
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

            <CModal visible={showEditModal} onClose={handleCloseModal}>
                <CModalHeader closeButton>Editar DPO</CModalHeader>
                <CModalBody>
                    <CForm className='text-black'>
                        <CFormLabel>Nome do Setor</CFormLabel>
                        <CFormInput type='text' required value={tagName} onChange={(e) => setTagName(e.target.value)}></CFormInput>
                        <br></br>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton onClick={handleUpdateButton}>Atualizar</CButton>
                    <CButton color='danger' onClick={handleCloseModal}>Cancelar</CButton>
                </CModalFooter>
            </CModal>

            <CModal visible={showDeleteModal} onClose={handleCloseModal}>
                <CModalHeader closeButton>Excluir Inventário Inventário</CModalHeader>
                <CModalBody >
                        Deseja mesmo excluir este inventário?
                </CModalBody>
                <CModalFooter>
                        <CButton className='m-2 btn btn-primary' style={{backgroundColor: "red"}} color='danger' onClick={handleDeleteButton}>Deletar</CButton>
                        <CButton className='m-2 btn btn-primary' color='warning' onClick={handleCloseModal}>Cancelar</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}