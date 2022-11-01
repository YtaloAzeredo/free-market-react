import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  StackItem
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../color-mode-switcher';
import { UserLoggedMenu } from './user-logged-menu-comp';
const Links = [
  {
    name: 'Categorias',
    path: '/categories',
  },
  {
    name: 'Ofertas do dia',
    path: '/deals',
  },
  {
    name: 'Vender',
    path: '/products',
  },
  {
    name: 'Fale Conosco',
    path: '/support',
  }
];

const NavLink = ({ children, path }) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    <a href={path}>{children}</a>
  </Box>
);

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
    as='header'
        bg={useColorModeValue('gray.100', 'gray.900')}
        width='full'
        minWidth='100vh'
        maxWidth='200vh'
        height='full'
        minHeight='12vh'
        maxHeight='12vh'
        align='center'
        justifyContent='center'
    >
      <Flex as='main' alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <Box ml={40}> <img width='35px' height='35px' src="/vite.svg" /></Box>

        <Box>
          <Box mt={2}>
            <FormControl>
              <InputGroup>
                <InputRightElement pointerEvents='none' children={<SearchIcon />} />
                <Input type='text' placeholder='Buscar produtos' />
              </InputGroup>
            </FormControl>
          </Box>

          <Box mt={2}>
            <Flex justifyContent={'center'}>
              <Stack
                spacing={8}
                align='center'
                alignItems={'center'}
                justify={['center', 'space-between', 'flex-end', 'flex-end']}
                direction={['column', 'row', 'row', 'row']}
                pt={[4, 4, 0, 0]}
              >
                {Links.map(({ name, path }) => (
                  <NavLink key={path} path={path}>
                    {name}
                  </NavLink>
                ))}
              </Stack>
            </Flex>
          </Box>
        </Box>


        <Stack isInline justifyContent={'space-between'}>
          <StackItem mt={0}><ColorModeSwitcher /></StackItem>
          <StackItem mt={50}><UserLoggedMenu /></StackItem>
        </Stack>

      </Flex>
    </Box>
  );
}