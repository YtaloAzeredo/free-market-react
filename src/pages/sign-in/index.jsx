import { EmailIcon, LockIcon } from '@chakra-ui/icons'
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
  InputLeftElement
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../components/color-mode-switcher'
const VARIANT_COLOR = 'teal'

export const SignIn = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <LoginArea />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

const LoginArea = () => {
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
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
          <LoginFooter />
        </Box>
      </Box>
    </Flex>
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

        <Box mt={4}>
          <Checkbox>Lembrar de mim</Checkbox>
        </Box>

        <a href='home'>
          <Button colorScheme={VARIANT_COLOR} width='full' mt={4}>
            Entrar na plataforma
          </Button>
        </a>
      </form>
    </Box>
  )
}

const LoginFooter = () => {
  return (
    <Box
      my={8}
      textAlign='center'
    >
      <Box>
        <Link color={`${VARIANT_COLOR}.500`}>Esqueceu sua senha?</Link>
      </Box>
      
      <Box mt={2}>
        <Link href='/signup' color={`${VARIANT_COLOR}.500`}>Não possui conta? Crie uma agora!</Link>
      </Box>
    </Box>
  )
}