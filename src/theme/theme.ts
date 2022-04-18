import { extendTheme } from '@chakra-ui/react';
import { TabStyles as Tabs } from './components/TabStyles';
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
    bodyLarge: {
      fontSize: ['20px'],
      fontWeight: '400',
    },
    bodyStandard: {
      fontSize: ['16px'],
      fontWeight: '400',
    },
    bodySmall: {
      fontSize: ['14px'],
      fontWeight: '400',
    },
  },
  components: {
    Tabs,
    Input: {
      baseStyle: {
        field: {
          borderColor: 'primary.accent2',
          _hover: {
            borderColor: 'primary.foreground',
          },
        },
      },
      sizes: {
        md: {
          field: {
            w: '370px',
            h: '55px',
          },
        },
        lg: {
          field: {
            w: '783px',
            h: '55px',
          },
        },
      },
      defaultProps: {},
    },
  },
});

export default theme;
