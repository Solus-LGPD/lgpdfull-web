import { CButton, CButtonGroup, CForm, CToast, CToastBody, CToastClose, CToastHeader} from "@coreui/react"
const Lgpdfull = () => {
    return (
        
            <div className='position-relative  d-flex justify-content-evenly'>
                <h5 style={{color: "#2085c7", 'fontSize': '180px'}} className='justify-content-start flex-column d-flex'>A</h5>
                <CButtonGroup vertical role="group" aria-label="Vertical button group" className="position-relative gap-1 mt-0 m-3 w-25 text-center d-flex flex-column">
                    <h5 style={{color: "#2085c7", 'fontSize': '27px'}} className='p-4pb-1 h5 text-decoration-none ' >FASE DE MAPEAMENTO</h5>
                    <CButton style={{backgroundColor: "#2085c7"}} className="  border border-0 rounded-pill text-white" href="http://www.quiz.solus-it.com.br/" target="__blank">Quiz LGPD</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/dpo">DPO</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/setor">Setor</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/inventario">Inventário</CButton>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </CButtonGroup>
                
                <h5 style={{color: "#2085c7", 'fontSize': '180px'}} className=' justify-content-start flex-column d-flex'>B</h5>
                <CButtonGroup vertical role="group" aria-label="Vertical button group" className="position-relative gap-1 mt-0 m-3 w-25 text-center d-flex flex-column">
                    <h5 style={{color: "#2085c7", 'fontSize': '27px'}} className='position-relative p-4pb-1 h5 text-decoration-none ' >FASE DE IMPLEMENTAÇÃO</h5>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="#" disabled >Política de Priv.</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="#" disabled>Ajustes de Contratos</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="#" disabled>Termos de Uso</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="#" disabled>Checklist de TI</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href= "#" disabled>Cookies</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="#" disabled>RIPD</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="#" disabled>LIA</CButton>
                </CButtonGroup>
                <h5 style={{color: "#2085c7", 'fontSize': '180px'}} className='justify-content-start flex-column h1 d-flex'>C</h5>
                <CButtonGroup vertical role="group" aria-label="Vertical button group" className=" gap-1 mt-0 m-3 w-25 text-center d-flex flex-column">
                    <h5 style={{color: "#2085c7", 'fontSize': '27px'}} className='p-4pb-1 h5 text-decoration-none ' >FASE DE IMPLEMENTAÇÃO AVANÇADA E MANUTENÇÃO</h5>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Comunicação c/ o Titular</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Política de Segurança</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Privacy by Design</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Treinamentos</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Incidentes</CButton>
                    <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Quiz LGPD Final</CButton>
                </CButtonGroup>
            </div>
        
    )
}

export default Lgpdfull 