import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { TeamTemplate } from '../templates';
import { HOME_NAV, HOME_FOOTER } from './index';
import dua from '../assets/teamphotos/dua.png';
import ferrufino from '../assets/teamphotos/ferrufino.png';
import garg from '../assets/teamphotos/garg.png';
import larsen from '../assets/teamphotos/larsen.png';
import leal from '../assets/teamphotos/leal.png';
import liu from '../assets/teamphotos/liu.png';
import ramirez from '../assets/teamphotos/ramirez.png';
import tung from '../assets/teamphotos/tung.png';

const TeamPage = () => {
  const content = {
    mainTitle: 'Our Team',
    people: [
      {
        photo: dua,
        title: 'President',
        name: 'Shubhan Dua',
        link: 'linkedin.com/in/shubhandua',
      },
      {
        photo: liu,
        title: 'Vice President',
        name: 'Hubert Liu',
        link: 'linkedin.com/in/yuxinhubertliu',
      },
      {
        photo: ferrufino,
        title: 'Director of External',
        name: 'Josh Ferrufino',
        link: 'linkedin.com/in/jferrufino',
      },
      {
        photo: tung,
        title: 'Co-Director of Internal',
        name: 'Sophia Tung',
        link: 'linkedin.com/in/sophia-tung',
      },
      {
        photo: larsen,
        title: 'Co-Director of Internal',
        name: 'Isabella Larsen',
        link: 'linkedin.com/in/annaisabellalarsen',
      },
      {
        photo: ramirez,
        title: 'Co-Director of Finance',
        name: 'Ameyalli Ramirez',
        link: 'linkedin.com/in/ameyalli-ramirez',
      },
      {
        photo: garg,
        title: 'Co-Director of Finance',
        name: 'Veda Garg',
        link: 'linkedin.com/in/veda-garg',
      },
      {
        photo: leal,
        title: 'Director of Cirriculum',
        name: 'Nathan Leal',
        link: 'linkedin.com/in/nathan-leal',
      },
    ],
    navLinks: HOME_NAV,
    footerLinks: HOME_FOOTER,
  };

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <TeamTemplate {...content} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default TeamPage;
