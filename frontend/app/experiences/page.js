import React from 'react'; 
import axiosInstance from '../api/axoisConfig';
import { useLocation, useNavigation } from 'react-router-dom'; 
import { Container, Button, Form, Card, Row, Col } from 'react-bootstrap'; 

export default function ExperienceList() {
    const [ experiences, setExperiences ] = useState([]); 
    const location = useLocation();     // Obtain current URL 
    const navigate = useNavigate();     // Navigating with search query
    const queryParams = new URLSearchParams(location.search); // TODO: may change 'search' 
    const searchQuery = queryParams.get('search') || '';  // TODO: may use different url than search

    const fetchExperiences = async (searched = '') => {
        try {
            const response = await axios.get('/experiences', {
                params: { search: searchTerm }
            }); 
            setExperiences(response.data);  
        } catch (err) {
            console.error('Error fetching experiences: ', err); 
            
        }
    }; 

    useEffect(() => {
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
                                <Button variant="primary" onClick={() => navigate(`/experiences/${exp._id}`)}>View Experience</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}