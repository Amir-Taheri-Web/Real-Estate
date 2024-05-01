"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import styles from "@/styles/SignOut.module.css";
import { BsFillDoorOpenFill } from "react-icons/bs";

const SignOut = () => {
  const router = useRouter();

  const signOutHandler = async () => {
    await signOut({ redirect: false });

    toast.success("خروج انجام شد");
    router.refresh();
  };

  return (
    <div className={styles.container}>
      <button type="button" onClick={signOutHandler}>
        <BsFillDoorOpenFill />
        خروج از حساب کاربری
      </button>
    </div>
  );
};

export default SignOut;
