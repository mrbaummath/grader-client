// React imports
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//material imports
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

//app imports
import CourseCreateForm from './CourseCreateForm'
import AppModal from '../shared/AppModal'
import { createCourseAndSections } from '../../api/classes'
import Box from '@mui/material/Box'
import AppFAB from '../shared/AppFAB'

const CourseCreate = ({user, msgAlert, triggerRefresh}) => {

    

    const [openModal, setModalOpen] = useState(false)

    const headerText="Create a new Course"
    

    

    const handleCreateNewCourse = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const sectionNames = data.getAll('sectionName')
        const sections = sectionNames.map(name => ({
            name
        }))
        const courseData = {
            name: data.get('courseName'),
            subject: data.get('courseSubject'),
            teacher: user.teacherId,
            'sections': sections
        }

        createCourseAndSections(user, courseData)
            .then((res) => {
                setModalOpen(false)
                triggerRefresh()
            })
            .catch((error) => console.log(error))
    }

    const handleModalOpen = () => {
        setModalOpen(true)
    }

    const mainComponent = <CourseCreateForm 
        user={user} 
        msgAlert={msgAlert}
        handleSubmit={handleCreateNewCourse}
    />

    return(
        <div>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <AppFAB 
                    color={"primary"} 
                    aria={"add-course"}
                    onClick={handleModalOpen}
                    buttonContent={<AddIcon />}
                />
            </Box>
            <AppModal 
                headerText={headerText} 
                mainComponent={mainComponent}
                open={openModal}
                setOpen={setModalOpen}
            />
        </div>
    )
}

export default CourseCreate