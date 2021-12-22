/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Flex, Stack, Heading, Text, Box, HStack, VStack } from '@chakra-ui/react';
import { Header, Footer, IconCard, Testimonial } from '../components';

interface HomeTemplateProps {
  navLinks: string[];
  title: string;
  subtitle: string;
  section1Title: string;
  section1Body: string;
  section2Title: string;
  section2Body: string;
  section2Cards: string[][];
  section3Title: string;
  section3Slider: string[][];
  logos: string[];
  footerLinks: string[];
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  navLinks,
  title,
  subtitle,
  section1Title,
  section1Body,
  section2Title,
  section2Body,
  section2Cards,
  section3Title,
  section3Slider,
  logos,
  footerLinks,
}: HomeTemplateProps) => {
  const pillars = section2Cards.map(([icon, title, body], i) => (
    <IconCard icon={icon} title={title} body={body} key={i} />
  ));
  const testimonials = section3Slider.map(([body, name], i) => <Testimonial body={body} name={name} key={i} />);
  return (
    <Flex direction="column" align="center" maxW={{ xl: '1200px' }} m="0 auto">
      <Header pages={navLinks} />

      <Box w="100%" h="727" backgroundColor="#636363">
        <Heading>{title}</Heading>
        <Heading>{subtitle}</Heading>
      </Box>

      <Stack>
        <Heading>{section1Title}</Heading>
        <Text>{section1Body}</Text>

        <Heading>{section2Title}</Heading>
        <Text>{section2Body}</Text>
        <HStack>{pillars}</HStack>

        <Heading>{section3Title}</Heading>
        {testimonials[0]}
      </Stack>

      <Box w="100%" h="376" backgroundColor="grey">
        <VStack>
          <Heading>Members Recieve Offers From</Heading>
          <HStack>{logos}</HStack>
        </VStack>
      </Box>

      <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
    </Flex>
  );
};
