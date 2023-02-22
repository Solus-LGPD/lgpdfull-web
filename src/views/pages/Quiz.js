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
        const result = await api.getAnswers();
        setLoading(false);
        if(result.error === undefined){
            for(let i = 0; i < result.length; i++){
                let createdAt = new Date(result[i].createdAt);
                createdAt = createdAt.toLocaleDateString();

                result[i] = {
                    id: result[i].id,
                    answers: result[i].answers,
                    result: result[i].result,
                    createdAt
                }
            }
            setList(result)
        }else{
            alert(result.message);
        }
    }

    const fields = [
        {label: 'Resultado', key: 'result'},
        {label: 'Respostas', key: 'answers' },
        {label: 'Data de Criação', key: 'createdAt'}
    ];

    return (
        <>
            <CRow>
                <CCol>
                    <h2 className='text-black'>Inventário de Dados Pessoais</h2>

                    <CCard>
                        <CCardHeader>
                            <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" onClick={() => navigate('/quiz/criar')}>
                                <CIcon icon={cilCheck}></CIcon>
                                Registrar novo quiz
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
        </>
    );
}