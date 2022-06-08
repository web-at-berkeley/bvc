import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { JoinTemplate, JoinTemplateProps } from '../templates';

const navLinks = {
  pages: [
    { linkText: 'Services', linkTarget: '/services' },
    { linkText: 'Education', linkTarget: '/education' },
    { linkText: 'Community', linkTarget: '/community' },
    { linkText: 'Team', linkTarget: '/team' },
    { linkText: 'Contact', linkTarget: '/contact' },
    { linkText: 'JOIN', linkTarget: '/join' },
  ],
};

const JoinPage = () => {
  const templateArgs: JoinTemplateProps = {
    navLinks: navLinks,
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
        <JoinTemplate {...templateArgs} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default JoinPage;
