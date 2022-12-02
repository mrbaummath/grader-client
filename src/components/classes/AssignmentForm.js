// import React, { Component } from 'react'
import React from 'react'



//import material components
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Input from '@mui/material/Input'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FormControl, FormLabel } from '@mui/material'



const AssignmentForm = ({handleSubmit, onChange, buttonText, assignment}) => {
    return (
        <Container component="main" maxWidth="s">
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
                    <Typography component="h1" variant="h5">
                            Assignment
                        </Typography>
                        <Grid item sm={12}>
                        
                            <TextField
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Assignment Name"
                                defaultValue={ assignment ? assignment.name : ''}
                               
                                autoFocus
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <TextField
                                name="description"
                                required
                                fullWidth
                                id="description"
                                label="description"
                                defaultValue={assignment ? assignment.description : ''}
                               
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <FormControl>
                                <FormLabel id="assignedOn" >
                                    Assigned:
                                </FormLabel>
                                <Input
                                name="assigned_on"
                                id="assignedOn"
                                label="assigned"
                                type='date'
                                defaultValue={assignment ? assignment["assigned_on"] : ''}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item sm={12}>
                            <FormControl>
                                <FormLabel id="dueDate">
                                    Due:
                                </FormLabel>
                                <Input
                                name="due_date"
                                id="dueDate"
                                label="Due"
                                type='date'
                                defaultValue={assignment ? assignment["due_date"] : ''}
                                />
                            </FormControl>
                           
                        </Grid>
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {buttonText}
                        </Button>
                        
                    </Grid>
                </Box>
        </Box>
    </Container>
    )
}

export default AssignmentForm