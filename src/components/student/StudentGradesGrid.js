//React imports
import React, { useState, useEffect } from 'react'
// Material imports
import { DataGrid} from '@mui/x-data-grid'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
//App imports


import { getStudentseGrades } from '../../api/grades'

const StudentGradesGrid = ({user, msgAlert, updated}) => {
    //grades state
    const [grades, setGrades] = useState([])

    //grab grades on render
    useEffect(()=>{
        getStudentseGrades(user)
            .then((res) => {
                setGrades(res.data)
            })
            .catch((error) => {
                msgAlert({
					heading: `Error:`,
					message: `${error.message}`,
					variant: 'danger',
				})
			})
    }, [updated])

    //set columns
    const columns = [
        {field: 'assignment', headerName: 'Assignment', flex:1, minWidth: 100, maxWidth:200},
        {field: 'course', headerName: 'Class', flex:1, minWidth: 100, maxWidth:200},
        {field: 'value', headerName: 'Grade', flex:1, minWidth: 100, maxWidth:200},
        {field: 'due', headerName: 'Due Date', flex:1, minWidth: 100, maxWidth:200},
    ]

     return (
        <Grid container spacing={2}>
                <Grid item sm={12}>
                    <Box sx={{ height: '50vh', width: '100%'}}>
                        <DataGrid 
                            rows={grades}
                            columns={columns}
                        />
                    </Box>
                </Grid>
        </Grid>
     )
}

export default StudentGradesGrid