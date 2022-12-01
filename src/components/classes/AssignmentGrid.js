//React imports
import React, { useState, useEffect } from 'react'
// Material imports
import { DataGrid} from '@mui/x-data-grid'
//App imports
import AssignmentRow from './AssignmentRow'
import { getCourseAssignments } from '../../api/assignments'
import AppFAB from '../shared/AppFAB'



const AssignmentGrid = ({user, courseId}) => {
    //state for assignment data
    const [assignments, setAssignments] = useState(null)
    //state for an update
    const [updated, setUpdated] = useState(false)

    //call to API for assignment data on initial render and when there is an update

    useEffect(() => {
        getCourseAssignments(user, courseId)
            .then((res) => {
                setAssignments(res.data)
            })
            .catch(error => console.log(error))
    }, [updated])

    //trigger refresh function can be passed to creating assignment
    const triggerRefresh = () => {
        setUpdated(prev => !prev)
    }

    return (
        <></>
    )
}

export default AssignmentGrid