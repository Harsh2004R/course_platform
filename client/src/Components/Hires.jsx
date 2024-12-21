import React, { useState, useEffect } from "react";
import { Box, Text, VStack, Image, HStack, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHandsClapping } from "react-icons/fa6";
const MotionBox = motion(Box);

const notifications = [
    {
        title: "Mohd Javed got hired at Kraft Heinz",
        image: "https://s3.ap-south-1.amazonaws.com/levelup-app-production/hireOfTheWeekProfileImageUrl/659500d05eaf57de6c862cca_1733392310429",
    },
    {
        title: "Abdulla Azeez got hired at Hyperface",
        image: "https://s3.ap-south-1.amazonaws.com/levelup-app-production/hireOfTheWeekProfileImageUrl/659500d05eaf57de6c862cca_1733392497577",
    },
    {
        title: "Shivam Dubey got hired at Conscent AI",
        image: "https://s3.ap-south-1.amazonaws.com/levelup-app-production/hireOfTheWeekProfileImageUrl/659500d05eaf57de6c862cca_1731394671113",
    },
    {
        title: "B Varshitha got hired at NoBroker",
        image: "https://s3.ap-south-1.amazonaws.com/levelup-app-production/hireOfTheWeekProfileImageUrl/659500d05eaf57de6c862cca_1730182916244",
    },
    {
        title: "Pranoti Kadam got hired at AgileDock",
        image: "https://s3.ap-south-1.amazonaws.com/levelup-app-production/hireOfTheWeekProfileImageUrl/659500d05eaf57de6c862cca_1730182916244",
    },
];

const Hires = () => {
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prevIndex) => (prevIndex + 1) % notifications.length);
        }, 3000); // Change message every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    const animationVariants = {
        hidden: { opacity: 0, y: 50 }, // Starts below
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Moves to original position
        exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }, // Moves upward
    };

    return (
        <>
            <VStack
                position={"absolute"}
                w={{ base: "100%", md: "80%", lg: "80%" }}
                right="0"
                h="30vh"
                spacing={4}
                align="center"
                justify="center"
            >
                {/* Notification Box */}
                <MotionBox
                    key={currentMessage}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={animationVariants}
                    bg="#fff"
                    p={8}
                    zIndex="3"
                    borderRadius="md"
                    w="fit-content"
                    textAlign="center"
                    position="relative"
                    boxShadow={
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                    }
                >
                    <HStack>
                        <Image
                            src={notifications[currentMessage].image}
                            alt="Notification Image"
                            boxSize="50px"
                            borderRadius="full"
                        />
                        <Flex>
                            <Text fontSize="lg" textAlign={"left"} fontWeight="500">
                                {notifications[currentMessage].title}

                            </Text>
                            <Text ml="5px" fontSize={"2xl"}>
                                <FaHandsClapping color="#67b4e6" />
                            </Text>

                        </Flex>
                    </HStack>
                </MotionBox>

                {/* Layered Background Boxes */}
                <Box
                    borderRadius="lg"
                    w="95%"
                    mt="20px"
                    h="50%"
                    bg="#fff"
                    position="absolute"
                    top="50px"
                    zIndex="2"
                    boxShadow={
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                    }
                ></Box>
                <Box
                    borderRadius="lg"
                    w="85%"
                    h="50%"
                    bg="#fff"
                    position="absolute"
                    top="80px"
                    zIndex="1"
                    boxShadow={
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                    }
                ></Box>
                <Box
                    borderRadius="lg"
                    w="75%"
                    h="40%"
                    bg="#fff"
                    position="absolute"
                    top="110px"
                    zIndex="0"
                    boxShadow={
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                    }
                ></Box>
            </VStack>
            
        </>
    );
};

export default Hires;
