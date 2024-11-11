import { Box, Center, Container } from '@chakra-ui/react'
import React from 'react'
import Navbar from "../../Components/Navbar.jsx"
import Hero from '../HomeComponents/Hero.jsx'
import Courses from './Courses.jsx'
const Home = () => {
  return (

    <>

      <Box w="100%" h="300vh" >
        <Navbar />
        <Box w="100%" h="12vh" bg="#fff" ></Box>
        {/* Hero Section goes here... */}
        <Hero />
        <Courses />








      </Box>

    </>

  )
}

export default Home
