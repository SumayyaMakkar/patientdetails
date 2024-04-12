import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../components/patient.css';
import { getDataAPI } from '../services/allAPI';

function Patientdetails(props) {
    const [details, setDetails] = useState([]);

    const fetchData = async () => {
        try {
            const result = await getDataAPI(props.data);
            setDetails(result.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [props.data]);

    const renderAccordionBody = () => {
        switch (props.data) {
            case 'Medication':
                return details.map((item, index) => (
                    <Accordion.Body key={index}>
                        {item.medicineName}
                    </Accordion.Body>
                ));
            case 'Diagnosis':
                return details.map((item, index) => (
                    <Accordion.Body key={index}>
                        {item.code}{item.diagnosis}
                    </Accordion.Body>
                ));
            case 'VitalSigns':
                return details.map((item, index) => (
                    <Accordion.Body key={index}>
                        {item.datetime}{item.temperature}{item.pulse}{item.blood_pressure}{item.respiratory_rate}{item.oxygen_saturation}
                    </Accordion.Body>
                ));
            case 'DocumentList':
                return details.map((item, index) => (
                    <Accordion.Body key={index}>
                        {item.Name}
                    </Accordion.Body>
                ));
            case 'Labresult':
                return details.map((item, index) => (
                    <Accordion.Body key={index}>
                        {item.test}{item.unit}{item.result}{item.datetime}
                    </Accordion.Body>
                ));
                case 'ProgressNote':
                    return details.map((item, index) => (
                        <Accordion.Body key={index}>
                            {item.datetime}{item.note}
                        </Accordion.Body>
                    ));
                    case 'NurseNote':
                        return details.map((item, index) => (
                            <Accordion.Body key={index}>
                               {item.datetime}{item.note}
                            </Accordion.Body>
                        ));
            default:
                // Render default content if props.data doesn't match any case
                return (
                    <Accordion.Body>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rem dolore, iure repellendus
                            ex eius fuga nostrum aspernatur officiis reiciendis esse exercitationem natus deserunt ut
                            voluptas nobis laborum quisquam cumque?
                        </p>
                    </Accordion.Body>
                );
        }
    };

    return (
        <>
            <Accordion defaultActiveKey="null" className="ms-2 mt-2">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{props.name}</Accordion.Header>
                    {renderAccordionBody()}
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default Patientdetails