'use client'
import { useRouter, useParams } from 'next/navigation'; 
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'; 
import { fetchExperienceById }  from '../../api/axiosExperienceConfig'; 

export default function ExperienceIDPage() {
    const router = useRouter(); 
    const params = useParams(); 
    const id = params.id; 
    const [ exp, setExp ] = useState(null);

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const data = await fetchExperienceById(id)
                console.log(data)
                setExp(data)
            } catch (err) {
                console.log('Error fetchData [id]/page.js')
                throw err
            }
        }
        fetchData(id); 
      }, [id]);

    return (
        <Container>
            {exp && 
                <>
                    <h1>{exp.name}</h1>
                    <br/>
                    <img src={exp.image} alt='expImg'/>
                    <br/><br/>
                    <p><strong>Category:</strong> {exp.category}</p>
                </>
            }
        </Container>
    )
}