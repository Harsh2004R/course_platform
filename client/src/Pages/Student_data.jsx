import React, { useState } from "react";
import AuthUserNav from "../Components/AuthUserNav";
import StudentDataForm from "../Components/StudentDataForm";
import { Box, VStack } from "@chakra-ui/react";
import Application from "../Components/Applications"; // Adjust the path as needed
import ScheduleTest from "../Components/ScheduleTest"; // Adjust the path as needed
import Complete_test from "../Components/Complete_test"; // Adjust the path as needed
import TestResults from "../Components/TestResults"; // Adjust the path as needed

const Student_data = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const renderStepComponent = () => {
    switch (currentStep) {
      case 0:
        return <StudentDataForm />;
      case 1:
        return <ScheduleTest />;
      case 2:
        return <Complete_test />;
      case 3:
        return <TestResults />;
      default:
        return <StudentDataForm />;
    }
  };

  return (
    <>
      <AuthUserNav />

      <Box w="100%" h="100vh" mt="80px" mb="10vh">
        {/* Render the component dynamically based on the current step */}
        {renderStepComponent()}

        <VStack
          position={"fixed"}
          bottom={"0"}
          h="10vh"
          bg="#fff"
          boxShadow="rgba(0, 0, 0, 0.56) 0px 22px 50px 4px;"
          w="100%"
        >
          {/* Pass the currentStep and handlers to the Application component */}
          <Application currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </VStack>
      </Box>
    </>
  );
};

export default Student_data;
