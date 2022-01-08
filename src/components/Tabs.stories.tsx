import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Tabs from './Tabs';
import Tab from './Tab';
import Contact from './ContactForm';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Primary = () => (
  <Tabs>
    <Tab title="Student">
      <Contact></Contact>
    </Tab>
    <Tab title="Client">Client form</Tab>
  </Tabs>
);
