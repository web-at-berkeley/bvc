import React from 'react';
import { Box, Text, VStack, Spacer, Tabs, TabList, Tab, Stack } from '@chakra-ui/react';
import { ContactForm, Footer, Header, HeaderProps, PageWrapper } from '../components';
import FadeIn from 'react-fade-in';

interface ContactTemplateProps {
  title: string;
  subtitle: string[];
  tabLabels: string[];
  navLinks: HeaderProps;
  footerLinks: string[];
}

export const ContactTemplate = ({ title, tabLabels, navLinks }: ContactTemplateProps) => {
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
                {tabIndex
                  ? 'Questions about recruitment, DeCal, fellowship curriculum, etc.? Fill out the form on the right, and we will reach out to you! '
                  : 'Interested in learning more about us and potentially partnering with BVC? We welcome all professional partnerships! Fill out the form on the right, and we will reach out to you within 1-3 business days.'}
              </Text>
              <Text fontWeight="700" w="100%" textStyle="bodyLarge">
                {tabIndex
                  ? 'For organization/corporate partnership inquiries, please select "Client."'
                  : 'For recruitment and curricular inquiries, please select "Student."'}
              </Text>
            </VStack>

            <VStack w="100%" align="start" spacing="77px">
              <Box>
                <Tabs index={tabIndex} w="100%" onChange={(index) => setTabIndex(index)}>
                  <TabList>
                    <Tab _selected={{ border: 'solid 2.5px #000057', borderRadius: '10px' }} padding="20px" mr="50px">
                      <Text m="auto" textStyle="h5" casing="uppercase" fontWeight="600">
                        {tabLabels[0]}
                      </Text>
                    </Tab>
                    <Tab _selected={{ border: 'solid 2.5px #000057', borderRadius: '10px' }} padding="20px" mr="50px">
                      <Text m="auto" textStyle="h5" casing="uppercase" fontWeight="600">
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
          </Stack>
        </VStack>
        <Spacer />
        <Footer />
      </FadeIn>
    </PageWrapper>
  );
};
