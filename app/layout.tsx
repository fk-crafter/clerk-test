import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css"; // Assure-toi d'avoir un fichier CSS global.

export const metadata = {
  title: "Mon Projet Clerk",
  description: "Site avec Clerk et Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
