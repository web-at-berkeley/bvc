/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box, Flex, Text, VStack, Spacer } from '@chakra-ui/react';
import { Footer, Header, HeaderProps, PageWrapper, TabsSection } from '../components';

interface ServiceTemplateProps {
  title: string;
  section1Body: string;
  navLinks: HeaderProps;
  footerLinks: string[];
  tab1Label: string;
  tab2Label: string;
  tab1Body: string;
  tab2Body: string;
}

export const ServiceTemplate = ({
  title,
  section1Body,
  navLinks,
  tab1Label,
  tab2Label,
  tab1Body,
  tab2Body,
  footerLinks,
}: ServiceTemplateProps) => {
  return (
    <PageWrapper>
      <Header {...navLinks} />
      <TabsSection
        title={title}
        section1Body={section1Body}
        tab1Label={tab1Label}
        tab2Label={tab2Label}
        tab1Body={tab1Body}
        tab2Body={tab2Body}
      />
      <Spacer />
      <Box backgroundColor="#E5E5E5" w="100%"></Box>
      <Box h="477px"></Box>
      <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
    </PageWrapper>
  );
};
