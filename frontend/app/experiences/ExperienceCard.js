'use client'
import { Card, Button } from 'react-bootstrap'; 
import { useRouter } from 'next/navigation'; 

export default function ExperienceCard ({ exp }) {
    const router = useRouter(); 
    return (
        <Card>
            <Card.Img
            variant="top"
            src={exp.image || 'https://dummyimage.com/400x300/9c90e8/f7f7f7.png&text=No+Image+Available'}
            alt={exp.name}
            />
            <Card.Body>
                <Card.Title>{exp.name}</Card.Title>
                <Button variant="primary" onClick={() => router.push(`/experiences/${exp._id}`)}>
                    View Experience
                </Button>
            </Card.Body>
        </Card>
    )
}