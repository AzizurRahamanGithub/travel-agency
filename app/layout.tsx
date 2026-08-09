import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layouts/header"
import { Footer } from "@/components/layouts/footer"
import { FooterAll } from "@/components/layouts/footerall"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "CASA PORTUFORNIA | Dedicated to Creativity",
  description: "A creative hub where brands and people come to define who they are.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white text-secondary`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
