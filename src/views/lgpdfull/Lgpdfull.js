import { Button } from "@coreui/coreui"
import { CButton, CButtonGroup } from "@coreui/react"

const Lgpdfull = () => {
    return (
        <div  class="table-responsive-md d-flex justify-content-evenly " >
            <CButtonGroup vertical role="group" aria-label="Vertical button group">
                <h4 class='p-4 pb-1'>Fase A</h4>
                <CButton color="primary  mb-1 rounded-pill">Button FA0</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#">Button FA1</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#">Button FA2</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#">Button FA3</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#">Button FA4</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#">Button FA5</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#">Button FA6</CButton>
            </CButtonGroup>
            <CButtonGroup vertical role="group" aria-label="Vertical button group">
                <h4 class='p-4 pb-1'>Fase B</h4>
                <CButton color="primary mb-1 rounded-pill" href="#" disabled >Button</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#" disabled>Button</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#" disabled>Button</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#" disabled>Button</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#" disabled>Button</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#" disabled>Button</CButton>
                <CButton color="primary mb-1 rounded-pill" href="#" disabled>Button</CButton>
            </CButtonGroup>
            <CButtonGroup vertical role="group" aria-label="Vertical button group">
                <h4 class='p-4 pb-1'>Fase C</h4>
                <CButton color="primary mb-1 rounded-pill"  href="#" disabled>Button</CButton>
                <CButton color="primary mb-1 rounded-pill"  href="#" disabled>Button</CButton>
                <CButton color="primary mb-1 rounded-pill"  href="#" disabled>Button</CButton>
                <CButton color="primary mb-1 rounded-pill"  href="#" disabled>Button</CButton>
                <CButton color="primary mb-1 rounded-pill"  href="#" disabled>Button</CButton>
                <CButton color="primary mb-1 rounded-pill"  href="#" disabled>Button</CButton>
                <CButton color="primary mb-1 rounded-pill"  href="#" disabled>Button</CButton>
            </CButtonGroup>
        </div>
        
    )
}        
export default Lgpdfull