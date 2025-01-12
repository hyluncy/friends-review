'use client'
import Link from 'next/link'; 
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import axios from 'axios'; 
import { Button, Form } from 'react-bootstrap'; 
import Tooltip from 'react-tooltip'; 

export default function SignUpPage() {
    const router = useRouter(); 
    const [ user, setUser ] = React.useState({
        email: '', 
        password: '', 
        username: '', 
    })

    const onSignUp = async () => {
        try {
            const res = await axios.post('api/users/signup', user); 
            router.push('/login'); 
        } catch (err) {
            console.log("Sign-Up Fail", err.message); 
        }
    }
    
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Label>Email address </Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formUsername'>
                <Form.Label>Username </Form.Label>
                <a className="my-anchor-element">?</a>
                <Form.Control type='email' placeholder='Enter Username' />
            </Form.Group>
            
            <Form.Group className='mb-3' controlId='formPassword'>
                <Form.Label>Password </Form.Label>
                <Form.Control type='password' placeholder='Enter Password' />
            </Form.Group>

            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    ); 
}