//React imports
import React, { useState, useEffect } from 'react'
// Material imports
import { DataGrid} from '@mui/x-data-grid'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
//App imports
import { retrieveSection } from '../../api/classes'



const StudentGrid = ({students}) => {
   

   

    

    //set column fields 
    const columns = [
        {field: 'last_name', flex:1, minWidth:100, maxWidth:200},
        {field: 'first_name', flex:1, minWidth:100, maxWidth:200},
        {field: 'section', flex:1, minWidth:100, maxWidth:200},
        {field: 'email', flex:1, minWidth:100, maxWidth:200},
    ]

   
    if (students && students.length > 0) {
    return (
        <Grid container spacing={2}>
                <Grid item sm={12}>
                    <Box sx={{ height: '50vh', width: '75%'}}>
                        <DataGrid 
                            rows={students}
                            columns={columns}
                        />
                    </Box>
                </Grid>
            </Grid>
    )
    } else {
        return(<></>)
    }
}

export default StudentGrid