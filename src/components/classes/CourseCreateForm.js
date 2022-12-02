// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'



//import material components
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

//create theme
const theme = createTheme()

const CourseCreateForm = ({handleSubmit}) => {
    const [extraCount, setExtraCount] = useState(0)
    const [extraSections, setExtraSections] = useState([])


    useEffect(() => {
        console.log(extraCount)
        if (extraCount > 0) {
            setExtraSections(prev=>[...prev,extraCount])
        }
    }, [extraCount])


    const addSectionField = () => {
        console.log('clicked')
        setExtraCount(prev => (prev + 1))
       
    }

    const extraSectionsJSX = extraSections.map(int => (
        <Grid item sm={12} key={int}>
            <TextField
                name={`sectionName`}
                fullWidth
                id={`sectionName${int}`}
                label="Name"
                autoFocus
            />
        </Grid>
    ))

    return (
       
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
               
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item sm={12}>
                            <TextField
                                name="courseName"
                                required
                                fullWidth
                                id="courseName"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <TextField
                                name="courseSubject"
                                required
                                fullWidth
                                id="courseSubject"
                                label="Subject"
                                autoFocus
                            />
                        </Grid>
                        <Typography variant="h5" component="h5">
                            Course Sections (one required)
                        </Typography>
                        <Grid item sm={12}>
                            <TextField
                                name="sectionName"
                                required
                                fullWidth
                                id="sectionName0"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        {extraSectionsJSX}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add Course
                        </Button>
                        <Button
                            variant="contained"
                            onClick={addSectionField}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add section
                        </Button>
                    </Grid>
                </Box>
            </Box>
        </Container>
    
    )
}

export default CourseCreateForm