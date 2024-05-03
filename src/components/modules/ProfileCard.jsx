import { categoriesIcons } from "@/constants/categories";
import { profileIcons } from "@/constants/profile";
import { sp } from "@/utils/convert";
import Link from "next/link";

const ProfileCard = ({
  profile: { title, price, location, category, constructionDate },
}) => {
  const { locationIcon, dateIcon, priceIcon } = profileIcons;

  return (
    <div>
      <span>{categoriesIcons[category]}</span>
      <h4>{title}</h4>
      <p>
        {locationIcon}
        {location}
      </p>
      <p>
        {dateIcon}
        {new Date(constructionDate).toLocaleDateString("fa-IR")}
      </p>
      <p>
        {priceIcon}
        {sp(price)}تومان
      </p>

      <Link href={""}>مشاهده جزئیات...</Link>
    </div>
  );
};

export default ProfileCard;
