import { StyledEngineProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter} from 'react-router-dom'
import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyledEngineProvider injectFirst>
  <React.StrictMode>
    <BrowserRouter>
   <App/>
    </BrowserRouter>
  </React.StrictMode>
  </StyledEngineProvider>
)
