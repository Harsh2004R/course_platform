import React, { useState } from "react";
import { Box, Button, Flex, AspectRatio, Text, Center, Grid, Image } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import C1 from "../../Logo/Companies/C1.jpeg"
import C7 from "../../Logo/Companies/C7.png"
import C3 from "../../Logo/Companies/C3.png"

const videos = [
    "https://cdn.masaischool.com/masai-website/masai_is_building_a_great_solution_ankush_sachdeva_ceo_sharechat_1080p_679f7eaffd.mp4",
    "https://cdn.masaischool.com/masai-website/masai_partners_speak_nobrokerofficial_highly_recommends_hiring_masai_graduates_1080p_97dd09e7d4.mp4",
    "https://cdn.masaischool.com/masai-website/masai_being_a_solution_to_tech_hiring_masai_partners_speak_1080p_21acb9bcbb.mp4",
];
const VideoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <Flex direction={{ base: "column", md: "column", lg: "row" }} w="100%" bg="rgb(249,249,249)" h="auto" py="10px">
                <Box w="100%" h="auto">
                    <Box w={{ base: "100%", md: "100%", lg: "70%" }} mx="auto" my="10px">
                        <Text color={"#000"} fontSize={{ base: "2xl", md: "3xl", lg: "40px" }} fontWeight={{ base: "800", md: "800", lg: "800" }} textAlign={{ base: "center", md: "center", lg: "left" }}>
                            Our Students Are Creating Impact
                        </Text>
                        <Box display={{ base: "none", md: "none", lg: "block" }} w="100%" mx="auto" my="10px">
                            <Text color={"grey.100"} fontSize={{ base: "md", md: "xl", lg: "xl" }} textAlign={{ base: "center", md: "center", lg: "left" }}>
                                Get inspired by these stories.
                            </Text>
                            <Box my="10px"
                            // border={"1px solid red"}
                            >
                                <Button
                                    w="100px"
                                    bg="#fff"
                                    transition={"0.3s ease"}
                                    border={"1px solid #ff5757"}
                                    _hover={{ bgColor: "red.100" }}
                                    color={"#ff5757"}
                                    h="45px" m="auto" fontSize={"14px"}>VIEW ALL</Button>
                            </Box>

                        </Box>
                    </Box>
                </Box>
                <Box width="100%" maxWidth={{ base: "100%", md: "100%", lg: "100%" }} mx="auto" >
                    <Box zIndex={"100"} position={"relative"} width="100%" maxWidth={{ base: "98%", md: "500px", lg: "600px" }} mx="auto" >
                        <AspectRatio ratio={16 / 9}>
                            <Box as="video" src={videos[currentIndex]} controls borderRadius="lg" boxShadow="lg" />
                        </AspectRatio>
                        <Flex w="100%" top={"50%"} zIndex={"1000"} justifyContent={"space-between"} position={"absolute"} justify="space-between" align="center" mt="4">
                            <Button borderRadius={"50%"} p="2px" onClick={handlePrev} bg="white" boxShadow={"lg"}>
                                <MdKeyboardArrowLeft size="24px" />
                            </Button>
                            {/* <Text fontSize="lg" fontWeight="bold">
          Video {currentIndex + 1} / {videos.length}
        </Text> */}
                            <Button borderRadius={"50%"} p="2px" onClick={handleNext} bg="white" boxShadow={"lg"}>
                                <MdKeyboardArrowRight size="24px" />
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
            <Center py="50px" w="100%" h="auto" bg="rgb(249,249,249)" flexDirection={"column"}>
                <Grid
                    // border={"1px solid red"}
                    gap="10px" gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} w={{ base: "98%", md: "95%", lg: "85%" }} h="100%" >
                    <Box py="5px" px="20px" boxShadow={"xl"} borderRadius={"xl"} w="100%" h="300px" bg="white">

                        <Box w={{ base: "80px", md: "100px", lg: "120px" }} h={{ base: "30px", md: "100px", lg: "50px" }}
                            overflow="hidden"
                            position="relative"
                        >
                            <Image w="150%" h="140%" objectFit="cover"
                                objectPosition="center" src={C1} alt="" />
                        </Box>

                        <Text fontSize={{ base: "16px", md: "16px", lg: "15px" }}>
                            <Text color="#26C6DA" fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }} as="span">" {" "}</Text>Masterolgy does a great job of attracting ambitious folk and it shows in the hunger with which the grads chase their own improvement and career advancement. The curriculum is shaped such that its graduates...
                            <Text color="#26C6DA" fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }} as="span">{" "} "</Text>
                        </Text>
                        <Text mt="10px" fontWeight={"600"} fontSize={{ base: "15px", md: "15px", lg: "15px" }}>
                            Arya Adarsha Gautam

                        </Text>
                        <Text fontSize={{ base: "12px", md: "12px", lg: "12px" }}> CTO and Co-Founder -

                            BharatPe</Text>

                    </Box>
                    <Box py="5px" px="20px" boxShadow={"xl"} borderRadius={"xl"} w="100%" h="300px" bg="white">

                        <Box w={{ base: "80px", md: "100px", lg: "120px" }} h={{ base: "30px", md: "100px", lg: "50px" }}
                            overflow="hidden"
                            position="relative"
                        >
                            <Image w="150%" h="140%" objectFit="cover"
                                objectPosition="center" src={C3} alt="" />
                        </Box>

                        <Text fontSize={{ base: "16px", md: "16px", lg: "15px" }}>
                            <Text color="#26C6DA" fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }} as="span">" {" "}</Text>There are many platforms that bolster an individual's "knowledge" to show up to work and just do their tasks. But with Masterolgy , it is quite evident that the individuals are given a well-rounded education...
                            <Text color="#26C6DA" fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }} as="span">{" "} "</Text>
                        </Text>
                        <Text mt="10px" fontWeight={"600"} fontSize={{ base: "15px", md: "15px", lg: "15px" }}>
                            Anirban Majumdar


                        </Text>
                        <Text fontSize={{ base: "12px", md: "12px", lg: "12px" }}>
                            CTO and Co-Founder - Airmeet</Text>

                    </Box>
                    <Box py="5px" px="20px" boxShadow={"xl"} borderRadius={"xl"} w="100%" h="300px" bg="white">

                        <Box w={{ base: "80px", md: "100px", lg: "120px" }} h={{ base: "30px", md: "100px", lg: "50px" }}
                            overflow="hidden"
                            position="relative"
                        >
                            <Image w="150%" h="140%" objectFit="cover"
                                objectPosition="center" src={C7} alt="" />
                        </Box>

                        <Text fontSize={{ base: "16px", md: "16px", lg: "15px" }}>
                            <Text color="#26C6DA" fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }} as="span">" {" "}</Text>We were looking to hire entry-level developers and Masterolgy more than delivered. Our selection rate from Masterolgy's candidates is higher than other avenues of hiring and the process was completed in two day...
                            <Text color="#26C6DA" fontSize={{ base: "2xl", md: "2xl", lg: "4xl" }} as="span">{" "} "</Text>
                        </Text>
                        <Text mt="10px" fontWeight={"600"} fontSize={{ base: "15px", md: "15px", lg: "15px" }}>
                            Vamsee Mohan Kamabathula
                        </Text>
                        <Text fontSize={{ base: "12px", md: "12px", lg: "12px" }}>CTO and Co-Founder - IBM</Text>

                    </Box>
                </Grid>
                <Text fontWeight={"600"} _hover={{ textDecoration: "underline", cursor: "pointer" }} color={"red.500"} mt="10px">Read More</Text>
            </Center>
        </>
    );
};
export default VideoSlider



