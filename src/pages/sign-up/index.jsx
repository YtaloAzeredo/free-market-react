import { AddIcon, EmailIcon, InfoIcon, LockIcon, PhoneIcon } from '@chakra-ui/icons'
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  InputGroup,
  InputLeftElement,
  HStack,
  Image,
  VStack,
  StackItem
} from '@chakra-ui/react'
import { IconContext } from 'react-icons'
import { ColorModeSwitcher } from '../../components/color-mode-switcher'
const VARIANT_COLOR = 'teal'

export const SignUp = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <SignUpArea />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

const SignUpArea = () => {
  return (
    <Box>
    <HStack w='full' h='100vh'>
      <Flex w='full' h='full'>
        <VStack>
          <StackItem mt={10}>
            <Heading ml={100}>Cadastre-se<br/>E entre para o nosso time</Heading>
          </StackItem>
          <StackItem>
            <Image
              objectFit='cover'
              mt={6}
              ml={20}
              w='100vh'
              h='70vh'
              borderRadius={'20'}
              src='https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
            />
          </StackItem>
        </VStack>
      </Flex>
      <Flex w='full' h='full' width='full' align='center' justifyContent='center'>
        <Box
          borderWidth={1}
          px={4}
          width='full'
          maxWidth='500px'
          borderRadius={10}
          textAlign='center'
          boxShadow='lg'
        >
          <Box textAlign='right' py={4}>
            <ColorModeSwitcher />
          </Box>
          <Box p={4}>
            <LoginHeader />
            <LoginForm />
          </Box>
        </Box>
      </Flex>
    </HStack>
    </Box>
  )
}

const LoginHeader = () => {
  return (
    <Box>
      <Box align='center'>
        <img src="/vite.svg" width={100} />
      </Box>
      <Box textAlign='center' mt={6}>
        <Heading>Free Market</Heading>
        <Text color={`${VARIANT_COLOR}.500`}>
          Faça login e comece a usar
        </Text>
      </Box>
    </Box>
  )
}

const LoginForm = () => {
  return (
    <Box my={8} textAlign='left'>
      <form>
        <FormControl>
          <FormLabel>Seu nome</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents='none' children={<InfoIcon />} />
            <Input type='email' placeholder='Digite seu nome completo' />
          </InputGroup>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Seu telefone</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents='none' children={<PhoneIcon />} />
            <Input type='email' placeholder='Digite seu e-mail' />
          </InputGroup>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Endereço de e-mail</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents='none' children={<EmailIcon />} />
            <Input type='email' placeholder='Digite seu e-mail' />
          </InputGroup>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Sua senha</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents='none' children={<LockIcon />} />
            <Input type='password' placeholder='***********' />
          </InputGroup>
        </FormControl>


        <a href='/home'>
          <Button colorScheme={VARIANT_COLOR} width='full' mt={4}>
            Confirmar cadastro
          </Button>
        </a>
      </form>
    </Box>
  )
}
