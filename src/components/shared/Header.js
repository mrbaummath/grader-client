import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'




const teacherOptions = (
    <>
        <Nav.Item>
            <Button color='secondary' component={Link} to='teacher'>View Courses</Button>
		</Nav.Item>
    </>
)

const studentOptions = (
    <>
        <Nav.Item>
            <Button color='secondary' component={Link} to='student/home' >Your Grades</Button>
        </Nav.Item>
    </>
)

const authenticatedOptions = (
	<>
		<Nav.Item>
            <Button color='secondary' component={Link} to='change-password' >Change Password</Button>
		</Nav.Item>
		<Nav.Item>
            <Button color='secondary' component={Link} to='sign-out' >Sign Out</Button>
		</Nav.Item>
        
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item>
		   <Button color='secondary' component={Link} to='sign-up' >Sign Up</Button>
        </Nav.Item>
        <Nav.Item>
            <Button color='secondary' component={Link} to='sign-in' >Sign in</Button>
        </Nav.Item>
	</>
)



const Header = ({ user }) => (
    <Box sx={{flexGrow:1}}>
    <AppBar position="fixed" color="primary">
        <Toolbar>
            <Button variant='outlined' color='secondary' component={Link} to='/' >GrAder</Button>
            {user && (<div><Button disabled color='secondary'>Welcome {user.firstName}</Button></div>)}
            {user ? authenticatedOptions : unauthenticatedOptions}
            {user && user.type === 'teacher' ? teacherOptions : null}
            {user && user.type === 'student' ? studentOptions : null}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
	// <Navbar bg='primary' variant='dark' expand='md'>
	// 	<Navbar.Brand>
    //         <Link to='/' style={linkStyle}>
    //             Grader
    //         </Link>
    //     </Navbar.Brand>
	// 	<Navbar.Toggle aria-controls='basic-navbar-nav' />
	// 	<Navbar.Collapse id='basic-navbar-nav'>
	// 		<Nav className='ml-auto'>
	// 			{user && (
	// 				<span className='navbar-text mr-2'>Welcome, {user.firstName}</span>
	// 			)}
	// 			{alwaysOptions}
	// 			{user ? authenticatedOptions : unauthenticatedOptions}
    //             {user && user.type === 'teacher' ? teacherOptions : null}
    //             {user && user.type === 'student' ? studentOptions : null}
	// 		</Nav>
	// 	</Navbar.Collapse>
	// </Navbar>
)

export default Header
