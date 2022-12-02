// import React, { Component } from 'react'
import React, {useState, useEffect} from 'react'



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
import AddIcon from '@mui/icons-material/Add'

//App imports
import AppFAB from '../shared/AppFAB'
import AppModal from '../shared/AppModal'
import { addStudentToSection, joinClass } from '../../api/classes'

const StudentAddClass = ({user, msgAlert, triggerRefresh}) => {
    //modal state
    const [modalOpen, setModalOpen] = useState(false)

    const handleAddStudent = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const code = data.get("code")
        joinClass(user, code)
            .then((res) => {
                setModalOpen(false)
                triggerRefresh()
            })
            .catch((error) => console.log(error))
        
    }

    //construct form (only 1 input) to pass to the modal
    const classCodeInput =  <Container maxWidth="s">
        <Box
            component="form"
            noValidate
            onSubmit={handleAddStudent}
        >
            <TextField
                name="code"
                required
                fullWidth
                id="code"
                label="Enter Class Code"
                autoFocus
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Add Class
            </Button>
        </Box>
    </Container>

    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <AppFAB 
                    color={"primary"} 
                    aria={"add-assignment"}
                    onClick={()=>{setModalOpen(true)}}
                    buttonContent={<AddIcon />}
                />
            </Box>
            <AppModal 
                mainComponent={classCodeInput}
                open={modalOpen}
                setOpen={setModalOpen}
            />
        </div>
    )

}

export default StudentAddClass