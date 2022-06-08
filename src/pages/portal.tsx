import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { PortalTemplate, PortalTemplateProps } from '../templates';
import { navLinks } from './navlinks';
const PortalPage = () => {
  const templateArgs: PortalTemplateProps = {
    navLinks: navLinks,
  };
  return (
    <React.StrictMode>
      <Box bg="#636363" height="100vh">
        <ChakraProvider theme={theme}>
          <Fonts />
          <PortalTemplate {...templateArgs} />
        </ChakraProvider>
      </Box>
    </React.StrictMode>
  );
};

export default PortalPage;
