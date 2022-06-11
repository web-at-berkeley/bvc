import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { PortalTemplate, PortalTemplateProps } from '../templates';
import { NAV_LINKS } from './index';

const PortalPage = () => {
  const content: PortalTemplateProps = {
    navLinks: NAV_LINKS,
  };

  return (
    <React.StrictMode>
      <Box bg="#636363" height="100vh">
        <ChakraProvider theme={theme}>
          <Fonts />
          <PortalTemplate {...content} />
        </ChakraProvider>
      </Box>
    </React.StrictMode>
  );
};

export default PortalPage;
