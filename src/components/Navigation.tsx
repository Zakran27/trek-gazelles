'use client'

import {
  Box,
  Flex,
  Heading,
  Button,
  useDisclosure,
  Stack,
  IconButton,
  Collapse,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const NavButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <Button
    variant="ghost"
    colorScheme="orange"
    onClick={onClick}
    _hover={{ bg: 'orange.100' }}
  >
    {children}
  </Button>
)

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Hauteur approximative du header fixe
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    if (isOpen) onToggle()
  }

  return (
    <Box position="fixed" top={0} w="100%" bg="white" zIndex={1000} shadow="sm">
      <Flex
        maxW="7xl"
        mx="auto"
        px={4}
        py={3}
        align="center"
        justify="space-between"
      >
        <Heading 
          size="md" 
          color="orange.700"
          cursor="pointer"
          onClick={() => scrollToSection('hero')}
        >
          Trek des Gazelles
        </Heading>

        {/* Desktop Navigation */}
        <Stack
          direction="row"
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
        >
          <NavButton onClick={() => scrollToSection('le-projet')}>
            Le Projet
          </NavButton>
          <NavButton onClick={() => scrollToSection('la-course')}>
            La Course
          </NavButton>
          <NavButton onClick={() => scrollToSection('qui-sommes-nous')}>
            Qui sommes-nous
          </NavButton>
          <NavButton onClick={() => scrollToSection('sponsors')}>
            Sponsors
          </NavButton>
        </Stack>

        {/* Mobile menu button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle navigation"
          onClick={onToggle}
          variant="ghost"
          colorScheme="orange"
        />
      </Flex>

      {/* Mobile Navigation */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg="white"
          display={{ md: 'none' }}
          px={4}
          pb={4}
          borderBottom="1px"
          borderColor="gray.100"
        >
          <Stack spacing={2}>
            <NavButton onClick={() => scrollToSection('le-projet')}>
              Le Projet
            </NavButton>
            <NavButton onClick={() => scrollToSection('la-course')}>
              La Course
            </NavButton>
            <NavButton onClick={() => scrollToSection('qui-sommes-nous')}>
              Qui sommes-nous
            </NavButton>
            <NavButton onClick={() => scrollToSection('sponsors')}>
              Sponsors
            </NavButton>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  )
}