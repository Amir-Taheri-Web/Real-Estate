import { categories } from "@/constants/categories";
import { cities } from "@/constants/cities";
import Profile from "@/models/Profile";
import ProfileCard from "@/modules/ProfileCard";
import SliderComponent from "@/modules/Slider";
import connectDB from "@/utils/connectDB";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/HomePage.module.css";

const HomePage = async () => {
  await connectDB();

  const profiles = await Profile.find().select("-userId");

  return (
    <div className={styles.container}>
      <div className={styles.cities}>
        <h2>شهرهای پر طرفدار</h2>
        <SliderComponent>
          {cities.map((city, index) => (
            <div key={index}>
              <span>{city}</span>
            </div>
          ))}
        </SliderComponent>
      </div>

      <ul className={styles.categories}>
        {Object.keys(categories).map((category, index) => (
          <li key={index}>
            <Link href={`/profiles?category=${category}`}>
              <Image
                src={`/images/${category}.jpg`}
                width={1920}
                height={1080}
                alt={`${category} image`}
              />
              <span>{categories[category]}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.profiles}>
        <SliderComponent>
          {profiles.map((profile) => (
            <div key={profile._id}>
              <ProfileCard profile={profile} />
            </div>
          ))}
        </SliderComponent>
      </div>
    </div>
  );
};

export default HomePage;
