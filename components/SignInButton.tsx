"use client";
import { useRouter } from "next/navigation";

export default function AuthButtons() {
  const router = useRouter();

  return (
    <div className="flex gap-4">
      <button
        onClick={() => router.push("/sign-in")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Se connecter
      </button>
      <button
        onClick={() => router.push("/sign-up")}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Sinscrire
      </button>
    </div>
  );
}
