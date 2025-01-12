import React, { useState } from "react";
import { Box, Flex, Text, Icon, Button, VStack } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const Application = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Application Form", "Schedule Test", "Complete Test", "Test Results"];

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <VStack spacing={6}>
      <Flex justify="center" align="center">
        {steps.map((step, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            mx={4}
            position="relative"
          >
            <Box
              as="button"
              p={4}
              rounded="full"
              bg={
                index < currentStep
                  ? "green.400"
                  : index === currentStep
                  ? "blue.400"
                  : "gray.200"
              }
              color="white"
            >
              {index < currentStep ? (
                <Icon as={CheckIcon} />
              ) : (
                <Text>{step}</Text>
              )}
            </Box>
            {index < steps.length - 1 && (
              <Box
                w="40px"
                h="2px"
                bg={index < currentStep ? "green.400" : "gray.200"}
                mt={4}
              />
            )}
          </Flex>
        ))}
      </Flex>
      <Flex justify="space-between" w="full">
        <Button
          onClick={handleBack}
          isDisabled={currentStep === 0}
          colorScheme="gray"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          isDisabled={currentStep === steps.length - 1}
          colorScheme="blue"
        >
          Next
        </Button>
      </Flex>
    </VStack>
  );
};

export default Application;
