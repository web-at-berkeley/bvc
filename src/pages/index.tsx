/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { HomeTemplate, HomeTemplateProps } from '../templates';
import all_logos from '../assets/logos/all_logos.png';
import courtyard from '../assets/images/courtyard.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/ICON2.png';
import icon3 from '../assets/images/icon3.png';
import heroImg from '../assets/images/hero.png';
import mastercard from '../assets/logos/mastercard.png';
import citi from '../assets/logos/citi.png';
import intuit from '../assets/logos/Intuit.png';
import square from '../assets/logos/square.png';
import deutche from '../assets/logos/deutche.png';
import salesforce from '../assets/logos/salesforce.png';
import amazon from '../assets/logos/amazon.png';
import jpmorgan from '../assets/logos/jpmorgan.png';
import ey from '../assets/logos/ey.png';

// Changing here will change in all pages
export const NAV_LINKS = {
  pages: [
    { linkText: 'Services', linkTarget: '/services' },
    { linkText: 'Education', linkTarget: '/education' },
    { linkText: 'Community', linkTarget: '/community' },
    { linkText: 'Team', linkTarget: '/team' },
    { linkText: 'Contact', linkTarget: '/contact' },
    { linkText: 'JOIN', linkTarget: '/join' },
  ],
};

// Changing here will change in all pages
export const FOOTER_LINKS = [
  'https://www.facebook.com/',
  'https://www.instagram.com/',
  'https://www.linkedin.com/',
  'email@example.com',
];

export const content: HomeTemplateProps = {
  navLinks: NAV_LINKS,
  title: 'Berkeley Venture Capital',
  heroImg: heroImg,
  subtitle: "Cal's Only Undergraduate VC Organization",
  section1Title: 'Who are we?',
  section1Body: (
    <p>
      <b>Berkeley Venture Capital</b> is a student-run organization that aims to develop students' interest in venture
      capital and startup activity on campus. We felt the need to address Berkeley students' ingenuity in engineering,
      analysis and business management with an equally developed venture capital student organization to serve student's
      needs when exploring the Bay Area's VC landscape.
    </p>
  ),
  partnerImage: courtyard,
  partnerText: 'we are parnered with Courtyard ventures, A Haas MBA student-run fund.',
  section2Title: 'Our Pillars',
  section2Body: (
    <p>
      Our core activities are guided by our core goals: <b>Educating</b> and <b>Developing</b> our members, while
      building a <b>Community</b> between ourselves and our collaborators.
    </p>
  ),
  section2Cards: [
    {
      icon: icon1,
      title: 'education',
      body: (
        <p>
          Our fellowship-curriculum was designed with hands-on practicality in mind. Paired with a VC, our fellows are
          guided through the startup sourcing and screening process, and present a final deliverable to close their
          fellowship.
        </p>
      ),
    },
    {
      icon: icon2,
      title: 'services',
      body: (
        <p>
          We aim to further our members’ readiness for industry-level work in a variety of fields. Equipped with the
          venture acumen from their fellowship, our members now posses the knowledge to work on advanced, collaborative
          projects with VC’s.
        </p>
      ),
    },
    {
      icon: icon3,
      title: 'community',
      body: (
        <p>
          One of the strongest aspects about the Bay Area ecosystem is its diversity of thought. We aim to bring
          together voices from different industries to foster thought provoking discussion and strengthen our community
          while doing so.
        </p>
      ),
    },
  ],
  section3Title: 'Members Recieve Offers From',
  section3Image: all_logos,
  logos: [square, citi, salesforce, deutche, mastercard, amazon, jpmorgan, intuit, ey],
  footerLinks: FOOTER_LINKS,
};

const IndexPage = () => {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <HomeTemplate {...content} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
