import React from 'react';

import { Box, HStack, Text } from '@chakra-ui/react';

interface IconCardProps {
  icon: string;
  title: string;
  body: string;
}

export const IconCard = ({ icon, title, body }: IconCardProps) => (
  <Box w="100%" h="70" backgroundColor="#E5E5E5">
    <HStack>
      {icon}
      {title}
      {body}
      <Text>Icon card.</Text>
    </HStack>
  </Box>
);
