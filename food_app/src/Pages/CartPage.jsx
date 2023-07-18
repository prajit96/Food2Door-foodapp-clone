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
    Image
  } from "@chakra-ui/react";
  import { useSelector, useDispatch } from "react-redux";
  import { AddIcon, MinusIcon } from "@chakra-ui/icons";
  import { FaTrashAlt, FaArrowRight } from "react-icons/fa";
  import {
    getCartTotal,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity
  } from "../redux/cartReducer/CartSlice";
  import { useEffect } from "react";
  const CartPage = () => {
    const { cart, totalQuantity, totalPrice } = useSelector(
      (state) => state.cart
    );
    // console.log(cart);
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCartTotal());
    });
  
    return (
      <>
        {cart.length === 0 ? (
          <>Lol Nothing</>
        ) : (
          <SimpleGrid
            gridTemplateColumns={["1fr", "5fr 2fr"]}
            // border="2px solid green"
            gap="4"
            p={2}
          >
            <Container maxW="5xl" p={{ base: 5, md: 10 }}>
              <Flex justify="left" mb={3}>
                <chakra.h2 fontSize="2xl" fontWeight="bold" textAlign="center">
                  Cart Items:{cart.length}
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
                      // border="2px solid red"
                      justifyContent="space-between"
                      maxW="400px"
                      spacing={0}
                    >
                      <Box ml="0 !important">
                        <Image
                          // border="2px solid red"
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
                      onClick={() => {
                        dispatch(increaseItemQuantity(el.id));
                      }}
                    />
                    <Text>{el.quantity}</Text>
                    <IconButton
                      variant="outline"
                      colorScheme="teal"
                      aria-label="Call Sage"
                      fontSize="20px"
                      icon={<MinusIcon />}
                      onClick={() => {
                        dispatch(decreaseItemQuantity(el.id));
                      }}
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      aria-label="Call Segun"
                      size="lg"
                      icon={<FaTrashAlt />}
                      onClick={() => dispatch(removeItem(el.id))}
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
                // margin="auto"
                p={1}
                justifyContent="center"
                alignContent="center"
              >
                <HStack width="full" justify="space-between">
                  <Text>Subtotal</Text>
                  <Text>{totalPrice}</Text>
                </HStack>
                <HStack width="full" justify="space-between">
                  <Text>Shipping + Tax</Text>
                  <Text>{totalPrice * 0.18}</Text>
                </HStack>
                <HStack width="full" justify="space-between">
                  <Text>Total Quantity</Text>
                  <Text>{totalQuantity}</Text>
                </HStack>
                <HStack
                  fontWeight="bold"
                  width="full"
                  fontSize="lg"
                  justify="space-between"
                >
                  <Text>Total</Text>
                  <Text>&#8377;{totalPrice + totalPrice * 0.18}</Text>
                </HStack>
                <Button
                  bottom="0"
                  marginTop="2"
                  width="full"
                  colorScheme="messenger"
                >
                  Checkout &nbsp;
                  <Icon as={FaArrowRight} color="white" />
                </Button>
              </VStack>
            </Container>
          </SimpleGrid>
        )}
      </>
    );
  };
  export default CartPage;
  