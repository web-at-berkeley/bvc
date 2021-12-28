import React from 'react';
import {NavLink, Link, Router} from 'react-router-dom'
import { Box, HStack, Text, Flex, Heading, ChakraProvider } from '@chakra-ui/react';
import NetlifyCmsApp from 'netlify-cms-app';
import Fonts from '../fonts'
import theme from '../theme'

interface HeaderProps {
  pages: string[];
}

let styles = {
  logo: {
    fontSize: '30px',
    lineHeight: '45px',
    letterSpacing: '0.1em',
    color: '#636363',
  }
}

export const Header = ({ pages }: HeaderProps) => (
  <ChakraProvider theme={theme}>
    <Fonts />
  <Box w="100%" h="70" backgroundColor="#E5E5E5">
  <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={5}
      color="black"
    >
      <Flex align="center" mr={5}>

        <Heading style={styles.logo}>
          BVC
        </Heading>
        
      </Flex>

      <HStack spacing={4}>
        <NavLink to="/">
          <h5>{pages[0]}</h5>
        </NavLink>
        <NavLink to="/">
          <Text>{pages[1]}</Text>
        </NavLink>
        <NavLink to="/">
          <Text>{pages[2]}</Text>
        </NavLink>
        <NavLink to="/">
        <Text>{pages[3]}</Text>
        </NavLink>
        <NavLink to="/">
        <Text>{pages[4]}</Text>
        </NavLink>
        <NavLink to="/">
        <Text>{pages[5]}</Text>
        </NavLink>
        <NavLink to="/">
        <Text>{pages[6]}</Text>
        </NavLink>
      </HStack>
        

  </Flex>
  </Box>
  </ChakraProvider>

);
