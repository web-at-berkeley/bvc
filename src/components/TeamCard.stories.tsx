import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TeamCard } from './TeamCard';
// @ts-ignore
import placeholder from '../assets/images/teamPlaceholder.png';

export default {
  title: 'Components/TeamCard',
  component: TeamCard,
} as ComponentMeta<typeof TeamCard>;

const Template: ComponentStory<typeof TeamCard> = (args) => <TeamCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  photo: placeholder,
  title: 'President',
  name: 'Name Name',
};
