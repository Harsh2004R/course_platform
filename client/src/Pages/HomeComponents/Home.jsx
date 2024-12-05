import { Box, Center, Container } from '@chakra-ui/react'
import React from 'react'
import Navbar from "../../Components/Navbar.jsx"
import Hero from '../HomeComponents/Hero.jsx'
import Courses from './Courses.jsx'
import Marquees from './Marquees.jsx'
import Test from "./Test.jsx"
const Home = () => {
  return (

    <>

      <Box w="100%" h="300vh" >
        <Navbar />
        <Box w="100%" h="12vh" bg="#fff" ></Box>
        {/* Hero Section goes here... */}
        <Hero />
        <Courses />
        <Box w="100%" h={{base:"50px",md:"120px",lg:"150px" }}></Box>
        <Marquees />
        <Box w="100%" h={{base:"30px",md:"50px",lg:"80px" }}></Box>









      </Box>

    </>

  )
}

export default Home


