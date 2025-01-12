'use client'; 
import { Nav, Navbar, Container, Form, Row, Col, Button } from 'react-bootstrap'; 

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Friends Review</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#experieces">Experiences</Nav.Link>
                    <Nav.Link href="#my-friends">My Friends</Nav.Link>
                </Nav>
                <Nav>
                    <Form inline>
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
