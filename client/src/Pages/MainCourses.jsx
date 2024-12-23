import React from 'react'
import { Box, Button, Center, Divider, Flex, Grid, Image, Text, } from '@chakra-ui/react'
import AuthUserNav from "../Components/AuthUserNav.jsx"
import { FaCheck } from "react-icons/fa";
import Hires from '../Components/Hires.jsx';
import Community from "../Logo/Our_Community.png"

const data = [
    {
        course_image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/course_1_729dcbc333.png",
        course_name: "Software Development",
        fee: "₹0 Upfront Fees",
        coding_required: "No prior coding experience required",
        course_duration: "Become job-ready in 25-30 weeks.",
        Opportunities: "Opportunities : Full Stack Developer, Backend Developer, Software Engineer & much more.",
        backGroundColor: "#D0E4E1",
    },
    {
        course_image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/course_2_5e43f7a50d.png",
        course_name: "Data Science",
        fee: "₹0 Upfront Fees",
        coding_required: "No prior coding experience required",
        course_duration: "Become job-ready in 25-30 weeks.",
        Opportunities: "Opportunities : Full Stack Developer, Backend Developer, Software Engineer & much more.",
        backGroundColor: "#CCE5ED",
    },
    {
        course_image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/course_3_27ad8f9a8a.png",
        course_name: "Digital Marketing",
        fee: "₹0 Upfront Fees",
        coding_required: "No prior coding experience required",
        course_duration: "Become job-ready in 25-30 weeks.",
        Opportunities: "Opportunities : Full Stack Developer, Backend Developer, Software Engineer & much more.",
        backGroundColor: "#F7DED5",
    },
    {
        course_image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/course_4_2d7fac614f.png",
        course_name: "Business Analytics",
        fee: "₹0 Upfront Fees",
        coding_required: "No prior coding experience required",
        course_duration: "Become job-ready in 25-30 weeks.",
        Opportunities: "Opportunities : Full Stack Developer, Backend Developer, Software Engineer & much more.",
        backGroundColor: "#FAE9D3",
    },
    {
        course_image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Course_icon_ezgif_com_png_to_webp_converter_a208682b2a.webp",
        course_name: "Programming 101",
        fee: "₹0 Upfront Fees",
        coding_required: "No prior coding experience required",
        course_duration: "Become job-ready in 25-30 weeks.",
        Opportunities: "Opportunities : Full Stack Developer, Backend Developer, Software Engineer & much more.",
        backGroundColor: "#DFC9ED",
    },
    {
        course_image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/FileCode.png",
        course_name: "Competitive Programming",
        fee: "₹0 Upfront Fees",
        coding_required: "No prior coding experience required",
        course_duration: "Become job-ready in 25-30 weeks.",
        Opportunities: "Opportunities : Full Stack Developer, Backend Developer, Software Engineer & much more.",
        backGroundColor: "#F2F9F6",
    },
    // {
    //     course_image: "",
    //     course_name: "",
    //     fee: "",
    //     coding_required: "",
    //     course_duration: "",
    //     Opportunities: "",
    //     backGroundColor: "",
    // },

]
const MainCourses = () => {
    return (
        <>
            <AuthUserNav />
            <Box h="80px" w="100%"></Box>
            <Box backgroundColor="#fff" w={"100%"} px={{ base: "2.5%", md: "7%", lg: "8%" }} m="auto" h="100vh" >
                <Text fontSize={{ base: "3xl", md: "", lg: "" }} fontWeight={"500"}>Welcome Harsh! </Text>
                <Text fontSize={{ base: "", md: "", lg: "" }} fontWeight={""} color={"#757575"}>Take the first step by selecting a course</Text>
                <Divider my="20px" borderColor="#c2c2c2" />
                <Text mb="10px" fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }} fontWeight={"600"}>Masterolgy courses</Text>
                <Flex
                    // border={"2px solid yellow"}
                    h={{ base: "auto", md: "auto", lg: "auto" }}
                    direction={{ base: "column", md: "column", lg: "row" }}
                    w={"100%"}

                >

                    <Grid
                        // border="1px solid red"
                        overflowX={{ base: "scroll", md: "scroll", lg: "hidden" }}
                        sx={{
                            '::-webkit-scrollbar': {
                                display: 'none', // Hide scrollbar for Webkit-based browsers
                            },
                            '-ms-overflow-style': 'none', // Hide scrollbar for Internet Explorer
                            'scrollbar-width': 'none', // Hide scrollbar for Firefox
                        }}
                        gap={{ base: "20px", md: "20px", lg: "30px" }} gridTemplateColumns={{ base: "repeat(6,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)" }} w={{ base: "100%", md: "100%", lg: "60%" }} h="100%"  >

                        {
                            data.map((el, i) => (
                                <Box
                                    borderRadius="10px"
                                    px="15px"
                                    py="15px"
                                    // border="1px solid cyan"
                                    key={i}
                                    w={{ base: "300px", md: "320px", lg: "100%" }}
                                    h="auto"
                                    backgroundColor={el.backGroundColor}
                                >
                                    <Box
                                        mt="15px"
                                        backgroundImage={`url(${el.course_image})`}
                                        backgroundSize="contain"
                                        backgroundRepeat="no-repeat"
                                        backgroundPosition="center"
                                        w="50px" h="50px">

                                    </Box>
                                    <Text fontSize={"15px"} fontWeight={"700"}>{el.course_name}</Text>
                                    <Divider mt="5px" mb="5px" borderColor={"#aaa"} />
                                    <Flex alignItems="center" mb="5px">
                                        <Box px="1" py="1" bg="green.50" borderRadius="50%" display="inline-flex" alignItems="center" justifyContent="center">
                                            <FaCheck size="10px" color="#6FCD9E" />
                                        </Box>
                                        <Text fontSize={"12px"} fontWeight={"500"} t ml="10px">{el.fee}</Text>
                                    </Flex>
                                    <Flex alignItems="center" mb="5px">
                                        <Box px="1" py="1" bg="green.50" borderRadius="50%" display="inline-flex" alignItems="center" justifyContent="center">
                                            <FaCheck size="10px" color="#6FCD9E" />
                                        </Box>
                                        <Text fontSize={"12px"} fontWeight={"500"} ml="10px">{el.coding_required}</Text>
                                    </Flex>
                                    <Flex alignItems="center" mb="5px">
                                        <Box px="1" py="1" bg="green.50" borderRadius="50%" display="inline-flex" alignItems="center" justifyContent="center">
                                            <FaCheck size="10px" color="#6FCD9E" />
                                        </Box>
                                        <Text fontSize={"12px"} fontWeight={"500"} ml="10px">{el.course_duration}</Text>
                                    </Flex>
                                    <Flex alignItems="center" mb="5px">
                                        <Box px="1" py="1" bg="green.50" borderRadius="50%" display="inline-flex" alignItems="center" justifyContent="center">
                                            <FaCheck size="10px" color="#6FCD9E" />
                                        </Box>
                                        <Text fontSize={"12px"} fontWeight={"500"} ml="10px">{el.Opportunities}</Text>
                                    </Flex>
                                    <Center py="15px">
                                        <Button
                                            bg="#fff"
                                            transition="0.3s ease"
                                            border="1px solid #d90025"
                                            _hover={{ bgColor: "#FEDFE5" }}
                                            color="#ff5757"
                                            h="45px"
                                            w="90%"
                                            m="auto"
                                            fontSize="16px"
                                        >
                                            VIEW DETAILS
                                        </Button>
                                    </Center>
                                </Box>
                            ))
                        }

                    </Grid>
                    <Box position={"relative"} w={{ base: "100%", md: "100%", lg: "40%" }} h="80vh"

                    >
                        <Hires />
                        <Box position={"absolute"} bottom={"0"} w="100%" h="250px" >
                            <Box position={{base:"relative",md:"relative",lg:"absolute"}}  right={{base:"0",md:"0",lg:"3"}} borderRadius={"lg"} w={{ base: "100%", md: "450px", lg: "75%" }} m="auto" h={{ base: "90%", md: "250px", lg: "250px" }} border={"1px solid #ccc"}>
                                <Image borderRadius={"lg"} src={Community} h="100%" w="100%" alt="community" />
                            </Box>
                        </Box>
                    </Box>
                </Flex>
{/* adding fake comment ---*/}
{/* adding fake cmment 2 */}




            </Box>
        </>
    )
}

export default MainCourses
