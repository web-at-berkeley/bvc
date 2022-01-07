import React from 'react';
import { Box, Flex, Text, VStack, Spacer } from '@chakra-ui/react';
import { Footer, Header, HeaderProps, PageWrapper } from '../components';

interface ContactTemplateProps {
  title: string;
  subtitle: string;
  tabLabels: string[];
  navLinks: HeaderProps;
  footerLinks: string[];
}

export const ContactTemplate = ({ title, subtitle, tabLabels, navLinks, footerLinks }: ContactTemplateProps) => {
  //   const [index, setIndex] = React.useState(0);
  return (
    <PageWrapper>
      <Header {...navLinks} />
      <VStack maxW={{ xl: '80%' }} m="0 auto">
        <Text textStyle="h1" casing="uppercase">
          {title}
        </Text>
        <Flex w="100%" justifyContent="space-around">
          <Text>{subtitle}</Text>
          <Box>
            <Box>
              <Text>TabList here, {tabLabels}</Text>
            </Box>
            <Box>
              <Text>Form inputs and submit button</Text>
            </Box>
          </Box>
        </Flex>
      </VStack>
      <Spacer />
      <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
    </PageWrapper>
  );
};
