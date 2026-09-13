import type { Metadata } from "next"
import { Georama, Roboto_Mono } from "next/font/google"
import "./globals.css"

const georama = Georama({
  subsets: ["latin"],
  variable: "--georama",
  style: ["normal", "italic"]
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--roboto-mono"
})

export const metadata: Metadata = {
  title: "Fateme Adiban",
  description: "Fateme Adiban is a Front-End Developer specializing in React, Next.js, TypeScript, and modern web experiences.",

  openGraph: {
    title: "Fateme Adiban",
    description: "Front-End Developer specializing in React, Next.js, TypeScript, and modern web experiences.",
    url: "https://fatemeadiban.vercel.app/",
    siteName: "Fateme Adiban",
    images: [
      {
        url: "/images/fateme.jpg",
        width: 1200,
        height: 630,
        alt: "Fateme Adiban - Front-End Developer"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Fateme Adiban",
    description: "Front-End Developer specializing in React, Next.js, TypeScript, and modern web experiences.",
    images: ["/images/fateme.jpg"]
  }
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${georama.variable} ${robotoMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
