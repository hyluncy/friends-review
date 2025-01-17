
import React from 'react';
import { Button, Form } from 'react-bootstrap'; 
import Container from 'react-bootstrap/Container'; 

export default function LoginPage() {
    
    return (
        <Container>
            <h1>Sign-Up</h1>
            <Form>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px'
                    }}>
                        Email address 
                    </Form.Label>
                    <br />
                    <Form.Control 
                        type='email' 
                        placeholder='Enter email'
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value})} 
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formUsername'>
                    <Form.Label style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px'
                    }}>
                        Username 
                    </Form.Label>
                    <br/>
                    <Form.Control 
                        type='email' 
                        placeholder='Enter Username' 
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value})}/>
                </Form.Group>
                
                <Form.Group className='mb-3' controlId='formPassword'>
                    <Form.Label>Password </Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Enter Password'
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value})}
                    />
                </Form.Group>

                <Button variant='primary' type='submit'>Login</Button>
            </Form>
        </Container>
    )
}