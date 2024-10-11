import React from 'react'
import { Box, Button, Center, Divider, Image } from '@chakra-ui/react';
import logo from "../Logo/Masterolgy-logo.png"
import { ChevronDownIcon } from "@chakra-ui/icons"

const Navbar = () => {
  return (
    <>
      <Box w="100%" h="12vh" position={"fixed"}>
        <Box m="auto" display={"flex"} w="93%" h="100%" border={"1px solid blue"}>
          {/* logo and courses button parent box here... */}
          <Box w="24%" h='100%' display={'flex'}
          border={'1px solid lime'}
          >
          <Center w="100%" h="100%"
          // border={"1px solid red"}
          >
            <Image
              // border={"1px solid red"}
              h="auto" w="80%" m="auto" src={logo} alt="Masterolgy-logo.png" />
          </Center>
          <Center w="100%" h="100%"
          // border={"1px solid red"}
          >
            <Button
              bg="#b5d3f5"
              transition={"0.3s ease"}
              _hover={{ borderColor: "#3184e5", bgColor: "#a7cbf4" }}
              h="45px" w="80%" m="auto" fontSize={"16px"}>COURSES{" "}<ChevronDownIcon boxSize={"20px"} /></Button>
          </Center>
        </Box>
      </Box>

      </Box>
    </>
  )
}

export default Navbar;