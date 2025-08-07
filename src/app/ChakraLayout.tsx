// src/app/ChakraLayout.tsx
'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ReactNode } from 'react'

// Thème personnalisé avec couleurs du désert
const desertTheme = extendTheme({
  colors: {
    // Palette désert - tons chauds et sablés
    sand: {
      50: '#fdf9f0',
      100: '#faf0e0',
      200: '#f4e0c1',
      300: '#ebca96',
      400: '#ddb66b',
      500: '#d4a455',
      600: '#c1904a',
      700: '#a17441',
      800: '#85603a',
      900: '#6d4f31'
    },
    terracotta: {
      50: '#fef7f0',
      100: '#feecdc',
      200: '#fcd9bd',
      300: '#fdba8c',
      500: '#ed8936',
      600: '#dd6b20',
      700: '#c05621',
      800: '#9c4221',
      900: '#7b341e'
    },
    // Override orange colors with our desert palette
    orange: {
      50: '#fdf9f0',
      100: '#faf0e0',
      200: '#f4e0c1',
      300: '#ebca96',
      400: '#ed8936',
      500: '#dd6b20',
      600: '#c05621',
      700: '#9c4221',
      800: '#7b341e',
      900: '#7b341e'
    }
  }
})

export default function ChakraLayout({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={desertTheme}>{children}</ChakraProvider>
}
