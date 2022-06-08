import { Button, Input, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import FadeIn from 'react-fade-in';
import { Header, HeaderProps, PageWrapper } from '../components';
export type PortalTemplateProps = {
  navLinks: HeaderProps;
};
export const PortalTemplate = ({ navLinks }: PortalTemplateProps) => {
  return (
    <PageWrapper>
      <FadeIn transitionDuration={750} delay={200}>
        <Header {...navLinks} />
        <VStack justify="space-between" m="auto 0" position="relative" bottom="50px" spacing="20px">
          <Text textStyle="h1" casing="uppercase" color="white">
            Member Portal
          </Text>
          <VStack>
            <Input fontSize="20px" color="white" placeholder="Email" />
            <Spacer />
            <Input fontSize="20px" color="white" type="password" placeholder="Password" />
          </VStack>
          <Button position="relative" top="20px">
            Login
          </Button>
        </VStack>
      </FadeIn>
    </PageWrapper>
  );
};
