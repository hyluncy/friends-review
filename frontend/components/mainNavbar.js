'use client'; 
import React, { useState } from 'react'; 
import { Nav, Navbar, Container, Form, Row, Col, Button } from 'react-bootstrap'; 
import { useRouter } from 'next/navigation'; 
import { useNavigate } from 'react-router-dom'; 
import Link from 'next/link'; 
import { Navigation } from 'react-router-dom'

export default function MainNavbar() {
    const router = useRouter(); 
    const [ isExpanded, setExpanded ] = useState(false); 
    const [ query, setQuery ] = useState(''); 
    const navigate = useNavigate(); 

    const onNavClick = () => {
        setExpanded(false); 
    
    }

<<<<<<< Updated upstream
    const handleSearch = () => {

    } 
=======
    const handleSearch = (e) => {
        e.preventDefault(); 

        if (query.trim()) {
            navigate(`/experiences?search=${encodeURIComponent(query)}`); 
        } else {
            navigate('/experiences'); 
        }
    }
>>>>>>> Stashed changes

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Link href="/" passHref legacyBehavior>
                    <Navbar.Brand onClick={onNavClick}>Friends Review</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#experieces">Experiences</Nav.Link>
                    <Nav.Link href="#my-friends">My Friends</Nav.Link>
                </Nav>
                <Nav>
                    <Form className='d-flex'>
                        <Row>
                        <Col xs="auto">
                            <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)} // User input value used 
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                        </Row>
                    </Form>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
