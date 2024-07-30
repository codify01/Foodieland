import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepages from './pages/Homepages'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Homepages />} />
    </Routes>
    </>
  )
}

export default App