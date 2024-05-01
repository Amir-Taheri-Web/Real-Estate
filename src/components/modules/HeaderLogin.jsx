import { PiSignInBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import styles from "@/styles/HeaderLogin.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const HeaderLogin = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.container}>
      {session ? (
        <button type="button" className={styles.dashboardButton}>
          <Link href="/dashboard">
            <FaUserCircle />
          </Link>
        </button>
      ) : (
        <button type="button">
          <Link href="/signin">
            <PiSignInBold />
            ورود/ثبت نام
          </Link>
        </button>
      )}
    </div>
  );
};

export default HeaderLogin;
