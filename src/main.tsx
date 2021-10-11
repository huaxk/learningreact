import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ColorOrganizer from './ColorOrganizer'
import {MantineProvider} from '@mantine/core'

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        primaryColor: 'cyan',
        // colorScheme: 'dark',
        // fontFamily: 'Open Sans, sans serif',
        // spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },        
      }}>
      {/* <App /> */}
      <ColorOrganizer />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
