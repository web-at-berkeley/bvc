import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pages: [
    { linkText: 'Home', linkTarget: '/' },
    { linkText: 'Services', linkTarget: '/' },
    { linkText: 'Education', linkTarget: '/' },
    { linkText: 'Team', linkTarget: '/' },
    { linkText: 'Join', linkTarget: '/' },
    { linkText: 'Contact', linkTarget: '/contact' },
    { linkText: 'Portal', linkTarget: '/' },
  ],
};
