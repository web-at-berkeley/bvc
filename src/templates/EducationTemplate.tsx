/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Box, Image, Text, VStack, TabList, Tabs, Tab, Button, Stack, Link } from '@chakra-ui/react';
import { Footer, FooterProps, Header, HeaderProps, PageWrapper, TeamCard } from '../components';
import FadeIn from 'react-fade-in';

export type PersonProps = {
  photo: File;
  title: string;
  name: string;
  link: string;
};

export type Tab0Props = {
  label: string;
  section2Title: React.ReactNode;
  section2Body: React.ReactNode;
  buttonText: string;
  buttonLink: string;
  people: PersonProps[];
};

export type Tab1Props = {
  label: string;
  section2Body: React.ReactNode;
  image: any;
  caption: React.ReactNode;
};

interface EducationTemplateProps {
  navLinks: HeaderProps;
  title: string;
  section1Body: React.ReactNode;
  tab0: Tab0Props;
  tab1: Tab1Props;
  footerLinks: FooterProps;
}

export const EducationTemplate = ({
  navLinks,
  title,
  section1Body,
  tab0,
  tab1,
  footerLinks,
}: EducationTemplateProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  const section2Tab0 = (
    <Box>
      <Text textStyle="h3" color="white" mb="20px">
        {tab0.section2Title}
      </Text>
      <Text color="white" textStyle="bodyLarge">
        {tab0.section2Body}
      </Text>
      <Link isExternal={true} href={tab0.buttonLink}>
        <Button mt="10px" shadow="none">
          {tab0.buttonText}
        </Button>
      </Link>
    </Box>
  );

  const section2Tab1 = (
    <Box mt="50px">
      <Text color="white" textStyle="bodyLarge" mb="40px">
        {tab1.section2Body}
      </Text>
    </Box>
  );

  const section3Tab0 = (
    <Stack
      m="100px 7%"
      align="center"
      justify={['center', 'center', 'space-around']}
      direction={['column', 'column', 'row']}
    >
      {tab0.people.map((person, idx) => (
        <TeamCard {...person} key={idx} />
      ))}
    </Stack>
  );

  const section3Tab1 = (
    <VStack textAlign="center" alignContent="center" margin=" 75px auto 40px auto">
      <Image mb="10px" src={tab1.image} />
      <Text textStyle="bodyLarge">{tab1.caption}</Text>
    </VStack>
  );

  return (
    <PageWrapper>
      <FadeIn transitionDuration={750} delay={200}>
        <Header {...navLinks} />

        <VStack align="start" maxW={{ base: '90%', md: '90%', xl: '80%' }} m="0 auto">
          <Text fontSize={['40px', '50px', '76px']} textStyle="h1" casing="uppercase" marginTop="70px">
            {title}
          </Text>
          <Text m="20px" textStyle="bodyLarge">
            {section1Body}
          </Text>

          <Tabs index={tabIndex} w="100%" onChange={(index: number) => setTabIndex(index)}>
            <TabList m="80px 0px">
              <Stack spacing="50px" direction={['column', 'column', 'row']}>
                {[tab0.label, tab1.label].map((label, idx) => (
                  <Tab _selected={{ border: 'solid 2.5px #000057', borderRadius: '10px' }} key={idx}>
                    <Text m="auto" fontWeight="600" textStyle="h5" casing="uppercase">
                      {label}
                    </Text>
                  </Tab>
                ))}
              </Stack>
            </TabList>
          </Tabs>
        </VStack>

        <Box backgroundColor="blue" w="100%" p="40px 10%">
          {tabIndex === 0 ? section2Tab0 : section2Tab1}
        </Box>

        {tabIndex === 0 ? section3Tab0 : section3Tab1}

        <Footer {...footerLinks} />
      </FadeIn>
    </PageWrapper>
  );
};
