/* eslint-disable @typescript-eslint/no-empty-function */
import { ChakraProvider } from '@chakra-ui/provider';
import { action } from '@storybook/addon-actions';
import React from 'react';

import theme from '../src/theme';
import Fonts from '../src/fonts';

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';

window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <StoryFn />
    </ChakraProvider>
  );
};

export const decorators = [withChakra];
