import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { EducationTemplate } from '../templates';
import { HOME_NAV, HOME_FOOTER } from './index';
import leal from '../assets/teamphotos/leal.png';
import sobkin from '../assets/teamphotos/sobkin.png';
import bvcFellows from '../assets/images/bvcFellows.png';

const EducationPage = () => {
  const content = {
    navLinks: HOME_NAV,
    title: 'Education',
    section1Body: (
      <p>
        We uphold venture education at Cal through our intricately designed decal course along with our internal
        exclusive fellowship. With a good blend of education and experience, our programs are created to foster the
        spirit of venture analysis amongst Cal students.
      </p>
    ),
    tab0: {
      label: 'Decal',
      section2Title: <p>UGBA 198 - Introduction to Venture Capital</p>,
      section2Body: (
        <p>
          Join our exclusive student run 1-unit course on campus covering the fundamentals of Venture Capital. From due
          diligence to term sheet construction and post investment management, BVC’s carefully designed course has been
          vetted by over 5 VCs and professors at Cal and offers networking and mentorship opportunities with the some of
          Silicon Valley’s premier VCs. The course will be taught by our Director of Curriculum Nathan Leal alongside
          Venture Analyst Danielle Sobkin.
        </p>
      ),
      buttonText: 'APPLY',
      buttonLink:
        'https://docs.google.com/forms/d/e/1FAIpQLScJmROqUQwqs9bYhNdhKAm3_713EnYPU643NYdoNHA-udEjTg/viewform?usp=sf_link',
      people: [
        { photo: leal, title: 'Director of Cirriculum', name: 'Nathan Leal', link: 'linkedin.com/in/nathan-leal' },
        { photo: sobkin, title: 'Venture Analyst', name: 'Danielle Sobkin', link: 'linkedin.com/in/dsobkin' },
      ],
    },
    tab1: {
      label: 'Fellowship Curriculum',
      section2Body: (
        <p>
          Our fellowship program is comprised of our weekly lecture series meant to educate fellows about venture
          capital, followed by a mid-week discussion with a VC who will be guiding our fellows through their sourcing
          projects.
          <br />
          <br />
          The Curriculum will cover an introduction to venture capital, sourcing, due-diligence in market and product
          research, term sheets, startup financing and exit strategy.
          <br />
          <br />
          The Fellowship serves as a hands-on project that will leverage the general knowledge taught in the curriculum.
          With the opportunity to consult with a VC, fellows will deliver their findings on a startup or segment by the
          end of the semester to our VC mentors and partners.
        </p>
      ),
      image: bvcFellows,
      caption: <p>2022 BVC Fellows</p>,
    },
    footerLinks: HOME_FOOTER,
  };

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <EducationTemplate {...content} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default EducationPage;
