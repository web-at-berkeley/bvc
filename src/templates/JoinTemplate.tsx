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
            padding="50px 100px 200px 7%"
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
              padding={{ base: '30px', md: '30px', lg: '30px', xl: '70px' }}
              wrap="wrap"
              justify="space-around"
              align="center"
            >
              {links.map((link, idx) => (
                <Link isExternal={true} href={link.url} key={idx} p="30px">
                  <Button>{link.text}</Button>
                </Link>
              ))}
            </Stack>
            <VStack position="relative" padding="20px" spacing="60px">
              {/* <Text textStyle="h5" fontWeight="700">
                INFOSESSION 2 LOCATION: Health Tech Co lab (Blum Hall 180)
              </Text>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.3699688050233!2d-122.26099944839473!3d37.875029714057376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c23c2608865%3A0x505b508468966255!2sBlum%20Hall%2C%20Berkeley%2C%20CA%2094709!5e0!3m2!1sen!2sus!4v1661642316268!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe> */}
            </VStack>
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
