import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { Box, Text, Stack, HStack } from '@chakra-ui/react'

const ServicesSection = () => (
  <Box bg="white">
    <Stack direction="row" display="flex" margin="5rem" color="primary">
      <Text as="h1" fontSize="5rem" fontWeight="bold" display="flex" alignItems="center">
        SERVICIOS
        <Box bg="primary" w="5px" h={'50%'} ml="20px" />
      </Text>
      <Text display="flex" alignItems="center" fontSize="sm">
        Nullam vitae purus leo. Aliquam aliquam erat felis. Suspendisse neque leo, scelerisque in
        condimentum eu, feugiat id sem. Etiam sit amet nibh vitae massa imperdiet fermentum nec id
        nisl. Donec vel sapien et lectus finibus luctus.
      </Text>
    </Stack>

    <HStack justify="center" align="center" margin="5rem">
      <Box position="relative">
        <StaticImage
          src="../../images/scheme.png"
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="A metallic curtains"
        />
        <Box
          color="white"
          w="300px"
          h="150px"
          position="absolute"
          top="35%"
          bg="white"
          right={'-36%'}
          boxShadow="0px 0px 30px rgba(3, 11, 17, 0.3)"
        ></Box>
      </Box>
    </HStack>
  </Box>
)

export default ServicesSection
