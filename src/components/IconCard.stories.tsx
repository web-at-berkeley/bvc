import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconCard } from './IconCard';

export default {
  title: 'Components/IconCard',
  component: IconCard,
} as ComponentMeta<typeof IconCard>;

const Template: ComponentStory<typeof IconCard> = (args) => <IconCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: 'circle',
  title: 'Education',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur sed et at aliquet. Dignissim suspendisse tellus pellentesque erat et elementum eu egestas. Posuere malesuada odio purus feugiat purus volutpat. Ipsum.',
};
