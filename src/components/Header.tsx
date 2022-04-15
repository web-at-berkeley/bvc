import React from 'react';
import Link from 'gatsby-link';
import { Box, HStack, Text, Flex, Heading } from '@chakra-ui/react';

interface LinkInfo {
  linkText: string;
  linkTarget: string;
}

export type HeaderProps = {
  pages: LinkInfo[];
};

const styles = {
  logo: {
    fontSize: '30px',
    lineHeight: '45px',
    letterSpacing: '0.1em',
    color: '#636363',
    textAlign: 'center',
    display: 'inline-block',
    position: 'relative',
    verticalAlign: 'center',
    width: '100%',
    height: '100%',
  },
};

export const Header: React.FC<HeaderProps> = ({ pages }: HeaderProps) => (
  <Box w="100%" h="70" backgroundColor="#E5E5E5">
    <Flex as="nav" alignItems="center" justify="space-between" wrap="wrap" height="100%" color="#636363">
      <Flex align="center" width="20%" mr={5}>
        <Link to="/" style={styles.logo} >
          <Heading>BVC</Heading>
        </Link>
      </Flex>

      <HStack spacing={8} marginRight="5%">
        {pages
          ? pages.map(({ linkText, linkTarget }, i) => (
              <Link to={linkTarget} key={i}>
                <Text textStyle="bodyLarge">{linkText}</Text>
              </Link>
            ))
          : undefined}
      </HStack>
    </Flex>
  </Box>
);
