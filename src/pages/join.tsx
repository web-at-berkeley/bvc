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
      dates: ['01/18', '01/23', '01/26', '01/27', '01/28', '01/28'],
      events: [
        'coffee chats start',
        'tabling start date',
        'infosession 1 (time & location TBD)',
        'tabling end date',
        'infosession 2 (time & location TBD)',
        'coffee chats end',
      ],
    },
    deadline: 'APPLICATION DEADLINE- 01/28 11:59 PM PST',
    postDeadline: {
      dates: ['01/31', '02/02', '02/03-06'],
      events: ['First round interviews', 'second round interviews', 'acceptance offers'],
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
      // {
      //   text: 'INFOSESSION 1 ZOOM LINK',
      //   url: 'https://berkeley.zoom.us/j/97762943290',
      // },
    ],
    applyText: 'Ready to Apply?',
    appLink: {
      text: 'Spring 2023 APPLICATION',
      url: 'https://airtable.com/shrTlRFwEyhL7fmKu',
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
