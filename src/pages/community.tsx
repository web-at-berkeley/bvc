import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { CommunityTemplate } from '../templates';
import { HOME_NAV, HOME_FOOTER } from './index';
import congruent from '../assets/logos2/congruent.png';
import crv from '../assets/logos2/crv.png';
import lux from '../assets/logos2/lux.png';
import mayfield from '../assets/logos2/mayfield.png';
import olympic from '../assets/logos2/olympic.png';
import presidio from '../assets/logos2/presidio.png';
import shasta from '../assets/logos2/shasta.png';
import blumberg from '../assets/logos2/blumberg.png';
import accel from '../assets/logos2/accel.png';
import alphaWave from '../assets/logos2/alphaWave.png';
import bhat from '../assets/faces/bhat.png';
import jacob from '../assets/faces/jacob.png';
import kumar from '../assets/faces/kumar.png';
import liu from '../assets/faces/liu.png';
import mitra from '../assets/faces/mitra.png';
import patel from '../assets/faces/patel.png';
import thacker from '../assets/faces/thacker.png';
import weil from '../assets/faces/weil.png';

export const content = {
  navLinks: HOME_NAV,
  title: 'Community',
  section1Body: [
    <p key={1}>
      One of the ways in which we aim to grow and foster our community is through our speaker series. We host startup
      founders, experienced angel investors and leading venture capitalists alongside other industry experts who work at
      the intersection with startups like lawyers, corporate venture managers and investment bankers dealing with
      mergers and acquisitions.
    </p>,
    <p key={2}>
      Diversity of thought is one of the most important features of a functioning community. We aim to bring together
      people from different industry backgrounds in a meaningful way where students can engage with and get exposure to
      the huge landscape of startups and VC in the Bay Area.
    </p>,
    <p key={3}>
      A large part of our community building efforts is driven in a direction to help student and alumni founders gain
      visibility and make connections with the VC world.
    </p>,
  ],
  highlightTitle: "We've hosted speakers from",

  logos: [blumberg, olympic, shasta, accel, mayfield, lux, congruent, crv, presidio, alphaWave],
  people: [
    {
      face: kumar,
      name: 'Amit kumar, Speaker',
      link: 'linkedin.com/in/amitkuma',
      cardContent:
        'Kumar is a General Partner at Accel. Amit graduated from Cal in 2003 with a Bachelors of Science in Electrical Engineering and Computer Science. Following which he started CardSpring (acquired by Twitter). Today Amit invests in B2B and Fintech startups with over 5 years of investing experience.',
    },
    {
      face: liu,
      name: 'Dave Liu, Speaker ',
      link: 'linkedin.com/in/daveliu',
      cardContent:
        'Liu  is a 30-Year Veteran of Wall Street (Former MD Jeffries Bank) and Silicon Valley. He’s an entrepreneur who has started multiple companies, advisor who has raised over $15 billion for hundreds of companies, and investor in multiple billion dollar exits.',
    },
    {
      face: weil,
      name: 'Elizabeth Weil, Speaker ',
      link: 'linkedin.com/in/elizabethweil',
      cardContent:
        'Prior to founding Scribble Ventures, Elizabeth spent four years as a Managing Director at 137 Ventures, focused on late-stage secondary opportunities. She was a Partner at Andreessen Horowitz, and an executive at Twitter. She has also worked as an investor at IVP, Menlo Ventures, and Radar Partners. ',
    },
    {
      face: mitra,
      name: 'Utsav Mitra, Speaker',
      link: 'linkedin.com/in/utsavmitra',
      cardContent:
        'Mitra is the managing director of Alpha Wave Global (prev. Falcon Edge Capital) which manages $18 billion cross public and private investments. Prior to that heworked with Prince Street Capital. He started his career in consulting at McKinsey, then became an investor in Bain Capital.',
    },
    {
      face: jacob,
      name: 'Anup Jacob, Mentor ',
      link: 'linkedin.com/in/anup-jacob-2b200913',
      cardContent:
        'Anup has been investing over 20 years in energy, water and industrial technology businesses. He has served on multiple private and public company boards and chaired audit and compensation committees and is the MD of the $2 Billion Activate Capital.',
    },
    {
      face: thacker,
      name: 'Ariana Desiree Thacker, Mentor',
      link: 'linkedin.com/in/arianadthacker',
      cardContent:
        'Thacker is the founding general partner of Conscience VC, a pre-seed fund investing in companies operating at the intersection of science and consumer, with a background in Chemical Engineering from UCLA.',
    },
    {
      face: bhat,
      name: 'Akash Bhat, Mentor ',
      link: 'linkedin.com/in/bhatakash',
      cardContent:
        'Bhat features prominently on the investment and venture studio teams at Scrum Ventures, a VC firm investing between the US-Japan corridor. He led investments in 4 startups, and as a Program Manager, he leads the efforts across 3 studio programs – Sports Tech Tokyo, SmartCityX and Food Tech Studio. ',
    },
    {
      face: patel,
      name: 'Suraj Patel, Mentor ',
      link: 'linkedin.com/in/surajpatel11',
      cardContent:
        'A UC Berkeley alumnus, Patel joined Bow as part of the founding team after working at Looker and TIBCO, helping clients solve their most challenging data problems. He also helps invest in startups from Cal through his fund Bow Capital.',
    },
  ],
  footerLinks: HOME_FOOTER,
};

const CommunityPage = () => {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <CommunityTemplate {...content} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default CommunityPage;
