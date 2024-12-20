import { SignUp } from "@clerk/nextjs";
import BackButton from "@/components/BackButton";

export default function SignUpPage() {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <BackButton />
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
}
