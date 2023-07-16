import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const AboutUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box p={8}>
      <Flex direction="column" alignItems="center" mb={8}>
        <Heading as="h1" size="xl" mb={4}>
          About Us
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Get to know more about our food app and our mission
        </Text>
      </Flex>

      <Flex direction={["column", "column", "row"]} justify="space-between">
        <Box flex="1" pr={[0, 0, 8]} mb={[8, 8, 0]}>
          <Heading as="h2" size="lg" mb={4}>
            Our Story
          </Heading>
          <Text>
          At our food app, we are passionate about delivering the most delicious
          and healthy food options to our customers. It all started with a simple
          idea - to make it easy for people to access fresh, nutritious, and
          mouthwatering meals right at their doorstep.
          </Text>
        </Box>

        <Box flex="1" pl={[0, 0, 8]}>
          <Heading as="h2" size="lg" mb={4}>
            Our Mission
          </Heading>
          <Text>
          Our team of talented chefs and dedicated staff work tirelessly to
          ensure that every order is prepared with utmost care and delivered
          promptly. We take pride in providing a seamless and delightful
          experience for our customers, from the moment they place their order to
          the moment they take their first bite.
          </Text>
        </Box>
      </Flex>

      <Box maxWidth="400px" mx="auto">
        <Heading as="h2" size="lg" mb={4}>
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
