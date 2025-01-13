'use client'
import Link from 'next/link'; 
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import axios from 'axios'; 
import { Button, Form } from 'react-bootstrap'; 
import HelpTooltip from '@/components/helpTooltip';

export default function SignUpPage() {
    const router = useRouter(); 
    const [ user, setUser ] = React.useState({
        email: '', 
        password: '', 
        username: '', 
    })

    const onSignUp = async (event) => {
        event.preventDefault(); 
        try {
            const res = await axios.post('api/users/signup', user); 
            router.push('/login'); 
        } catch (err) {
            console.log('Sign-Up Fail', err.message); 
        }
    }
    
    return (
        <>
            <h1>Sign-Up</h1>
            <Form>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label style={{
                        display: 'inline-flex', alignItems: 'center', gap: '5px'
                    }}>
                        Email address <HelpTooltip anchorSelect='.my-anchor' place='right' helpMessage='Your email will only be used for login purposes and will remain private.' /> 
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
                        Username <HelpTooltip anchorSelect='.my-anchor' place='right' helpMessage='Your username will be visible to other users and used to identify you on the platform.' /> 
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

                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        </>
    ); 
}