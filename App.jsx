import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Debt from './components/Debt/Debt'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/debts/' element={<Debt />} />
          <Route path='/profile/user/' element={<Profile />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App
