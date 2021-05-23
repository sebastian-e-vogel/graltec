import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { Box, Flex, Text } from '@chakra-ui/react'

const FirstSection = () => (
  <Flex>
    <Box position="relative" maxHeight={589}>
      <StaticImage
        src="../images/bg.png"
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="A metallic curtains"
      />
      <Box color="white" position="absolute" top="25%" right={'-20%'} display="flex">
        <Box w="55px" bg="primary" opacity={0.6} boxShadow="-5px 0px 20px #000000" />
        <Box
          bg="white"
          h={286}
          color="primary"
          fontSize={'2.5rem'}
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          flexDir="column"
          p={12}
        >
          <Text lineHeight="40px">Fábrica de cortinas</Text>
          <Text lineHeight="40px">metálicas y equipos</Text>
          <Text lineHeight="40px">eléctricos</Text>
        </Box>
        <Text
          bg="primary"
          bottom="-35px"
          right="65"
          boxShadow="0px 3px 20px 1px rgba(3, 11, 17, 0.5)"
          position="absolute"
          fontSize={'1.5rem'}
          p={3}
        >
          Conocenos
        </Text>
      </Box>
    </Box>
  </Flex>
)

export default FirstSection
