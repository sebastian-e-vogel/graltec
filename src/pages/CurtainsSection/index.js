import React from 'react'

import FlatCurtainIcon from '../../assets/flat-curtain.svg'
import BombeCurtainIcon from '../../assets/bombe-curtain.svg'
import AmericanCurtainIcon from '../../assets/american-curtain.svg'

import { Box, Text, Stack, HStack } from '@chakra-ui/react'

const CurtainsSection = () => (
  <Box bg="primary">
    <Stack direction="row" display="flex" margin="5rem">
      <Text as="h1" fontSize="5rem" fontWeight="bold" display="flex" alignItems="center">
        CORTINAS
        <Box bg="white" w="5px" h={'50%'} ml="20px" />
      </Text>
      <Text display="flex" alignItems="center" fontSize="sm">
        Nullam vitae purus leo. Aliquam aliquam erat felis. Suspendisse neque leo, scelerisque in
        condimentum eu, feugiat id sem. Etiam sit amet nibh vitae massa imperdiet fermentum nec id
        nisl. Donec vel sapien et lectus finibus luctus.
      </Text>
    </Stack>
    <HStack justify="space-between" align="center" margin="5rem">
      <Box w="200px" display="flex" justifyContent="center">
        <FlatCurtainIcon />
      </Box>
      <Box w="200px" justifyContent="center" alignItems="center" display="flex">
        <BombeCurtainIcon />
      </Box>
      <Box w="200px" justifyContent="center" alignItems="center" display="flex">
        <AmericanCurtainIcon />
      </Box>
    </HStack>
    <HStack justify="space-between" align="center" margin="5rem">
      <Box w="200px" bg="white" boxShadow="0px 3px 20px 1px rgba(3, 11, 17, 0.5)">
        <Text color="primary" fontWeight="500" textAlign="center" fontSize="2xl" p="2" fon>
          Plana
        </Text>
      </Box>
      <Box w="200px" bg="white" boxShadow="0px 3px 20px 1px rgba(3, 11, 17, 0.5)">
        <Text color="primary" fontWeight="500" textAlign="center" fontSize="2xl" p="2">
          Bombé
        </Text>
      </Box>
      <Box w="200px" bg="white" boxShadow="0px 3px 20px 1px rgba(3, 11, 17, 0.5)">
        <Text color="primary" fontWeight="500" textAlign="center" fontSize="2xl" p="2">
          Americana
        </Text>
      </Box>
    </HStack>
  </Box>
)

export default CurtainsSection
