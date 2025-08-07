'use client'

import {
  Box,
  Flex,
  Link,
  Stack,
  IconButton,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState } from 'react'

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link
    as={NextLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'orange.200',
    }}
    href={href}
    fontWeight="medium"
  >
    {children}
  </Link>
)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Box bg={'orange.100'} px={4} shadow="md">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight="bold" fontSize="xl" color="orange.800">
            Trek des Gazelles
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} gap={7} display={{ base: 'none', md: 'flex' }}>
              <NavLink href={'/'}>Accueil</NavLink>
              <NavLink href={'/qui-sommes-nous'}>Qui sommes-nous</NavLink>
              <NavLink href={'/le-projet'}>Le Projet</NavLink>
              <NavLink href={'/la-course'}>La Course</NavLink>
              <NavLink href={'/sponsors'}>Sponsoring</NavLink>
            </Stack>

            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={() => setIsOpen(!isOpen)}
              variant={'ghost'}
              aria-label={'Open Menu'}
            >
              {isOpen ? '✕' : '☰'}
            </IconButton>
          </Flex>
        </Flex>

        {/* Mobile menu */}
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <VStack gap={4}>
              <NavLink href={'/'}>Accueil</NavLink>
              <NavLink href={'/qui-sommes-nous'}>Qui sommes-nous</NavLink>
              <NavLink href={'/le-projet'}>Le Projet</NavLink>
              <NavLink href={'/la-course'}>La Course</NavLink>
              <NavLink href={'/sponsors'}>Sponsoring</NavLink>
            </VStack>
          </Box>
        )}
      </Box>
    </>
  )
}