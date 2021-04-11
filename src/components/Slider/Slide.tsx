import Link from 'next/link';
import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface Country {
  slug: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

interface SlideProps {
  countries: Country[];
}

export const Slide = ({ countries }: SlideProps): JSX.Element => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {countries.map(country => (
        <SwiperSlide key={country.slug}>
          <Flex
            w="100%"
            h="100%"
            direction="column"
            align="center"
            justify="center"
            bg={`url(${country.image.src}) no-repeat center center`}
            bgSize="cover"
          >
            <Link href={`/continents/${country.slug}`}>
              <a>
                <VStack>
                  <Heading fontSize="5xl" color="light.text">
                    {country.title}
                  </Heading>
                </VStack>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
