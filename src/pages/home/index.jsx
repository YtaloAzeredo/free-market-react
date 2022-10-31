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
const BASE_SERVER_URL = 'http://localhost:3333'


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
        console.log(response.data.response)
        setProducts(response.data.response)
      })
      .catch((response) => {
        console.log(response)
        setProducts([])
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
                          '/user-placeholder.png'
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
