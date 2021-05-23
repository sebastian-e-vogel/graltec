import { extendTheme } from '@chakra-ui/react'

/**
 * This theme object can be changed and edited however you like. It's currently extending the default Chakra theme
 * (which itself is inspired by Tailwind CSS) with the values below.
 * Example usage of theme values: <Text color="brand.100" fontSize="6xl" fontWeight="bold">Boop</Text>
 */
export const theme = extendTheme({
  colors: {
    primary: '#0E293E',
    gray: '#E1E1E1',
    lightGray: '#BCBCBC',
    white: '#FFFFFF',
  },
  fonts: {
    body: 'Seravek',
    heading: 'Seravek',
    mono: 'Seravek',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    normal: 300,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
})
