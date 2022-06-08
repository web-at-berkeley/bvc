import { Button, Input, Textarea, VStack, Stack } from '@chakra-ui/react';
import React from 'react';

export const ContactForm = () => {
  return (
    <VStack spacing="28px">
      <Stack direction={['column', 'column', 'column', 'column', 'row']} spacing="43px">
        <Input borderColor="blue" borderWidth="2px" placeholder="First Name *" textStyle="bodyLarge" fontWeight="500" />
        <Input placeholder="Last Name *" borderWidth="2px" textStyle="bodyLarge" fontWeight="500" />
      </Stack>
      <Input
        size="lg"
        width={['370px', '370px', '370px', '370px', '783px']}
        borderColor="blue"
        placeholder="Email Address *"
        fontWeight="500"
        textStyle="blue"
        borderWidth="2px"
      />
      <Textarea
        fontWeight="500"
        borderColor="blue"
        borderWidth="2px"
        minHeight="216px"
        maxHeight="400px"
        textStyle="bodyLarge"
        placeholder="Message *"
      />
      <Button size="lg">SEND MESSAGE</Button>
    </VStack>
  );
};
