import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import DashboardCard from "@/modules/DashboardCard";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import toast from "react-hot-toast";
import styles from "@/styles/MyProfilesPage.module.css";

const MyProfilesPage = async () => {
  await connectDB();

  const session = await getServerSession(authOptions);

  if (!session) return toast.error("لطفا وارد حساب کاربری خود شوید");

  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);

  if (!user) return toast.error("شما مجاز به دسترسی به این بخش نیستید");

  return (
    <div className={styles.container}>
      {user.profiles.map((profile) => (
        <DashboardCard
          key={profile._id}
          profile={JSON.parse(JSON.stringify(profile))}
        />
      ))}
    </div>
  );
};

export default MyProfilesPage;
