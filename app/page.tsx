"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-8 bg-gray-100">
      <h1 className="text-4xl font-extrabold text-gray-800">clerk test</h1>
      <div className="flex flex-col items-center gap-6">
        <SignedOut>
          <div className="flex gap-6">
            <button
              onClick={() => router.push("/sign-in")}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-medium rounded-lg shadow-md hover:from-indigo-600 hover:to-indigo-800 transition-all duration-300 ease-in-out transform "
            >
              se connecter
            </button>
            <button
              onClick={() => router.push("/sign-up")}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-medium rounded-lg shadow-md hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 ease-in-out transform "
            >
              inscriiption
            </button>
          </div>
        </SignedOut>

        <SignedIn>
          <p className="text-lg font-semibold text-gray-700">
            tu as déjà un compte
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => router.push("/protected")}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800 transition-all duration-300 ease-in-out transform "
            >
              aller à la page de connexion
            </button>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </main>
  );
}
