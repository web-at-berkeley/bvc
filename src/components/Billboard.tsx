import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const Billboard = () => {
  return (
    <Box width="100%" align="center" padding="60px 100px" backgroundColor="rgb(250, 223, 148)">
      <Flex justify="space-around" wrap="wrap">
        <Box>
          <Text textStyle="h2" casing="uppercase">
            $1.6M
          </Text>
          <Text textStyle="h4" fontSize="21px" color="#636363" fontWeight="700">
            Fund Size
          </Text>
        </Box>
        <Box>
          <Text textStyle="h2" casing="uppercase">
            20
          </Text>
          <Text textStyle="h4" fontSize="21px" color="#636363" fontWeight="700">
            Active Mentors
          </Text>
          <Text position="relative" bottom="10px" textStyle="h4" fontSize="21px" color="#636363" fontWeight="700">
            & Speakers
          </Text>
        </Box>
        <Box>
          <Text textStyle="h2" casing="uppercase">
            35
          </Text>
          <Text textStyle="h4" fontSize="21px" color="#636363" fontWeight="700">
            Active Members
          </Text>
        </Box>
        <Box>
          <Text textStyle="h2" casing="uppercase" fontWeight="700">
            40
          </Text>
          <Text textStyle="h4" fontSize="21px" color="#636363" fontWeight="700">
            Partnered
          </Text>
          <Text position="relative" bottom="10px" textStyle="h4" fontSize="21px" color="#636363" fontWeight="700">
            Organizations
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
