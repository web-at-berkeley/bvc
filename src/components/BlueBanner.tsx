import { Box, Button, Link, Text } from '@chakra-ui/react';
import React from 'react';
export type BlueBannerProps = {
  title: string;
  body: string;
  link: string;
};
export const BlueBanner = ({ title, body, link }: BlueBannerProps) => {
  return (
    <Box backgroundColor="blue" w="100%" p="70px 10%" m="100px 0">
      <Text textStyle="h4" fontSize="48px" fontWeight="700" casing="uppercase" mb="10px" color="white">
        {title}
      </Text>
      <Text color="white" textStyle="bodyLarge">
        {body}
      </Text>
      <Link isExternal={true} href={link}>
        <Button position="relative" left="80%" shadow="none">
          RSVP
        </Button>
      </Link>
    </Box>
  );
};
