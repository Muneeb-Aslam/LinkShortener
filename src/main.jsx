import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import SignUp from './Pages/signup.jsx'
import Forgot from './Pages/forgot.jsx'
import Dashboard from './Pages/dashboard.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
)
