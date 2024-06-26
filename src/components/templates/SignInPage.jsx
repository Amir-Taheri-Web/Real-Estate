"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { FaUnlockAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import styles from "@/styles/SignInPage.module.css";
import { signIn } from "next-auth/react";
import Loader from "@/modules/Loader";
import { IoEye, IoEyeOff } from "react-icons/io5";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setIsLoading(false);
    console.log(res)

    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("ورود انجام شد");
      router.replace("/dashboard");
      router.refresh();
    }
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
              type={isPasswordShown ? "text" : "password"}
              autoComplete="off"
              id="password"
              placeholder="SomeThing$1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              type="button"
              onClick={() => setIsPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown ? <IoEye /> : <IoEyeOff />}
            </span>
          </div>
        </div>

        {isLoading ? (
          <Loader parentHeight="43px" />
        ) : (
          <button type="submit">ورود</button>
        )}
      </form>

      <p>
        <span>حساب کاربری ندارید؟ </span>
        <Link href="/signup">ثبت نام</Link>
      </p>
    </div>
  );
};

export default SignInPage;
