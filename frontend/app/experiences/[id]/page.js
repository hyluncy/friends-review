import { useRouter } from 'next/router'; 
import Container from 'react-bootstrap'; 

export default function ExperienceIDPage() {
    const router = useRouter(); 
    const { experienceID } = router.query; 
    return (
        <Container>
            <h1>Experience Page</h1>
        </Container>
    )
}