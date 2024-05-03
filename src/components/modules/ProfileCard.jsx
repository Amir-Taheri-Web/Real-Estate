import { categoriesIcons } from "@/constants/categories";
import { profileIcons } from "@/constants/profile";
import { sp } from "@/utils/convert";
import Link from "next/link";
import styles from "@/styles/ProfileCard.module.css";

const ProfileCard = ({
  profile: { title, price, location, category, constructionDate },
}) => {
  const { locationIcon, dateIcon, priceIcon } = profileIcons;

  return (
    <div className={styles.container}>
      <div>
        <span>{categoriesIcons[category]}</span>

        <h4>{title}</h4>
      </div>

      <div>
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
      </div>

      <Link href={""}>مشاهده جزئیات...</Link>
    </div>
  );
};

export default ProfileCard;
