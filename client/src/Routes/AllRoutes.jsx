import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/HomeComponents/Home';
import AuthUserNav from '../Components/AuthUserNav';
import MainCourses from '../Pages/MainCourses';
import Course_Detail from '../Pages/Course_Detail';
import Applications from '../Components/Applications';
import Student_data from '../Pages/Student_data';
import Dashboard from '../Admin-Side/Dashboard';
import DashboardHome from "../Admin-Side/Admin-components/DashboardHome.jsx";
import Users from "../Admin-Side/Admin-components/Users.jsx"
import Products from "../Admin-Side/Admin-components/Products.jsx";
import ActiveUsers from "../Admin-Side/Admin-components/ActiveUsers.jsx";
import BlackList from "../Admin-Side/Admin-components/BlackList.jsx";
const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/nav" element={<AuthUserNav />} />
            <Route path="/auth/our_courses" element={<MainCourses />} />
            <Route path="/details" element={<Course_Detail />} />
            <Route path="/application" element={<Applications />} />
            <Route path="/student" element={<Student_data />} />
            <Route path="/admin/dashboard" element={<Dashboard />}>
                {/* <Route index element={<h1>Welcome to Dashboard</h1>} /> */}
                <Route path="" element={<DashboardHome />} />
                <Route path="users" element={<Users />} />
                <Route path="products" element={<Products />} />
                <Route path="active-users" element={<ActiveUsers />} />
                <Route path="blacklist" element={<BlackList />} />
            </Route>

        </Routes>

    )
}

export default AllRoutes
