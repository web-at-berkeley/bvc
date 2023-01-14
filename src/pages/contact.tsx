/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { HOME_NAV, HOME_FOOTER } from './index';
import { ContactTemplate } from '../templates';

const ContactPage = () => {
  const content = {
    navLinks: HOME_NAV,
    title: 'Get In Touch With Us',
    tabs: [
      {
        label: 'Student',
        leftText: (
          <p>
            Interested in learning more about us and potentially partnering with BVC? We welcome all professional
            partnerships! Fill out the form on the right, and we will reach out to you within 1-3 business days.
            <br />
            <br />
            <b>For recruitment and curricular inquiries, please select "Student."</b>
            <br />
            <br />
            <b>You can also directly email us at info@berkeleyvc.org</b>
          </p>
        ),
      },
      {
        label: 'Client',
        leftText: (
          <p>
            Questions about recruitment, DeCal, fellowship curriculum, etc.? Fill out the form on the right, and we will
            reach out to you!
            <br />
            <br />
            <b>For organization/corporate partnership inquiries, please select "Client."</b>
            <br />
            <br />
            <b>You can also directly email us at info@berkeleyvc.org</b>
          </p>
        ),
      },
    ],

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
