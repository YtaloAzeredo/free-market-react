import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import navStyles from './nav-bar.module.css';

export const SignInMenu = () => {
  return (
    <div className={navStyles.mobileNav}>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
            >
              <a href='/signin'>Entrar</a>
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
              >
                <Avatar
                  size={'sm'}
                  src={
                    '/user-placeholder.png'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Meu Perfil</MenuItem>
                <MenuItem>Meus Pedidos</MenuItem>
                <MenuDivider />
                <MenuItem>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}