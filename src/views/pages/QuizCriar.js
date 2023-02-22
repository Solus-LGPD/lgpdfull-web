import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {CRow, CForm, CFormLabel, CCardBody, CCardTitle, CFormCheck, CPagination, CButton, CPaginationItem, CCard, CCardHeader} from '@coreui/react';
import useAPI from '../../services/api';
import { conformity, government, topics, transparency, traceability, adequacy, security, violations } from 'src/helpers/quizQuestions';

export default () => {

    const api = useAPI();
    const navigate = useNavigate();

    const [governmentCard, setGovernmentCard] = useState(false);
    const [conformityCard, setConformityCard] = useState(true);
    const [transparencyCard, setTransparencyCard] = useState(true);
    const [traceabilityCard, setTraceabilityCard] = useState(true);
    const [adequacyCard, setAdequacyCard] = useState(true);
    const [securityCard, setSecurityCard] = useState(true);
    const [violationsCard, setViolationsCard] = useState(true);
   
    let answers = new Array(24).fill("0");
    const handleQuiz = async () => {
        let resultado = 0;
        for(let i in answers){
            if ( i < 6 ){
                switch(answers[i]){
                    case '0':
                        resultado += 0*0;
                    break;
                    case '1':
                        resultado += 0*0.25;
                    break;
                    case '2':
                        resultado += 0*0.5;
                    break;
                    case '3':
                        resultado += 0*1;
                    break;
                }
            }
            else if (i >= 6 && i >=11 ){
                switch(answers[i]){
                    case '0':
                        resultado += 0*0;
                    break;
                    case '1':
                        resultado += 0*0.25;
                    break;
                    case '2':
                        resultado += 0*0.5;
                    break;
                    case '3':
                        resultado += 0*1;
                    break;
                }
            }
            else if (i == 12 && i == 13 ){
                switch(answers[i]){
                    case '0':
                        resultado += 0*0;
                    break;
                    case '1':
                        resultado += 0*0.25;
                    break;
                    case '2':
                        resultado += 0*0.5;
                    break;
                    case '3':
                        resultado += 0*1;
                    break;
                }
            }
            else if (i >= 14 && i >= 16 ){
                switch(answers[i]){
                    case '0':
                        resultado += 0*0;
                    break;
                    case '1':
                        resultado += 0*0.25;
                    break;
                    case '2':
                        resultado += 0*0.5;
                    break;
                    case '3':
                        resultado += 0*1;
                    break;
                }
            }
            else if (answers == 17){
                switch(answers[i]){
                    case '0':
                        resultado += 0*0;
                    break;
                    case '1':
                        resultado += 0*0.25;
                    break;
                    case '2':
                        resultado += 0*0.5;
                    break;
                    case '3':
                        resultado += 0*1;
                    break;
                }
            }
            else if (i >= 18 && i >= 20){
                switch(answers[i]){
                    case '0':
                        resultado += 0*0;
                    break;
                    case '1':
                        resultado += 0*0.25;
                    break;
                    case '2':
                        resultado += 0*0.5;
                    break;
                    case '3':
                        resultado += 0*1;
                    break;
                }
            }
            else if (i >= 21 && i >= 23){
                switch(answers[i]){
                    case '0':
                        resultado += 0*0;
                    break;
                    case '1':
                        resultado += 0*0.25;
                    break;
                    case '2':
                        resultado += 0*0.5;
                    break;
                    case '3':
                        resultado += 0*1;
                    break;
                }
            }
        }
        console.log(resultado)
        console.log(answers)
        resultado = resultado * 10;
        console.log('resultado'+resultado)
    }

    const handlePage1 = () =>{
        setGovernmentCard(false);
        setConformityCard(true);
        setTransparencyCard(true);
        setTraceabilityCard(true);
        setAdequacyCard(true);
        setSecurityCard(true);
        setViolationsCard(true);
        /* window.scrollTo(0, 0) */
    }

    const handlePage2 = () =>{
        setGovernmentCard(true);
        setConformityCard(false);
        setTransparencyCard(true);
        setTraceabilityCard(true);
        setAdequacyCard(true);
        setSecurityCard(true);
        setViolationsCard(true);
        /* window.scrollTo(0, 0) */
    }

    const handlePage3 = () =>{
        setGovernmentCard(true);
        setConformityCard(true);
        setTransparencyCard(false);
        setTraceabilityCard(true);
        setAdequacyCard(true);
        setSecurityCard(true);
        setViolationsCard(true);
        /* window.scrollTo(0, 0) */
    }

    const handlePage4 = () =>{
        setGovernmentCard(true);
        setConformityCard(true);
        setTransparencyCard(true);
        setTraceabilityCard(false);
        setAdequacyCard(true);
        setSecurityCard(true);
        setViolationsCard(true);
        /* window.scrollTo(0, 0) */
    }

    const handlePage5 = () =>{
        setGovernmentCard(true);
        setConformityCard(true);
        setTransparencyCard(true);
        setTraceabilityCard(true);
        setAdequacyCard(false);
        setSecurityCard(true);
        setViolationsCard(true);
        /* window.scrollTo(0, 0) */
    }

    const handlePage6 = () =>{
        setGovernmentCard(true);
        setConformityCard(true);
        setTransparencyCard(true);
        setTraceabilityCard(true);
        setAdequacyCard(true);
        setSecurityCard(false);
        setViolationsCard(true);
        //window.scrollTo(0, 0)
    }

    const handlePage7 = () =>{
        setGovernmentCard(true);
        setConformityCard(true);
        setTransparencyCard(true);
        setTraceabilityCard(true);
        setAdequacyCard(true);
        setSecurityCard(true);
        setViolationsCard(false);
        //window.scrollTo(0, 0)
    }
    let teste = [governmentCard,conformityCard]
    let teste2 =[government,conformity]
    return (
        <>
            <CRow>
                <h2 className='text-black'>Quiz LGPD</h2>
            </CRow>
            <br></br>
            <br></br>

            <CForm className='text-black'>

                {/* 1 */}
                <CCard /* hidden={teste[0]} */ >
                    <CCardBody>
                        <CCardHeader>
                            <CCardTitle>{topics[0]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {teste2[0].map((item, index) => 
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qGovernment${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index] = e.target.value} />
                                <CFormCheck type="radio" name={`qGovernment${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index] = e.target.value}/>
                                <CFormCheck type="radio" name={`qGovernment${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index] =e.target.value}/>
                                <CFormCheck type="radio" name={`qGovernment${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index] = e.target.value}/>
                                <br></br>
                            </> 
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 2 */}
                <CCard /* hidden={teste[1]} */>
                    <CCardBody>
                        <CCardHeader>
                            <CCardTitle>{topics[1]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {teste2[1].map((item, index) => 
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qConformity${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+6] = e.target.value} />
                                <CFormCheck type="radio" name={`qConformity${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+6] = e.target.value}/>
                                <CFormCheck type="radio" name={`qConformity${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+6] =e.target.value}/>
                                <CFormCheck type="radio" name={`qConformity${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+6] = e.target.value}/>
                                <br></br>
                            </> 
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 3 */}
                <CCard /* hidden={transparencyCard} */>
                    <CCardBody>
                        <CCardHeader>
                            <CCardTitle>{topics[2]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {transparency.map((item, index) => 
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qTransparency${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+12] = e.target.value} />
                                <CFormCheck type="radio" name={`qTransparency${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+12] = e.target.value}/>
                                <CFormCheck type="radio" name={`qTransparency${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+12] =e.target.value}/>
                                <CFormCheck type="radio" name={`qTransparency${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+12] = e.target.value}/>
                                <br></br>
                            </> 
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 4 */}
                <CCard /* hidden={traceabilityCard} */>
                    <CCardBody>
                        <CCardHeader>
                            <CCardTitle>{topics[3]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {traceability.map((item, index) => 
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qTraceability${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+14] = e.target.value} />
                                <CFormCheck type="radio" name={`qTraceability${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+14] = e.target.value}/>
                                <CFormCheck type="radio" name={`qTraceability${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+14] =e.target.value}/>
                                <CFormCheck type="radio" name={`qTraceability${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+14] = e.target.value}/>
                                <br></br>
                            </> 
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 5 */}
                <CCard /* hidden={adequacyCard} */>
                    <CCardBody>
                        <CCardHeader>
                            <CCardTitle>{topics[4]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {adequacy.map((item, index) => 
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qAdequacy${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+17] = e.target.value} />
                                <CFormCheck type="radio" name={`qAdequacy${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+17] = e.target.value}/>
                                <CFormCheck type="radio" name={`qAdequacy${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+17] =e.target.value}/>
                                <CFormCheck type="radio" name={`qAdequacy${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+17] = e.target.value}/>
                                <br></br>
                            </> 
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 6 */}
                <CCard /* hidden={securityCard} */>
                    <CCardBody>
                        <CCardHeader>
                            <CCardTitle>{topics[5]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {security.map((item, index) => 
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qSecurity${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+18] = e.target.value} />
                                <CFormCheck type="radio" name={`qSecurity${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+18] = e.target.value}/>
                                <CFormCheck type="radio" name={`qSecurity${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+18] =e.target.value}/>
                                <CFormCheck type="radio" name={`qSecurity${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+18] = e.target.value}/>
                                <br></br>
                            </> 
                        )}
                        <br></br>
                    </CCardBody>
                </CCard>

                {/* 7 */}
                <CCard /* hidden={violationsCard} */>
                    <CCardBody>
                        <CCardHeader>
                            <CCardTitle>{topics[6]}</CCardTitle>
                        </CCardHeader>
                        <br></br>
                        {violations.map((item, index) => 
                            <>
                                <CFormLabel>{index+1} - {item}</CFormLabel>
                                <CFormCheck type="radio" name={`qViolation${index+1}`} id="exampleRadios1" value={0} label="Ainda não" defaultChecked onChange={(e) => answers[index+21] = e.target.value} />
                                <CFormCheck type="radio" name={`qViolation${index+1}`} id="exampleRadios2" value={1} label="Tem planos para iniciar" onChange={(e) => answers[index+21] = e.target.value}/>
                                <CFormCheck type="radio" name={`qViolation${index+1}`} id="exampleRadios3" value={2} label="Atende parcialmente" onChange={(e) => answers[index+21] =e.target.value}/>
                                <CFormCheck type="radio" name={`qViolation${index+1}`} id="exampleRadios4" value={3} label="Atende integralmente" onChange={(e) => answers[index+21] = e.target.value}/>
                                <br></br>
                            </> 
                        )}
                        <br></br>
                        <CButton onClick={handleQuiz}>Enviar</CButton>
                    </CCardBody>
                </CCard>

                {/* <br></br>
                <br></br> */}

                {/* <CPagination align="center" aria-label="Page navigation example">
                    <CPaginationItem active={!governmentCard} onClick={handlePage1}>1</CPaginationItem>
                    <CPaginationItem active={!conformityCard} onClick={handlePage2}>2</CPaginationItem>
                    <CPaginationItem active={!transparencyCard} onClick={handlePage3}>3</CPaginationItem>
                    <CPaginationItem active={!traceabilityCard} onClick={handlePage4}>4</CPaginationItem>
                    <CPaginationItem active={!adequacyCard} onClick={handlePage5}>5</CPaginationItem>
                    <CPaginationItem active={!securityCard} onClick={handlePage6}>6</CPaginationItem>
                    <CPaginationItem active={!violationsCard} onClick={handlePage7}>7</CPaginationItem>
                </CPagination> */}

                <br></br>
                <br></br>
            </CForm>
        </>
    );
}