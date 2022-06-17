import React from 'react';
import { VStack, Wrap, WrapItem, Text } from '@chakra-ui/react';
import { Footer, Header, HeaderProps, TeamCard, TeamCardProps, PageWrapper, FooterProps } from '../components';
import FadeIn from 'react-fade-in';

interface TeamTemplateProps {
  title: string;
  people: TeamCardProps[];
  navLinks: HeaderProps;
  footerLinks: FooterProps;
}

export const TeamTemplate = ({ title, people, navLinks, footerLinks }: TeamTemplateProps) => {
  return (
    <PageWrapper>
      <FadeIn transitionDuration={750} delay={200}>
        <Header {...navLinks} />
        <VStack maxW={{ xl: '80%' }} m="0 auto" pb="95px">
          <Text
            fontSize={['40px', '50px', '76px']}
            w="100%"
            textStyle="h1"
            casing="uppercase"
            pb="37px"
            marginTop="70px"
            marginLeft={['200px', '200px', '200px', '0px']}
          >
            {title}
          </Text>
          <Wrap marginBottom="70px" direction="row" w="100%" justify="space-around" spacing="70px">
            {people?.map((person, i) =>
              i < 6 ? (
                <WrapItem key={i}>
                  <TeamCard {...person} />
                </WrapItem>
              ) : (
                <></>
              ),
            )}
          </Wrap>
          <Wrap paddingTop="70px" direction="row" w="100%" justify="center" spacing="200px">
            {people?.map((person, i) =>
              i >= 6 ? (
                <WrapItem key={i}>
                  <TeamCard {...person} />
                </WrapItem>
              ) : (
                <></>
              ),
            )}
          </Wrap>
        </VStack>
        <Footer {...footerLinks} />
      </FadeIn>
    </PageWrapper>
  );
};
