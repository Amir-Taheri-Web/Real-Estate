import { categoriesIcons } from "@/constants/categories";
import { e2p, sp } from "@/utils/convert";
import { RiShareFill } from "react-icons/ri";

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

  return (
    <div>
      <div>
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

      <div>
        <p>
          <span>شهر: </span>
          {location}
        </p>

        <p>
          <span>بنگاه: </span>
          {realEstate}
        </p>

        <p>
          <span>شماره تماس: </span>
          {e2p(phone)}
        </p>

        <p>
          <span>قیمت: </span>
          {sp(price)}
        </p>

        <p>
          <span>تاریخ ساخت: </span>
          {new Date(constructionDate).toLocaleDateString("fa-IR")}
        </p>

        <button type="button">
          <RiShareFill />
          اشتراک گذاری
        </button>
      </div>
    </div>
  );
};

export default ProfileDetailsPage;
