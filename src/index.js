import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#038a5f',
      darker: '#053e85',
    },
    secondary: {
        main: '#91a8c4',
        darker: '#2b2528'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    background: {
        paper: '#dad8f0',
        default: '#dad8f0',
    }
  },
})




ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
