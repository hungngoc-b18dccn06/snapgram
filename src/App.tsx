import React from 'react'
import { Route, Routes } from "react-router-dom";

import './globals.css'
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path='/sign-in' element={ <SigninForm />}></Route>
                <Route path='/sign-up' element={ <SignupForm />}></Route>
            </Route>
        
            <Route index element={<Home />}></Route>
        </Routes>
    </main>
  )
}

export default App