import { Image, Text, VStack } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

export const Slide = (): JSX.Element => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Image w={1240} h={450} src="/north-america.jpg" position="relative" />
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate3d(-50%,-50%,0)"
        >
          <Text fontSize="5xl" color="light.text">
            América do Norte
          </Text>
          <Text fontSize="2xl" color="light.info">
            O continente mais antigo
          </Text>
        </VStack>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          w={1240}
          h={450}
          src="/south-america.jpg"
          position="relative"
          filter="brightness(0.3)"
        />
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate3d(-50%,-50%,0)"
        >
          <Text fontSize="5xl" color="light.text">
            América do Sul
          </Text>
          <Text fontSize="2xl" color="light.info">
            O continente mais antigo
          </Text>
        </VStack>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          w={1240}
          h={450}
          src="/asia.jpg"
          bgSize="cover"
          bgPosition="center"
          position="relative"
        />
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate3d(-50%,-50%,0)"
        >
          <Text fontSize="5xl" color="light.text">
            Ásia
          </Text>
          <Text fontSize="2xl" color="light.info">
            O continente mais antigo
          </Text>
        </VStack>
      </SwiperSlide>
      <SwiperSlide>
        <Image w={1240} h={450} src="/africa.jpg" position="relative" />
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate3d(-50%,-50%,0)"
        >
          <Text fontSize="5xl" color="light.text">
            África
          </Text>
          <Text fontSize="2xl" color="light.info">
            O continente mais antigo
          </Text>
        </VStack>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/europe.png" position="relative" />
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate3d(-50%,-50%,0)"
        >
          <Text fontSize="5xl" color="light.text">
            Europa
          </Text>
          <Text fontSize="2xl" color="light.info">
            O continente mais antigo
          </Text>
        </VStack>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          w={1240}
          h={450}
          src="/oceania.jpg"
          position="relative"
          filter="brightness(0.7)"
        />
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate3d(-50%,-50%,0)"
        >
          <Text fontSize="5xl" color="light.text">
            Oceania
          </Text>
          <Text fontSize="2xl" color="light.info">
            O continente mais antigo
          </Text>
        </VStack>
      </SwiperSlide>
    </Swiper>
  );
};
