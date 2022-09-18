import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Userdetails from '../Components/Userdetails'
import Users from '../Components/Users'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />}/>
            <Route path='users/:user_id' element={<Userdetails/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes