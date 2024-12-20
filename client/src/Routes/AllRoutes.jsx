import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/HomeComponents/Home';
import AuthUserNav from '../Components/AuthUserNav';
import MainCourses from '../Pages/MainCourses';
const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/auth/nav" element={<AuthUserNav />}/>
            <Route path="/auth/our_courses" element={<MainCourses />}/>
        </Routes>

    )
}

export default AllRoutes
