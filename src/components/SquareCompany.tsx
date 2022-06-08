import { Image, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export type SquareCompanyProps = {
  image: any;
  title: string;
  link: string;
};
export const SquareCompany = ({ image, title, link }: SquareCompanyProps) => {
  return (
    <Link isExternal href={link}>
      <VStack
        margin="30px"
        justify="center"
        align="center"
        backgroundColor="lightGray"
        minW="370px"
        minH="370px"
        padding="20px"
      >
        <Image size="50px" src={image} />
        <Text
          position="relative"
          bottom={title === 'Work Bistro' ? '15px' : '0'}
          fontWeight="700"
          fontSize="25px"
          color="black"
          fontFamily="Helvetica"
        >
          {title}
        </Text>
      </VStack>
    </Link>
  );
};
