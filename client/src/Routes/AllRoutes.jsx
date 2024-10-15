import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/HomeComponents/Home';
import Buy from '../Pages/Buy';

const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/buy" element={<Buy />} />
        </Routes>

    )
}

export default AllRoutes
