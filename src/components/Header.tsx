import React from 'react';
import Link from 'gatsby-link';
import { Text, Box, Button } from '@chakra-ui/react';
import { Container, Nav, Navbar } from 'react-bootstrap';
interface LinkInfo {
  linkText: string;
  linkTarget: string;
}

export type HeaderProps = {
  pages: LinkInfo[];
};

const styles = {
  logo: {
    fontSize: '50px',
    lineHeight: '45px',
    letterSpacing: '0.1em',
    color: '#636363',
    marginLeft: '100px',
    fontWeight: 'bold',
  },
  navbar: {
    backgroundColor: ' #000057',
  },
};

export const Header: React.FC<HeaderProps> = ({ pages }: HeaderProps) => {
  return (
    <Navbar expand="lg" variant="dark" style={styles.navbar} className="color-nav">
      <Box position="relative" top="5px" right="50px">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Text {...styles.logo} color="#FFC839">
            BVC
          </Text>
        </Link>
      </Box>
      <Box width={['0', '0', '0px', '100%']}></Box>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {pages
            ? pages.map(({ linkText, linkTarget }, i) =>
                linkText === 'JOIN' ? (
                  <Nav.Link style={{ position: 'relative', top: '.01px', marginRight: '30px' }} href={linkText} key={i}>
                    <Link style={{ textDecoration: 'none' }} to={linkTarget} key={i}>
                      <Button _hover={{ transform: ' scale(1.15)' }} shadow="none">
                        {linkText}
                      </Button>
                    </Link>
                  </Nav.Link>
                ) : (
                  <Container style={{ margin: 'auto 5px', position: 'relative', top: '8px' }} key={i}>
                    <Nav.Link href={linkText} key={i}>
                      <Link style={{ textDecoration: 'none' }} to={linkTarget} key={i}>
                        <Text color="#FFFFFF" textStyle="bodyLarge">
                          {linkText}
                        </Text>
                      </Link>
                    </Nav.Link>
                  </Container>
                ),
              )
            : undefined}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
