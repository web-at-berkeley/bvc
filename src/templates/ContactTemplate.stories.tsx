import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContactTemplate } from './ContactTemplate';

export default {
  title: 'Templates/ContactTemplate',
  component: ContactTemplate,
} as ComponentMeta<typeof ContactTemplate>;

const Template: ComponentStory<typeof ContactTemplate> = (args) => <ContactTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Get In Touch With Us',
  subtitle: 'Subtitle',
  tabLabels: ['Student', 'Client'],
  navLinks: {
    pages: [
      { linkText: 'Home', linkTarget: '/' },
      { linkText: 'Services', linkTarget: '/' },
      { linkText: 'Education', linkTarget: '/' },
      { linkText: 'Team', linkTarget: '/' },
      { linkText: 'Join', linkTarget: '/' },
      { linkText: 'Contact', linkTarget: '/contact' },
      { linkText: 'Portal', linkTarget: '/' },
    ],
  },
  footerLinks: [
    'https://www.facebook.com/',
    'https://www.instagram.com/',
    'https://www.linkedin.com/',
    'email@example.com',
  ],
};
