import React from 'react'

import { Box, Text, Stack, HStack } from '@chakra-ui/react'

const EnginesSection = () => (
  <Box bg="lightGray">
    <Stack direction="row" display="flex" margin="5rem">
      <Text as="h1" fontSize="5rem" fontWeight="bold" display="flex" alignItems="center">
        MOTORES
        <Box bg="white" w="5px" h={'50%'} ml="20px" />
      </Text>
      <Text display="flex" alignItems="center" fontSize="sm">
        Nullam vitae purus leo. Aliquam aliquam erat felis. Suspendisse neque leo, scelerisque in
        condimentum eu, feugiat id sem. Etiam sit amet nibh vitae massa imperdiet fermentum nec id
        nisl. Donec vel sapien et lectus finibus luctus.
      </Text>
    </Stack>
    <HStack justify="space-between" align="center" margin="5rem">
      <Box h="200px" w="200px" bg="white" />
      <Box h="200px" w="200px" bg="white" />
      <Box h="200px" w="200px" bg="white" />
    </HStack>
    <HStack justify="space-between" align="center" margin="5rem">
      <Box w="200px" bg="white" boxShadow="0px 3px 20px 1px rgba(3, 11, 17, 0.5)">
        <Text color="primary" fontWeight="500" textAlign="center" fontSize="2xl" p="2" fon>
          Semiblindados
        </Text>
      </Box>
      <Box w="200px" bg="white" boxShadow="0px 3px 20px 1px rgba(3, 11, 17, 0.5)">
        <Text color="primary" fontWeight="500" textAlign="center" fontSize="2xl" p="2">
          Blindados
        </Text>
      </Box>
      <Box w="200px" bg="white" boxShadow="0px 3px 20px 1px rgba(3, 11, 17, 0.5)">
        <Text color="primary" fontWeight="500" textAlign="center" fontSize="2xl" p="2">
          Corredizos
        </Text>
      </Box>
    </HStack>
  </Box>
)

export default EnginesSection
