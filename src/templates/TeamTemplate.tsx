import React from 'react';
import { VStack, Wrap, Text } from '@chakra-ui/react';
import { Footer, Header, HeaderProps, TeamCardProps, PageWrapper, FooterProps } from '../components';
import FadeIn from 'react-fade-in';

interface TeamTemplateProps {
  mainTitle: string;
  people: TeamCardProps[];
  navLinks: HeaderProps;
  footerLinks: FooterProps;
}

export const TeamTemplate = ({ mainTitle, navLinks, footerLinks }: TeamTemplateProps) => {
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
            {mainTitle}
          </Text>
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/shrr5WkHZOF6m4u6A?backgroundColor=blue&viewControls=on"
            width="75%"
            height="700"
          ></iframe>
          {/* <Wrap marginBottom="70px" direction="row" w="100%" justify="space-around" spacing="70px">
            {people?.map((person, i) =>
              i < 6 ? (
                <WrapItem key={i}>
                  <TeamCard {...person} />
                </WrapItem>
              ) : (
                <></>
              ),
            )}
          </Wrap> */}
          <Wrap paddingTop="70px" direction="row" w="100%" justify="center" spacing="200px">
            {/* {people?.map((person, i) =>
              i >= 6 ? (
                <WrapItem key={i}>
                  <TeamCard {...person} />
                </WrapItem>
              ) : (
                <></>
              ),
            )} */}
          </Wrap>
        </VStack>
        <Footer {...footerLinks} />
      </FadeIn>
    </PageWrapper>
  );
};
