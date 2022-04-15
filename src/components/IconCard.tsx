/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Box, Heading, Image, Text } from '@chakra-ui/react';
export type IconCardProps = {
  icon: string;
  title: string;
  body: string;
};

export const IconCard = ({ icon, title, body }: IconCardProps) => {
  return (
    <Box w="25%" h="500px" backgroundColor="#FFFFFF" p={5} shadow="md" borderWidth="1px">
      <Image src={icon} boxSize="50px" m=" 10px auto" />
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{body}</Text>
    </Box>
  );
};
