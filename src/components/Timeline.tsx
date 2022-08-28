import { Box, HStack, VStack, Text } from '@chakra-ui/react';
import React from 'react';

export type TimelineProps = {
  dates: string[];
  events: string[];
};
export const Timeline = ({ dates, events }: TimelineProps) => {
  const lister = (lst: string[]) => {
    return lst.map((event, idx) => {
      return (
        <Text
          fontWeight="600"
          color={lst[0] !== dates[0] ? 'white' : 'orange'}
          casing="uppercase"
          textStyle="h5"
          key={idx}
        >
          {event}
        </Text>
      );
    });
  };
  const h = dates.length * 70 + 10;

  return (
    <HStack gap="30px">
      <VStack align="start" spacing={['90px', '90px', '40px', '80px', '40px']}>
        {lister(dates)}
      </VStack>
      <Box backgroundColor="white" w="5px" h={String(h) + 'px'}></Box>
      <VStack align="start" spacing="40px">
        {lister(events)}
      </VStack>
    </HStack>
  );
};
