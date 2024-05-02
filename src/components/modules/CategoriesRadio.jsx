import { categories } from "@/constants/profile";

const CategoriesRadio = ({ profile, setProfile }) => {
  const changeHandler = (e) => {
    setProfile((profile) => ({ ...profile, category: e.target.value }));
  };

  console.log(profile.category);

  return (
    <>
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
    </>
  );
};

export default CategoriesRadio;
