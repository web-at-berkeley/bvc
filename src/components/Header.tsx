import React from 'react';

import { Box, HStack, Text } from '@chakra-ui/react';

interface HeaderProps {
  pages: string[];
}

export const Header = ({ pages }: HeaderProps) => (
  <Box w="100%" h="70" backgroundColor="#E5E5E5">
    <HStack>
      <Text>BVC</Text>
      {pages[0]}
    </HStack>
  </Box>
);
