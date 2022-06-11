import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { JoinTemplate, JoinTemplateProps } from '../templates';
import { NAV_LINKS } from './index';

const JoinPage = () => {
  const content: JoinTemplateProps = {
    navLinks: NAV_LINKS,
    events: [
      'coffee chats start',
      'infosession 1',
      'calpalooza day 1',
      'calpalooza day 2',
      'infosession 2',
      'coffee chats end',
    ],
    events2: ['First round interviews', 'second round interviews'],
  };
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <JoinTemplate {...content} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default JoinPage;
