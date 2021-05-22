import React from 'react'

import Seo from '../components/seo'
import { Box, Flex, Text } from '@chakra-ui/react'

const LandingPage = () => (
  <>
    <Seo title="Home" />
    <Flex justify="space-between">
      <Box align="center"></Box>

      <Box flex={0.15} height="100px" bg="primary"></Box>
    </Flex>
  </>
)

export default LandingPage
