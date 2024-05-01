import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import styles from "@/styles/DashboardPage.module.css";

const DashboardPage = async () => {
  await connectDB();

  const session = await getServerSession(authOptions);

  const user = await User.findOne({ email: session.user.email });

  return (
    <div className={styles.container}>
      <h2>خوش آمدید👋</h2>
      <p>
        تاریخ ثبت نام:{" "}
        <span>
          {new Date(String(user.createdAt)).toLocaleDateString("fa-IR")}
        </span>
      </p>
    </div>
  );
};

export default DashboardPage;
