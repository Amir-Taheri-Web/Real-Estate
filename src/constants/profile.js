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

const categories = {
  villa: "ویلا",
  apartment: "آپارتمان",
  store: "مغازه",
  office: "دفتر",
};

const categoriesIcons = {};

export { profileStrings, categories, profileFields };
