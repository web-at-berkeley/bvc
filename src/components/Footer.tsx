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

export const Footer = ({ facebook, instagram, linkedin, email }: FooterProps) => (
  <Flex w="100%" h="118" backgroundColor="#464646" align="center" justify="space-between" p="0 121px">
    <HStack spacing="30px">
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
    <Text textStyle="bodyLarge" color="white">
      ©2022 BVC
    </Text>
    <Link href="https://webatberkeley.org/" isExternal>
      <Image h="62px" src={badge} />
    </Link>
  </Flex>
);
