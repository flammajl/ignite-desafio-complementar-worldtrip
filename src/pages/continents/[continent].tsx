import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import ReactCountryFlag from 'react-country-flag';
import Prismic from '@prismicio/client';
import { Header } from '../../components/Header';
import { getPrismicClient } from '../../services/prismic';

interface TopCity {
  photo: {
    url: string;
    alt: string;
  };
  city: string;
  country: string;
  countrycode: string;
}

interface Country {
  title: string;
  summary: string;
  banner: {
    src: string;
    alt: string;
  };
  countries: string;
  languages: string;
  topCitiesQuantity: string;
  topCities: TopCity[];
}

interface ContinentProps {
  country: Country;
}

export default function Continent({ country }: ContinentProps): JSX.Element {
  return (
    <div>
      <Header />
      <Flex
        bg={`url(${country.banner.src}) center no-repeat`}
        bgSize="cover"
        h={500}
        align="flex-end"
      >
        <Box flex="1" maxW={1240} mx="auto" pb="14">
          <Heading color="light.text" fontSize="5xl" fontWeight="semibold">
            {RichText.asText(country.title)}
          </Heading>
        </Box>
      </Flex>

      <Flex maxW={1240} mx="auto" align="center" py="20">
        <Text flex="1" fontSize="2xl" color="dark.text">
          {country.summary}
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
              {country.countries}
            </Text>
            <Text fontSize="2xl" color="dark.text">
              países
            </Text>
          </Box>
          <Box>
            <Text fontSize="5xl" color="highlight.500">
              {country.languages}
            </Text>
            <Text fontSize="2xl" color="dark.text">
              línguas
            </Text>
          </Box>
          <Box>
            <Text fontSize="5xl" color="highlight.500">
              {country.topCitiesQuantity}
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
          {country.topCities.map(topCountry => (
            <Flex key={RichText.asText(topCountry.city)}>
              <Flex direction="column">
                <Image
                  src={topCountry.photo.url}
                  alt={topCountry.photo.alt}
                  w={256}
                  maxH={173}
                />
                <Flex align="center" justify="space-between">
                  <Box>
                    <Heading
                      color="dark.text"
                      fontSize="xl"
                      fontWeight="semibold"
                      py="2"
                    >
                      {RichText.asText(topCountry.city)}
                    </Heading>
                    <Text fontWeight="medium">{topCountry.country}</Text>
                  </Box>
                  <ReactCountryFlag
                    countryCode={topCountry.countrycode}
                    svg
                    style={{ fontSize: '2rem', borderRadius: '50%' }}
                  />
                </Flex>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continents')],
    { fetch: ['continents.title'] }
  );

  const paths = response.results.map(path => {
    return {
      params: { continent: path.uid },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('continents', String(continent), {});

  const country = {
    title: response.data.title,
    summary: response.data.summary,
    banner: {
      src: response.data.banner.url,
      alt: response.data.banner.alt,
    },
    countries: response.data.countries,
    languages: response.data.languages,
    topCitiesQuantity: response.data.topcitiesquantity,
    topCities: response.data.topcities,
  };

  return {
    props: {
      country,
    },
  };
};
