import React from 'react'

import { Container } from '@chakra-ui/react'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Container alignSelf="center" maxWidth="container.xl">
        <Header siteTitle="Graltec" />
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout
