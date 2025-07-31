import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import type React from "react"
import "./globals.css"; // <--- Certifique-se que esta linha está correta

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "dnsouzadev - Portfolio",
  description: "Daniel de Deus Souza - Desenvolvedor de Software, 23 anos, residente de Macaé/RJ",
  keywords: ["desenvolvedor", "software", "PHP", "JavaScript", "Python", "portfolio"],
  authors: [{ name: "Daniel de Deus Souza" }],
  openGraph: {
    title: "dnsouzadev - Portfolio",
    description: "Daniel de Deus Souza - Desenvolvedor de Software",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      {" "}
      {/* A classe 'dark' aqui define o tema inicial */}
      <body className={`${spaceMono.variable} font-mono antialiased`}>{children}</body>
    </html>
  )
}
