import Link from 'next/link';
import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Slide = (): JSX.Element => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          direction="column"
          align="center"
          justify="center"
          bg="url(/north-america.jpg) no-repeat center center"
          bgSize="cover"
        >
          <VStack>
            <Heading fontSize="5xl" color="light.text">
              América do Norte
            </Heading>
            <Text fontSize="2xl" color="light.info">
              O continente mais antigo
            </Text>
          </VStack>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          direction="column"
          align="center"
          justify="center"
          bg="url(/south-america.jpg) no-repeat center center"
          bgSize="cover"
        >
          <VStack>
            <Heading fontSize="5xl" color="light.text">
              América do Sul
            </Heading>
            <Text fontSize="2xl" color="light.info">
              O continente mais antigo
            </Text>
          </VStack>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          direction="column"
          align="center"
          justify="center"
          bg="url(/asia.jpg) no-repeat center center"
          bgSize="cover"
        >
          <VStack>
            <Heading fontSize="5xl" color="light.text">
              Ásia
            </Heading>
            <Text fontSize="2xl" color="light.info">
              O continente mais antigo
            </Text>
          </VStack>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          direction="column"
          align="center"
          justify="center"
          bg="url(/africa.jpg) no-repeat center center"
          bgSize="cover"
        >
          <VStack>
            <Heading fontSize="5xl" color="light.text">
              África
            </Heading>
            <Text fontSize="2xl" color="light.info">
              O continente mais antigo
            </Text>
          </VStack>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          direction="column"
          align="center"
          justify="center"
          bg="url(/europe.png) no-repeat center center"
          bgSize="cover"
        >
          <Link href="/continents/europa">
            <a>
              <VStack>
                <Heading fontSize="5xl" color="light.text">
                  Europa
                </Heading>
                <Text fontSize="2xl" color="light.info">
                  O continente mais antigo
                </Text>
              </VStack>
            </a>
          </Link>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex
          w="100%"
          h="100%"
          direction="column"
          align="center"
          justify="center"
          bg="url(/oceania.jpg) no-repeat center center"
          bgSize="cover"
        >
          <VStack>
            <Heading fontSize="5xl" color="light.text">
              Oceania
            </Heading>
            <Text fontSize="2xl" color="light.info">
              O continente mais antigo
            </Text>
          </VStack>
        </Flex>
      </SwiperSlide>
    </Swiper>
  );
};
