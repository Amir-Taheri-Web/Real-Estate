"use client";

import { profileStrings } from "@/constants/profile";
import CategoriesRadio from "@/modules/CategoriesRadio";
import TextInput from "@/modules/TextInput";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

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

        <DatePicker
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
        />
      </form>
    </div>
  );
};

export default AddProfilePage;
