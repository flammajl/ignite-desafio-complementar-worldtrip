import Link from 'next/link';
import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

export function Header(): JSX.Element {
  const isWiderVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const router = useRouter();
  return (
    <Flex
      maxW={1240}
      mx="auto"
      as="header"
      align="center"
      justify="center"
      py="7"
    >
      {router.pathname !== '/' && (
        <Flex flex={['', '1']}>
          <Link href="/">
            <a>
              <Image src="/back-button.svg" />
            </a>
          </Link>
        </Flex>
      )}
      <Flex
        flex="1"
        align="center"
        justify={router.pathname !== '/' ? ['center', 'flex-start'] : 'center'}
      >
        <Image src="/logo.svg" />
      </Flex>
    </Flex>
  );
}
