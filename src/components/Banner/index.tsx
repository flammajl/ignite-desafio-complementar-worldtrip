import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  return (
    <Box
      as="section"
      bg="url(/background.png) no-repeat center center"
      bgSize="cover"
      h={335}
    >
      <Box maxW={1240} h="100%" mx="auto">
        <Flex align="center" justify="space-between" h="100%">
          <VStack spacing="6">
            <Text
              color="light.text"
              fontSize="4xl"
              fontWeight="medium"
              w="100%"
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Text>
            <Text color="light.info" fontSize="xl">
              Chegou a hora de tirar do papel a viagem que você <br /> sempre
              sonhou.
            </Text>
          </VStack>
          <Image position="relative" src="/airplane.svg" top="14" />
        </Flex>
      </Box>
    </Box>
  );
}
