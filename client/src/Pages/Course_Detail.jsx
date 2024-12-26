import React from 'react';
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import AuthUserNav from "../Components/AuthUserNav.jsx";
import getRandomFutureDate from '../Components/BatchDate.js';
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
const Course_Detail = () => {
    const BatchDate = getRandomFutureDate();
    return (

        <>
            <AuthUserNav />
            <Box h="80px" w="100%" bg="#fff"></Box>
            <Center
                // border={"2px solid cyan"} 
                w="100%" h="auto" bg="#fff" >

                <Flex
                    direction={{ base: "column", md: "row", lg: "row" }}
                    // border={"2px solid yellow"}
                    gap="20px"
                    w={{ base: "95%", md: "90%", lg: "85%" }} h="100%" >
                    <Flex gap="20px" direction={{ base: "column", md: "row", lg: "row" }} w={{ base: "100%", md: "80%", lg: "75%" }} h="100%" border={"1px solid red"}>
                        <Center
                            // border={"5px solid coral"}
                            bgColor={"#F8FE9E"}
                            borderRadius={"lg"}
                            flexDirection="column"
                            w={{ base: "100%", md: "35%", lg: "32%" }} h={{ base: "200px", md: "240px", lg: "350px" }}
                        >
                            <Text textAlign={"center"} color={"#000"} fontWeight={"bold"} fontSize={{ base: "17px", md: "17px", lg: "18px" }}>
                                Starting salary for Software Developer
                            </Text>
                            <Text color={"#4A9173"} textAlign={"center"} fontWeight={"bold"} fontSize={{ base: "28px", md: "26px", lg: "26px" }}>~ ₹6.5 LPA
                            </Text>
                        </Center>
                        <Center
                            // border={"5px solid coral"}
                            bgColor={"#35AD9D"}
                            borderRadius={"lg"}
                             flexDirection="column"
                            boxShadow="inset 0 0 200px rgba(0, 0, 0, 0.4)"
                            w={{ base: "100%", md: "65%", lg: "68%" }} h={{ base: "270px", md: "240px", lg: "350px" }}
                        >
                            <Text textAlign={"center"} color={"#fff"} fontWeight={"bold"} fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}>
                            Master Software Development
                            </Text>

                            <Center py="10px">
                            <MdOutlineCalendarToday  size="25px" color="#fff"/>
                            <Text fontSize={{base:"12px",md:"14px",lg:"14px"}} color="#fff" ml="5px" mr="10px">Mon-Sat • Full/Part time</Text>
                            <FaRegClock size="25px" color="#fff"/>
                            <Text fontSize={{base:"12px",md:"14px",lg:"14px"}} color="#fff" ml="5px">25-30 weeks</Text>
                            
                            </Center>
                            
                        </Center>
                    </Flex>
                    <Flex gap="10px" direction={{ base: "column", md: "row", lg: "row" }} w={{ base: "100%", md: "20%", lg: "25%" }} h="100%" border={"1px solid blue"}>

                    </Flex>

                </Flex>

            </Center>
            <Box h="80px" w="100%"></Box>
            <Box position={"fixed"} zIndex="1000" bottom="0" w="100%" bg="#fff" h="70px" boxShadow="rgba(0, 0, 0, 0.15) 2px 0px 4px 4px" >
                <Flex w={{ base: "100%", md: "80%", lg: "80%" }} m="auto" h="100%" >
                    <Box w="50%" display={{ base: "none", md: "flex", lg: "flex" }} h="100%">
                    </Box>
                    <Center flex="1" h="100%">
                        <Text fontSize={{ base: "11px", md: "12px", lg: "14px" }}>Admission ongoing for batch starting on
                            <Text as="span" fontWeight={"bold"} color={"#6E71CC"}> {BatchDate}</Text>
                        </Text>
                        <Button fontSize={{ base: "11px", md: "12px", lg: "16px" }} ml="10px" bgColor={"#2D8CCA"} px="20px" _hover={{ backgroundColor: "#1647A5" }} textColor={"#fff"} py="17px">
                            PROCEED
                        </Button>

                    </Center>
                </Flex>
            </Box>
        </>
    )
}

export default Course_Detail;
