
import React, { useEffect, useState } from 'react';
import {
  Container,
  Box,
  chakra,
  Flex,
  VStack,
  HStack,
  Icon,
  Text,
  Button,
  IconButton,
  SimpleGrid,
  Image,
  Center,
  Heading
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { FaTrashAlt, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '../redux/productReducer/action';
import { REMOVE_ITEM } from '../redux/productReducer/actionTypes';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [total,setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const cart = useSelector((state) => state.productReducer.singleProduct);

  const settotal = () => {
    let sum = 0;
    cart.map((el,index) => {
      sum += Number(el.price)
    })
    setTotal(sum)
  }

  const dispatch = useDispatch();
  
  const handleDelete= (id) => {
    let data = cart.filter((el,index)=>{
      return el.id !== id
    })
    dispatch({type: REMOVE_ITEM, payload: data})
    console.log(data);
  }

  function setquantity(){

  }
  useEffect(()=>{
    settotal()
  }, [])
  console.log(total);

  useEffect(()=>{
    setQuantity()
  },[])

  localStorage.setItem("cart", JSON.stringify(cart))
  return (
    <>
    <Heading as="h5" size="lg" mb={4}>
        Shopping Cart
      </Heading>
      {cart.length === 0 ? (
        <Center>
            <Text fontSize="xl">Your cart is empty</Text>
        </Center>
      ) : (
        <SimpleGrid
          gridTemplateColumns={["1fr", "5fr 2fr"]}
          gap="4"
          p={2}
        >
          <Container maxW="5xl" p={{ base: 5, md: 10 }}>
            <Flex justify="left" mb={3}>
              <chakra.h2 fontSize="2xl" fontWeight="bold" textAlign="center">
                Cart Items: {cart.length}
              </chakra.h2>
            </Flex>
            <VStack
              border="1px solid"
              borderColor="gray.400"
              rounded="md"
              overflow="hidden"
              spacing={2}
              p={4}
            >
              {cart.map((el) => (
                <HStack
                  key={el.id}
                  p={2}
                  justifyContent="space-between"
                  w="full"
                >
                  <HStack
                    justifyContent="space-between"
                    maxW="400px"
                    spacing={0}
                  >
                    <Box ml="0 !important">
                      <Image
                        rounded="lg"
                        w={{ base: "100%", md: "18rem" }}
                        maxH="-webkit-fit-content"
                        objectFit="contain"
                        src={el.image}
                        alt=""
                        boxSize="150px"
                      />
                    </Box>
                    <Text textAlign="left">{el.name}</Text>
                  </HStack>
                  <Text fontWeight="bold">&#8377;{el.price}</Text>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<AddIcon />}
                    onClick={() => dispatch(increaseItemQuantity(el.id))}
                  />
                  <Text>{el.quantity}</Text>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={<MinusIcon />}
                    onClick={() => dispatch(decreaseItemQuantity(el.id))}
                  />
                  <IconButton
                    colorScheme="red"
                    variant="outline"
                    aria-label="Call Segun"
                    size="lg"
                    icon={<FaTrashAlt />}
                    onClick={() => handleDelete(el.id)}
                  />
                </HStack>
              ))}
            </VStack>
          </Container>
          {/* Order Summary Content */}
          <Container marginTop="5" p={{ base: 5, md: 10 }} borderRadius="md">
            <chakra.h3 fontSize="lg" fontWeight="bold" textAlign="left">
              Order Summary
            </chakra.h3>
            <VStack
              p={1}
              justifyContent="center"
              alignContent="center"
            >
              <HStack width="full" justify="space-between">
                <Text>Subtotal</Text>
                <Text fontSize="2xl">&#8377;{total} </Text>
              </HStack>
              {/* Implement shipping + tax and total quantity calculation if needed */}
              <HStack width="full" justify="space-between">
                <Text>Shipping + Tax {"5%"} </Text>
                <Text>&#8377;{total + 95/100}</Text>
                {/* Add appropriate values */}
              </HStack>
              <HStack width="full" justify="space-between">
                <Text>Total Quantity </Text>
                <Text>{cart.length} Item</Text>
                {/* Add appropriate values */}
              </HStack>
              <HStack
                fontWeight="bold"
                width="full"
                fontSize="lg"
                justify="space-between"
              >
                <Text>Total</Text>
                <Text>&#8377;{total+95/100}</Text>
                
              </HStack>
              <Link to="/checkout">
              <Button
                bottom="0"
                marginTop="2"
                width="full"
                colorScheme="messenger"
              >
                Checkout &nbsp;
                <Icon as={FaArrowRight} color="white" />
              </Button>
              </Link>
              
            </VStack>
          </Container>
        </SimpleGrid>
      )}
    </>
  );
};

export default CartPage;
