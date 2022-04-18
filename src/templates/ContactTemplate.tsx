import React from 'react';
import { Box, Text, VStack, Spacer, Tabs, TabList, Tab, HStack } from '@chakra-ui/react';
import { ContactForm, Footer, Header, HeaderProps, PageWrapper } from '../components';

interface ContactTemplateProps {
  title: string;
  subtitle: string;
  tabLabels: string[];
  navLinks: HeaderProps;
  footerLinks: string[];
}

export const ContactTemplate = ({ title, subtitle, tabLabels, navLinks, footerLinks }: ContactTemplateProps) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <PageWrapper>
      <Header {...navLinks} />
      <VStack maxW={{ xl: '80%' }} m="0 auto">
        <Text textStyle="h1" casing="uppercase" mb="37px">
          {title}
        </Text>
        <HStack w="100%" alignItems="start" justifyContent="space-around" spacing="80px">
          <Text w="331px" textStyle="bodyLarge">
            {subtitle}
          </Text>
          <VStack w="100%" align="start" spacing="77px">
            <Box>
              <Tabs index={tabIndex} w="100%" onChange={(index) => setTabIndex(index)}>
                <TabList>
                  <Tab _selected={{ border: 'solid 2.5px', borderRadius: '10px' }} padding="20px" mr="50px">
                    <Text textStyle="h5" casing="uppercase">
                      {tabLabels[0]}
                    </Text>
                  </Tab>
                  <Tab _selected={{ border: 'solid 2.5px', borderRadius: '10px' }} padding="20px" mr="50px">
                    <Text textStyle="h5" casing="uppercase">
                      {tabLabels[1]}
                    </Text>
                  </Tab>
                </TabList>
              </Tabs>
            </Box>
            <Box>
              <ContactForm />
            </Box>
          </VStack>
        </HStack>
      </VStack>
      <Spacer />
      <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
    </PageWrapper>
  );
};
