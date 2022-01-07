import React from 'react';

import { Flex } from '@chakra-ui/react';

export const PageWrapper = ({ children }) => (
  <Flex direction="column" w="100%" minH={{ base: '100vh' }}>
    {children}
  </Flex>
);
