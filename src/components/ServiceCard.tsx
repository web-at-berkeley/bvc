import { Text, Image, VStack } from '@chakra-ui/react';
import React from 'react';

export type ServiceCardProps = {
  title: string;
  image: any;
};
export const ServiceCard = ({ title, image }: ServiceCardProps) => {
  return (
    <VStack
      w={['300px', '300px', '450px']}
      spacing="40px"
      h={['300px', '300px', '304px']}
      backgroundColor="#FFFFFF;"
      p={10}
      shadow="3px 3px 5px rgba(0, 0, 0, 0.2)"
      borderWidth="1px"
    >
      <Image src={image} />
      <Text textStyle="bodyLarge" fontSize="30px" textAlign="center" casing="uppercase">
        {title}
      </Text>
    </VStack>
  );
};
