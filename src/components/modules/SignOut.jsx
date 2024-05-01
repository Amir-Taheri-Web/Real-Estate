"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignOut = () => {
  const router = useRouter();

  const signOutHandler = async () => {
    await signOut({ redirect: false });

    toast.success("خروج انجام شد");
    router.refresh();
  };

  return (
    <div>
      <button type="button" onClick={signOutHandler}>
        خروج از حساب کاربری
      </button>
    </div>
  );
};

export default SignOut;
