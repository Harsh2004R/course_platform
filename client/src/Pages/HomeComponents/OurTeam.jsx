import React from 'react';
import { Box, Button, Center, Image, Flex, Text } from '@chakra-ui/react';
import homeBG1 from "../../Logo/BG-Images/homeBG1.jpg";
import { HiArrowLongRight } from "react-icons/hi2";
import US1 from "../../assets/Us/US1.png";
import US2 from "../../assets/Us/US2.png";
import US3 from "../../assets/Us/US3.png";
import US4 from "../../assets/Us/US4.png";
import US5 from "../../assets/Us/US5.png";
import US6 from "../../assets/Us/US6.png";
const OurTeam = () => {
    return (
        <Box
            // border={"2px solid cyan"}
            borderBottom={"7px solid #7182F4"}
            bgImage={`url(${homeBG1})`}
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center"
            w="100%" h={{ base: "85vh", md: "90vh", lg: "80vh" }}
        >
            <Box w="100%" h={"15%"} display={{ base: "none", md: "none", lg: "block" }}>

            </Box>
            <Flex
                // border={"2px solid #000"}
                m="auto" h={{ base: "100%", md: "100%", lg: "80%" }} w={{ base: "98%", md: "95%", lg: "90%" }} direction={{ base: "column", md: "row", lg: "row" }}>
                <Flex justifyContent={"space-between"} direction={"column"} h={{ base: "90%", md: "95%", lg: "100%" }}
                    // border={"1px solid green"}
                    w={{ base: "100%", md: "100%", lg: "100%" }} >
                    <Box
                        // border={"2px solid #000"}
                        h={{ base: "35%", md: "40%", lg: "30%" }}
                        w="100%"
                    >
                        <Text color="#000" fontWeight={{ base: "600", md: "600", lg: "700" }} fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
                            Rise above your challenges
                        </Text>
                        <Text mt="-10px" color="#BE3A47" fontWeight={{ base: "600", md: "600", lg: "700" }} fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>Join the tribe</Text>


                        <Button
                            bg="transparent"
                            transition={"0.3s ease"}
                            border={"1px solid #ff5757"}
                            _hover={{ bgColor: "red.100" }}
                            color={"#ff5757"}
                            h="42px" w={"auto"} m="auto" fontSize={"14px"}>JOIN COMMUNITY <HiArrowLongRight size="20px" /></Button>

                    </Box>
                    <Flex
                        // border={"2px solid #dadada"}
                        h={{ base: "65%", md: "60%", lg: "100%" }}
                        w="100%" direction={"row"} justifyContent={{ base: "space-between", md: "space-evenly", lg: "space-evenly" }}>

                        <Flex direction={"column"} w={{ base: "38%", md: "35%", lg: "35%" }} bg="transparent" h="100%">
                            <Box w="100%" h={{ base: "55%", md: "55%", lg: "58%" }} >

                            </Box>
                            <Box w="100%" h={{ base: "45%", md: "45%", lg: "42%" }} >
                                <Image w="100%" h="100%" src={US1} alt="" />
                            </Box>
                        </Flex>
                        <Box w={{ base: "60%", md: "60%", lg: "60%" }} bg="grey" h="100%">
                            <Image w="100%" h="100%" src={US2} alt="" />
                        </Box>
                    </Flex>

                </Flex>
                <Flex 
                // border={"1px solid red"}
                h="100%" justifyContent={"space-between"} 
                direction={"column"} w={{ base: "100%", md: "100%", lg: "100%" }} >
                    <Flex
                        // border={"1px solid cyan"}
                        h="49%"
                        justifyContent={"space-between"}
                        w="100%"
                    >
                        <Box
                            w={{ base: "58%", md: "60%", lg: "66%" }}
                            // border={"2px solid coral"}
                            h="100%"
                            p="4px"
                        >
                            <Image src={US3} alt="img.png" w="100%" h="100%" />
                        </Box>
                        <Box
                            w={{ base: "40%", md: "38%", lg: "32%" }}
                            // border={"2px solid coral"}
                            h={{ base: "75%", md: "90%", lg: "100%" }}
                            m={{ base: "auto", md: "auto", lg: "0px" }}
                        >
                            <Image src={US4} alt="img.png" w="100%" h="100%" />
                        </Box>
                    </Flex>
                    <Flex
                        // border={"1px solid cyan"}
                        h="49%"
                        justifyContent={"space-between"}
                        w="100%">
                        <Box
                            w={{ base: "40%", md: "38%", lg: "32%" }}
                            // border={"2px solid coral"}
                            h={{ base: "75%", md: "90%", lg: "100%" }}
                            m={{ base: "auto", md: "auto", lg: "0px" }}

                        >
                            <Image src={US5} alt="img.png" w="100%" h="100%" />
                        </Box>
                        <Box
                             w={{ base: "58%", md: "60%", lg: "66%" }}
                            // border={"2px solid coral"}
                             p="4px"
                            h="100%"
                        >
                            <Image src={US6} alt="img.png" w="100%" h="100%" />
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

        </Box>
    )
}

export default OurTeam
