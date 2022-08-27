import { extendTheme } from '@chakra-ui/react';
import { TabStyles as Tabs } from './components/TabStyles';
const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    orange: '#FFC839',
    blue: ' #000057',
    lightGray: '#F6F6F6',
  },
  textStyles: {
    h1: {
      fontSize: ['76px'],
      fontWeight: '700',
      color: 'blue',
    },
    h2: {
      fontSize: ['56px'],
      fontWeight: '700',
      color: 'blue',
    },
    h3: {
      fontSize: ['48px'],
      fontWeight: '600',
      color: 'blue',
    },
    h4: {
      fontSize: ['32px'],
      fontWeight: '600',
      color: 'blue',
    },
    h5: {
      fontSize: ['24px'],
      color: 'blue',
      fontWeight: '700px',
    },
    h6: {
      fontSize: ['16px'],
      fontWeight: '600',
    },
    bodyLarge: {
      fontSize: ['20px'],
      fontWeight: '400',
      color: 'blue',
    },
    bodyStandard: {
      fontSize: ['16px'],
      fontWeight: '400',
      color: 'blue',
    },
    bodySmall: {
      fontSize: ['14px'],
      fontWeight: '400',
      color: 'blue',
    },
  },
  components: {
    Tabs,
    Link: {
      baseStyle: {
        isExternal: true,
        textDecoration: 'none',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          // borderColor: 'primary.accent2',
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
            borderColor: 'blue',
          },
        },
      },
      defaultProps: {},
    },
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: '700', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        // 4. We can override existing variants
        solid: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
        // 5. We can add responsive variants
        sm: {
          bg: 'orange',
          textStyle: 'bodyLarge',
          boxShadow: '3px 3px 3px rgb(212, 212, 212)',
          fontWeight: '700',
          _hover: { transform: 'scale(1.1)' },
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'lg', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'green', // default is gray
      },
    },
  },
});
export default theme;
