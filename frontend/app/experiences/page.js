'use client'
import React, { useState, useEffect } from 'react'; 
import axiosInstance from '../api/axoisConfig';
import { Container, Button, Form, Card, Row, Col } from 'react-bootstrap'; 
import { useSearchParams, useRouter } from 'next/navigation'


export default function ExperienceList() {
    const [ experiences, setExperiences ] = useState([]);  
    const searchParams = useSearchParams(); 
    const searchQuery = searchParams.get('search') || '';  // TODO: may use different url than search
    const router = useRouter(); 
    
    const fetchExperiences = async (searched = '') => {
        try {
            console.log('fetching from experiences page API: ', searched); 
            const response = await axiosInstance.get('/experiences', {
                params: { search: searched }
            }); 
            console.log("API Response:", response.data);
            
            if (Array.isArray(response.data)) {
                setExperiences(response.data); 
            }
            else {
                console.error('API Response: ', response.data)
                setExperiences([]); 
            }
        } catch (err) {
            console.error('Error fetching experiences: ', err); 
            
        }
    }; 

    useEffect(() => {
        const allExperiences = [
            { _id: 1, name: "Experience 1" },
            { _id: 2, name: "Experience 2" },
            { _id: 3, name: "Experience 3" },
        ];
        fetchExperiences(searchQuery); 
    }, [searchQuery]); 

    return (
        <Container>
            <h1>Experiences</h1>
            <Row>
                { experiences.map((exp) => (
                    <Col key={exp._id} md={4} sm={6} xs={12} className='mb-4'>
                        <Card>
                            <Card.Img variant='top' src={exp.image || 'https://dummyimage.com/400x300/9c90e8/f7f7f7.png&text=No+Image+Available'} alt={exp.name} />
                            <Card.Body>
                                <Card.Title>{exp.name}</Card.Title>
                                <Button variant="primary" onClick={() => router.push(`/experiences/${exp._id}`)}>View Experience</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}