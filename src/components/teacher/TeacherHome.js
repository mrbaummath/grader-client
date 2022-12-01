// React imports
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


//APP imports
import { getTeacherCourses } from '../../api/classes'
import CourseCard from '../classes/CourseCard'
import CourseCreate from '../classes/CourseCreate'

//import Material Components
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
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
            .catch(error => console.log(error))
    }, [update])


    const theme = createTheme()

    //set courses JSX

    const coursesJSX = 
        courses ?
        courses.map(course => (<CourseCard course={course} user={user} key={course.id}/>))
        :
        null

    return (
   
    <ThemeProvider theme={theme}>
        <main>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        {`${user.title}'s Course`}
                    </Typography>
                    <Typography variant='h3' align='center' color='text.secondary' paragraph>
                        See your courses below. You can edit your courses or view details
                    </Typography>
                </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {coursesJSX}
            </Grid>
            <CourseCreate user={user} msgAlert={msgAlert} triggerRefresh={triggerRefresh} /> 
        </Container>
        
        </main>
        
    </ThemeProvider>
    
  
   
    )
}

export default TeacherHome