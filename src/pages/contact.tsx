import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { HOME_NAV, HOME_FOOTER } from './index';
import { ContactTemplate } from '../templates';

const ContactPage = () => {
  const content = {
    title: 'Get In Touch With Us',
    subtitle: [
      'Interested in learning more about us? For all questions regarding client projects, fellowship curriculum, DeCal, or other general inquires, please fill out this form and we’ll reach out to you or your organization.',

      'Additionally, the Berkeley Venture Capital welcomes professional development partnerships at any given time.',
    ],
    tabLabels: ['Student', 'Client'],
    navLinks: HOME_NAV,
    footerLinks: HOME_FOOTER,
  };

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <ContactTemplate {...content} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default ContactPage;
