"use client";

import { profileStrings } from "@/constants/profile";
import CategoriesRadio from "@/modules/CategoriesRadio";
import DateInput from "@/modules/DateInput";
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
    images: [],
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setProfile((profile) => ({ ...profile, [name]: value }));
  };

  return (
    <div>
      <h2>ثبت آگهی</h2>

      <form>
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
      </form>
    </div>
  );
};

export default AddProfilePage;
