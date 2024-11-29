import React from 'react'
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Spacer, Text, Image, Divider, Button, Center } from "@chakra-ui/react";
import { LuFolder, LuUser } from "react-icons/lu";
import Rupee from "../../Logo/Courses_logo/Rupee.png";
import Placements from "../../Logo/Courses_logo/2.png";
import Instructer from "../../Logo/Courses_logo/5.png";
import Live from "../../Logo/Courses_logo/1.png";
import Access from "../../Logo/Courses_logo/3.png";
import SE from "../../Logo/Courses_logo/Se.png";
import DA from "../../Logo/Courses_logo/DA.png"
import { FaCheck } from "react-icons/fa";
import AI from "../../Logo/Courses_logo/AI.png";
import BA from "../../Logo/Courses_logo/BA.png";
const Courses = () => {
    return (
        <>
            <Box w="100%" h="auto" bg="#fff">


                <Box w={{ base: "90%", md: "80%", lg: "70%" }} m="auto" h="auto"
                // border={"1px solid green"}
                >

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
                                <TabPanel m="0" p='0' w="100%"
                                // border={"1px solid cyan"}
                                >
                                    <Text mt="20px" textAlign={{ base: "center", md: "center", lg: "center" }} fontSize={{ base: "20px", md: "20px", lg: "20px" }} color={"#000"} fontWeight={"700"}>Masterolgy's {"<->"} Pay-After-Placement Courses</Text>
                                    <Flex direction={{ base: "column", md: "column", lg: "row" }} w={{ base: "100%", md: "100%", lg: "100%" }} pt="30px" pb="10px" h="auto" m="auto"
                                    //  border={"1px solid cyan"}
                                    >
                                        <Flex w="100%" h="auto" mt="10px" mb="10px"  >
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



                                    <Flex
                                        //  border={"1px solid red"}
                                        gap="20px"
                                        flexDirection={{ base: "column", md: "column", lg: "row" }} w="100%" h={{ base: "auto", md: "auto", lg: "auto" }}>
                                        <Box w="100%" h="100%"
                                        // border={"1px solid yellow"} 
                                        // bg="red.200"
                                        >
                                            <Box border="0.5px solid #ccc" boxShadow={"xl"} py="5" px="5" m="auto" borderRadius={"xl"} w={{ base: "100%", md: "100%", lg: "100%" }} h="100%" >
                                                <Box w="60px" h="60px">
                                                    <Image src={SE} alt="Software engeneering.png" />
                                                </Box>

                                                <Text mt="5px" fontWeight={{ base: "600", md: "600", lg: "700" }} fontSize={"2xl"}>Software Development</Text>
                                                <Divider />
                                                <Box justifyContent={"left"} alignContent={'center'} alignItems={"center"} display={"flex"} flexDirection={"row"} w="100%" h="auto" mt="16px">
                                                    <Box px="1" py="1" bg="green.50" borderRadius={'50%'}>
                                                        <FaCheck size="14px" color='#69F0AE' />
                                                    </Box>
                                                    <Text fontWeight={{ base: "500", md: "500", lg: "500" }} fontSize={{ base: "14px" }} ml="5px">Become job-ready in 30-35 weeks.</Text>
                                                </Box>
                                                <Box justifyContent={"left"} alignContent={'center'} alignItems={"center"} display={"flex"} flexDirection={"row"} w="100%" h="auto" mt="16px">
                                                    <Box px="1" py="1" bg="green.50" borderRadius={'50%'}>
                                                        <FaCheck size="14px" color='#69F0AE' />
                                                    </Box>
                                                    <Text fontWeight={{ base: "500", md: "500", lg: "500" }} fontSize={{ base: "14px" }} ml="5px">Opportunities : <Text as="span" fontWeight={"bold"}>Full Stack Developer, Backend Developer, Software Engineer & much more.</Text></Text>
                                                </Box>

                                                <Center
                                                    // border={"1px solid red"}
                                                    mt="20px" mb="20px"
                                                >
                                                    <Button
                                                        bg="#fff"
                                                        transition={"0.3s ease"}
                                                        border={"1px solid #ff5757"}
                                                        _hover={{ bgColor: "red.100" }}
                                                        color={"#ff5757"}
                                                        h="45px" w="100%" m="auto" fontSize={"14px"}>VIEW DETAILES</Button>
                                                </Center>

                                            </Box>
                                        </Box>
                                        <Box w="100%" h="100%"
                                        //  border={"1px solid yellow"} 
                                        // bg="red.100"
                                        >
                                            <Box border="0.5px solid #ccc" boxShadow={"xl"} py="5" px="5" m="auto" borderRadius={"xl"} w={{ base: "100%", md: "100%", lg: "100%" }} h="100%" >
                                                <Box w="60px" h="60px">
                                                    <Image src={DA} alt="Software engeneering.png" />
                                                </Box>
                                                <Text mt="5px" fontWeight={{ base: "600", md: "600", lg: "700" }} fontSize={"2xl"}>Data Analytics</Text>
                                                <Divider />
                                                <Box justifyContent={"left"} alignContent={'center'} alignItems={"center"} display={"flex"} flexDirection={"row"} w="100%" h="auto" mt="16px">
                                                    <Box px="1" py="1" bg="green.50" borderRadius={'50%'}>
                                                        <FaCheck size="14px" color='#69F0AE' />
                                                    </Box>
                                                    <Text fontWeight={{ base: "500", md: "500", lg: "500" }} fontSize={{ base: "14px" }} ml="5px">Become job-ready in 30-35 weeks.</Text>
                                                </Box>
                                                <Box justifyContent={"left"} alignContent={'center'} alignItems={"center"} display={"flex"} flexDirection={"row"} w="100%" h="auto" mt="16px">
                                                    <Box px="1" py="1" bg="green.50" borderRadius={'50%'}>
                                                        <FaCheck size="14px" color='#69F0AE' />
                                                    </Box>
                                                    <Text fontWeight={{ base: "500", md: "500", lg: "500" }} fontSize={{ base: "14px" }} ml="5px">Opportunities : <Text as="span" fontWeight={"bold"}>Data Engineer, Data Analyst, Machine Learning Engineer & much more.</Text></Text>
                                                </Box>

                                                <Center
                                                    // border={"1px solid red"}
                                                    mt="20px" mb="20px"
                                                >
                                                    <Button
                                                        bg="#fff"
                                                        transition={"0.3s ease"}
                                                        border={"1px solid #ff5757"}
                                                        _hover={{ bgColor: "red.100" }}
                                                        color={"#ff5757"}
                                                        h="45px" w="100%" m="auto" fontSize={"14px"}>VIEW DETAILES</Button>
                                                </Center>
                                            </Box>
                                        </Box>
                                    </Flex>

                                </TabPanel>
                                <TabPanel m="0" p='0' w="100%"
                                // border={"1px solid cyan"}
                                >
                                    <Text mt='20px' textAlign={{ base: "center", md: "center", lg: "center" }} fontSize={{ base: "20px", md: "20px", lg: "20px" }} color={"#000"} fontWeight={"700"}>Masterolgy's {"<->"} IIT Partnership Courses</Text>
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


                                    <Flex
                                        //  border={"1px solid red"}
                                        gap="20px"
                                        flexDirection={{ base: "column", md: "column", lg: "row" }} w="100%" h={{ base: "auto", md: "auto", lg: "auto" }}>
                                        <Box w="100%" h="100%"
                                        //  border={"1px solid yellow"} 
                                        // bg="red.100"
                                        >
                                            <Box border="0.5px solid #ccc" boxShadow={"xl"} py="5" px="5" m="auto" borderRadius={"xl"} w={{ base: "100%", md: "100%", lg: "100%" }} h="100%" >
                                                <Box w="60px" h="60px">
                                                    <Image src={AI} alt="Software engeneering.png" />
                                                </Box>
                                                <Text mt="5px" fontWeight={{ base: "600", md: "600", lg: "700" }} fontSize={"2xl"}>Minor in Artificial
                                                    Intelligence</Text>
                                                <Divider />
                                                <Box justifyContent={"left"} alignContent={'center'} alignItems={"center"} display={"flex"} flexDirection={"row"} w="100%" h="auto" mt="16px">
                                                    <Box px="1" py="1" bg="green.50" borderRadius={'50%'}>
                                                        <FaCheck size="14px" color='#69F0AE' />
                                                    </Box>
                                                    <Text fontWeight={{ base: "500", md: "500", lg: "500" }} fontSize={{ base: "14px" }} ml="5px">15 program credits</Text>
                                                </Box>
                                                <Box justifyContent={"left"} alignContent={'center'} alignItems={"center"} display={"flex"} flexDirection={"row"} w="100%" h="auto" mt="16px">
                                                    <Box px="1" py="1" bg="green.50" borderRadius={'50%'}>
                                                        <FaCheck size="14px" color='#69F0AE' />
                                                    </Box>
                                                    <Text fontWeight={{ base: "500", md: "500", lg: "500" }} fontSize={{ base: "14px" }} ml="5px">64 live classes and practicals, 3 projects<Text as="span" fontWeight={"bold"} color="#4DB6AC"> Eligibility:</Text> <Text as="span" color="red.400">12th Pass + High School Logic & Math</Text></Text>
                                                </Box>
                                                <Box justifyContent={"left"} alignContent={'center'} alignItems={"center"} display={"flex"} flexDirection={"row"} w="100%" h="auto" mt="16px">
                                                    <Box px="1" py="1" bg="green.50" borderRadius={'50%'}>
                                                        <FaCheck size="14px" color='#69F0AE' />
                                                    </Box>
                                                    <Text fontWeight={{ base: "500", md: "500", lg: "500" }} fontSize={{ base: "20px" }} ml="5px">from IIT Ropar<Text as="span" fontSize={"14px"} fontWeight={"bold"} color="#000"> Duration:</Text> <Text fontSize={"14px"} as="span" color="red.400">9 Months</Text></Text>
                                                </Box>

                                                <Center
                                                    // border={"1px solid red"}
                                                    mt="20px" mb="20px"
                                                >
                                                    <Button
                                                        bg="#fff"
                                                        transition={"0.3s ease"}
                                                        border={"1px solid #ff5757"}
                                                        _hover={{ bgColor: "red.100" }}
                                                        color={"#ff5757"}
                                                        h="45px" w="100%" m="auto" fontSize={"14px"}>VIEW DETAILES</Button>
                                                </Center>
                                            </Box>
                                        </Box>

                                        <Box w="100%" h="100%"
                                        //  border={"1px solid yellow"} 
                                        // bg="red.100"
                                        >
                                            <Box border="0.5px solid #ccc" boxShadow={"xl"} py="5" px="5" m="auto" borderRadius={"xl"} w={{ base: "100%", md: "100%", lg: "100%" }} h="100%" >
                                                <Box w="60px" h="60px">
                                                    <Image src={BA} alt="Software engeneering.png" />
                                                </Box>
                                                <Text mt="5px" fontWeight={{ base: "600", md: "600", lg: "700" }} fontSize={"2xl"}>Minor in Business
                                                    Analytics
                                                </Text>
                                                <Divider />
                                                <Box justifyContent={"left"} alignContent={'center'} alignItems={"center"} display={"flex"} flexDirection={"row"} w="100%" h="auto" mt="16px">
                                                    <Box px="1" py="1" bg="green.50" borderRadius={'50%'}>
                                                        <FaCheck size="14px" color='#69F0AE' />
                                                    </Box>
                                                    <Text fontWeight={{ base: "500", md: "500", lg: "500" }} fontSize={{ base: "14px" }} ml="5px">16 program credits</Text>
                                                </Box>
                                                <Box justifyContent={"left"} alignContent={'center'} alignItems={"center"} display={"flex"} flexDirection={"row"} w="100%" h="auto" mt="16px">
                                                    <Box px="1" py="1" bg="green.50" borderRadius={'50%'}>
                                                        <FaCheck size="14px" color='#69F0AE' />
                                                    </Box>
                                                    <Text fontWeight={{ base: "500", md: "500", lg: "500" }} fontSize={{ base: "14px" }} ml="5px">3 terms & 2-week campus training<Text as="span" fontWeight={"bold"} color="#4DB6AC"> Eligibility:</Text> <Text as="span" color="red.400">12th Pass + High School Math</Text></Text>
                                                </Box>
                                                <Box justifyContent={"left"} alignContent={'center'} alignItems={"center"} display={"flex"} flexDirection={"row"} w="100%" h="auto" mt="16px">
                                                    <Box px="1" py="1" bg="green.50" borderRadius={'50%'}>
                                                        <FaCheck size="14px" color='#69F0AE' />
                                                    </Box>
                                                    <Text fontWeight={{ base: "500", md: "500", lg: "500" }} fontSize={{ base: "20px" }} ml="5px">from CCE, IIT Mandi<Text as="span" fontSize={"14px"} fontWeight={"bold"} color="#000"> Duration:</Text> <Text fontSize={"14px"} as="span" color="red.400">9 Months</Text></Text>
                                                </Box>

                                                <Center
                                                    // border={"1px solid red"}
                                                    mt="20px" mb="20px"
                                                >
                                                    <Button
                                                        bg="#fff"
                                                        transition={"0.3s ease"}
                                                        border={"1px solid #ff5757"}
                                                        _hover={{ bgColor: "red.100" }}
                                                        color={"#ff5757"}
                                                        h="45px" w="100%" m="auto" fontSize={"14px"}>VIEW DETAILES</Button>
                                                </Center>
                                            </Box>
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
