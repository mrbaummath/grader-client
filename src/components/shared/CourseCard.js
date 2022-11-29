
//import material components
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'


const CourseCard = ({user, course}) => {
    let description = ''
    let actionsJSX = null
    if (user.type === 'teacher') {
        description = `${course.subject}`
         actionsJSX =
            <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
            </CardActions>
    } else if (user.type === 'student') {
        description = `${course.teacher}: ${course.subject}`
         actionsJSX = 
            <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
            </CardActions>
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {course.name}
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </CardContent>
                {actionsJSX}
            </Card>
        </Grid>
    )
}

export default CourseCard