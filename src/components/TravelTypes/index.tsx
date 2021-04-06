import { List, ListItem, Box, Image, Flex } from '@chakra-ui/react';

export function TravelTypes(): JSX.Element {
  return (
    <Box as="section" maxW={1240} mx="auto" pt="28" pb="20">
      <List>
        <Flex
          justify="space-between"
          fontSize="2xl"
          fontWeight="semibold"
          color="dark.text"
        >
          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/cocktail.svg" mb="6" />
            Vida noturna
          </ListItem>

          <ListItem display="flex" flexDirection="column" alignItems="center">
            <Image src="/surf.svg" mb="6" />
            Praia
          </ListItem>

          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/building.svg" mb="6" />
            Moderno
          </ListItem>

          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/museum.svg" mb="6" />
            Clássico
          </ListItem>

          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src="/earth.svg" mb="6" />e mais...
          </ListItem>
        </Flex>
      </List>
    </Box>
  );
}
