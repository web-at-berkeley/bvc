import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
  email: 'email@example.com',
};
