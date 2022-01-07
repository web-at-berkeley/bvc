import React from 'react';
import { HStack, VStack, Wrap, WrapItem, Button, Text, Box } from '@chakra-ui/react';
import { Footer, Header, HeaderProps, TeamCard, TeamCardProps, PageWrapper } from '../components';

interface TeamTemplateProps {
  title: string;
  people: TeamCardProps[];
  bottomText: string;
  bottomText2: string;
  navLinks: HeaderProps;
  footerLinks: string[];
}

export const TeamTemplate = ({ title, people, bottomText, bottomText2, navLinks, footerLinks }: TeamTemplateProps) => {
  return (
    <PageWrapper>
      <Header {...navLinks} />
      <VStack maxW={{ xl: '80%' }} m="0 auto" pb="95px">
        <Text textStyle="h1" w="100%" pt="70px" pb="37px">
          {title}
        </Text>
        <Wrap direction="row" w="100%" justify="space-between" spacing="85px">
          {people?.map(({ photo, title, name }, i) => (
            <WrapItem key={i}>
              <TeamCard photo={photo} title={title} name={name} />
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
      <Box backgroundColor="#E5E5E5" w="100%">
        <VStack maxW={{ xl: '80%' }} m="88px auto">
          <Text textStyle="bodyLarge">{bottomText}</Text>
          <HStack w="100%" pt="53px" justify="space-around">
            <Text textStyle="bodyLarge" fontWeight={600}>
              {bottomText2}
            </Text>
            <Button>Apply</Button>
          </HStack>
        </VStack>
      </Box>
      <Footer facebook={footerLinks[0]} instagram={footerLinks[1]} linkedin={footerLinks[2]} email={footerLinks[3]} />
    </PageWrapper>
  );
};
