import React from 'react'
import {BrowserRouter} from "react-router-dom"
import AnimatedRoutes from './animatedRoutes';
import Sidebar from './components/Sidebar'

import './style.scss';

function App() {
  return (
    <BrowserRouter>
        <Sidebar/>
        <AnimatedRoutes/>
    </BrowserRouter>
  )
  
  
  
  
  
  
}

export default App
