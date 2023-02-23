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
} from '@coreui/react';
import {
    cilCheck,
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
        {label: 'Feito em', key: 'createdAt'}
    ];

    return (
        <>
            <CRow>
                <CCol>
                    <h2 className='text-black'>Quiz LGPD</h2>

                    <CCard>
                        <CCardHeader>
                            <CButton style={{backgroundColor: "#2085c7"}} 
                            className=" border border-0 rounded-pill text-white" 
                            onClick={() => navigate('/quiz/novo')}>
                                <CIcon icon={cilCheck}></CIcon>
                                Responder Quiz LGPD
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