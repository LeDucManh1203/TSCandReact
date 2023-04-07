import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import Homepage from './pages/homepage'
import Detailpage from './pages/detailpage'
import Signup from './pages/signup'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}>
        </Route>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Homepage />} />
          <Route path='product/:id' element={<Detailpage />} />
          <Route path='cart' element={<Detailpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
