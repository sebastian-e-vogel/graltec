import React from 'react'

import Seo from '../components/seo'
import { Flex } from '@chakra-ui/react'
import FirstSection from './FirstSection'
import EnginesSection from './EnginesSection'
import CurtainsSection from './CurtainsSection'
import ServicesSection from './ServicesSection'
import AccessoriesSection from './AccessoriesSection'

const LandingPage = () => (
  <>
    <Seo title="Home" />
    <Flex bg="primary" color="white" direction="column">
      <FirstSection />
      <EnginesSection />
      <CurtainsSection />
      <ServicesSection />
      <AccessoriesSection />
    </Flex>
  </>
)

export default LandingPage
