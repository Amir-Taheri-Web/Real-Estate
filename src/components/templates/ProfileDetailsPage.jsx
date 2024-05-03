import { categoriesIcons } from "@/constants/categories";
import { e2p, sp } from "@/utils/convert";
import styles from "@/styles/ProfileDetailsPage.module.css";
import ShareButton from "@/modules/ShareButton";
import { profileIcons } from "@/constants/profile";

const ProfileDetailsPage = ({ profile }) => {
  const {
    title,
    description,
    location,
    realEstate,
    phone,
    price,
    constructionDate,
    category,
    amenities,
    rules,
  } = profile;

  const { locationIcon, phoneIcon, priceIcon, realEstateIcon, dateIcon } =
    profileIcons;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>
          {categoriesIcons[category]} {title}
        </h2>

        <div>
          <h3>توضیحات</h3>
          <p>{description}</p>
        </div>

        <div>
          <h3>امکانات رفاهی</h3>
          <ul>
            {amenities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>قوانین</h3>
          <ul>
            {rules.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.details}>
        <p>
          <span>{locationIcon}شهر: </span>
          {location}
        </p>

        <p>
          <span>{realEstateIcon}بنگاه: </span>
          {realEstate}
        </p>

        <p>
          <span>{phoneIcon}شماره تماس: </span>
          {e2p(phone)}
        </p>

        <p>
          <span>{priceIcon}قیمت: </span>
          {sp(price)}
        </p>

        <p>
          <span>{dateIcon}تاریخ ساخت: </span>
          {new Date(constructionDate).toLocaleDateString("fa-IR")}
        </p>

        <ShareButton />
      </div>
    </div>
  );
};

export default ProfileDetailsPage;
