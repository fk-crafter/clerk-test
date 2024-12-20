import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignUp routing="path" path="/sign-up" afterSignUpUrl="/protected" />
    </div>
  );
}
