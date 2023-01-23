import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser,cilEnvelopeClosed } from '@coreui/icons'
import useAPI from '../services/api';

const Login = () => {
  const api = useAPI();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)

  const handleLoginButton = async () => {
    if(email && password){
      setLoading(true);
      const result = await api.login(email, password);
      setLoading(false);
      if(result.error === undefined){
        sessionStorage.setItem('token', result.acessToken);
        sessionStorage.setItem('user', JSON.stringify(result));
        navigate('/')
      }else{
        setError(result.message);
      }
    }
    else{
      alert("Digite as credenciais de acesso!")
    }
  }

  const [visible, setVisible] = useState(false)
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    {error != '' &&
                      <CAlert color="danger">{error}</CAlert>
                    }
                    <p className="text-medium-emphasis">Digite suas credenciais de acesso</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="E-mail" 
                        value={email} 
                        disabled={loading}
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Senha"
                        disabled={loading}
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={10} className="text-right pb-2">
                      <CButton color="link" onClick={() => setVisible(!visible)}>Esqueceu sua Senha?</CButton>
                      <CModal visible={visible} onClose={() => setVisible(false)}>
                        <CModalHeader onClose={() => setVisible(false)}>
                          <CModalTitle>Redefinir Senha</CModalTitle>
                        </CModalHeader>
                        <CModalBody>Enviaremos um e-mail com mais informações sobre como redefinir sua senha.</CModalBody>
                        <CModalBody>
                          <CInputGroup className="mb-3">
                            <CInputGroupText>
                              <CIcon icon={cilEnvelopeClosed} />
                            </CInputGroupText>
                            <CFormInput 
                              placeholder="E-mail" 
                              value={email} 
                              disabled={loading}
                              onChange={(e) => setEmail(e.target.value)} 
                            />
                          </CInputGroup>
                        </CModalBody> 
                        <CModalFooter>
                          <CButton color="info" onClick={() => setVisible(false)}>
                            Cancelar
                          </CButton>
                          <CButton color="info">Redefinir</CButton>
                        </CModalFooter>
                      </CModal>
                      </CCol>
                      <CCol xs={6}>
                        <CButton 
                          color="info" 
                          className="px-4"
                          onClick={handleLoginButton}
                          disabled={loading}
                        >
                          {loading ? 'Carregando' : 'Acessar'}
                        </CButton>
                      </CCol>
                      
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-info py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                  <img className='mb-2' width='280px' src='https://media.discordapp.net/attachments/1052661296945971232/1059673126478290975/teste.png?width=1025&height=279'/>

                    <p className='mt-5 mb-3'>
                      O Sistema LGPDFull foi criado para ajudar as empresas na implementação da Lei Geral de Proteção de Dados Pessoais.
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
