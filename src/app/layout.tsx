import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: '400',
  display: 'swap',
  variable: '--font-marcellus'
});

export const metadata: Metadata = {
  title: "PVS Empreendimentos",
  description: "PVS Empreendimentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br" className="light">
      <body className={marcellus.variable}>
          <div className="lg:mx-auto lg:max-w-[60rem] lg:shadow-[0_0_20px_10px_var(--gold)] min-h-screen">
            <main className="text-foreground bg-background px-4 pt-8 lg:pl-8 lg:pr-8 lg:pt-12">
              {children}
            </main>
          </div>
      </body>
    </html>
  );
}
