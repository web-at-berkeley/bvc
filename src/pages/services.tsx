import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { ServiceTemplate } from '../templates';
import { HOME_NAV, HOME_FOOTER } from './index';
import quad1 from '../assets/images/quad1.png';
import quad2 from '../assets/images/quad2.png';
import quad3 from '../assets/images/quad3.png';
import quad4 from '../assets/images/quad4.png';
import courtyard from '../assets/images/courtyard.png';
import image16 from '../assets/logos3/image16.png';
import image17 from '../assets/logos3/image17.png';
import image18 from '../assets/logos3/image18.png';
import image19 from '../assets/logos3/image19.png';
import image20 from '../assets/logos3/image20.png';
import image21 from '../assets/logos3/image21.png';

const ContactPage = () => {
  const content = {
    title: 'Services',
    section1Body:
      'BVC’s Professional Services vertical was created with the idea of helping VC’s outsource some of their internal projects in sourcing, segment analysis, and due diligence to our experienced team. New projects begin near the start of each semester. We look to provide a variety of services to firms who are interested, ranging from software building and data science projects to more conventional VC functions like sourcing and supporting the due-diligence process.',
    navLinks: HOME_NAV,
    tab1Label: 'Professional Services',
    tab2Label: 'Events',
    tab1Title: 'BVC Fellowship Demo Day',
    tab1Date: '',
    tab1Body:
      'Our annual showpiece event, the Berkeley Venture Capital Demo Day features 11 analysts and their sourced startups alongside vertical analysis. Our fellows present their investment theses, alongside the four mentors. Our past events have included an audience of 20+ VCs alongside professors and students from Harvard, Stanford and New York University.',

    footerLinks: HOME_FOOTER,
    quadImages: [quad1, quad2, quad3, quad4],
    quadTitles: ['Sourcing', 'Due Diligence', 'Valuation', 'Portfolio Consulting'],
    wideCardTitle1: 'For Clients',
    wideCardTitle2: 'For Members',
    bottomPic: courtyard,
    bottomTitle: 'Courtyard Ventures',
    bottomText:
      'Berkeley Venture Capital is proud to announce its partnership with Courtyard Ventures, the venture fund started and funded by Haas MBA students. We are thrilled to be their undergraduate partner helping them through deployment of their first fund.',
    wideCardBody1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. consec tetur adipiscing elit. Nec, pretium quis sed at eget. Gravida hac mi:',
    wideCardList1: ['Sourcing', 'Due Diligence', 'Valuation', 'Portfolio Consulting'],
    wideCardBody2:
      "BVC's Professional Development Workshops are intended to assist members of BVC professionally. The workshops consist of resume and cover letter writing, networking, digital etiquette, and how to get into VC. Our senior member's prepare and conduct mock interviews and give individual assistance on members application material to help them advance their careers post undergrad.",
    squareCompanies: [
      { image: image16, text: 'Free Ventures', link: 'https://www.freeventures.org' },
      { image: image17, text: 'Entrepreneurs at Berkeley', link: 'https://entrepreneurs.berkeley.edu' },
      {
        image: image18,
        text: 'Convergent at Berkeley',
        link: 'https://www.linkedin.com/company/convergent-at-berkeley/about/',
      },
      { image: image19, text: 'Health Engine', link: 'https://www.readysethealth.io' },
      { image: image20, text: 'Health Tech CoLab', link: 'https://healthtech.berkeley.edu' },
      { image: image21, text: 'Work Bistro', link: 'https://www.liveworkbistro.com' },
    ],
  };

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <ServiceTemplate {...content} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default ContactPage;
