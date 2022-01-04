import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Footer, Header, HeaderProps } from '../components';

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
    <Flex direction="column" align="center" maxW={{ xl: '1200px' }} m="0 auto">
      <Header {...navLinks} />
      <Heading>{title}</Heading>
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
      <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
    </Flex>
  );
};
