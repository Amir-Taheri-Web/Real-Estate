"use client";

import { profileStrings } from "@/constants/profile";
import CategoriesRadio from "@/modules/CategoriesRadio";
import DateInput from "@/modules/DateInput";
import ImageInput from "@/modules/ImageInput";
import ListInputs from "@/modules/ListInputs";
import TextInput from "@/modules/TextInput";
import { useState } from "react";

const AddProfilePage = () => {
  const [profile, setProfile] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    realEstate: "",
    price: "",
    category: "villa",
    constructionDate: "",
    amenities: [],
    rules: [],
    images: {},
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setProfile((profile) => ({ ...profile, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(profile);
  };

  return (
    <div>
      <h2>ثبت آگهی</h2>

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

        <DateInput />

        <ListInputs
          type="amenities"
          profile={profile}
          setProfile={setProfile}
        />

        <ListInputs type="rules" profile={profile} setProfile={setProfile} />

        <ImageInput setProfile={setProfile} />

        <button type="submit">ثبت</button>
      </form>
    </div>
  );
};

export default AddProfilePage;
