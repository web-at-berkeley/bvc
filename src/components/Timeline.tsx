import React from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';

export type TimelineProps = { events: string[] };

export const Timeline: React.FC<TimelineProps> = ({ events }: TimelineProps) => {
  const HEIGHT_PER_EVENT = 72;
  return (
    <HStack gap="30px">
      <Box backgroundColor="white" w="5px" h={`${events.length * HEIGHT_PER_EVENT}px`}></Box>
      <VStack align="start" spacing="40px">
        {events.map((event, idx) => (
          <Text fontWeight="600" casing="uppercase" textStyle="h5" color="white" key={idx}>
            {event}
          </Text>
        ))}
      </VStack>
    </HStack>
  );
};
