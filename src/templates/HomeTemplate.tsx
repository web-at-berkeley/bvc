/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { VStack, Text, Box, Image, Button, Stack, Center, Link as ChakraLink } from '@chakra-ui/react';
import { Header, Footer, IconCard, HeaderProps, PageWrapper, Billboard, IconCardProps } from '../components';
import { Link } from 'gatsby';
import FadeIn from 'react-fade-in';
export type HomeTemplateProps = {
  navLinks: HeaderProps;
  title: string;
  heroImg: any;
  subtitle: string;
  section1Title: string;
  section1Body: React.ReactNode;
  partnerImage: any;
  partnerText: string;
  section2Title: string;
  section2Body: React.ReactNode;
  section2Cards: IconCardProps[];
  section3Title: string;
  section3Image: any;
  logos: any[];
  footerLinks: string[];
};

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  navLinks,
  title,
  heroImg,
  subtitle,
  section1Title,
  section1Body,
  partnerImage,
  partnerText,
  section2Title,
  section2Body,
  section2Cards,
  section3Title,
  section3Image,
  footerLinks,
}: HomeTemplateProps) => {
  return (
    <PageWrapper>
      <FadeIn transitionDuration={750} delay={200}>
        <Header {...navLinks} />

        <VStack
          w="100%"
          backgroundImage={heroImg}
          backgroundPosition="center"
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

            <Text position="relative" textStyle="bodyLarge">
              {section1Body}
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
              src={partnerImage}
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
                {partnerText}
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
                {section2Body}
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
            {section2Cards.map(({ icon, title, body }, i) => (
              <Link style={{ textDecoration: 'none' }} key={i} to={'/' + title}>
                <IconCard icon={icon} title={title} body={body} />
              </Link>
            ))}
          </Stack>
        </VStack>
        <VStack w="100%" h="450" backgroundColor="#F6F6F6" justify="space-around">
          <Text position="relative" top="50px" textAlign="center" textStyle="h3" casing="uppercase">
            {section3Title}
          </Text>
          <Image width={['100%', '100%', '100%', '70%']} src={section3Image} m="0" />
        </VStack>

        <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
      </FadeIn>
    </PageWrapper>
  );
};
