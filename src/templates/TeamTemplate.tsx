import React from 'react';
import { VStack, Wrap, WrapItem, Text } from '@chakra-ui/react';
import { Footer, Header, HeaderProps, TeamCard, TeamCardProps, PageWrapper } from '../components';
import FadeIn from 'react-fade-in';

interface TeamTemplateProps {
  title: string;
  people: TeamCardProps[];
  navLinks: HeaderProps;
  footerLinks: string[];
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
            {/* <Text casing="uppercase" textStyle="h1" w="100%" pt="70px" pb="37px"> */}
            {title}
          </Text>
          <Wrap marginBottom="70px" direction="row" w="100%" justify="space-around" spacing="70px">
            {people?.map(({ photo, title, name, to }, i) =>
              i < 6 ? (
                <WrapItem key={i}>
                  <TeamCard photo={photo} title={title} name={name} to={to} />
                </WrapItem>
              ) : (
                <></>
              ),
            )}
          </Wrap>
          <Wrap paddingTop="70px" direction="row" w="100%" justify="center" spacing="200px">
            {people?.map(({ photo, title, name, to }, i) =>
              i >= 6 ? (
                <WrapItem key={i}>
                  <TeamCard photo={photo} title={title} name={name} to={to} />
                </WrapItem>
              ) : (
                <></>
              ),
            )}
          </Wrap>
        </VStack>
        <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
      </FadeIn>
    </PageWrapper>
  );
};
