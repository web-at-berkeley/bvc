/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react';
import { CommunityCard, Footer, FooterProps, Header, HeaderProps, PageWrapper } from '../components';
import FadeIn from 'react-fade-in';
interface CommunityTemplateProps {
  title: string;
  highlightTitle: string;
  section1Body: React.ReactNode[];
  navLinks: HeaderProps;
  footerLinks: FooterProps;
  logos: any[];
  people: any[];
}

export const CommunityTemplate = ({
  title,
  highlightTitle,
  navLinks,
  section1Body,
  logos,
  people,
  footerLinks,
}: CommunityTemplateProps) => {
  return (
    <PageWrapper>
      <FadeIn transitionDuration={750} delay={200}>
        <Header {...navLinks} />
        <VStack gap="20px" align="start" maxW="90%" m="0 auto">
          <Text fontSize={['40px', '50px', '76px']} textStyle="h1" casing="uppercase" marginTop="70px">
            {title}
          </Text>
          {section1Body.map((paragraph, i) => (
            <Text textStyle="bodyLarge" mb={i === 1 ? '40px' : '20px'} key={i}>
              {paragraph}
            </Text>
          ))}
        </VStack>
        <Box mt="75px" backgroundColor="lightGray" w="100%" p="20px 100px">
          <Box mt="50px">
            <VStack>
              <Text textStyle="h3" casing="uppercase">
                {highlightTitle}
              </Text>
              <Flex justify="center" wrap="wrap">
                {logos.map((logo, idx) =>
                  idx < 4 ? (
                    <Box key={idx} m="50px">
                      <Image minW="150px" key={idx} src={logo} />
                    </Box>
                  ) : null,
                )}
              </Flex>
              <Flex justify="center" wrap="wrap">
                {logos.map((logo, idx) =>
                  idx >= 4 ? (
                    <Box key={idx} m="30px">
                      <Image minW="150px" maxW="180px" key={idx} src={logo} />
                    </Box>
                  ) : null,
                )}
              </Flex>
            </VStack>
          </Box>
        </Box>
        <Flex m="200px 0 50px 0" wrap="wrap" justify="center" gap="50px">
          {people.map((item, idx) => (
            <CommunityCard key={idx} title={item.name} body={item.cardContent} image={item.face} to={item.link} />
          ))}
        </Flex>
        <Footer {...footerLinks} />
      </FadeIn>
    </PageWrapper>
  );
};
