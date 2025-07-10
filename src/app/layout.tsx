import type { Metadata } from "next";
import "./globals.css";
import localfont from 'next/font/local' 
// import ButtonComponent from "@/components/ButtonComponent";
// import { NavbarComponent } from "@/components/(landing)/nav/NavbarComponent";
import { FooterComponent } from "@/components/(landing)/nav/FooterComponent";
import React from "react";

import { NavbarComponent } from "@/components/(landing)/nav/NavbarComponent";

export const metadata: Metadata = {
  title: {
    default: "HomePage",
    template: "%s | Car Selling",
  },
  description: "Welcome to Car Selling — Cambodia’s premium vehicle marketplace.",
  keywords: ["car", "discount", "luxury", "Cambodia", "vehicle", "buy car"],
  authors: [{ name: "FullStack Students" }],
  applicationName: "Car Selling",

  openGraph: {
    title: "Car Selling",
    description: "This is the homepage of the Car Selling platform.",
    url: "https://benz.com",
    siteName: "Car Selling",
    images: [
      {
        url: "https://car-nextjs-api.cheatdev.online/uploads/370f0d4c-3fad-441a-bd28-31291c30fd38.png",
        width: 800,
        height: 600,
        alt: "Car selling platform",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Car Selling",
    description: "Buy and sell premium cars easily with Car Selling.",
    images: [
      "https://car-nextjs-api.cheatdev.online/uploads/370f0d4c-3fad-441a-bd28-31291c30fd38.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};



// kantumruy_font 
const kantumruy_font = localfont({
  src: '../../public/fonts/KantumruyPro-SemiBold.ttf',
  variable: '--font-kantumruy',
  display: 'swap',
  preload: true,
  fallback: ['sans']
})

// lexend_font
const lexend_font = localfont({
  src: '../../public/fonts/Lexend-Regular.ttf',
  variable: '--font-lexend',
  display: 'swap'
})


export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kantumruy_font.variable} ${lexend_font.variable}`}>
      <body
      >
        <NavbarComponent/>
        
        {children}
        {modal}
        {/* <h1 lang="km">សួស្តី</h1> */}
        <FooterComponent/>
      </body>
    </html>
  );
}
