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
import Favicon from 'react-favicon';

// These are used across all pages as well as storybook
export const HOME_NAV = {
  pages: [
    { linkText: 'Services', linkTarget: '/services' },
    { linkText: 'Education', linkTarget: '/education' },
    { linkText: 'Community', linkTarget: '/community' },
    { linkText: 'Team', linkTarget: '/team' },
    { linkText: 'Contact', linkTarget: '/contact' },
    { linkText: 'JOIN', linkTarget: '/join' },
  ],
};

// These are used across all pages as well as storybook
export const HOME_FOOTER = {
  facebook: 'https://www.facebook.com/ucberkeleyventurecapital/',
  instagram: 'https://www.instagram.com/berkeley.venture.capital/',
  linkedin: 'https://www.linkedin.com/company/berkeley-venture-capital/',
  email: 'mailto:info@berkeleyvc.org',
};

export const content: HomeTemplateProps = {
  navLinks: HOME_NAV,
  mainTitle: 'Berkeley Venture Capital',
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
  numbers: [
    { title: '$1.6M', caption: <p>Fund Size</p> },
    {
      title: '20',
      caption: (
        <p>
          Active Mentors
          <br />
          &amp; Speakers
        </p>
      ),
    },
    { title: '35', caption: <p>Active Members</p> },
    {
      title: '40',
      caption: (
        <p>
          Partnered
          <br />
          Organizations
        </p>
      ),
    },
  ],
  partner: {
    image: courtyard,
    message: 'we are partnered with Courtyard ventures, A Haas MBA student-run fund.',
    link: 'https://www.courtyard.vc',
  },
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
  footerLinks: HOME_FOOTER,
};

const IndexPage = () => {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Favicon url="https://www.vectorstock.com/royalty-free-vector/letter-b-logo-flat-icon-style-vector-4679185" />
        <HomeTemplate {...content} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
