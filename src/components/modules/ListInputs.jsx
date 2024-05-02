import { MdDeleteForever } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";

const ListInputs = ({ type, profile, setProfile }) => {
  const addHandler = () => {
    setProfile((profile) => ({ ...profile, [type]: [...profile[type], ""] }));
  };

  const changeHandler = (e, index) => {
    const newArray = profile[type];
    newArray[index] = e.target.value;

    setProfile((profile) => ({ ...profile, [type]: newArray }));
  };

  const deleteHandler = (index) => {
    const newArray = profile[type];
    newArray.splice(index, 1);

    setProfile((profile) => ({ ...profile, [type]: newArray }));
  };

  return (
    <div>
      <label htmlFor={type}>
        {type === "rules" ? "قوانین" : "امکانات رفاهی"}:
      </label>

      <button type="button" onClick={addHandler}>
        <MdAddCircle />
        افزودن
      </button>

      {profile[type].map((item, index) => (
        <div key={index}>
          <input
            type="text"
            value={item}
            onChange={(e) => changeHandler(e, index)}
          />
          <button type="button" onClick={() => deleteHandler(index)}>
            <MdDeleteForever />
            حذف
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListInputs;
