import React from 'react'
import { Button, Text, Card, Image, Stack, CardBody, Heading, Divider, CardFooter, ButtonGroup } from "@chakra-ui/react";

export const ProductCard = ({id,name,price,category, image}) => {

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
            <Text>
              {category}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
  )
}
