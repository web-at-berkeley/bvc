import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { NAV_LINKS, FOOTER_LINKS } from './index';
import { ContactTemplate } from '../templates';

const ContactPage = () => {
  const templateArgs = {
    title: 'Get In Touch With Us',
    subtitle: [
      'Interested in learning more about us? For all questions regarding client projects, fellowship curriculum, DeCal, or other general inquires, please fill out this form and we’ll reach out to you or your organization.',

      'Additionally, the Berkeley Venture Capital welcomes professional development partnerships at any given time.',
    ],
    tabLabels: ['Student', 'Client'],
    navLinks: NAV_LINKS,
    footerLinks: FOOTER_LINKS,
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
