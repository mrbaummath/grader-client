//React imports
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


//Material imports
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

//App imports
import AssignmentGrid from './AssignmentGrid'
import StudentGrid from './StudentGrid'
import { retrieveCourse, retrieveSection } from '../../api/classes'

const CourseView = ({user, msgAlert}) => {
    //state for course information
    const [course, setCourse] = useState(null)
    const [students, setStudents] = useState([])
    //state to detect if a new assignment was created


    const {courseId} = useParams()
    
    //grab course details from API on render
    useEffect(() => {
        retrieveCourse(courseId, user)
            .then((res) => {
                setCourse(res.data)
            })
            .catch((error) => {
                msgAlert({
					heading: `Error:`,
					message: `${error.message}`,
					variant: 'danger',
				})
			})
    }, [])


    //grab students once course data comes in
    useEffect(() => {
        if (course) {
            const sectionIds = course.sections.map(section => section.id)
            sectionIds.forEach(id => {
                retrieveSection(courseId, id, user)
                    .then(res => {
                        const sectionStudents = res.data.students
                        sectionStudents.forEach(student => student.section = res.data.name)
                        setStudents(prev => [...prev, ...sectionStudents])
                    })
            })
        }
    }, [course])


    if (course) {

        return (
            <Container sx={{ mt: 4, mb: 4, width:'90vw' }}>
                <Grid container spacing={3} justifyContent="center">
                    <Box
                        sx={{
                            bgcolor: '#dad8f0',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                    
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            sx= {{mt:4}}
                            gutterBottom
                        >
                            {`${course.name} Details` || ''}
                        </Typography>
                        <Grid item s={12}>
                            <Typography
                                component="h4"
                                align="center"
                                color="text.primary"
                                sx={{mb:2}}
                            >
                                Student Details
                            </Typography>
                            <StudentGrid user={user} msgAlert={msgAlert} students={students} courseId={courseId}/>
                        </Grid>
                        <Grid item s={12}>
                            <Typography
                                component="h4"
                                align="center"
                                color="text.primary"
                                sx={{mb:2, mt:2}}
                            >
                                Assignment Details
                            </Typography>
                            <AssignmentGrid user={user} msgAlert={msgAlert} courseId={courseId} />
                        </Grid>
                    </Box>
                </Grid>
            </Container>
        )
    } else {
        return (<></>)
    }
   
}

export default CourseView