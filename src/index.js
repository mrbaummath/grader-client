import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CssBaseline from '@mui/material/CssBaseline'



ReactDOM.render(
    <BrowserRouter>
        <CssBaseline />
            <App />
    </BrowserRouter>,
    document.getElementById('root')
);
