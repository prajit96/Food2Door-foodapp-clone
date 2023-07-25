import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Text, Card, Image, Stack, CardBody, Heading, Divider, CardFooter, ButtonGroup } from "@chakra-ui/react";
import { SINGLE_PRODUCT } from '../redux/productReducer/actionTypes';

export const ProductCard = ({ id, name, price, category, image }) => {
  const dispatch = useDispatch();

  // const handleAddToCart = () => {
  //   // Dispatch the 'addToCart' action with the product data
  //   dispatch(addToCart({ id, name, price, category, image }));
  //   console.log({id, name, price, category, image});
  //   dispatch({type: SINGLE_PRODUCT, payload: {id, name, price, category, image}})

  // };
  const handleAddToCart=()=>{
    dispatch({type: SINGLE_PRODUCT, payload: {id, name, price, category, image}})
  }

  return (
    <Card maxW={{ base: '100%', sm: '240px' }}>
      <CardBody>
        <Image
          src={image}
          alt='Green double couch with wooden legs'
          borderRadius='sm'
          maxW={{ base: '100%', sm: '200px' }}
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text>{category}</Text>
          <Text color='blue.600' fontSize='2xl'> &#8377; {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue' onClick={handleAddToCart}>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue' onClick={handleAddToCart}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
