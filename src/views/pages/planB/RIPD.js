import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CForm, CFormInput, CFormLabel, CFormTextarea, CRow } from "@coreui/react";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useState } from "react";
import {ripdPDF} from '../../../utils/templates/pdf/ripdPDF'

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function RIPD() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dataCategories: '',
        dataProcessingPurpose: '',
        dataProcessingActivities: '',
        dataStorage: '',
        dataProtection: '',
        dataTransfer: '',
        dataSharing: '',
        dataRisks: '',
        dataProtectionMeasures: ''
    });
    
    const handleChange = (event) => {
        const fielName = event.target.name;
        const fielValue = event.target.value;
        setFormData((current)=>{
            return { 
                ...current, 
                [fielName]: fielValue 
            }
        });
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = ripdPDF(formData);
    pdfMake.createPdf(content).download('ripd.pdf');
  };


    return (
        <>
            <CRow>
                <CCol xs={12}>
                    <CCard textColor='dark'>
                        <CCardHeader>Formulário RIPD</CCardHeader>
                        <CCardBody>
                                <CForm >
                                    <CFormLabel>Nome:</CFormLabel>
                                    <CFormInput type="text" name="name" value={formData.name} onChange={handleChange} required />
                                    <CFormLabel>E-mail:</CFormLabel>
                                    <CFormInput type="email" name="email" value={formData.email} onChange={handleChange} required />
                                    <CFormLabel>Telefone:</CFormLabel>
                                    <CFormInput type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                                    <CFormLabel>Categorias de Dados:</CFormLabel>
                                    <CFormTextarea name="dataCategories" value={formData.dataCategories} onChange={handleChange} required />
                                    <CFormLabel>Finalidade do Tratamento:</CFormLabel>
                                    <CFormTextarea name="dataProcessingPurpose" value={formData.dataProcessingPurpose} onChange={handleChange} required />
                                    <CFormLabel>Atividades de Tratamento:</CFormLabel>
                                    <CFormTextarea name="dataProcessingActivities" value={formData.dataProcessingActivities} onChange={handleChange} required />                                
                                    <CFormLabel>Armazenamento dos Dados:</CFormLabel>
                                    <CFormTextarea name="dataStorage" value={formData.dataStorage} onChange={handleChange} required />
                                    <CFormLabel>Proteção dos Dados:</CFormLabel>
                                    <CFormTextarea name="dataProtection" value={formData.dataProtection} onChange={handleChange} required />
                                    <CFormLabel>Transferência de Dados:</CFormLabel>
                                    <CFormTextarea name="dataTransfer" value={formData.dataTransfer} onChange={handleChange} required />
                                    <CFormLabel>Compartilhamento de Dados:</CFormLabel>
                                    <CFormTextarea name="dataSharing" value={formData.dataSharing} onChange={handleChange} required />
                                    <CFormLabel>Riscos aos Dados:</CFormLabel>
                                    <CFormTextarea name="dataRisks" value={formData.dataRisks} onChange={handleChange} required />
                                    <CFormLabel>Medidas de Proteção:</CFormLabel>
                                    <CFormTextarea name="dataProtectionMeasures" value={formData.dataProtectionMeasures} onChange={handleChange} required />
                                    <CButton type="submit" onClick={handleSubmit} color="primary">Gerar PDF</CButton>
                                </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
}
