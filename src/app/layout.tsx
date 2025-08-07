// src/app/layout.tsx
import type { Metadata } from 'next'
import ChakraLayout from './ChakraLayout'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Trek des Gazelles du Désert',
  description: 'Site officiel de Fiona & Lucie pour le trek solidaire au Maroc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <ChakraLayout>
          <Header />
          <main>{children}</main>
          <Footer />
        </ChakraLayout>
      </body>
    </html>
  )
}
