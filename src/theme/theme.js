import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  textStyles: {
    h1: {
      fontSize: ['76px'],
      fontWeight: '700',
    },
    h2: {
      fontSize: ['56px'],
      fontWeight: '700',
    },
    h3: {
      fontSize: ['48px'],
      fontWeight: '600',
    },
    h4: {
      fontSize: ['32px'],
      fontWeight: '600',
    },
    h5: {
      fontSize: ['24px'],
      fontWeight: '600',
    },
    h6: {
      fontSize: ['16px'],
      fontWeight: '600',
    },
    body: {
      fontSize: ['20px, 16px, 14px'],
      fontWeight: '400',
    }
  },
});


export default theme;
