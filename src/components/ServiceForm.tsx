/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Input, VStack, Button, HStack, Text, Textarea } from '@chakra-ui/react';
export const ServiceForm = () => {
  return (
    <VStack spacing="28px">
      <HStack spacing="43px">
        <Input size="md" placeholder="Company Name *" />
        <Input placeholder="Email Address *" />
      </HStack>
      <Textarea borderColor="black" minHeight="114px" maxHeight="400px" placeholder="Message" />
      <Button _hover={{ bg: '#FFA820' }} size="lg" backgroundColor="orange">
        <Text textStyle="bodyLarge">Send Message</Text>
      </Button>
    </VStack>
  );
};
