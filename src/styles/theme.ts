import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    dark: {
      text: '#47585b',
      info: '#999',
    },
    light: {
      text: '#f5f8fa',
      info: '#dadada',
    },
    highlight: {
      '500': '#ffba08',
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: '#f5f8fa',
        color: '',
      },
    },
  },
});
