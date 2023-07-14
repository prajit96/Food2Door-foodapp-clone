import { useState } from 'react';
import { Flex, IconButton, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const CardSlider = () => {
  const cards = [
    {
      id: 1,
      title: 'Blue Berries',
      image: 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      calories: '80 Calories',
      price: 12,
    },
    {
      id: 2,
      title: 'Strawberries',
      image: 'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      calories: '60 Calories',
      price: 10,
    },
    {
      id: 3,
      title: 'Raspberries',
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      calories: '70 Calories',
      price: 8,
    },
    {
        id: 4,
        title: 'Blue Berries',
        image: 'https://images.unsplash.com/photo-1600423115367-87ea7661688f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZydWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
        calories: '80 Calories',
        price: 12,
      },
      {
        id: 5,
        title: 'Strawberries',
        image: 'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZydWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
        calories: '60 Calories',
        price: 10,
      },
      {
        id: 6,
        title: 'Raspberries',
        image: 'https://images.unsplash.com/photo-1457296898342-cdd24585d095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZydWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
        calories: '70 Calories',
        price: 8,
      },
    // ... Add more card objects as needed
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  const visibleCards = cards.slice(startIndex, startIndex + 3);

  return (
    <Flex alignItems="center">
      <IconButton
        aria-label="Previous"
        icon={<ChevronLeftIcon />}
        onClick={handlePrev}
        mr={2}
        disabled={startIndex === 1}
      />

      <Flex flexWrap="wrap" justifyContent="center">
        {visibleCards.map((card) => (
          <Stack
            key={card.id}
            direction="column"
            overflow="hidden"
            variant="outline"
            width={{ base: '100%', sm: 'auto' }}
            maxW={{ base: '100%', sm: '200px' }}
            mb={4}
          >
            <Image
              objectFit="cover"
              src={card.image}
              alt={card.title}
              width="100%"
              maxW="200px"
            />

            <Stack spacing={2} p={2}>
              <Heading size="md">{card.title}</Heading>
              <Text>{card.calories}</Text>
            </Stack>

            <Stack p={2}>
              <Button variant="solid" colorScheme="blue">
                $ {card.price}
              </Button>
            </Stack>
          </Stack>
        ))}
      </Flex>

      <IconButton
        aria-label="Next"
        icon={<ChevronRightIcon />}
        onClick={handleNext}
        ml={2}
        disabled={startIndex + 3 >= cards.length}
      />
    </Flex>
  );
};

export default CardSlider;
