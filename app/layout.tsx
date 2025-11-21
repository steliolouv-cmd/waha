import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebAgency - Votre partenaire digital",
  description: "Agence web spécialisée dans la création de sites web, applications mobiles et solutions digitales sur mesure. Transformons vos idées en réalité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
