import SignInPage from "@/templates/SignInPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return <SignInPage />;
};

export default page;
