import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Radio,
  RadioGroup,
  Stack,
  Button,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Application from "./Applications";

const StudentDataForm = () => {
  const [formData, setFormData] = useState({
    status: "",
    time: "",
    internet: "",
    phone: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Form Submitted",
      description: `Thank you for sharing your details!`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    console.log("Submitted Data:", formData);
  };

  return (
    <Box w="100%" h="100vh"
    // border={"3px solid red"}
    >


      <Box
        maxW="md"
        mx="auto"
        mt={4}
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
      // border={"2px solid lime"}
      >
        <form onSubmit={handleSubmit}>
          {/* Current Status */}
          <FormControl mb={4} isRequired>
            <FormLabel>Current Status</FormLabel>
            <Select
              placeholder="Select your status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="job">Job</option>
              <option value="unemployed">Unemployed</option>
            </Select>
          </FormControl>

          {/* Time Availability */}
          <FormControl mb={4} isRequired>
            <FormLabel>How much time can you spend?</FormLabel>
            <RadioGroup
              name="time"
              onChange={(value) => handleRadioChange("time", value)}
              value={formData.time}
            >
              <Stack direction="column">
                <Radio value="full-time">12 hours (Full Time)</Radio>
                <Radio value="part-time">3-4 hours (Part Time)</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          {/* Internet Connection */}
          <FormControl mb={4} isRequired>
            <FormLabel>Do you have a proper internet connection?</FormLabel>
            <RadioGroup
              name="internet"
              onChange={(value) => handleRadioChange("internet", value)}
              value={formData.internet}
            >
              <Stack direction="row">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          {/* Phone Number */}
          <FormControl mb={4} isRequired>
            <FormLabel>Enter Phone Number</FormLabel>
            <Input
              type="text"
              name="phone"
              placeholder="Your 10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormControl>

          {/* Submit Button */}
          <Button colorScheme="blue" type="submit" width="full">
            Submit
          </Button>
        </form>
      </Box>


 


    </Box>

  );
};

export default StudentDataForm;


