import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Marquee = () => {

    const images = [
        "https://via.placeholder.com/150/FF0000",
        "https://via.placeholder.com/150/00FF00",
        "https://via.placeholder.com/150/0000FF",
        "https://via.placeholder.com/150/FFFF00",
        "https://via.placeholder.com/150/FF00FF",
        "https://via.placeholder.com/150/EE00FF",
        "https://via.placeholder.com/150/GG00FF",
        "https://via.placeholder.com/150/HH00FF",
        "https://via.placeholder.com/150/II00FF",
    ];

    return (
        <Box w="100%" h="500vh" border={"2px solid cyan"}>
            <Text color="grey.900" w="80%" m="auto" textAlign={"center"} fontSize={{base:"28px",md:"4xl",lg:"38px"}} mb="20px" fontWeight={{base:"700",md:"600",lg:"900"}}>
                Launch Your Career In Tech With Us
            </Text>
            <Box
                overflow="hidden"
                position="relative"
                whiteSpace="nowrap"
                w="100%"
                h="200px"
                role="group"
            >
                {/* Two sets of images for seamless looping */}
                <Box
                    display="inline-flex"
                    animation="smoothMarquee 10s linear infinite"
                    _groupHover={{ animationPlayState: "paused" }}
                >
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Image ${index}`}
                            mx="4"
                            h="100%"
                            w="auto"
                        />
                    ))}
                    {images.map((src, index) => (
                        <Image
                            key={`clone-${index}`}
                            src={src}
                            alt={`Clone ${index}`}
                            mx="4"
                            h="100%"
                            w="auto"
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
        </Box>



    );



};

export default Marquee;


