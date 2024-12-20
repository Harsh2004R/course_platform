
import React, { useState, useEffect } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const notifications = [
  "You have a new message",
  "Your order has been shipped",
  "New comment on your post",
  "Daily summary is ready",
];

const Hires = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevIndex) => (prevIndex + 1) % notifications.length);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 }, // Starts below
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Moves to original position
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }, // Moves upward
  };

  return (
    <VStack position={"absolute"} w={{base:"100%",md:"80%",lg:"80%"}} right="0" h="30vh" bg="cyan" spacing={4} align="center" justify="center" >
      {/* Main box */}
      <MotionBox
        key={currentMessage} 
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animationVariants}
        bg="gray.100"
        p={6}
        borderRadius="md"
        boxShadow="lg"
        w="fit-content"
        textAlign="center"
        position="relative"
      >
        <Text fontSize="lg" fontWeight="bold">
          {notifications[currentMessage]}
        </Text>
      </MotionBox>
    </VStack>
  );
};

export default Hires;

