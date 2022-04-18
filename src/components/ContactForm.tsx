import { Button, HStack, Input, Textarea, VStack } from '@chakra-ui/react';
import React from 'react';

export const ContactForm = () => {
  return (
    <VStack spacing="28px">
      <HStack spacing="43px">
        <Input size="md" placeholder="First Name" />
        <Input placeholder="Last Name" />
      </HStack>
      <Input size="lg" placeholder="Email Address" />
      <Textarea borderColor="black" minHeight="216px" maxHeight="400px" placeholder="Message" />
      <Button>Send Message</Button>
    </VStack>
  );
};
