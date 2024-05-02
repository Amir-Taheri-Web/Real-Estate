"use client";

import { profileFields, profileStrings } from "@/constants/profile";
import CategoriesRadio from "@/modules/CategoriesRadio";
import DateInput from "@/modules/DateInput";
import ListInputs from "@/modules/ListInputs";
import TextInput from "@/modules/TextInput";
import styles from "@/styles/AddProfilePage.module.css";
import { p2e } from "@/utils/convert";
import { useState } from "react";
import { BsFillHouseAddFill } from "react-icons/bs";
import toast from "react-hot-toast";
import Loader from "@/modules/Loader";

const AddProfilePage = () => {
  const [profile, setProfile] = useState(profileFields);

  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setProfile((profile) => ({ ...profile, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        body: JSON.stringify({
          ...profile,
          phone: p2e(profile.phone),
          price: p2e(profile.price),
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.status === "success") {
        toast.success(data.message);
        setProfile(profileFields);
      }
      if (data.status === "failure") toast.error(data.message);

      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>
        <BsFillHouseAddFill />
        ثبت آگهی
      </h2>

      <form onSubmit={submitHandler}>
        {Object.keys(profileStrings).map((item) => (
          <TextInput
            key={item}
            value={profile}
            changeHandler={changeHandler}
            name={item}
            placeholder={profileStrings[item]}
          />
        ))}

        <CategoriesRadio profile={profile} setProfile={setProfile} />

        <DateInput profile={profile} setProfile={setProfile} />

        <ListInputs
          type="amenities"
          profile={profile}
          setProfile={setProfile}
        />

        <ListInputs type="rules" profile={profile} setProfile={setProfile} />

        {isLoading ? (
          <Loader height="43" />
        ) : (
          <button type="submit">ثبت</button>
        )}
      </form>
    </div>
  );
};

export default AddProfilePage;
