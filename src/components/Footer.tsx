'use client'

import {
  Box,
  Container,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      bg={'orange.50'}
      color={'gray.700'}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        gap={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2025 Trek des Gazelles - Fiona & Lucie. Tous droits réservés.</Text>
        <Stack direction={'row'} gap={6}>
          <Link href={'mailto:contact@trekgazelles.com'}>Contact</Link>
          <Link href={'#'}>Mentions légales</Link>
        </Stack>
      </Container>
    </Box>
  )
}