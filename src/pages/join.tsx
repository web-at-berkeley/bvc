import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { JoinTemplate, JoinTemplateProps } from '../templates';
import { HOME_NAV } from './index';
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
        'coffee chats start',
        'infosession 1',
        'calpalooza day 1',
        'calpalooza day 2',
        'infosession 2',
        'coffee chats end',
      ],
    },
    postDeadline: { events: ['First round interviews', 'second round interviews'] },
    subtitle:
      'Have Questions? Check out our recruiment interest form or schedule a coffee chat. We look forward to meeting you!',
    links: [
      {
        text: 'SIGN UP FOR COFFEE CHATS',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSc_TnFU4M5yx2PKgPKbLIgDgCzn3fNXCMlW3qbw0VZWxD3VBg/viewform?usp=sf_link',
      },
      {
        text: 'RECRUITMENT INTEREST FORM',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLScEXz2ANJlPW8gmpiDuIpe8cHdESiQvtJzsz0JdSSYVF-vclA/viewform?usp=sf_link',
      },
    ],
    applyText: 'Ready to Apply?',
    appLink: {
      text: 'FALL 2022 APPLICATION',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSdP32zR3geBl7feZZ0XhIEhs9b68awbeQAho-XprcoSqlhv0A/viewform?usp=sf_link',
    },
    imageHeader: 'Our Club Moments',
    images: [carosel0, carosel1, carosel2, carosel3, carosel4],
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
