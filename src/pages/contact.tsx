import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { ContactTemplate } from '../templates';

const ContactPage = () => {
  const templateArgs = {
    title: 'Get In Touch With Us',
    subtitle: 'Subtitle',
    tabLabels: ['Student', 'Client'],
    navLinks: {
      pages: [
        { linkText: 'Home', linkTarget: '/' },
        { linkText: 'Services', linkTarget: '/' },
        { linkText: 'Education', linkTarget: '/' },
        { linkText: 'Team', linkTarget: '/team' },
        { linkText: 'Join', linkTarget: '/' },
        { linkText: 'Contact', linkTarget: '/contact' },
        { linkText: 'Portal', linkTarget: '/' },
      ],
    },
    footerLinks: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://www.linkedin.com/',
      'email@example.com',
    ],
  };

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <ContactTemplate {...templateArgs} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default ContactPage;
