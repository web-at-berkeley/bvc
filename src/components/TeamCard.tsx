import React from 'react';

import { Box, VStack, Text, Image } from '@chakra-ui/react';

export type TeamCardProps = {
  photo: string;
  title: string;
  name: string;
};

export const TeamCard = ({ photo, title, name }: TeamCardProps) => (
  <Box w="330px">
    <VStack>
      <Image src={photo} alt={name} />
      <Text textStyle="h4" textAlign="center" maxW="250px">
        {title}
      </Text>
      <Text textStyle="bodyLarge">{name}</Text>
    </VStack>
  </Box>
);
