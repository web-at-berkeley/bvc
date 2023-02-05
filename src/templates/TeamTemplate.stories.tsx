import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TeamTemplate } from './TeamTemplate';
// import placeholder from '../assets/images/teamPlaceholder.png';

export default {
  title: 'Templates/TeamTemplate',
  component: TeamTemplate,
} as ComponentMeta<typeof TeamTemplate>;

const Template: ComponentStory<typeof TeamTemplate> = (args) => <TeamTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // title: 'Our Team',
  // people: [
  //   {
  //     photo: placeholder,
  //     title: 'President',
  //     name: 'Name Name',
  //   },
  //   {
  //     photo: placeholder,
  //     title: 'Vice President',
  //     name: 'Name Name',
  //   },
  //   {
  //     photo: placeholder,
  //     title: 'Director of Curriculum',
  //     name: 'Name Name',
  //   },
  //   {
  //     photo: placeholder,
  //     title: 'Director of Services',
  //     name: 'Name Name',
  //   },
  //   {
  //     photo: placeholder,
  //     title: 'Director of Internal',
  //     name: 'Name Name',
  //   },
  //   {
  //     photo: placeholder,
  //     title: 'Director of Community',
  //     name: 'Name Name',
  //   },
  // ],
  // bottomText:
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A interdum ac maecenas felis cras odio. Tellus lectus mollis at ultricies velit eu consequat, donec nibh. At quis habitant vel donec purus. Volutpat ac amet, morbi nibh diam tincidunt sed dolor. Convallis aenean et eget sed.',
  // bottomText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
  navLinks: {
    pages: [
      { linkText: 'Home', linkTarget: '/' },
      { linkText: 'Services', linkTarget: '/' },
      { linkText: 'Education', linkTarget: '/' },
      { linkText: 'Team', linkTarget: '/team' },
      { linkText: 'Join', linkTarget: '/' },
      { linkText: 'Contact', linkTarget: '/contact' },
      { linkText: 'Portal', linkTarget: '/' },
    ],
  },
  // footerLinks: [
  //   'https://www.facebook.com/',
  //   'https://www.instagram.com/',
  //   'https://www.linkedin.com/',
  //   'email@example.com',
  // ],
};
