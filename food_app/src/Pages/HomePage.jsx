import React from "react";
import { Box, Button, Flex, Text, SimpleGrid, Card, Image, Stack, CardBody, Heading, CardFooter} from "@chakra-ui/react";
import "../Styles/HomeStyle.css"
import { heroData } from "../utils/data";
import Delivery from "../Images/delivery.png";
import HeroBg from "../Images/heroBg.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleorderNow = () =>{
    navigate("/menupage")
  }
  return (
    <>
    <Flex
      direction={{ base: "column", md: "row" }}
      gridGap={2}
      width="100%"
      id="home"
    >
      <Flex
        py={2}
        flex={1.11}
        flexDir="column"
        alignItems={{ base: "center", md: "start" }}
        justifyContent="center"
        gap={6}
        mb={80}
      >
        <Flex
          items="center"
          gap={2}
          justifyContent="center"
          bg="orange.100"
          px={4}
          py={1}
          rounded="full"
        >
          <Text
            fontSize="base"
            color="orange.500"
            fontWeight="semibold"
          >
            Bike Delivery
          </Text>
          <Box w={8} h={8} bg="white" rounded="full" overflow="hidden" boxShadow="xl">
            <img src={Delivery} alt="delivery" className="w-full h-full object-contain" />
          </Box>
        </Flex>

        <Text fontSize={["2.5rem", "4.5rem"]} fontWeight="bold" color="headingColor">
          The Fastest Delivery in{" "}
          <Text as="span" color="orange.600" fontSize={["3rem", "5rem"]}>
            Your City
          </Text>
        </Text>

        <Text fontSize="base" color="textColor" textAlign={{ base: "center", md: "left" }} w={{ md: "80%" }}>
        At our food app, we are passionate about delivering the most delicious and
        healthy food options to our customers. It all started with a simple idea 
        - to make it easy for people to access fresh, nutritious, and mouthwatering
        meals right at their doorstep.
        </Text>
        <Button
          type="button"
          bgGradient="linear(to-br, orange.400, orange.500)"
          width={{ base: "full", md: "auto" }}
          px={4}
          py={2}
          rounded="lg"
          _hover={{ boxShadow: "lg" }}
          transition="all 0.3s ease-in-out"
          onClick={handleorderNow}
        >
          Order Now
          
        </Button>
        
      </Flex>

      <Flex py={2} flex={0.8} items="center" pos="relative">
  <img src={HeroBg} alt="hero-bg" className="ml-auto h-420 w-full lg:w-auto lg:h-650" />

  <SimpleGrid
    columns={[1, 2]}
    gap={4}
    pos="absolute"
    top={0}
    left={0}
    p={4}
    w="full"
    h="full"
    bg="transparent"
  >
    {heroData &&
      heroData.map((n) => (
        <Box
          key={n.id}
          p={4}
          bg="cardOverlay"
          backdropFilter="blur(8px)"
          rounded="3xl"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="lg"
        >
          <img src={n.imageSrc} alt="I1" className="w-20 h-20 lg:w-40 lg:h-40 -mt-10 lg:-mt-20" />
          <Text fontSize="base"  fontWeight="semibold" color="textColor" mt={2} >
            {n.name}
          </Text>
          <Text fontSize="12px"  color="lighttextGray" fontWeight="semibold" my={1} >
            {n.decp}
          </Text>
          <Text fontSize="sm" fontWeight="semibold" color="headingColor">
            <Text as="span" fontSize="xs" color="red.600">$</Text> {n.price}
          </Text>
        </Box>
      ))}
  </SimpleGrid>
</Flex>
    </Flex>
    

    <Flex alignItems="center" mb={12}>
        <Box pb={5}  ml="4%"  />
        <Heading size="md">
         <span size="md" style={{borderBottom:"3px solid tomato"}}>Our Fresh</span>  Food & Healthy Frouits
        </Heading>
        
      </Flex>
<Flex flexWrap="wrap" justifyContent="space-evenly">
  <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '220px' }}
      // maxH={{ base: '100%', sm: '240px' }}
      src="https://images.unsplash.com/photo-1600423115367-87ea7661688f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZydWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>Apple</Heading>
  
        <Text py='2'>
          80 Calories
        </Text>
      </CardBody>
  
      <CardFooter>
  <Flex alignItems="center" gap={2}>
    <Button variant="solid" colorScheme="blue">
      $ 12
    </Button>
    <Image
      maxW={{ base: '100%', sm: '40px' }}
      maxH={{ base: '40px', sm: 'auto' }}
      objectFit="contain"
      src="https://img.icons8.com/?size=512&id=119113&format=png"
      alt=""
    />
  </Flex>
</CardFooter>
    </Stack>
  </Card>
  </Card>

  <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZydWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>Blue Berries</Heading>
  
        <Text py='2'>
          80 Calories
        </Text>
      </CardBody>
  
      <CardFooter>
  <Flex alignItems="center" gap={2}>
    <Button variant="solid" colorScheme="blue">
      $ 18
    </Button>
    <Image
      maxW={{ base: '100%', sm: '40px' }}
      maxH={{ base: '40px', sm: 'auto' }}
      objectFit="contain"
      src="https://img.icons8.com/?size=512&id=119113&format=png"
      alt=""
    />
  </Flex>
</CardFooter>
    </Stack>
  </Card>
  
  </Card>
  <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src="https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZydWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>Orange Beri</Heading>
  
        <Text py='2'>
          80 Calories
        </Text>
      </CardBody>
  
      <CardFooter>
  <Flex alignItems="center" gap={2}>
    <Button variant="solid" colorScheme="blue">
      $ 12
    </Button>
    <Image
      maxW={{ base: '100%', sm: '40px' }}
      maxH={{ base: '40px', sm: 'auto' }}
      objectFit="contain"
      src="https://img.icons8.com/?size=512&id=119113&format=png"
      alt=""
    />
  </Flex>
</CardFooter>
    </Stack>
  </Card>
  
  </Card>
  
  {/* Add more Card components as needed */}
</Flex>
<Flex alignItems="center" mb={2}>
  <Box pb={5} pt={20}  ml="4%"  />
    <Heading size="md">
      <span size="md" style={{borderBottom:"3px solid tomato"}}>Our H</span>ot Dishes
    </Heading>  
</Flex>
<div className="foodsection">
  <div>
    <img src="https://img.icons8.com/?size=512&id=YX6Nm9V3gJom&format=png" alt="" />
    <h1>Chicken</h1>
  </div>
  <div>
    <img src="https://img.icons8.com/?size=512&id=YX6Nm9V3gJom&format=png" alt="" />
    <h1>Rice</h1>
  </div>
  <div>
    <img src="https://img.icons8.com/?size=512&id=YX6Nm9V3gJom&format=png" alt="" />
    <h1>Fish</h1>
  </div>
  <div>
    <img src="https://img.icons8.com/?size=512&id=YX6Nm9V3gJom&format=png" alt="" />
    <h1>Fruit</h1>
  </div>
  <div>
    <img src="https://img.icons8.com/?size=512&id=YX6Nm9V3gJom&format=png" alt="" />
    <h1>IceCreame</h1>
  </div>
  <div>
    <img src="https://img.icons8.com/?size=512&id=YX6Nm9V3gJom&format=png" alt="" />
    <h1>Soft Drinks</h1>
  </div>
</div>
  </>
  );
};

export default HomePage;
