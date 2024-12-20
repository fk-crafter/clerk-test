import { SignIn } from "@clerk/nextjs";
import BackButton from "@/components/BackButton";

export default function SignInPage() {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <BackButton />
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}
