//react
import React, { useEffect, useState } from "react"

//material
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FolderIcon from '@mui/icons-material/Folder'
import DeleteIcon from '@mui/icons-material/Delete'

//app
import { deleteSection, retrieveCourse } from "../../api/classes"

const SectionsList = ({user, msgAlert, courseId, setModalOpen}) => {
    const [course, setCourse] = useState([])
    const [sections, setSections] = useState([])

    useEffect(() => {
        retrieveCourse(courseId, user)
            .then((res) => {
                setCourse(res.data)
                setSections(res.data.sections)
            })
            .catch(error =>{
                msgAlert({
					heading: `Error:`,
					message: `${error.message}`,
					variant: 'danger',
				})
            })
    }, [])

    const handleDelete = (event,section) => {
        event.preventDefault()
        deleteSection(courseId, section, user)
            .then(res=> setModalOpen(false))
            .catch(error => {
                msgAlert({
                    heading: 'Error' ,
                    message: error,
                    variant: 'danger',
                })
            })
            
    }

    const sectionsJSX = sections.map(section => 
        <ListItem key={section.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={(event) => handleDelete(event,section)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                  sx={{width:"100%"}}
                >
                  <ListItemText
                    primary= {section ? `${section.name}, code: ${section.code}` : null}
                  />
                </ListItem>
    )

    return(
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Sections
          </Typography>
         
            <List>
              {sectionsJSX || null}
            </List>
         
        </Grid>
      </Grid>
    </Box>

    )

}

export default SectionsList