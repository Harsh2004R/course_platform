import React from "react";
import { Box, Center, Image, Text, } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import C1 from "../../Logo/Companies/C1.jpeg"
import C2 from "../../Logo/Companies/C2.png"
import C3 from "../../Logo/Companies/C3.png"
import C4 from "../../Logo/Companies/C4.jpeg"
import C5 from "../../Logo/Companies/C5.jpeg"
import C6 from "../../Logo/Companies/C6.jpeg"
import C7 from "../../Logo/Companies/C7.png"
import C8 from "../../Logo/Companies/C8.png"
import C9 from "../../Logo/Companies/C9.jpeg"
import C10 from "../../Logo/Companies/C10.jpeg"
import C11 from "../../Logo/Companies/C11.jpeg"
import C12 from "../../Logo/Companies/C12.png"
const Marquee = () => {


    const marquee = keyframes`
    from { transform: translateY(100%); }
    to { transform: translateY(-100%); }
  `;
    const images = [
        C1,
        C2,
        C3,
        C4,
        C5,
        C6,
        C7,
        C8,
        C9,
        C10,
        C11,
        C12,
    ];
    return (


        <Box w="100%" h="auto"
        //  border={"2px solid #000"}
        >
            <Text color="grey.900" w="80%" m="auto" textAlign={"center"} fontSize={{ base: "28px", md: "4xl", lg: "38px" }} mb="20px" fontWeight={{ base: "700", md: "600", lg: "900" }}>
                Launch Your Career In Tech With Us
            </Text>
            <Box
                //  border={"4px solid cyan"} 
                display={"flex"} justifyContent={"space-evenly"} flexDirection={{ base: "column", md: "column", lg: "row" }} w="100%" h="auto">


                <Box w={{ base: "100%", md: "100%", lg: "35%" }} h="auto"
                // border={'2px solid lime'}
                >

                    <Box w={{ base: "95%", md: "95%", lg: "85%" }} borderRadius={"20px"} m="auto" h="600px" bg="rgb(192 179 228)">
                        <Text color="#3B2871" fontStyle="italic" fontWeight={{ base: "600", md: "600", lg: "700" }} paddingTop={"10px"} textAlign={"center"} fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }} >Highest &</Text>
                        <Text color="#3B2871" fontStyle="italic" fontWeight={{ base: "600", md: "600", lg: "700" }} marginBottom={"12px"} textAlign={"center"} fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }} mt="-5px">Average CTC</Text>
                        <Center
                            overflow="hidden"
                            whiteSpace="nowrap"
                            position="relative"
                            w="100%"
                            h="490px"
                            // border={"2px solid red"}
                            borderBottomRadius={"20px"}
                        >
                            <Box
                                as="span"
                                display="inline-block"
                                animation={`${marquee} 10s linear infinite`}
                                // border={"2px solid lime"}
                                m="auto"
                                w={{ base: "100%", md: "90%", lg: "75%" }} h="auto"
                            >
                                <Center borderRadius={"10px"} py="10px" bg="#fff" m='auto' w={{ base: "90%", md: "90%", lg: "100%" }} h="auto" display={"flex"} flexDirection={"column"}>
                                    <Text color="#37474F" fontSize={{ base: "2xl", md: "2xl", lg: "22px" }}>Average CTC</Text>
                                    <Text color="#000" fontWeight={"600"} fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}>₹6.1 LPA</Text>
                                </Center> &nbsp;&nbsp;&nbsp;
                                <Center borderRadius={"10px"} py="10px" bg="#fff" w={{ base: "90%", md: "90%", lg: "100%" }} m="auto" h="auto" display={"flex"} flexDirection={"column"}>
                                    <Text color="#37474F" fontSize={{ base: "2xl", md: "2xl", lg: "22px" }}>Highest CTC</Text>
                                    <Text color="#000" fontWeight={"600"} fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}>₹36 LPA</Text>
                                </Center> &nbsp;&nbsp;&nbsp;
                                <Center borderRadius={"10px"} py="10px" bg="#fff" w={{ base: "90%", md: "90%", lg: "100%" }} m="auto" h="auto" display={"flex"} flexDirection={"column"}>
                                    <Text color="#37474F" fontSize={{ base: "2xl", md: "2xl", lg: "22px" }}>Expected Increase in</Text>
                                    <Text color="#37474F" fontSize={{ base: "2xl", md: "2xl", lg: "22px" }}>Salary Potential</Text>
                                    <Text color="#000" fontWeight={"600"} fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}>60%</Text>
                                </Center> &nbsp;&nbsp;&nbsp;
                                <Center borderRadius={"10px"} py="10px" bg="#fff" w={{ base: "90%", md: "90%", lg: "100%" }} m="auto" h="auto" display={"flex"} flexDirection={"column"}>
                                    <Text color="#37474F" fontSize={{ base: "2xl", md: "2xl", lg: "22px" }}> Average CTC</Text>
                                    <Text color="#000" fontWeight={"600"} fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}>₹6.1 LPA</Text>
                                </Center> &nbsp;&nbsp;&nbsp;
                                <Center borderRadius={"10px"} py="10px" bg="#fff" w={{ base: "90%", md: "90%", lg: "100%" }} m="auto" h="auto" display={"flex"} flexDirection={"column"}>
                                    <Text color="#37474F" fontSize={{ base: "2xl", md: "2xl", lg: "22px" }}> Average CTC</Text>
                                    <Text color="#000" fontWeight={"600"} fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}>₹6.1 LPA</Text>
                                </Center> &nbsp;&nbsp;&nbsp;
                                <Center borderRadius={"10px"} py="10px" bg="#fff" w={{ base: "90%", md: "90%", lg: "100%" }} m="auto" h="auto" display={"flex"} flexDirection={"column"}>
                                    <Text color="#37474F" fontSize={{ base: "2xl", md: "2xl", lg: "22px" }}> Average CTC</Text>
                                    <Text color="#000" fontWeight={"600"} fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}>₹6.1 LPA</Text>
                                </Center> &nbsp;&nbsp;&nbsp;
                                <Center borderRadius={"10px"} py="10px" bg="#fff" w={{ base: "90%", md: "90%", lg: "100%" }} m="auto" h="auto" display={"flex"} flexDirection={"column"}>
                                    <Text color="#37474F" fontSize={{ base: "2xl", md: "2xl", lg: "22px" }}> Average CTC</Text>
                                    <Text color="#000" fontWeight={"600"} fontSize={{ base: "4xl", md: "4xl", lg: "4xl" }}>₹6.1 LPA</Text>
                                </Center> &nbsp;&nbsp;&nbsp;
                            </Box>
                        </Center>

                    </Box>

                </Box>



                <Box mt={{ base: "20px", md: "0px", lg: "0px" }} w={{ base: "100%", md: "100%", lg: "60%" }} h="auto"
                //  border={'2px solid red'}
                >
                    <Box
                        m="auto"
                        bgColor={"rgb(255 224 239)"}
                        overflow="hidden"
                        position="relative"
                        whiteSpace="nowrap"
                        w={{ base: "95%", md: "95%", lg: "95%" }}
                        h="auto"
                        paddingBottom="10px"
                        role="group"
                        // border={"2px solid green"}
                        borderTopRadius={"20px"}
                    >
                        {/* Two sets of images for seamless looping */}
                        <Text color="#3B2871" fontStyle="italic" fontWeight={{ base: "600", md: "600", lg: "700" }} paddingTop={"10px"} paddingBottom="50px" textAlign={"center"} fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }} >Hiring Partners</Text>
                        <Box
                            w="100%" h={{ base: "60px", md: "65px", lg: "120px" }}
                            display="inline-flex"
                            animation="smoothMarquee 10s linear infinite"
                            _groupHover={{ animationPlayState: "paused" }}
                        // border={"1px solid red"}
                        >
                            {images.map((src, index) => (
                                <Image
                                    key={index}
                                    src={src}
                                    alt={`Image ${index}`}
                                    mx="4"
                                    h={{ base: "60px", md: "65px", lg: "100px" }}
                                    w={{ base: "60px", md: "65px", lg: "100px" }}
                                    border={"1px solid #ccc"}
                                    borderRadius={"10px"}

                                />
                            ))}
                            {images.map((src, index) => (
                                <Image
                                    key={`clone-${index}`}
                                    src={src}
                                    alt={`Clone ${index}`}
                                    mx="4"
                                    h={{ base: "60px", md: "65px", lg: "100px" }}
                                    w={{ base: "60px", md: "65px", lg: "100px" }}
                                    border={"1px solid #ccc"}
                                    borderRadius={"10px"}
                                />
                            ))}
                        </Box>
                        <style>
                            {`
              @keyframes smoothMarquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
              }
            `}
                        </style>
                    </Box>
                    {/* Second time loop ..... */}
                    <Box
                        m="auto"
                        bgColor={"rgb(255 224 239)"}
                        overflow="hidden"
                        position="relative"
                        whiteSpace="nowrap"
                        w={{ base: "95%", md: "95%", lg: "95%" }}
                        h="auto"
                        paddingTop="10px"
                        paddingBottom="10px"
                        role="group"
                        // border={"2px solid green"}
                        borderBottomRadius={"20px"}

                    >
                        {/* Two sets of images for seamless looping */}
                        <Box
                            w="100%" h={{ base: "60px", md: "65px", lg: "120px" }}
                            display="inline-flex"
                            animation="smoothMarqueeReverse 10s linear infinite"
                            _groupHover={{ animationPlayState: "paused" }}
                        // border={"1px solid red"}
                        >
                            {images.map((src, index) => (
                                <Image
                                    key={index}
                                    src={src}
                                    alt={`Image ${index}`}
                                    mx="4"
                                    h={{ base: "60px", md: "65px", lg: "100px" }}
                                    w={{ base: "60px", md: "65px", lg: "100px" }}
                                    border={"1px solid #ccc"}
                                    borderRadius={"10px"}
                                />
                            ))}
                            {images.map((src, index) => (
                                <Image
                                    key={`clone-${index}`}
                                    src={src}
                                    alt={`Clone ${index}`}
                                    mx="4"
                                    h={{ base: "60px", md: "65px", lg: "100px" }}
                                    w={{ base: "60px", md: "65px", lg: "100px" }}
                                    border={"1px solid #ccc"}
                                    borderRadius={"10px"}

                                />
                            ))}
                        </Box>
                        <style>
                            {`
              @keyframes smoothMarqueeReverse {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(0); }
              }
            `}
                        </style>
                    </Box>

                    <Box m="auto" borderRadius={"20px"} mt="20px" w={{ base: "100%", md: "100%", lg: "95%" }} h="200px" bg="rgb(254 235 239)">
                        <Text color="rgb(237 3 49)" fontStyle="italic" fontWeight={{ base: "600", md: "600", lg: "700" }} paddingTop={"10px"} textAlign={"center"} fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }} >Trained & Placed
                        </Text>
                        <Text color="rgb(237 3 49)" fontStyle="italic" fontWeight={{ base: "600", md: "600", lg: "700" }} textAlign={"center"} fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }} >
                            Students</Text>
                        <Text fontWeight={{ base: "600", md: "600", lg: "800" }} color="#263238" fontSize={{ base: "5xl", md: "6xl", lg: "70px" }} textAlign={"center"} >6000+🤩</Text>
                    </Box>
                </Box>


            </Box>
        </Box>


    );
};

export default Marquee;


