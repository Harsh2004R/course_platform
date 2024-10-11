import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import Navbar from "../Components/Navbar.jsx"
const Home = () => {
  return (

    <>
      <Box width={"100%"} h="500vh" border={"2px solid lime"}>
        <Navbar />
      </Box>
    </>

  )
}

export default Home
