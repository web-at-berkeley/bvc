/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { VStack, Text, Box, Image, Button, Stack, Center, Link as ChakraLink } from '@chakra-ui/react';
import { Header, Footer, IconCard, HeaderProps, PageWrapper, Billboard } from '../components';
import { Link } from 'gatsby';
import courtyard from '../assets/images/courtyard.png';
import all_logos from '../assets/logos/all_logos.png';
import FadeIn from 'react-fade-in';
export type HomeTemplateProps = {
  navLinks: HeaderProps;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heroImg: any;
  subtitle: string;
  section1Title: string;
  section1Body: string;
  section2Title: string;
  section2Body: string;
  section2Cards: string[][];
  section3Title: string;
  section3Slider: string[][];
  logos: any[];
  footerLinks: string[];
};

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  navLinks,
  title,
  heroImg,
  subtitle,
  section1Title,
  section2Title,
  section2Cards,
  footerLinks,
}: HomeTemplateProps) => {
  return (
    <PageWrapper>
      <FadeIn transitionDuration={750} delay={200}>
        <Header {...navLinks} />

        <VStack
          w="100%"
          backgroundImage={heroImg}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          color="#FFFFFF"
          paddingBottom={['300px', '300px', '300px', '700px']}
          paddingLeft="70px"
          margin="0"
          align="start"
        >
          <Text
            textStyle="h1"
            color="#FFFFFF"
            m="70px 0px auto 0px"
            casing="uppercase"
            fontSize={['50px', '76px', '76px']}
          >
            {title}
          </Text>
          <Text as="i" color="#FFFFFF" textStyle="h4" m="auto" textAlign="center">
            {subtitle}
          </Text>
        </VStack>

        <VStack maxW="100%" m="auto auto">
          <VStack align="center" maxW="80%" m="40px 0 100px 0">
            <Center>
              <Text textAlign="center" textStyle={['h2', 'h2', 'h1']} casing="uppercase" m="50px auto 0px auto">
                {section1Title}
              </Text>
            </Center>

            <Text position="relative" left="20px" textStyle="bodyLarge">
              <Text as="span" fontWeight="700" textStyle="bodyLarge">
                Berkeley Venture Capital
              </Text>
              {
                " is a student-run organization that aims to develop students' interest in venture capital and startup activity on campus. We felt the need to address Berkeley students' ingenuity in engineering, analysis and business management with an equally developed venture capital student organization to serve student's needs when exploring the Bay Area's VC landscape."
              }
            </Text>
          </VStack>

          <Billboard />
          <Stack
            width="80%"
            align={['center', 'center', 'center', 'start']}
            direction={['column', 'column', 'column', 'row']}
            padding="100px 0"
          >
            <Image
              shadow="3px 3px 5px 3px #00000033"
              src={courtyard}
              width="250px"
              mr={[0, 0, '0px', '100px']}
              mb="30px"
            />
            <VStack justify="start" align="start">
              <Text
                textAlign={['center', 'center', 'center', 'start']}
                textStyle="h2"
                fontSize="40px"
                casing="uppercase"
              >
                we are backed by Courtyard ventures, A Haas MBA student-run fund.
              </Text>
              <ChakraLink
                style={{ textDecoration: 'none' }}
                isExternal
                alignSelf={['center', 'center', 'center', 'start']}
                href="https://www.courtyard.vc"
                rel="noreferrer"
              >
                <Button>DETAILS</Button>
              </ChakraLink>
            </VStack>
          </Stack>
          <Box backgroundColor="#000057" width="100%" textAlign="center" pb="250px">
            <VStack maxW="80%" m="auto auto" justify="center">
              <Text mt="70px" textStyle="h1" color="white" casing="uppercase" zIndex="1">
                {section2Title}
              </Text>
              <Text top="30px" position="relative" color="white" textStyle="bodyLarge">
                Our core activities are guided by our core goals: <b>Educating</b> and <b>Developing</b> our members,
                while building a <b>Community</b> between ourselves and our collaborators.
              </Text>
            </VStack>
          </Box>
          <Stack
            direction={['column', 'column', 'column', 'row']}
            position="relative"
            bottom={['0px', '0px', '200px']}
            spacing="20px"
            justify="center"
            align="center"
            padding="50px 50px 20px 50px"
            maxW="90%"
            width="90%"
          >
            {section2Cards.map(([icon, title, body], i) => (
              <Link style={{ textDecoration: 'none' }} key={i} to={'/' + title}>
                <IconCard icon={icon} title={title} body={body} />
              </Link>
            ))}
          </Stack>
        </VStack>
        <VStack w="100%" h="450" backgroundColor="#F6F6F6" justify="space-around">
          <Text position="relative" top="50px" textAlign="center" textStyle="h3" casing="uppercase">
            Members Recieve Offers From
          </Text>
          <Image width={['100%', '100%', '100%', '70%']} src={all_logos} m="0" />
          {/* <Flex justify="space-around" align="space-around" spacing="100px" wrap="wrap">
          {logos.map((logo, idx) => (
            <Image boxSize="100px" key={idx} src={logo} />
          ))}
        </Flex> */}
        </VStack>

        <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
      </FadeIn>
    </PageWrapper>
  );
};
