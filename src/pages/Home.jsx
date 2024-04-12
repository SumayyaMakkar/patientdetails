import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Header from '../components/Header';
import Section from '../components/Section';
import Patientdetails from '../components/Patientdetails';

function Home() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-3'>
                <button className='btn btn-primary' onClick={() => setOpen(!open)}>IP Consolidated
                    <i class="fa-solid fa-angle-down ms-3"></i>
                </button>
            </div>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <Header />
                    <Section />
                    <div className='d-flex mt-3 justify-content-evenly'>
                        <div className='w-50'>
                            <Patientdetails name="Active Mediation (4)" data="Medication"/>
                            <Patientdetails name="Problems & Diagnosis (3)" data="Diagnosis"/>
                            <Patientdetails name="Vital Signs (15)" data="VitalSigns"/>
                            <Patientdetails name="Documents (1)" data="DocumentList"/>
                            <Patientdetails name="Lab Results (1)" data="Labresult"/>
                            <Patientdetails name="Radiology Results" />
                        </div>
                        <div className='w-50 ms-1'>
                            <Patientdetails name="Medication Administration Record"/>
                            <Patientdetails name="Intake & Output"/>
                            <Patientdetails name="Communication Order"/>
                            <Patientdetails name="Home Medication"/>
                            <Patientdetails name="Progress Note (4)" data="ProgressNote"/>
                            <Patientdetails name="Nurses Note (12)" data="NurseNote"/>
                        </div>
                        <div className='w-50 ms-1'>
                            <Patientdetails name="PFSH"/>
                            <Patientdetails name="New Orders"/>
                            <Patientdetails name="IP Visit History"/>
                            <Patientdetails name="Medical Summary"/>
                            <Patientdetails name="Growth Chart"/>
                            <Patientdetails name="Pending Orders"/>
                        </div>
                    </div>
                </div>
            </Collapse>
        </>
    )
}

export default Home