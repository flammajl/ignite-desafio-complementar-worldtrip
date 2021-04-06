import { Box, Text } from '@chakra-ui/react';
import { Slide } from './Slide';

export function Slider(): JSX.Element {
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
      <Box maxW={1240} mx="auto" mb="40px">
        <Slide />
      </Box>
    </Box>
  );
}
