/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { VStack, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import { PageWrapper } from './PageWrapper';

interface TabsSectionProps {
  title: string;
  section1Body: string;
  tab1Label: string;
  tab2Label: string;
  tab1Body: string;
  tab2Body: string;
}
export const TabsSection = ({ title, section1Body, tab1Label, tab2Label, tab1Body, tab2Body }: TabsSectionProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Box>
      <VStack align="start" maxW={{ xl: '80%' }} m="0 auto">
        <Text textStyle="h1" casing="uppercase" marginTop="70px">
          {title}
        </Text>
        <Text fontSize="20px">{section1Body}</Text>
      </VStack>
      <Tabs index={tabIndex} w="100%" onChange={(index) => setTabIndex(index)}>
        <TabList m={20}>
          <Tab _selected={{ border: 'solid 2.5px', borderRadius: '10px' }} padding="20px" mr="50px">
            {tab1Label}
          </Tab>
          <Tab _selected={{ border: 'solid 2.5px', borderRadius: '10px' }} padding="20px" mr="50px">
            {tab2Label}
          </Tab>
        </TabList>
      </Tabs>
      <Box backgroundColor="#E5E5E5" w="100%" h="400px" p="20px 200px">
        <Text textStyle="bodyLarge">{tabIndex ? tab1Body : tab2Body}</Text>
      </Box>
    </Box>
  );
};
