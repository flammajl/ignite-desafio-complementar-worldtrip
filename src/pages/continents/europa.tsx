import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import ReactCountryFlag from 'react-country-flag';
import { Header } from '../../components/Header';

export default function Europa(): JSX.Element {
  return (
    <div>
      <Header />
      <Flex
        bg="url(/europa-banner.png) center no-repeat"
        bgSize="cover"
        h={500}
        align="flex-end"
      >
        <Box flex="1" maxW={1240} mx="auto" pb="14">
          <Heading color="light.text" fontSize="5xl" fontWeight="semibold">
            Europa
          </Heading>
        </Box>
      </Flex>

      <Flex maxW={1240} mx="auto" align="center" py="20">
        <Text flex="1" fontSize="2xl" color="dark.text">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <HStack
          flex="1"
          display="flex"
          justify="center"
          align="center"
          spacing="8"
          fontWeight="semibold"
        >
          <Box>
            <Text fontSize="5xl" color="highlight.500">
              50
            </Text>
            <Text fontSize="2xl" color="dark.text">
              países
            </Text>
          </Box>
          <Box>
            <Text fontSize="5xl" color="highlight.500">
              60
            </Text>
            <Text fontSize="2xl" color="dark.text">
              línguas
            </Text>
          </Box>
          <Box>
            <Text fontSize="5xl" color="highlight.500">
              27
            </Text>
            <Text fontSize="2xl" color="dark.text">
              cidades +100
            </Text>
          </Box>
        </HStack>
      </Flex>

      <Box maxW={1240} mx="auto">
        <Heading color="dark.text" fontWeight="medium" mb="10">
          Cidades +100
        </Heading>
        <SimpleGrid columns={4} spacing="10" pb="8">
          <Flex>
            <Flex direction="column">
              <Image src="/london.png" />
              <Flex align="center" justify="space-between">
                <Box>
                  <Heading
                    color="dark.text"
                    fontSize="xl"
                    fontWeight="semibold"
                    py="2"
                  >
                    Londres
                  </Heading>
                  <Text fontWeight="medium">Reino Unido</Text>
                </Box>
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{ fontSize: '2rem', borderRadius: '50%' }}
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <Flex direction="column">
              <Image src="/paris.png" />
              <Flex align="center" justify="space-between">
                <Box>
                  <Heading
                    color="dark.text"
                    fontSize="xl"
                    fontWeight="semibold"
                    py="2"
                  >
                    Paris
                  </Heading>
                  <Text fontWeight="medium">França</Text>
                </Box>
                <ReactCountryFlag
                  countryCode="FR"
                  svg
                  style={{ fontSize: '2rem', borderRadius: '50%' }}
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <Flex direction="column">
              <Image src="/roma.png" />
              <Flex align="center" justify="space-between">
                <Box>
                  <Heading
                    color="dark.text"
                    fontSize="xl"
                    fontWeight="semibold"
                    py="2"
                  >
                    Itália
                  </Heading>
                  <Text fontWeight="medium">Roma</Text>
                </Box>
                <ReactCountryFlag
                  countryCode="IT"
                  svg
                  style={{ fontSize: '2rem', borderRadius: '50%' }}
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <Flex direction="column">
              <Image src="/praga.png" />
              <Flex align="center" justify="space-between">
                <Box>
                  <Heading
                    color="dark.text"
                    fontSize="xl"
                    fontWeight="semibold"
                    py="2"
                  >
                    República Tcheca
                  </Heading>
                  <Text fontWeight="medium">Praga</Text>
                </Box>
                <ReactCountryFlag
                  countryCode="CZ"
                  svg
                  style={{ fontSize: '2rem', borderRadius: '50%' }}
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <Flex direction="column">
              <Image src="/amsterda.png" />
              <Flex align="center" justify="space-between">
                <Box>
                  <Heading
                    color="dark.text"
                    fontSize="xl"
                    fontWeight="semibold"
                    py="2"
                  >
                    Holanda
                  </Heading>
                  <Text fontWeight="medium">Amsterdã</Text>
                </Box>
                <ReactCountryFlag
                  countryCode="NL"
                  svg
                  style={{ fontSize: '2rem', borderRadius: '50%' }}
                />
              </Flex>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Box>
    </div>
  );
}
