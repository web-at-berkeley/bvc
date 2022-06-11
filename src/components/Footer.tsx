import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

import { Flex, Link, HStack, Text, Image } from '@chakra-ui/react';
import badge from '../assets/images/badge.png';

export type FooterProps = {
  facebook: string;
  instagram: string;
  linkedin: string;
  email: string;
};

const iconProps = {
  style: {
    color: 'white',
  },
  size: '25px',
};

export const Footer = ({ facebook, instagram, linkedin, email }: FooterProps) => {
  const copyright_text = `©${new Date().getFullYear()} BVC`;
  return (
    <Flex
      w="100%"
      h="118"
      backgroundColor="blue"
      align="center"
      justify="space-between"
      p={['0 3%', '0 5%', '0 8%', '0 8%']}
    >
      <HStack spacing={['10px', '20px', '20px', '30px']}>
        <Link href={facebook} isExternal>
          <FiFacebook {...iconProps} />
        </Link>
        <Link href={instagram} isExternal>
          <FiInstagram {...iconProps} />
        </Link>
        <Link href={linkedin} isExternal>
          <FiLinkedin {...iconProps} />
        </Link>
        <Link href={email} isExternal>
          <FiMail {...iconProps} />
        </Link>
      </HStack>
      <Text width={['80px', 'auto', 'auto', 'auto']} textStyle="bodyLarge" color="white">
        {copyright_text}
      </Text>
      <Link href="https://webatberkeley.org/" isExternal>
        <Image h={['40px', '50px', '62px', '62px']} src={badge} />
      </Link>
    </Flex>
  );
};
