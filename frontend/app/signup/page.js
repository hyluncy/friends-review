'use client'
import Link from 'next/link'; 
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import axios from 'axios'; 
import { Container, Button, Form } from 'react-bootstrap'; 
import HelpTooltip from '@/components/helpTooltip';
import signUp from '../api/authentication';

export default function SignUpPage() {
    const router = useRouter(); 
    const [ error, setError ] = useState(null); 
    const [ user, setUser ] = useState({
        email: '', 
        username: '', 
        password: '', 
        confirmPassword: '',    // Only required for validation in the frontend
    }); 

    const checkPassword = () => {
        if (user.password.length < 10) {
            setError('Passwords must be at least 10 characters.'); 
            return false; 
        }

        if (user.password !== user.confirmPassword) {
            setError('Passwords do not match!'); 
            return false; 
        }

        return true; 
    }

    const onSignUp = async (event) => {
        event.preventDefault();
        await signUp();
    }
    
    return (
        <Container>
            <h1>Sign-Up</h1>
            <br />
            <Form>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Email address   
                        <HelpTooltip helpMessage='Your email will only be used for login purposes and will remain private.' /> 
                    </Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='Enter email'
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value})} 
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formUsername'>
                    <Form.Label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Username
                        <HelpTooltip helpMessage='Your username will be visible to other users and used to identify you on the platform.' /> 
                    </Form.Label>
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

                <Form.Group className='mb-3' controlId='formConfirmPassword'>
                    <Form.Label>Confirm Password </Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Confirm Password'
                        value={user.confirmPassword}
                        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value})}
                    />
                </Form.Group>

                <Button variant='primary' type='submit' onClick={onSignUp}>Submit</Button>
            </Form>
        </Container>
    ); 
}