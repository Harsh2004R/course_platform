import React from 'react';
import { Avatar, Box, Center, Flex, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Logo from "../Logo/Masterolgy-logo.png";
import { FaSignOutAlt } from "react-icons/fa";

const AuthUserNav = () => {
    const userName = "John Doe";

    const handleSignOut = () => {
        console.log("User signed out");
    };

    return (
        <Box w="100%" bg="#fff" h="70px" boxShadow="md">
            <Center w={{ base: "100%", md: "90%", lg: "85%" }} m="auto" h="100%">
                <Flex px="2" justifyContent="space-between" w="100%">
                    <Center>
                        <Box
                            w="110px"
                            h="40px"
                            backgroundImage={`url(${Logo})`}
                            backgroundSize="contain"
                            backgroundRepeat="no-repeat"
                            backgroundPosition="center"
                        />
                    </Center>
                    <Menu>
                        <MenuButton>
                            <Avatar size={"sm"} name={userName} bg="blue.500" color="white" cursor="pointer">

                            </Avatar>
                        </MenuButton>
                        <MenuList borderRadius="md" minW="100px" py="0">
                            <MenuItem
                                borderRadius="md"
                                backgroundColor="#fff"
                                _hover={{ backgroundColor: "#E1F5FE", textColor: "#03A9F4" }}
                                onClick={handleSignOut}
                                px="10px"
                                display="flex"
                                alignItems="center"
                                gap="8px"
                            >
                                <FaSignOutAlt />
                                Sign Out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Center>
        </Box>
    );
};

export default AuthUserNav;
