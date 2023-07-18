import React from 'react'
import { chakra,
  Box,
  Flex,
  Image,
  Container,
  SimpleGrid} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { addTocart } from "../redux/cartReducer/CartSlice";
export const ProductCard = () => {
  const data = useSelector((state) => state.cart);
  // this cart is the name given in store
  //  console.log(data);
  const dispatch = useDispatch();

  return (
    <Container maxW="7xl" p={{ base: 5, md: 12 }} margin="0 auto">
      <SimpleGrid
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr "]}
        spacing={4}
      >
        {data.items.map((el, index) => (
          <Flex
            key={index}
            bg="#edf3f8"
            p={50}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              maxW="xs"
              mx="auto"
              bg="white"
              _dark={{
                bg: "gray.800"
              }}
              shadow="lg"
              rounded="lg"
            >
              <Box px={4} py={2}>
                <chakra.h1
                  color="gray.800"
                  fontWeight="bold"
                  fontSize="xl"
                  textTransform="uppercase"
                >
                  {el.name}
                </chakra.h1>
              </Box>
              <Image
                h={48}
                w="full"
                fit="contain"
                mt={2}
                src={el.image}
                alt=""
              /><Box px={4} py={2}>
              <chakra.h1
                color="gray.800"
                fontWeight="bold"
                fontSize="xl"
                textTransform="uppercase"
              >
                {el.category}
              </chakra.h1>
            </Box>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                px={4}
                py={2}
                bg="gray.900"
                roundedBottom="lg"
              >
                <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                  ${el.price}
                </chakra.h1>
                <chakra.button
                  px={2}
                  py={1}
                  bg="white"
                  fontSize="xs"
                  color="gray.900"
                  fontWeight="bold"
                  rounded="lg"
                  textTransform="uppercase"
                  _hover={{
                    bg: "gray.200"
                  }}
                  onClick={() => dispatch(addTocart(el))}
                  // addTocart is a reducer
                  // el means the whole object passing
                >
                  Add to cart
                </chakra.button>
              </Flex>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  )
}
