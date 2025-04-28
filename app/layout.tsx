import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Workshop Alteryx na Prática - Julie Anie",
  description:
    "Mais de 16 horas de conteúdo real, extraído de workshops ao vivo, focados na prática e na transformação.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="https://static.hotmart.com/checkout/widget.min.js" defer></script>
        <link rel="stylesheet" href="https://static.hotmart.com/css/hotmart-fb.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
