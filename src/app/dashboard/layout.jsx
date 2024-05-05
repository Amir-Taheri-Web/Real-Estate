import DashboardSideBar from "@/modules/DashboardSideBar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  await connectDB();

  const session = await getServerSession(authOptions);

  if (!session) redirect("/signin");

  const user = await User.findOne({ email: session.user.email });
  return (
    <DashboardSideBar
      email={user.email}
      firstName={user.firstName}
      lastName={user.lastName}
      role={user.role}
    >
      {children}
    </DashboardSideBar>
  );
};

export default DashboardLayout;
