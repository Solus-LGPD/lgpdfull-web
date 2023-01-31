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

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getList();
    }, []);

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

                result[i] = {
                    "id": result[i].id,
                    naturalPerson,
                    socialName: result[i].social_name,
                    "CBadge": statusComponent,
                    "CButtonEdit": <CButton><CIcon icon={cilPen}></CIcon></CButton>,
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
                    <h2>Encarregado dos Dados Pessoais</h2>

                    <CCard>
                        <CCardHeader>
                            <CButton onClick={() => navigate('/dpo/criar')}>
                                <CIcon icon={cilCheck}></CIcon>
                                Cadastrar Novo Encarregado
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
        </>
    );
}