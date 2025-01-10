import React from 'react';
import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import AuthUserNav from "../Components/AuthUserNav.jsx";
import getRandomFutureDate from '../Components/BatchDate.js';
import { MdOutlineCalendarToday } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

const Techs = [
    { img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_2_ea95eedf09.png", name: "HTML" },
    { img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_3_93dc2eb53c.png", name: "CSS" },
    { img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_4_cb6b9f298c.png", name: "Java Script" },
    { img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_5_ee6203e39c.png", name: "SQL" },
    { img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_9_477e3dd12b.png", name: "Java" },
    { img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_7_bfb3b74de6.png", name: "mongo" },
    { img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_8_3ad50b7cd8.png", name: "react" },
    { img: "https://masai-website-images.s3.ap-south-1.amazonaws.com/image_6_eabf1b90d9.png", name: "node" },
]
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
                    <Flex gap="20px" direction={{ base: "column", md: "column", lg: "column" }} w={{ base: "100%", md: "80%", lg: "75%" }} h="100%"
                    // border={"1px solid red"}
                    >
                        <Flex gap="20px" flexDirection={{ base: "column", md: "row", lg: "row" }} h="auto" w="100%"
                        // border={"5px solid red"}
                        >
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
                                    <MdOutlineCalendarToday size="25px" color="#fff" />
                                    <Text fontSize={{ base: "12px", md: "14px", lg: "14px" }} color="#fff" ml="5px" mr="10px">Mon-Sat • Full/Part time</Text>
                                    <FaRegClock size="25px" color="#fff" />
                                    <Text fontSize={{ base: "12px", md: "14px", lg: "14px" }} color="#fff" ml="5px">25-30 weeks</Text>

                                </Center>

                            </Center>
                        </Flex>

                        {/* econd Flex box --------------------------------------------------------------------------------------------->>>>>>>>>>>>>> */}

                        <Flex gap="20px" flexDirection={{ base: "column", md: "row", lg: "row" }} w="100%"
                        //  border={"5px solid cyan"}
                        >
                            <Center
                                // border={"5px solid coral"}
                                bgColor={"#A0E1E1"}
                                borderRadius={"lg"}
                                flexDirection="column"
                                w={{ base: "100%", md: "65%", lg: "68%" }} h={{ base: "550px", md: "620px", lg: "750px" }}
                            >
                                <Text mt="20px" textAlign={"center"} color={"#000"} fontWeight={"bold"} fontSize={{ base: "17px", md: "17px", lg: "18px" }}>
                                    What our grads have to say
                                </Text>
                                <Flex w={{ base: "98%", md: "95%", lg: "95%" }} m="auto" h="75%" gap={{ base: "5px", md: "8px", lg: "10px" }}
                                // border={"1px solid blue"}
                                >
                                    <Box p={{ base: "2", md: "3", lg: "7" }} borderRadius={"lg"} w="50%" h="100%" m="auto" bg="#fff">
                                        <Box w="100%" h={{ base: "160px", md: "200px", lg: "270px" }} >
                                            <Image w="100%" h="100%" src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Harmit_2d4139a8b7.png" alt="Aluminies" />
                                        </Box>
                                        <Text mt="20px" fontSize={{ base: "16px", md: "20px", lg: "22px" }} textAlign={"center"}>"With Masterolgy providing the latest knowledge in tech with 11-11-6"</Text>

                                    </Box>
                                    <Box p={{ base: "2", md: "3", lg: "7" }} borderRadius={"lg"} w="50%" h="100%" m="auto" bg="#fff">
                                        <Box w="100%" h={{ base: "160px", md: "200px", lg: "270px" }} >
                                            <Image w="100%" h="100%" src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Pallavi_Jain_4d275fe4c2.png" alt="Aluminies" />
                                        </Box>
                                        <Text mt="20px" fontSize={{ base: "16px", md: "20px", lg: "22px" }} textAlign={"center"}>"Transitioning from a non-tech background, I studied entirely from"</Text>

                                    </Box>
                                </Flex>
                            </Center>
                            <Center
                                // border={"5px solid coral"}
                                bgColor={"#CACFD5"}
                                borderRadius={"lg"}
                                flexDirection="column"
                                boxShadow="inset 0 0 200px rgba(0, 0, 0, 0.1)"
                                w={{ base: "100%", md: "35%", lg: "32%" }} h={{ base: "550px", md: "620px", lg: "750px" }}
                            >
                                <Text textAlign={"center"} color={"#000"} fontWeight={"bold"} fontSize={{ base: "2xl", md: "2xl", lg: "26px" }}>
                                    Dream companies for your career
                                </Text>

                                <Center py={{ base: "30px", md: "80px", lg: "120px" }} flexDirection="column" gap="10px">
                                    <Center borderRadius={"md"} w="80%" bg="#fff" > <Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/image_19_29f19951d2.png" alt="" /></Center>
                                    <Center borderRadius={"md"} m="auto" bg="#fff" w="80%" px="2" py="2"><Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/ibm_1_1011965527.png" alt="" /> </Center>
                                    <Center borderRadius={"md"} w="80%" bg="#fff" px="2" py="2"><Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/image_20_20764ddbc2.png" alt="" /></Center>
                                    <Center borderRadius={"md"} w="80%" bg="#fff" px="2" py="2"><Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/image_21_b149d87e63.png" alt="" /></Center>
                                    <Center borderRadius={"md"} w="80%" bg="#fff" px="2" py="2"> <Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/image_22_db80089952.png" alt="" /></Center>
                                </Center>
                                <Text>& 320+ more</Text>
                                <Text>leading firms hiring</Text>
                            </Center>
                        </Flex>

                    </Flex>
                    <Flex
                        border={"1px solid blue"}
                        gap="10px" p="2" alignItems={"center"} justifyContent={"space-between"} direction={{ base: "column", md: "column", lg: "column" }} w={{ base: "100%", md: "20%", lg: "25%" }} h={{ base: "auto", md: "auto", lg: "auto" }}>

                        <Flex bg="#A0E1E1" justifyContent={"center"} borderRadius={"lg"} alignContent={"center"} alignItems={"center"} gap="15px" flexDirection={"column"} w="100%" border={"2px solid coral"}>
                            <Text textAlign={"center"} fontWeight={"700"} fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}>What you'll learn</Text>

                            {
                                Techs.map((el, i) =>
                                (

                                    <Center key={i} borderRadius={"md"} justifyContent={"space-evenly"} bg="#fff" w="60%" h={{ base: "60px", md: "65px", lg: "65px" }}>
                                        <Image src={el.img} alt={el.name} />
                                        <Text>{el.name}</Text>
                                    </Center>

                                )
                                )
                            }

                        </Flex>
                        <Center borderRadius={"lg"} bg="#F8FE9E" w="100%" h="50vh" flexDirection={"column"} >
                            <Text textAlign={"center"} fontWeight={"700"} fontSize={{base:"16px",md:"16px",lg:"16px"}}>
                                You can now become
                            </Text>
                            <Text pt="10px" pb="10px" color="#4A9173" textAlign={"center"} fontWeight={"700"} fontSize={{base:"xl",md:"2xl",lg:"18px"}}>
                                Web Developer
                            </Text>
                            <Text textAlign={"center"} fontWeight={"700"} fontSize={{base:"16px",md:"16px",lg:"16px"}}>
                                at ₹0 upfront fee
                            </Text>
                        </Center>
                    </Flex>


                </Flex>

            </Center>
            <Box h="80px" w="100%"></Box>
            <Box position={"fixed"} bg="#fff" zIndex="1000" bottom="0" w="100%" h="70px" boxShadow="rgba(0, 0, 0, 0.15) 2px 0px 4px 4px" >
                <Flex w={{ base: "100%", md: "80%", lg: "80%" }} m="auto" h="100%" >
                    <Box w="50%" display={{ base: "none", md: "flex", lg: "flex" }} h="100%">
                    </Box>
                    <Center flex="1" h="100%">
                        <Text fontSize={{ base: "11px", md: "12px", lg: "16px" }}>Admission ongoing for batch starting on
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
