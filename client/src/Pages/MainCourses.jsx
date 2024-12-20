import React from 'react'
import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import AuthUserNav from "../Components/AuthUserNav.jsx"

const MainCourses = () => {
    return (
        <>
            <AuthUserNav />
            <Box h="80px" w="100%"></Box>
            <Box backgroundColor="#fff" w={"100%"} px={{ base: "2.5%", md: "7%", lg: "8%" }} m="auto" h="100vh" >
                <Text fontSize={{ base: "3xl", md: "", lg: "" }} fontWeight={"500"}>Welcome Harsh! </Text>
                <Text fontSize={{ base: "", md: "", lg: "" }} fontWeight={""} color={"#757575"}>Take the first step by selecting a course</Text>
                <Divider py="10px" borderColor="#c2c2c2" />

                <Flex>
                    
                </Flex>

                <Box w="100%" overflowX="scroll" h="500px" border={"5px solid blue"}
                    sx={{
                        '::-webkit-scrollbar': {
                            display: 'none', // Hide scrollbar for Webkit-based browsers
                        },
                        '-ms-overflow-style': 'none', // Hide scrollbar for Internet Explorer
                        'scrollbar-width': 'none', // Hide scrollbar for Firefox
                    }}
                >
                    <Box w="5000px" h="100%" border={"5px solid yellow"}>
                        <Flex>
                            <Box w="300px" h="150px" bg="red"></Box>
                            <Box w="300px" h="150px" bg="blue"></Box>
                            <Box w="300px" h="150px" bg="green"></Box>
                            <Box w="300px" h="150px" bg="cyan"></Box>
                            <Box w="300px" h="150px" bg="coral"></Box>
                            <Box w="300px" h="150px" bg="lime"></Box>
                            <Box w="300px" h="150px" bg="yellow"></Box>
                            <Box w="300px" h="150px" bg="grey"></Box>
                            <Box w="300px" h="150px" bg="purple"></Box>
                            <Box w="300px" h="150px" bg="pink"></Box>
                           
                        </Flex>
                    </Box>
                </Box>


            </Box>
        </>
    )
}

export default MainCourses
