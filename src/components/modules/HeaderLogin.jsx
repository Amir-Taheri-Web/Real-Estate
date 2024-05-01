"use client";

import { PiSignInBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import styles from "@/styles/HeaderLogin.module.css";
import { useEffect, useState } from "react";

const HeaderLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { status } = useSession();

  useEffect(() => {
    setIsLoggedIn(status === "authenticated" ? true : false);
  }, [status]);

  return (
    <div className={styles.container}>
      {isLoggedIn ? (
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
