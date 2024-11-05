import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import Navbar from '@/app/_components/Navbar'
import "./globals.css";
import Providers from "./providers"
import { GoogleAnalytics } from '@next/third-parties/google'

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: '400',
  display: 'swap',
  variable: '--font-marcellus'
});

export const metadata: Metadata = {
  title: "PVS Empreendimentos",
  description: "PVS Empreendimentos",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon-32x32.png', sizes: '32x32' },

    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br" className="light">
      <body className={marcellus.variable}>
        <GoogleAnalytics gaId="G-9RPBQFBMGJ" />
        <Providers>
          <div className="lg:mx-auto lg:max-w-[60rem] lg:shadow-[0_0_20px_10px_var(--gold)] min-h-screen">
            <Navbar />
            <main className="text-foreground bg-background px-4 pt-8 lg:pl-8 lg:pr-8 lg:pt-12">
              {children}
            </main>
          </div>
          </Providers>
      </body>
    </html>
  );
}
