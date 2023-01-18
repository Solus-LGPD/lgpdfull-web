import React from 'react'
import {
  CButton,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Password = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5} >
            <CCardGroup >
                <CCardBody>
                  <CForm>
                    <h1>Redefinir Senha</h1>
                    <p className="text-medium-emphasis">Lhe enviaremos um e-mail com mais informações sobre como redefinir sua senha.</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput type='E-mail' placeholder="E-mail" autoComplete="E-mail"  />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4">
                          Enviar E-mail
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Password