import React from "react";
import { Box, Flex, Heading, SimpleGrid, Text, Icon } from "@chakra-ui/react";

const ServicesPage = () => {
  return (
    <Box p={8}>
      <Flex direction="column" alignItems="center" mb={8}>
        <Heading as="h1" size="xl" mb={4}>
          Our Services
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Discover what we offer to our customers
        </Text>
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        <ServiceCard
          title="Delivery"
          icon={<Icon name="external-link" />}
          description="Fast and reliable delivery service to your doorstep."
        />
        <ServiceCard
          title="Catering"
          icon={<Icon name="utensils" />}
          description="Catering services for parties, events, and special occasions."
        />
        <ServiceCard
          title="Takeout"
          icon={<Icon name="shopping-bag" />}
          description="Convenient takeout options for on-the-go meals."
        />
        <ServiceCard
          title="Dine-In"
          icon={<Icon name="restaurant" />}
          description="Enjoy a cozy and comfortable dining experience in our food."
        />
        <ServiceCard
          title="Online Ordering"
          icon={<Icon name="internet-explorer" />}
          description="Order your favorite meals online for pickup or delivery."
        />
        <ServiceCard
          title="Custom Ice Cream"
          icon={<Icon name="icecream" />}
          description="Delicious and beautifully crafted custom ice cream for any occasion."
        />
      </SimpleGrid>
    </Box>
  );
};

const ServiceCard = ({ title, icon, description }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" shadow="md">
      <Flex direction="column" alignItems="center" textAlign="center">
        <Box mb={4}>{icon}</Box>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </Flex>
    </Box>
  );
};

export default ServicesPage;
