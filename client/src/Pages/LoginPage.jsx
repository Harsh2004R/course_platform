
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

export default function LoginPage() {
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
            <FormControl id="email|phone">
              <FormLabel>Phone number or email address<span style={{color:"#FF5757"}}>*</span></FormLabel>
              <Input placeholder='Enter phone number or email address' type="text" />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Password here<span style={{color:"#FF5757"}}>*</span></FormLabel>
              <Input placeholder='Enter you password here' type="password" />
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
                }}>
                CONTINUE
              </Button>
            </Stack>
          </Stack>
        </Box>
      
    </Flex>
  )
}