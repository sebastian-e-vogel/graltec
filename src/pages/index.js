import React from 'react'

import Seo from '../components/seo'
import { Flex } from '@chakra-ui/react'
import FirstSection from './FirstSection'
import EnginesSection from './EnginesSection'

const LandingPage = () => (
  <>
    <Seo title="Home" />
    <Flex bg="primary" color="white" direction="column">
      <FirstSection />
      <EnginesSection />
    </Flex>
  </>
)

export default LandingPage
