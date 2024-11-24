import { Box, Center, Container } from '@chakra-ui/react'
import React from 'react'
import Navbar from "../../Components/Navbar.jsx"
import Hero from '../HomeComponents/Hero.jsx'
import Courses from './Courses.jsx'
import Marquees from './Marquees.jsx'
const Home = () => {
  return (

    <>

      <Box w="100%" h="300vh" >
        <Navbar />
        <Box w="100%" h="12vh" bg="#fff" ></Box>
        {/* Hero Section goes here... */}
        <Hero />
        <Courses />
        <Box w="100%" h={{base:"50px",md:"150px",lg:"180px" }}></Box>
        <Marquees />









      </Box>

    </>

  )
}

export default Home


