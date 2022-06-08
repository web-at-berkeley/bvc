import React, { useState } from 'react';
import { Image, Box, Text, VStack, Spacer, Tabs, TabList, Tab, Stack, Flex } from '@chakra-ui/react';
import {
  ServiceCard,
  Footer,
  Header,
  HeaderProps,
  PageWrapper,
  BlueBanner,
  PartnerBanner,
  SquareCompany,
} from '../components';
import serviceImg1 from '../assets/images/serviceImg1.png';
import serviceImg2 from '../assets/images/serviceImg2.png';
import pizza from '../assets/carosel/carosel1.png';
import collegeVentures from '../assets/images/collegeVentures.png';
import FadeIn from 'react-fade-in';
interface ServiceTemplateProps {
  title: string;
  section1Body: string;
  navLinks: HeaderProps;
  tab1Title: string;
  footerLinks: string[];
  tab1Label: string;
  quadImages: any[];
  quadTitles: string[];
  tab2Label: string;
  tab1Body: string;
  wideCardTitle1: string;
  wideCardTitle2: string;
  wideCardBody1: string;
  wideCardBody2: string;
  bottomPic: any;
  wideCardList1: Array<string>;
  bottomTitle: string;
  bottomText: string;
  tab1Date: string;
  squareCompanies: any[];
}

export const ServiceTemplate = ({
  title,
  section1Body,
  navLinks,
  tab1Label,
  tab1Title,
  tab2Label,
  tab1Body,
  quadTitles,
  quadImages,
  bottomPic,
  bottomTitle,
  bottomText,
  squareCompanies,
}: ServiceTemplateProps) => {
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
                  <Text m="auto" textStyle="h5" fontWeight="600" casing="uppercase">
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
        {!tabIndex ? (
          <Box>
            <Box alignItems="center" backgroundColor="lightGray" w="100%" p="100px 12%">
              <Flex wrap="wrap" align="center" justify="space-between" gap={['20px', '20px', '40px']}>
                <ServiceCard title={quadTitles[0]} image={quadImages[0]} />
                <ServiceCard title={quadTitles[1]} image={quadImages[1]} />
                <ServiceCard title={quadTitles[2]} image={quadImages[2]} />
                <ServiceCard title={quadTitles[3]} image={quadImages[3]} />
              </Flex>
            </Box>
            <Text m="65px" textStyle="h3" casing="uppercase">
              Our Partners
            </Text>
            <PartnerBanner
              bottomPic={bottomPic}
              bottomTitle={bottomTitle}
              bottomText={bottomText}
              buttonText={'MORE INFO'}
            />
            <PartnerBanner
              bottomPic={collegeVentures}
              bottomTitle={'College Ventures Network '}
              bottomText={
                'Berkeley Venture Capital is a proud member of College Ventures Network, a group of 40+ VC funds and organizations across the U.S. where we help coordinate resource sharing, deal flow and events'
              }
              buttonText={'WEBSITE'}
            />
            <Flex margin="50px" wrap="wrap" justify={['center', 'center', 'space-between', 'space-between']}>
              {squareCompanies.map((item, idx) => (
                <SquareCompany image={item.image} key={idx} title={item.text} link={item.link} />
              ))}
            </Flex>
          </Box>
        ) : (
          <Box>
            <BlueBanner title={tab1Title} body={tab1Body} />

            <Stack mt="50px" direction={{ base: 'column', xl: 'row' }} justify="space-around">
              <VStack>
                <Image src={serviceImg1} />
                <Text textStyle="bodyLarge">BVC President Shubhan introducing fellows</Text>
              </VStack>
              <VStack>
                <Image src={serviceImg2} />
                <Text textStyle="bodyLarge">Fellows presenting to VCs at the end of Fellowship Program</Text>
              </VStack>
            </Stack>
            <Spacer />
            <BlueBanner
              title={'Event Dinners'}
              body={
                'Join us for monthly networking dinners in Fall 2022. Our events include startup founders, VCs and people involved in the Bay Area startup ecosystem. For more information, including the dinner schedule, please click the RSVP button below, and send us a message.'
              }
            />
            <VStack mb="100px">
              <Image src={pizza} mb="20px" />
              <Text textStyle="bodyLarge">Dinner event hosted by BVC in Spring 2022</Text>
            </VStack>
          </Box>
        )}
        <Footer />
      </FadeIn>
    </PageWrapper>
  );
};
