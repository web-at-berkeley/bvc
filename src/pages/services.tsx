import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { ServiceTemplate } from '../templates';
import { navLinks } from './navlinks';
const ContactPage = () => {
  const templateArgs = {
    title: 'Services Page',
    section1Body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus eget sapien consequat purus sed phasellus. Nibh integer orci sit lorem mauris risus vehicula scelerisque libero.',
    navLinks: navLinks,
    tab1Label: 'Professional Services',
    tab2Label: 'Professional Development',
    tab1Body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam congue lectus velit, ipsum risus. Vulputate ornare quis nunc, dui venenatis, ornare sit mauris. Fames aliquam id sed molestie id dui. Scelerisque tellus blandit ut ac tellus consectetur. Pulvinar sed adipiscing in et sed odio. Neque ut amet eleifend in. Posuere quam in vel dictumst sed commodo amet suspendisse lectus. Risus, diam senectus porta proin facilisis id consequat. Nibh turpis consequat lectus id eu. Tincidunt amet, consectetur venenatis in donec amet. Mauris est aliquam risus, natoque.',
    footerLinks: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://www.linkedin.com/',
      'email@example.com',
    ],
    wideCardTitle1: 'For Clients',
    wideCardTitle2: 'For Members',
    wideCardBody1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. consec tetur adipiscing elit. Nec, pretium quis sed at eget. Gravida hac mi:',
    wideCardList1: ['Sourcing', 'Due Diligence', 'Valuation', 'Portfolio Consulting'],
    wideCardBody2:
      "BVC's Professional Development Workshops are intended to assist members of BVC professionally. The workshops consist of resume and cover letter writing, networking, digital etiquette, and how to get into VC. Our senior member's prepare and conduct mock interviews and give individual assistance on members application material to help them advance their careers post undergrad.",
  };

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <ServiceTemplate {...templateArgs} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default ContactPage;
