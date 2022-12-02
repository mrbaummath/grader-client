//React imports
import React from 'react'
// Material imports
import { DataGrid} from '@mui/x-data-grid'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'




const StudentGrid = ({students}) => {

    //set column fields 
    const columns = [
        {field: 'last_name', headerName:'Last Name', flex:1, minWidth:100, maxWidth:200},
        {field: 'first_name', headerName:'First Name', flex:1, minWidth:100, maxWidth:200},
        {field: 'pronouns', flex:1, headerName:'Pronouns', minWidth:100, maxWidth:200},
        {field: 'section', headerName:'Section', flex:1, minWidth:100, maxWidth:200},
        {field: 'email', flex:1, headerName:'Email', minWidth:100, maxWidth:200},
        
    ]

   
    if (students && students.length > 0) {
    return (
        <Grid container spacing={2}>
                <Grid item sm={12}>
                    <Box sx={{ height: '50vh', width: '100%'}}>
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