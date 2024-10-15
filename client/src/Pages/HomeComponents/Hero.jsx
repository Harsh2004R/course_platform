import React from 'react'
import { Box, Button, Center, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'



const Primary_Testimonial = (props) => {
    const { children } = props

    return (
        <Stack
            position={"absolute"}
            zIndex={"3"}
            bg='#999'
            top={{ base: "10%", md: "10%", lg: "20%" }}
            left={"10%"}
            w={{ base: "32%", md: "35%", lg: "30%" }}
            boxShadow={'lg'}
            p={2}
            rounded={'xl'}
            align={'center'}
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
                borderTopColor: '#fff',
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    )
}

const Secondery_Testimonial = (props) => {
    const { children } = props

    return (
        <Stack
            position={"absolute"}
            zIndex={"3"}
            bg='#fff'
            bottom="10%"
            w={{ base: "55%", md: "65%", lg: "70%" }}
            boxShadow={'lg'}
            p={1}
            rounded={'xl'}
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
                borderTopColor: '#fff',
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    )
}
const Hero = () => {
    return (
        <Box
            border={"1px solid #f0f0f0"}
            w="100%" h="80vh" background="linear-gradient(to bottom, #ffffff, #fbb5b5)">

            <Flex direction={{ base: "column", md: "column", lg: "row" }} w={{ base: "100%", md: "100%", lg: "85%" }} m="auto" h="100%" border={"1px solid #000"}>
                <Box
                    border={"1px solid #DADADA"}
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
                            w={{ base: "150px", md: "150px", lg: "170px" }}
                            textColor={"#FFFFFF"}
                            transition={"0.3s ease"}
                            border={"1px solid #ff5757"}
                            fontSize={{ base: "18px", md: "20px", lg: "22px" }}
                            _hover={{ bgColor: "red.500" }}
                            h='50px'
                        >

                            Start Learning
                        </Button>
                    </Box>
                </Box>


                <Box position={"relative"} zIndex={"1"} justifyContent="right" alignContent={"right"} w={{ base: "100%", md: "100%", lg: "60%" }} h="100%" border={"1px solid #DADADA"}>
                    <Primary_Testimonial>
                        <Box>
                            <Flex height={{ base: "75px", md: "80px", lg: "100px" }} align="center">
                                <Flex direction={"column"}>
                                    <Heading as={'h3'} fontSize={{ base: "sm", md: "md", lg: "md" }} color="black">
                                        Before
                                    </Heading>
                                    <Text fontSize="10px" color="black">
                                        This is a testimonial message!
                                    </Text>
                                </Flex>
                                <Divider ml="3px" mr="3px" orientation="vertical" borderColor="#DADADA" borderWidth="1px" />
                                <Flex direction={"column"}>
                                    <Heading as={'h3'} fontSize={{ base: "sm", md: "md", lg: "md" }} color="black">
                                        After
                                    </Heading>
                                    <Text fontSize="10px" color="black">
                                        This is a testimonial message!
                                    </Text>
                                </Flex>
                            </Flex>
                        </Box>


                    </Primary_Testimonial>
                    <Secondery_Testimonial>
                        {/* Main quote text */}
                        <Text
                            as="span"
                            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                            color="black"
                            fontWeight="medium"
                            display="inline"
                        >
                            As a college drop out, I found the courage to rewrite my future, one line of code at a time. Masai helped me become skilled. Now I work as a developer
                        </Text>



                    </Secondery_Testimonial>
                    <Box position={"absolute"} bottom={"0%"} right={"0"} zIndex={"2"} w={{ base: "77%", md: "60%", lg: "66%" }} h={{ base: "35vh", md: "35vh", lg: "70vh" }} borderRadius={"50%"} border={"1px solid #000"}>

                        <Image w="100%" h="100%" borderRadius={"50%"} src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Aparna_Singh_007855ef38.png" alt="" />
                    </Box>

                </Box>
            </Flex>


        </Box>
    )
}

export default Hero
