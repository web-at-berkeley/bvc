import React from 'react';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';

import { Flex, Spacer, Link, HStack, Text, Image } from '@chakra-ui/react';
import badge from '../assets/images/badge.png';

export type FooterProps = {
  facebook: string;
  instagram: string;
  linkedin: string;
  email: string;
};

const iconStyles = {
  color: 'white',
  'margin-right': '20px',
};

export const Footer = ({ facebook, instagram, linkedin, email }: FooterProps) => (
  <Flex w="100%" h="70" backgroundColor="#464646" align="center">
    <HStack marginLeft="40px">
      <Link href={facebook}>
        <FaFacebookF style={iconStyles} />
      </Link>
      <Link href={instagram}>
        <FaInstagram style={iconStyles} />
      </Link>
      <Link href={linkedin}>
        <FaLinkedinIn style={iconStyles} />
      </Link>
      <Link href={email}>
        <AiOutlineMail margin-right="0px" style={iconStyles} />
      </Link>
    </HStack>
    <Spacer />
    <Text font="Poppins" textStyle="h6" color="white">
      ©2022 BVC
    </Text>
    <Spacer />
    <Image height={8} src={badge} marginRight="40px" />
  </Flex>
);
