"use client";

import { e2p } from "@/utils/convert";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { FaUser, FaUnlockAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import styles from "@/styles/SignUpPage.module.css";
import Loader from "@/modules/Loader";
import { IoEye, IoEyeOff } from "react-icons/io5";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password.trim() !== rePassword.trim())
      return toast.error("رمز عبور با تکرار رمز عبور برابر نیست");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    setIsLoading(false);

    if (data.status === "success") {
      toast.success(data.message);
      router.replace("/signin");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>فرم ثبت نام</h2>

      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.wrapper}>
          <div>
            <label htmlFor="firstName">
              <FaUser />
              نام
            </label>
            <input
              type="text"
              id="firstName"
              placeholder={`${e2p("کوروش")}`}
              value={e2p(firstName)}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="lastName">
              <FaUser />
              نام خانوادگی
            </label>
            <input
              type="text"
              id="lastName"
              placeholder={`${e2p("افشار")}`}
              value={e2p(lastName)}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

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

          <div>
            <label htmlFor="rePassword">
              <FaUnlockAlt />
              تکرار رمز عبور
            </label>
            <input
              type={isPasswordShown ? "text" : "password"}
              autoComplete="off"
              id="rePassword"
              placeholder="SomeThing$1234"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
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
        <span>حساب کاربری دارید؟ </span>
        <Link href="/signin">ورود</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
