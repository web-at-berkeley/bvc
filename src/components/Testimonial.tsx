import React from 'react';

import { Box, HStack, Text } from '@chakra-ui/react';

interface TestimonialProps {
  body: string;
  name: string;
}

export const Testimonial = ({ body, name }: TestimonialProps) => (
  <Box w="100%" h="149">
    <HStack>
      {body}
      {name}
      <Text>Testimonial</Text>
    </HStack>
  </Box>
);
