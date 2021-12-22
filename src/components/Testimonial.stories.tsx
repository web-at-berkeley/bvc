import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Testimonial } from './Testimonial';

export default {
  title: 'Components/Testimonial',
  component: Testimonial,
} as ComponentMeta<typeof Testimonial>;

const Template: ComponentStory<typeof Testimonial> = (args) => <Testimonial {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur sed et at aliquet. Dignissim suspendisse tellus pellentesque erat et elementum eu egestas. Posuere malesuada odio purus feugiat purus volutpat. Ipsum.',
  name: 'Name Name',
};
