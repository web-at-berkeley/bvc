import React from 'react';
import FadeIn from 'react-fade-in';

import { Box, Button, Link, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { Header, HeaderProps, PageWrapper, Timeline, TimelineProps, Footer, FooterProps } from '../components';
import { Carousel } from 'react-bootstrap';

type Link = { text: string; url: string };

export type JoinTemplateProps = {
  navLinks: HeaderProps;
  title: string;
  preDeadline: TimelineProps;
  deadline: string;
  postDeadline: TimelineProps;
  subtitle: string;
  links: Link[];
  applyText: string;
  appLink: Link;
  imageHeader: string;
  images: any[];
  footerLinks: FooterProps;
};
export const JoinTemplate = ({
  navLinks,
  title,
  preDeadline,
  deadline,
  postDeadline,
  subtitle,
  links,
  applyText,
  appLink,
  imageHeader,
  images,
  footerLinks,
}: JoinTemplateProps) => {
  return (
    <PageWrapper>
      <FadeIn transitionDuration={750} delay={200}>
        <Header {...navLinks} />
        {/* Begin two columns */}
        <Stack direction={['column', 'column', 'column', 'row']}>
          {/* Left column*/}
          <VStack
            w={['100%', '100%', '100%', '50%']}
            backgroundColor="blue"
            spacing="60px"
            align="start"
            padding="50px 100px 200px 100px"
          >
            <Text
              margin="0 auto"
              position="relative"
              right="70px"
              textStyle="h1"
              fontSize={['40px', '56px', '65px', '76px']}
              color="white"
              casing="uppercase"
            >
              {title}
            </Text>
            <Timeline dates={preDeadline.dates} events={preDeadline.events} />
            <Text textStyle="h4" color="white" casing="uppercase" position="relative" left="10px" m="30px 0">
              {deadline}
            </Text>
            <Timeline dates={postDeadline.dates} events={postDeadline.events} />
          </VStack>

          {/* Right column */}
          <VStack w={['100%', '100%', '100%', '50%']} textAlign="center" p="100px 0">
            <Text textStyle="h4" m="0 75px">
              {subtitle}
            </Text>
            <Stack
              direction={{ base: 'column', md: 'column', lg: 'column', xl: 'row' }}
              padding={{ base: '30px', md: '30px', lg: '30px', xl: '60px' }}
              wrap="wrap"
              justify="space-around"
              align="center"
            >
              {links.map((link, idx) => (
                <Link isExternal={true} href={link.url} key={idx} p="60px">
                  <Button>{link.text}</Button>
                </Link>
              ))}
            </Stack>

            <Box h="200px"></Box>
            <Text textStyle="h3" color="blue" casing="uppercase" fontWeight="700" padding="20px">
              {applyText}
            </Text>
            <Link isExternal={true} href={appLink.url}>
              <Button>{appLink.text}</Button>
            </Link>
          </VStack>
        </Stack>
        {/* End two columns */}

        <Box p="50px 0px" backgroundColor="lightGray" textAlign="center">
          <Text mb="30px" textStyle="h3" fontSize="45px" fontWeight="700" casing="uppercase">
            {imageHeader}
          </Text>
          <Carousel style={{ padding: '10px' }} variant="dark" indicators={false}>
            {images.map((image, idx) => (
              <Carousel.Item key={idx}>
                <Image margin="auto" src={image} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Box>
      </FadeIn>
      <Footer {...footerLinks} />
    </PageWrapper>
  );
};
