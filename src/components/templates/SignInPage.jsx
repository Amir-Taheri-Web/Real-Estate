"use client";

import { e2p } from "@/utils/convert";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { FaUnlockAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import styles from "@/styles/SignInPage.module.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h2>فرم ورود</h2>

      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.wrapper}>
          <div>
            <label htmlFor="email">
              <IoMdMail />
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">
              <FaUnlockAlt />
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              placeholder="SomeThing$1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">ورود</button>
      </form>

      <p>
        <span>حساب کاربری ندارید؟ </span>
        <Link href="/signup">ثبت نام</Link>
      </p>

      <Toaster />
    </div>
  );
};

export default SignInPage;
