
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'; 
import Container from 'react-bootstrap/Container'; 


export default function LoginPage() {
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState(''); 
    const [ error, setError ] = useState(null); 
    const onLogin = async (event) => {
        event.preventDefault(); 
        try {
            const res = await axios.post('/api/users/login', {  // TODO: Replace with backend url
                email,
                password
            })
        } catch (err) {
            setError('Login Failed: ' + err.message); 
        }
    }
    return (
        <Container>
            <h1>Login</h1>
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
                        type='text' 
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

                <Button variant='primary' type='submit' onClick={onLogin}>Login</Button>
            </Form>
        </Container>
    )
}