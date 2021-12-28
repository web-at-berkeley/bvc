import { ChakraProvider } from "@chakra-ui/provider"
import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
    
import theme from '../src/theme';
import Fonts from '../src/fonts';

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
const withChakra = (StoryFn) => {

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]