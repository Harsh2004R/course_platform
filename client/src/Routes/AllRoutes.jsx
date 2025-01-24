import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/HomeComponents/Home';
import AuthUserNav from '../Components/AuthUserNav';
import MainCourses from '../Pages/MainCourses';
import Course_Detail from '../Pages/Course_Detail';
import Applications from '../Components/Applications';
import Student_data from '../Pages/Student_data';
const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/auth/nav" element={<AuthUserNav />}/>
            <Route path="/auth/our_courses" element={<MainCourses />}/>
            <Route path="/details" element={<Course_Detail />}/>
            <Route path="/application" element={<Applications />}/>
            <Route path="/student" element={<Student_data />}/>
        </Routes>

    )
}

export default AllRoutes
