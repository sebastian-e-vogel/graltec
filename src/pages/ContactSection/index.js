import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { Box, Text, Stack, VStack, HStack, Flex, Input, Textarea, Button } from '@chakra-ui/react'

const ContactSection = () => (
  <Box bg="white">
    <Stack direction="row" display="flex" margin="5rem" color="primary">
      <Text as="h1" fontSize="5rem" fontWeight="bold" display="flex" alignItems="center">
        CONTACTO
        <Box bg="primary" w="5px" h={'50%'} ml="20px" />
      </Text>
      <Text display="flex" alignItems="center" fontSize="sm">
        Nullam vitae purus leo. Aliquam aliquam erat felis. Suspendisse neque leo, scelerisque in
        condimentum eu, feugiat id sem. Etiam sit amet nibh vitae massa imperdiet fermentum nec id
        nisl. Donec vel sapien et lectus finibus luctus.
      </Text>
    </Stack>
    <HStack>
      <VStack justify="center" align="center" margin="5rem" flex={1} color="primary">
        <Input placeholder="Nombre" bg="gray" fontWeight="400" fontSize="14px" />
        <Input placeholder="Apellido" bg="gray" fontWeight="400" fontSize="14px" />
        <Input placeholder="Mail" bg="gray" fontWeight="400" fontSize="14px" />
        <Textarea placeholder="Mensaje" size="sm" bg="gray" fontWeight="400" fontSize="14px" />
        <Flex justify="flex-end" w="100%">
          <Button
            type="submit"
            variant="solid"
            bg="primary"
            color="white"
            borderRadius="0"
            w="70px"
            h="30px"
            fontSize="12px"
            boxShadow="0px 3px 20px 1px rgba(3, 11, 17, 0.5)"
          >
            Enviar
          </Button>
        </Flex>
      </VStack>
      <Box w="50%">
        <StaticImage
          src="../../images/map.png"
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="A metallic curtains"
        />
      </Box>
    </HStack>
  </Box>
)

export default ContactSection
