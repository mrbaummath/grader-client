//React imports
import React, { useState, useEffect } from 'react'
// Material imports
import { DataGrid} from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
//App imports
import { getCourseAssignments, updateAssignment } from '../../api/assignments'

import AssignmentCreate from './AssignmentCreate'



const AssignmentGrid = ({user, courseId, msgAlert}) => {
    //state for assignment data
    const [assignments, setAssignments] = useState([])
    //state for an update
    const [updated, setUpdated] = useState(false)
    //state to track edited field
    const [editedField, setEditedField] = useState('')
    //state for an array of assignments to update
    const [assignmentsToUpdate, setAssignmentsToUpdate] = useState([])

    //call to API for assignment data on initial render and when there is an update
    useEffect(() => {
        if (courseId) {
            getCourseAssignments(user, courseId)
                .then((res) => {
                    setAssignments(res.data)
                })
                .catch(error => console.log(error))
        }
    }, [courseId, updated])

    //trigger refresh function can be passed to creating assignment
    const triggerRefresh = () => {
        setUpdated(prev => !prev)
    }
    //set columns
    const columns = [
        {field: 'name', headerName:'Name', flex:1, minWidth:100, maxWidth:200, editable:true},
        {field: 'assigned_on', headerName:'Assigned', flex:1, minWidth:100, maxWidth:200, type:'date', editable:true},
        {field: 'due_date', headerName:'Due', flex:1, minWidth:100, maxWidth:200, type:'date', editable:true},
        {field: 'description', headerName:'Description', flex:1, minWidth:100, maxWidth:200, editable:true},

    ]

    //function to handle row change
    const processRowUpdate = (newRow, oldRow) => {
        console.log(editedField)
        if (newRow[editedField] != oldRow[editedField]) {
            setAssignmentsToUpdate(prev => [...prev, newRow])
        }
        return newRow
    }

    const handleAssignmentSave = (event) => {
        assignmentsToUpdate.forEach((assignment) => {
            updateAssignment(user, assignment)
                .then(res => {
                    setAssignmentsToUpdate([])})
                .catch(err => console.log(err))
        })
    }

    const onProcessRowUpdateError = (error) => {
        console.log(error)
    }

    return (
        <Grid container spacing={2}>
                <Grid item sm={12}>
                    <Box sx={{ height: '50vh', width: '75%'}}>
                        <DataGrid 
                            rows={assignments}
                            columns={columns}
                            experimentalFeatures={{ newEditingApi: true }}
                            processRowUpdate={processRowUpdate}
                            onProcessRowUpdateError={onProcessRowUpdateError}
                            onCellEditStop={(params) => setEditedField(params.field)}
                        />
                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Button 
                        disabled={assignmentsToUpdate.length===0}
                        onClick={handleAssignmentSave}
                    >
                        Save Changes
                    </Button>
                </Grid>
            <AssignmentCreate user={user} msgAlert={msgAlert} triggerRefresh={triggerRefresh} courseId={courseId} />
        </Grid>
    )
}

export default AssignmentGrid