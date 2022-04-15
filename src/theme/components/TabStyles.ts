import type { ComponentStyleConfig } from '@chakra-ui/react';
export const TabStyles: ComponentStyleConfig = {
  // Styles for the base style
  sizes: {
    md: {
      tab: {
        fontSize: '25px',
        px: 4, // <-- px is short for paddingLeft and paddingRight
        py: 3, // <-- py is short for paddingTop and paddingBottom
      },
    },
  },
  defaultProps: {
    variant: 'unstyled',
    size: 'md',
  },
};
