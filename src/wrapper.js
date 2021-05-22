import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Layout from './components/layout'
import { theme } from './styles/theme'
import { Fonts } from './styles/fonts'

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Fonts />
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
