import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
  fallback: ["Calibri", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Wahaweb - Votre partenaire digital",
  description: "Agence web spécialisée dans la création de sites web, applications mobiles et solutions digitales sur mesure. Transformons vos idées en réalité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${nunito.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
