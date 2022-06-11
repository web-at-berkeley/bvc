import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomeTemplate } from './HomeTemplate';
import { content } from '../pages/index';

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
} as ComponentMeta<typeof HomeTemplate>;

const Template: ComponentStory<typeof HomeTemplate> = (args) => <HomeTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = content;
