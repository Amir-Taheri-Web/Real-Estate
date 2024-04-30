import SignUpPage from "@/templates/SignUpPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignUp = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return <SignUpPage />;
};

export default SignUp;
