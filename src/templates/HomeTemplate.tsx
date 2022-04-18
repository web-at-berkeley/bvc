/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { VStack, HStack, Text, Box, Flex } from '@chakra-ui/react';
import { Header, Footer, IconCard, Testimonial, HeaderProps, PageWrapper } from '../components';

export type HomeTemplateProps = {
  navLinks: HeaderProps;
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
};

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
  const testimonials = section3Slider.map(([body, name], i) => <Testimonial body={body} name={name} key={i} />);
  return (
    <PageWrapper>
      <Header {...navLinks} />

      <Box w="100%" h="727" backgroundColor="#636363">
        <Text textStyle="h1" casing="uppercase">
          {title}
        </Text>
        <Text textStyle="h4">{subtitle}</Text>
      </Box>

      <VStack maxW={{ xl: '80%' }} m="0 auto">
        <Text textStyle="h1" w="100%" casing="uppercase">
          {section1Title}
        </Text>
        <Text textStyle="bodyLarge">{section1Body}</Text>

        <Text textStyle="h1" w="100%" casing="uppercase">
          {section2Title}
        </Text>
        <Text textStyle="bodyLarge">{section2Body}</Text>
        <Flex justify="space-around" padding="50px">
          {section2Cards.map(([icon, title, body], i) => (
            <IconCard icon={icon} title={title} body={body} key={i} />
          ))}
        </Flex>

        <Text textStyle="h1" w="100%" casing="uppercase">
          {section3Title}
        </Text>
        {testimonials[0]}
      </VStack>

      <VStack w="100%" h="376" backgroundColor="#E5E5E5" justify="space-between">
        <Text textStyle="h3" casing="uppercase">
          Members Recieve Offers From
        </Text>
        <HStack>{logos}</HStack>
      </VStack>

      <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
    </PageWrapper>
  );
};
