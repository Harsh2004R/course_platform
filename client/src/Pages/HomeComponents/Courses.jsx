import React from 'react'
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import { LuFolder, LuUser } from "react-icons/lu";
import Rupee from "../../Logo/Courses_logo/Rupee.png";
import Placements from "../../Logo/Courses_logo/2.png";
import Instructer from "../../Logo/Courses_logo/5.png";
import Live from "../../Logo/Courses_logo/1.png";
import Access from "../../Logo/Courses_logo/3.png";
const Courses = () => {
    return (
        <>
            <Box w="100%" h="auto" bg="#fff">


                <Box w={{ base: "90%", md: "80%", lg: "70%" }} m="auto" h="auto" border={"1px solid green"}>

                    <Heading mt="40px" as="h3" letterSpacing={"0.8px"} color="#000" textAlign={"center"}>Explore a new career path</Heading>
                    <Flex
                        // border={"1px solid lime"}
                        mt="40px" alignContent={"center"} alignItems={"center"} justifyContent={'center'} w="100%" h="auto" >
                        <Tabs w="100%" display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} variant="enclosed">
                            <TabList>
                                <Tab borderRadius={"30px"} bg="skyblue" ><LuUser />  <Spacer w="5px" /> PAP Courses </Tab>
                                <Tab borderRadius={"30px"} bg="red.200"><LuFolder /> <Spacer w="5px" /> IIT Courses</Tab>
                            </TabList>
                            <TabPanels display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} alignContent={"center"}>
                                <TabPanel w="100%"
                                // border={"1px solid cyan"}
                                >
                                    <Text textAlign={{ base: "left", md: "center", lg: "center" }} fontSize={{ base: "20px", md: "20px", lg: "20px" }} color={"#000"} fontWeight={"700"}>Masterolgy's {"<->"} Pay-After-Placement Courses</Text>
                                    <Flex direction={{ base: "column", md: "column", lg: "row" }} w={{ base: "100%", md: "100%", lg: "100%" }} pt="30px" pb="10px" h="auto" m="auto"
                                    //  border={"1px solid cyan"}
                                    >
                                        <Flex w="100%" h="auto" mt="10px" mb="10px" >
                                            <Box w="50px" h="50px" borderRadius={"50%"}>
                                                <Image src={Rupee} w="100%" h="100%" alt="Rupee.logo" borderRadius={"50%"} />
                                            </Box>
                                            <Box flex="1" >
                                                <Text fontSize={{ base: "16px", md: "14px", lg: "16px" }} fontWeight={500}>Apply and study for ZERO upfront fee</Text>
                                            </Box>
                                        </Flex>
                                        <Flex w="100%" h="auto" mt="10px" mb="10px" >
                                            <Box w="50px" h="50px" borderRadius={"50%"}>
                                                <Image src={Placements} w="100%" h="100%" alt="Rupee.logo" borderRadius={"50%"} />
                                            </Box>
                                            <Box flex="1">
                                                <Text fontSize={{ base: "16px", md: "14px", lg: "16px" }} fontWeight={500}>Pay only when you get a job of 3.75LPA or more</Text>
                                            </Box>
                                        </Flex>
                                        <Flex w="100%" h="auto" mt="10px" mb="10px" >
                                            <Box w="50px" h="50px" borderRadius={"50%"}>
                                                <Image src={Instructer} w="100%" h="100%" alt="Rupee.logo" borderRadius={"50%"} />
                                            </Box>
                                            <Box flex="1">
                                                <Text fontSize={{ base: "16px", md: "14px", lg: "16px" }} fontWeight={500}>Taught by Masterolgy instructors & industry experts</Text>
                                            </Box>
                                        </Flex>
                                    </Flex>



                                    <Flex flexDirection={{ base: "column", md: "column", lg: "row" }} w="100%" h="55vh" border={"1px solid red"}>
                                        <Box w="100%" h="100%" border={"1px solid yellow"} bg="red.100">

                                        </Box>
                                        <Box w="100%" h="100%" border={"1px solid yellow"} bg="red.100">

                                        </Box>
                                    </Flex>

                                </TabPanel>
                                <TabPanel w="100%" border={"1px solid cyan"}>
                                    <Text textAlign={{ base: "left", md: "center", lg: "center" }} fontSize={{ base: "20px", md: "20px", lg: "20px" }} color={"#000"} fontWeight={"700"}>Masterolgy's {"<->"} IIT Partnership Courses</Text>
                                    <Flex direction={{ base: "column", md: "column", lg: "row" }} mt="20px" w={"100%"} pt="10px" pb="10px" h="auto"
                                    // border={"1px solid cyan"}
                                    >
                                        <Flex w="100%" h="50px" mt="10px" mb="10px" >
                                            <Box w="50px" h="auto" borderRadius={"50%"}>
                                                <Image src={Live} w="100%" h="100%" alt="Rupee.logo" borderRadius={"50%"} />
                                            </Box>
                                            <Box flex="1">
                                                <Text fontSize={{ base: "16px", md: "14px", lg: "16px" }} fontWeight={500}>Live lectures & evaluations by IIT professors</Text>
                                            </Box>
                                        </Flex>
                                        <Flex w="100%" h="auto" mt="10px" mb="10px" >
                                            <Box w="50px" h="50px" borderRadius={"50%"}>
                                                <Image src={Placements} w="100%" h="100%" alt="Rupee.logo" borderRadius={"50%"} />
                                            </Box>
                                            <Box flex="1">
                                                <Text fontSize={{ base: "16px", md: "14px", lg: "16px" }} fontWeight={500}>Placement assistance upon course completion</Text>
                                            </Box>
                                        </Flex>
                                        <Flex w="100%" h="auto" mt="10px" mb="10px" >
                                            <Box w="50px" h="50px" borderRadius={"50%"}>
                                                <Image src={Access} w="100%" h="100%" alt="Rupee.logo" borderRadius={"50%"} />
                                            </Box>
                                            <Box flex="1">
                                                <Text fontSize={{ base: "16px", md: "14px", lg: "16px" }} fontWeight={500}>Access to IIT email ID & ID card</Text>
                                            </Box>
                                        </Flex>
                                    </Flex>


                                    <Flex flexDirection={{ base: "column", md: "column", lg: "row" }} w="100%" h="55vh" border={"1px solid red"}>
                                        <Box w="100%" h="100%" border={"1px solid yellow"} bg="red.100">

                                        </Box>
                                        <Box w="100%" h="100%" border={"1px solid yellow"} bg="red.100">

                                        </Box>
                                    </Flex>
                                </TabPanel>

                            </TabPanels>
                        </Tabs>
                    </Flex>
                </Box>
            </Box>

        </>
    )
}

export default Courses
