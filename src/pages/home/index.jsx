import axios from 'axios'
import {
  Box,
  Flex,
  Heading,
  StackItem,
  VStack,
  useColorModeValue,
  Text,
  Avatar,
  HStack
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { NavBar } from '../../components/nav-bar/nav-bar-comp'
const BASE_SERVER_URL = import.meta.env.VITE_BASE_SERVER_URL

export const Home = () => {
  return (
    <Box>
      <NavBar />
      <HomePage />
    </Box>
  )
}

const HomePage = () => {
  return (
    <Box>
      <div>
      <RenderProducts />
      </div>
    </Box>
  )
}

const RenderProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${BASE_SERVER_URL}/products`)
      .then(response => {
        setProducts(response.data.response)
      })
      .catch(() => {
        setProducts([
          { description: 'Smartphone', price: 'R$ 1.000'},
          { description: 'Furadeira', price: 'R$ 300'},
          { description: 'SmartTv', price: 'R$ 1.200'},
          { description: 'Geladeira', price: 'R$ 1.000'}
        ])
      })
  }, [])

  return (
    <Box>
      <Heading mt={8} ml={280} align='left'>Produtos em destaque</Heading>

      <Flex
        mt={8}
        overflow='auto'
        align='center'
        justify='center'
        fontSize='20px'
      >
        <HStack justifyContent={'space-between'}>
          {products.map(({ description, price }) => {
            return (
              <StackItem>
                <Box
                  bg={useColorModeValue('gray.100', 'gray.900')}
                  width='30vh'
                  height='50vh'
                  borderRadius={10}
                >
                  <VStack justify='center' align='center'>
                    <StackItem mt={20}>
                      <Avatar
                        size={'lg'}
                        src={
                          '/vite.svg'
                        }
                      />
                    </StackItem>
                    <StackItem><Text mt={20}>{price}</Text></StackItem>
                    <StackItem><Text>{description}</Text></StackItem>
                  </VStack>
                </Box>
              </StackItem>
            )
          })}
        </HStack>
      </Flex>
    </Box>
  )
}
