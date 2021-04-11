import { Divider } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import { TravelTypes } from '../components/TravelTypes';
import { getPrismicClient } from '../services/prismic';

interface Country {
  slug: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

interface HomeProps {
  countries: Country[];
}

export default function Home({ countries }: HomeProps): JSX.Element {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider w={90} h="2px" m="auto" bg="dark.text" mb="14" />
      <Slider countries={countries} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continents')],
    {
      fetch: ['continents.title', 'continents.slide'],
    }
  );

  const countries = response.results.map(country => {
    return {
      slug: country.uid,
      title: RichText.asText(country.data.title),
      image: {
        src: country.data.slide.url,
        alt: country.data.slide.alt,
      },
    };
  });
  return {
    props: {
      countries,
    },
  };
};
