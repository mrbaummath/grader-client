// React imports
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


//APP imports
import StudentGradesGrid from './StudentGradesGrid'
import AppFAB from '../shared/AppFAB'
import AppModal from '../shared/AppModal'

//import Material Components
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import StudentAddClass from './StudentAddClass'



const StudentHome = (props) => {
    const { user, msgAlert } = props
    const [updated, setUpdated] = useState(false)

    const triggerRefresh = () => {
        setUpdated(prev => !prev)
    }

    



    return (
   
    
        
        <Container sx={{ mt: 4, mb: 4 }} > 
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item >
                
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                    
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            {`${user.firstName}'s Grades`}
                        </Typography>
                        <Typography variant='h3' align='center' color='text.secondary' paragraph>
                            Your grades across your courses are below
                        </Typography>
                        <Grid item s={12}>
                        <StudentGradesGrid user={user} msgAlert={msgAlert} updated={updated}  />
                        </Grid>
                
                    
                    </Box>
                </Grid>
        
            </Grid>   
            
            <StudentAddClass user={user} msgAlert={msgAlert} triggerRefresh={triggerRefresh} />
        </Container>
        
        
    
    
  
   
    )
}

export default StudentHome