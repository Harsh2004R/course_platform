import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Courses = () => {
    return (
        <>
            <Box w="100%" h="100vh" bg="#fff">


                <Box w={{ base: "90%", md: "80%", lg: "70%" }} m="auto" h="100vh" border={"1px solid green"}>

                    <Heading mt="40px" as="h3" letterSpacing={"0.8px"} color="#000" textAlign={"center"}>Explore a new career path</Heading>

                </Box>
            </Box>

        </>
    )
}

export default Courses
