import { FaMapLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";

const profileFields = {
  title: "",
  description: "",
  location: "",
  realEstate: "",
  phone: "",
  price: "",
  category: "villa",
  constructionDate: Date.now(),
  amenities: [],
  rules: [],
};

const profileStrings = {
  title: "عنوان",
  description: "توضیحات",
  location: "شهر",
  phone: "شماره تماس",
  realEstate: "بنگاه",
  price: "قیمت(تومان)",
};

const profileIcons = {
  locationIcon: <FaMapLocationDot />,
  dateIcon: <FaCalendar />,
  priceIcon: <FaMoneyBillWave />,
};

export { profileStrings, profileFields, profileIcons };
