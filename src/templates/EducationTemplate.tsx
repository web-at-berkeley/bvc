/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Box,
  Image,
  Flex,
  Text,
  VStack,
  Spacer,
  HStack,
  TabList,
  Tabs,
  Tab,
  Button,
  Stack,
  Link,
  Center,
} from '@chakra-ui/react';
import { Footer, Header, HeaderProps, PageWrapper, TabsSection, TeamCard } from '../components';
import bvcFellows from '../assets/images/bvcFellows.png';
import FadeIn from 'react-fade-in';
interface EducationTemplateProps {
  title: string;
  tab1Label: string;
  tab2Label: string;
  tab1Body: string[];
  tab2Body: string;
  section1Body: string;
  navLinks: HeaderProps;
  footerLinks: string[];
  people: any[];
}

export const EducationTemplate = ({
  title,
  tab1Label,
  tab2Label,
  tab1Body,
  tab2Body,
  navLinks,
  section1Body,
  footerLinks,
  people,
}: EducationTemplateProps) => {
  const [tabIndex, setTabIndex] = useState(0);
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

          <Tabs index={tabIndex} w="100%" onChange={(index) => setTabIndex(index)}>
            <TabList m="80px 0px">
              <Stack spacing="50px" direction={['column', 'column', 'row']}>
                <Tab _selected={{ border: 'solid 2.5px #000057', borderRadius: '10px' }}>
                  <Text m="auto" fontWeight="600" textStyle="h5" casing="uppercase">
                    {tab1Label}
                  </Text>
                </Tab>
                <Tab _selected={{ border: 'solid 2.5px #000057', borderRadius: '10px' }} margin="auto 0">
                  <Text m="auto" fontWeight="600" textStyle="h5" casing="uppercase">
                    {tab2Label}
                  </Text>
                </Tab>
              </Stack>
            </TabList>
          </Tabs>
        </VStack>
        <Box backgroundColor="blue" w="100%" p="40px 10%">
          {tabIndex ? (
            <Box mt="50px">
              <Text color="white" textStyle="bodyLarge" mb="40px">
                Our fellowship program is comprised of our weekly lecture series meant to educate fellows about venture
                capital, followed by a mid-week discussion with a VC who will be guiding our fellows through their
                sourcing projects.
              </Text>
              <Text color="white" textStyle="bodyLarge" mb="40px">
                The Curriculum will cover an introduction to venture capital, sourcing, due-diligence in market and
                product research, term sheets, startup financing and exit strategy.
              </Text>
              <Text color="white" textStyle="bodyLarge" mb="40px">
                The Fellowship serves as a hands-on project that will leverage the general knowledge taught in the
                curriculum. With the opportunity to consult with a VC, fellows will deliver their findings on a startup
                or segment by the end of the semester to our VC mentors and partners.
              </Text>
            </Box>
          ) : (
            <Box>
              <Text textStyle="h3" color="white" mb="20px">
                UGBA 198 - Introduction to Venture Capital
              </Text>
              <Text color="white" textStyle="bodyLarge">
                Join our exclusive student run 1-unit course on campus covering the fundamentals of Venture Capital.
                From due diligence to term sheet construction and post investment management, BVC’s carefully designed
                course has been vetted by over 5 VCs and professors at Cal and offers networking and mentorship
                opportunities with the some of Silicon Valley’s premier VCs. The course will be taught by our Director
                of Curriculum Nathan Leal alongside Venture Analyst Danielle Sobkin.
              </Text>
              <Link
                isExternal={true}
                href="https://docs.google.com/forms/d/e/1FAIpQLScJmROqUQwqs9bYhNdhKAm3_713EnYPU643NYdoNHA-udEjTg/viewform?usp=sf_link"
              >
                <Button mt="10px" shadow="none">
                  APPLY
                </Button>
              </Link>
            </Box>
          )}
        </Box>
        {tabIndex ? (
          <VStack textAlign="center" alignContent="center" margin=" 75px auto 40px auto">
            <Image mb="10px" src={bvcFellows} />
            <Text textStyle="bodyLarge">2022 BVC Fellows</Text>
          </VStack>
        ) : (
          <Stack
            m="100px 7%"
            align="center"
            justify={['center', 'center', 'space-around']}
            direction={['column', 'column', 'row']}
          >
            {people.map((item, idx) => (
              <TeamCard photo={item.photo} name={item.name} title={item.title} key={idx} to={item.to} />
            ))}
          </Stack>
        )}

        <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
      </FadeIn>
    </PageWrapper>
  );
};
