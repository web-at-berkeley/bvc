import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { TeamTemplate } from '../templates';
import dua from '../assets/teamphotos/dua.png';
import ferrufino from '../assets/teamphotos/ferrufino.png';
import garg from '../assets/teamphotos/garg.png';
import larsen from '../assets/teamphotos/larsen.png';
import leal from '../assets/teamphotos/leal.png';
import liu from '../assets/teamphotos/liu.png';
import ramirez from '../assets/teamphotos/ramirez.png';
import tung from '../assets/teamphotos/tung.png';

const navLinks = {
  pages: [
    { linkText: 'Services', linkTarget: '/services' },
    { linkText: 'Education', linkTarget: '/education' },
    { linkText: 'Community', linkTarget: '/community' },
    { linkText: 'Team', linkTarget: '/team' },
    { linkText: 'Contact', linkTarget: '/contact' },
    { linkText: 'JOIN', linkTarget: '/join' },
  ],
};

const TeamPage = () => {
  const templateArgs = {
    title: 'Our Team',
    people: [
      {
        photo: dua,
        title: 'President',
        name: 'Shubhan Dua',
        to: 'linkedin.com/in/shubhandua',
      },
      {
        photo: liu,
        title: 'Vice President',
        name: 'Hubert Liu',
        to: 'linkedin.com/in/yuxinhubertliu',
      },
      {
        photo: ferrufino,
        title: 'Director of External',
        name: 'Josh Ferrufino',
        to: 'linkedin.com/in/jferrufino',
      },
      {
        photo: tung,
        title: 'Co-Director of Internal',
        name: 'Sophia Tung',
        to: 'linkedin.com/in/sophia-tung',
      },
      {
        photo: larsen,
        title: 'Co-Director of Internal',
        name: 'Isabella Larsen',
        to: 'linkedin.com/in/annaisabellalarsen',
      },
      {
        photo: ramirez,
        title: 'Co-Director of Finance',
        name: 'Ameyalli Ramirez',
        to: 'linkedin.com/in/ameyalli-ramirez',
      },
      {
        photo: garg,
        title: 'Co-Director of Finance',
        name: 'Vega Garg',
        to: 'linkedin.com/in/veda-garg',
      },
      {
        photo: leal,
        title: 'Director of Cirriculum',
        name: 'Nathan Leal',
        to: 'linkedin.com/in/nathan-leal',
      },
    ],
    bottomText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A interdum ac maecenas felis cras odio. Tellus lectus mollis at ultricies velit eu consequat, donec nibh. At quis habitant vel donec purus. Volutpat ac amet, morbi nibh diam tincidunt sed dolor. Convallis aenean et eget sed.',
    bottomText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
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
        <TeamTemplate {...templateArgs} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default TeamPage;
