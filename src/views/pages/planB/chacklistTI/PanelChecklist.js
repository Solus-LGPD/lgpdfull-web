import { CButton, CButtonGroup } from '@coreui/react';
// import styles from '../../../../css/teste.css'

const PenelChecklist = () => {
    return (
        <div>
                <h2 className="d-flex justify-content-center mb-5">Painel Checklist</h2>
            <div className="d-flex justify-content-center">
                <CButtonGroup className="position-relative gap-2 mt-0 m-3 w-25 text-center d-flex flex-column">
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="#">Introdução</CButton>                    <></>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/checklist/controle-de-acesso">Controle de Acesso</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/checklist/dados-armazenados">Dados Armazenados</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/checklist/seguranca-nas-comunicacoes">Segurança nas Comunicações</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/checklist/gerenciamento-de-vulnerabilidade">Gerenciamento de Vulnerabilidade</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/checklist/dispositivos-moveis">Dispositivos Móveis</CButton>
                </CButtonGroup>
                <CButtonGroup className="position-relative gap-2 mt-0 m-3 w-25 text-center d-flex flex-column">
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/checklist/servicos-em-nuvem">Serviços em Nuvem</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/checklist/cookies">Cookies</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/checklist/politica-de-seguranca-da-informacao">Política de Segurança da Informação</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/checklist/conscientizacao-e-treinamento">Conscientização e Treinamento</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/checklist/contratos">Contratos</CButton>
                </CButtonGroup>
            </div>
        </div>
    )
}

export default PenelChecklist;