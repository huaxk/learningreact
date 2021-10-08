import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import StarRating from './components/StarRating'
import ColorOrganizer from './ColorOrganizer'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating style={{backgroundColor: "lightblue"}} /> */}
    <ColorOrganizer />
  </React.StrictMode>,
  document.getElementById('root')
)
