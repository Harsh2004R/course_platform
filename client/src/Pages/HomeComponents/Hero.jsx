import React, { useState, useEffect } from 'react'
import { Box, Button, Center, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

const Primary_Testimonial = (props) => {
    const { beforeText, afterText, isTransitioning } = props;

    return (
        <Stack
            position={"absolute"}
            zIndex={"3"}
            bg='#efefef'
            top={{ base: "10%", md: "10%", lg: "20%" }}
            left={"10%"}
            w={{ base: "32%", md: "35%", lg: "30%" }}
            boxShadow={'lg'}
            p={1}
            rounded={'xl'}
            align={'center'}
            border={"2px solid #03a9f4"}
            opacity={isTransitioning ? 0 : 1}  // Add opacity transition
            transition={"opacity 0.5s ease-in-out"}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: '#efefef',
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            <Box>
                <Flex height={{ base: "75px", md: "80px", lg: "100px" }} align="center">
                    <Flex direction={"column"}>
                        <Heading as={'h3'} fontSize={{ base: "sm", md: "md", lg: "md" }} color="black">
                            Before
                        </Heading>
                        <Text fontSize="10px" color="black">
                            {beforeText}
                        </Text>
                    </Flex>
                    <Divider ml="3px" mr="3px" orientation="vertical" borderColor="#DADADA" borderWidth="1px" />
                    <Flex direction={"column"}>
                        <Heading as={'h3'} fontSize={{ base: "sm", md: "md", lg: "md" }} color="black">
                            After
                        </Heading>
                        <Text fontSize="10px" color="black">
                            {afterText}
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Stack>
    )
}

const Secondery_Testimonial = (props) => {
    const { quote, name, isTransitioning } = props;

    return (
        <Stack
            position={"absolute"}
            zIndex={"3"}
            bg='#efefef'
            bottom="10%"
            w={{ base: "55%", md: "65%", lg: "70%" }}
            boxShadow={'lg'}
            p={1}
            rounded={'xl'}
            border={"2px solid #03a9f4"}
            opacity={isTransitioning ? 0 : 1}
            transition={"opacity 0.5s ease-in-out"}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: '#efefef',
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            <Heading color="#555555" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>{name}</Heading>
            <Text
                as="span"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                color="black"
                fontWeight="medium"
                display="inline"
                textAlign={"justify"}
                letterSpacing={"0.5px"}
            >
                {quote}
            </Text>
            {/* <Text
                as="span"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                color="black"
                fontWeight="medium"
                display="inline"
                textAlign={"justify"}
                letterSpacing={"0.5px"}
            >
                {name}
            </Text> */}
        </Stack>
    )
}

const Hero = () => {
    const images = [
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Aparna_Singh_007855ef38.png",
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Harshit_Tripathi_4defe7c5e9.png",
        "https://www.masaischool.com/images/new-homepage/banner-student-image1.webp",
        "https://masai-website-images.s3.ap-south-1.amazonaws.com/Aman_Kashyap_f13c65dc1c.png"
    ];

    const beforeTexts = [
        "College Dropout",
        "Delivery Partner",
        "SSC Aspirant",
        "Intermediat student"
    ];

    const afterTexts = [
        "Application Engineer",
        "SDE (Jio)",
        "SDE - I (AWS)",
        "Full Stack Dev at - Swiggy"
    ];

    const quotes = [
        "I became the architect of my destiny, shaping dreams into reality with every line of code I wrote.Thanks to Masterolgy",
        "I was able to learn coding and now work as a SR. software engineer.",
        "Masterolgy gave me the confidence to pursue my dreams.",
        "I learnt a lot from Masterolgy i.e discipline, time management and professionalism."
    ];
    const names = [
        "Aaira Sindh",
        "Mukund Patil",
        "Shlok Sharma",
        "Kripal Sheikh",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsTransitioning(true);  // Start transition (fade-out)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsTransitioning(false);
            }, 500);  // Duration for fade-out
        }, 8000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <Box
            // border={"1px solid #f0f0f0"}
            w="100%" h="80vh" background="linear-gradient(to bottom, #ffffff, #fbb5b5)">
            <Flex
                // border={"1px solid #000"}
                direction={{ base: "column", md: "column", lg: "row" }} w={{ base: "100%", md: "100%", lg: "85%" }} m="auto" h="100%" >
                <Box
                    // border={"1px solid #DADADA"}
                    w={{ base: "100%", md: "100%", lg: "40%" }} h="100%">
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} w="100%" h="100%">
                        <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight={"700"}>Give Wings to your </Text>
                        <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight={"700"} color="#000000">Dream with</Text>
                        <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight={"700"} color="#ff5757">Assured Outcomes</Text>

                        <Text fontSize={{ base: "md", md: "xl", lg: "2xl" }} fontWeight={"400"} color="#000000" >India’s only outcome-based career institute.
                            Enter the tech workforce industry-ready. </Text>
                        <Button
                            mt={{ base: "15px", md: "15px", lg: "20px" }}
                            bg="#ff0000"
                            w={{ base: "150px", md: "150px", lg: "200px" }}
                            textColor={"#FFFFFF"}
                            transition={"0.3s ease"}
                            border={"1px solid #ff5757"}
                            fontSize={{ base: "18px", md: "19px", lg: "20px" }}
                            _hover={{ bgColor: "red.500" }}
                            h='50px'>
                            START LEARNING
                        </Button>
                    </Box>
                </Box>

                <Box
                    //  border={"1px solid #DADADA"}
                    position={"relative"} zIndex={"1"} justifyContent="right" alignContent={"right"} w={{ base: "100%", md: "100%", lg: "60%" }} h="100%">
                    <Primary_Testimonial beforeText={beforeTexts[currentIndex]} afterText={afterTexts[currentIndex]} isTransitioning={isTransitioning} />
                    <Secondery_Testimonial quote={quotes[currentIndex]} name={names[currentIndex]} isTransitioning={isTransitioning} />
                    <Box bg="#e1eaff" position={"absolute"} bottom={"0%"} right={"0"} zIndex={"2"} w={{ base: "77%", md: "60%", lg: "66%" }} h={{ base: "35vh", md: "35vh", lg: "70vh" }} borderRadius={"50%"} border={"1px solid #000"}>
                        <Image w="100%" h="100%" borderRadius={"50%"} src={images[currentIndex]} alt="testimonial image"
                            transition={"opacity 0.5s ease-in-out"}
                            opacity={isTransitioning ? 0 : 1}
                        />
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Hero;
