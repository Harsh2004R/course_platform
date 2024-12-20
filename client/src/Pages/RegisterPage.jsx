
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
  useColorModeValue,
} from '@chakra-ui/react'

export default function RegisterPage() {
  return (
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
          px={{base:"0",md:"2",lg:"2"}}>
          <Stack spacing={7}>
            <FormControl id="name">
              <FormLabel>Full Name <span style={{color:"#FF5757"}}>*</span></FormLabel>
              <Input placeholder='Enter full Name' type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address <span style={{color:"#FF5757"}}>*</span></FormLabel>
              <Input placeholder='Enter email address' type="email" />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone Number <span style={{color:"#FF5757"}}>*</span></FormLabel>
              <Input placeholder='Enter you whatsapp number' type="number" />
            </FormControl>
            <FormControl id="code">
              <FormLabel>Referral Code (Optional)</FormLabel>
              <Input placeholder='Enter referral Code' type="text" />
            </FormControl>
            <Stack spacing={10}>
              {/* <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack> */}
              <Button
                bg={"#1976D2"}
                color={'white'}
                h="45px"
                _hover={{
                  bg: 'blue.500',
                }}>
                SUBMIT
              </Button>
            </Stack>
          </Stack>
        </Box>
      
    </Flex>
  )
}