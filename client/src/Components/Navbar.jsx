import React, { useState } from 'react'
import { Box, Button, Center, Divider, Flex, Image, Menu, MenuButton, MenuItem, MenuList, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react';
import logo from "../Logo/Masterolgy-logo.png"
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import SE_course from "../Logo/Courses_logo/Se.png"
import DA_course from "../Logo/Courses_logo/DA.png"

const Navbar = () => {

  const [clicked, setClicked] = useState(true);
  const clickedFun = () => {
    setClicked((prevState) => !prevState);
    // console.log(clicked)
  }


  return (
    <>
      <Box w="100%" h="12vh" bg="#fff" position={"fixed"}>
        <Box
          // border={"1px solid blue"}
          m="auto" display={"flex"} w={{ base: "100%", md: "95%", lg: "93%" }} h="100%">
          {/* logo and courses button parent box here... */}
          <Box justifyContent={"space-evenly"} w={{ base: "100%", md: "100%", lg: "24%" }} h='100%' display={'flex'}
          // border={'1px solid lime'}s
          >
            <Box display={{ base: "flex", md: "flex", lg: "none" }} alignContent={"center"} alignItems={'center'} justifyContent={"center"} w={{ base: "15%", md: "10%", lg: "0px" }} h="100%"
            // border={"1px solid red"}
            >
              {clicked ? (
                <HamburgerIcon onClick={clickedFun} boxSize={{ base: "30px", md: "35px", lg: "0px" }} />
              ) : (
                <CloseIcon onClick={clickedFun} boxSize={{ base: "25px", md: "35px", lg: "0px" }} />
              )}
            </Box>
            <Center w={{ base: "40%", md: "20%", lg: "60%" }} h="100%"
            // border={"1px solid red"}
            >
              <Image
                // border={"1px solid red"}
                h="auto" w="80%" m="auto" src={logo} alt="Masterolgy-logo.png" />
            </Center>
            <Center flex={{ base: "1", md: "1", lg: "0" }} w={{ base: "30%", md: "30%", lg: "40%" }} h="100%"
            // border={"5px solid red"}
            >

              <Menu>
                <MenuButton bg="#b5d3f5"
                  transition={"0.3s ease"}
                  _hover={{ borderColor: "#3184e5", bgColor: "#a7cbf4" }}
                  h="45px" w={{ base: "80%", md: "30%", lg: "95%" }} m="auto" fontSize={"16px"} as={Button} rightIcon={<ChevronDownIcon boxSize={"20px"} />}>
                  COURSES
                </MenuButton>
                <MenuList>
                  <Flex
                    // border="2px solid green"
                    direction={{ base: "column", md: "row", lg: "row" }} cursor={"pointer"} w={{ base: "100%", md: "90%", lg: "900px" }} h="auto" >

                    <Box w={{ base: "100%", md: "90%", lg: "50%" }} m="auto" p="2" h="100%">
                      <Box className='Header' w="100%" h="80px" >
                        <Text color={"#515458"} pt="5" fontSize={{ base: "xl", md: "2xl", lg: "2xl" }} fontWeight={"500"}>Masterolgy Courses</Text>
                      </Box>
                      <Flex direction={"row"} alignContent="center" alignItems={"center"} mb="6px" w={{ base: "100%", md: "90%", lg: "80%" }} h={{ base: "80px", md: "85px", lg: "90px" }} transition={"0.3s ease"} _hover={{ bgColor: "#f0f0f0" }} borderRadius={"md"}>
                        <Flex alignContent="center" alignItems={"center"} justifyContent={"center"} w={{ base: "27%", md: "20%", lg: "20%" }} h="80%" bg="#f0f0f0" borderRadius={"50px"}>
                          <Image src={SE_course} h="80%" w="80%" alt="Software.dev.course.png" />
                        </Flex>
                        <Text ml="10px" transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Software Development</Text>
                      </Flex>

                      <Flex alignContent="center" alignItems={"center"} mt="6px" w={{ base: "100%", md: "90%", lg: "80%" }} h={{ base: "80px", md: "85px", lg: "90px" }} transition={"0.3s ease"} _hover={{ bgColor: "#f0f0f0" }} borderRadius={"md"}>
                        <Flex alignContent="center" alignItems={"center"} justifyContent={"center"} w={{ base: "27%", md: "20%", lg: "20%" }} h="80%" bg="#f0f0f0" borderRadius={"50px"}>
                          <Image src={DA_course} h="80%" w="80%" alt="Software.dev.course.png" />
                        </Flex>
                        <Text ml="10px" transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={{ base: "14px", md: "15px", lg: "16px" }}>Data Analytics</Text>
                      </Flex>
                    </Box>
                    <Box p="2" w={{ base: "100%", md: "90%", lg: "50%" }} direction={"column"} h="100%" >
                      <Box className='Header' w="100%" h="80px" >
                        <Text color={"#515458"} pt="5" fontSize={{ base: "xl", md: "2xl", lg: "2xl" }} fontWeight={"500"}>IIT for All Courses Courses</Text>
                      </Box>
                      <Flex mb="6px" w='80%' h="90px" transition={"0.3s ease"} _hover={{ bgColor: "#f0f0f0" }} borderRadius={"md"}>
                        <Box padding='6' w="100%" h="190px" boxShadow='lg' bg='white'>
                          <SkeletonCircle size='10' />
                          <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                          {/* <Text fontSize={"16px"} color="blue.500">Comming soon...</Text> */}

                        </Box>
                      </Flex>

                      <Flex mt="6px" w='80%' h="90px" transition={"0.3s ease"} _hover={{ bgColor: "#f0f0f0" }} borderRadius={"md"}>

                      </Flex>
                    </Box>

                  </Flex>
                </MenuList>
              </Menu>
            </Center>
          </Box>




          <Box
            // border="1px solid red"
            display={{ base: "none", md: "none", lg: "flex" }} w="76%" h="100%" >
            <Box w='30%' h='100%' ></Box>
            <Box display={"flex"} justifyContent={"space-between"} w="100%" h="100%"
            // border={"2px solid red"}
            >

              <Center>
                <Text transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={"16px"}>Scholarship {" "}<ChevronDownIcon boxSize={"20px"} /></Text>
              </Center>
              <Center>
                <Text transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={"16px"}>Success Stories</Text>
              </Center>
              <Center>
                <Text transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={"16px"}>Events</Text>
              </Center>
              <Center>
                <Text transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={"16px"}>Hire From Us
                </Text>
              </Center>
              <Center>
                <Text transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={"16px"}>Fees
                </Text>
              </Center>
              <Center
              // border={"1px solid red"}
              >
                <Button
                  bg="#fff"
                  transition={"0.3s ease"}
                  border={"1px solid #ff5757"}
                  _hover={{ bgColor: "red.100" }}
                  color={"#ff5757"}
                  h="45px" w="100%" m="auto" fontSize={"14px"}>REGISTER</Button>
              </Center>


            </Box>

          </Box>

          {
            !clicked && (
              <Box
                display={{ base: "flex", md: "flex", lg: "none" }} // visible only on mobile and tablet
                w="50%"
                h="65vh"
                position="fixed"
                top="12vh"
                left="0"
                zIndex="10"
                transition={"0.25s ease"}
                bg="#fff"
                borderBottomRightRadius={"lg"}

              >
                {/* content goes here */}

                <Box display={{ base: "flex", md: "flex", lg: "flex" }} flexDirection={"column"} w="100%" h="100%" >

                  <Box p="2" display={"flex"} flexDirection={"column"} justifyContent={"space-between"} w="100%" h="100%" >

                    <Text textAlign={"left"} transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={"16px"}>Scholarship {" "}<ChevronDownIcon boxSize={"20px"} /></Text>
                    <Divider></Divider>
                    <Text transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={"16px"}>Success Stories</Text>
                    <Divider></Divider>
                    <Text transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={"16px"}>Events</Text>
                    <Divider></Divider>
                    <Text transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={"16px"}>Hire From Us</Text>
                    <Divider></Divider>
                    <Text transition={"0.2s ease"} _hover={{ color: "#ff5757", cursor: 'pointer' }} textTransform="uppercase" fontWeight={'500'} fontSize={"16px"}>Fees
                    </Text>
                    <Divider></Divider>
                    <Center
                    // border={"1px solid red"}
                    >
                      <Button
                        bg="#fff"
                        transition={"0.3s ease"}
                        border={"1px solid #ff5757"}
                        _hover={{ bgColor: "red.100", borderColor: "#ff5757" }}
                        color={"#ff5757"}
                        h="45px" w="100%" m="auto" fontSize={"14px"}>REGISTER</Button>
                    </Center>


                  </Box>

                </Box>
              </Box>
            )
          }

        </Box>
      </Box>
    </>
  )
}

export default Navbar;