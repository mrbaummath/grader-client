
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const Home = (props) => {
	

	return (
		<Container sx={{ mt: 4, mb: 4 }} >
           <Box
                sx={{
                    bgcolor: '#dad8f0',
                    pt: 8,
                    pb: 6,
                }}
            >
			<Typography
                component="h1"
                variant="h3"
                align="left"
                color="text.primary"
                sx={{mb:10}}
                gutterBottom>
                    Welcome to GrAder - An Online Grade Tracker
                </Typography>
                <Typography
                component="h4"
                variant="h4"
                align="right"
                color="text.primary"
                sx={{mb:6}}
                gutterBottom>
                    Meant for Students and Teachers Alike
                </Typography>
                <Typography
                component="p"
                align="left"
                color="text.primary"
                gutterBottom>
                    Teachers can create and grade assignments for classes, which are then pushed out to their students. 
                </Typography>
                <Typography
                component="p"
                align="left"
                color="text.primary"
                gutterBottom>
                    To get started, simply navigate to the sign-up page. If you're a student, you can make an account but will need a join code from your teacher to join a class.
                </Typography>
            </Box>
		</Container >
	)
}

export default Home
