import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/HomeComponents/Home';
import AuthUserNav from '../Components/AuthUserNav';
const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/auth/nav" element={<AuthUserNav />}/>
        </Routes>

    )
}

export default AllRoutes
