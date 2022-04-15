import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { TeamTemplate } from '../templates';
import placeholder from '../assets/images/teamPlaceholder.png';
import { navLinks } from './navlinks';

const TeamPage = () => {
  const templateArgs = {
    title: 'Our Team',
    people: [
      {
        photo: placeholder,
        title: 'President',
        name: 'Name Name',
      },
      {
        photo: placeholder,
        title: 'Vice President',
        name: 'Name Name',
      },
      {
        photo: placeholder,
        title: 'Director of Curriculum',
        name: 'Name Name',
      },
      {
        photo: placeholder,
        title: 'Director of Services',
        name: 'Name Name',
      },
      {
        photo: placeholder,
        title: 'Director of Internal',
        name: 'Name Name',
      },
      {
        photo: placeholder,
        title: 'Director of Community',
        name: 'Name Name',
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
