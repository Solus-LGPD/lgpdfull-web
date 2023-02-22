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
import { government, topics } from 'src/helpers/quizQuestions';

export default () => {

    const api = useAPI();
    const navigate = useNavigate();

    let answers = ["0","0","0"]
    const questions = ["Q1", "Q2", "Q3"]

    const handleQuiz = async () => {
        console.log(answers)
    }

    return (
        <>
            <CRow>
                <h2 className='text-black'>Quiz LGPD</h2>
            </CRow>
            <br></br>
            <br></br>
            <CForm className='text-black'>
                <CCard hidden={false}>
                    <CCardBody>
                        <CCardHeader>{topics[0]}</CCardHeader>
                        <br></br>
                        {government.map((item, index) => 
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`q${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index] = e.target.value} />
                                <CFormCheck type="radio" name={`q${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index] = e.target.value}/>
                                <CFormCheck type="radio" name={`q${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index] =e.target.value}/>
                                <CFormCheck type="radio" name={`q${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index] = e.target.value}/>
                                <br></br>
                            </> 
                        )}
                        <br></br>
                        <CButton onClick={handleQuiz}>Responder</CButton>
                    </CCardBody>
                </CCard>
                <br></br>
                <br></br>
            </CForm>
        </>
    );
}