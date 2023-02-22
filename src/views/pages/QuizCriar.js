import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {CRow,CForm,CFormLabel,CFormCheck, CPagination, CPaginationItem, CCard} from '@coreui/react';
import useAPI from '../../services/api';
import { government, topics } from 'src/helpers/quizQuestions';

export default () => {

    const api = useAPI();
    const navigate = useNavigate();


    
    const [ answers, setAnswers ] = useState(initalList);
    const [governmentCard, setGovernmentCard] = useState(true);
    const [conformityCard, setConformityCard] = useState(true);
    const [transparencyCard, setTransparencyCard] = useState(true);
    const [traceabilityCard, setTraceabilityCard] = useState(true);
    const [adequacyCard, setAdequacyCard] = useState(true);
    const [securityCard, setSecurityCard] = useState(true);
    const [violationsCard, setViolationsCard] = useState(true);
   
    let answers = ["0","0","0"]
    const questions = ["Q1", "Q2", "Q3"]

    const handleQuiz = async () => {
        console.log(answers)
    }

    const handlePage1 = () =>{
        setGovernmentCard(false)}
    const handlePage2 = () =>{
        setConformityCard(false)}
    const handlePage3 = () =>{
        setTransparencyCard(false)}
    const handlePage4 = () =>{
        setTraceabilityCard(false)}
    const handlePage5 = () =>{
        setAdequacyCard(false)}
    const handlePage6 = () =>{
        setSecurityCard(false)}
    const handlePage7 = () =>{
        setViolationsCard(false)}

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
                <CPagination align="center" aria-label="Page navigation example">
                <CPaginationItem disabled>Previous</CPaginationItem>
                <CPaginationItem onClick={handlePage1}>1</CPaginationItem>
                <CPaginationItem onClick={handlePage2}>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
                </CPagination>
                <br></br>
                <br></br>
            </CForm>
        </>
    );
}