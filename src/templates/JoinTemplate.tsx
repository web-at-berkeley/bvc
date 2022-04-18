import { Text } from '@chakra-ui/react';
import React from 'react';
import { Header, HeaderProps, PageWrapper } from '../components';
export type JoinTemplateProps = {
  navLinks: HeaderProps;
};
export const JoinTemplate = ({ navLinks }: JoinTemplateProps) => {
  return (
    <PageWrapper>
      <Header {...navLinks} />
      <Text textStyle="h1" casing="uppercase" m="75px 175px">
        Member Portal
      </Text>
    </PageWrapper>
  );
};
