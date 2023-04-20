import React, { useState } from 'react';
import { CRow, CCardBody, CCardHeader, CCard, CCol, CForm, CFormInput, CButton, CFormLabel, CFormCheck } from '@coreui/react';
import { politicaDePrivacidade } from 'src/utils/templates/pdf/politicaPrivacidade';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {PopoverBodyIcon} from '../../../components/popover/PopoverBodyIcon'

export default () => {
  const [loading, setLoading] = useState(false);
  const [infoYesOrNo , setInfoYesOrNo] = useState(false);
  const [inputInfo, setInputInfo] = useState();
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const [dataNot, setDataNot] = useState('');
  const [data, setData] = useState('');
  const [email, setEmail] = useState('');

  const handlePrivacyPolicyPdf = () => {

    const user = JSON.parse(sessionStorage.getItem('user'));
    const dataArrayNot = dataNot.trim().split(",");
    const dataArray = data.trim().split(",");
    let info = []

    if (infoYesOrNo === true){
      info = inputInfo
    }else {
      info = ['Não divulgamos informações pessoais a terceiros, exceto quando exigido por lei.'];
    }
    
    const content = politicaDePrivacidade(
      user.companyName,
      dataArray,
      dataArrayNot,
      email,
      info,
    );
    console.log(dataArray)
    console.log(dataArrayNot)
    console.log(email)
    console.log(info)
      
    pdfMake.createPdf(content).download();
  }
    
  
  const PopoverContent = [
    'Obs:O padrão de formatação segue sendo o mesmo do exemplo (e se caso não usar escrever não ultilizamos esse recurso) - Ex: CPF, RG, etc...',
    'Obs:O padrão de formatação segue sendo o mesmo do exemplo (e se caso não usar escrever não ultilizamos esse recurso) - Ex:Tipo de navegador, Tipo de dispositivo, Páginas visitadas, Endereço IP ',
    'Informação do encarregado dos dados pessoais'
  ]

  return (
        <>
            <CRow>
                <CCol>
                    <h2 className='text-black'>Política de privacidade</h2>

                    <CCard textColor='dark'>
                        <CCardHeader>Preencha os campos abaixo para gerar sua política de privacidade:</CCardHeader>
                        <CCardBody>
                          <CForm className='text-black'>
                            <PopoverBodyIcon title='Informações pessoais:' content={PopoverContent[0]} label='Coletamos as seguintes informações pessoais:' value={data} onChange={(e) => setData(e.target.value)}/>
                            <PopoverBodyIcon title='informações não pessoais:' content={PopoverContent[1]} label='Informações não pessoais:' value={dataNot} onChange={(e) => setDataNot(e.target.value)}/>
                            <PopoverBodyIcon label='E-mail para contato' type='email' title='E-mail' content={PopoverContent[2]}  value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <CFormLabel>Divulgação das informações?</CFormLabel>
                            <CFormCheck  id="Check1" type="radio" name="inforCheck" label="Sim"  onChange={(e)=> {setInfoYesOrNo(e.target.value)}} value={infoYesOrNo} />
                            <CFormCheck  id="Check2" type="radio" name="inforCheck" label="Não"  onChange={(e)=> {setInfoYesOrNo(e.target.value)}} value={infoYesOrNo} defaultChecked/>
                            {infoYesOrNo &&
                              <CFormInput type='text' name="inforCheck" value={inputInfo} onChange={(e)=> {setInputInfo(e.target.value)}}></CFormInput>
                            }
                          </CForm>
                          <br></br>
                          <CButton color='success' onClick={handlePrivacyPolicyPdf} disabled={loading}>{loading ? 'Carregando' : 'Gerar'}</CButton>
                        </CCardBody>
                    </CCard>
                    <br></br>
                </CCol>
            </CRow>
        </>
  );
}
