import React, { useState } from "react"
'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react'
import axios from "axios";
import { URL } from "../Bachend-URL's/Base.url.js";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    identifier: "",
    password: ""
  })
  const [loading, setLoading] = useState(false)
  const toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };


  function handleInputValidation() {
    // checking for necessary requirements...
    if (loginForm.identifier == "") {
      toast({
        title: "Error!",
        description: "Your input field is empty",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    // if (!/^\d{10}$/.test(loginForm.identifier)) {
    //   toast({
    //     title: "Invalid Phone Number",
    //     description: "Phone number must be exactly 10 digits.",
    //     status: "error",
    //     duration: 5000,
    //     isClosable: true,
    //     position: "top",
    //   });
    // }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleInputValidation()) {
      setLoading(true);
    }
    try {
      const res = await axios.post(`${URL}/user/login`, loginForm);
      toast({
        title: "Success!",
        description: "login successful.😌",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      })
      console.log("login success...")
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong. Please try again.";
      toast({
        title: "Error!",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      console.log(`error in logging from server------${error.message}`)
    } finally {
      setLoading(false); // Stop loading
    }


  }

  return (
    <>
      {loading ? (
        <p>
          loading.....
        </p>
      ) : (
        <Flex
          minH={'auto'}
          align={'center'}
          justify={'center'}
        >
          <Box
            w="100%"
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            //   boxShadow={'lg'}
            py={8}
            px={{ base: "0", md: "2", lg: "2" }}>
            <Stack spacing={7}>
              <FormControl id="email|phone">
                <FormLabel>Phone number or email address<span style={{ color: "#FF5757" }}>*</span></FormLabel>
                <Input name="identifier" value={loginForm.identifier} onChange={handleChange} placeholder='Enter phone number or email address' type="text" />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Password here<span style={{ color: "#FF5757" }}>*</span></FormLabel>
                <Input name="password" value={loginForm.password} onChange={handleChange} placeholder='Enter you password here' type="password" />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Text color={'blue.400'}>Forgot password?</Text>
                </Stack>
                <Button
                  bg={"#1976D2"}
                  color={'white'}
                  h="45px"
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSubmit}
                >
                  CONTINUE
                </Button>
              </Stack>
            </Stack>
          </Box>

        </Flex>
      )}
    </>
  )
}