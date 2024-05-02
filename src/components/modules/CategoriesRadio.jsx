import { categories } from "@/constants/profile";
import styles from "@/styles/CategoriesRadio.module.css";

const CategoriesRadio = ({ profile, setProfile }) => {
  const changeHandler = (e) => {
    setProfile((profile) => ({ ...profile, category: e.target.value }));
  };

  return (
    <div className={styles.container}>
      <label htmlFor="categories">دسته بندی:</label>
      <div>
        {Object.keys(categories).map((item) => (
          <div key={item}>
            <input
              type="radio"
              checked={profile.category === item}
              name="category"
              id={item}
              value={item}
              onChange={changeHandler}
            />
            <label htmlFor={item}>{categories[item]}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesRadio;
