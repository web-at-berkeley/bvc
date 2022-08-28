import { Button, Input, Textarea, Text, VStack, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';
export type ContactFormProps = {
  label: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ContactForm = ({ label }: ContactFormProps) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    type: label == 0 ? 'Student' : 'Client',
  });
  const [responded, setResponded] = useState(false);
  const onSubmit = (event: any) => {
    console.log(data);
    const className = 'gform';
    const dataEmail = 'berkeleyventurecap@gmail.com';
    console.log(className, dataEmail, event);
    const bodyFormData = new FormData();
    bodyFormData.append('first-name', data.firstName);
    bodyFormData.append('last-name', data.lastName);
    bodyFormData.append('email', data.email);
    bodyFormData.append('message', data.message);
    axios({
      method: 'post',
      url: 'https://script.google.com/macros/s/AKfycbznMYm5W_MWzw2kAEpZ8iOeXoE3hfHDsq0T7DmbNWN5U-M_wE2_Mmqwip8Iqflwn-Yk/exec',
      data: bodyFormData,
    })
      .then(function (response) {
        console.log(response);
        setResponded(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    // className="gform"
    // data-email="berkeleyventurecap@gmail.com"
    // action="https://script.google.com/macros/s/AKfycbznMYm5W_MWzw2kAEpZ8iOeXoE3hfHDsq0T7DmbNWN5U-M_wE2_Mmqwip8Iqflwn-Yk/exec"
  };

  return (
    <form
      className="gform "
      method="POST"
      data-email="berkeleyventurecap@gmail.com"
      action="https://script.google.com/macros/s/AKfycbznMYm5W_MWzw2kAEpZ8iOeXoE3hfHDsq0T7DmbNWN5U-M_wE2_Mmqwip8Iqflwn-Yk/exec"
    >
      {responded ? (
        <Text mb="170px" textStyle="h4" color="black" casing="uppercase">
          Thanks for the response!
        </Text>
      ) : (
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
              onChange={(event) => {
                const dataCopy = { ...data };
                dataCopy.firstName = event.target.value;
                setData(dataCopy);
              }}
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
              onChange={(event) => {
                const dataCopy = { ...data };
                dataCopy.lastName = event.target.value;
                setData(dataCopy);
              }}
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
              onChange={(event) => {
                const dataCopy = { ...data };
                dataCopy.email = event.target.value;
                setData(dataCopy);
              }}
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
              onChange={(event) => {
                const dataCopy = { ...data };
                dataCopy.message = event.target.value;
                setData(dataCopy);
              }}
            />
            <Input for="honeypot" id="honeypot" type="text" name="honeypot" value="" hidden />
            <Input
              for="type"
              id="type"
              type="type"
              name="type"
              value={label == 0 ? 'Student' : 'Client'}
              onChange={(event) => {
                const dataCopy = { ...data };
                dataCopy.type = event.target.value;
                setData(dataCopy);
              }}
              hidden
            />
          </Stack>
          <Button onClick={onSubmit} className="button-success pure-button button-xlarge" size="lg">
            SEND MESSAGE&nbsp;
          </Button>
        </VStack>
      )}
    </form>
  );
};
