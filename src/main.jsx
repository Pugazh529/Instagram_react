import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Viewstory from './Viewstory.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/story/:id/:tot' element={<Viewstory/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>

)
