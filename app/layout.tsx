import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css"; // Assure-toi que tes styles Tailwind sont importés.

export const metadata = {
  title: "Mon Projet Clerk",
  description: "Projet avec Clerk et Next.js",
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
