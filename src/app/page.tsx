'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  SimpleGrid,
  Icon,
  VStack,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import Navigation from '@/components/Navigation'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack align={'center'}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'orange.500'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'} textAlign="center">
        {text}
      </Text>
    </Stack>
  )
}

export default function Home() {
  return (
    <>
      <Navigation />
      {/* Hero Section */}
      <Box id="hero" pt={16}>
        <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          gap={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color={'orange.700'}
          >
            Trek des Gazelles{' '}
            <Text as={'span'} color={'orange.400'}>
              du Désert
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'} fontSize={{ base: 'lg', md: 'xl' }}>
            Fiona & Lucie se lancent dans l'aventure du Trek des Gazelles au Maroc.
            Une course solidaire 100% féminine dans le désert marocain.
          </Text>
          <Stack gap={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}
              onClick={() => {
                const element = document.getElementById('le-projet')
                if (element) {
                  const headerHeight = 80
                  window.scrollTo({
                    top: element.offsetTop - headerHeight,
                    behavior: 'smooth'
                  })
                }
              }}
            >
              Découvrir le projet
            </Button>
            <Button 
              rounded={'full'} 
              px={6}
              variant="outline"
              colorScheme="orange"
              onClick={() => {
                const element = document.getElementById('sponsors')
                if (element) {
                  const headerHeight = 80
                  window.scrollTo({
                    top: element.offsetTop - headerHeight,
                    behavior: 'smooth'
                  })
                }
              }}
            >
              Nous soutenir
            </Button>
          </Stack>
        </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box p={4} bg={'orange.50'}>
        <Stack gap={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'} color={'orange.700'}>
            Notre Aventure
          </Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Découvrez les aspects clés de notre participation au Trek des Gazelles
          </Text>
        </Stack>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
            <Feature
              icon={<Icon viewBox="0 0 24 24" w={10} h={10}>
                <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </Icon>}
              title={'Le Défi'}
              text={"Une course d'orientation dans le désert marocain, 100% féminine et solidaire"}
            />
            <Feature
              icon={<Icon viewBox="0 0 24 24" w={10} h={10}>
                <path fill="currentColor" d="M17 7H7a1 1 0 000 2h10a1 1 0 000-2zM7 11h10a1 1 0 000-2H7a1 1 0 000 2zM7 15h7a1 1 0 000-2H7a1 1 0 000 2z"/>
              </Icon>}
              title={"L'Équipe"}
              text={"Fiona & Lucie, deux amies passionnées d'aventure et d'engagement solidaire"}
            />
            <Feature
              icon={<Icon viewBox="0 0 24 24" w={10} h={10}>
                <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </Icon>}
              title={'La Cause'}
              text={"Soutenir des associations et sensibiliser à l'importance de l'engagement solidaire"}
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Le Projet Section */}
      <Container id="le-projet" maxW={'5xl'} py={20}>
        <Stack gap={8} textAlign="center">
          <Heading size="2xl" color="orange.700">
            Le Projet
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
            Le Trek des Gazelles du Désert est bien plus qu'une simple aventure. 
            C'est un projet solidaire et sportif qui nous permet de nous dépasser tout en soutenant des causes importantes.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} mt={16}>
          <Feature
            icon={<Icon viewBox="0 0 24 24" w={10} h={10}>
              <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </Icon>}
            title={'Défi Sportif'}
            text={"Une épreuve d'endurance et d'orientation de plusieurs jours dans le désert marocain"}
          />
          <Feature
            icon={<Icon viewBox="0 0 24 24" w={10} h={10}>
              <path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
            </Icon>}
            title={'Engagement Solidaire'}
            text={'Sensibilisation et collecte de fonds pour des associations caritatives'}
          />
          <Feature
            icon={<Icon viewBox="0 0 24 24" w={10} h={10}>
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </Icon>}
            title={'Développement Personnel'}
            text={'Une expérience transformatrice qui nous permet de repousser nos limites'}
          />
        </SimpleGrid>
      </Container>

      {/* La Course Section */}
      <Box bg="orange.50" py={20}>
        <Container id="la-course" maxW={'5xl'}>
          <Stack gap={8} textAlign="center">
            <Heading size="2xl" color="orange.700">
              La Course
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
              Le Trek des Gazelles du Désert est une course d'orientation 100% féminine qui se déroule chaque année 
              dans le désert marocain. Découvrez les détails de cette aventure extraordinaire.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 4 }} gap={6} mt={16}>
            <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="center">
              <Text color="gray.600" fontSize="md">Durée</Text>
              <Text color="orange.600" fontSize="3xl" fontWeight="bold">9</Text>
              <Text color="gray.500" fontSize="sm">jours d'aventure</Text>
            </Box>
            <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="center">
              <Text color="gray.600" fontSize="md">Distance</Text>
              <Text color="orange.600" fontSize="3xl" fontWeight="bold">400+</Text>
              <Text color="gray.500" fontSize="sm">kilomètres à parcourir</Text>
            </Box>
            <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="center">
              <Text color="gray.600" fontSize="md">Équipes</Text>
              <Text color="orange.600" fontSize="3xl" fontWeight="bold">300+</Text>
              <Text color="gray.500" fontSize="sm">équipes participantes</Text>
            </Box>
            <Box bg="white" p={6} rounded="lg" shadow="md" textAlign="center">
              <Text color="gray.600" fontSize="md">Température</Text>
              <Text color="orange.600" fontSize="3xl" fontWeight="bold">45°C</Text>
              <Text color="gray.500" fontSize="sm">maximum en journée</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Qui sommes-nous Section */}
      <Container id="qui-sommes-nous" maxW={'5xl'} py={20}>
        <Stack gap={8} textAlign="center">
          <Heading size="2xl" color="orange.700">
            Qui sommes-nous ?
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
            Nous sommes Fiona et Lucie, deux amies passionnées d'aventure et d'engagement solidaire. 
            Ensemble, nous avons décidé de relever le défi du Trek des Gazelles, une aventure qui nous tient à cœur.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} mt={16}>
          <VStack gap={4} textAlign="center">
            <Box w="120px" h="120px" bg="orange.400" rounded="full" mx="auto" display="flex" alignItems="center" justifyContent="center" color="white" fontSize="2xl" fontWeight="bold">F</Box>
            <Stack gap={2}>
              <Heading size="md" color="orange.700">Fiona</Heading>
              <Text color="orange.500" fontWeight="medium">Aventurière & Organisatrice</Text>
              <Text color="gray.600">Passionnée de randonnée et d'engagement associatif, Fiona apporte son expérience en organisation d'événements et sa détermination sans faille à ce projet.</Text>
            </Stack>
          </VStack>
          <VStack gap={4} textAlign="center">
            <Box w="120px" h="120px" bg="orange.400" rounded="full" mx="auto" display="flex" alignItems="center" justifyContent="center" color="white" fontSize="2xl" fontWeight="bold">L</Box>
            <Stack gap={2}>
              <Heading size="md" color="orange.700">Lucie</Heading>
              <Text color="orange.500" fontWeight="medium">Sportive & Motivatrice</Text>
              <Text color="gray.600">Avec son background sportif et son énergie communicative, Lucie est la force motrice de notre équipe et notre spécialiste en préparation physique.</Text>
            </Stack>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* Sponsors Section */}
      <Box id="sponsors" bg="orange.50" py={20}>
        <Container maxW={'6xl'}>
          <Stack gap={8} textAlign="center">
            <Heading size="2xl" color="orange.700">
              Pourquoi nous sponsoriser ?
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
              En nous soutenant, vous participez à une aventure humaine exceptionnelle tout en bénéficiant 
              d'une visibilité unique et d'un engagement fort auprès de nos communautés.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} mt={16}>
            <Feature
              icon={<Icon viewBox="0 0 24 24" w={10} h={10}>
                <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </Icon>}
              title="Visibilité Exceptionnelle"
              text="Votre marque associée à une aventure médiatique suivie par des milliers de personnes"
            />
            <Feature
              icon={<Icon viewBox="0 0 24 24" w={10} h={10}>
                <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/>
              </Icon>}
              title="Engagement Solidaire"
              text="Soutenez des valeurs fortes : courage, dépassement de soi et solidarité féminine"
            />
            <Feature
              icon={<Icon viewBox="0 0 24 24" w={10} h={10}>
                <path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
              </Icon>}
              title="Retour sur Investissement"
              text="Une communication authentique et impactante pour votre entreprise"
            />
          </SimpleGrid>

          <Box mt={16} p={8} bg="white" borderRadius="lg" textAlign="center" shadow="md">
            <Stack gap={6}>
              <Heading size="lg" color="orange.700">
                Intéressé par un partenariat ?
              </Heading>
              <Text color="gray.700" fontSize="lg">
                Contactez-nous pour discuter d'une formule personnalisée adaptée à vos besoins
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} gap={4} justify="center">
                <Button
                  size="lg"
                  colorScheme="orange"
                  bg="orange.400"
                  _hover={{ bg: 'orange.500' }}
                  rounded="full"
                >
                  Nous contacter
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  colorScheme="orange"
                  rounded="full"
                >
                  Télécharger le dossier
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  )
}
