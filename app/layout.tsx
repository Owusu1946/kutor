import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wonder Victor Kutor, Esq. | Lawyer, Author & Public Servant",
  description: "Official website of Wonder Victor Kutor, Esq. Legal practitioner, author of 'The Immigration Formulae', and dedicated public servant.",
  keywords: ["Wonder Victor Kutor", "Lawyer Ghana", "The Immigration Formulae", "Public Servant", "Ghanaian Author"],
  authors: [{ name: "Wonder Victor Kutor, Esq." }],
  openGraph: {
    title: "Wonder Victor Kutor, Esq.",
    description: "Legal Practitioner, Author & Public Servant. Explore milestones, publications, and professional updates.",
    url: "https://www.wonderkutor.com",
    siteName: "Wonder Victor Kutor",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonder Victor Kutor, Esq.",
    description: "Legal Practitioner, Author & Public Servant.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

import { AppLayout } from "@/app/components/layout/AppLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="#059669"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #059669,0 0 5px #059669"
        />
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
