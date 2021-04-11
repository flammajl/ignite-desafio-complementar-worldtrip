import {
  List,
  ListItem,
  Box,
  Image,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';

export function TravelTypes(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box as="section" maxW={1240} mx="auto" pt="28" pb="20">
      <List>
        <Flex
          justify="space-between"
          fontSize={['lg', '2xl']}
          fontWeight="semibold"
          color="dark.text"
          wrap={['wrap', 'initial']}
          px={['8', '0']}
        >
          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={['4', '0']}
          >
            {isWideVersion && <Image src="/cocktail.svg" mb="6" />}
            Vida noturna
          </ListItem>

          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={['4', '0']}
          >
            {isWideVersion && <Image src="/surf.svg" mb="6" />}
            Praia
          </ListItem>

          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={['4', '0']}
          >
            {isWideVersion && <Image src="/building.svg" mb="6" />}
            Moderno
          </ListItem>

          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={['4', '0']}
          >
            {isWideVersion && <Image src="/museum.svg" mb="6" />}
            Clássico
          </ListItem>

          <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={['4', '0']}
          >
            {isWideVersion && <Image src="/earth.svg" mb="6" />}e mais...
          </ListItem>
        </Flex>
      </List>
    </Box>
  );
}
