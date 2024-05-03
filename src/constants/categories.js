import { FaHouseChimney } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
import { PiOfficeChairFill } from "react-icons/pi";

const categories = {
  villa: "ویلا",
  apartment: "آپارتمان",
  store: "مغازه",
  office: "دفتر",
};

const categoriesIcons = {
  villa: <FaHouseChimney />,
  apartment: <MdApartment />,
  store: <IoStorefront />,
  office: <PiOfficeChairFill />,
};

export { categories, categoriesIcons };
