// import React, { Component } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//import app API and messages 
import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

//import material components
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Grow from '@mui/material/Grow'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'





const SignUp = (props) => {


    const [radioSelected, setRadioSelected] = useState(false)
    const [accountType, setAccountType] = useState(null)
    const [yearInSchool, setYearInSchool] = useState('')

    //extra field for either teacher or student --> used in a Material Grow component

    const ExtraFields = React.forwardRef((props, ref) => {

        
        if (accountType === 'teacher') {

            return (
            <div ref={ref} props={props}>
                <TextField
                name="title"
                fullWidth
                id="added_field"
                label="Optional: Enter a title (i.e. Dr., Ms., Mr.)"
                autoFocus
            />
            </div>
            )
        
        } else if (accountType === 'student') {
            return (
                <div ref={ref} props={props}>
                <FormControl fullWidth>
                    <InputLabel id="year-label">Year In School</InputLabel>
                    <Select
                    labelId="year-label"
                    id="year-select"
                    value={yearInSchool}
                    label="year"
                    onChange= {(e)=>{setYearInSchool(e.target.value)}}
                    >
                        <MenuItem value={'FR'}>First Year</MenuItem>
                        <MenuItem value={'SO'}>Sophomore</MenuItem>
                        <MenuItem value={'JR'}>Junior</MenuItem>
                        <MenuItem value={'SR'}>Senior</MenuItem>
                    </Select>
                </FormControl>
                </div>
            )
        } else {
            return (<></>)
        }
    })

    const handleRadioChange = (event) => {
        setRadioSelected(true)
        setAccountType(event.target.value)
    }


	 

    const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault()
        const data = new FormData(event.currentTarget)
		const { msgAlert, setUser } = props
        //set account booleans based on radio selection
        const isStudent = data.get('accountType') === 'student'
        const isTeacher = data.get('accountType') === 'teacher'
        //grab base credentials
        const credentials = {
            username: data.get('username'),
            first_name: data.get('firstName'),
            last_name: data.get('lastName'),
            email: data.get('email'), 
            password: data.get('password'),
            password_confirmation: data.get('passwordConfirmation'),
            is_teacher: isTeacher,
            is_student: isStudent,
            pronouns: data.get('pronouns'),
        }
        //append extra credenetials depending on account type
        if (isTeacher) {
            credentials.title = data.get('title')
        } else if (isStudent) {
            credentials.year_in_school = yearInSchool
        }
        
        

		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign Up Success',
					message: messages.signUpSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
				msgAlert({
					heading: `Sign Up Failed with error: ${error.message}`,
					message: messages.signUpFailure,
					variant: 'danger',
				})
			})
	}


    return (
        
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item sm={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    autoComplete="email"
                                    name="email"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    autoComplete="family-name"
                                    name="lastName"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    name="pronouns"
                                    fullWidth
                                    id="pronouns"
                                    label="Pronouns"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    autoComplete="new-password"
                                    name="password"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    type="password"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <TextField
                                    autoComplete="new-password"
                                    name="passwordConfirmation"
                                    type="password"
                                    required
                                    fullWidth
                                    id="passwordConfirmation"
                                    label="Confirm Password"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <FormControl>
                                    <FormLabel id="account-type" >Signing up as a...</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="account-type-radio-group"
                                        name="accountType"
                                        onChange={handleRadioChange}
                                    >
                                        <FormControlLabel value="teacher" control={<Radio />} label="Teacher"  />
                                        <FormControlLabel value="student" control={<Radio />} label="Student" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item sm={12}>
                                <Grow in={radioSelected}>
                                    <ExtraFields />
                                </Grow>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </Box>
                </Box>
            </Container>
      );
    

}

export default SignUp