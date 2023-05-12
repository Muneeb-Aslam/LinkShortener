import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import SignUp from './components/Pages/signup.jsx'
import Forgot from './components/Pages/forgot.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Forgot />
  </React.StrictMode>,
)
