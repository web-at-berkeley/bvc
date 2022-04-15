import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { ContactTemplate } from '../templates';
import { navLinks } from './navlinks';
const ContactPage = () => {
  const templateArgs = {
    title: 'Get In Touch With Us',
    subtitle: 'Subtitle',
    tabLabels: ['Student', 'Client'],
    navLinks: navLinks,
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
