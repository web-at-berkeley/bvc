import React from 'react';
import { Box, Text, VStack, Spacer, Tabs, TabList, Tab, Stack } from '@chakra-ui/react';
import { ContactForm, Footer, FooterProps, Header, HeaderProps, PageWrapper } from '../components';
import FadeIn from 'react-fade-in';

export type ContactTabProps = {
  label: string;
  leftText: React.ReactNode;
};
interface ContactTemplateProps {
  title: string;
  tabs: ContactTabProps[];
  navLinks: HeaderProps;
  footerLinks: FooterProps;
}

export const ContactTemplate = ({ title, tabs, navLinks, footerLinks }: ContactTemplateProps) => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <PageWrapper>
      <FadeIn transitionDuration={750} delay={200}>
        <Header {...navLinks} />
        <VStack maxW="90%" align="start" p="5%">
          <Text textStyle="h1" fontSize={['48px', '48px', '50px', '76px']} casing="uppercase" mb="37px">
            {title}
          </Text>
          <Stack
            width="100%"
            direction={['column', 'column', 'column', 'row']}
            alignItems="start"
            justifyContent="space-between"
            spacing="7%"
          >
            <VStack minWidth="50%">
              <Text w="100%" textStyle="bodyLarge">
                {tabs[tabIndex].leftText}
              </Text>
            </VStack>

            <VStack w="100%" align="start" spacing="77px">
              <Box>
                <Tabs index={tabIndex} w="100%" onChange={(index: number) => setTabIndex(index)}>
                  <TabList>
                    {tabs.map((tab, index) => (
                      <Tab
                        _selected={{ border: 'solid 2.5px #000057', borderRadius: '10px' }}
                        key={index}
                        padding="20px"
                        mr="50px"
                      >
                        <Text m="auto" textStyle="h5" casing="uppercase" fontWeight="600">
                          {tab.label}
                        </Text>
                      </Tab>
                    ))}
                  </TabList>
                </Tabs>
              </Box>
              <Box>
                <ContactForm label={tabIndex} />
              </Box>
            </VStack>
          </Stack>
        </VStack>
        <Spacer />
        <Footer {...footerLinks} />
      </FadeIn>
    </PageWrapper>
  );
};
