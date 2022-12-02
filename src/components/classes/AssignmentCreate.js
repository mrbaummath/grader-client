// React imports
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//material imports
import AddIcon from '@mui/icons-material/Add'

//app imports
import AssignmentForm from './AssignmentForm'
import { createAssignment } from '../../api/assignments'
import AppModal from '../shared/AppModal'
import Box from '@mui/material/Box'
import AppFAB from '../shared/AppFAB'

const AssignmentCreate = ({user, msgAlert, triggerRefresh, courseId}) => {

    //state for modal open/close
    const [modalOpen, setModalOpen] = useState(false)

    //function to handle form submission to create an assignment
    const handleAssignmentCreate = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const assignment = {
            name: data.get('name'),
            description: data.get('description'),
            teacher: user.teacherId,
            course: courseId,
            'assigned_on': data.get('assigned_on'),
            'due_date': data.get('due_date')
        }
        createAssignment(user, courseId, assignment)
            .then(res => {
                triggerRefresh()
                setModalOpen(false)
            })
            .catch(error => console.log(error))
    }

    const mainComponent = <AssignmentForm 
        handleSubmit={handleAssignmentCreate}
        // onChage = {handleChange}
        assignment={false}
        buttonText={'Add Assignment'}
    />

    // const handleChange = (event) => {
        
    // }

    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <AppFAB 
                    color={"secondary"} 
                    aria={"add-assignment"}
                    onClick={()=>{setModalOpen(true)}}
                    buttonContent={<AddIcon />}
                />
            </Box>
            <AppModal 
                headerText={'New Assignment'} 
                mainComponent={mainComponent}
                open={modalOpen}
                setOpen={setModalOpen}
            />
        </div>
    )
}

export default AssignmentCreate