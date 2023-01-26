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
  CForm,
  CFormInput,
  CFormLabel,
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
    return (
        <>
            <CRow>
                <h2>Criação do inventário de dados pessoais</h2>
            </CRow>
           
                <CForm>
                        <CFormLabel>Identificação</CFormLabel>
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
                            <CFormCheck inline type="radio" name="underAgeData" id="inlineCheckbox1" value="true" label="Sim"/>
                            <CFormCheck inline type="radio" name="underAgeData" id="inlineCheckbox2" value="false" label="Não"/>
                        <br></br>
                        <CFormLabel>Trata dados sensíveis?</CFormLabel>
                        <br></br>
                            <CFormCheck inline type="radio" name="sensitiveData" id="inlineCheckbox1" value="true" label="Sim"/>
                            <CFormCheck inline type="radio" name="sensitiveData" id="inlineCheckbox2" value="false" label="Não"/>
                        <br></br>
                        <CFormLabel>Nome do Controlador</CFormLabel>
                        <CFormTextarea type='text'></CFormTextarea>
                </CForm>
                <br></br>
                <CButton color='success'>Criar</CButton>
                <br></br>
            <br></br>
            <br></br>
        </>
    );
}
