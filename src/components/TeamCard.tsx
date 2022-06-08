import React from 'react';

import { VStack, Text, Image, Link } from '@chakra-ui/react';

export type TeamCardProps = {
  photo: string;
  title: string;
  name: string;
  to: string;
};

export const TeamCard = ({ photo, title, name, to }: TeamCardProps) => (
  <Link w="330px" href={'https://' + to} textDecoration="none" _hover={{ textDecoration: 'none' }} isExternal={true}>
    <VStack>
      <Image minW="300px" src={photo} alt={name} />
      <Text casing="uppercase" textStyle="h4" textAlign="center" m="0 -5">
        {title}
      </Text>
      <Text textStyle="bodyLarge">{name}</Text>
    </VStack>
  </Link>
);
