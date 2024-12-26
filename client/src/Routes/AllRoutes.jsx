import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/HomeComponents/Home';
import AuthUserNav from '../Components/AuthUserNav';
import MainCourses from '../Pages/MainCourses';
import Course_Detail from '../Pages/Course_Detail';
const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/auth/nav" element={<AuthUserNav />}/>
            <Route path="/auth/our_courses" element={<MainCourses />}/>
            <Route path="/details" element={<Course_Detail />}/>
        </Routes>

    )
}

export default AllRoutes
