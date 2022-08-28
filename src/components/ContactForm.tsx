import { Button, Input, Textarea, VStack, Stack } from '@chakra-ui/react';
import React from 'react';

export type ContactFormProps = {
  label: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ContactForm = ({ label }: ContactFormProps) => {
  return (
    <form
      className="gform"
      method="POST"
      data-email="berkeleyventurecap@gmail.com"
      action="https://script.google.com/macros/s/AKfycbznMYm5W_MWzw2kAEpZ8iOeXoE3hfHDsq0T7DmbNWN5U-M_wE2_Mmqwip8Iqflwn-Yk/exec"
    >
      <VStack spacing="28px">
        <Stack direction={['column', 'column', 'column', 'column', 'row']} spacing="43px">
          <Input
            borderColor="blue"
            borderWidth="2px"
            placeholder="First Name *"
            textStyle="bodyLarge"
            fontWeight="500"
            id="first-name"
            name="first-name"
            isRequired
          />
          <Input
            placeholder="Last Name *"
            borderWidth="2px"
            textStyle="bodyLarge"
            fontWeight="500"
            id="last-name"
            name="last-name"
            isRequired
          />
        </Stack>
        <Stack spacing="20px">
          <Input
            width={['370px', '370px', '370px', '370px', '783px']}
            placeholder="Email Address *"
            borderWidth="2px"
            textStyle="bodyLarge"
            fontWeight="500"
            id="email"
            name="email"
            type="email"
            isRequired
          />
          <Textarea
            fontWeight="500"
            borderColor="blue"
            borderWidth="2px"
            minHeight="216px"
            maxHeight="400px"
            textStyle="bodyLarge"
            placeholder="Message *"
            id="message"
            name="message"
            isRequired
          />
          <Input for="honeypot" id="honeypot" type="text" name="honeypot" value="" hidden />
          <Input for="type" id="type" type="type" name="type" value={label == 0 ? 'Student' : 'Client'} hidden />
        </Stack>
        <Button type="submit" className="button-success pure-button button-xlarge" size="lg">
          SEND MESSAGE&nbsp;
        </Button>
      </VStack>
    </form>
  );
};
