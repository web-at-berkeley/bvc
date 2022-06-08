import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { EducationTemplate } from '../templates';
import leal from '../assets/teamphotos/leal.png';
import sobkin from '../assets/teamphotos/sobkin.png';

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

const EducationPage = () => {
  const templateArgs = {
    title: 'Education',
    section1Body:
      'We uphold venture education at Cal through our intricately designed decal course along with our internal exclusive fellowship. With a good blend of education and experience, our programs are created to foster the spirit of venture analysis amongst Cal students.',
    tab1Label: 'Decal',
    tab2Label: 'Fellowship Cirriculum',
    tab1Body: [
      'Our educational branch is comprised of our weekly lecture meant to educate fellows about venture capital, followed by a mid-week discussion with a VC who will be guiding our fellows through their sourcing projects.',
      'The Curriculum will cover an introduction to venture capital, sourcing, due-diligence in market and product research, term sheets, startup financing and exit strategy.',
      'The Fellowship serves as a hands-on project which will leverage the general knowledge taught in the curriculum. With the opportunity to consult with a VC, fellows will deliver their findings on a startup or segment by the end of the semester. ',
    ],
    tab2Body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum nam nisi, tincidunt pellentesque gravida non pulvinar tempor. Adipiscing in urna elit sed. Sed praesent erat quam diam elit eget egestas gravida fermentum. Augue amet augue nam faucibus habitant nibh morbi rhoncus lacus. Tortor, ut in et aliquet ornare. In posuere est tristique faucibus mauris, amet, eget. Feugiat eget libero feugiat id. Mi eu justo, massa massa iaculis. Odio orci id blandit enim ac aliquet!',
    navLinks: navLinks,
    footerLinks: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://www.linkedin.com/',
      'email@example.com',
    ],
    people: [
      { photo: leal, title: 'Director of Cirriculum', name: 'Nathan Leal', to: 'linkedin.com/in/nathan-leal' },
      { photo: sobkin, title: 'Venture Analyst', name: 'Danielle Sobkin', to: 'linkedin.com/in/dsobkin' },
    ],
  };

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <EducationTemplate {...templateArgs} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default EducationPage;
