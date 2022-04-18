import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { JoinTemplate, JoinTemplateProps } from '../templates';
import { navLinks } from './navlinks';
const JoinPage = () => {
  const templateArgs: JoinTemplateProps = {
    navLinks: navLinks,
  };
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <JoinTemplate {...templateArgs} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default JoinPage;
