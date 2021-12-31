import React from 'react';
import Link from 'gatsby-link';
import { Box, HStack, Text, Flex, Heading } from '@chakra-ui/react';

interface HeaderProps {
  pages: string[];
}

const styles = {
  logo: {
    fontSize: '30px',
    lineHeight: '45px',
    letterSpacing: '0.1em',
    color: '#636363',
    textAlign: 'center',
    display: 'inline-block',
    position: 'relative',
    width: '100%',
  },
};

export const Header: React.FC<HeaderProps> = ({ pages }: HeaderProps) => (
  <Box w="100%" h="70" backgroundColor="#E5E5E5">
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={5} color="black">
      <Flex align="center" width="25%" mr={5}>
        <Heading style={styles.logo}>BVC</Heading>
      </Flex>

      <HStack spacing={8} style={{ color: '#636363' }}>
        <Link to="/404">
          <Text>{pages[0]}</Text>
        </Link>
        <Link to="/">
          <Text>{pages[1]}</Text>
        </Link>
        <Link to="/">
          <Text>{pages[2]}</Text>
        </Link>
        <Link to="/">
          <Text>{pages[3]}</Text>
        </Link>
        <Link to="/">
          <Text>{pages[4]}</Text>
        </Link>
        <Link to="/">
          <Text>{pages[5]}</Text>
        </Link>
        <Link to="/">
          <Text>{pages[6]}</Text>
        </Link>
      </HStack>
    </Flex>
  </Box>
);
