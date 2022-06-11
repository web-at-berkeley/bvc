/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { Box, Image, Text } from '@chakra-ui/react';
export type IconCardProps = {
  icon: string;
  title: string;
  body: React.ReactNode;
};

export const IconCard = ({ icon, title, body }: IconCardProps) => {
  return (
    <Box
      h="550px"
      backgroundColor="rgba(248, 248, 248)"
      p="40px"
      shadow="4px 4px 6px gray"
      borderWidth="1px"
      textAlign="center"
      color="#636363"
      minW="330px"
    >
      <Image padding="10px" backgroundColor="#FEC242" borderRadius="100%" src={icon} boxSize="75px" m=" 10px auto" />
      <Text p="25px" textStyle="h4" casing="uppercase">
        {title}
      </Text>
      <Text textStyle="bodyStandard" color="rgba(99, 99, 99, 1)" mt={4}>
        {body}
      </Text>
    </Box>
  );
};
