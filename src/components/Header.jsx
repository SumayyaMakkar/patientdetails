import React, { useEffect, useState } from 'react'
import { getDetailsAPI } from '../services/allAPI';

function Header() {
    const [patient, setPatient] = useState('')
    const getPateintDetails = async () => {
      const result = await getDetailsAPI();
      console.log("result===", result);
      setPatient(result.data)
  
    }
    console.log("====patient", patient);
    useEffect(() => {
      getPateintDetails()
    }, [])

  return (
   <>
   <div className=' mt-3 w-100% bg-primary d-flex justify-content-evenly' style={{ height: "100px" }}>
            <div className='bg-primary p-2'>
              <div>
                <h5 className='mt-3' style={{ color: "white" }}>Patient Name:{patient.patientName}</h5>
                <h6 style={{ color: "white" }}>Allergies:{patient.allergies}</h6>
              </div>
            </div>
            <div className='bg-primary p-2'>
              <div>
                <h6 className='mt-3' style={{ color: "white" }}>DOB:{patient.DOB}</h6>
                <h6 style={{ color: "white" }}>Age:{patient.age}</h6>
              </div>
            </div>
            <div className='bg-primary p-2'>
              <div>
                <h6 className='mt-3' style={{ color: "white" }}>Sex:{patient.sex}</h6>
              </div>
            </div>
            <div className='bg-primary p-2'>
              <div>
                <h6 className='mt-3' style={{ color: "white" }}>Weight:{patient.weight}</h6>
                <h6 style={{ color: "white" }}>Height:{patient.height}</h6>
              </div>
            </div>
            <div className='bg-primary p-2'>
              <div>
                <h6 className='mt-3' style={{ color: "white" }}>Admission Date:{patient.admissionDate}</h6>
                <h6 style={{ color: "white" }}>Discharge Date:{patient.dischargeDate}</h6>
              </div>
            </div>
            <div className='bg-primary p-2'>
              <div>
                <h6 className='mt-3' style={{ color: "white" }}>EMR:{patient.EMR}</h6>
                <h6 style={{ color: "white" }}>IP Visit No:{patient.IPVisitNo}</h6>
              </div>
            </div>
            <div className='bg-primary p-2'>
              <div>
                <h6 className='mt-3' style={{ color: "white" }}>Consulting Dr:{patient.consultingDr}</h6>
                <h6 style={{ color: "white" }}>Admitting Dr:{patient.admittingDr}</h6>
              </div>
            </div>
          </div>
   </>
  )
}

export default Header