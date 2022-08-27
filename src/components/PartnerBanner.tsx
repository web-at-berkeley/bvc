import { Stack, Image, Text, VStack, Button, Link } from '@chakra-ui/react';
import React from 'react';

export type PartnerBannerProps = {
  bottomPic: any;
  bottomTitle: string;
  bottomText: string;
  buttonText: string;
  link: string;
};
export const PartnerBanner = ({ bottomPic, bottomTitle, bottomText, buttonText, link }: PartnerBannerProps) => {
  return (
    <Stack
      direction={['column', 'column', 'column', 'row']}
      spacing="100px"
      w="100%"
      backgroundColor="lightGray"
      mb="58px"
      p="7%"
      align="center"
    >
      <Image boxSize="250px" src={bottomPic} />
      <VStack spacing="30px" w="70%" align="start">
        <Text fontSize="25" fontWeight="700" weight>
          {bottomTitle}
        </Text>
        <Text mb="50px" textStyle="h5">
          {bottomText}
        </Text>
        <Link isExternal={true} href={link}>
          <Button padding="0 30px" position="relative" left={['25%', '25%', '25%', '70%']}>
            {buttonText}
          </Button>
        </Link>
      </VStack>
    </Stack>
  );
};
