import type { Metadata } from "next"
import { Georama, Roboto_Mono } from "next/font/google"
import "./globals.css"

const georama = Georama({
  subsets: ["latin"],
  variable: "--georama"
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--roboto-mono"
})

export const metadata: Metadata = {
  title: "Fateme Adiban",
  description: "Fateme Adiban is a Front-End Developer specializing in React, Next.js, TypeScript, and modern web experiences."
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${georama.variable} ${robotoMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
