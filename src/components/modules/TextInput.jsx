import { e2p } from "@/utils/convert";
import styles from "@/styles/TextInput.module.css"

const TextInput = ({ placeholder, name, value, changeHandler }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{placeholder}(اجباری):</label>

      {name === "description" && (
        <textarea
          value={e2p(value[name])}
          name={name}
          onChange={changeHandler}
        ></textarea>
      )}

      {name !== "description" && (
        <input
          type="text"
          value={e2p(value[name])}
          name={name}
          onChange={changeHandler}
        />
      )}
    </div>
  );
};

export default TextInput;
