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

    const initalList = ["0","0"]

    const [ answers, setAnswers ] = useState(initalList);


    useEffect(() => {
        console.log(answers)
    }, []);

    return (
        <>
            <CRow>
                <h2 className='text-black'>Quiz LGPD</h2>
            </CRow>
            <br></br>
            <br></br>
            <CForm className='text-black'>
                <CFormLabel>Q1?</CFormLabel>
                <br></br>
                    <CFormCheck type="radio" name="q1" id="exampleRadios1" value="0" label="Ainda não" defaultChecked onChange={(e) => setAnswers(e.target.value)}/>
                    <CFormCheck type="radio" name="q1" id="exampleRadios2" value="1" label="Tem planos para iniciar" onChange={(e) => setAnswers(e.target.value)}/>
                    <CFormCheck type="radio" name="q1" id="exampleRadios3" value="2" label="Atende parcialmente" onChange={(e) => setAnswers(e.target.value)}/>
                    <CFormCheck type="radio" name="q1" id="exampleRadios4" value="3" label="Atende integralmente" onChange={(e) => setAnswers(e.target.value)}/>
                <br></br>
                <CFormLabel>Q2?</CFormLabel>
                <br></br>
                    <CFormCheck type="radio" name="q2" id="exampleRadios1" value="0" label="Ainda não" defaultChecked/>
                    <CFormCheck type="radio" name="q2" id="exampleRadios2" value="1" label="Tem planos para iniciar"/>
                    <CFormCheck type="radio" name="q2" id="exampleRadios3" value="2" label="Atende parcialmente"/>
                    <CFormCheck type="radio" name="q2" id="exampleRadios4" value="3" label="Atende integralmente"/>
                <br></br>
                <br></br>
            </CForm>
        </>
    );
}