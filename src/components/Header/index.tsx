import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

export function Header(): JSX.Element {
  return (
    <Flex as="header" align="center" justify="center" py="7">
      <Image src="/logo.svg" width={185} height={46} />
    </Flex>
  );
}
