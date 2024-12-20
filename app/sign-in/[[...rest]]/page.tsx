import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignIn routing="path" path="/sign-in" afterSignInUrl="/protected" />
    </div>
  );
}
