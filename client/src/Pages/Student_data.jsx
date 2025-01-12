import React from 'react'
import AuthUserNav from "../Components/AuthUserNav"
import StudentDataForm from '../Components/StudentDataForm'
import { Box } from '@chakra-ui/react'
const Student_data = () => {
    return (
        <>
            <AuthUserNav />

            <Box w="100%" h="100vh" mt="80px" border={"2px solid lime"}>
                <StudentDataForm />




            </Box>
        </>
    )
}

export default Student_data
