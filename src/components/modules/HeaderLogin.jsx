"use client";

import { PiSignInBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import styles from "@/styles/HeaderLogin.module.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const HeaderLogin = () => {
  const [loginStatus, setloginStatus] = useState("unauthenticated");

  const { status } = useSession();

  useEffect(() => {
    if (status === "loading" || status === loginStatus) return;
    setloginStatus(status);
  }, [status]);

  return (
    <div className={styles.container}>
      {status === "loading" ? (
        <Loader color={"#ffffff"} width="50" height="50" />
      ) : loginStatus === "authenticated" ? (
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
