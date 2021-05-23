import React from 'react'

import { Box, Text, Stack, Flex } from '@chakra-ui/react'

const AccessoriesSection = () => (
  <Box bg="white">
    <Stack direction="row" display="flex" margin="5rem" color="primary">
      <Text as="h1" fontSize="5rem" fontWeight="bold" display="flex" alignItems="center">
        Accesorios
        <Box bg="primary" w="5px" h={'50%'} ml="20px" />
      </Text>
      <Text display="flex" alignItems="center" fontSize="sm">
        Nullam vitae purus leo. Aliquam aliquam erat felis. Suspendisse neque leo, scelerisque in
        condimentum eu, feugiat id sem. Etiam sit amet nibh vitae massa imperdiet fermentum nec id
        nisl. Donec vel sapien et lectus finibus luctus.
      </Text>
    </Stack>

    <Flex margin="5rem" wrap="wrap">
      <Box w="170px" h="170px" bg="primary" m="5px" />
      <Box w="170px" h="170px" bg="primary" m="5px" />
      <Box w="170px" h="170px" bg="primary" m="5px" />
      <Box w="170px" h="170px" bg="primary" m="5px" />
      <Box w="170px" h="170px" bg="primary" m="5px" />
      <Box w="170px" h="170px" bg="primary" m="5px" />
      <Box w="170px" h="170px" bg="primary" m="5px" />
      <Box w="170px" h="170px" bg="primary" m="5px" />
      <Box w="170px" h="170px" bg="primary" m="5px" />
      <Box w="170px" h="170px" bg="primary" m="5px" />
      <Box w="170px" h="170px" bg="primary" m="5px" />
      <Box w="170px" h="170px" bg="primary" m="5px" />
    </Flex>
  </Box>
)

export default AccessoriesSection
