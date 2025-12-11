import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LISA by LEOVA Systems | Logiciel de Gestion pour Inspections & Contrôles',
  description: 'LISA - Solution SaaS complète pour la gestion des inspections, contrôles qualité, équipements et interventions. Développé par LEOVA Systems.',
  keywords: 'LISA, LEOVA, inspection, contrôle qualité, gestion équipements, SaaS, logiciel métier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  )
}

