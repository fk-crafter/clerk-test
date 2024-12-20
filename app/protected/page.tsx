import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function ProtectedPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold">Page Protégée 🔒</h1>

      <SignedIn>
        <p>Bienvenue dans la section protégée 🎉</p>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <p>Tu dois être connecté pour accéder à cette page.</p>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
