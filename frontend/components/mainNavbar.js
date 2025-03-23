'use client'; 
import React, { useState } from 'react'; 
import { Nav, Navbar, Container, Form, Row, Col } from 'react-bootstrap'; 
import { useRouter } from 'next/navigation'; 
import Link from 'next/link'; 
import ButtonComp from './button';


export default function MainNavbar() {
    const router = useRouter(); 
    const [ isExpanded, setExpanded ] = useState(false); 
    const [ query, setQuery ] = useState(''); 

    const onNavClick = () => setExpanded(false);

    const handleSearch = (e) => {
        e.preventDefault(); 
        const searchQuery = query.trim()

        searchQuery ? 
            router.push(`/experiences?search=${encodeURIComponent(searchQuery)}`) : router.push('/experiences');
        
    }

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
                    <Form className='d-flex' onSubmit={handleSearch}>
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
                            <ButtonComp text='Search' />
                        </Col>
                        </Row>
                    </Form>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
