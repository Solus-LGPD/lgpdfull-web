import React from 'react';
import {CRow, CCardBody, CCardHeader, CCard, CDropdownMenu, CDropdownItem, CCol, CDropdown, CDropdownToggle, CCardTitle, CCardText,} from '@coreui/react';

export default () => {

    return (
        <>
            <CRow>
                <CCol>
                    <h2 className='text-black'>Ajuda</h2>

                    <CCard textColor='dark'>
                        <CCardHeader>
                            <CDropdown>
                                <CDropdownToggle color="secondary">Escolha a seção de ajuda</CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem active>A - FASE DE MAPEAMENTO</CDropdownItem>
                                    <CDropdownItem disabled>B - FASE DE IMPLEMENTAÇÃO</CDropdownItem>
                                    <CDropdownItem disabled>C - FASE DE IMPLEMENTAÇÃO AVANÇADA E MANUTENÇÃO</CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        </CCardHeader>
                        <CCardBody>
                            <CCardTitle>Quiz LGPD</CCardTitle>
                            <CCardText>
                                O Quiz LGPD serve para medir o nível atual de adequação da empresa com a Lei Geral de Proteção de Dados Pessoais (LPGP), Lei n° 13.709/2018.
                                <br></br>
                                OBS: É Recomendado fazer o Quiz LPGD no início e no final do processo de adequação.
                            </CCardText>

                            <CCardTitle>Encarregado dos Dados Pessoais (DPO)</CCardTitle>
                            <CCardText>
                                O Encarregado (DPO) é a pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ANPD (Autoridade Nacional de Proteção de Dados)
                                O DPO pode ser pessoa física, jurídica, ou um comitê de pessoas.
                            </CCardText>

                            <CCardTitle>Setores da sua empresa</CCardTitle>
                            <CCardText>
                                Neste módulo deve ser cadastrado todos os setores existentes na sua empresa.
                            </CCardText>

                            <CCardTitle>Inventário de Dados Pessoais</CCardTitle>
                            <CCardText>
                                Neste módulo deve ser cadastrado a catalogação dos dados pessoais, fluxo, hipótese de tratamento e etc.
                            </CCardText>
                        </CCardBody>
                    </CCard>
                    <br></br>
                </CCol>
            </CRow>
        </>
    );
}