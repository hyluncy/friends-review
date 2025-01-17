'use client'; 
import React, { useState } from 'react'; 
import { Nav, Navbar, Container, Form, Row, Col, Button } from 'react-bootstrap'; 
import { useRouter } from 'next/navigation'; 
import Link from 'next/link'; 

export default function MainNavbar() {
    const router = useRouter(); 
    const [ isExpanded, setExpanded ] = useState(false); 
    const onNavClick = () => {
        setExpanded(false); 
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
                    <Form className='d-flex'>
                        <Row>
                        <Col xs="auto">
                            <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
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
