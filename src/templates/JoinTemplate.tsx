import { Box, Button, HStack, Link, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import FadeIn from 'react-fade-in';
import { Header, HeaderProps, PageWrapper, MyCarosel } from '../components';
export type JoinTemplateProps = {
  navLinks: HeaderProps;
  events: string[];
  events2: string[];
};
export const JoinTemplate = ({ navLinks, events, events2 }: JoinTemplateProps) => {
  return (
    <PageWrapper>
      <FadeIn transitionDuration={750} delay={200}>
        <Header {...navLinks} />
        <Stack direction={['column', 'column', 'column', 'row']}>
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
              Recruitment
            </Text>
            <HStack gap="30px">
              <Box backgroundColor="white" w="5px" h="430px"></Box>
              <VStack align="start" spacing="40px">
                {events.map((event, idx) => (
                  <Text fontWeight="600" casing="uppercase" textStyle="h5" color="white" key={idx}>
                    {event}
                  </Text>
                ))}
              </VStack>
            </HStack>
            <Text textStyle="h4" color="white" casing="uppercase" position="relative" left="10px" m="30px 0">
              Application Deadline
            </Text>
            <HStack gap="30px">
              <Box backgroundColor="white" w="5px" h="150px"></Box>
              <VStack align="start" spacing="40px">
                {events2.map((event, idx) => (
                  <Text fontWeight="600" casing="uppercase" textStyle="h5" color="white" key={idx}>
                    {event}
                  </Text>
                ))}
              </VStack>
            </HStack>
            {/* <Text textStyle="h4" color="white" casing="uppercase" position="relative" left="10px">
              Onboarding
            </Text>
            <HStack gap="30px">
              <Box backgroundColor="white" w="5px" h="150px"></Box>
              <VStack align="start" spacing="30px"></VStack>
            </HStack> */}
          </VStack>
          <VStack w={['100%', '100%', '100%', '50%']} textAlign="center" p="100px 0">
            <Text textStyle="h4" m="0 75px">
              Have Questions? Check out our join our recruiment interest form or schedule a coffee chat. We look forward
              to meeting you!
            </Text>
            <Stack direction={{ base: 'column', md: 'column', lg: 'column', xl: 'row' }} padding="20px" spacing="60px">
              <Link
                isExternal={true}
                href="https://docs.google.com/forms/d/e/1FAIpQLSc_TnFU4M5yx2PKgPKbLIgDgCzn3fNXCMlW3qbw0VZWxD3VBg/viewform?usp=sf_link"
              >
                <Button>SIGN UP FOR COFFEE CHATS</Button>
              </Link>
              <Link
                isExternal={true}
                href="https://docs.google.com/forms/d/e/1FAIpQLScEXz2ANJlPW8gmpiDuIpe8cHdESiQvtJzsz0JdSSYVF-vclA/viewform?usp=sf_link"
              >
                <Button casing="uppercase">RECRUITMENT INTEREST FORM</Button>
              </Link>
            </Stack>
            <Box h="200px"></Box>
            <Text textStyle="h3" color="black" casing="uppercase" fontWeight="700" padding="20px">
              Ready to Apply?
            </Text>
            <Link
              isExternal={true}
              href="https://docs.google.com/forms/d/e/1FAIpQLSdP32zR3geBl7feZZ0XhIEhs9b68awbeQAho-XprcoSqlhv0A/viewform?usp=sf_link"
            >
              <Button casing="uppercase">FALL 2022 APPLICATION</Button>
            </Link>
          </VStack>
        </Stack>
        <Box p="50px 0px" backgroundColor="lightGray" textAlign="center">
          <Text mb="30px" textStyle="h3" fontSize="45px" fontWeight="700" casing="uppercase">
            Our Club Moments
          </Text>
          <MyCarosel />
        </Box>
      </FadeIn>
    </PageWrapper>
  );
};
