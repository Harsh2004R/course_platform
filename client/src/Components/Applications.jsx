// import React, { useState } from "react";
// import { Box, Flex, Text, Icon, Button, VStack, Center } from "@chakra-ui/react";
// import { CheckIcon } from "@chakra-ui/icons";

// const Application = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const steps = ["Application Form", "Schedule Test", "Complete Test", "Test Results"];

//   const handleNext = () => {
//     if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
//   };

//   const handleBack = () => {
//     if (currentStep > 0) setCurrentStep(currentStep - 1);
//   };

//   return (
//     <VStack h="100%" justifyContent={"center"} spacing={6} w="100%" border={"2px solid blue"}>
//       <Flex justify="space-between" align="center" >
//       <Button
//           onClick={handleBack}
//           isDisabled={currentStep === 0}
//           colorScheme="gray"
//           fontSize={{base:"10px",md:"12px",lg:"12px"}}
//         >
//           Back
//         </Button>
//         {steps.map((step, index) => (
//           <Flex
//             key={index}
//             direction="column"
//             align="center"
//             mx={4}
//             position="relative"
//           >
//             <Center
//               as="button"
//               w={
//                 index < currentStep
//                 ? "25px" :
//                 "auto"
//               }
//               h={
//                 index < currentStep
//                 ? "25px" :
//                 "auto"
//               }
//               rounded="full"
//               bg={
//                 index < currentStep
//                   ? "green.400"
//                   : index === currentStep
//                   ? "white"
//                   : "gray.200"
//               }
//               color="white"
//             >
//               {index < currentStep ? (
//                 <Icon fontSize="10px" as={CheckIcon} />
//               ) : (
//                 <Text  color={
//                   index < currentStep
//                     ? "green.400"
//                     : index === currentStep
//                     ? "blue.400"
//                     : "gray.200"
//                 } fontSize={{base:"10px",md:"12px",lg:"12px"}}>{step}</Text>
//               )}
//             </Center>
//             {index < steps.length - 1 && (
//               <Box
//                 w={{base:"30px",md:"50px",lg:"30px"}}
//                 h="2px"
//                 bg={index < currentStep ? "green.400" : "gray.200"}
//                 mt={2}
//               />
//             )}
//           </Flex>
//         ))}
//          <Button
//           onClick={handleNext}
//           isDisabled={currentStep === steps.length - 1}
//           colorScheme="blue"
//           // p="0"
//           fontSize={{base:"10px",md:"12px",lg:"12px"}}
//         >
//           Next
//         </Button>
//       </Flex>
//     </VStack>
//   );
// };

// export default Application;


import React from "react";
import { Box, Flex, Text, Icon, Button, VStack, Center } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const Application = ({ currentStep, setCurrentStep }) => {
  const steps = ["Application Form", "Schedule Test", "Complete Test", "Test Results"];

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <VStack h="100%" justifyContent={"center"} spacing={6} w="100%" border={"2px solid blue"}>
      <Flex justify="space-between" align="center">
        <Button
          onClick={handleBack}
          isDisabled={currentStep === 0}
          colorScheme="gray"
          fontSize={{ base: "10px", md: "12px", lg: "12px" }}
        >
          Back
        </Button>
        {steps.map((step, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            mx={4}
            position="relative"
          >
            <Center
              as="button"
              w={index < currentStep ? "25px" : "auto"}
              h={index < currentStep ? "25px" : "auto"}
              rounded="full"
              bg={
                index < currentStep
                  ? "green.400"
                  : index === currentStep
                  ? "white"
                  : "gray.200"
              }
              color="white"
            >
              {index < currentStep ? (
                <Icon fontSize="10px" as={CheckIcon} />
              ) : (
                <Text
                  color={
                    index < currentStep
                      ? "green.400"
                      : index === currentStep
                      ? "blue.400"
                      : "gray.200"
                  }
                  fontSize={{ base: "10px", md: "12px", lg: "12px" }}
                >
                  {step}
                </Text>
              )}
            </Center>
            {index < steps.length - 1 && (
              <Box
                w={{ base: "30px", md: "50px", lg: "30px" }}
                h="2px"
                bg={index < currentStep ? "green.400" : "gray.200"}
                mt={2}
              />
            )}
          </Flex>
        ))}
        <Button
          onClick={handleNext}
          isDisabled={currentStep === steps.length - 1}
          colorScheme="blue"
          fontSize={{ base: "10px", md: "12px", lg: "12px" }}
        >
          Next
        </Button>
      </Flex>
    </VStack>
  );
};

export default Application;
