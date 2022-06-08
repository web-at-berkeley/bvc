/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box, Image, Text, Link, textDecoration } from '@chakra-ui/react';
export type CommunityCardProps = {
  image: string;
  title: string;
  body: string;
  to: string;
};

export const CommunityCard = ({ image, title, body, to }: CommunityCardProps) => {
  console.log(to);
  return (
    <Link
      w="450px"
      backgroundColor="rgba(248, 248, 248)"
      p="40px"
      m="0px 20px"
      shadow="md"
      borderWidth="1px"
      textAlign="center"
      color="#636363"
      boxShadow="lg"
      href={'https://' + to}
      textDecoration="none"
      isExternal={true}
      _hover={{ textDecoration: 'none' }}
    >
      <Image borderRadius="100%" src={image} boxSize="170px" m=" 10px auto" />
      <Text m="0 -20px" textStyle="bodyLarge" fontWeight="700" casing="uppercase">
        {title}
      </Text>
      <Text m="20px 20px" textStyle="bodyStandard">
        {body}
      </Text>
    </Link>
  );
};
