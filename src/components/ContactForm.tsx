import { Button, Input, Textarea, VStack, Stack } from '@chakra-ui/react';
import React from 'react';

export type ContactFormProps = {
  label: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ContactForm = ({ label }: ContactFormProps) => {
  return (
    <form
      className="gform"
      method="POST"
      data-email="ishanthewizard@gmail.com"
      action="https://script.google.com/macros/s/AKfycbyAPi_eb4spI3CL1dIY1T2tpoYbIbPqYx2nZYwviSgQJ73db88q8owZU1zBDy3xjzZ7FQ/exec"
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
        </Stack>
        <Button type="submit" className="button-success pure-button button-xlarge" size="lg">
          SEND MESSAGE&nbsp;
        </Button>
      </VStack>
    </form>
  );
};
