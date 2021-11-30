import * as React from 'react';

import { ChakraProvider, Container, Stack, Heading, Text } from '@chakra-ui/react';

import Fonts from '../fonts/fonts';
import theme from '../theme/theme';

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Container>
        <Stack>
          <Heading>The spectacle before us was indeed sublime.</Heading>
          <Text>
            Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had
            ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on
            a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense
            dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a
            ruddy light streaming through a rift in the clouds.
          </Text>
        </Stack>
      </Container>
    </ChakraProvider>
  );
};

export default IndexPage;
