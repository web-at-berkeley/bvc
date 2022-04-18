import React, { useState } from 'react';
import { Box, Text, VStack, Spacer, Tabs, TabList, Tab, Stack, HStack } from '@chakra-ui/react';
import { Footer, Header, HeaderProps, PageWrapper, ServiceForm } from '../components';
import { WideCard } from '../components/WideCard';
interface ServiceTemplateProps {
  title: string;
  section1Body: string;
  navLinks: HeaderProps;
  footerLinks: string[];
  tab1Label: string;
  tab2Label: string;
  tab1Body: string;
  wideCardTitle1: string;
  wideCardTitle2: string;
  wideCardBody1: string;
  wideCardBody2: string;
  wideCardList1: Array<string>;
}

export const ServiceTemplate = ({
  title,
  section1Body,
  navLinks,
  tab1Label,
  tab2Label,
  tab1Body,
  footerLinks,
  wideCardTitle1,
  wideCardTitle2,
  wideCardBody1,
  wideCardBody2,
  wideCardList1,
}: ServiceTemplateProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <PageWrapper>
      <Header {...navLinks} />
      <VStack align="start" maxW={{ xl: '80%' }} m="0 auto">
        <Text textStyle="h1" casing="uppercase" marginTop="70px">
          {title}
        </Text>
        <Text textStyle="bodyLarge">{section1Body}</Text>
      </VStack>
      <Tabs index={tabIndex} w="100%" onChange={(index) => setTabIndex(index)}>
        <TabList m={20}>
          <Tab _selected={{ border: 'solid 2.5px', borderRadius: '10px' }} padding="20px" mr="50px">
            <Text textStyle="h5" casing="uppercase">
              {tab1Label}
            </Text>
          </Tab>
          <Tab _selected={{ border: 'solid 2.5px', borderRadius: '10px' }} padding="20px" mr="50px">
            <Text textStyle="h5" casing="uppercase">
              {tab2Label}
            </Text>
          </Tab>
        </TabList>
      </Tabs>

      {tabIndex ? (
        <Box backgroundColor="#E5E5E5" w="100%" h="503px" p="100px 200px">
          <Text textStyle="bodyLarge">{tab1Body}</Text>{' '}
        </Box>
      ) : (
        <Stack direction={{ base: 'column', xl: 'row' }} justify="space-around">
          <WideCard title={wideCardTitle1} body={wideCardBody1} list={wideCardList1} />
          <WideCard title={wideCardTitle2} body={wideCardBody2} list={[]} />
        </Stack>
      )}
      <Spacer />
      <HStack justify="space-between" h="477px" p={20} m="30px 400px">
        <Text position="relative" bottom="20px" textStyle="bodyLarge" w="25%">
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nec, pretium natoque ultricies vulputate sed. At
          eget libero libero pellentesque quis adipiscing!
        </Text>
        <ServiceForm />
      </HStack>
      <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
    </PageWrapper>
  );
};
