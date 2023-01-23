import { Button } from "@coreui/coreui"
import { CButton, CButtonGroup, CForm, CLink } from "@coreui/react"
const Lgpdfull = () => {
    return (
            <CForm class='d-flex justify-content-evenly'>
                <CButtonGroup vertical role="group" class='mb-1 m-0 p-0 d-flex text-center flex-column w-25 ' aria-label="Vertical button group">
                    <CLink color="info" class='p-4pb-1 h1 text-decoration-none ' href="#" >A</CLink>
                    <h5 color="info" class='p-4pb-1 h5 text-decoration-none' >Fase de Mapeamento</h5>
                    <CButton color="info mb-1 rounded-pill" href="http://www.quiz.solus-it.com.br/" target="__blank">Quiz LGPD</CButton>
                    <CButton color="info mb-1 rounded-pill">Processos</CButton>
                    <CButton color="info mb-1 rounded-pill" href="#">Inventário</CButton>
                    <CButton color="info mb-1 rounded-pill" href="#">DPO</CButton>
                </CButtonGroup>
                <CButtonGroup vertical role="group" aria-label="Vertical button group" class="w-25 text-center d-flex flex-column">
                    <CLink class='p-4pb-1 h1 text-decoration-none ' href="#" >B</CLink>
                    <h5 class='p-4pb-1 h5 text-decoration-none ' >FASE DE IMPLEMENTAÇÃO</h5>
                    <CButton color="info mb-1 rounded-pill" href="#" disabled >Política de Priv.</CButton>
                    <CButton color="info mb-1 rounded-pill" href="#" disabled>Ajustes de Contratos</CButton>
                    <CButton color="info mb-1 rounded-pill" href="#" disabled>Termos de Uso</CButton>
                    <CButton color="info mb-1 rounded-pill" href="#" disabled>Checklist de TI</CButton>
                    <CButton color="info mb-1 rounded-pill" href="#" disabled>Cookies</CButton>
                    <CButton color="info mb-1 rounded-pill" href="#" disabled>RIPD</CButton>
                    <CButton color="info mb-1 rounded-pill" href="#" disabled>LIA</CButton>
                </CButtonGroup>
                <CButtonGroup vertical role="group" aria-label="Vertical button group" class="w-25 text-center d-flex flex-column">
                    <CLink class='p-4pb-1 h1 text-decoration-none ' href="#" >C</CLink>
                    <h5 class='p-4pb-1 h5 text-decoration-none ' >FASE DE IMPLEMENTAÇÃO AVANÇADA E MANUTENÇÃO</h5>
                    <CButton color="info mb-1 rounded-pill"  href="#" disabled>Comunicação c/ o Titular</CButton>
                    <CButton color="info mb-1 rounded-pill"  href="#" disabled>Política de Segurança</CButton>
                    <CButton color="info mb-1 rounded-pill"  href="#" disabled>Privacy by Design</CButton>
                    <CButton color="info mb-1 rounded-pill"  href="#" disabled>Treinamentos</CButton>
                    <CButton color="info mb-1 rounded-pill"  href="#" disabled>Incidentes</CButton>
                    <CButton color="info mb-1 rounded-pill"  href="#" disabled>Quiz LGPD Final</CButton>
                </CButtonGroup>
            </CForm>
        
    )
}     
export default Lgpdfull 