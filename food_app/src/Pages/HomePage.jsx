import React from "react";
import { Box, Button, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { heroData } from "../utils/data";
import Delivery from "../Images/delivery.png";
import HeroBg from "../Images/heroBg.png";

const HomePage = () => {
  return (
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
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
          <Text fontSize="base" lgFontSize="xl" fontWeight="semibold" color="textColor" mt={2} lgMt={4}>
            {n.name}
          </Text>
          <Text fontSize="12px" lgFontSize="sm" color="lighttextGray" fontWeight="semibold" my={1} lgMy={3}>
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
    
  );
};

export default HomePage;
