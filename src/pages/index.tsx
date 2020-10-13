import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/core';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  const toolList = [
    { name: 'NextJS' },
    { name: 'TypeScript' },
    { name: 'Chakra UI' },
    { name: 'Emotion' },
    { name: 'Storybook' },
    { name: 'Jest' },
    { name: 'ESLint' },
    { name: 'Prettier' },
  ];
  return (
    <Box m="auto" maxW="3xl" p="8">
      <Box textAlign="center" bg="gray.100" rounded="lg" p="4" shadow="md" mb="4">
        <Heading as="h1" pb="4" color="purple.600">
          <Link href="https://github.com/lpbayliss">@lpbayliss</Link> Starter Project
        </Heading>
        <Text pb="3" fontWeight="bold">
          This is a Next.js written in Typescript
        </Text>
      </Box>
      <Flex flexWrap="wrap" justifyContent="space-between" mx="-0.5rem">
        {toolList.map((tool) => (
          <Box
            key={tool.name}
            flex="1"
            textAlign="center"
            bg="gray.100"
            rounded="lg"
            p="4"
            m="2"
            shadow="md"
            minW="200px"
          >
            <Text fontWeight="bold">{tool.name}</Text>
          </Box>
        ))}
      </Flex>
      <Box my="4" px="6">
        <Text my="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed urna vitae felis molestie vulputate. Aenean
          vitae magna lacus. Maecenas efficitur, turpis sit amet iaculis faucibus, turpis purus interdum sem, egestas
          gravida libero neque vitae nisl. In erat sapien, feugiat eu sapien mattis, finibus auctor turpis. Donec
          euismod commodo sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Praesent in erat felis. Suspendisse vel quam a tellus fermentum tincidunt et eu nibh. Nullam id
          dolor ultrices, eleifend nisi eget, fringilla erat. Nulla hendrerit mi augue, condimentum tempor orci
          scelerisque et. Proin a nisi porttitor, aliquam mi sed, fermentum ante. Morbi quis tellus orci. Suspendisse
          sit amet volutpat turpis, eget condimentum enim.
        </Text>
        <Text my="4">
          Duis cursus turpis a dui egestas ornare. Suspendisse dolor risus, maximus vel orci sed, pharetra auctor
          mauris. In lectus risus, faucibus vitae nunc sed, mattis consequat mauris. Suspendisse odio purus, consequat
          quis imperdiet quis, placerat eu tortor. Nullam eget rutrum mi. Donec malesuada velit vitae porttitor
          placerat. Nunc a lacus ullamcorper, gravida odio ut, lacinia metus. Nullam orci nisl, consectetur eu ultricies
          vel, accumsan eget ex. Nullam gravida metus at turpis dignissim mattis. Phasellus vitae sem viverra, gravida
          nisl eu, auctor nibh. Sed convallis posuere tristique.
        </Text>
      </Box>
      <Flex justifyContent="center" my="6" px="6">
        <Button minW="xs" bg="purple.600" color="white">
          Click Me!
        </Button>
      </Flex>
    </Box>
  );
};

export default IndexPage;
