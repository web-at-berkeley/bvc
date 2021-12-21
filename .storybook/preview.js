import { ChakraProvider } from "@chakra-ui/provider"
import theme from '../src/theme';
import Fonts from '../src/fonts';
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