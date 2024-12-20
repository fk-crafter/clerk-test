import AuthButtons from "@/components/SignInButton";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold">Bienvenue sur mon projet Clerk 🚀</h1>
      <AuthButtons />
    </main>
  );
}
