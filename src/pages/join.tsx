import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { JoinTemplate, JoinTemplateProps } from '../templates';
import { HOME_NAV, HOME_FOOTER } from './index';
import carosel0 from '../assets/carosel/carosel0.png';
import carosel1 from '../assets/carosel/carosel1.png';
import carosel2 from '../assets/carosel/carosel2.png';
import carosel3 from '../assets/carosel/carosel3.png';
import carosel4 from '../assets/carosel/carosel4.png';

const JoinPage = () => {
  const content: JoinTemplateProps = {
    navLinks: HOME_NAV,
    title: 'RECRUITMENT',
    preDeadline: {
      events: [
        'coffee chats start - 08/29 ',
        'infosession 1   (virtual) - 08/30 6-7pm PDT',
        'tabling start date - 08/29',
        'tabling end date - 09/02',
        'infosession 2   (in-person)  - 09/02',
        'coffee chats end - 09/04',
      ],
    },
    postDeadline: {
      events: [
        'First round interviews - 09/07',
        'second round interviews',
        'second round interviews - 09/08',
        'acceptance offers - 09/10',
      ],
    },
    subtitle: 'Have Questions? Email us or schedule a coffee chat. We look forward to meeting you!',
    links: [
      {
        text: 'SIGN UP FOR COFFEE CHATS',
        url: 'https://airtable.com/shrn1Wy3BcJg2ympS',
      },
      {
        text: 'EMAIL US',
        url: 'mailto:info@berkeleyvc.org?subject=[EXTERNAL] Question(s) about BVC',
      },
      {
        text: 'INFOSESSION 1 ZOOM LINK',
        url: 'https://berkeley.zoom.us/j/97762943290',
      },
    ],
    applyText: 'Ready to Apply?',
    appLink: {
      text: 'FALL 2022 APPLICATION',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSdP32zR3geBl7feZZ0XhIEhs9b68awbeQAho-XprcoSqlhv0A/viewform?usp=sf_link',
    },
    imageHeader: 'Our Club Moments',
    images: [carosel0, carosel1, carosel2, carosel3, carosel4],
    footerLinks: HOME_FOOTER,
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
