// React imports
import React, { useState, useEffect } from 'react'



//APP imports
import { getTeacherCourses } from '../../api/classes'
import CourseCard from '../classes/CourseCard'
import CourseCreate from '../classes/CourseCreate'

//import Material Components
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const TeacherHome = (props) => {
    const { user, msgAlert } = props

    const [courses, setCourses] = useState(null)
    const [update, setUpdate] = useState(false)

    const triggerRefresh = () => {
        setUpdate(prev => !prev)
    }
    
    //get teacher course on render 
    useEffect(()=> {
        getTeacherCourses(user)
            .then(res => {
                setCourses(res.data)
            })
            .catch(error => {
                msgAlert({
					heading: `Error:`,
					message: `${error.message}`,
					variant: 'danger',
				})
			})
    }, [update])


   

    //set courses JSX

    const coursesJSX = 
        courses ?
        courses.map(course => (<CourseCard course={course} user={user} key={course.id}/>))
        :
        null

    return (
   
    
        <main>
            <Box
                sx={{
                    bgcolor: '#dad8f0',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                    >
                        {`${user.title}'s Courses`}
                    </Typography>
                    <Typography variant='h3' align='center' color='text.secondary' paragraph>
                        See your courses below. You can edit your courses or view details
                    </Typography>
                </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
                {coursesJSX}
            </Grid>
            <CourseCreate user={user} msgAlert={msgAlert} triggerRefresh={triggerRefresh} /> 
        </Container>
        
        </main>
        
  
    
  
   
    )
}

export default TeacherHome