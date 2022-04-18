import React from 'react';
import { Box, Text, Center, ListItem, UnorderedList } from '@chakra-ui/react';
export type WideCardProps = {
  title: string;
  body: string;
  list: Array<string>;
};

export const WideCard = ({ title, body, list }: WideCardProps) => {
  return (
    <Box
      w={{ base: '100%', lg: '660px' }}
      h="503px"
      backgroundColor="rgba(229, 229, 229, 0.25);"
      p={10}
      shadow="md"
      borderWidth="1px"
    >
      <Center>
        <Text textStyle="h4">{title}</Text>
      </Center>

      <Text mt={4} textStyle="bodyStandard">
        {body}
      </Text>
      <br />
      <UnorderedList>
        {list.map((item, _key) => (
          <ListItem key={_key}>{item}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
