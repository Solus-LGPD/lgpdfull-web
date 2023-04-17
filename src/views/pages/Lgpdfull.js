import { CButton, CButtonGroup} from "@coreui/react"
import { useState } from "react"
const Lgpdfull = () => {
    const  [Check,setCheck] = useState(false);

    const handleCheck = (e) => {
        setCheck(e.target.value)
    }
    
    return (
        <div className='position-relative  d-flex justify-content-evenly'>

            <h5 style={{color: "#2085c7", 'fontSize': '180px'}} className='justify-content-start flex-column d-flex'>A</h5>
            <CButtonGroup vertical role="group" aria-label="Vertical button group" className="position-relative gap-1 mt-0 m-3 w-25 text-center d-flex flex-column">
                <h5 style={{color: "#2085c7", 'fontSize': '27px'}} className='p-4pb-1 h5 text-decoration-none ' >FASE DE MAPEAMENTO</h5>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/quiz">Quiz LGPD <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/dpo">DPO <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/setor">Setor <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/inventario">Inventário <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </CButtonGroup>

            <h5 style={{color: "#2085c7", 'fontSize': '180px'}} className=' justify-content-start flex-column d-flex'>B</h5>
            <CButtonGroup vertical role="group" aria-label="Vertical button group" className="position-relative gap-1 mt-0 m-3 w-25 text-center d-flex flex-column">
                <h5 style={{color: "#2085c7", 'fontSize': '27px'}} className='position-relative p-4pb-1 h5 text-decoration-none ' >FASE DE IMPLEMENTAÇÃO</h5>
                <CButton style={{backgroundColor: "#2085c7"}}  className=" border border-0 rounded-pill text-white" href="/lgpdfull/politica-de-privacidade" >Política de Priv. <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="#" disabled>Ajustes de Contratos <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/termos-de-uso" >Termos de Uso <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="/lgpdfull/chacklist/painel-do-checklist" >Checklist de TI <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href= "/lgpdfull/politica-de-cookies" >Cookies <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="#" disabled>RIPD <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white" href="#" disabled>LIA <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
            </CButtonGroup>

            <h5 style={{color: "#2085c7", 'fontSize': '180px'}} className='justify-content-start flex-column h1 d-flex'>C</h5>
            <CButtonGroup vertical role="group" aria-label="Vertical button group" className=" gap-1 mt-0 m-3 w-25 text-center d-flex flex-column">
                <h5 style={{color: "#2085c7", 'fontSize': '27px'}} className='p-4pb-1 h5 text-decoration-none ' >FASE DE IMPLEMENTAÇÃO AVANÇADA E MANUTENÇÃO</h5>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Comunicação c/ o Titular <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Política de Segurança <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Privacy by Design <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Treinamentos <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Incidentes <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
                <CButton style={{backgroundColor: "#2085c7"}} className=" border border-0 rounded-pill text-white"  href="#" disabled>Quiz LGPD Final <input title= {Check ? 'Item realizado' : 'Item a realizar'} className="form-check-input " type="checkbox" value={Check} style={{backgroundColor:'#8f9779',borderRadius: '50px',boxShadow:'none'}} onClick={handleCheck} ></input></CButton>
            </CButtonGroup>
        </div>

    )
}

export default Lgpdfull
