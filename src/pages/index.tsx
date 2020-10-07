import { Box, Heading, Link, List, ListIcon, ListItem, Text } from '@chakra-ui/core';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <Box m="auto" maxW="2xl" p="8">
      <Heading as="h1" pb="4" textAlign="center" color="purple.500">
        <Link href="https://github.com/lpbayliss">@lpbayliss</Link> Starter Project
      </Heading>
      <Box textAlign="center" p="2" m="4" borderWidth="1px" rounded="lg" shadow="sm">
        <Text pb="3">This is a Next.js written in Typescript</Text>
        <Text>Some of the libraries used include;</Text>
        <List as="ul">
          <ListItem>
            <ListIcon icon="check-circle" color="purple.500" />
            Chakra UI
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="purple.500" />
            Emotion
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="purple.500" />
            ESLint
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="purple.500" />
            Prettier
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="purple.500" />
            Storybook
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default IndexPage;
