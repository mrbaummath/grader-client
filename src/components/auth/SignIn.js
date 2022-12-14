import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignIn = (props) => {
	
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


	const onSignIn = (event) => {
		event.preventDefault()
		const { msgAlert, setUser } = props
        const credentials = {username, password}
		signIn(credentials)
			.then((res) => {
                setUser(res.data.user)
                if (res.data.user.type === 'teacher') {
                    navigate('/teacher')
                } else if (res.data.user.type==='student') {
                    navigate('/student/home')
                } else {
                    navigate('/')
                }
                
            })
			.then(() =>
				msgAlert({
					heading: 'Sign In Success',
					message: messages.signInSuccess,
					variant: 'success',
				})
			)
			.catch((error) => {
                setUsername('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	}

    return (
        <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>Sign In</h3>
                <Form onSubmit={onSignIn}>
                    <Form.Group controlId='email'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            name='username'
                            value={username}
                            placeholder='Enter username'
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <br/>
                    <Button variant='secondary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SignIn
