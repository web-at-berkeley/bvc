import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from './Tabs';
import Tab from './Tab';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Primary = () => (
  <Tabs>
      <Tab title="Lemon">Lemon is yellow</Tab>
      <Tab title="Strawberry">Strawberry is red</Tab>
      <Tab title="Pear">Pear is green</Tab>
    </Tabs>
);
