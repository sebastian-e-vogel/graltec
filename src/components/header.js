import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

const Header = ({}) => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" bg="primary" color="white">
      <Box align="center" flex={0.3}>
        <Text letterSpacing={'tighter'} bg="white" color="primary" flex={1} pt={6} pb={6}>
          Graltec
        </Text>
      </Box>

      <Box flex={0.7} p={6} display="flex" justifyContent="space-around">
        <Text flex={1} align="center">
          Equipos
        </Text>
        <Text flex={1} align="center">
          Cortinas
        </Text>
        <Text flex={1} align="center">
          Servicios
        </Text>
        <Text flex={1} align="center">
          Accesorios
        </Text>
        <Text flex={1} align="center">
          Contacto
        </Text>
      </Box>
    </Flex>
  )
}

export default Header
