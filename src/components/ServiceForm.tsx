/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Input, VStack, Button, HStack, Text, Textarea } from '@chakra-ui/react';
export const ServiceForm = () => {
  return (
    <VStack spacing="28px">
      <HStack spacing="43px">
        <Input size="md" placeholder="Company Name" />
        <Input placeholder="Email Address" />
      </HStack>
      <Textarea borderColor="black" minHeight="114px" maxHeight="400px" placeholder="Message" />
      <Button>Send Message</Button>
    </VStack>
  );
};
