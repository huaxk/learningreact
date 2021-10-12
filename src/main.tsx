import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ColorOrganizer from './ColorOrganizer'
import { MantineProvider } from '@mantine/core'
import MantineApp from "./mantine/index";
import RadixApp from "./radix";

ReactDOM.render(
  <React.StrictMode>
    {/* <MantineProvider>
      <MantineApp />
    </MantineProvider> */}
    {/* <App /> */}
    <RadixApp />
  </React.StrictMode>,
  document.getElementById('root')
)
