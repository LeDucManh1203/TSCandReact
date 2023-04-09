import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import Homepage from './pages/homepage'
import Detailpage from './pages/detailpage'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Dashboard from './pages/dashborad'
import ProductUpdate from './pages/product-update'
import AdminLayout from './components/layout/admin'
import ProductAdd from './pages/product-add'
import UserList from './pages/user-list'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup />}> </Route>
      <Route path='/signin' element={<Signin />}> </Route>

      <Route path='/' element={<UserLayout />}>
        <Route index element={<Homepage />} />
        <Route path='product/:id' element={<Detailpage />} />
      </Route>
      
      <Route path='/admin' element={<AdminLayout />} >
        <Route index element={<Dashboard />} />
        <Route path='product/:id' element={<ProductUpdate />} />
        <Route path='add' element={<ProductAdd />} />
        <Route path='/admin/users' element={<UserList />} />

      </Route>

    </Routes>
  </BrowserRouter>

}

export default App
