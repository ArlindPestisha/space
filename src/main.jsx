import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import Nav from './components/Nav'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router> */}
    {/* <Nav /> */}
      <App />
    
    {/* </Router> */}
  </React.StrictMode>,
)
