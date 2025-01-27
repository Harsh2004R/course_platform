'use client'
import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Text,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import axios from "axios";
import { URL } from "../Bachend-URL's/Base.url.js";
export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const validateForm = () => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (form.name.length < 3) {
      toast({
        title: "Invalid Name",
        description: "User name must have at least 3 letters.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return false;
    }

    if (!emailRegex.test(form.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return false;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Phone number must be exactly 10 digits.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return false;
    }

    if (form.password.length < 6) {
      toast({
        title: "Weak Password",
        description: "Password must have at least 6 characters.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return false;
    }

    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);

      try {
        const res = await axios.post(`${URL}/user/register`, form);
        toast({
          title: "Success!",
          description: "Registration successful.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        console.log("Form submitted successfully:", res.data);
      } catch (err) {
        setLoading(true);
        const errorMessage =
          err.response?.data?.message || "Something went wrong. Please try again.";
        toast({
          title: "Error!",
          description: errorMessage,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        console.error("Error submitting form:", err);
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };



  return (

    <>

      {loading ? (
        <p>loading...</p>
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
            py={8}
            px={{ base: "0", md: "2", lg: "2" }}>

            <Stack spacing={7}>
              <FormControl id="name">
                <FormLabel>Full Name <span style={{ color: "#FF5757" }}>*</span></FormLabel>
                <Input name="name" value={form.name} placeholder='Enter full Name' type="text" onChange={handleChange} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address <span style={{ color: "#FF5757" }}>*</span></FormLabel>
                <Input name="email" value={form.email} placeholder='Enter email address' type="email" onChange={handleChange} />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Phone Number <span style={{ color: "#FF5757" }}>*</span></FormLabel>
                <Input name="phone" value={form.phone} placeholder='Enter your WhatsApp number' type="number" onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Create Password</FormLabel>
                <Input name="password" value={form.password} placeholder='Create password here' type="password" onChange={handleChange} />
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
                  // type="submit"
                  bg={"#1976D2"}
                  color={'white'}
                  h="45px"
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handleSubmit}>
                  SUBMIT
                </Button>
              </Stack>
            </Stack>

          </Box>
        </Flex>
      )}

    </>

  );
}


