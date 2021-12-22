import React from 'react';

import { Box, HStack, Text } from '@chakra-ui/react';

interface FooterProps {
  facebook: string;
  instagram: string;
  linkedin: string;
  email: string;
}

export const Footer = ({ facebook, instagram, linkedin, email }: FooterProps) => (
  <Box w="100%" h="70" backgroundColor="#464646">
    <HStack>
      <Text>{facebook}</Text>
      <Text>{instagram}</Text>
      <Text>{linkedin}</Text>
      <Text>{email}</Text>
    </HStack>
  </Box>
);
