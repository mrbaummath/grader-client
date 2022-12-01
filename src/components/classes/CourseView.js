//React imports
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


//Material imports
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
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

    const {courseId} = useParams()
    
    //grab course details from API on render
    useEffect(() => {
        retrieveCourse(courseId, user)
            .then((res) => {
                setCourse(res.data)
            })
            .catch((error) => console.log(error))

    }, [])

    //grab students once course data comes in
    useEffect(() => {
        if (course) {
            const sectionIds = course.sections.map(section => section.id)
            sectionIds.forEach(id => {
                retrieveSection(courseId, id, user)
                    .then(res => {
                        const sectionStudents = res.data.students
                        setStudents(prev => [...prev, ...sectionStudents])
                    })
            })
        }
    }, [course])


    

    if (course) {

        return (
            <>
                <StudentGrid user={user} msgAlert={msgAlert} students={students} courseId={courseId}/>
            </>
        )
    } else {
        return <></>
    }
}

export default CourseView