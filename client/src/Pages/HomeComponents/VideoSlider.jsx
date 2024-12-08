import React, { useState } from "react";
import { Box, Button, Flex, AspectRatio, Text, Center } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


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
                            <MdKeyboardArrowLeft size="24px"/>
                        </Button>
                        {/* <Text fontSize="lg" fontWeight="bold">
          Video {currentIndex + 1} / {videos.length}
        </Text> */}
                        <Button borderRadius={"50%"} p="2px" onClick={handleNext} bg="white" boxShadow={"lg"}>
                            <MdKeyboardArrowRight size="24px"/>
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};
export default VideoSlider



