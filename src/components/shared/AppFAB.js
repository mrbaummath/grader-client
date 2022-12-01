import Fab from '@mui/material/Fab'

const AppFAB = ({buttonContent, onClick, color, aria}) => {
    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    }
    return (
        <Fab 
        onClick={onClick} 
        style={style} 
        color={color} 
        aria-label={aria}
        >
            {buttonContent}
        </Fab>
    )
}

export default AppFAB