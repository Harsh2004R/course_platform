import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Link,
    Text,
    VStack,
    Divider,
    Image,
    Button,
} from '@chakra-ui/react';
import logo from "../Logo/Masterolgy-logo-normal.png"
const Footer = () => {
    return (
        <>
        <Box w="100%" h="auto" 
        //  border={"3px solid red"}
         >
                {/* Title Section */}
                <Flex
                justify="center"
                align="center"
                mt="10"
                w="100%"
                bg="#000"
                pb="10px"
                borderTopRadius={{base:"30px",md:"40px",lg:"50px"}}
                direction={{base:"column",md:"column",lg:"row"}}
            >
                <Heading
                py="20px"
                    // fontFamily="'Bodoni Moda', serif"
                    color="#FFF"
                    fontSize={{base:"14px",md:"1rem",lg:"1.8rem"}}
                    whiteSpace="nowrap"
                >
                    Building your tech skills has never been easier. 
                </Heading>
                <Button textColor={"#fff"} bgColor={"#FF5757"} _hover={{backgroundColor:"red.500"}} mt={{base:"10px",md:"10px",lg:"none"}} ml={{base:"none",md:"none",lg:"10px"}} px="4" py="4">
                    START LEARNING
                </Button>
            </Flex>

            {/* Footer Section */}
            <Box
                as="footer"
                bg="#000"
                w="100%"
                py="10"
                borderTop={"1px solid #333"}
            >
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    maxW="1400px"
                    mx="auto"
                    px={{ base: '5', md: '20' }}
                    gap={{ base: '10', md: '20' }}
                    justify="space-between"

                >
                    {/* Brand Section */}
                    <VStack align="start" spacing="3">
                        <Box
                            w="95px"
                            h="35px"
                        >
                            <Image w="100%" h="100%" src={logo} alt="" />
                        </Box>
                        <Text color={"#CECCCD"} fontSize="sm" lineHeight="1.6">
                            Masterolgy Industries Ltd.
                            <br />
                            Providing reliable masters since 2018.
                        </Text>
                    </VStack>

                    {/* Navigation Sections */}
                    <Flex
                        gap={{base:"10",md:"10",lg:"24"}}
                        direction={{ base: 'column', md: 'row' }}
                    >
                        {[
                            {
                                heading: 'Stories',
                                links: ['Success Stories', 'Hire From Us', 'Talent Circle', 'Our Investors'],
                            },
                            {
                                heading: 'Services',
                                links: ['Branding', 'Design', 'Marketing', 'Advertisement'],
                            },
                            {
                                heading: 'Company',
                                links: ['About us', 'Contact', 'Jobs', 'Press kit'],
                            },
                            {
                                heading: 'Legal',
                                links: ['Terms of use', 'Privacy policy', 'Cookie policy'],
                            },
                        ].map((section, idx) => (
                            <VStack align="start" key={idx} spacing="3">
                                <Heading
                                    as="h6"
                                    fontSize="1rem"
                                    fontWeight="600"
                                    textTransform="uppercase"
                                    mb="2"
                                    color="#CECCCD"
                                    _hover={{
                                        color: '#FFF',
                                        
                                    }}
                                >
                                    {section.heading}
                                </Heading>
                                {section.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        fontSize="sm"
                                        color={"#CECCCD"}
                                        _hover={{
                                            color: '#FF5757',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </VStack>
                        ))}
                    </Flex>
                </Flex>
            </Box>
        </Box>
        </>
    );
};

export default Footer;
