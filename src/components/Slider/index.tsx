import { Box, Flex, Text } from '@chakra-ui/react';
import { Slide } from './Slide';

interface Country {
  slug: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

interface SliderProps {
  countries: Country[];
}

export function Slider({ countries }: SliderProps): JSX.Element {
  return (
    <Box as="section">
      <Text
        textAlign="center"
        color="dark.text"
        fontSize="4xl"
        fontWeight="medium"
        mb="14"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Text>
      <Flex maxW={1240} h={450} mx="auto" mb="40px">
        <Slide countries={countries} />
      </Flex>
    </Box>
  );
}
